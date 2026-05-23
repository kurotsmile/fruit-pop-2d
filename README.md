# Fruit Pop 2D

**Fruit Pop 2D** is a colorful HTML5 canvas arcade game about slicing, matching, and collecting juicy fruits before time runs out. The game combines fast Fruit Ninja-style slicing with a casual Match-3 mode inspired by classic candy puzzle games, creating a simple but addictive browser experience that works directly on desktop and mobile.

![Fruit Pop 2D Cover](assets/cover/cover-1920x1080.svg)

## Play Online

https://kurotsmile.github.io/fruit-pop-2d/

## Game Overview

In Fruit Pop 2D, players enter a bright arcade world filled with apples, oranges, kiwis, bananas, grapes, cherries, strawberries, and watermelons. Each fruit has its own score value, visual style, and particle effect. The goal is simple: keep scoring, build combos, survive challenge events, and beat your highest score.

The game is designed to feel quick, juicy, and responsive. Every successful slice or match creates colorful particles, score feedback, and combo pressure. If the player stops scoring for too long, the danger timer drops. When it reaches zero, the game ends, keeping the action intense and preventing passive play.

## Game Modes

### Fruit Ninja Slice Mode

Slice fruits as they fly across the screen. Move your mouse or finger through the fruits to cut them, score points, and keep the timer alive. Be careful with bombs because hitting them reduces your score and breaks your combo.

### Match-3 Fruit Mode

Play a fruit-matching puzzle mode where fruits are arranged on a board. Tap a fruit group to clear matching fruit types, gain points, trigger particle effects, and continue building your score.

## Challenge System

Fruit Pop 2D includes special challenge fruits. When a challenge event is triggered, the player must collect a required number of fruits within a short time limit. If the target is not completed before the countdown ends, the game is over.

This system adds extra pressure and makes the game more dynamic as the player progresses. The difficulty increases over time, and fruit speed becomes faster as the score grows.

## Fruit Score Table

| Fruit | Points |
|---|---:|
| Apple | 10 |
| Orange | 12 |
| Kiwi | 16 |
| Banana | 18 |
| Grapes | 22 |
| Cherry | 24 |
| Strawberry | 28 |
| Watermelon | 30 |

## Features

- HTML5 Canvas gameplay
- Fruit Ninja-style slicing mode
- Match-3 fruit puzzle mode
- Unique fruit score values
- Special challenge events
- Increasing difficulty over time
- No-score countdown bar
- Bomb obstacles
- Combo scoring system
- Particle effects and glow effects
- In-game menu UI rendered inside canvas
- In-game Game Over screen
- High score saving with `localStorage`
- CrazyGames SDK bridge with safe fallback
- GitHub Pages ready
- Mobile and desktop friendly

## CrazyGames SDK

The project includes a CrazyGames SDK loader and safe gameplay bridge calls. The game can still run normally on GitHub Pages or any static web host even when the CrazyGames SDK is not available.

Implemented bridge points:

- `gameplayStart()` when a new game starts
- `gameplayStop()` when the game ends
- Safe fallback when running outside CrazyGames

## Controls

### Menu

- Click or tap **Start Game** to play
- Click or tap **Mode** to switch between Slice and Match-3
- Click or tap **Sound** to toggle sound mode

### Slice Mode

- Drag your mouse or finger through fruits
- Avoid bombs
- Keep scoring to refill the no-score timer

### Match-3 Mode

- Tap fruits on the board
- Clear matching fruit types
- Complete challenge targets before time runs out

## Project Structure

```text
fruit-pop-2d/
├── index.html
├── style.css
├── game.js
├── assets/
│   ├── cover/
│   │   └── cover-1920x1080.svg
│   └── fruits/
│       ├── apple.svg
│       ├── orange.svg
│       ├── cherry.svg
│       └── banana.svg
└── README.md
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas API
- LocalStorage
- CrazyGames SDK bridge

## How to Run Locally

Clone the repository and open `index.html` in a browser, or run a local static server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Deployment

This game is ready for GitHub Pages. Enable GitHub Pages from the repository settings and use:

- Branch: `main`
- Folder: `/ (root)`

The game will be available at:

```text
https://kurotsmile.github.io/fruit-pop-2d/
```

## Future Improvements

- HD fruit sprite sheet
- Fruits sliced into two halves
- Juice splash effects
- Screen shake and slow motion
- Floating score text
- Power-ups and special fruits
- Online leaderboard
- Achievements
- Rewarded ads through CrazyGames
- Cloud save support
- Mobile vibration feedback
- Fullscreen mode

## License

MIT
