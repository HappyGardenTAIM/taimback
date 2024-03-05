-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "taskDetailId" INTEGER;

-- CreateTable
CREATE TABLE "TaskDetail" (
    "id" SERIAL NOT NULL,
    "picture" TEXT,
    "description" TEXT NOT NULL,
    "taskType" "TaskType" NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "phase" "Phase" NOT NULL,

    CONSTRAINT "TaskDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlantToTaskDetail" (
    "plantId" INTEGER NOT NULL,
    "taskDetailId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PlantToTaskDetail_pkey" PRIMARY KEY ("plantId","taskDetailId")
);

-- CreateTable
CREATE TABLE "SproutToTaskDetail" (
    "sproutId" INTEGER NOT NULL,
    "taskDetailId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "SproutToTaskDetail_pkey" PRIMARY KEY ("sproutId","taskDetailId")
);

-- CreateTable
CREATE TABLE "FoodToTaskDetail" (
    "foodId" INTEGER NOT NULL,
    "taskDetailId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "FoodToTaskDetail_pkey" PRIMARY KEY ("foodId","taskDetailId")
);

-- CreateTable
CREATE TABLE "FlowerToTaskDetail" (
    "flowerId" INTEGER NOT NULL,
    "taskDetailId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "FlowerToTaskDetail_pkey" PRIMARY KEY ("flowerId","taskDetailId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlantToTaskDetail_plantId_order_key" ON "PlantToTaskDetail"("plantId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "SproutToTaskDetail_sproutId_order_key" ON "SproutToTaskDetail"("sproutId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "FlowerToTaskDetail_flowerId_order_key" ON "FlowerToTaskDetail"("flowerId", "order");

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_taskDetailId_fkey" FOREIGN KEY ("taskDetailId") REFERENCES "TaskDetail"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantToTaskDetail" ADD CONSTRAINT "PlantToTaskDetail_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantToTaskDetail" ADD CONSTRAINT "PlantToTaskDetail_taskDetailId_fkey" FOREIGN KEY ("taskDetailId") REFERENCES "TaskDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SproutToTaskDetail" ADD CONSTRAINT "SproutToTaskDetail_sproutId_fkey" FOREIGN KEY ("sproutId") REFERENCES "Sprout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SproutToTaskDetail" ADD CONSTRAINT "SproutToTaskDetail_taskDetailId_fkey" FOREIGN KEY ("taskDetailId") REFERENCES "TaskDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodToTaskDetail" ADD CONSTRAINT "FoodToTaskDetail_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodToTaskDetail" ADD CONSTRAINT "FoodToTaskDetail_taskDetailId_fkey" FOREIGN KEY ("taskDetailId") REFERENCES "TaskDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowerToTaskDetail" ADD CONSTRAINT "FlowerToTaskDetail_flowerId_fkey" FOREIGN KEY ("flowerId") REFERENCES "Flower"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowerToTaskDetail" ADD CONSTRAINT "FlowerToTaskDetail_taskDetailId_fkey" FOREIGN KEY ("taskDetailId") REFERENCES "TaskDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
