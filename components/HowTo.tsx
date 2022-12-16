import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export function HowTo({}) {
  return (
    <section className="my-10 flex flex-col justify-center items-center w-screen">
      <div className="my-10">
        <button className="text-3xl hover:scale-105 p-4 rounded-lg text-zinc-700 drop-shadow-lg hover:drop-shadow-xl transition-all ease-in-out duration-300">
          <a
            className="flex justify-center items-center font-urbanist"
            href="/courses"
          >
            Where do I
            <span className="hover:text-teal-600 whitespace-pre">
              &nbsp;start
            </span>
            ?
          </a>
        </button>
      </div>
      <div className="container mx-auto grid lg:grid-cols-3 lg:grid-rows-1 tiny:grid-rows-3 tiny:grid-cols-1">
        <section className="box-border  container my-auto  flex justify-center items-center mx-2 px-1">
          <div className="custom-home-card-1 hover:shadow-lg h-80 p-6 rounded-xl">
            <div className="flex flex-col justify-center w-full md:w-2/3 h-full p-4 text-white transition-all">
              <h3 className="text-3xl font-bold my-1 font">
                What&apos;s my level?
              </h3>
              <p className="text-xl my-1 custom-para font-roboto">
                Want to start studying but aren&apos;t sure where to begin? Take
                our level assessment and try out the recommended courses!
              </p>
              <button className="bg-teal-600 hover:bg-teal-500 w-1/2 p-3 text-white rounded-lg ease-in-out duration-300">
                <Link
                  className="flex justify-center items-center"
                  href="/indevelopment "
                >
                  Take Test
                  <FaChevronRight className="ml-2" />
                </Link>
              </button>
            </div>
          </div>
        </section>
        <section className="box-border  container my-auto flex justify-center items-center mx-2 px-1">
          <div className="custom-home-card-2 hover:shadow-lg  h-80 p-6 rounded-xl w-full">
            <div className="flex flex-col justify-center w-full md:w-2/3 h-full p-4 text-white">
              <h3 className="text-3xl font-bold my-1">Study on the go</h3>
              <p className="text-xl my-1 custom-para font-roboto">
                Take the Japanese study companion where ever you go and study
                anytime!
              </p>
              <div className="flex flex-col transition-all">
                <Link
                  className="my-auto flex flex-row items-center ease-in-out duration-300 hover:text-teal-300 hover:scale-105 font-bold"
                  href="/indevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-teal-300 ">Download</span>&nbsp;on
                  Google Play
                  <FaChevronRight className="ml-2" />
                </Link>
                <Link
                  className="my-auto flex flex-row items-center ease-in-out duration-300 hover:text-teal-300 hover:scale-105 font-bold"
                  href="/indevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-teal-300 ">Download</span>&nbsp;on Apple
                  Store
                  <FaChevronRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="box-border  container my-auto flex justify-center items-center mx-2 px-1">
          <div className="custom-home-card-3 hover:shadow-lg rounded-xl h-80 p-6">
            <div className="flex flex-col justify-center w-full md:w-2/3 h-full p-4 text-white transition-all">
              <h3 className="text-3xl font-bold my-1">Our Courses</h3>
              <p className="text-xl my-1 custom-para font-roboto">
                Whether you&apos;re taking the JLPT or just wanna brush up on
                the Japanese you learned in high school, our course options
                offer something for every level of learners.
              </p>
              <button className="bg-teal-600 hover:bg-teal-500 w-1/2 p-3 text-white rounded-lg ease-in-out duration-300">
                <a className="flex justify-center items-center" href="/About ">
                  Learn More
                  <FaChevronRight className="ml-2" />
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
