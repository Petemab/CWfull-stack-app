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
    console.log('props', this.props.componentId);
    return (
      <View style={styles.container}>
        <Text>A Full Stack Project for CW by Pete Bennett</Text>
        <Text>Using React Native, Node.js, Express and Firebase</Text>
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'NameList'
              }
            }, console.log('props2', this.props));
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
