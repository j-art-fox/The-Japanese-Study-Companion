import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isActive, setActive] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogIn = () => {
    setLoggedIn(!isLoggedIn);
  };

  const handlenavChange = () => {
    setActive(!isActive);
  };

  const signOut = () => {
    handlenavChange();
    setLoggedIn(false);
  };

  useEffect(() => {
    document.body.classList.add("dark:bg-dark-100");
  }, []);
  function ShowSignInSignOut() {
    if (isLoggedIn) {
      return (
        <div className="custom-hidden-navbar flex flex-row">
          <ul className="flex-row">
            <div className="flex md:order-2">
              <button
                type="button"
                className=" text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-zinc-800 ease-in-out duration-300"
                onClick={() => handleLogIn()}
              >
                Sign out
              </button>
            </div>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="custom-hidden-navbar flex flex-row">
          <ul className="flex-row">
            <div className="flex md:order-2 transition-all">
              <Link href="/login">
                <button
                  type="button"
                  className=" text-white bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus:ring-zinc-800 ease-in-out duration-300"
                >
                  Sign in
                </button>
              </Link>
            </div>
          </ul>
        </div>
      );
    }
  }

  function ShownavNav() {
    if (isLoggedIn) {
      return (
        <li className="custom-hidden-sign">
          <Link
            href="/"
            className="flex flex-row items-center py-2 pl-3 pr-4 text-white hover:font-bold rounded hover:bg-teal-500 md:hover:bg-transparent md:border-0 md:pt-0 md:pl-0 md:pb-2 tiny:pt-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={signOut}
          >
            Sign out
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </li>
      );
    } else {
      return (
        <li className="custom-hidden-sign">
          <Link
            href="/login"
            className="flex flex-row items-center pb-3 pl-3 pr-4 text-white hover:font-bold rounded hover:bg-teal-500 md:hover:bg-transparent md:border-0 md:pb-2 md:pl-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handlenavChange}
          >
            Sign in
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </li>
      );
    }
  }

  return (
    <>
      <header>
        <nav className="bg-teal-600 border-zinc-200 px-2 sm:px-4 py-2.5 dark:drop-shadow-md dark:bg-dark-300">
          <div className=" container flex flex-wrap items-center justify-between mx-auto">
            <Link
              href="/"
              className="flex items-center tiny:ml-4 hover:scale-105 ease-in-out duration-100"
            >
              <div>
                <Image
                  alt="logo"
                  src={require("../public/en_white-8.png")}
                  className="scale-75"
                />
              </div>
              <h1 className="tiny:text-lg sm:text-xl md:text-1xl lg:text-2xl my-auto text-3xl text-white mx-auto font-urbanist">
                The Japanese Study Companion
              </h1>
            </Link>

            {/* MAIN NAV */}
            {/* Mobile Responsive Main nav Button */}
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              onClick={handlenavChange}
              className="inline-flex items-center p-2 ml-3 text-sm text-zinc-100 rounded-lg lg:hidden hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main nav</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {/* END Mobile Responsive Main nav Button */}

            <div className="w-full lg:block lg:w-auto" id="navbar-dropdown">
              <ul
                className={
                  isActive
                    ? "custom-hidden-navbar pl-3 flex items-center flex-col mt-4 border border-zinc-100 rounded-lg bg-teal-600 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-teal-600 dark:bg-dark-300 lg:dark:bg-dark-300 dark:border-zinc-700"
                    : "custom-show-navbar pl-3 flex items-center  flex-col mt-4 border border-zinc-100 rounded-lg bg-teal-500 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-teal-600 dark:bg-dark-300 lg:dark:bg-dark-300 dark:border-zinc-700"
                }
              >
                {/* home button */}
                <li>
                  <Link
                    href="/"
                    className="tiny:pt-2 block pl-3 pr-4 text-white hover:font-bold rounded hover:bg-teal-500 md:hover:bg-transparent md:border-0 md:pt-2 md:pl-0 lg:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    aria-current="page"
                    onClick={handlenavChange}
                  >
                    Home
                  </Link>
                </li>

                {/* Display for Dashboard */}
                {isLoggedIn && (
                  <li>
                    <Link
                      href="/dashboard"
                      className="block pl-3 pr-4 text-white hover:font-bold rounded hover:bg-teal-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      aria-current="page"
                      onClick={handlenavChange}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                {/* Courses Button */}
                <li>
                  <Link
                    href="/courses"
                    className=" block pl-3 pr-4 text-white hover:font-bold hover:bg-teal-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={handlenavChange}
                  >
                    Courses
                  </Link>
                </li>

                {/* About Button */}
                <li>
                  <Link
                    href="/about"
                    className="block pl-3 pr-4 text-white hover:font-bold rounded hover:bg-teal-500 md:hover:bg-transparent md:border-0 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    onClick={handlenavChange}
                  >
                    About
                  </Link>
                </li>
                {ShownavNav()}
                {ShowSignInSignOut()}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
