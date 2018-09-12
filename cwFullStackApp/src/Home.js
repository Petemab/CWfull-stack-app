import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {Navigation} from 'react-native-navigation';

// A fairly basic Home Screen. A tap on the button will Naviagte to the listview

class Home extends Component{
  static get options() {
    // This allowed me to put a top bar on the screen
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
        <Button style={styles.buttonStyle}
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'NameList'
              }
            }, console.log('props2', this.props));
          }}
          title="Tap Here To Start"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
