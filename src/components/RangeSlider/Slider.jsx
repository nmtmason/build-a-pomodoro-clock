import React from 'react';
import { css } from 'emotion';

export const Slider = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={css`
      position: absolute;
      height: 20px;
      width: 10px;
      border: 1px solid red;
      left: ${props.offset}px;

      &:focus {
        background-color: blue;
      }
    `}
    tabindex="0"
  />
));
