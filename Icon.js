import React, { Fragment } from 'react';
import { IconFamilies } from './IconConstants';
import { Text } from 'react-native';

export default function MyIcon(props) {
  return <Icon family={props.family} name={props.name} />;
}
