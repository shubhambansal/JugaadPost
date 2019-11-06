import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Image, Text} from 'react-native';
import {Button} from 'native-base';

import {loadSettings} from '../storage/settingsStore';

export default class SplashScreen extends Component {
  async componentDidMount() {
    console.log('Splash : componentDidMount fn');

    const setting = await loadSettings();

    // if (setting === null) {
    //   console.log('Navigating to  Phone Verification');
    //   this.props.navigation.navigate('PhoneVerification');
    // }
  }

  componentWillUnmount() {
    console.log('Splash : componentWillUnmount fn');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={require('../assets/images/logo.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>Carry &amp; Care</Text>

        <Button
          style={styles.materialButtonDanger}
          onPress={() => this.props.navigation.navigate('App')}>
          <Text>Home</Text>
        </Button>

        <Button
          style={styles.materialButtonDanger}
          onPress={() => this.props.navigation.navigate('PhoneVerification')}>
          <Text>Phone verification</Text>
        </Button>

        <Button
          style={styles.materialButtonDanger}
          onPress={() => this.props.navigation.navigate('CodeVerification')}>
          <Text>Code verification</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 164,
    alignSelf: 'center',
  },
  text: {
    width: 195,
    height: 30,
    color: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    marginTop: 15,
    alignSelf: 'center',
  },
  materialButtonDanger: {
    width: 100,
    height: 36,
    marginTop: 29,
    alignSelf: 'center',
  },
});
