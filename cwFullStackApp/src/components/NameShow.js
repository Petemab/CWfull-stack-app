// Will show the details of the selected name
import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class NameShow extends Component{

  render(){
    return(
      <View>
        <Image />
        <Text>Name</Text>
        <Text>Rating</Text>
      </View>
    );
  }
}

export default NameShow;
