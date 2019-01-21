import React, { Component } from 'react';
import { View, Text, TouchableHighlight  } from 'react-native';

class EventForm extends Component {

  handleAddEvent = () => this.props.navigation.navigate('list');
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.handleAddEvent}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
