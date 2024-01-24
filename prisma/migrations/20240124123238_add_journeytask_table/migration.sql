/*
  Warnings:

  - You are about to drop the `_JourneyToTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_JourneyToTask" DROP CONSTRAINT "_JourneyToTask_A_fkey";

-- DropForeignKey
ALTER TABLE "_JourneyToTask" DROP CONSTRAINT "_JourneyToTask_B_fkey";

-- DropTable
DROP TABLE "_JourneyToTask";

-- CreateTable
CREATE TABLE "JourneyTask" (
    "journeyId" INTEGER NOT NULL,
    "taskId" INTEGER NOT NULL,
    "status" "TaskStatus" NOT NULL,
    "lastDone" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JourneyTask_pkey" PRIMARY KEY ("journeyId","taskId")
);

-- AddForeignKey
ALTER TABLE "JourneyTask" ADD CONSTRAINT "JourneyTask_journeyId_fkey" FOREIGN KEY ("journeyId") REFERENCES "Journey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JourneyTask" ADD CONSTRAINT "JourneyTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
