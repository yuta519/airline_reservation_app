import { FlightOffer } from "../types/amadeus";

type Props = {
  flightOffer: FlightOffer;
};

export const FlightSearchResult = ({ flightOffer }: Props) => {
  return (
    <div className="mt-5 flex justify-center" key={flightOffer.id}>
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        {/* <div className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg">
          <h5 className="pt-10 pl-5 text-gray-900 text-xl font-medium mb-2">
            {flightOffer.id}
          </h5>
        </div> */}
        <div className="p-6 flex flex-col justify-start w-96">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {flightOffer.price} ({flightOffer.currency})
          </h5>
          <div>
            <p className="text-gray-700 text-base mb-4">
              {flightOffer.oneWay ? "Oneway Tiecket" : "Round Trip Ticket"}
            </p>
          </div>
          <div>
            <p className="text-gray-700 text-base mb-4">
              Available until: {flightOffer.lastTicketingDate}
            </p>
          </div>

          {/* <p className="text-gray-600 text-xs">Last updated 3 mins ago</p> */}
        </div>
      </div>
    </div>
  );
};
