import React, { Component } from 'react';
import { Container, Card, CardItem, Text, Left, Right } from 'native-base';

export default class Fridge extends Component {
  render() {
    return (
      <Container>
        <Card bordered style={{ flex: 2, paddingBottom: -5 }}>
          <CardItem
            bordered
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text>Fridge</Text>
          </CardItem>
        </Card>
        <Card
          bordered
          style={{ flex: 1, flexDirection: 'row', paddingTop: -5 }}
        >
          <CardItem bordered style={{ flex: 1, backgroundColor: 'skyblue' }}>
            <Left>
              <Text>Low-Humidity</Text>
            </Left>
          </CardItem>
          <CardItem bordered style={{ flex: 1, backgroundColor: 'steelblue' }}>
            <Right>
              <Text>High-Humidity</Text>
            </Right>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
