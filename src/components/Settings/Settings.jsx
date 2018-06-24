import React from 'react';
import styled from 'react-emotion';

import { Heading } from './Heading';
import { Description } from './Description';
import { Slider } from './Slider';

import { timeFromValue } from '../../utils';

const Group = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > * {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

export const Settings = props =>
  [
    { key: 'work', name: 'Work', value: value => timeFromValue(value) },
    {
      key: 'shortBreak',
      name: 'Short Break',
      value: value => timeFromValue(value)
    },
    {
      key: 'longBreak',
      name: 'Long Break',
      value: value => timeFromValue(value)
    },
    { key: 'rounds', name: 'Rounds', value: value => value }
  ].map(({ key, name, value }) => (
    <Group key={key}>
      <Heading>{name}</Heading>
      <Description>{value(props[key])}</Description>
      <Slider
        name={key}
        color={props.settings[key].color}
        min={props.settings[key].min}
        max={props.settings[key].max}
        value={props[key]}
        onChange={props.onSettingsChange}
      />
    </Group>
  ));
