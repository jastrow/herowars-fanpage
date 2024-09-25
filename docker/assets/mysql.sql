DROP TABLE IF EXISTS user;
CREATE TABLE user (
    user_id SERIAL,
    name TINYTEXT,
    email TINYTEXT,
    pass TINYTEXT,
    php_session TINYTEXT DEFAULT NULL,
    stamp DATETIME DEFAULT NULL,
    token TINYTEXT DEFAULT NULL
);
INSERT INTO user (name, email, pass) VALUES ('root', 'mj@mdnetz.de', MD5('abc123'));
INSERT INTO user (name, email, pass) VALUES ('bull', 'bull', MD5('abc123'));

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


DROP TABLE IF EXISTS titan;
CREATE TABLE titan (
    titan_id SERIAL,
    name TEXT,
    position TEXT,
    tierlist TEXT,
    funktion TEXT,
    description TEXT
);

DROP TABLE IF EXISTS titan_team;
CREATE TABLE titan_team (
    titan_team_id SERIAL,
    name TEXT,
    description TEXT
);

DROP TABLE IF EXISTS titan_team_titan;
CREATE TABLE titan_team_titan (
    titan_team_id INT,
    titan_id INT
);

DROP TABLE IF EXISTS page;
CREATE TABLE page (
    name TINYTEXT,
    html LONGTEXT,
    UNIQUE KEY (name(255))
);

DROP TABLE IF EXISTS mitglied;
CREATE TABLE mitglied (
    mitglied_id SERIAL,
    name TINYTEXT,
    info LONGTEXT
);


DROP TABLE IF EXISTS gk;
CREATE TABLE gk (
    gk_id SERIAL,
    mitglied_id INT,
    year INT,
    week INT,
    montag ENUM('a','w','i'),
    dienstag ENUM('a','w','i'),
    mittwoch ENUM('a','w','i'),
    donnerstag ENUM('a','w','i'),
    freitag ENUM('a','w','i'),
    samstag ENUM('a','w','i'),
    sonntag ENUM('a','w','i')
);
