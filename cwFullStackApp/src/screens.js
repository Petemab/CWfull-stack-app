import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Home').default);
  Navigation.registerComponent('NameList', () => require('./NameList').default);
  Navigation.registerComponent('NameShow', () => require('./NameShow').default);
}
