/** @format */

import React from 'react';
import {AppRegistry, View} from 'react-native';

import NameList from './src/components/NameList';
// import NameShow from './src/components/NameShow';


const App = () => (
  <View>
    <NameList />
    {/* <NameShow /> */}
  </View>
);

AppRegistry.registerComponent('cwFullStackApp', () => App);
