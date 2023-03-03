-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 03 mars 2023 à 12:55
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.1

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

CREATE TABLE `acteur` (
  `no_act` int(4) NOT NULL,
  `nom_act` varchar(20) NOT NULL,
  `pren_act` varchar(20) DEFAULT NULL,
  `date_naiss` date DEFAULT NULL,
  `date_deces` date DEFAULT NULL,
  `lien_img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(7, 'Lambert', 'Christophe', '1957-03-29', NULL, 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qKmxieTgzvsA5hSA7w1VoHizmmE.jpg'),
(9, 'Clooney', 'George', '2022-10-05', '2023-03-09', 'https://fr.web.img4.acsta.net/c_310_420/pictures/16/05/12/17/04/136865.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `code_cat` varchar(2) NOT NULL,
  `libelle_cat` varchar(20) NOT NULL,
  `image` varchar(255) NOT NULL
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

CREATE TABLE `film` (
  `no_film` int(4) NOT NULL,
  `titre` varchar(30) NOT NULL,
  `duree` int(3) NOT NULL,
  `date_sortie` date NOT NULL,
  `budget` int(8) NOT NULL,
  `montant_recette` int(8) NOT NULL,
  `no_rea` int(2) NOT NULL,
  `code_cat` varchar(2) NOT NULL,
  `lien_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `film`
--

INSERT INTO `film` (`no_film`, `titre`, `duree`, `date_sortie`, `budget`, `montant_recette`, `no_rea`, `code_cat`, `lien_img`) VALUES
(1, 'Léon', 110, '1994-04-14', 17531000, 69250000, 3, 'PO', 'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg'),
(2, 'Cash', 100, '2008-04-23', 18340000, 60340000, 4, 'PO', 'https://fr.web.img4.acsta.net/medias/nmedia/18/64/53/28/18943501.jpg'),
(3, 'La grande vadrouille', 132, '1966-12-01', 7227000, 51258000, 2, 'AC', 'https://www.filmspourenfants.net/wp-content/uploads/2020/01/la-grande-vadouille-a-359x500.jpg'),
(4, 'Subway', 104, '1985-04-10', 10567000, 70500000, 3, 'PO', 'https://fr.web.img5.acsta.net/pictures/14/08/21/14/04/441036.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `personnage`
--

CREATE TABLE `personnage` (
  `no_film` int(4) NOT NULL,
  `no_act` int(4) NOT NULL,
  `nom_pers` varchar(30) NOT NULL
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
(4, 1, 'Pouet'),
(4, 6, 'Le Roller'),
(4, 7, 'Fred');

-- --------------------------------------------------------

--
-- Structure de la table `realisateur`
--

CREATE TABLE `realisateur` (
  `no_rea` int(2) NOT NULL,
  `nom_rea` varchar(20) NOT NULL,
  `pren_rea` varchar(20) NOT NULL,
  `lien_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `realisateur`
--

INSERT INTO `realisateur` (`no_rea`, `nom_rea`, `pren_rea`, `lien_img`) VALUES
(1, 'Oury', 'Gérard', 'https://fr.web.img2.acsta.net/medias/nmedia/18/36/36/62/20343382.jpg'),
(2, 'Chabrol', 'Claude', 'https://fr.web.img5.acsta.net/pictures/19/02/19/15/43/1517198.jpg'),
(3, 'Besson', 'Luc', 'https://fr.web.img6.acsta.net/pictures/17/07/18/16/33/061543.jpg'),
(4, 'Besnard', 'Eric', 'https://fr.web.img6.acsta.net/medias/nmedia/18/66/30/25/19459675.jpg'),
(7, 'Nolan', 'Christopher', 'https://fr.web.img5.acsta.net/c_310_420/pictures/14/10/30/10/59/215487.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `no_util` int(4) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`no_util`, `login`, `password`) VALUES
(1, 'admin', '$2a$10$MJ1Vb4Cy8Jgq5US0koS/ceGQPaFXLWZKQ0L3kJfmZwt8PBmxKG5Ky'),
(4, 'test', '$2a$10$ID1/xRYcqeQ6hBlvWikGfuiHByxQy1xxHkg.i9NuPNsmiAwjhWPMS'),
(5, 'alex', '$2a$10$QFazI45g2oAS.D.iXmGT4.h6X04j4UPlKaohVHCKbQEEpmpADfG6K'),
(6, 'abcd', '$2a$10$y5lxjXzZ/mG3uJE4GRgtBeEdF13mIMwkkP5EqKypEh2QdXU3rQopC');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `acteur`
--
ALTER TABLE `acteur`
  ADD PRIMARY KEY (`no_act`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`code_cat`);

--
-- Index pour la table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`no_film`),
  ADD KEY `no_rea` (`no_rea`),
  ADD KEY `code_cat` (`code_cat`),
  ADD KEY `CodeCat` (`code_cat`),
  ADD KEY `NoRea` (`no_rea`);

--
-- Index pour la table `personnage`
--
ALTER TABLE `personnage`
  ADD PRIMARY KEY (`no_film`,`no_act`),
  ADD KEY `no_film` (`no_film`),
  ADD KEY `no_act` (`no_act`);

--
-- Index pour la table `realisateur`
--
ALTER TABLE `realisateur`
  ADD PRIMARY KEY (`no_rea`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`no_util`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `acteur`
--
ALTER TABLE `acteur`
  MODIFY `no_act` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `film`
--
ALTER TABLE `film`
  MODIFY `no_film` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `realisateur`
--
ALTER TABLE `realisateur`
  MODIFY `no_rea` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `no_util` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
