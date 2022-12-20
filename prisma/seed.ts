import { PrismaClient } from "@prisma/client";
import curriculumData from "./curriculumData";
import courseData from "./courseData";
import lessonData from "./lessonData";

const prisma = new PrismaClient();

async function seedCurricula() {
  const data = curriculumData;
  const clearCurriculum = await prisma.curriculum.deleteMany();
  const createCurriculum = await prisma.curriculum.createMany({ data });
  console.log("curricula seeded");
}
async function seedCourses() {
  const data = courseData;
  const clearCourse = await prisma.course.deleteMany();
  const createCourse = await prisma.course.createMany({ data });
  console.log("courses seeded");
}
async function seedLessons() {
  const data = lessonData;
  const clearLesson = await prisma.lesson.deleteMany();
  const createLesson = await prisma.lesson.createMany({ data });
  console.log("lessons seeded");
}
async function main() {
  seedCurricula();
  seedCourses();
  seedLessons();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
