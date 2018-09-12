// Will show the details of the selected name
import React from 'react';
import {
  View,
  Text,
  // Button,
  Image,
  StyleSheet
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Card from './components/Card';
import CardSection from './components/CardSection';
import EditButton from './components/Edit';

export default class NameShow extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Detail View'
        }
      }
    };
  }



  render() {
    console.log(this.props);
    const { image, name, dob, rating } = this.props.person;
    const {
      containerStyle,
      imageStyle,
      nameStyle,
      ageStyle,
      birthdayStyle,
      ratingStyle
    } = styles;
    return (
      <Card>
        <CardSection>
          <View style={containerStyle}>
            <Image
              style={imageStyle}
              source={{ uri: image }}
            />
          </View>
        </CardSection>
        <CardSection>
          <View style={containerStyle}>
            <Text style={nameStyle}>{name}</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={containerStyle}>
            <Text style={ageStyle}>{dob}</Text>
            <Text style={birthdayStyle}> x months and x days until next birthday</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={containerStyle}>
            <Text style={ratingStyle}>Rating: {rating}</Text>
          </View>
        </CardSection>
        <CardSection>
          <EditButton />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 200,
    width: 200,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  nameStyle: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 20
  },
  ageStyle: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10
  },
  birthdayStyle: {
    fontSize: 18,
    color: '#808080',
    marginBottom: 20
  },
  ratingStyle: {
    fontSize: 18,
    fontWeight: '500'
  }
});

//
// <View style={styles.container}>
//   <Text>Detail View</Text>
//   <Button
//     onPress={() => Navigation.pop(this.props.componentId)}
//     title="Back"
//   />
// </View>
