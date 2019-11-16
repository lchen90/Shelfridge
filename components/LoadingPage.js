import React from 'react';
import LottieView from 'lottie-react-native';
import { Container, Content, Header } from 'native-base';

export default class LoadingPage extends React.Component {
  render() {
    return (
      <Container>
        <Content style={{ paddingTop: 200 }}>
          <LottieView
            style={{ width: 400, height: 400 }}
            source={require('./animations/4762-food-carousel.json')}
            autoPlay
            loop
          />
        </Content>
      </Container>
    );
  }
}
