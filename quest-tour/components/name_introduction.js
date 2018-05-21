import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class name_introduction extends React.Component {
  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.head}>
          <Text style = {{fontSize: 40, color: '#9a9c9e', alignItems: 'center'}}>
            Hi, {this.props.personname}
          </Text>
          <Text style = {{fontSize: 40, color: '#9a9c9e'}}>
            It's Nice~
          </Text>
        </View>
        <View style = {styles.body}>
          <View style = {styles.nameContainer}>
            <Text 
              style= 
              {{color: '#fff', fontSize: 25, alignItems: 'center', justifyContent: 'center',}}>
              {this.props.personname}
            </Text>
          </View>
          <View style = {{flex: 2.5,alignItems: 'center',justifyContent: 'center'}}>
            <Text style = {{fontSize: 20}}>
              Meaning
            </Text>
          </View>
        </View>
        <View style = {styles.tail}>
          <View style ={{flex: 1, alignItems: 'center'}}>
            <Button
              buttonStyle = {styles.buttonContainer}
              onPress ={() => {Actions.pop()}}
              color = '#9a9c9e'
              fontSize = {15}
              backgroundColor = '#e0e0e0'
              title = 'BACK'
            />
          </View>
          <View style = {{flex: 1, alignItems: 'center'}}>
            <Button
              buttonStyle = {styles.buttonContainer}
              onPress ={() => {Actions.push('takingPhoto',{personname: this.props.personname})}}
              color = '#9a9c9e'
              fontSize = {15}
              backgroundColor = '#e0e0e0'
              title = 'NEXT'
            />
          </View>
        </View>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
      flexDirection: 'column',
      marginTop: 20,
 //     alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#fff',
  },

  head: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',

  
  },

  body: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
  },

  nameContainer: {
    flex: 1,
    width: 300,
    height: 70,
    backgroundColor: '#9a9c9e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tail: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  
  buttonContainer: {
    width: 120,
    height: 50,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
