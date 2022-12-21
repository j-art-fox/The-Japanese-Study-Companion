import React from "react";

export default function CurriculaComponent({ curricula }) {
  for (let index = 0; index < curricula.length; index++) {
    let courses = curricula[index].course;
    console.log(courses);
  }
  return (
    <div>
      {curricula.map((curriculum) => (
        <div key="i.id" className="flex flex-wrap w-full mb-20">
          <div className="grid lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-2 text-zinc-900 dark:text-white">
              {curriculum.title}
            </h1>
            <div className="h-1 justify-self-center w-96 bg-orange-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-zinc-500 dark:text-dark-500">
            {curriculum.description}
          </p>
          <div className="mt-2 text-2xl">
            <button
              className={
                // isn5Active?
                "text-zinc-700 bg-orange-100 px-4 scale-110 -pb-1 rounded-t-lg hover:bg-orange-200 mx-1"
                // : "text-white mx-1 bg-orange-200 px-4 -pb-1 rounded-t-lg hover:bg-orange-300"
              }
              // onClick={handlen5Menu}
            >
              <h1>{curriculum.course.title}</h1>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
