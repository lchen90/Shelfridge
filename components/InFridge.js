import React, { Component, Fragment } from 'react';
import {
  Container,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Header,
  Thumbnail,
} from 'native-base';
import _ from 'lodash';
import { db } from '../Config';

export default class Fridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      keys: [],
      food: [],
    };
  }
  componentDidMount() {
    db.collection('fridge')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ items: data });
      });
    db.collection('food-items')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ keys: data });
      });
  }
  render() {
    const { items, keys } = this.state;
    console.log(keys);
    console.log(items);
    if (!items) {
      return <div></div>;
    } else {
      return (
        <Container>
          <Header />
          <Card bordered style={{ flex: 0 }}>
            {items.map(item => (
              //   const food = keys.filter(key => key.name == item.name);
              <CardItem>
                <Thumbnail
                  source={{
                    uri:
                      'http://cqrecords.com/wp-content/uploads/pn/png-juice-auglis-euclidean-vector-fruit-vector-melon-f.jpg',
                  }}
                />
                <Text>{item.name}</Text>
              </CardItem>
            ))}
          </Card>
        </Container>
      );
    }
  }
}

// {
//   db.collection('fridge')
//     .get()
//     .then(function(querySnapshot) {
//       querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         <CardItem>
//           <Text>{doc.data().name}</Text>
//         </CardItem>;
//       });
//     })
//     .catch(function(error) {
//       console.log('Error getting documents: ', error);
//     });
// }
