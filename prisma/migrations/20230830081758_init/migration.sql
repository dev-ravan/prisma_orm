/*
  Warnings:

  - You are about to drop the `Bikes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Bikes` DROP FOREIGN KEY `Bikes_ownerId_fkey`;

-- DropTable
DROP TABLE `Bikes`;

-- CreateTable
CREATE TABLE `House` (
    `id` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `wifiPass` VARCHAR(191) NULL,
    `ownerId` VARCHAR(191) NOT NULL,
    `buildById` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `House_address_key`(`address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_buildById_fkey` FOREIGN KEY (`buildById`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
