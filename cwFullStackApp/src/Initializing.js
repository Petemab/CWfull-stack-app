import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { goHome } from './navigation';

// I don't fully understand why this initializing screen is relvant,
// but it wasn't working until I found an example that used this and added it.


export default class Initialising extends React.Component {
  async componentDidMount() {
    goHome();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
