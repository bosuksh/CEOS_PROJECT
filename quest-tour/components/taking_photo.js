import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import {Icon,Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class taking_photo_profile extends React.Component {

  render() {

    return(
      <View style= {styles.container} >
        <View style = {styles.head}>
          <Text style = {{fontSize: 40, color: '#9a9c9e',}}>
            Welcome
          </Text>
          <Text style = {{fontSize: 40, color: '#9a9c9e',}}>
            PLAYER {this.props.personname}!
          </Text>
        </View>
        <View style = {styles.body}>
          <View style = {{flex: 1}}>
            <Icon
              name = 'ios-camera'
              type = 'ionicon'
              size = {110}
              reverseColor = 'white'
              onPress = {() => Actions.push('camera_demo')}

          />
          </View>
          <View style = {{flex: 1}}>
            <Text style = {{fontSize: 25, color: '#e0e0e0',alignItems: 'center'}}>
              You can
            </Text>
            
            <Text style = {{fontSize: 25, color: '#e0e0e0',alignItems: 'center'}}>
              take your photo
            </Text>
            <Text style = {{fontSize: 25, color: '#e0e0e0',alignItems: 'center'}}>
              for Profile!
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
              title = 'PASS'
            />
          </View>
        </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create( {

  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    backgroundColor: '#fff',
  },

  head: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
  },

  body: {
    flex: 5,
    flexDirection: 'column',
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
