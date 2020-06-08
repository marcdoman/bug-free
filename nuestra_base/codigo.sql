 CREATE DATABASE IF NOT EXISTS `bugFree`;

USE `bugFree`;

-- Creación de tablas

CREATE TABLE IF NOT EXISTS `usuarios` (
	`id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`nombre_usuario` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	`password` varchar(255) NOT NULL,
	`fecha_nacimiento` datetime NOT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

CREATE TABLE IF NOT EXISTS `resenas` (
    `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pelicula_id` varchar(50) NULL DEFAULT NULL,
    `usuario_id` int(11) UNSIGNED NULL DEFAULT NULL,
    `texto_resena` varchar(255) NOT NULL,
    `puntaje` decimal(3,1) NULL DEFAULT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Inserción de datos

INSERT INTO `usuarios` (`nombre_usuario`, `email`, `password`, `fecha_nacimiento`) 
VALUES 
  ('Juan Perez', 'juanp@email.com', 'juanp', '2000-03-25'),
  ('Jorge Perez', 'jorgep@email.com', 'jorgep', '2001-03-25'),
  ('Jasmin Perez', 'jasminp@email.com', 'jasminp', '2002-03-25'),
  ('Julia Perez', 'juliap@email.com', 'juliap', '2003-03-25'),
  ('Julian Perez', 'julianp@email.com', 'julianp', '2004-03-25'),
  ('Mariano Merez', 'marianom@email.com', 'marianom', '2004-03-25'),
  ('Maria Merez', 'mariam@email.com', 'mariam', '2004-03-25');



INSERT INTO `resenas` (`pelicula_id`, `usuario_id`, `texto_resena`, `puntaje`) 
VALUES 
  (60625, 1, 'película muy buena', 10),
  (70594, 2, 'película regular', 6.5),
  (34567, 3, 'película ok', 8),
  (34568, 4, 'película buenisima', 9),
  (34569, 5, 'película muy mala', 0),
  (34567, 6, 'película muy mala', 1),
  (34567, 7, 'película tremenda', 9),
  (60625, 1, 'película muy buena', 8),
  (34567, 2, 'película meh', 5),
  (34568, 3, 'película tremenda', 9),
  (34569, 4, 'no diria que no', 8),
  (60625, 5, 'sin palabras', 9),
  (70594, 6, 'pelicula buenisima', 9),
  (60625, 7, 'wow', 9),
  (70594, 1, 'buenisima', 9),
  (60625, 2, 'malisima', 1),
  (70594, 3, 'buenisima', 9),
  (60625, 4, 'malisima', 2),
  (60625, 5, 'buenisima', 9),
  (70594, 6, 'malisima', 1),
  (34567, 7, 'buenisima', 9),
  (70594, 1, 'malisima', 2),
  (34567, 2, 'buenisima', 9),
  (70594, 3, 'malisima', 2),
  (34567, 4, 'buenisima', 9);
