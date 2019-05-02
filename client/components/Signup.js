import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';

import '../componentStyles/signup.css';

let homeAfterSignupLoaded = false;

const mapStateToProps = store => ({
  username: store.userTraffic.username,
  password: store.userTraffic.password,
  firstName: store.userTraffic.firstName,
  lastName: store.userTraffic.lastName,
  email: store.userTraffic.email,
  longitude: store.userTraffic.longitude,
  latitude: store.userTraffic.latitude,
  bio: store.userTraffic.bio,
  userCreated: store.userTraffic.userCreated,
});

const mapDispatchToProps = dispatch => ({
  signUpFirstName: (event) => {
    dispatch(actions.signUpFirstName(event.target))
  },
  signUpLastName: (event) => {
    dispatch(actions.signUpLastName(event.target))
  },
  signUpEmail: (event) => {
    dispatch(actions.signUpEmail(event.target))
  },
  signUpBio: (event) => {
    dispatch(actions.signUpBio(event.target))
  },
  signUpLongitude: (event) => {
    dispatch(actions.signUpLongitude(event.target))
  },
  signUpLatitude: (event) => {
    dispatch(actions.signUpLatitude(event.target))
  },
  loginUsername: (event) => {
    dispatch(actions.loginUsername(event.target))
  },
  loginPassword: (event) => {
    dispatch(actions.loginPassword(event.target))
  },
  createuser: (username, password, firstName, lastName, email, longitude, latitude, bio) => {
    dispatch(actions.createuser(username, password, firstName, lastName, email, longitude, latitude, bio))
  }
})


class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.userCreated === true) {
      //homeAfterSignupLoaded = true;
      return <Redirect to="/Home"></Redirect>
    }
    return (
      <div id="signupMainContainer">
        <div id="signupFormContainer">
          <h3>Signup</h3>
          <div id="firstNameContainer">
            <label htmlFor="signUpFirstName">First Name: </label>
            <input type="text" onChange={(e) => this.props.signUpFirstName(e)} id="FirstName" placeholder="FirstName" required></input>
          </div>

          <div id="lastNameContainer">
            <label htmlFor="signUpLastName">Last Name: </label>
            <input type="text" onChange={(e) => this.props.signUpLastName(e)} id="LastName" placeholder="LastName" required></input>
          </div>

          <div id="emailContainer">
            <label htmlFor="signUpEmail">Email Addr: </label>
            <input type="text" onChange={(e) => this.props.signUpEmail(e)} id="Email" placeholder="Email" required></input>
          </div>

          <div id="userContainer">
            <label htmlFor="loginUsername">Username: </label>
            <input type="text" onChange={(e) => this.props.loginUsername(e)} id="username" placeholder="username" required></input>
          </div>

          <div id="passwordContainer2">
            <label hmtlFor="loginPassword">Password: </label>
            <input type="password" onChange={(e) => this.props.loginPassword(e)} id="password" placeholder="password" required></input>
          </div>

          <div id="latContainer">
            <label htmlFor="signUpLatitude">Latitude: </label>
            <input type="text" onChange={(e) => this.props.signUpLatitude(e)} id="Latitude" placeholder="Latitude" required></input>
          </div>

          <div id="longContainer">
            <label htmlFor="signUpLongitude">Longitude: </label>
            <input type="text" onChange={(e) => this.props.signUpLongitude(e)} id="Longitude" placeholder="Longitude" required></input>
          </div>

          <div id="bioContainer">
            <label htmlFor="signUpBio">Short Bio: </label>
            <input type="text" onChange={(e) => this.props.signUpBio(e)} id="Bio" placeholder="Bio" required></input>
          </div>

          <div id="submitContainer">
            <button onClick={(e) => { e.preventDefault(); this.props.createuser(this.props.username, this.props.password, this.props.firstName, this.props.lastName, this.props.email, this.props.longitude, this.props.latitude, this.props.bio) }}>Create Account</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);