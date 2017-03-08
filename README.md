# [Build a Pomodoro Clock](https://www.freecodecamp.com/challenges/build-a-pomodoro-clock)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/aNyxXR/.

1. User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
2. User Story: I can reset the clock for my next pomodoro.
3. User Story: I can customize the length of each pomodoro.

## Solution

* Built using [Sass](http://sass-lang.com/) and [Normalize.css](https://necolas.github.io/normalize.css/).
* This solution is built for mobile first and will display correctly across all browser sizes.
* A timer is created using the setInterval function.
* The timer can be paused cuasing the interval to be cleared.
* A progress bar is shown as a decreasing circle.

## Development tools

The following tools were used in development:

* Yarn / npm scripts in package.json.
* [eslint](https://github.com/eslint/eslint) and [semistandard](https://github.com/Flet/semistandard) to lint JavaScript files.
* [node-sass](https://github.com/sass/node-sass) to compile Sass files to CSS.
* [browser-sync](https://github.com/Browsersync/browser-sync) to push CSS changes to the browser.
* [onchange](https://github.com/Qard/onchange) to implement watch functionality.
* [npm-run-all](https://github.com/mysticatea/npm-run-all) to run a series of Yarn / npm background scripts in parallel.

Inspiration taken from [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/) on [CSS-Tricks](https://css-tricks.com).
