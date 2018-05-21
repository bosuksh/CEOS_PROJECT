import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { 
  CameraRoll,
  View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
    };
  }

  // async componentDidMount() {
  // await CameraRoll.getPhotos({ first: 1 });
  //}

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.warn(data.uri);
      this.setState({ preview: data.uri });
      await CameraRoll.saveToCameraRoll(data.uri);
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.preview && <View>
          <Image source={{uri:this.state.preview}}
                 style = {{width: '100%',
                          height: '100%'}}/></View>}
        {!this.state.preview && <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.auto}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />}
         <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  capture: {
    height: 40
  }
});
