import Link from "next/link";
import React from "react";
import FooterComponent from "../../components/Footer";
import NavbarComponent from "../../components/Navbar";
import prisma from "../../lib/prisma";
import CurriculaComponent from "../../components/CoursesDirectory";

export const getStaticProps = async () => {
  const curricula = await prisma.curriculum.findMany({
    select: {
      id: true,
      title: true,
      course: true,
      description: true,
    },
  });

  return {
    props: { curricula },
  };
};

const CoursesHomePage = ({ curricula }) => {
  return (
    <div>
      <NavbarComponent />
      <section className="text-zinc-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <CurriculaComponent curricula={curricula} />
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};

export default CoursesHomePage;
