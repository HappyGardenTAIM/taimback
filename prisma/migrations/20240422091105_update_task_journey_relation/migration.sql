/*
  Warnings:

  - You are about to drop the `_JourneyToTask` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `journeyId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_JourneyToTask" DROP CONSTRAINT "_JourneyToTask_A_fkey";

-- DropForeignKey
ALTER TABLE "_JourneyToTask" DROP CONSTRAINT "_JourneyToTask_B_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "journeyId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_JourneyToTask";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
