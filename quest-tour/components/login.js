import React, {Component} from 'react';
import {ScrollView,StyleSheet, Text,TextInput,View} from 'react-native';
import {Button} from 'react-native-elements';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Login',
      username: ''
      password: ''
    };
  }

  userLogin (e) {
    this.props.onLogin(this.state.username, this.state.password);
    e.preventDefautl();
  }
  toggleRoute(e) {
    let alt = (this.state.route === 'Login')? 'SignUp': 'Login';
    this.setState({route:alt});
    e.preventDefault();
  }
  render() {
    let alt = (this.state.route === 'Login')
    return (
      <ScrollView style = {{padding:20}}>
        <Text
          style = {{fontSize: 30}}>
          {this.state.route}
        </Text>
        <TextInput 
          placeholder= 'Username'
          autoCapitalize = 'none'
          autoCorrect = {false}
          autoFocus = {true}
          value = {this.state.username}
          onChangeText= {(text) => this.setState({username: text})}
        />
        <TextInput 
          placeholder= 'Password'
          autoCapitalize = 'none'
          autoCorrect = {false}
          secureTextEntry = {true}
          value = {this.state.password}
          onChangeText= {(text) => this.setState({password: text})}
        />
        <View style  = {{margin: 7}}/>
        <Button
          onPress = {(e) = > this.userLogin(e)}
          title = {this.state.route}
        />
        <Text style = {{fontSize: 16, color: 'blue',}}
          onPress = {(e) => this.toggleRoute(e)}>
          {alt}
        </Text>
      </ScrollView>
    );
  }
}

const mapStateProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => {dispatch(login(username,password));},
    onSignUp: (username, password) => {dispatch(signup(username,password));}
  }
}

export default connect(mapStateToProps)(Login);

