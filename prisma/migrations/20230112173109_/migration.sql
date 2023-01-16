/*
  Warnings:

  - Changed the type of `cost` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "cost",
ADD COLUMN     "cost" DOUBLE PRECISION NOT NULL;
