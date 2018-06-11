import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: 'rule1',
    title: 'Rule 1',
    text: 'Description.\nSay something cool',
    //image: require('./assets/1.jpg'),
    //imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'rule2',
    title: 'Rule 2',
    text: 'Other cool stuff',
    //  image: require('./assets/2.jpg'),
    //imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'rule3',
    title: 'Rule 3',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    //  image: require('./assets/3.jpg'),
    // imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  _onDone = () => {
    // User finished the introduction. Show "real" app
  }
  render() {
    return (
      <View style =  {styles.container}>
        <View style = {styles.head}>
          <Text style = {styles.textContainer}> How To Play </Text>
        </View>
        <View style = {styles.body}>
          <AppIntroSlider
            slides={slides}
            onDone={this._onDone}
          />
        </View>
        <View style = {styles.tail}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex:7,
    alignItems: 'center',
    justifyContent: 'center',
    //marginLeft: 10,
    //marginRight: 10,
  },
  tail: {
    flex:2
  },
  textContainer: {
    fontSize: 30,
    color: '#59b2ab',
  }
})
