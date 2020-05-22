 CREATE DATABASE IF NOT EXISTS `bugFree`;

USE `bugFree`;

CREATE TABLE IF NOT EXISTS `users` (
	`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`fullName` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`birthDate` datetime NOT NULL,
	`createdAt` timestamp NULL DEFAULT NULL,
	`updatedAt` timestamp NULL DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `reviews` (
    `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `movieId` varchar(50) NULL DEFAULT NULL,
    `userId` int(11) UNSIGNED NULL DEFAULT NULL,
    `reviewText` varchar(255) NOT NULL,
    `score` decimal(3,1) NULL DEFAULT NULL,
    `createdAt` timestamp NULL DEFAULT NULL,
    `updatedAt` timestamp NULL DEFAULT NULL,
    FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `users` (`fullName`, `email`, `password`, `birthDate`) 
VALUES 
  ('Jon Doe', 'jondoe@email.com', '123abc', '2010-03-25'),
  ('Jane Doe', 'janedoe@email.com', '123abc', '2010-03-25'),
  ('Jon Snow', 'jonsnow@email.com', '123abc', '2010-03-25');

INSERT INTO `reviews` (`movieId`, `userId`, `reviewText`, `score`) 
VALUES 
  (60625, 1, 'película muy buena', 10),
  (70594, 2, 'película regular', 6.5),
  (34567, 2, 'película muy mala', 0);