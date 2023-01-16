/*
  Warnings:

  - You are about to drop the `AffiliateSales` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `AffiliateStat` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AffiliateSales" DROP CONSTRAINT "AffiliateSales_affiliateStatId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_affiliateSalesId_fkey";

-- AlterTable
ALTER TABLE "AffiliateStat" ADD COLUMN     "affiliateSalesCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "AffiliateSales";

-- CreateTable
CREATE TABLE "AffiliateSale" (
    "id" TEXT NOT NULL,
    "affiliateStatId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AffiliateSale_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AffiliateStat_userId_key" ON "AffiliateStat"("userId");

-- AddForeignKey
ALTER TABLE "AffiliateSale" ADD CONSTRAINT "AffiliateSale_affiliateStatId_fkey" FOREIGN KEY ("affiliateStatId") REFERENCES "AffiliateStat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_affiliateSalesId_fkey" FOREIGN KEY ("affiliateSalesId") REFERENCES "AffiliateSale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
