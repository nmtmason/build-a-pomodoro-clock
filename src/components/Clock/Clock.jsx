import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';

import { timeFromValue } from '../../utils';

const Timer = styled('h1')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: monospace;
  font-size: 3rem;
  background-color: transparent;
`;

export const Clock = ({ seconds, maxSeconds, color }) => (
  <div
    className={css`
      position: relative;
    `}
  >
    <svg
      id="svg"
      width="400"
      height="400"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={css`
          stroke: rgb(120, 130, 140);
          stroke-width: 2px;
        `}
        r="180"
        cx="200"
        cy="200"
        fill="transparent"
      />
      <circle
        className={css`
          stroke: ${color};
          stroke-width: 20px;
          stroke-linecap: round;
          stroke-dashoffset: ${(Math.PI * 180 * 2 * (maxSeconds - seconds)) /
            maxSeconds};
        `}
        r="180"
        cx="200"
        cy="200"
        fill="transparent"
        strokeDasharray="1130"
        transform="rotate(-90 200 200)"
      />
    </svg>
    <Timer>{timeFromValue(maxSeconds - seconds)}</Timer>
  </div>
);

console.log(Math.PI * 180 * 2);
