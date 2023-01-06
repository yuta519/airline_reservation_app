import { ChangeEvent, FormEvent, useState } from "react";
import { AirportIataCodes, CurrencyIataCodes } from "../constants/Iata";

type Props = {
  onSubmit: (params: searchCondition) => void;
};

interface searchCondition {
  departureCode: string;
  destinationCode: string;
  departureDate: string;
  numberOfadults: number;
  currencyCode: string;
}

export const FlightSearchForm = ({ onSubmit }: Props) => {
  const [state, update] = useState<searchCondition>({
    departureCode: "",
    destinationCode: "",
    departureDate: "",
    numberOfadults: 0,
    currencyCode: "",
  });

  const setDepartureCode = (event: ChangeEvent<HTMLSelectElement>) =>
    update({ ...state, departureCode: event.target.value });

  const setDestinationCode = (event: ChangeEvent<HTMLSelectElement>) =>
    update({ ...state, destinationCode: event.target.value });

  const setDepartureDate = (event: ChangeEvent<HTMLInputElement>) =>
    update({ ...state, departureDate: event.target.value });

  const setAdults = (event: ChangeEvent<HTMLSelectElement>) =>
    update({ ...state, numberOfadults: Number(event.target.value) });

  const setCurrencyCode = (event: ChangeEvent<HTMLSelectElement>) =>
    update({ ...state, currencyCode: event.target.value });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      departureCode: state.departureCode,
      destinationCode: state.destinationCode,
      departureDate: state.departureDate,
      numberOfadults: state.numberOfadults,
      currencyCode: state.currencyCode,
    });
  };

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              FROM
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                required
                onChange={setDepartureCode}
              >
                <option key="" value="">
                  ---
                </option>
                {Object.keys(AirportIataCodes).map(function (iataCode: string) {
                  const airportName: string = AirportIataCodes[iataCode];
                  return (
                    <option key={iataCode} value={iataCode}>
                      {airportName}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              TO
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                required
                onChange={setDestinationCode}
              >
                <option key="" value="">
                  ---
                </option>

                {Object.keys(AirportIataCodes).map(function (iataCode: string) {
                  const airportName: string = AirportIataCodes[iataCode];
                  return (
                    <option key={iataCode} value={iataCode}>
                      {airportName}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Depart
            </label>
            <div className="relative">
              <div className="flex items-center justify-center">
                <div className="w-full datepicker relative form-floating mb-3 xl:w-96">
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Format: 2023-12-31"
                    value={state.departureDate}
                    required
                    onChange={setDepartureDate}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Adults
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                required
                onChange={setAdults}
              >
                <option key="" value="">
                  ---
                </option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              CURRENCY
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                required
                onChange={setCurrencyCode}
              >
                <option key="" value="">
                  ---
                </option>
                {Object.keys(CurrencyIataCodes).map(function (
                  iataCode: string
                ) {
                  const currency: string = CurrencyIataCodes[iataCode];
                  return (
                    <option key={iataCode} value={iataCode}>
                      {currency}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center m-5">
          <button
            className="py-3 lg:py-3 px-14 lg:px-14 text-white-500 font-bold rounded-3xl bg-blue-400 hover:shadow-teal-md transition-all outline-none text-white"
            type="submit"
          >
            Search Flights
          </button>
        </div>
      </form>
    </>
  );
};
