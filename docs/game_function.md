# Setup

- Choose difficulty
- Add players
    - Choose classes
    - Choose names
    - Set order
- Select bosses
    - Connect to API
    - Mark existing bosses / beers as active
    - Create new bosses / beers if possible
    - Present active bosses
    - Ask boss choose
    - Select random minibosses
- Select items
    - Connect to API
    - Mark existing items active
    - Create new items
    - Select items
- Place reagents in tiles

# Game loop

## Turn Start
- Bosses alive? Win game
- 3 reagents found? Reagent’s boss alive? Fight boss

## Turn actions
- Ask tile
- Item? Receive item?
    - Item action? Perform action
- Event? Perform even
- Boss? Fight boss

## Turn end
- Advance turn indicator