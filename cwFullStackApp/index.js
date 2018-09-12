/** @format */

// This is no, I believe, the entry point to the app. Registering
// React Native Navigation and the screens and setting a root file
// of Initializing - Atempted to set root file to home,
// but it didn't work

import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

// This runs function that registers all the screens I've created in my SRC file
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    }
  });
});

// Early attempt to get Navigation workking from the RNN docs below.

// import { Navigation } from 'react-native-navigation';
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as cwFullStackApp} from './app.json';
//
// AppRegistry.registerComponent('cwFullStackApp', () => App);
// Navigation.registerComponent('navigation.playground.WelcomeScreen', () => App);
//
// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'navigation.playground.WelcomeScreen'
//       }
//     }
//   });
// });
