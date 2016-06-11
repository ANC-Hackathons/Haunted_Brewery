DO $$
DECLARE difficulty_easy int;
DECLARE difficulty_med int;
DECLARE difficulty_hard int;

DECLARE role_chemist   int;
DECLARE role_bartender int;
DECLARE role_brewer    int;
DECLARE role_cellarman int;
DECLARE role_keg       int;
DECLARE role_forklift  int;

DECLARE room_malt    int;
DECLARE room_brew    int;
DECLARE room_ferment int;
DECLARE room_tap     int;
DECLARE room_pack    int;

DECLARE room_malt_1 int;
DECLARE room_malt_2 int;
DECLARE room_malt_3 int;
DECLARE room_malt_4 int;
DECLARE room_malt_5 int;

DECLARE room_brew_1 int;
DECLARE room_brew_2 int;
DECLARE room_brew_3 int;
DECLARE room_brew_4 int;
DECLARE room_brew_5 int;

DECLARE room_ferment_1 int;
DECLARE room_ferment_2 int;
DECLARE room_ferment_3 int;
DECLARE room_ferment_4 int;
DECLARE room_ferment_5 int;

DECLARE room_tap_1 int;
DECLARE room_tap_2 int;
DECLARE room_tap_3 int;
DECLARE room_tap_4 int;
DECLARE room_tap_5 int;

DECLARE room_pack_1 int;
DECLARE room_pack_2 int;
DECLARE room_pack_3 int;
DECLARE room_pack_4 int;
DECLARE room_pack_5 int;

DECLARE event_malt_mill int;
DECLARE event_malt_secret int;
DECLARE event_malt_tun int;
DECLARE event_brew_kettle int;
DECLARE event_brew_whirlpool int;
DECLARE event_brew_boil int;
DECLARE event_brew_grains int;
DECLARE event_ferment_tank int;
DECLARE event_ferment_infect int;
DECLARE event_ferment_yeast int;
DECLARE event_tap_bar int;
DECLARE event_tap_restaurant int;
DECLARE event_tap_patrons int;
DECLARE event_tap_served int;
DECLARE event_pack_barrels int;
DECLARE event_pack_conveyor int;
DECLARE event_pack_mislabeled int;
DECLARE event_pack_warehouse int;

DECLARE series_trinity int;
DECLARE series_dictators int;
DECLARE series_demons int;

DECLARE boss_hog int;
DECLARE boss_reverend int;
DECLARE boss_salvation int;
DECLARE boss_maha int;
DECLARE boss_kaiser int;
DECLARE boss_czar int;
DECLARE boss_meph int;
DECLARE boss_samael int;
DECLARE boss_beast int;
BEGIN

TRUNCATE TABLE
    difficulties
  , roles
  , roles_difficulties
  , games
  , games_players
  , items
  , games_items
  , games_players_games_items
  , rooms
  , tiles
  , events
  , tiles_events
  , bosses
  , bosses_difficulties
  , bosses_abilities
  , games_bosses
  , reagents
  , games_tiles_reagents
CASCADE;


INSERT INTO difficulties
(
    name
)

VALUES
(
    'Easy'
),
(
    'Medium'
),
(
    'Hard'
);

difficulty_easy := ( SELECT id FROM difficulties WHERE name = 'Easy');
difficulty_med  := ( SELECT id FROM difficulties WHERE name = 'Medium');
difficulty_hard := ( SELECT id FROM difficulties WHERE name = 'Hard');


INSERT INTO roles
(
    name
  , flavor
  , ability
  , icon
)

VALUES
(
    'Chemist'
  , 'Likes: Symmetry, Data. Dislikes: The word moist.'
  , 'Better Living Through Chemistry: Once per round, increase a friendly player’s health by 3.',
  , 'chemist'
),
(
    'Bartender'
  , 'Beer is temporary, but tipping is forever.'
  , 'Drink the Pain Away: Once per round, allow one friendly player to ignore damage inflicted by an event or ability.',
  , 'bartender'
),
(
	  'Brewer'
  , 'Secretly aspires to be cuddly.'
  , 'Hulk Mash: Once per round, double the damage of a single friendly player’s attack.',
  , 'brewer'
),
(
    'Cellarman'
  , 'Her band is cooler than yours.'
  , 'Yeasty Beasties: Your microscopic minions swarm an enemy, preventing it from taking its next turn. Usable once per round.',
  , 'cellar'
),
(
    'Keg Whisperer'
  , 'Every cask has a story to tell. *giggle* No, it''s not about you.'
  , 'Reveal Your Secrets: Once per round, peek underneath an undiscovered tile.',
  , 'keg'
),
(
    'Forklift Pilot'
  , 'Irrepressible. Do not caffeinate.'
  , 'YEEEHAWWWW: Can move two tiles per turn.',
  , 'fork'
);

role_chemist   := ( SELECT id FROM roles WHERE name = 'Chemist' );
role_bartender := ( SELECT id FROM roles WHERE name = 'Bartender' );
role_brewer    := ( SELECT id FROM roles WHERE name = 'Brewer' );
role_cellarman := ( SELECT id FROM roles WHERE name = 'Cellarman' );
role_keg       := ( SELECT id FROM roles WHERE name = 'Keg Whisperer' );
role_forklift  := ( SELECT id FROM roles WHERE name = 'Forklift Pilot' );

INSERT INTO roles_difficulties
(
    role
  , difficulty
  , base_hp
  , base_bac
)

VALUES
( role_chemist, difficulty_easy, 5, 2 ),
( role_chemist, difficulty_med, 4, 3 ),
( role_chemist, difficulty_hard , 4 , 3 ),

( role_bartender, difficulty_easy, 4, 4 ),
( role_bartender, difficulty_med, 3, 4 ),
( role_bartender, difficulty_hard , 3 , 4 ),

( role_brewer, difficulty_easy, 6, 2 ),
( role_brewer, difficulty_med, 5, 1 ),
( role_brewer, difficulty_hard , 4 , 1 ),

( role_cellarman, difficulty_easy, 5, 1 ),
( role_cellarman, difficulty_med, 4, 3 ),
( role_cellarman, difficulty_hard , 4 , 3 ),

( role_keg, difficulty_easy, 5, 1 ),
( role_keg, difficulty_med, 4, 3 ),
( role_keg, difficulty_hard , 4 , 3 ),

( role_forklift, difficulty_easy, 5, 3 ),
( role_forklift, difficulty_med, 4, 3 ),
( role_forklift, difficulty_hard , 3 , 3 );

INSERT INTO items
(
    name
  , max_qty
  , alignment
  , flavor
  , function
)

VALUES
(
    'Stagger'
  , 4
  , 1
  , 'You are a drunken master!'
  , 'Play this card to take half damage from an attack.'
),
(
    'Savior'
  , 1
  , 1
  , 'Do you believe in second chances?'
  , 'If a friendly player dies, play this card to revive them with 3 health.'
),
(
    'Any Port in a Storm'
  , 3
  , 1
  , 'Oldest trick in the book.'
  , 'Play this card to skip a normal fight by hiding in an empty barrel.'
),
(
    'Better You Than Me'
  , 3
  , 3
  , 'Stick to the Code.'
  , 'Play this card to redirect a damaging attack to another friendly player.'
),
(
    'Fast Lane'
  , 5
  , 1
  , 'Ain''t nothin'' gonna stop me now.'
  , 'Play this card to move three spaces on your next turn.'
);


INSERT INTO rooms ( name ) VALUES ('Malt Room') RETURNING id INTO room_malt;
INSERT INTO rooms ( name ) VALUES ('Brew House') RETURNING id INTO room_brew;
INSERT INTO rooms ( name ) VALUES ('Fermentation Room') RETURNING id INTO room_ferment;
INSERT INTO rooms ( name ) VALUES ('Tap Room') RETURNING id INTO room_tap;
INSERT INTO rooms ( name ) VALUES ('Packaging Room') RETURNING id INTO room_pack;



INSERT INTO tiles ( name, kind, room ) VALUES ('Malt Tile 1', 1, room_malt) RETURNING id INTO room_malt_1;
INSERT INTO tiles ( name, kind, room ) VALUES ('Malt Tile 2', 1, room_malt) RETURNING id INTO room_malt_2;
INSERT INTO tiles ( name, kind, room ) VALUES ('Malt Tile 3', 1, room_malt) RETURNING id INTO room_malt_3;
INSERT INTO tiles ( name, kind, room ) VALUES ('Malt Tile 4', 1, room_malt) RETURNING id INTO room_malt_4;
INSERT INTO tiles ( name, kind, room ) VALUES ('Malt Tile 5', 1, room_malt) RETURNING id INTO room_malt_5;

INSERT INTO tiles ( name, kind, room ) VALUES ('Brew Tile 1', 1, room_brew) RETURNING id INTO room_brew_1;
INSERT INTO tiles ( name, kind, room ) VALUES ('Brew Tile 2', 1, room_brew) RETURNING id INTO room_brew_2;
INSERT INTO tiles ( name, kind, room ) VALUES ('Brew Tile 3', 1, room_brew) RETURNING id INTO room_brew_3;
INSERT INTO tiles ( name, kind, room ) VALUES ('Brew Tile 4', 1, room_brew) RETURNING id INTO room_brew_4;
INSERT INTO tiles ( name, kind, room ) VALUES ('Brew Tile 5', 1, room_brew) RETURNING id INTO room_brew_5;

INSERT INTO tiles ( name, kind, room ) VALUES ('Ferment Tile 1', 1, room_ferment) RETURNING id INTO room_ferment_1;
INSERT INTO tiles ( name, kind, room ) VALUES ('Ferment Tile 2', 1, room_ferment) RETURNING id INTO room_ferment_2;
INSERT INTO tiles ( name, kind, room ) VALUES ('Ferment Tile 3', 1, room_ferment) RETURNING id INTO room_ferment_3;
INSERT INTO tiles ( name, kind, room ) VALUES ('Ferment Tile 4', 1, room_ferment) RETURNING id INTO room_ferment_4;
INSERT INTO tiles ( name, kind, room ) VALUES ('Ferment Tile 5', 1, room_ferment) RETURNING id INTO room_ferment_5;

INSERT INTO tiles ( name, kind, room ) VALUES ('Tap Tile 1', 1, room_tap) RETURNING id INTO room_tap_1;
INSERT INTO tiles ( name, kind, room ) VALUES ('Tap Tile 2', 1, room_tap) RETURNING id INTO room_tap_2;
INSERT INTO tiles ( name, kind, room ) VALUES ('Tap Tile 3', 1, room_tap) RETURNING id INTO room_tap_3;
INSERT INTO tiles ( name, kind, room ) VALUES ('Tap Tile 4', 1, room_tap) RETURNING id INTO room_tap_4;
INSERT INTO tiles ( name, kind, room ) VALUES ('Tap Tile 5', 1, room_tap) RETURNING id INTO room_tap_5;

INSERT INTO tiles ( name, kind, room ) VALUES ('Pack Tile 1', 1, room_pack) RETURNING id INTO room_pack_1;
INSERT INTO tiles ( name, kind, room ) VALUES ('Pack Tile 2', 1, room_pack) RETURNING id INTO room_pack_2;
INSERT INTO tiles ( name, kind, room ) VALUES ('Pack Tile 3', 1, room_pack) RETURNING id INTO room_pack_3;
INSERT INTO tiles ( name, kind, room ) VALUES ('Pack Tile 4', 1, room_pack) RETURNING id INTO room_pack_4;
INSERT INTO tiles ( name, kind, room ) VALUES ('Pack Tile 5', 1, room_pack) RETURNING id INTO room_pack_5;


INSERT INTO events ( name, ability )
VALUES ( 'Mill Jam!', 'Maltmakers unite! Gain 1 health when this tile is uncovered.' )
RETURNING id INTO event_malt_mill;

INSERT INTO events ( name, ability )
VALUES ( 'Secret Recipe!', 'A competitive edge on other breweries. Gain 1 health' )
RETURNING id INTO event_malt_secret;

INSERT INTO events ( name, ability )
VALUES ( 'Mash Tun', 'Excitement about a fresh batch inspires you to get a drink. Gain 1 BAC when this tile is uncovered.' )
RETURNING id INTO event_malt_tun;

INSERT INTO events ( name, ability )
VALUES ( 'Brew Kettle', 'If Fermentation Tanks is uncovered, you may hop there in one turn.' )
RETURNING id INTO event_brew_kettle;

INSERT INTO events ( name, ability )
VALUES ( 'Whirlpool', 'Mix-up! gain or lose 1 BAC or health.' )
RETURNING id INTO event_brew_whirlpool;

INSERT INTO events ( name, ability )
VALUES ( 'Boil Over!', 'That’s embarrassing. Better take a drink. Gain 1 BAC' )
RETURNING id INTO event_brew_boil;

INSERT INTO events ( name, ability )
VALUES ( 'Spare Any Grains?', 'Donate weak wort to municipal water facility to treat wastewater. Gain 1 health.' )
RETURNING id INTO event_brew_grains;


INSERT INTO events ( name, ability )
VALUES ( 'Fermentation Tanks', 'If Brew Kettle is uncovered, you may hop there in one turn.' )
RETURNING id INTO event_ferment_tank;

INSERT INTO events ( name, ability )
VALUES ( 'Infection!', 'Didn’t your mother teach you about beer-related hygiene? Lose 2 health' )
RETURNING id INTO event_ferment_infect;

INSERT INTO events ( name, ability )
VALUES ( 'Deceased Yeast!', 'So much for fermentation. Lose 2 BAC.' )
RETURNING id INTO event_ferment_yeast;


INSERT INTO events ( name, ability )
VALUES ( 'Bar', 'once per round, characters can use a purchased beverage to reduce BAC' )
RETURNING id INTO event_tap_bar;

INSERT INTO events ( name, ability )
VALUES ( 'Restaurant', 'once per round, characters can use a purchased food item to gain health ' )
RETURNING id INTO event_tap_restaurant;

INSERT INTO events ( name, ability )
VALUES ( 'Unruly Patrons!', '86 is the magic number. Lose 1 health if BAC > 4' )
RETURNING id INTO event_tap_patrons;

INSERT INTO events ( name, ability )
VALUES ( 'Dinner is Served!', 'Delicious kitchen treats. Gain 1 health' )
RETURNING id INTO event_tap_served;


INSERT INTO events ( name, ability )
VALUES ( 'Barrels', 'hide from your next random encounter.' )
RETURNING id INTO event_pack_barrels;

INSERT INTO events ( name, ability )
VALUES ( 'Conveyor Belts', 'characters can move 2 spaces next turn' )
RETURNING id INTO event_pack_conveyor;

INSERT INTO events ( name, ability )
VALUES ( 'Mislabeled!', 'Beer accidentally shipped to Svalbard. Lose 1 health.' )
RETURNING id INTO event_pack_mislabeled;

INSERT INTO events ( name, ability )
VALUES ( 'Empty Warehouse!', 'Time for a friendly game of forklift olympics. Never drink and drive. Gain 1 health, lose 1 BAC.' )
RETURNING id INTO event_pack_warehouse;


INSERT INTO series ( name ) VALUES ('Holy Trinity') RETURNING id INTO series_trinity;
INSERT INTO series ( name ) VALUES ('Dictators') RETURNING id INTO series_dictators;
INSERT INTO series ( name ) VALUES ('Demons') RETURNING id INTO series_demons;

INSERT INTO bosses ( name, series ) VALUES ( 'Hog Heaven', series_trinity ) RETURNING id INTO boss_hog;
INSERT INTO bosses ( name, series ) VALUES ( 'The Reverend', series_trinity ) RETURNING id INTO boss_reverend;
INSERT INTO bosses ( name, series ) VALUES ( 'Salvation', series_trinity ) RETURNING id INTO boss_salvation;
INSERT INTO bosses ( name, series ) VALUES ( 'Maharaja', series_dictators ) RETURNING id INTO boss_maha;
INSERT INTO bosses ( name, series ) VALUES ( 'Kaiser', series_dictators ) RETURNING id INTO boss_kaiser;
INSERT INTO bosses ( name, series ) VALUES ( 'Czar', series_dictators ) RETURNING id INTO boss_czar;
INSERT INTO bosses ( name, series ) VALUES ( 'Mephistopheles', series_demons ) RETURNING id INTO boss_meph;
INSERT INTO bosses ( name, series ) VALUES ( 'Samael', series_demons ) RETURNING id INTO boss_samael;
INSERT INTO bosses ( name, series ) VALUES ( 'The Beast', series_demons ) RETURNING id INTO boss_beast;

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_hog, 'Pigs Might Fly', 'has a .2% chance to do 8 damage to character with highest health' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_hog, 'Swine Flew', 'increases all characters’ BAC by 2' );


INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_reverend, 'Holy Roller', 'deals 2 damage to all characters' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_reverend, 'Penitence', 'strikes one character for one third of their BAC' );


INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_salvation, 'Ascension', 'reduces all characters’ health by 3' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_salvation, 'Righteous Fury', 'strikes individual for 4 damage' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_salvation, 'Water to Wine', 'causes one character’s health to be reduced to their BAC, but their BAC to be reduced by half.' );



INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_maha, 'Ayurveda', 'heals Maharaja for 2' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_maha, 'Karma', 'strikes one character for one half of their BAC)' );



INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_kaiser, 'Reich & Roll', 'deals 2 damage to all characters' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_kaiser, 'Blitz', 'increases one character’s BAC by 2' );



INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_czar, 'Filicide', 'sacrifices 2 of Czar’s health to deal 7 damage to one character' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_czar, 'Bloody Sunday', 'deals 3 damage to all characters' );



INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_meph, 'Dark Bargain', 'sacrifices 1 of Mephistopheles’ health to increase one character’s BAC by 3' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_meph, 'The Price is Right', 'reduces one character’s BAC by 1, but deals 3 damage' );



INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_samael, 'Reign of Fire', 'deals 4 damage to all characters whose BAC is below 5' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_samael, 'Mortality', 'deals 2 damage and raises BAC of a character by 2' );



INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_beast, 'The Number', 'deals 6 damage to all' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_beast, 'Gluttony', 'deals 3 damage to all characters with BAC above 5' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_beast, 'Wrath', 'deals 3 damage to one character' );

INSERT INTO bosses_abilities ( boss, name, ability )
VALUES ( boss_beast, 'Greed', 'steals 2 of one character’s health' );

END $$;
