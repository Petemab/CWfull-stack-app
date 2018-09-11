/** @format */


import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Home'
      }
    }
  });
});


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
