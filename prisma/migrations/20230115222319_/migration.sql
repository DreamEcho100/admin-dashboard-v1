/*
  Warnings:

  - You are about to drop the column `categoryName` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `SalesByCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryName` on the `SalesByCategory` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `SalesByCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryName_fkey";

-- DropForeignKey
ALTER TABLE "SalesByCategory" DROP CONSTRAINT "SalesByCategory_categoryName_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "categoryName",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SalesByCategory" DROP CONSTRAINT "SalesByCategory_pkey",
DROP COLUMN "categoryName",
ADD COLUMN     "category" TEXT NOT NULL,
ADD CONSTRAINT "SalesByCategory_pkey" PRIMARY KEY ("overallStatsId", "category");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SalesByCategory" ADD CONSTRAINT "SalesByCategory_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
