# Tables

## games
id
started timestamp
finished timestamp
won bool
difficulty fk

## games_players
id
name varchar
order in
class int
game fk
active bool
cur_health int
cur_bac int

## classes
id
name varchar
desc text

## classes_difficulties
class fk
difficulty fk
base_hp int
base_bac int

## games_inventory
player fk
games_items fk
qty

## items
id
name varchar
desc text
api_id varchar
api_name varchar
api_active bool
api_info json
max_qty int —how many per deck
optional bool —are they required in the deck
alignment int —good / bad / neutral 

## games_items
item fk
qty

## reagents
id
name varchar

## games_reagents
reagent fk
game fk
tile fk
games_bosses fk
found boolean

## tiles
id
tile_name varchar
tile_type int
room fk

## rooms
id
room_name varchar

## tile_encounters
tile int fk
encounter fk
difficulty fk

## difficulties
id
name varchar

## encounters
encounter pk

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
order int
alive bool

