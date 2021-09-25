-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-09-2021 a las 00:22:52
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nosotros`
--

DROP TABLE IF EXISTS `nosotros`;
CREATE TABLE IF NOT EXISTS `nosotros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proyecto` varchar(255) NOT NULL,
  `descripción` text NOT NULL,
  `responsable` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nosotros`
--

INSERT INTO `nosotros` (`id`, `proyecto`, `descripción`, `responsable`) VALUES
(1, 'Proyecto Jonte', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit, distinctio sed molestias maxime aliquam amet esse tenetur facere explicabo laudantium possimus recusandae et quia atque ea nam dolor! Tempore.', 'Ana Ratzkier'),
(2, 'Proyecto Biarrtiz ', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit, distinctio sed molestias maxime aliquam amet esse tenetur facere explicabo laudantium possimus recusandae et quia atque ea nam dolor! Tempore.', 'Jose Ratzkier'),
(3, 'Proyecto Salguero', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta suscipit, distinctio sed molestias maxime aliquam amet esse tenetur facere explicabo laudantium possimus recusandae et quia atque ea nam dolor! Tempore.', 'Jose Ratzkier');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'dana', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'dante', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
