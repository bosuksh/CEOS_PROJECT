import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './start.js'
import SignUp from './signUp.js'
import KoreanName from './korean_name.js'
import nameIntro from './name_introduction.js';
import takingPhoto from './taking_photo.js';
import CameraDemo from './camera_demo.js';

import { Router, Stack, Scene } from 'react-native-router-flux';


const App = () => (
  <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene key="home" component={Start} />
      <Scene key="signup" component={SignUp}/>
      <Scene key="krName" component={KoreanName}/>
      <Scene key='nameIntro' component={nameIntro} />
      <Scene key='takingPhoto' component={takingPhoto}  />
      <Scene key='camera_demo' component={CameraDemo} initial/>
    </Stack>
  </Router>
);

export default App;

