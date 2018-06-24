import React from 'react';
import styled from 'react-emotion';

const Input = styled('input')`
  -webkit-appearance: none;
  width: 100%;
  outline: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    background-color: ${props => props.color};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

export const Slider = props => {
  return <Input {...props} type="range" />;
};
