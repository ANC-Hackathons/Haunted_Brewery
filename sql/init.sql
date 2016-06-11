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


INSERT INTO classes
(
    name
  , flavor
  , ability
)

VALUES
(
    'Chemist'
  , 'Likes: Symmetry, Data. Dislikes: The word moist.'
  , 'Better Living Through Chemistry: Once per round, increase a friendly player’s health by 3.'
),
(
    'Bartender'
  , 'Beer is temporary, but tipping is forever.'
  , 'Drink the Pain Away: Once per round, allow one friendly player to ignore damage inflicted by an event or ability.'
),
(
	 'Brewer'
  ,'Secretly aspires to be cuddly.'
  ,'Hulk Mash: Once per round, double the damage of a single friendly player’s attack.'
),
(
   'Cellarman'
  ,'Her band is cooler than yours.'
  ,'Yeasty Beasties: Your microscopic minions swarm an enemy, preventing it from taking its next turn. Usable once per round.'
),
(
   'Keg Whisperer'
  ,'Every cask has a story to tell. *giggle* No, it''s not about you.'
  ,'Reveal Your Secrets: Once per round, peek underneath an undiscovered tile.'
),
(
   'Forklift Pilot'
  ,'Irrepressible. Do not caffeinate.'
  ,'YEEEHAWWWW: Can move two tiles per turn.'
);

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


INSERT INTO rooms
(
    name
)

VALUES
(
    'Malt Room'
),
(
    'Brew House'
),
(
    'Fermentation Room'
),
(
    'Tap Room'
),
(
    'Packaging Room'
);
