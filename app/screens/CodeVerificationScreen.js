import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';

export default class CodeVerificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Text>Code Verification Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
