DROP TABLE IF EXISTS user;
CREATE TABLE user (
    user_id SERIAL,
    name TINYTEXT,
    email TINYTEXT,
    pass TINYTEXT,
    php_session TINYTEXT
);
INSERT INTO user (name, email, pass) VALUES ('root', 'mj@mdnetz.de', MD5('hh99doom666'));

DROP TABLE IF EXISTS hero;
CREATE TABLE hero (
    hero_id SERIAL,
    name TINYTEXT,
    position INT,
    tierlist INT,
    funktion INT,
    description TEXT
);

DROP TABLE IF EXISTS glyph;
CREATE TABLE glyph (
    glyph_id SERIAL,
    name TINYTEXT,
    description TEXT
);

DROP TABLE IF EXISTS hero_glyph;
CREATE TABLE hero_glyph (
    glyph_id INT,
    hero_id INT,
    priority INT
);

DROP TABLE IF EXISTS artefact;
CREATE TABLE artefact (
    artefact_id SERIAL,
    name TINYTEXT,
    description TEXT
);

DROP TABLE IF EXISTS hero_artefact;
CREATE TABLE hero_artefact (
    artefact_id INT,
    hero_id INT,
    priority INT
);

DROP TABLE IF EXISTS skin;
CREATE TABLE skin (
    skin_id SERIAL,
    name TINYTEXT,
    description TEXT
);

DROP TABLE IF EXISTS hero_skin;
CREATE TABLE hero_skin (
    skin_id INT,
    hero_id INT,
    priority INT
);

DROP TABLE IF EXISTS user_hero;
CREATE TABLE user_hero (
    user_id INT,
    hero_id INT,
    level INT,

);
