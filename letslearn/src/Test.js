import React, { Component } from 'react'
import {  StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import Icon from '../src/Assets/Icon'

import StarRating from 'react-native-star-rating';
 
 
class GeneralStarExample extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
 
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
 
  render() {
    return (
      <StarRating
      emptyStar={Icon.Check_Icon}
      fullStar={Icon.Uncheck_Icon}
        disabled={false}
        maxStars={3}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}
 
export default GeneralStarExample