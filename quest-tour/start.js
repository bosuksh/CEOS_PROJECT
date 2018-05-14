import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button } from 'react-native-elements';

export default class Start extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        
      <View style = {styles.statusbar}>
      </View>
        <View style = {styles.head}>
        </View>
        <View style = {styles.body}>
          <Text style = {{color: '#9a9c9e', fontSize: 40}}>
            Quest Tour
          </Text>
        </View>
        <View style = {styles.tail}>
          <Button
            style = {styles.sign_button_container}
            onPress = { () => {}}
            color = '#ffffff'
            fontSize = {25}
            backgroundColor = '#9a9c9e'
            title = 'Sign Up'
          />
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
  },

  statusbar: {
    marginTop: 20,
    height: 20,
  },

  head: {
    flex: 1,
  },

  body: {
    flex: 3,
  },

  tail: {
    flex: 1,
  },
  
  sign_button_container: {
    width: 200,
    height: 200,
    //backgroundColor: '#ededed',
    borderColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(250,250,250)', 
  },
});


