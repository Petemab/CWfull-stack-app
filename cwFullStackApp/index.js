/** @format */

import React from 'react';
import {AppRegistry, View} from 'react-native';

import Index from './src/components/Index';
import Show from './src/components/Show';


const App = () => (
  <View>
    <Index />
    <Show />
  </View>
);

AppRegistry.registerComponent('cwFullStackApp', () => App);
