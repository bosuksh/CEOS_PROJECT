import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';


export default class Start extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        
      <View style = {styles.statusbar}>
      </View>
        <View style = {styles.head}>
          <Text style = {{color: '#9a9c9e', fontSize: 40}}>
            Quest Tour
          </Text>
        </View>
        <View style = {styles.body}>
        </View>
        <View style = {styles.tail}>
          <Button
            buttonStyle = {styles.sign_button_container}
            onPress = { () => {Actions.push('signup')}}
            color = '#9a9c9e'
            fontSize = {25}
            backgroundColor = '#e0e0e0'
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
    backgroundColor: '#fff',
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
    height: 70,
    //backgroundColor: '#ededed',
    borderColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(250,250,250)', 
  },
});


