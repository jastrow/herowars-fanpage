DROP TABLE IF EXISTS user;
CREATE TABLE user (
    user_id SERIAL,
    name TINYTEXT,
    email TINYTEXT,
    pass TINYTEXT,
    php_session TINYTEXT
);
INSERT INTO user (name, email, pass) VALUES ('root', 'mj@mdnetz.de', MD5('god123'));
INSERT INTO user (name, email, pass) VALUES ('bull', 'bull', MD5('god123'));

DROP TABLE IF EXISTS hero;
CREATE TABLE hero (
    hero_id SERIAL,
    name TEXT,
    position TEXT,
    tierlist TEXT,
    funktion TEXT,
    description TEXT,
    artefacts TEXT,
    glyphs TEXT,
    skins TEXT
);

DROP TABLE IF EXISTS hero_team;
CREATE TABLE hero_team (
    hero_team_id SERIAL,
    name TEXT,
    description TEXT
);

DROP TABLE IF EXISTS hero_team_hero;
CREATE TABLE hero_team_hero (
    hero_team_id INT,
    hero_id INT
);



DROP TABLE IF EXISTS user_hero;
CREATE TABLE user_hero (
    user_id INT,
    hero_id INT,
    level INT,

);
