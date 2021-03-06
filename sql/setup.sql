DROP TABLE IF EXISTS
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
  , series
  , bosses
  , bosses_difficulties
  , bosses_abilities
  , games_bosses
  , reagents
  , games_tiles_reagents
CASCADE
;

--
-- Setup Variables
--
CREATE TABLE difficulties
(
    id serial
  , name varchar NOT NULL
  , PRIMARY KEY (id)
);


CREATE TABLE roles
(
    id serial
  , name varchar NOT NULL
  , flavor text
  , ability text
  , icon varchar
  , PRIMARY KEY (id)
);


CREATE TABLE roles_difficulties
(
    role integer REFERENCES roles
  , difficulty integer REFERENCES difficulties
  , base_hp integer NOT NULL
  , base_bac integer NOT NULL
  , PRIMARY KEY ( role, difficulty )
);


CREATE TABLE items
(
    id serial
  , name varchar NOT NULL
  , max_qty integer NOT NULL DEFAULT 4
  , optional bool NOT NULL default 't'
  , alignment integer NOT NULL
  , flavor text
  , function text
  , api_id varchar
  , api_name varchar
  , api_active bool NOT NULL DEFAULT 't'
  , api_info json
  , PRIMARY KEY( id )
);


CREATE TABLE rooms
(
    id serial
  , name varchar NOT NULL
  , PRIMARY KEY( id )
);

COMMENT ON TABLE rooms IS 'Named rooms ( groups of tiles ) on the game board';


CREATE TABLE tiles
(
    id serial
  , name varchar NOT NULL
  , kind integer NOT NULL
  , room integer REFERENCES rooms
  , PRIMARY KEY( id )
);

COMMENT ON TABLE tiles IS 'Specific tiles on the game board';


CREATE TABLE events
(
    id serial
  , name varchar NOT NULL
  , ability text
  , PRIMARY KEY( id )
);

COMMENT ON TABLE events IS 'Events that can happen on a tile: fight miniboss, recieve item, etc';


CREATE TABLE tiles_events
(
    tile integer REFERENCES tiles
  , event integer REFERENCES events
  , difficulty integer REFERENCES difficulties
  , probability integer NOT NULL DEFAULT 10
  , PRIMARY KEY( tile, event, difficulty )
);

COMMENT ON TABLE tiles_events IS 'Lookup table to determine what even happens on a tile';


CREATE TABLE series
(
    id serial
  , name varchar NOT NULL
  , flavor text
  , PRIMARY KEY( id )
);

CREATE TABLE bosses
(
    id serial
  , name varchar NOT NULL
  , series integer REFERENCES series
  , api_id varchar
  , api_name varchar
  , api_active bool NOT NULL DEFAULT 't'
  , api_info json
  , PRIMARY KEY( id )
);

COMMENT ON COLUMN bosses.series IS 'The series or set of bossses this boss is in';

CREATE TABLE bosses_abilities
(
    id serial
  , boss integer REFERENCES bosses
  , name varchar not null
  , ability text
  , PRIMARY KEY( id )
);

CREATE TABLE reagents
(
    id serial
  , name varchar NOT NULL
  , kind smallint NOT NULL
  , boss integer NOT NULL REFERENCES bosses
  , api_id varchar
  , api_name varchar
  , api_active bool NOT NULL DEFAULT 't'
  , api_info json
  , PRIMARY KEY( id )
);



CREATE TABLE bosses_difficulties
(
    difficulty integer REFERENCES difficulties
  , boss integer REFERENCES bosses
  , base_hp integer NOT NULL
  , base_bac integer NOT NULL
  , PRIMARY KEY( difficulty, boss )
);

COMMENT ON TABLE bosses_difficulties IS 'Base HP and BAC of bosses dependant on level';


--
-- Game Variables
--
CREATE TABLE games
(
    id serial
  , started timestamp NOT NULL DEFAULT NOW()
  , finished timestamp
  , won boolean NOT NULL default 'f'
  , difficulty integer REFERENCES difficulties
  , PRIMARY KEY (id)
);


CREATE TABLE games_players
(
    id serial
  , name varchar NOT NULL
  , turn integer NOT NULL
  , role integer REFERENCES roles
  , game integer REFERENCES games
  , active boolean NOT NULL DEFAULT 'f'
  , cur_hp integer NOT NULL
  , cur_bac integer NOT NULL
  , PRIMARY KEY (id)
);

COMMENT ON COLUMN items.max_qty IS 'How many of this item item per deck?';
COMMENT ON COLUMN items.optional IS 'Is the item required for a complete deck?';
COMMENT ON COLUMN items.alignment IS 'Is the item good, bad or nuetral?';


CREATE TABLE games_items
(
    id serial
  , item integer REFERENCES items
  , game integer REFERENCES games
  , qty integer NOT NULL DEFAULT 4
  , PRIMARY KEY( id )
  , UNIQUE ( item, game )
);

COMMENT ON TABLE games_items IS 'The items available for discovery in a game';


CREATE TABLE games_players_games_items
(
    game_player integer REFERENCES games_players
  , game_item integer REFERENCES games_items( id )
  , qty integer
  , PRIMARY KEY( game_player, game_item )
);

COMMENT ON TABLE games_players_games_items IS 'Player''s inventory';


CREATE TABLE games_bosses
(
    game integer REFERENCES games
  , boss integer REFERENCES bosses
  , round smallint NOT NULL
  , cur_hp integer NOT NULL
  , cur_bac integer NOT NULL
  , PRIMARY KEY( game, boss )
);

COMMENT ON COLUMN games_bosses.round IS 'What round is this boss on?';

COMMENT ON TABLE reagents IS '3 reagents need to be collected to summon the boss';
COMMENT ON COLUMN reagents.kind IS 'Is this a starch, yeast, or hop reagent?';


CREATE TABLE games_tiles_reagents
(
    game integer REFERENCES games
  , tile integer REFERENCES tiles
  , reagent integer REFERENCES reagents
  , found boolean NOT NULL DEFAULT 'f'
);

COMMENT ON TABLE games_tiles_reagents IS 'Which tile are the reagents located on in the game?';


\i 'init.sql';


