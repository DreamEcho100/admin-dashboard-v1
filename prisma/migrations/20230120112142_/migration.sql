/*
  Warnings:

  - You are about to drop the column `affiliateSalesId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the `AffiliateSale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AffiliateSale" DROP CONSTRAINT "AffiliateSale_affiliateStatId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_affiliateSalesId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "affiliateSalesId",
ADD COLUMN     "affiliateStatId" TEXT;

-- DropTable
DROP TABLE "AffiliateSale";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_affiliateStatId_fkey" FOREIGN KEY ("affiliateStatId") REFERENCES "AffiliateStat"("id") ON DELETE SET NULL ON UPDATE CASCADE;
