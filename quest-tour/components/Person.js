import React , { Component } from 'react';
import { View, Text } from 'react-native';

export default class Person extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <Text>{this.props.personname}</Text>
      </View>
    );
  }
}
