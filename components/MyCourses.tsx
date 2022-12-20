import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
const logo = "test logo";

function MyCoursesComponent() {
  const user = {
    firstName: "Tom",
    lastName: "Smith",
    email: "tomsmith@email.com",
  };
  return (
    <>
      <div className="h-display">
        <section className="text-gray-600 body-font">
          {user ? (
            <div className="container p-24">
              <div className="flex justify-center w-full pb-10 border-b-4 items-centerflex-row">
                <img className="my-auto" src={logo} />
                <h1 className="sm:text-3xl text-2xl my-auto mx-auto font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                  &nbsp;Welcome back {user.firstName}!
                </h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base font-roboto">
                  <span className="font-bold">Pro tip: </span>The key to success
                  in studies is <span className="italic">consistency.</span> Try
                  to study at the same time each day and each week. Then you're
                  studying will become a regular part of your routien and life.
                </p>
              </div>
              <div></div>
            </div>
          ) : null}
        </section>
        <section>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="container grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-2 gap-5 p-2 w-2/3 rounded-lg bg-zinc-100">
              <div className="bg-white p-2 rounded-lg dark:bg-dark-400">
                <Link href="" className="relative">
                  <img
                    alt={logo}
                    src={logo}
                    className="border-4 border-zinc-300 h-24 w-24 rounded mx-auto object-cover mb-6 opacity-100 hover:opacity-80 hover:text-teal-500"
                  />
                </Link>
                <div className="px-2 py-2 relative flex flex-col z-10 w-full border-4 border-zinc-200 bg-white opacity-100 hover:opacity-100 dark:bg-dark-300 dark:text-dark-500">
                  <h2 className="tracking-widest uppercase text-md title-font font-medium text-teal-700 mb-1 dark:text-teal-600">
                    Sample Course
                  </h2>
                  <Link
                    href="/inDevelopment"
                    className="cursor-pointer opacity-70 hover:opacity-100 flex flex-row justify-center"
                  >
                    <p>Resume</p>
                    <FaChevronRight className="my-auto" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MyCoursesComponent;
