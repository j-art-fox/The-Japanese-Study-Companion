import React from "react";
import Sidebar from "../../components/Sidebar";
import Link from "next/link";

const SettingsPage = () => {
  const user = {
    firstName: "Tom",
    lastName: "Smith",
    email: "tomsmith@email.com",
  };
  return (
    <div className="flex">
      <Sidebar />

      <div className="container inset-10 mx-auto mt-24 mb-auto">
        <div className="container">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-zinc-900">Current Account Settings</h2>
            <form className="mt-6 border-t border-zinc-400 pt-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                {user ? (
                  <div className="flex flex-row justify-center">
                    <div className="flex flex-row justify-end">
                      <div className="px-3 mb-6">
                        <label className="uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2">
                          first name:
                        </label>
                        <h1 className="title-font text-lg font-medium dark:text-zinc-300">
                          {user.firstName}
                        </h1>
                      </div>
                      <div className="px-3 mb-6">
                        <label className="uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2">
                          last name:
                        </label>
                        <h1 className="title-font text-lg font-medium dark:text-zinc-300">
                          {user.lastName}
                        </h1>
                      </div>
                      <div className="px-3 mb-6">
                        <label className="uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2">
                          email:
                        </label>
                        <h1 className="title-font text-lg font-medium dark:text-zinc-300">
                          {user.email}
                        </h1>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="personal w-full border-t border-zinc-400 pt-4">
                  <h2 className="text-2xl text-zinc-900 mb-6">Edit/Update:</h2>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label
                      className="block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2"
                      htmlFor="grid-text-1"
                    >
                      email address
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-zinc-700 border border-zinc-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-zinc-500"
                      id="grid-text-1"
                      type="text"
                      placeholder="Enter email"
                      required
                    ></input>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2">
                        first name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-zinc-700 border border-zinc-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-zinc-500"
                        type="text"
                        required
                      ></input>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2">
                        last name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-zinc-700 border border-zinc-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-zinc-500"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6 ">
                    <label className="block uppercase tracking-wide text-zinc-700 text-xs font-bold mb-2">
                      password
                    </label>
                    <Link href="/indevelopment">
                      <button className="appearance-none bg-teal-600 hover:bg-teal-400 text-white px-2 py-1 shadow-sm  rounded-md ">
                        Change Your Password
                      </button>
                    </Link>
                  </div>

                  <div className="flex justify-end">
                    <Link href="/indevelopment">
                      <button
                        className="appearance-none bg-teal-600 hover:bg-teal-400 text-white px-2 py-1 shadow-sm  rounded-md mr-3"
                        type="submit"
                      >
                        Save Changes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
