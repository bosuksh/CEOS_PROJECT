import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './start.js'
import SignUp from './signUp.js'
import KoreanName from './korean_name.js'
import Person from './Person.js';
import { Router, Stack, Scene } from 'react-native-router-flux';


const App = () => (
  <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene key="home" component={Start} initial/>
      <Scene key="signup" component={SignUp}/>
      <Scene key="krName" component={KoreanName}/>
      <Scene key='person' component={Person} />
    </Stack>
  </Router>
);

export default App;
