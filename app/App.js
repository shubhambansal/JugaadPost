import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Image, Text} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.imageStack}>
          <Image
            source={require('./assets/images/logo.jpeg')}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.text}>Carry &amp; Care</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    top: 0,
    width: 200,
    height: 200,
    position: 'absolute',
    borderRadius: 100,
    borderColor: 'rgba(255,255,255,1)',
    borderWidth: 37,
    left: 0,
  },
  text: {
    top: 187,
    width: 195,
    height: 20,
    color: '#121212',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    left: 2,
  },
  imageStack: {
    width: 200,
    height: 207,
    marginTop: 177,
    marginLeft: 80,
  },
});
