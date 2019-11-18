import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Button,
  Card,
  CardItem,
  Text,
  Header,
  Left,
  Thumbnail,
  Icon,
  Body,
  Content,
} from 'native-base';
import { InFridge, Fridge } from './index';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    return (
      <Container>
        <Header />
        {this.state.showComponent ? <Fridge /> : null}
        <Card style={{ flex: 0 }}>
          <CardItem header button onPress={this.onButtonClick}>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://static.vecteezy.com/system/resources/previews/000/349/230/large_2x/fridge-vector-icon.jpg',
                }}
              />
              <Text>Fridge</Text>
              <Text note> [user] Fridge</Text>
            </Left>
          </CardItem>
        </Card>
        <Card>
          <CardItem header button onPress={() => alert('This is Card Header')}>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://static.vecteezy.com/system/resources/previews/000/365/549/large_2x/vector-group-of-vegetables-on-shelf.jpg',
                }}
              />
              <Text>Shelf</Text>
              <Text note> [user] Shelf</Text>
            </Left>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
