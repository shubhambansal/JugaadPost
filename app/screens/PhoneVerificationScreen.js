import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text, TextInput} from 'react-native';

export default class PhoneVerificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Text style={styles.text}>Phone Verification</Text>
        <Text style={styles.text2}>
          We need to verify your mobile number{'\n'}to get started
        </Text>
        <View style={styles.textInputRow}>
          <TextInput placeholder="+49" style={styles.textInput} />
          <TextInput
            placeholder="17672356666"
            editable={false}
            keyboardType="numeric"
            maxLength={15}
            returnKeyType="done"
            inlineImagePadding={0}
            clearButtonMode="never"
            dataDetector="phoneNumber"
            style={styles.textInput2}
          />
        </View>
        <Text style={styles.text3}>Skip for now</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    width: 273,
    height: 24,
    color: 'rgba(65,117,5,1)',
    fontSize: 20,
    fontFamily: 'roboto-700',
    textAlign: 'center',
    marginTop: 79,
    marginLeft: 44,
    alignSelf: 'center',
  },
  text2: {
    width: 318,
    height: 35,
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    marginTop: 6,
    marginLeft: 21,
    alignSelf: 'center',
  },
  textInput: {
    width: 52,
    height: 42,
    backgroundColor: 'rgba(230, 230, 230,1)',
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    fontFamily: 'roboto-regular',
    lineHeight: 14,
  },
  textInput2: {
    width: 266,
    height: 42,
    backgroundColor: 'rgba(230, 230, 230,1)',
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    fontFamily: 'roboto-regular',
    lineHeight: 14,
    letterSpacing: 0,
    marginLeft: 3,
  },
  textInputRow: {
    height: 42,
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 23,
    marginRight: 16,
  },
  materialButtonDanger: {
    width: 100,
    height: 36,
    marginTop: 29,
    alignSelf: 'center',
  },
  text3: {
    width: 137,
    height: 40,
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    marginTop: 29,
    alignSelf: 'center',
  },
});
