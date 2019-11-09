import React, {Component} from 'react';
import {StyleSheet, StatusBar, Image} from 'react-native';
import {Container, Content, Text} from 'native-base';

import {loadSettings} from '../storage/settingsStore';

export default class SplashScreen extends Component {
  async componentDidMount() {
    console.log('Splash : componentDidMount fn');

    const setting = await loadSettings();

    setTimeout(() => {
      if (setting === null) {
        console.log('Navigating to  Phone Verification');
        this.props.navigation.navigate('PhoneVerification');
      } else {
        this.props.navigation.navigate('Aapp');
      }
    }, 2500);
  }

  goToHome() {}

  componentWillUnmount() {
    console.log('Splash : componentWillUnmount fn');
  }

  render() {
    return (
      <Container style={styles.containerStyle}>
        <StatusBar hidden={true} />
        <Content contentContainerStyle={styles.contentStyle}>
          <Image
            source={require('../assets/images/logo.png')}
            resizeMode="cover"
            style={styles.imageStyle}
          />
          <Text style={styles.text}>Carry &amp; Care</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 128,
    height: 128,
  },
  text: {
    color: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 18,
    fontFamily: 'roboto-medium',
  },
});
