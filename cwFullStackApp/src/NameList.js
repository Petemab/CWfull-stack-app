

// will make axios request to backend and fetch list of names
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';


class NameList extends Component {


  state = { people: [
    {
      name: 'Adam Ant',
      dob: '20/05/1978',
      rating: '657',
      image: 'https://www.fillmurray.com/200/300'
    }, {
      name: 'Billy Bunter',
      dob: '07/09/1988',
      rating: '555',
      image: 'https://www.fillmurray.com/200/200'
    }, {
      name: 'Caroline Cooper',
      dob: '15/12/1990',
      rating: '666',
      image: 'https://www.fillmurray.com/200/200'
    }
  ]};



  // add axios request here to fetch the data from api when back end ready

  renderList() {
    return this.state.people.map(person =>
      <View style={styles.viewStyle} key={ person.name  }>
        <Text style={styles.textStyle}>{ person.name }</Text>
      </View>
    );
  }


  render(){
    console.log(this.state);
    return(
      <ScrollView>
        {this.renderList()}
      </ScrollView>
    );
  }



}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F0F2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
};


export default NameList;
