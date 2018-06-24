import React from 'react';

import { Timer } from './components/Timer';

const App = props => (
  <Timer
    settings={{
      work: {
        color: 'rgb(255, 85, 85)',
        min: 300,
        max: 1800
      },
      shortBreak: {
        color: 'rgb(0, 225, 135)',
        min: 60,
        max: 600
      },
      longBreak: {
        color: 'rgb(30, 185, 215)',
        min: 900,
        max: 3600
      },
      rounds: {
        color: 'rgb(245, 240, 235)',
        min: 1,
        max: 10
      }
    }}
  />
);

export default App;
