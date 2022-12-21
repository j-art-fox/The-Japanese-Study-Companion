import Link from "next/link";
import React from "react";
import FooterComponent from "../../components/Footer";
import NavbarComponent from "../../components/Navbar";
import prisma from "../../lib/prisma";

export const getStaticProps = async () => {
  const curricula = await prisma.curriculum.findMany({
    select: {
      title: true,
    },
  });

  const courses = await prisma.course.findMany({
    select: {
      title: true,
      description: true,
      id: true,
    },
  });
  return {
    props: { curricula, courses },
  };
};

const CoursesHomePage = ({ curricula, courses }) => {
  return (
    <div>
      <NavbarComponent />
      <section className="text-zinc-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {curricula.map((i) => (
            <div className="flex flex-wrap w-full mb-20">
              <div className="grid lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-2 text-zinc-900 dark:text-white">
                  {i.title}
                </h1>
                <div className="h-1 justify-self-center w-96 bg-orange-500 rounded"></div>
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-zinc-500 dark:text-dark-500">
                {i.description}
              </p>
            </div>
          ))}
          <div>
            <h1>Courses Home Page</h1>
            <ul>
              {courses.map((course) => (
                <li>
                  <Link
                    className="text-5xl"
                    href={{
                      pathname: `courses/${course.id}`,
                      query: { id: course.id },
                    }}
                  >
                    {course.title}
                  </Link>
                  <br />
                  <span className="text-2xl text-green-500">
                    {course.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};

export default CoursesHomePage;
