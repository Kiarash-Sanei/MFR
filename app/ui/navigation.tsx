"use client";
import { useState } from "react";
import Search from "./search";

export default function Navigation({ haveSearch }: { haveSearch: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  const [onSearch, setOnSearch] = useState(false);
  const toggleSearch = () => {
    setOnSearch(!onSearch);
  };

  return (
    <nav className="dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <img
            src="https://www.svgrepo.com/show/403775/letter-m.svg"
            className="h-8"
            alt="Logo"
          />
          <img
            src="https://www.svgrepo.com/show/403769/letter-f.svg"
            className="h-8"
            alt="Logo"
          />
          <img
            src="https://www.svgrepo.com/show/403783/letter-r.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="m-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            My Favorite Repositories
          </span>
        </div>
        {haveSearch && (
          <>
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 ${
                onSearch ? "hidden" : ""
              }`}
              onClick={toggleSearch}
            >
              <img
                src="https://www.svgrepo.com/show/422521/magnifier-search-zoom.svg"
                alt="magnifier"
              />
            </button>
            <Search
              placeholder="Username"
              onSearch={onSearch}
              toggleSearch={toggleSearch}
            />
          </>
        )}
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          onClick={toggleNavBar}
        >
          <img
            src={`${
              isOpen
                ? "https://www.svgrepo.com/show/520676/cross.svg"
                : "https://www.svgrepo.com/show/505933/menu-hamburger.svg"
            }`}
          />
        </button>
        <div
          className={`${isOpen ? "" : "hidden"} w-full`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-wrap justify-center font-medium mt-4 rounded-lg">
            <li>
              <a
                href="/"
                className="block py-2 px-3 dark:text-black-900 dark:hover:text-gray-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about/"
                className="block py-2 px-3 dark:text-black-900 dark:hover:text-gray-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact/"
                className="block py-2 px-3 dark:text-black-900 dark:hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
