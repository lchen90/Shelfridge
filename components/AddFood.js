import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Text, Container } from 'native-base';
import { ExpoLinksView } from '@expo/samples';
import t from 'tcomb-form-native';
import firebase from 'firebase';
import 'firestore';
import { db } from '../Config';
import { LoadingPage } from '../components/LoadingPage';

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

export default class AddFood extends React.Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 3000);
  }

  onChange = value => {
    this.setState({ value });
    console.log(value);
  };

  onPress = () => {
    var value = this.refs.form.getValue();
    console.log('onPress');
    if (value.location === 'fridge') {
      const temp = value.timein;
      fridge.add({
        name: value.name.toLowerCase(),
        quantity: value.quantity,
        timein: new Date(value.timein),
        timeout: new Date(temp.setDate(temp.getDate() + 3)),
      });
    }
    if (value.location === 'shelf') {
      const temp = value.timein;
      shelf.add({
        name: value.name.toLowerCase(),
        quantity: value.quantity,
        timein: new Date(value.timein).toDateString(),
        timeout: new Date(temp.setDate(temp.getDate() + 3)).toDateString(),
      });
    }
  };

  render() {
    // shelf.get().then(function(querySnapshot) {
    //   querySnapshot.forEach(function(doc) {
    //     console.log(`${doc.data().timein}`);
    //   });
    // });
    const { loading } = this.state;
    if (!loading) {
      return (
        <Container>
          <LoadingPage />
        </Container>
      );
    } else {
      return (
        <Container>
          <Form
            ref="form"
            type={Food}
            value={this.state.value}
            onChange={this.onChange}
          />
          <Button
            title="Add"
            onPress={this.onPress}
            onPress={setState({
              loading: true,
            })}
            style={{ justifyContent: 'center' }}
          >
            <Text>Add</Text>
          </Button>
        </Container>
      );
    }
  }
}
