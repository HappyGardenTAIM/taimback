/*
  Warnings:

  - You are about to drop the `JourneyTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JourneyTask" DROP CONSTRAINT "JourneyTask_journeyId_fkey";

-- DropForeignKey
ALTER TABLE "JourneyTask" DROP CONSTRAINT "JourneyTask_taskId_fkey";

-- DropTable
DROP TABLE "JourneyTask";

-- CreateTable
CREATE TABLE "_JourneyToTask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JourneyToTask_AB_unique" ON "_JourneyToTask"("A", "B");

-- CreateIndex
CREATE INDEX "_JourneyToTask_B_index" ON "_JourneyToTask"("B");

-- AddForeignKey
ALTER TABLE "_JourneyToTask" ADD CONSTRAINT "_JourneyToTask_A_fkey" FOREIGN KEY ("A") REFERENCES "Journey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JourneyToTask" ADD CONSTRAINT "_JourneyToTask_B_fkey" FOREIGN KEY ("B") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
