import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Image, Text} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image
          source={require('./assets/images/logo.jpeg')}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.text}>Carry &amp; Care</Text>
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
});
