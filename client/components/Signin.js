import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';

import '../componentStyles/signin.css';


let homeloaded = false;
let signuploaded = false;

const mapStateToProps = store => ({
  username: store.userTraffic.username,
  password: store.userTraffic.password,
  verified: store.userTraffic.verified,
  error: store.userTraffic.error,
  needsToSignup: store.userTraffic.needsToSignup,
});

const mapDispatchToProps = dispatch => ({
  loginUsername: (event) => {
    dispatch(actions.loginUsername(event.target))
  },
  loginPassword: (event) => {
    dispatch(actions.loginPassword(event.target))
  },
  verifyLogin: (username, password) => {
    dispatch(actions.verifyLogin(username, password))
  },
  signup: () => {
    dispatch(actions.signup())
  },
})
class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.verified === true && homeloaded === false) {
      homeloaded = true;
      return <Redirect to="/Home"></Redirect>
    }
    else if (this.props.needsToSignup === true && signuploaded === false) {
      signuploaded = true;
      return <Redirect to="/signup"></Redirect>
    }

    return (
      <div id="mainContainer">
        <div id="loginCard">
          <h3>Please Login</h3>
          <label htmlFor="loginUsername">Username</label>
          <input id="loginUsername" type="text" onChange={(e) => this.props.loginUsername(e)} id="username" placeholder="username"></input>
          <label htmlFor="loginPassword">Password</label>
          <input id="loginUsername" type="password" onChange={(e) => this.props.loginPassword(e)} id="password" placeholder="password"></input>
          <button id="loginButton" onClick={(e) => { e.preventDefault(); this.props.verifyLogin(this.props.username, this.props.password) }}>Login</button>
          <br></br>
          <br></br>
          <button id="signupButton" onClick={(e) => { e.preventDefault(); this.props.signup() }}>Signup</button>
        </div>
      </div>
    )

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);