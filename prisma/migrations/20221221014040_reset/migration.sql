/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Curriculum` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "curriculumTitle" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Curriculum_title_key" ON "Curriculum"("title");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_curriculumTitle_fkey" FOREIGN KEY ("curriculumTitle") REFERENCES "Curriculum"("title") ON DELETE SET NULL ON UPDATE CASCADE;
