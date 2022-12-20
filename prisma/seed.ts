import { PrismaClient } from "@prisma/client";
import curriculumData from "./curriculumData";

const prisma = new PrismaClient();

async function seedCurricula() {
  const data = curriculumData;
  const clearCurriculum = await prisma.curriculum.deleteMany();
  const createCurriculum = await prisma.curriculum.createMany({ data });
  console.log("curriculum seeded");
}
async function seedCourses() {
  const data = curriculumData;
  const clearCurriculum = await prisma.curriculum.deleteMany();
  const createCurriculum = await prisma.curriculum.createMany({ data });
  console.log("curriculum seeded");
}
async function main() {
  seedCurricula();
  seedCourses();
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
