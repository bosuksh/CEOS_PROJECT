import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import {Icon} from 'react-native-elements';
import { 
  CameraRoll,
  View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      front: true,
    };
  }

  async componentDidMount() {
    await CameraRoll.getPhotos({ first: 1 });
  }



  takePicture = async () => { //사진찍기 버튼
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      // console.warn(data.uri);
      this.setState({ preview: data.uri });
      await CameraRoll.saveToCameraRoll(data.uri);
    }
  }

  backOnPress = async () => { //사진 찍은 후 뒤로가기 버튼
    this.setState({
      preview: null
    })
  }

  changeCamera = async () => {
    this.setState(function(prevState, props){
     return {front: !prevState.front}});
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.preview && 
          <View style = {{flex: 1}}>
            <Image source={{uri:this.state.preview}}
              style = {styles.imageView}/>
            <View style = {styles.buttonContainer}>
              <View style = {{flex: 1}}>
                <TouchableOpacity 
                  style = {styles.buttonShape}
                  onPress = {this.backOnPress}
                >
                  <Text style = {{fontSize: 10, color: 'black'}}>
                    back
                  </Text>
                </TouchableOpacity>
              </View>
              <View style = {{flex: 1}}/>
              <View style = {{flex: 1}}>
                <TouchableOpacity style = {styles.buttonShape}>
                  <Text style = {{fontSize: 10, color: 'black'}}>
                    next
                  </Text>
                </TouchableOpacity> 
              </View>
            </View>}
          </View>        
        }
        {!this.state.preview && <View style = {{flex: 1}}> 
          {this.state.front &&  <RNCamera
            ref={ref => {
            this.camera = ref;
          }}
          style={{flex: 9}}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />}
        {!this.state.front && <RNCamera
            ref={ref => {
            this.camera = ref;
          }}
          style={{flex: 9}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
          <View style = {{flex: 1}}/>
          <Icon
            reverse
            containerStyle = {{flex:1, backgroundColor: 'black', justifyContent: 'flex-start'}}
            name = 'ios-camera'
            type = 'ionicon'
            size = {50}
            onPress = {this.takePicture}
          />
          <Icon
            reverse
            name = 'ios-reverse-camera'
            type = 'ionicon'
            size = {50}
            onPress = {this.changeCamera}
            containerStyle = {{flex:1,backgroundColor: 'black',justifyContent: 'flex-start'}}
          />
          </View>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  change: {
    height: 40,
    width: 30,
  },
  capture: {
    flex: 0,
    // height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  imageView: {
    flex: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonShape: {
    flex: 0, 
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
});
