/*
  Warnings:

  - You are about to drop the column `courseId` on the `Lesson` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_courseId_fkey";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "courseId",
ADD COLUMN     "courseTitle" TEXT;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseTitle_fkey" FOREIGN KEY ("courseTitle") REFERENCES "Course"("title") ON DELETE SET NULL ON UPDATE CASCADE;
