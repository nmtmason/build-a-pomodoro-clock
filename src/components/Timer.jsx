import React, { Component } from 'react';
import styled from 'react-emotion';

import { Clock } from './Clock';
import { Controls } from './Controls';
import { Settings } from './Settings';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px auto;
  width: 400px;
  padding: 1rem;

  & > * {
    margin: 0;
    margin-bottom: 2rem;
  }
`;

export class Timer extends Component {
  state = {
    settings: {
      work: 1500,
      shortBreak: 300,
      longBreak: 1800,
      rounds: 4
    },
    playing: false,
    currentState: 'work',
    round: 1,
    seconds: 0
  };

  stateMachine = {
    work: {
      next: state => ({
        ...state,
        currentState:
          state.round < state.settings.rounds ? 'shortBreak' : 'longBreak',
        seconds: 0
      })
    },
    shortBreak: {
      next: state => ({
        ...state,
        currentState: 'work',
        round: state.round + 1,
        seconds: 0
      })
    },
    longBreak: {
      next: state => ({
        ...state,
        currentState: 'work',
        round: 1,
        seconds: 0
      })
    }
  };

  timer = null;

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      if (this.state.seconds >= this.state.settings[this.state.currentState]) {
        this.setState(
          this.stateMachine[this.state.currentState].next(this.state),
          () => console.log(`State transition: `, this.state)
        );
      } else {
        this.setState(state => ({ ...state, seconds: state.seconds + 1 }));
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  start = () => {
    this.setState(state => ({ ...state, playing: true }), this.startTimer);
  };

  stop = () => {
    this.setState(state => ({ ...state, playing: false }), this.stopTimer);
  };

  togglePlaying = event => {
    !this.state.playing ? this.start() : this.stop();
  };

  reset = () => {
    this.setState(
      state => ({ ...state, currentState: 'work', round: 1, seconds: 0 }),
      this.stop
    );
  };

  handleSettingsChange = event => {
    event.persist();

    this.setState(state => ({
      ...state,
      settings: {
        ...state.settings,
        [event.target.name]: event.target.value
      }
    }));
  };

  render() {
    let { color } = this.props.settings[this.state.currentState];
    let maxSeconds = this.state.settings[this.state.currentState];
    return (
      <Container>
        <Clock
          color={color}
          seconds={this.state.seconds}
          maxSeconds={maxSeconds}
        />
        <Controls
          playing={this.state.playing}
          togglePlaying={this.togglePlaying}
          reset={this.reset}
        />

        <Settings
          work={this.state.settings.work}
          shortBreak={this.state.settings.shortBreak}
          longBreak={this.state.settings.longBreak}
          rounds={this.state.settings.rounds}
          settings={this.props.settings}
          onSettingsChange={this.handleSettingsChange}
        />
      </Container>
    );
  }
}
