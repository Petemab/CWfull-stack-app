//do i need this?

import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class RatingSection extends Component {
  constructor(props) {
    super(props);

    this.state = { rating: this.props.rating, editMode: false };
  }

  toggleEditMode = () => {
    this.setState({ editMode: true});
    console.log(this.state.editMode);
  }

  render() {

    if(!this.state.editMode){
      return (

        <View>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingTextStyle}>Rating:   </Text>
            <Text style={styles.ratingTextStyle}>{this.state.rating}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={ this.toggleEditMode }
            >
              <View >
                <Text style={styles.buttonTextStyle}>Edit</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      );
    }
    if(this.state.editMode){
      return (
        <View>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingTextStyle}>EDIT </Text>
            <Text style={styles.ratingTextStyle}>{this.state.rating}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={ this.toggleEditMode }
            >
              <View >
                <Text style={styles.buttonTextStyle}>Edit</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      );
    }

  }
}


const styles = StyleSheet.create({
  ratingTextStyle: {
    fontSize: 18,
    fontWeight: '500'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    height: 45,
    backgroundColor: '#007aff',
    borderRadius: 5
  },
  ratingBox: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  ratingIncDec: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    color: '#000000'
  },
  ratingButtons: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default RatingSection;
