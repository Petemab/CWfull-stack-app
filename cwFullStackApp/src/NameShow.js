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
import RatingSection from './components/RatingSection';

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

  monthLength(month, year){
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
      return 31;
    } else if (month === 3 || month === 5 || month === 8 ){
      return 30;
    } else if (month === 1 && this.isLeap(year) === true){
      return 29;
    } else {
      return 28;
    }
  }

  untilNextBirthday(){
    const now = new Date;
    const birthday = new Date;
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDay = now.getDate();
    // console.log('nowYear --->', nowYear);
    // console.log('nowMonth --->', nowMonth);
    // console.log('nowDay --->', nowDay);
    const splitDob = this.props.person.personData.dob.split('/');
    const splitMonth = splitDob[1] -1;
    birthday.setDate(splitDob[0]);
    birthday.setMonth(splitMonth);
    if (birthday < now) {
      birthday.setFullYear(birthday.getFullYear()+1);
    }
    console.log(`${this.props.person.personData.name}'s birthday is`, birthday);
    let bDayMonth = birthday.getMonth();
    let bDayDay = birthday.getDate();
    let bDayYear = birthday.getFullYear();
    // console.log(bDayMonth, bDayDay, bDayYear);
    let daysToEndOfThisMonth = this.monthLength(nowMonth,nowYear) - nowDay;
    // console.log(daysToEndOfThisMonth);
    if (bDayDay - nowDay < 0) {
      bDayMonth = bDayMonth - 1;
      bDayDay = bDayDay + this.monthLength(bDayMonth,bDayYear);
    }
    let daysDiff = bDayDay - nowDay;
    // console.log('daysDiff', daysDiff);
    if(bDayMonth - nowMonth < 0) {
      bDayYear = bDayYear - 1;
      bDayMonth = bDayMonth + 12;
    }
    let monthDiff = bDayMonth - nowMonth;
    // console.log('monthDiff', monthDiff);

    if (daysDiff === this.monthLength(bDayMonth,bDayYear)){
      daysDiff = 0;
      monthDiff = monthDiff + 1;
    }

    if (monthDiff === 12) {
      monthDiff = 0;
    // yearDiff = yearDiff + 1;
    }
    if ((daysToEndOfThisMonth !== this.monthLength(nowMonth,nowYear))
      &&(bDayDay - 1 === this.monthLength(bDayMonth,bDayYear))){
      daysDiff = daysToEndOfThisMonth;
    }

    console.log('this many months', monthDiff, 'this many days', daysDiff);
    if (monthDiff === 1 && daysDiff === 1){
      return  `${monthDiff} month and ${daysDiff} day until next birthday`;
    } else if (monthDiff === 1 && daysDiff >= 1){
      return `${monthDiff} month and ${daysDiff} days until next birthday`;
    } else if (monthDiff > 1 && daysDiff === 1){
      return `${monthDiff} months and ${daysDiff} day until next birthday`;
    } else {
      return `${monthDiff} months and ${daysDiff} days until next birthday`;
    }


  }


  render() {
    console.log(this.props);
    const { image, name, rating } = this.props.person.personData;
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
      <View style ={styles.viewStyle}>
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
              <Text style={birthdayStyle}> {this.untilNextBirthday()}</Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={containerStyle}>
              <RatingSection
                rating={rating}
              />
            </View>
          </CardSection>
        </Card>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
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
