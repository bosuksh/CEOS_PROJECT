import React, {Component} from 'react';
import { connect } from 'react-redux';
import Login from './login';
import Secured from './secured';

export default class isLogin extends Component {

  render() { 
      if (this.props.isLoggedIn) {
        return <Secured/>;
      }
      else {
        return <Login/>;
      }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(isLogin);

