import React, {Component} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {
  Button,
  Container,
  Header,
  Content,
  Text,
  Left,
  Icon,
  H2,
} from 'native-base';
import CodeFiled from 'react-native-confirmation-code-field';

export default class CodeVerificationScreen extends Component {
  onFinishCheckingCode = code => {
    console.log('Inside onFinishCheckingCode = ', code);
  };

  goToPhoneVerification = () => {
    this.props.navigation.navigate('PhoneVerification');
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar />
        <Header transparent>
          <Left style={styles.left}>
            <Button
              transparent
              onPress={() => {
                this.goToPhoneVerification();
              }}>
              <Icon
                type="MaterialIcons"
                name="arrow-back"
                style={{color: '#000000'}}
              />
            </Button>
          </Left>
        </Header>
        <Content style={styles.contentLayout}>
          <H2 style={styles.title}>Enter verrification code</H2>
          <Text style={styles.subTitle}>
            Please type the verification code {'\n'} sent to +4917672356666
            {this.props.phoneNumber}
          </Text>

          <CodeFiled
            autoFocus
            blurOnSubmit={false}
            variant="clear"
            codeLength={6}
            keyboardType="numeric"
            cellProps={{style: styles.input}}
            containerProps={styles.inputWrapStyle}
            onFulfill={this.onFinishCheckingCode}
          />

          <Button
            block
            style={styles.doneBtnStyle}
            hasText
            medium
            onPress={() => {
              this.signIn();
            }}>
            <Text>Done</Text>
          </Button>
          <Button
            block
            medium
            transparent
            style={styles.resendBtnStyle}
            onPress={() => {
              this.goToHome();
            }}>
            <Text style={styles.resendBtnTextStyle}>Resend code</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  left: {
    flex: 1,
  },
  body: {
    flex: 8,
  },
  contentLayout: {
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    flex: 1,
    color: 'rgba(65,117,5,1)',
    fontFamily: 'roboto-medium',
    textAlign: 'center',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    alignSelf: 'center',
  },
  subTitle: {
    color: 'rgba(0,0,0,1)',
    fontSize: 14,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    marginTop: 4,
    alignSelf: 'center',
  },
  doneBtnStyle: {
    marginTop: 48,
    width: '50%',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  resendBtnStyle: {
    marginTop: 12,
    width: '50%',
    alignSelf: 'center',
  },
  resendBtnTextStyle: {
    fontSize: 12,
    color: 'black',
  },
  inputWrapStyle: {
    height: 50,
    marginTop: 30,
  },
  input: {
    height: 50,
    width: 40,
    borderRadius: 3,
    color: '#fff',
    backgroundColor: 'rgba(65,117,5,0.7)',
  },
});
