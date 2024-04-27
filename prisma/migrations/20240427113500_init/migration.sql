-- CreateTable
CREATE TABLE `email_list` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Beat` (
    `id` VARCHAR(191) NOT NULL,
    `genreId` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NULL,
    `thumbnail` VARCHAR(191) NULL,
    `sold` BOOLEAN NULL DEFAULT false,
    `code` INTEGER NOT NULL,
    `tags` VARCHAR(191) NULL,
    `bpm` INTEGER NULL,
    `key` VARCHAR(191) NULL,
    `price` INTEGER NULL,
    `mp3_url` VARCHAR(191) NULL,
    `artist` VARCHAR(191) NULL,
    `song` VARCHAR(191) NULL,
    `contract` VARCHAR(191) NULL,

    UNIQUE INDEX `Beat_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `thumbnail_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
