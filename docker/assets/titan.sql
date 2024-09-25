-- Adminer 4.8.1 MySQL 5.7.44 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `titan`;
CREATE TABLE `titan` (
  `titan_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` text,
  `position` text,
  `tierlist` text,
  `funktion` text,
  `description` text,
  `artefacts` text,
  `glyphs` text,
  `skins` text,
  UNIQUE KEY `hero_id` (`hero_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
