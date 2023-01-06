import { useState } from "react";
import { FlightSearchForm } from "../components/FlightSearchForm";
import { FlightSearchResult } from "../components/FlightSearchResult";
import { FetchFlightOffers } from "../infra/amadeus";
import { FlightOffer } from "../types/amadeus";

interface State {
  countOfResults: number;
  flightOffers: FlightOffer[];
}

const Flights = () => {
  const [state, update] = useState<State>({
    countOfResults: 0,
    flightOffers: [],
  });

  const handleSubmitFlightSearch = async (params: {
    departureCode: string;
    destinationCode: string;
    departureDate: string;
    numberOfadults: number;
    currencyCode: string;
  }) => {
    const result = await FetchFlightOffers(
      params.departureCode,
      params.destinationCode,
      params.departureDate,
      params.numberOfadults,
      params.currencyCode
    );
    update({
      countOfResults: result.countOfResults,
      flightOffers: result.flightOffers,
    });
  };

  return (
    <>
      <img
        className="rounded-lg shadow-xl"
        src="https://content.skyscnr.com/m/cce15d2addefd0d/original/Japan_Homepage_Hero.png?resize=2000px:1400px&quality=60"
        alt="Woman workcationing on the beach"
      />
      <FlightSearchForm onSubmit={handleSubmitFlightSearch} />
      {state.countOfResults
        ? state.flightOffers.map((flightOffer) => (
            <FlightSearchResult flightOffer={flightOffer} />
          ))
        : null}
    </>
  );
};

export default Flights;
