import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { ExpoLinksView } from '@expo/samples';
import t from 'tcomb-form-native';
import firebase from 'firebase';
import 'firestore';
import { db } from '../Config';

const fridge = db.collection('fridge');
const shelf = db.collection('shelf');

const Location = t.enums({ fridge: 'fridge', shelf: 'shelf' });
let Form = t.form.Form;
const Food = t.struct({
  name: t.String,
  location: Location,
  quantity: t.Number,
  timein: t.Date,
});

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Form type={Food} />
      <Button title="Add" style={{ justifyContent: 'center' }}>
        <Text>Add</Text>
      </Button>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Add food item',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
