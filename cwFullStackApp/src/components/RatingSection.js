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
    // console.log(this.state.rating);
  }

  incrementRating = (num) => {
    this.setState({ rating: this.state.rating + num });
  }
  decreaseRating = (num) => {
    this.setState({ rating: this.state.rating - num });
  }

  saveNewRating = () => {
    this.setState({
      editMode: false,
      rating: this.state.rating
    });
  }

  cancelNewRating = () => {
    this.setState({
      editMode: false,
      rating: this.props.rating
    });
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
            <Text style={styles.ratingTextStyle}>Rating:   </Text>
            <TouchableOpacity
              onPress={() => this.decreaseRating(1)}>
              <Text style={styles.editButtons}> -    </Text>
            </TouchableOpacity>
            <Text style={styles.ratingTextStyle}>{this.state.rating}</Text>
            <TouchableOpacity
              onPress={() => this.incrementRating(1)}>
              <Text style={styles.editButtons}>    + </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ratingBox}>
            <TouchableOpacity
              style={styles.cancelButtonStyle}
              onPress={() => this.cancelNewRating()}>
              <Text
                style={styles.buttonTextStyle}
              >Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButtonStyle}
              onPress={() => this.saveNewRating()}>
              <Text
                style={styles.buttonTextStyle}
              >Save</Text>
            </TouchableOpacity>

          </View>

        </View>
      );
    }

  }
}


const styles = StyleSheet.create({
  viewStyle: {

  },
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
  editButtonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  editButtons: {
    fontSize: 20,
    fontWeight: '800',
    alignItems: 'center'
  },
  cancelButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 10,
    height: 40,
    backgroundColor: '#808080',
    borderRadius: 5
  },
  saveButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 5,
    height: 40,
    backgroundColor: '#007aff',
    borderRadius: 5
  }
});

export default RatingSection;
