import React from 'react';
import { css } from 'emotion';

export const Track = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={css`
      position: relative;
      width: 300px;
      height: 20px;
      background-color: black;
    `}
  >
    {props.children}
  </div>
));
