import { useState } from "react";
import { FlightSearchForm } from "../components/FlightSearchForm";
import { FlightSearchResult } from "../components/FlightSearchResult";
import { FetchFlightOffers } from "../infra/amadeus";
import { FlightOffer } from "../types/amadeus";

interface State {
  countOfResults: number;
  flightOffers: FlightOffer[];
  isSearch: boolean;
}

const Flights = () => {
  const [state, update] = useState<State>({
    countOfResults: 0,
    flightOffers: [],
    isSearch: false,
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
      isSearch: true,
    });
  };

  return (
    <>
      <img
        className="rounded-lg shadow-xl"
        src="https://www.aa.com/content/images/homepage/mobile-hero/en_US/Airplane-2.png"
        alt="Woman workcationing on the beach"
      />
      <FlightSearchForm onSubmit={handleSubmitFlightSearch} />
      {state.isSearch ? (
        <div className="mt-5 flex justify-center text-lg font-bold">
          Got {state.countOfResults} results
        </div>
      ) : null}
      {state.countOfResults
        ? state.flightOffers.map((flightOffer) => (
            <FlightSearchResult flightOffer={flightOffer} />
          ))
        : null}
    </>
  );
};

export default Flights;
