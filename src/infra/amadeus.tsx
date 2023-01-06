import axios from "axios";
import { FlightOffer } from "../types/amadeus";

export const authorize = async () => {
  const response = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    `grant_type=client_credentials&client_id=${process.env.REACT_APP_AMADEUS_KEY}&client_secret=${process.env.REACT_APP_AMADEUS_SECRET}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  if (response.data.state !== "approved") return;

  return response.data.access_token;
};

export const fetchFlightPrice = async () => {
  const accessToken = await authorize();

  const response = await axios.get(
    "https://test.api.amadeus.com/v1/shopping/flight-destinations",
    {
      params: {
        origin: "PAR",
        maxPrice: "200",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const FetchFlightOffers = async (
  departureCode: string,
  destinationCode: string,
  departureDate: string,
  adults: number,
  currencyCode: string
) => {
  const accessToken = await authorize();
  const response = await axios.get(
    "https://test.api.amadeus.com/v2/shopping/flight-offers",
    {
      params: {
        originLocationCode: departureCode,
        destinationLocationCode: destinationCode,
        departureDate: departureDate,
        adults: adults,
        currencyCode: currencyCode,
        max: "10",
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/vnd.amadeus+json",
      },
    }
  );
  const flightOffers: FlightOffer[] = response.data.data.map((offer: any) => {
    return {
      id: offer.id,
      lastTicketingDate: offer.lastTicketingDate,
      oneWay: offer.oneWay,
      currency: offer.price.currency,
      price: offer.price.total,
    };
  });
  return {
    countOfResults: response.data.meta.count,
    flightOffers: flightOffers,
  };
};
