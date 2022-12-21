/*
  Warnings:

  - You are about to drop the column `courseTitle` on the `Lesson` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_courseTitle_fkey";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "courseTitle",
ADD COLUMN     "courseId" TEXT;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
