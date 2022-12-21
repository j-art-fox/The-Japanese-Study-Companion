/*
  Warnings:

  - You are about to drop the column `curriculumTitle` on the `Course` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_curriculumTitle_fkey";

-- DropIndex
DROP INDEX "Curriculum_title_key";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "curriculumTitle";
