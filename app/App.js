import React from 'react';
import {Text} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import MyRequestScreen from './screens/MyRequestScreen';
import SettingScreen from './screens/SettingScreen';
import PhoneVerificationScreen from './screens/PhoneVerificationScreen';
import CodeVerificationScreen from './screens/CodeVerificationScreen';

/**
 * This navigator has threee  different screens
 * 1. Splash Screen
 * 2. Phone Verification i.e. Enter phone number
 * 3. Code verification
 *
 * In Splash we'll check the current user login state saved locally.
 * Accodingly we'll switch to one of the screen or go to home screen.
 */
const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  PhoneVerification: PhoneVerificationScreen,
  CodeVerification: CodeVerificationScreen,
});

/**
 * This navigator is for home screen where we have 3 tabs
 */
const HomeBottomBavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: () => <Text>Home</Text>,
    },
  },
  MyRequests: {
    screen: MyRequestScreen,
    navigationOptions: {
      tabBarLabel: () => <Text>My Requests</Text>,
    },
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: () => <Text>Settings</Text>,
    },
  },
});

const AppNavigator = createSwitchNavigator({
  Splash: InitialNavigator,
  App: HomeBottomBavigator,
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
