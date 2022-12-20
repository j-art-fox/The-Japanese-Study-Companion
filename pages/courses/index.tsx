import Link from "next/link";
import React from "react";

import prisma from '../../lib/prisma';

export const getStaticProps = async () => {
  const courses = await prisma.course.findMany({
    select: {
      title: true,
      description: true,
      id: true,
    }
  });
  return {
    props: { courses },
  };
};

const CoursesHomePage = ({ courses }) => {
  return (
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
            <span className="text-2xl text-green-500">{course.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesHomePage;
