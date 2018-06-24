import React from 'react';
import styled from 'react-emotion';

const PlayPause = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border: 1px solid rgb(120, 130, 140);
  border-radius: 50%;
  font-size: 2rem;
  color: rgb(245, 240, 235);
  background-color: transparent;
  outline: none;

  &:hover {
    color: rgb(200, 200, 200);
  }
`;

const Reset = styled('button')`
  border: none;
  border-bottom: 1px solid rgb(120, 130, 140);
  padding: 0 0 4px 0;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(245, 240, 235);
  background-color: transparent;
  outline: none;

  &:hover {
    color: rgb(200, 200, 200);
    border-bottom: 1px solid transparent;
  }
`;

export const Controls = ({ playing, togglePlaying, reset }) => (
  <React.Fragment>
    <PlayPause onClick={togglePlaying}>{!playing ? '➤' : '❘❘'}</PlayPause>
    <Reset onClick={reset}>Reset</Reset>
  </React.Fragment>
);
