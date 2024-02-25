-- AlterTable
ALTER TABLE "Journey" ALTER COLUMN "phase" SET DEFAULT 'PREP';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;
