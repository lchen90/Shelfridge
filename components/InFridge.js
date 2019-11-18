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
import { LoadingPage } from '.';

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
      return <LoadingPage />;
    } else {
      return (
        <Container>
          <Header />
          <Card bordered style={{ flex: 0 }}>
            {items.map(item => (
              //   const food = keys.filter(key => key.name == item.name);
              <CardItem>
                {item.timein.includes(15) ? (
                  <Thumbnail
                    source={{
                      uri:
                        'https://res.cloudinary.com/teepublic/image/private/s--A5YYlrDZ--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1506897583/production/designs/1942693_1.jpg',
                    }}
                  />
                ) : null}
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
