/*
  Warnings:

  - A unique constraint covering the columns `[genreId,name]` on the table `Beat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX `Beat_name_genreId_desc_bpm_key_price_idx` ON `Beat`(`name`, `genreId`, `desc`, `bpm`, `key`, `price`);

-- CreateIndex
CREATE UNIQUE INDEX `Beat_genreId_name_key` ON `Beat`(`genreId`, `name`);
