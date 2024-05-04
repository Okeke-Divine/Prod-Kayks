-- AlterTable
ALTER TABLE `beat` ADD COLUMN `fall_back_mp3_url` VARCHAR(191) NULL,
    ADD COLUMN `fall_back_thumbnail` VARCHAR(191) NULL,
    ADD COLUMN `free_download` BOOLEAN NULL;
