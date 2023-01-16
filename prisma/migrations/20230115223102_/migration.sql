/*
  Warnings:

  - Changed the type of `month` on the `OverallStatsMonthly` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `month` on the `ProductStatMonthly` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Months" AS ENUM ('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');

-- AlterTable
ALTER TABLE "OverallStatsMonthly" DROP COLUMN "month",
ADD COLUMN     "month" "Months" NOT NULL;

-- AlterTable
ALTER TABLE "ProductStatMonthly" DROP COLUMN "month",
ADD COLUMN     "month" "Months" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OverallStatsMonthly_overallStatsId_month_key" ON "OverallStatsMonthly"("overallStatsId", "month");

-- CreateIndex
CREATE UNIQUE INDEX "ProductStatMonthly_productStatId_month_key" ON "ProductStatMonthly"("productStatId", "month");
