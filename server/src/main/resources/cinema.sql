CREATE DATABASE IF NOT EXISTS cinema;
USE cinema;


DROP TABLE IF EXISTS `personnage`;
DROP TABLE IF EXISTS `film`;
DROP TABLE IF EXISTS `categorie`;
DROP TABLE IF EXISTS `acteur`;
DROP TABLE IF EXISTS `realisateur`;


CREATE TABLE IF NOT EXISTS `acteur` (
  `no_act` int(4) NOT NULL AUTO_INCREMENT,
  `nom_act` varchar(20) NOT NULL,
  `pren_act` varchar(20) DEFAULT NULL,
  `date_naiss` date DEFAULT NULL,
  `date_deces` date DEFAULT NULL,
  PRIMARY KEY (`no_act`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `acteur` (`nom_act`, `pren_act`, `date_naiss`, `date_deces`) VALUES
('Reno', 'Jean', '1948-07-30', NULL),
('Portman', 'Natalie', '1981-06-09', NULL),
('Dujardin', 'Jean', '1972-06-19', NULL),
('Bourvil', 'André', '1917-07-27', '1970-09-23'),
('De Funes', 'Louis', '1914-08-31', '1983-01-27'),
('Anglade', 'Jean-Hugues', '1955-07-29', NULL),
('Lambert', 'Christophe', '1957-03-29', NULL);


CREATE TABLE IF NOT EXISTS `categorie` (
  `code_cat` varchar(2) NOT NULL,
  `libelle_cat` varchar(20) NOT NULL,
  `image` varchar(150) NOT NULL,
  PRIMARY KEY (`code_cat`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `categorie` (`code_cat`, `libelle_cat`, `image`) VALUES
('AC', 'Action', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/M9-pistolet.jpg/220px-M9-pistolet.jpg'),
('CO', 'Comedie', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Eduard_von_Gr%C3%BCtzner_Falstaff.jpg/220px-Eduard_von_Gr%C3%BCtzner_Falstaff.jpg'),
('PO', 'Policier', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Police-IMG_4105.jpg/300px-Police-IMG_4105.jpg'),
('WE', 'Western', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Buffalo_Bills_Wild_West_Show%2C_1890.jpg');


CREATE TABLE IF NOT EXISTS `realisateur` (
  `no_rea` int(2) NOT NULL AUTO_INCREMENT,
  `nom_rea` varchar(20) NOT NULL,
  `pren_rea` varchar(20) NOT NULL,
  PRIMARY KEY (`no_rea`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `realisateur` (`nom_rea`, `pren_rea`) VALUES
('Oury', 'Gérard'),
('Chabrol', 'Claude'),
('Besson', 'Luc'),
('Besnard', 'Eric');


CREATE TABLE IF NOT EXISTS `film` (
  `no_film` int(4) NOT NULL AUTO_INCREMENT,
  `titre` varchar(30) NOT NULL,
  `duree` int(3) NOT NULL,
  `date_sortie` date NOT NULL,
  `budget` int(8) NOT NULL,
  `montant_recette` int(8) NOT NULL,
  `no_rea` int(2) NOT NULL,
  `code_cat` varchar(2) NOT NULL,
  PRIMARY KEY (`no_film`),
  KEY `no_rea` (`no_rea`),
  KEY `code_cat` (`code_cat`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `film`
  ADD CONSTRAINT `film_ibfk_1` FOREIGN KEY (`no_rea`) REFERENCES `realisateur` (`no_rea`),
  ADD CONSTRAINT `film_ibfk_2` FOREIGN KEY (`code_cat`) REFERENCES `categorie` (`code_cat`);

INSERT INTO `film` (`titre`, `duree`, `date_sortie`, `budget`, `montant_recette`, `no_rea`, `code_cat`) VALUES
('Léon', 110, '1994-04-14', 17531000, 69250000, 3, 'PO'),
('Cash', 100, '2008-04-23', 18340000, 60340000, 4, 'PO'),
('La grande vadrouille', 132, '1966-12-01', 7227000, 51258000, 2, 'AC'),
('Subway', 104, '1985-04-10', 10567000, 70500000, 3, 'PO');


CREATE TABLE IF NOT EXISTS `personnage` (
  `no_film` int(4) NOT NULL,
  `no_act` int(4) NOT NULL,
  `nom_pers` varchar(30) NOT NULL,
  PRIMARY KEY (`no_film`,`no_act`),
  KEY `no_film` (`no_film`),
  KEY `no_act` (`no_act`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `personnage`
  ADD CONSTRAINT `personnage_ibfk_1` FOREIGN KEY (`no_film`) REFERENCES `film` (`no_film`),
  ADD CONSTRAINT `personnage_ibfk_2` FOREIGN KEY (`no_act`) REFERENCES `acteur` (`no_act`);

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

CREATE TABLE IF NOT EXISTS `utilisateur` (
  `no_util` int(4) NOT NULL AUTO_INCREMENT,
  `login` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`no_util`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `utilisateur` (`no_util`, `login`, `password`) VALUES
(1, 'admin', 'admin')