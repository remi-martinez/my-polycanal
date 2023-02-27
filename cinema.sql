-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 27 fév. 2023 à 21:09
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cinema`
--

-- --------------------------------------------------------

--
-- Structure de la table `acteur`
--

DROP TABLE IF EXISTS `acteur`;
CREATE TABLE IF NOT EXISTS `acteur` (
  `no_act` int NOT NULL AUTO_INCREMENT,
  `nom_act` varchar(20) NOT NULL,
  `pren_act` varchar(20) DEFAULT NULL,
  `date_naiss` date DEFAULT NULL,
  `date_deces` date DEFAULT NULL,
  `lien_img` varchar(300) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  PRIMARY KEY (`no_act`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `acteur`
--

INSERT INTO `acteur` (`no_act`, `nom_act`, `pren_act`, `date_naiss`, `date_deces`, `lien_img`) VALUES
(1, 'Reno', 'Jean', '1948-07-30', NULL, 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q7dYamebioHRuvb9EWeSw8yTEfS.jpg'),
(2, 'Portman', 'Natalie', '1981-06-09', NULL, 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xcbZjjES1CnvMZMepbS5EaTDUzH.jpg'),
(3, 'Dujardin', 'Jean', '1972-06-19', NULL, 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/iPtSWWoO8vajj6fIUQLQeuGOCsk.jpg'),
(4, 'Bourvil', 'André', '1917-07-27', '1970-09-23', 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/h9eYqmgnBhRoccnTFKo0Y05dI8b.jpg'),
(5, 'De Funes', 'Louis', '1914-08-31', '1983-01-27', 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8R8WVggSEKxxT4n2HRKHjxHrIQZ.jpg'),
(6, 'Anglade', 'Jean-Hugues', '1955-07-29', NULL, 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vidk0fZfz56flOBuUzZHDkwsGdb.jpg'),
(7, 'Lambert', 'Christophe', '1957-03-29', NULL, 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qKmxieTgzvsA5hSA7w1VoHizmmE.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `code_cat` varchar(2) NOT NULL,
  `libelle_cat` varchar(20) NOT NULL,
  `image` varchar(150) NOT NULL,
  PRIMARY KEY (`code_cat`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`code_cat`, `libelle_cat`, `image`) VALUES
('AC', 'Action', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/M9-pistolet.jpg/220px-M9-pistolet.jpg'),
('CO', 'Comedie', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eduard_von_Gr%C3%BCtzner_Falstaff.jpg/220px-Eduard_von_Gr%C3%BCtzner_Falstaff.jpg'),
('PO', 'Policier', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Police-IMG_4105.jpg/300px-Police-IMG_4105.jpg'),
('WE', 'Western', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Buffalo_Bills_Wild_West_Show%2C_1890.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `film`
--

DROP TABLE IF EXISTS `film`;
CREATE TABLE IF NOT EXISTS `film` (
  `no_film` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(30) NOT NULL,
  `duree` int NOT NULL,
  `date_sortie` date NOT NULL,
  `budget` int NOT NULL,
  `montant_recette` int NOT NULL,
  `no_rea` int NOT NULL,
  `code_cat` varchar(2) NOT NULL,
  `lien_img` varchar(255) NOT NULL,
  PRIMARY KEY (`no_film`),
  KEY `no_rea` (`no_rea`),
  KEY `code_cat` (`code_cat`),
  KEY `CodeCat` (`code_cat`),
  KEY `NoRea` (`no_rea`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `film`
--

INSERT INTO `film` (`no_film`, `titre`, `duree`, `date_sortie`, `budget`, `montant_recette`, `no_rea`, `code_cat`, `lien_img`) VALUES
(1, 'Léon', 110, '1994-04-14', 17531000, 69250000, 3, 'PO', 'https://www.themoviedb.org/t/p/original/oBhmd3261OkJ4Yg2FdSiD2wnyfe.jpg'),
(2, 'Cash', 100, '2008-04-23', 18340000, 60340000, 4, 'PO', 'https://www.themoviedb.org/t/p/original/pXvtGZDmbTNzD4njBjiYsIKaOH.jpg'),
(3, 'La grande vadrouille', 132, '1966-12-01', 7227000, 51258000, 2, 'AC', 'https://www.themoviedb.org/t/p/original/lwaACdWYPjAVMDHgIbwrA4Bb47S.jpg'),
(4, 'Subway', 104, '1985-04-10', 10567000, 70500000, 3, 'PO', 'https://www.themoviedb.org/t/p/original/mqLvuAJNpwzvEnC2EkQhznvH510.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `personnage`
--

DROP TABLE IF EXISTS `personnage`;
CREATE TABLE IF NOT EXISTS `personnage` (
  `no_film` int NOT NULL,
  `no_act` int NOT NULL,
  `nom_pers` varchar(30) NOT NULL,
  PRIMARY KEY (`no_film`,`no_act`),
  KEY `no_film` (`no_film`),
  KEY `no_act` (`no_act`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `personnage`
--

INSERT INTO `personnage` (`no_film`, `no_act`, `nom_pers`) VALUES
(1, 1, 'Léon'),
(1, 2, 'Mathilda'),
(2, 1, 'Maxime Dubreuil'),
(2, 3, 'Cash'),
(3, 4, 'Augustin Bouvet'),
(3, 5, 'Stanislas Lefort'),
(4, 1, 'Le Batteur'),
(4, 6, 'Le Roller'),
(4, 7, 'Fred');

-- --------------------------------------------------------

--
-- Structure de la table `realisateur`
--

DROP TABLE IF EXISTS `realisateur`;
CREATE TABLE IF NOT EXISTS `realisateur` (
  `no_rea` int NOT NULL AUTO_INCREMENT,
  `nom_rea` varchar(20) NOT NULL,
  `pren_rea` varchar(20) NOT NULL,
  PRIMARY KEY (`no_rea`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `realisateur`
--

INSERT INTO `realisateur` (`no_rea`, `nom_rea`, `pren_rea`) VALUES
(1, 'Oury', 'Gérard'),
(2, 'Chabrol', 'Claude'),
(3, 'Besson', 'Luc'),
(4, 'Besnard', 'Eric');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `no_util` int NOT NULL AUTO_INCREMENT,
  `login` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`no_util`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`no_util`, `login`, `password`) VALUES
(1, 'admin', 'admin'),
(2, 'user', '$2a$10$LiLp6B5QVVMSiGoOL.I6zux6RZYP6n0Cjyfh5L1G/uAWGcUUMTITm'),
(3, 'alex', '$2a$10$yh0rSH6fSrggHaV6lcfKPedDR3zp/UinXyhfkA5Dm2D/hbnYbnb/S');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `film`
--
ALTER TABLE `film`
  ADD CONSTRAINT `film_ibfk_1` FOREIGN KEY (`no_rea`) REFERENCES `realisateur` (`no_rea`),
  ADD CONSTRAINT `film_ibfk_2` FOREIGN KEY (`code_cat`) REFERENCES `categorie` (`code_cat`);

--
-- Contraintes pour la table `personnage`
--
ALTER TABLE `personnage`
  ADD CONSTRAINT `personnage_ibfk_1` FOREIGN KEY (`no_film`) REFERENCES `film` (`no_film`),
  ADD CONSTRAINT `personnage_ibfk_2` FOREIGN KEY (`no_act`) REFERENCES `acteur` (`no_act`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
