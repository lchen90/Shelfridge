import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { InFridge } from '../components/index';
import { Container, Header } from 'native-base';

export default function SettingsScreen() {
  return (
    <Container>
      <InFridge />
    </Container>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
