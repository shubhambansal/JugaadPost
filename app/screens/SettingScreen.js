import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <Text style={styles.text}>This is Setting screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
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
