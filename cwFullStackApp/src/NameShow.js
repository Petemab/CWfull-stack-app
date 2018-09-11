// Will show the details of the selected name
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class NameShow extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'NameShow'
        }
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail View</Text>
        <Button
          onPress={() => Navigation.pop(this.props.componentId)}
          title="Back"
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
