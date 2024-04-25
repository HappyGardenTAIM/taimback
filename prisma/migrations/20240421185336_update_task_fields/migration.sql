/*
  Warnings:

  - You are about to drop the column `taskType` on the `Task` table. All the data in the column will be lost.
  - Made the column `taskDetailId` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskDetailId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskType",
ALTER COLUMN "status" SET DEFAULT 'COMPLETED',
ALTER COLUMN "taskDetailId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskDetailId_fkey" FOREIGN KEY ("taskDetailId") REFERENCES "TaskDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
