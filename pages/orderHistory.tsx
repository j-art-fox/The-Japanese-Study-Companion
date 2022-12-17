import React from "react";
import Sidebar from "../components/Sidebar";

function OrderHistory() {
  const user = {
    firstName: "Tom",
    lastName: "Smith",
    email: "tomsmith@email.com",
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-col justify-center mx-auto mt-24 lg:w-2/5 shadow-xl">
        <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-6 bg-zinc-100">
            {user ? (
              <div className="flex flex-row justify-center">
                <h1 className="sm:text-3xl text-2xl my-auto mx-auto font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                  Order History
                </h1>
                <div>
                  <h1 className="title-font text-lg font-medium dark:text-zinc-300">
                    {user.firstName} {user.lastName}
                  </h1>
                  <h2 className="tracking-widest text-xs title-font font-medium dark:text-zinc-500 ">
                    {user.email}
                  </h2>
                </div>
              </div>
            ) : null}
          </div>
          <div className="w-full"></div>
          <div className="flex items-center justify-around flex-wrap"></div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
