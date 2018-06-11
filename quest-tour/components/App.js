import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './start.js'
import SignUp from './signUp.js'
import KoreanName from './korean_name.js'
import nameIntro from './name_introduction.js';
import takingPhoto from './taking_photo.js';
import CameraDemo from './camera_demo.js';
import gameStart from './gameStart';
import ruleView from './ruleView.js';
import QRcode from './qrcodescanner.js';
//import login from './login.js';

import { Router, Stack, Scene } from 'react-native-router-flux';


const App = () => (
  <Router>
    <Stack key="root" hideNavBar = {true}>
      <Scene key="home" component={Start}/>
      {/*<Scene key="login" component={login}/>*/}
      <Scene key="signup" component={SignUp}/>
      <Scene key="krName" component={KoreanName}/>
      <Scene key='nameIntro' component={nameIntro} />
      <Scene key='takingPhoto' component={takingPhoto}  />
      <Scene key='cameraDemo' component={CameraDemo} />
      <Scene key='gameStart' component={gameStart} />
      <Scene key='ruleView' component={ruleView} />
      <Scene key='QRcode' component= {QRcode} initial/>
    </Stack>
  </Router>
);

export default App;

