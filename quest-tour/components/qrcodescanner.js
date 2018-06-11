import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity,Linking,View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Icon} from 'react-native-elements';

export default class ScanScanner extends Component{ 
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  render() {
    return (
      <View style = {styles.container}>
            <QRCodeScanner
              onRead={this.onSuccess.bind(this)}
              topContent ={
                <View  style = {{justifyContent:'flex-end', marginTop: 50}} >
                  <Icon
                    name= 'ios-camera'
                    type= 'ionicon'
                    size= {100}
                    color= 'rgb(120,182,240)'
                    />
                  </View>
              }
              showMarker= {true}
            />
    </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  head: {
    flex:1,
  },
  body: {
    flex:1,
    flexDirection: 'row'
  },
  tail: {
    flex:1,
  },
  body1: {
    flex:1
  },
  body2: {
    flex:3,
    //borderRadius: 4,
    // borderWidth: 0.5,
    //borderColor: '#000',
  },
  body3: {
    flex:1
  },
});

