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


  findAge(){
    const now = Date.now();
    const splitDob = this.props.person.personData.dob.split('/');
    // console.log('splitDob ---->', splitDob);
    const aDate = new Date(splitDob[2], splitDob[1] -1, splitDob[0]);
    // console.log('new date', aDate);
    const timeBetween = now - aDate.getTime();
    // console.log(timeBetween);
    const age = Math.floor(timeBetween / 1000 / 60 / 60 / 24 / 365);
    return age;
  }

  isLeap(year) {
    if (year % 100 === 0 && year % 100 === 0 && year % 4 === 0) {
      console.log('true! is a leap year');
      return true;
    } else {
      console.log('False! is not a leap year');
      return false;
    }
  }

  untilNextBirthday(){
    const now = Date.now();
    const year = new Date();
    const nextYear = year.getFullYear() +1;
    const splitDob = this.props.person.personData.dob.split('/');
    // console.log('splitDob ---->', splitDob);
    const nextBirthday = new Date(nextYear, splitDob[1] -1, splitDob[0]);
    console.log(nextBirthday.getFullYear());
    if(nextBirthday > 1 && this.isLeap(nextBirthday.getFullYear()) === true)
    {
      console.log('birthday after feb and a leap year');
      // add an extra day if next birthday is
      const timeBetween = (nextBirthday.getTime() - now) + 86400000;
      return timeBetween;
    } else {
      const timeBetween = nextBirthday.getTime() - now;
      return timeBetween;
    }

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
            <Text style={ageStyle}>{this.findAge()} years old</Text>
            <Text style={birthdayStyle}> {this.untilNextBirthday()} x months and x days until next birthday</Text>
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
