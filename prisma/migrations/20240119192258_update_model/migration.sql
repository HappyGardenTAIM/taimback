/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phase` to the `Journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantId` to the `Journey` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JourneyStatus" AS ENUM ('ACTIVE', 'FINISHED', 'ABANDONED');

-- CreateEnum
CREATE TYPE "Phase" AS ENUM ('PREP', 'SOAKING', 'GROWING', 'HARVESTING');

-- CreateEnum
CREATE TYPE "PlantType" AS ENUM ('SPROUT', 'FOOD', 'FLOWER');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Light" AS ENUM ('FULL_SUN', 'PARTIAL_SUN', 'SHADE', 'INDIRECT_LIGHT', 'LOW_LIGHT');

-- CreateEnum
CREATE TYPE "TaskType" AS ENUM ('SOAK', 'RINSE', 'WATER', 'FERTILIZE', 'PRUNE', 'HARVEST', 'CHECK');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('PENDING', 'COMPLETED', 'SKIPPED');

-- AlterTable
ALTER TABLE "Journey" ADD COLUMN     "phase" "Phase" NOT NULL,
ADD COLUMN     "plantId" INTEGER NOT NULL,
ADD COLUMN     "status" "JourneyStatus" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "Plant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "minGrowthTime" INTEGER NOT NULL,
    "maxGrowthTime" INTEGER NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "maintenance" TEXT NOT NULL,
    "type" "PlantType" NOT NULL,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sprout" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "sproutLength" INTEGER NOT NULL,
    "usage" TEXT,
    "benefits" TEXT,

    CONSTRAINT "Sprout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "light" "Light" NOT NULL,
    "watering" INTEGER NOT NULL,
    "harvesting" INTEGER,
    "pruning" INTEGER,
    "maturity" TEXT NOT NULL,
    "usage" TEXT,
    "benefits" TEXT,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flower" (
    "id" SERIAL NOT NULL,
    "plantId" INTEGER NOT NULL,
    "light" "Light" NOT NULL,
    "watering" INTEGER NOT NULL,
    "pruning" INTEGER,
    "maturity" TEXT NOT NULL,
    "appearance" TEXT NOT NULL,
    "usage" TEXT,

    CONSTRAINT "Flower_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "taskType" "TaskType" NOT NULL,
    "status" "TaskStatus" NOT NULL,
    "lastDone" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JourneyToTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Plant_name_key" ON "Plant"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sprout_plantId_key" ON "Sprout"("plantId");

-- CreateIndex
CREATE UNIQUE INDEX "Food_plantId_key" ON "Food"("plantId");

-- CreateIndex
CREATE UNIQUE INDEX "Flower_plantId_key" ON "Flower"("plantId");

-- CreateIndex
CREATE UNIQUE INDEX "_JourneyToTask_AB_unique" ON "_JourneyToTask"("A", "B");

-- CreateIndex
CREATE INDEX "_JourneyToTask_B_index" ON "_JourneyToTask"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Journey" ADD CONSTRAINT "Journey_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sprout" ADD CONSTRAINT "Sprout_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flower" ADD CONSTRAINT "Flower_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JourneyToTask" ADD CONSTRAINT "_JourneyToTask_A_fkey" FOREIGN KEY ("A") REFERENCES "Journey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JourneyToTask" ADD CONSTRAINT "_JourneyToTask_B_fkey" FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
