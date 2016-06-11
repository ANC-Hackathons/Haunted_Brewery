# Tables

## difficulties
id
name varchar

## games
id
started timestamp
finished timestamp
won bool
difficulty fk

## classes
id
name varchar
flavor text

## classes_difficulties
class fk
difficulty fk
base_hp int
base_bac int


## games_players
id
name varchar
order in
class int
game fk
active bool
cur_health int
cur_bac int

## items
id
name varchar
max_qty int —how many per deck
optional bool —are they required in the deck
alignment int —good / bad / neutral 
flavor text
api_id varchar
api_name varchar
api_active bool
api_info json

## games_items
item fk
qty

## games_players_games_items
game_player fk
game_item fk
qty

## rooms
id
room_name varchar

## tiles

## encounters
id
name varchar

## tiles_encounters
tile int fk
encounter fk
difficulty fk

## bosses
id
name varchar
desc text
api_id varchar
api_name varchar
api_active bool
api_info json
mini bool


## bosses_difficulties
difficulty fk
boss fk
health int
bac int

## games_bosses
game fk
boss fk
round int
cur_hp int
cur_bac int

## reagents
id
name varchar

## games_tiles_reagents
reagent fk
game fk
tile fk
found boolean

