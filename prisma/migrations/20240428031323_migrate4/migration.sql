/*
  Warnings:

  - Made the column `genreId` on table `beat` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `beat` MODIFY `genreId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Beat_tags_idx` ON `Beat`(`tags`);

-- AddForeignKey
ALTER TABLE `Beat` ADD CONSTRAINT `Beat_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
