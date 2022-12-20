import React from "react";
import { FaUser } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

function SidebarComponent() {
  const router = useRouter();
  console.log(router.query);

  const user = {
    firstName: "Tom",
    lastName: "Smith",
    email: "tomsmith@email.com",
  };

  return (
    <>
      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <button
          // @click="sidenav = true"
          className="p-2 border-2 bg-zinc-300 rounded-sm border-zinc-400 shadow-lg text-zinc-500 focus:bg-zinc-500 focus:outline-none focus:text-white absolute top-15 left-0 md:hidden"
        >
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div
          id="sidebar"
          className="bg-white h-screen md:block shadow-xl  w-30 md:w-60 lg:w-60 hidden transition-transform duration-300 ease-in-out dark:bg-dark-300 dark:text-white "
          x-show="sidenav"
          // @click.away="sidenav = false"
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <div className="border-b-2 w-full">
              <h1 className="hidden md:block text-sm md:text-xl text-center font-urbanist mb-2 text-teal-600">
                Dashboard
              </h1>
            </div>
            <div
              id="profile"
              className="flex text-center flex-col justify-center items-center space-y-3 border-zinc-50 border-b-2"
            >
              <Link href="/settings">
                <div className="bg-zinc-100 h-24 w-24 flex justify-center items-center rounded-full hover:bg-teal-100">
                  <FaUser className="items-center text-5xl text-zinc-600 hover:text-teal-500" />
                </div>
              </Link>
              {user ? (
                <div>
                  <h2 className="uppercase font-medium text-xs md:text-sm text-center text-teal-900 dark:text-zinc-300">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-xs text-zinc-600 dark:text-zinc-500 text-center mb-2">
                    {user.email}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="my-6">
            <div id="courses" className="flex flex-col space-y-2">
              <Link
                href="/dashboard"
                className="flex flex-row text-sm mx-auto font-medium text-zinc-700 bg-zinc-100 dark:text-zinc-400 py-2 px-2 hover:bg-teal-600 hover:text-white w-4/5 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="w-6 h-6 fill-current inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="">My Courses</span>
              </Link>

              <Link
                href="/orderHistory"
                className="flex flex-row text-sm mx-auto font-medium text-zinc-700 bg-zinc-100 dark:text-zinc-400 py-2 px-2 hover:bg-teal-600 hover:text-white w-4/5 rounded-md transition duration-150 ease-in-out"
              >
                <FaReceipt className="mx-1 flex justify-center items-center" />
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>

                <span className="">Order History</span>
              </Link>
              <Link
                href="/settings"
                className="text-sm mx-auto font-medium text-zinc-700 bg-zinc-100 dark:text-zinc-400 py-2 px-2 hover:bg-teal-600 hover:text-white w-4/5 rounded-md transition duration-150 ease-in-out"
              >
                <FaCog className="w-5 h-5 fill-current inline-block" />

                <span className=""> Settings</span>
              </Link>
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarComponent;
