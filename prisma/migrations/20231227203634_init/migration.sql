/*
  Warnings:

  - Added the required column `description` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `properties` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `properties` VARCHAR(191) NOT NULL,
    MODIFY `birthDate` DATETIME(3) NULL,
    MODIFY `adress` VARCHAR(191) NULL,
    MODIFY `houseN` INTEGER NULL,
    MODIFY `city` VARCHAR(191) NULL;
