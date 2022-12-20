import { FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";

export default function HeroComponent() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const handleLogIn = () => {
    setLoggedIn(!isLoggedIn);
  };

  if (isLoggedIn) {
    return (
      <div className="container flex flex-col">
        {/* Hero */}
        <section className="custom-hero-image-2 flex flex-col justify-start items-center text-center h-[65vh] w-screen text-stone-100 font-bold bg-slate-300 p-5">
          <h1 className="font-urbanist uppercase md:text-6xl tiny:text-4xl mt-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            おかえりなさい
          </h1>
          <h2 className="font-urbanist uppercase md:text-4xl tiny:text-2xl mt-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            Welcome Back
          </h2>
        </section>
      </div>
    );
  } else {
    return (
      <div className="container flex flex-col">
        {/* Hero */}
        <section className="custom-hero-image flex flex-col justify-start items-center text-center h-[65vh] w-screen text-stone-700 font-bold bg-slate-300 p-5">
          <h1 className="font-urbanist uppercase text-5xl mt-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            Your gateway to Japanese
          </h1>
          <p className="font-roboto font-light py-4 w-3/4">
            Making acquisition of Japanese faster, easier, interactive, and
            entertaining. Sign up for free and start learning with us today.
          </p>
          <div className="my-5">
            <button className="text-2xl hover:scale-105 p-4 rounded-lg dark:text-white bg-teal-600 drop-shadow-lg hover:drop-shadow-xl text-white transition-all ease-in-out duration-300">
              <Link className="flex justify-center items-center" href="/signup">
                Sign Up <FaChevronRight className="ml-2" />
              </Link>
            </button>
          </div>
        </section>
      </div>
    );
  }
}
