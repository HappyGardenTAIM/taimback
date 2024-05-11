/*
  Warnings:

  - You are about to drop the column `maturity` on the `Flower` table. All the data in the column will be lost.
  - You are about to drop the column `maturity` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `sproutLength` on the `Sprout` table. All the data in the column will be lost.
  - Added the required column `maturity` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flower" DROP COLUMN "maturity";

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "maturity";

-- AlterTable
ALTER TABLE "Plant" ADD COLUMN     "maturity" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sprout" DROP COLUMN "sproutLength";

-- AlterTable
ALTER TABLE "TaskDetail" ADD COLUMN     "subType" "PlantType";
