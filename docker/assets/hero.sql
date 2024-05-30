-- Adminer 4.8.1 MySQL 5.7.44 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `hero`;
CREATE TABLE `hero` (
  `hero_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
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

INSERT INTO `hero` (`hero_id`, `name`, `position`, `tierlist`, `funktion`, `description`, `artefacts`, `glyphs`, `skins`) VALUES
(1,	'Aidan',	'Hinten',	'A+',	'Heiler,     Magier',	'4',	'Buch,Ring,Waffe',	'Magischer Angriff,Gesundheit,Intelligenz,Magische Verteidigung,RÃ¼stung',	'Solar,Standard,Cybernetic,Masquerade'),
(6,	'Alvanor',	'Vorne',	'S',	'Kontrolle, Magier',	'Alvanor arbeitet mit allen Natur Helden gut zusammen (Aurora, Mushy, Alvanor, Kai, Dark Star, und Thea).\nVorteile: Heiler, Doppelte Heilung Natur-Helden, Reduziert Schaden\nNachteile: Kein groÃŸer Heiler, Keine groÃŸe Kontrolle, Kein Panzer aber Vorne',	'Ring,Buch,Waffe',	'Gesundheit,Magischer Angriff,Intelligenz,MagiestÃ¤rke,Magische Verteidigung',	'Dark_Depths,Spring,Standard,Lunar,Winter'),
(7,	'Amira',	'Mitte',	'S+',	'Kontrolle, Magier',	'Ist ein Held von den Mystikern, und kann entsprechend mit anderen gut zusammenarbeiten, wie Martha, Celeste, Rufus, Satori und Ziri.',	'Buch,Ring,Waffe',	'Gesundheit,MagiestÃ¤rke,Magischer Angriff,RÃ¼stung,Intelligenz',	'Cybernetic,Standard,Demonic,Romantic'),
(8,	'Andvari',	'Vorne',	'A+',	'UnterstÃ¼tzer, Kontrolle',	'Schutz vor PositionsverÃ¤nderung, Gegner verwirren, Antwort auf K\'arkh und Cleaver\nNachteile: Wenig Magieresistenz, Wenig RÃ¼stung und kein Panzer aber vorne',	'Ring,Waffe,Buch',	'Gesundheit,StÃ¤rke,RÃ¼stung,RÃ¼stungspenetration,Physischer Angriff',	'Standard,Dark_Depths,Lunar,Winter,Stellar'),
(9,	'Arachne',	'Mitte',	'B',	'Krieger, Kontrolle',	'Stark gegen Keira, Karkh, Ishmael, Tristan, Dorian\nLÃ¤hmt Gegner, Vergiftet, geht auf Gegner mit niedriger Gesundheit, 80% Vampir\nNachteile: Wenig Schutz, wenig MagiestÃ¤rke, keine groÃŸer Schaden',	'Buch,Ring,Waffe',	'MagiestÃ¤rke,Magischer Angriff,Intelligenz,Gesundheit,RÃ¼stung',	'Standard,Mechanical,Romantic,Winter,Spring'),
(10,	'Artemis',	'Hinten',	'S+',	'SchÃ¼tze',	'Kritischer Schaden, Bonus bei hoher Teamgesundheit, Schaden gegen alle\nNachteile: Gegner mit RÃ¼stungspenetrierung, Gesundheit des Teams, Wenig Schutz',	'Buch,Ring,Waffe',	'RÃ¼stungspenetration,Krit. Treffer,AgilitÃ¤t,Physischer Angriff,Gesundheit',	'Angelic,Standard,Spring,Demonic,Beach'),
(11,	'Astaroth',	'Vorne',	'S',	'UnterstÃ¼tzer,     Panzer',	'Schild fÃ¼r alle, Entzieht Energie, Ãœbernimmt Schaden vom SchwÃ¤chsten Mitglied, Wiederbelebung\nNachteile: Wiederauferstehung nicht wenn Morrigan im Spiel ist, Schild nur physisch und nicht sehr stark.',	'Buch,Ring,Waffe',	'RÃ¼stung,Gesundheit,Magische Verteidigung,StÃ¤rke,Magischer Angriff',	'Barbarian,Demonic,Standard,Lunar,Cybernetic'),
(12,	'Astrid-Lucas',	'Hinten',	'S',	'SchÃ¼tze, Krieger',	'',	'Buch,Ring,Waffe',	'RÃ¼stungspenetration,Gesundheit,AgilitÃ¤t,Physischer Angriff,RÃ¼stung',	'Romantic,Standard,Demonic,Solar,Spring'),
(13,	'Aurora',	'Vorne',	'A+',	'Panzer',	'LÃ¤hmt naha Gegner, macht magischen Schaden, absorbiert magischen Schaden und verwandelt ihn zu Schaden, hohe Ausweichwert fÃ¼r physischen Schaden\nNachteile: Wenig RÃ¼stung, keine RÃ¼stungspenetration',	'Buch,Ring,Waffe',	'Ausweichen,Gesundheit,StÃ¤rke,MagiestÃ¤rke,Magischer Angriff',	'Nordic,Romantic,Spring,Demonic,Standard,Thundering'),
(16,	'Celeste',	'Mitte',	'A+',	'Magier, Heiler',	'Entfernt negative Effekte, Verhindert Heilung, 50% Energie Artfeact aktivierung\nNachteile: Dunkle Form macht schaden, statt heilen. Seelensteine sind schwer zu bekommen, Wenig Widerstand',	'Buch,Waffe,Ring',	'MagiestÃ¤rke,Magischer Angriff,Intelligenz,Gesundheit,Magische Verteidigung',	'Masquerade,Spring,Winter,Standard,Romantic'),
(17,	'Chabba',	'Vorne',	'A',	'Panzer, Kontrolle',	'Swallowed the enemy tank leaving them tankless\nReduces the speed of enemies\nIncreases armor as it lose health\nRestores health while feeding on the swallowed enemy\nNachteile:\nLittle support for the team\nWeak against magic teams',	'Buch,Waffe,Ring',	'RÃ¼stung,Gesundheit,StÃ¤rke,Magische Verteidigung,Physischer Angriff',	'Winter,Standard,Demonic,Masquerade,Lunar'),
(18,	'Cleaver',	'Vorne',	'S',	'Panzer,   Kontrolle',	'Throws the grappling hook and pulls low defense heroes to the frontline\nDeals pure damage to the enemy frontline\nStuns enemies with your axe\nExtra main attribute gain Strength +3220\n\nNachteile:\nHook can pull enemy counters (Martha, Dorian)\nHook can be blocked by Andvari',	'Buch,Ring,Waffe',	'RÃ¼stung,Gesundheit,StÃ¤rke,Magische Verteidigung,Physischer Angriff',	'Masquerade,Barbarian,Standard,Lunar,Beach,Champion'),
(19,	'Cornelius',	'Hinten',	'B',	'UnterstÃ¼tzer, Magier',	'Gut gegen magische Teams.',	'Buch,Waffe,Ring',	'Magischer Angriff,Intelligenz,Gesundheit,Magische Verteidigung,RÃ¼stung',	'Angelic,Masquerade,Stellar,Standard,Cybernetic'),
(20,	'Corvus',	'Vorne',	'S',	'Panzer',	'Reduziert Defensive Werte und erhÃ¶ht die eigenen. VerstÃ¤rkt magische und physische Angriffe von allen, und zusÃ¤tzlicher Schaden mit dem Altar.\nNachteile: Wenig Verteidigung im Vergleich zu anderen Panzern und abhÃ¤ngig von Morrigan.',	'Ring,Buch,Waffe',	'Gesundheit,StÃ¤rke,RÃ¼stung,Magische Verteidigung,Physischer Angriff',	'Winter,Standard,Spring,Lunar,Dark_Depths'),
(21,	'Dante',	'Mitte',	'S',	'SchÃ¼tze',	'Ausweichen fÃ¼r alle, reduziert Attribute der Gegner, drÃ¼ckt Gegner weg, Ausweich Artefakt\nNachteile: DrÃ¼ckt Gegner in Dorians Aura, Wenig Magieresistenz',	'Waffe,Buch,Ring',	'RÃ¼stungspenetration,Physischer Angriff,Ausweichen,AgilitÃ¤t,RÃ¼stung',	'Solar,Romantic,Standard,Winter,Spring'),
(22,	'Daredevil',	'Hinten',	'A',	'SchÃ¼tze',	'Kritischer Schaden (2te Fertigkeit)\nNachteile: Schwach gegen magische Teams und Schild Teams',	'Buch,Waffe,Ring',	'Krit. Treffer,AgilitÃ¤t,Physischer Angriff,Gesundheit,Magische Verteidigung',	'Rowdy,Romantic,Spring,Standard,Solar'),
(23,	'Darkstar',	'Hinten',	'A',	'Kontrolle, SchÃ¼tze',	'Einige interessante Vorteile aber genauso viele Nachteile. Sinnvoll mit anderen Naturhelden.',	'Buch,Ring,Waffe',	'RÃ¼stungspenetration,AgilitÃ¤t,Physischer Angriff,Gesundheit,Ausweichen',	'Lunar,Standard,Spring,Romantic,Nordic'),
(24,	'Dorian',	'Hinten',	'A+',	'Heiler, UnterstÃ¼tzer',	'Heilt mit gleichzeitigen Schaden, Vampirismus fÃ¼r nahe VerbÃ¼ndete, Vampirismus selbst nach seinem Tod.\nNachteile: Wenig Abwehr, Vampirismus nur innerhalb seiner Aura',	'Buch,Ring,Waffe',	'Gesundheit,RÃ¼stung,Intelligenz,Magische Verteidigung,Magischer Angriff',	'Romantic,Winter,Standard,Champion,Masquerade'),
(25,	'Elmir',	'Vorne',	'A',	'Krieger, SchÃ¼tze',	'Aktiviert RÃ¼stusungsdurchdringung, 2-4 Klone, Ausweichen\nNachteile: Klone schwach, bekommen keine Buffs und Ã¼bernehmen keine Werte von Elmir',	'Buch,Waffe,Ring',	'RÃ¼stungspenetration,Gesundheit,AgilitÃ¤t,Physischer Angriff,Ausweichen',	'Cybernetic,Standard,Winter,Barbarian,Demonic'),
(26,	'Faceless',	'Hinten',	'S',	'Magier, Kontrolle',	'Positive Punkte:\n- Kopiert die erste FÃ¤higkeit von Gegnern und VerbÃ¼ndeten.\n- BetÃ¤ubt mehrere Gegner gleichzeitig.\n- Reduziert den physischen Angriff der Gegner fÃ¼r 4 Sekunden.\n- 3000 Magie-Verteidigungs-Buff fÃ¼r alle VerbÃ¼ndeten.\n\nNegative Punkte:\n- Niedriger physischer Angriff, um Beweglichkeit von Gegnern zu kopieren.\n- Niedrige physische Verteidigung.',	'Ring,Waffe,Buch',	'Gesundheit,MagiestÃ¤rke,Magischer Angriff,Intelligenz,Physischer Angriff',	'Masquerade,Stellar,Solar,Standard,Demonic'),
(27,	'Fafnir',	'Hinten',	'S+',	'UnterstÃ¼tzer, Kontrolle',	'Positive Punkte:\n- SchÃ¼tzt VerbÃ¼ndete mit Beweglichkeitsattribut und kritischem Schaden gegen Helios-Teams.\n- SchÃ¼tzt Keira und Yasmine vor AOE-Helden und dem Altar von Corvus.\n- SchÃ¼tzt Keira, Yasmine und andere Helden vor Xe\'sha\'s Ãœberkraft-Angriffen.\n- ErhÃ¶ht den physischen Schaden fÃ¼r VerbÃ¼ndete.\n- ErhÃ¶ht den zusÃ¤tzlichen Schaden fÃ¼r Galahad, Tristan und Luther.\n- Erste und zweite FÃ¤higkeiten werden mit der SpezialfÃ¤higkeit aktiviert.\n\nNegative Punkte:\n- Verursacht keinen Schaden.\n- Niedrige physische und magische Verteidigung.\n- Der Anfangsschild schÃ¼tzt nur einen VerbÃ¼ndeten.',	'Waffe,Ring,Buch',	'Physischer Angriff,StÃ¤rke,Gesundheit,RÃ¼stung,Magische Verteidigung',	'Winter,Spring,Standard,Celestial,Stellar'),
(28,	'Fox',	'Hinten',	'B',	'SchÃ¼tze',	'Positive Punkte von Fuchs:\n\nViel Schaden mit der ultimativen FÃ¤higkeit\nBetÃ¤ubt Gegner\nVerblendet Gegner\nNegative Punkte von Fuchs:\n\nSchwach gegen Schild-Tanks\nSchwach gegen Ziri\nGreift nur ein Ziel an, zuerst Tanks',	'Waffe,Buch,Ring',	'RÃ¼stungspenetration,Krit. Treffer,AgilitÃ¤t,Physischer Angriff,RÃ¼stung',	'Lunar,Spring,Cybernetic,Standard,Winter'),
(29,	'Galahad',	'Vorne',	'A+',	'Panzer',	'Positive Punkte:\n- Vampirismus\n- Entfernt Kontroll-Effekte, die auf ihn angewendet werden\n- Verursacht reinen FlÃ¤chenschaden\n- Greift mit Vergeltung den Feind mit dem geringsten Lebenswert an\n\nNegative Punkte:\n- Besitzt kein Waffenartefakt - RÃ¼stung\n- UnterstÃ¼tzt das Team nicht\n- Er ist ein starker KÃ¤mpfer mit der Rolle eines Tanks',	'Buch,Ring,Waffe',	'RÃ¼stung,Gesundheit,StÃ¤rke,Magische Verteidigung,Physischer Angriff',	'Romantic,Champion,Standard,Celestial,Angelic,Thundering'),
(30,	'Ginger',	'Hinten',	'S',	'SchÃ¼tze',	'Positive Punkte:\n- Verursacht FlÃ¤chenschaden\n- Bonus auf physischen Angriff fÃ¼r Fortschrittshelden\n- SchÃ¼tze in der hinteren Reihe\n\nNegative Punkte:\n- Geringe physische Verteidigung\n- Schwach gegen Magierteams\n- Nur stark in Fortschrittsteams',	'Buch,Ring,Waffe',	'RÃ¼stungspenetration,Physischer Angriff,AgilitÃ¤t,Gesundheit,Magische Verteidigung',	'Spring,Standard,Champion,Demonic,Solar'),
(31,	'Heidi',	'Mitte',	'A+',	'Magier',	'Positive Punkte:\n- Konter gegen Schildhelden\n- ÃœbermÃ¤chtiger Schaden gegen Schilde\n- 100% reiner Schaden an Gegnern\n- Toxin wird auf den UnterstÃ¼tzungshelden Ã¼bertragen, der es entfernt\n\nNegative Punkte:\n- Schwach gegen Cornelius, Phobos und Iris\n- Schwach gegen Helden mit physischem Schaden\n- Verursacht wenig Schaden an Teams ohne Schilde',	'Ring,Buch,Waffe',	'Magischer Angriff,Intelligenz,RÃ¼stung,Magische Verteidigung,Ausweichen',	'Solar,Standard,Lunar,Demonic,Winter,Romantic'),
(32,	'Helios',	'Hinten',	'A+',	'Magier,   UnterstÃ¼tzer',	'**Helios Positive Punkte:**\n- Konter gegen kritische Treffer\n- Absorbiert physischen Schaden, der von VerbÃ¼ndeten erlitten wird\n- Stark gegen Teams mit kritischen Treffern und physischen Angriffen\n- RÃ¼stungs-Artefakt\n\n**Helios Negative Punkte:**\n- Keine Magiedurchdringung (benÃ¶tigt Talisman)\n- Verursacht nur hohen Schaden gegen Teams mit kritischen Treffern\n- Schwach gegen Magier-Teams, obwohl er viel Magieverteidigung hat',	'Buch,Ring,Waffe',	'Gesundheit,Magischer Angriff,Intelligenz,RÃ¼stung,Magische Verteidigung',	'Romantic,Champion,Standard,Demonic,Masquerade'),
(33,	'Iris',	'Hinten',	'S+',	'Magier',	'Positive Punkte:\n- Stark gegen Satori und die Zwillinge\n- Reduziert den Angriff der Gegner\n- Reduziert die Magieverteidigung der Gegner\n- Immun gegen Debuffs\n- VerlÃ¤ngert die Dauer von Debuffs bei VerbÃ¼ndeten\n\nNegative Punkte:\n- Geringe Verteidigung und Gesundheit\n- Schwach gegen Amira\n- Schwach gegen den Altar von Corvus\n- Sehr schwach gegen Teams mit physischen Angriffen',	'Buch,Waffe,Ring',	'Magischer Angriff,Intelligenz,Gesundheit,MagiestÃ¤rke,Magische Verteidigung',	'Cybernetic,Standard,Masquerade,Beach,Stellar'),
(34,	'Isaac',	'Mitte',	'S',	'UnterstÃ¼tzer, Kontrolle',	'**Positive Punkte:**\n- Schild fÃ¼r VerbÃ¼ndete\n- Bonus auf physischen Angriff\n- Artefakt fÃ¼r Magieverteidigung fÃ¼r das Team\n- RÃ¼stungsdurchdringungs-Buff fÃ¼r VerbÃ¼ndete des Fortschritts\n- Heilt Fortschritts-VerbÃ¼ndete\n\n**Negative Punkte:**\n- Heilt nur Fortschritts-VerbÃ¼ndete\n- Hat wenig Synergie mit diversen Teams\n- ErhÃ¶ht den physischen Angriff nur fÃ¼r Helden, die in der hinteren Reihe kÃ¤mpfen: Ginger, Daredevil, Astrid und Lucas',	'Buch,Ring,Waffe',	'Gesundheit,Physischer Angriff,AgilitÃ¤t,RÃ¼stung,Magische Verteidigung',	'Masquerade,Standard,Lunar,Spring'),
(35,	'Ishmael',	'Vorne',	'A+',	'Krieger',	'Vampirism passive skill 120%\nDodge\nStun',	'Buch,Waffe,Ring',	'RÃ¼stungspenetration,Krit. Treffer,AgilitÃ¤t,Physischer Angriff,Gesundheit',	'Romantic,Standard,Masquerade,Solar,Champion,Spring');

-- 2024-05-29 16:16:48
