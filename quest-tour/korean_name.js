import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


export default class KoreanName extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.head}>
          <Text style = {{color: 'rgb(154,156,158)',
            fontSize: 40,
          }}>
          HERE IS
        </Text>
        <Text style = {{color: 'rgb(154,156,158)',
          fontSize: 40,
        }}>
        YOUR KOREAN
      </Text>
      <Text style = {{color: 'rgb(154,156,158)',
        fontSize: 40,
      }}>
      NAME!
    </Text>
  </View>
  <View style = {styles.body}>
    <View style = {{marginTop: 50, marginBottom: 10,}}>
      <Button 
        buttonStyle = {styles.name_button_container}
        onPress = {() => {Actions.push('person', { personname: '김철수' })}}
        color = '#9a9c9e'
        backgroundColor = 'transparent'
        fontSize = {20}
        title = '김철수'
      />
    </View>
    <View style = {{marginTop: 10, marginBottom: 10,}}>
    <Button 
      buttonStyle = {styles.name_button_container}
      onPress = {() => {}}
      color = '#9a9c9e'
      backgroundColor = 'transparent'
      fontSize = {20}
      title = '김민영'
    />
  </View>
  <View style = {{marginTop: 10, marginBottom: 10,}}>
    <Button 
      buttonStyle = {styles.name_button_container}
      onPress = {() => {}}
      color = '#9a9c9e'
      backgroundColor = 'transparent'
      fontSize = {20}
      title = '김영희'
    />
  </View>
</View>
<View style = {styles.tail}>
  <Button
    buttonStyle = {styles.next_button_container}
    onPress = {() => {}}
    color = 'rgb(154,156,158)'
    backgroundColor = 'rgb(224,224,224)'
    fontSize = {25}
    title = 'NEXT'/>
</View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'center',

  },

  head: {
    flex: 3,
    justifyContent: 'center',
  },

  body: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tail: {
    flex: 3,
    justifyContent: 'center',
  },

  name_button_container: {
    width: 290,
    //flex: 1,
    height: 70,
    borderColor: '#9a9c9e',
    borderWidth: 1,
    //  borderBottomColor: 'rgb(154,156,158)',
    justifyContent: 'space-evenly',
  },
  next_button_container: {
    width: 150,
    height: 70,
    justifyContent: 'center',
    borderColor: 'rgb(224,224,224)',
    borderBottomColor: 'rgb(224,224,224)',
  }
});
