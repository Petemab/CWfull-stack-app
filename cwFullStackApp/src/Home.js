import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Navigation} from 'react-native-navigation';


class Home extends Component{
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home'
        }
      }
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to my CW full stack RN App</Text>
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'NameList'
              }
            });
          }}
          title="Click here to start"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
