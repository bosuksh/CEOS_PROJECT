import React,{Component} from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class gameStart extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.head}>
          <Text style = {{fontSize:40, color: '#9a9c9e',}}>GREAT!</Text>
        </View>
        <View style = {styles.body}>
          <Image source = {{uri: this.props.profile}}
            style = {styles.imageContainer}/>
        </View>
        <View style = {styles.tail}>
          <Button
            buttonStyle = {styles.buttonContainer}
            color = '#9a9c9e'
            fontSize = {25}
            backgroundColor = '#e0e0e0'
            title = 'Start'
            onPress = {() => Actions.ruleView()}
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
  },

  head: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 30,
  },
  
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  tail: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    width: 200,
    height: 70, 
  },

  imageContainer: {
    width: 300,
    height: 400,
  },

})
