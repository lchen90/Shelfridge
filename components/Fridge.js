import React, { Component } from 'react';
import { Container, Card, CardItem, Text, Left, Right } from 'native-base';
import { InFridge } from '../components/index';

export default class Fridge extends Component {
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
        {this.state.showComponent ? <InFridge /> : null}
        <Card bordered style={{ flex: 2, paddingBottom: -5 }}>
          <CardItem
            bordered
            onPress={this.onButtonClick}
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
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingTop: -5,
          }}
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
