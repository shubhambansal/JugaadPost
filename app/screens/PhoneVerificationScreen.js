import React, {Component} from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import firebase from 'react-native-firebase';
import {
  Button,
  Container,
  Header,
  Content,
  Text,
  Input,
  Left,
  Icon,
  H2,
  Grid,
  Col,
} from 'native-base';

export default class PhoneVerificationScreen extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;

    //Default state of the user
    this.state = {
      message: '',
      user: null,
      codeInput: '',
      phoneNumber: '+49',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      console.log('Inside onAuthStateChanged', user);

      if (user) {
        this.setState({user: user.toJSON()});
      } else {
        this.setState({
          user: null,
          codeInput: '',
          phoneNumber: '+49',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  /**
   * Fn to sign in user with phone authentication
   */
  signIn = () => {
    firebase
      .auth()
      .signInWithPhoneNumber('+4917672356666')
      .then(confirmResult => {
        console.log('confirmResult = ', confirmResult);
        this.setState({confirmResult, message: 'Code has been sent!'});
      })
      .catch(error => {
        console.log(error);
        this.setState({
          message: 'Sign In With Phone Number Error: ${error.message}',
        });
      });
  };

  /**
   * Fn to sign out user
   */
  signOut = () => {
    firebase.auth().signOut();
  };

  goToHome = () => {
    console.log('Go to home');
    this.props.navigation.navigate('App');
  };

  /**
   * Main function to draw the UI of this component.
   * This function is called each time setState fn is called.
   */
  render() {
    console.log(
      'PhoneVerificationScreen : Inside render, state = ',
      this.state
    );

    return (
      <Container style={styles.container}>
        <StatusBar />
        <Header transparent>
          <Left style={styles.left}>
            <Button
              transparent
              onPress={() => {
                this.goToHome();
              }}>
              <Icon
                type="MaterialIcons"
                name="clear"
                style={{color: '#000000'}}
              />
            </Button>
          </Left>
        </Header>
        <Content style={styles.contentLayout}>
          <H2 style={styles.title}>Phone Verification</H2>
          <Text style={styles.subTitle}>
            We need to verify your mobile number to get started
          </Text>

          <Grid style={styles.gridLayout}>
            <Col style={styles.countryCodeColStyle}>
              <Input
                placeholder="+91"
                maxLength={5}
                keyboardType="phone-pad"
                autoFocus={true}
                returnKeyType="next"
              />
            </Col>
            <Col style={styles.phoneNumberColStyle}>
              <Input
                placeholder="9410237050"
                editable={true}
                keyboardType="phone-pad"
                maxLength={15}
                returnKeyType="done"
                inlineImagePadding={0}
                clearButtonMode="always"
                dataDetector="phoneNumber"
              />
            </Col>
          </Grid>
          <Button
            block
            style={styles.sendCodeBtnStyle}
            hasText
            medium
            onPress={() => {
              this.signIn();
            }}>
            <Text>Send Code</Text>
          </Button>
          <Button
            block
            medium
            transparent
            style={styles.skipBtnStyle}
            onPress={() => {
              this.goToHome();
            }}>
            <Text style={styles.skipBtnTextStyle}>Skip for now</Text>
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
  right: {
    flex: 1,
  },
  contentLayout: {
    marginLeft: 16,
    marginRight: 16,
  },
  gridLayout: {
    marginTop: 64,
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
  sendCodeBtnStyle: {
    marginTop: 48,
    width: '50%',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  skipBtnStyle: {
    marginTop: 12,
    width: '50%',
    alignSelf: 'center',
  },
  skipBtnTextStyle: {
    fontSize: 12,
    color: 'black',
  },
  countryCodeColStyle: {
    backgroundColor: '#E8E6E3',
    width: 100,
    height: 48,
  },
  phoneNumberColStyle: {
    backgroundColor: '#E8E6E3',
    height: 48,
    marginLeft: 8,
  },
});
