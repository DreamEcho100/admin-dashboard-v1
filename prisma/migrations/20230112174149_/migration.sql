/*
  Warnings:

  - You are about to drop the column `affiliateStatId` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `affiliateSalesId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_affiliateStatId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "affiliateStatId",
ADD COLUMN     "affiliateSalesId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AffiliateSales" (
    "id" TEXT NOT NULL,
    "affiliateStatId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AffiliateSales_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AffiliateSales" ADD CONSTRAINT "AffiliateSales_affiliateStatId_fkey" FOREIGN KEY ("affiliateStatId") REFERENCES "AffiliateStat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_affiliateSalesId_fkey" FOREIGN KEY ("affiliateSalesId") REFERENCES "AffiliateSales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
