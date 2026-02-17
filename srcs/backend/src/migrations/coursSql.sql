-- Database: films

-- DROP DATABASE IF EXISTS films;

CREATE DATABASE films
    WITH
    OWNER = transcendence_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Create TABLE realisateurs realisateurs

	CREATE TABLE realisateurs (
		realisateur_id SERIAL PRIMARY KEY,
		prenom VARCHAR(30),
		nom VARCHAR(30) NOT NULL,
		date_de_naissance DATE,
		nationalité VARCHAR(20)
	);

	SELECT * FROM realisateurs;

	CREATE TABLE acteurs (
		acteur_id SERIAL PRIMARY KEY,
		prenom VARCHAR(30),
		nom VARCHAR(30),
		civilite CHAR(1),
		date_de_naissance DATE
	);

	SELECT * FROM acteurs;

	CREATE TABLE films_acteurs (
		film_id INT REFERENCES films (film_id),
		acteur_id INT REFERENCES acteurs (acteur_id),
		PRIMARY KEY (film_id, acteur_id)
		
	);