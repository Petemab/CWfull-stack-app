// Will show the details of the selected name
import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Card from './components/Card';
import CardSection from './components/CardSection';
import BigButton from './components/BigButton';

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

//   calculateAge(){
//     const splitDob = this.props.dob.split('/');
//     return console.log('splitDob ---->', splitDob);
// //     const bSplit = b.date.split('/');
// // // I then created two new dates using the three elements in the resulting arrays.
// //     const aDate = new Date(aSplit[2], aSplit[1] -1, aSplit[0]);
//   }

  componentDidMount(){
    const now = Date.now();
    const splitDob = this.props.person.personData.dob.split('/');
    console.log('splitDob ---->', splitDob);
    const aDate = new Date(splitDob[2], splitDob[1] -1, splitDob[0]);
    console.log('new date', aDate);
    const timeBetween = now - aDate.getTime();
    console.log(timeBetween);
    const age = Math.floor(timeBetween / 1000 / 60 / 60 / 24 / 365);
    // 24 * 60 * 60 * 1000,
    // const age =
    console.log(age);
  }


  render() {

    console.log(this.props);
    const { image, name, dob, rating } = this.props.person.personData;
    const {
      containerStyle,
      imageStyle,
      nameStyle,
      ageStyle,
      birthdayStyle,
      ratingStyle,
      imageContainerStyle
    } = styles;
    return (
      <Card>
        <CardSection>
          <View style={containerStyle}>
            <View style={imageContainerStyle}>
              <Image
                style={imageStyle}
                source={{ uri: image }}
              />
            </View>
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
          <BigButton>
            Edit
          </BigButton>
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
    margin: 5,
    height: 200,
    width: 200,
    borderRadius: 100
  },
  imageContainerStyle: {
    margin: 20,
    height: 212,
    width: 212,
    borderRadius: 106,
    borderWidth: 1,
    borderColor: '#808080'
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
