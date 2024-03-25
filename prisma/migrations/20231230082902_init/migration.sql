/*
  Warnings:

  - Added the required column `id_phone` to the `BranchesEN` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_phone` to the `BranchesRU` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_phone` to the `BranchesUZ` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BranchesEN" DROP CONSTRAINT "BranchesEN_id_branches_fkey";

-- DropForeignKey
ALTER TABLE "BranchesRU" DROP CONSTRAINT "BranchesRU_id_branches_fkey";

-- DropForeignKey
ALTER TABLE "BranchesUZ" DROP CONSTRAINT "BranchesUZ_id_branches_fkey";

-- AlterTable
ALTER TABLE "BranchesEN" ADD COLUMN     "id_phone" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "BranchesRU" ADD COLUMN     "id_phone" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "BranchesUZ" ADD COLUMN     "id_phone" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BranchesRU" ADD CONSTRAINT "BranchesRU_id_phone_fkey" FOREIGN KEY ("id_phone") REFERENCES "PhoneBranche"("id_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchesUZ" ADD CONSTRAINT "BranchesUZ_id_phone_fkey" FOREIGN KEY ("id_phone") REFERENCES "PhoneBranche"("id_phone") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BranchesEN" ADD CONSTRAINT "BranchesEN_id_phone_fkey" FOREIGN KEY ("id_phone") REFERENCES "PhoneBranche"("id_phone") ON DELETE RESTRICT ON UPDATE CASCADE;
