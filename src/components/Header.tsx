import React from "react";

export const Header = () => {
  const { pathname } = window.location;

  const selectedTabStyle =
    "block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white";

  const unSelectedTabStyle =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-black lg:p-0 dark:text-gray-400  lg:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black lg:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/home" className="flex items-center">
            <svg
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M3.691 10h6.309l-3-7h2l7 7h5c1.322-.007 3 1.002 3 2s-1.69 1.993-3 2h-5l-7 7h-2l3-7h-6.309l-2.292 2h-1.399l1.491-4-1.491-4h1.399l2.292 2" />
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Travel App
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="/login"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/flights"
                  aria-current="page"
                  className={
                    pathname === "/flights"
                      ? selectedTabStyle
                      : unSelectedTabStyle
                  }
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  href="/hotels"
                  className={
                    pathname === "/hotels"
                      ? selectedTabStyle
                      : unSelectedTabStyle
                  }
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  href="/car_rentals"
                  className={
                    pathname === "/car_rentals"
                      ? selectedTabStyle
                      : unSelectedTabStyle
                  }
                >
                  Car Rentals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
