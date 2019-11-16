import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import t from 'tcomb-form-native';

export default function LinksScreen() {
  return <ScrollView style={styles.container}></ScrollView>;
}

LinksScreen.navigationOptions = {
  title: 'Add to Fridge',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
