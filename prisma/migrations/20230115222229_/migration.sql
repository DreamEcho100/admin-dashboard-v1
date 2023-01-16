/*
  Warnings:

  - The primary key for the `OverallStats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OverallStatsDaily` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `month` on the `OverallStatsDaily` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `OverallStatsDaily` table. All the data in the column will be lost.
  - The primary key for the `OverallStatsMonthly` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `year` on the `OverallStatsMonthly` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `ProductStat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProductStatDaily` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `month` on the `ProductStatDaily` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `ProductStatDaily` table. All the data in the column will be lost.
  - The primary key for the `ProductStatMonthly` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `year` on the `ProductStatMonthly` table. All the data in the column will be lost.
  - The primary key for the `SalesByCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `SalesByCategory` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `SalesByCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[overallStatsId,day]` on the table `OverallStatsDaily` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[overallStatsId,month]` on the table `OverallStatsMonthly` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productId,year]` on the table `ProductStat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productStatId,day]` on the table `ProductStatDaily` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productStatId,month]` on the table `ProductStatMonthly` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `OverallStats` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `OverallStatsDaily` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `overallStatsId` to the `OverallStatsDaily` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `OverallStatsMonthly` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `overallStatsId` to the `OverallStatsMonthly` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `ProductStat` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `ProductStatDaily` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `productStatId` to the `ProductStatDaily` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `ProductStatMonthly` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `productStatId` to the `ProductStatMonthly` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `SalesByCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overallStatsId` to the `SalesByCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OverallStatsDaily" DROP CONSTRAINT "OverallStatsDaily_month_year_fkey";

-- DropForeignKey
ALTER TABLE "OverallStatsMonthly" DROP CONSTRAINT "OverallStatsMonthly_year_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_fkey";

-- DropForeignKey
ALTER TABLE "ProductStatDaily" DROP CONSTRAINT "ProductStatDaily_month_year_fkey";

-- DropForeignKey
ALTER TABLE "ProductStatMonthly" DROP CONSTRAINT "ProductStatMonthly_year_fkey";

-- DropForeignKey
ALTER TABLE "SalesByCategory" DROP CONSTRAINT "SalesByCategory_category_fkey";

-- DropForeignKey
ALTER TABLE "SalesByCategory" DROP CONSTRAINT "SalesByCategory_year_fkey";

-- DropIndex
DROP INDEX "ProductStat_productId_key";

-- AlterTable
ALTER TABLE "OverallStats" DROP CONSTRAINT "OverallStats_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD CONSTRAINT "OverallStats_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OverallStatsDaily" DROP CONSTRAINT "OverallStatsDaily_pkey",
DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "overallStatsId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD CONSTRAINT "OverallStatsDaily_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OverallStatsMonthly" DROP CONSTRAINT "OverallStatsMonthly_pkey",
DROP COLUMN "year",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "overallStatsId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD CONSTRAINT "OverallStatsMonthly_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "category",
ADD COLUMN     "categoryName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProductStat" DROP CONSTRAINT "ProductStat_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD CONSTRAINT "ProductStat_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductStatDaily" DROP CONSTRAINT "ProductStatDaily_pkey",
DROP COLUMN "month",
DROP COLUMN "year",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "productStatId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD CONSTRAINT "ProductStatDaily_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ProductStatMonthly" DROP CONSTRAINT "ProductStatMonthly_pkey",
DROP COLUMN "year",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "productStatId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD CONSTRAINT "ProductStatMonthly_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SalesByCategory" DROP CONSTRAINT "SalesByCategory_pkey",
DROP COLUMN "category",
DROP COLUMN "year",
ADD COLUMN     "categoryName" TEXT NOT NULL,
ADD COLUMN     "overallStatsId" TEXT NOT NULL,
ADD CONSTRAINT "SalesByCategory_pkey" PRIMARY KEY ("overallStatsId", "categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "OverallStatsDaily_overallStatsId_day_key" ON "OverallStatsDaily"("overallStatsId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "OverallStatsMonthly_overallStatsId_month_key" ON "OverallStatsMonthly"("overallStatsId", "month");

-- CreateIndex
CREATE UNIQUE INDEX "ProductStat_productId_year_key" ON "ProductStat"("productId", "year");

-- CreateIndex
CREATE UNIQUE INDEX "ProductStatDaily_productStatId_day_key" ON "ProductStatDaily"("productStatId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "ProductStatMonthly_productStatId_month_key" ON "ProductStatMonthly"("productStatId", "month");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStatMonthly" ADD CONSTRAINT "ProductStatMonthly_productStatId_fkey" FOREIGN KEY ("productStatId") REFERENCES "ProductStat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStatDaily" ADD CONSTRAINT "ProductStatDaily_productStatId_fkey" FOREIGN KEY ("productStatId") REFERENCES "ProductStat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OverallStatsMonthly" ADD CONSTRAINT "OverallStatsMonthly_overallStatsId_fkey" FOREIGN KEY ("overallStatsId") REFERENCES "OverallStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OverallStatsDaily" ADD CONSTRAINT "OverallStatsDaily_overallStatsId_fkey" FOREIGN KEY ("overallStatsId") REFERENCES "OverallStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesByCategory" ADD CONSTRAINT "SalesByCategory_overallStatsId_fkey" FOREIGN KEY ("overallStatsId") REFERENCES "OverallStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesByCategory" ADD CONSTRAINT "SalesByCategory_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
