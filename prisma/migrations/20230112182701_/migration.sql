-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_affiliateSalesId_fkey";

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "productsCount" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "affiliateSalesId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_affiliateSalesId_fkey" FOREIGN KEY ("affiliateSalesId") REFERENCES "AffiliateSale"("id") ON DELETE SET NULL ON UPDATE CASCADE;
