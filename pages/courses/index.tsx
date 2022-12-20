import Link from "next/link";
import React from "react";

const CoursesHomePage = () => {
  const courses = [
    {
      id: 1,
      name: "Japanese Fundamentals",
      path: "japanese_fundamentals",
    },
    {
      id: 2,
      name: "JLPT: N5",
      path: "jlpt_n5",
    },
  ];
  return (
    <div>
      <h1>Courses Home Page</h1>
      <ul>
        {courses.map((course) => (
          <li>
            <Link
              href={{
                pathname: "courses/[path]",
                query: { path: course.path },
              }}
            >
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesHomePage;
