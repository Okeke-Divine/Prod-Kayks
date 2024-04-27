-- DropIndex
DROP INDEX `Beat_name_genreId_desc_bpm_key_price_idx` ON `beat`;

-- CreateIndex
CREATE INDEX `Beat_name_idx` ON `Beat`(`name`);

-- CreateIndex
CREATE INDEX `Beat_genreId_idx` ON `Beat`(`genreId`);

-- CreateIndex
CREATE INDEX `Beat_desc_idx` ON `Beat`(`desc`);

-- CreateIndex
CREATE INDEX `Beat_bpm_idx` ON `Beat`(`bpm`);

-- CreateIndex
CREATE INDEX `Beat_key_idx` ON `Beat`(`key`);

-- CreateIndex
CREATE INDEX `Beat_price_idx` ON `Beat`(`price`);
