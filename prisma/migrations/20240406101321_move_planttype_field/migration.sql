/*
  Warnings:

  - You are about to drop the column `type` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `type` to the `Journey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Journey" ADD COLUMN     "type" "PlantType" NOT NULL;

-- AlterTable
ALTER TABLE "Plant" DROP COLUMN "type";
