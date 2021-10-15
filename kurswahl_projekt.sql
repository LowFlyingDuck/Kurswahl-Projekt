-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 15. Okt 2021 um 08:52
-- Server-Version: 10.3.31-MariaDB-0+deb10u1
-- PHP-Version: 7.3.29-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `kurswahl_projekt`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `kurszuordnungen`
--

CREATE TABLE `kurszuordnungen` (
  `id` int(11) NOT NULL,
  `LK 1` varchar(2) NOT NULL,
  `LK 2` varchar(2) NOT NULL,
  `GK 1` varchar(2) NOT NULL,
  `GK 2` varchar(3) NOT NULL,
  `GK 3` varchar(4) NOT NULL,
  `GK 4` varchar(2) NOT NULL,
  `GK 5` varchar(4) NOT NULL,
  `GK 6` varchar(4) NOT NULL,
  `GK 7` varchar(2) NOT NULL,
  `GK 8` varchar(4) NOT NULL,
  `GK 9` varchar(2) NOT NULL,
  `GK 10` varchar(2) NOT NULL,
  `GK 11` varchar(2) NOT NULL,
  `GK 12` varchar(4) NOT NULL,
  `GK 13` varchar(2) NOT NULL,
  `GK 14` varchar(10) NOT NULL,
  `Stunden` int(2) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `Vorname` text NOT NULL,
  `Nachname` text NOT NULL,
  `Name` int(11) NOT NULL,
  `Klasse` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `kurszuordnungen`
--
ALTER TABLE `kurszuordnungen`
  ADD KEY `user_id` (`user_id`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `kurszuordnungen`
--
ALTER TABLE `kurszuordnungen`
  ADD CONSTRAINT `kurszuordnungen_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
