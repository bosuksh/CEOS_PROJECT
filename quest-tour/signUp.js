import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export default class SignUp extends React.Component {
  /*  constructor(props) {
    super(props);

    this.state =  {
      name_form: false,
      meaning_form: false,
    };
  }*/

  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.head}>
          <Text style = {{fontSize: 45, color: '#9a9c9e'}}>
            WHAT IS
          </Text>
          <Text style = {{fontSize: 45, color: '#9a9c9e'}}>
            YOUR NAME?
          </Text>
          
        </View>
        <View style = {styles.body1}/>
        <View style = {styles.body2}>
          <FormLabel style= {{fontSize: 20}}>Name</FormLabel>
          <FormInput 
            containerStyle = {styles.next_button_container}>
          </FormInput>
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
          <FormLabel style = {{fontSize: 20}}>Meaning Of Name</FormLabel>
          <FormInput 
            containerStyle = {styles.next_button_container}>
          </FormInput>
          <FormValidationMessage>{'This field is required'}</FormValidationMessage>
        </View>
        <View style = {styles.tail}>
          <Button 
            style = {styles.sign_button_container}
            onPress = { () => {}}
            color = '#9a9c9e'
            fontSize = {20}
            backgroundColor = 'rgb(224,224,224)'
            title = 'NEXT'
          />
        </View>
      </View>
    
    
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ededed',

  },

  head: {
    flex: 2.5,
    justifyContent: 'flex-end',
  },

  body1: {
    flex: 2,
  },
  body2: {
    flex: 7,
    justifyContent: 'flex-start',
    //alignItems: 'center',
  },

  tail: {
    flex: 2,
    //justifyContent: 'flex-start',
  },
  next_button_container: {
    width: 300,
    height: 40,
      //backgroundColor: '#ededed',
    borderColor: 'rgb(0,0,0)',
    borderBottomColor: 'rgb(0,0,0)',
  },
  sign_button_container: {
    width: 200,
    height: 300,
      //backgroundColor: '#ededed',
    borderColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(250,250,250)',
  }
})

