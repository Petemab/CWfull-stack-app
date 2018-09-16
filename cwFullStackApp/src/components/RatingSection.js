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
    console.log(this.state.rating);
  }

  // incrementRating = () => {
  //   this.setState({ rating: this.state.rating + 1 });
  // }
  decreaseRating = () => {
    this.setState({ rating: this.state.rating - 1 });
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
              onPress={this.decreaseRating()}>
              <Text style={styles.editButtons}> -    </Text>
            </TouchableOpacity>
            <Text style={styles.ratingTextStyle}>{this.state.rating}</Text>
            <TouchableOpacity>
              <Text style={styles.editButtons}>    + </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.editButtonsView}>
            <TouchableOpacity >
              <View style={styles.cancelButton}>
                <Text style={styles.buttonTextStyle}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={styles.saveButton}>
                <Text style={styles.buttonTextStyle}>Save</Text>
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
  editButtonsView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  editButtons: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 5,
    alignItems: 'center'
  }
});

export default RatingSection;
