/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "stripeDataId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curriculum" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Curriculum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "courseId" TEXT,
    "lessonOrderId" TEXT NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LessonOrder" (
    "id" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "knowledgePieceOrder" TEXT[],

    CONSTRAINT "LessonOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KnowledgePiece" (
    "id" TEXT NOT NULL,

    CONSTRAINT "KnowledgePiece_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentPiece" (
    "id" TEXT NOT NULL,
    "content" TEXT,
    "knowledgePieceId" TEXT NOT NULL,

    CONSTRAINT "ContentPiece_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "id" TEXT NOT NULL,
    "knowledgePieceId" TEXT NOT NULL,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PiecesForLessons" (
    "lessonId" TEXT NOT NULL,
    "knowledgePieceId" TEXT NOT NULL,

    CONSTRAINT "PiecesForLessons_pkey" PRIMARY KEY ("lessonId","knowledgePieceId")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurriculumTags" (
    "curriculumId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "CurriculumTags_pkey" PRIMARY KEY ("curriculumId","tagId")
);

-- CreateTable
CREATE TABLE "StripeData" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StripeData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LessonOrder_lessonId_key" ON "LessonOrder"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "ContentPiece_knowledgePieceId_key" ON "ContentPiece"("knowledgePieceId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_stripeDataId_fkey" FOREIGN KEY ("stripeDataId") REFERENCES "StripeData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonOrder" ADD CONSTRAINT "LessonOrder_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentPiece" ADD CONSTRAINT "ContentPiece_knowledgePieceId_fkey" FOREIGN KEY ("knowledgePieceId") REFERENCES "KnowledgePiece"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_knowledgePieceId_fkey" FOREIGN KEY ("knowledgePieceId") REFERENCES "KnowledgePiece"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PiecesForLessons" ADD CONSTRAINT "PiecesForLessons_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PiecesForLessons" ADD CONSTRAINT "PiecesForLessons_knowledgePieceId_fkey" FOREIGN KEY ("knowledgePieceId") REFERENCES "KnowledgePiece"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CurriculumTags" ADD CONSTRAINT "CurriculumTags_curriculumId_fkey" FOREIGN KEY ("curriculumId") REFERENCES "Curriculum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CurriculumTags" ADD CONSTRAINT "CurriculumTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
