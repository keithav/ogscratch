import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';

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
        <div>
          <h3>Signup</h3>
          <label htmlFor="signUpFirstName">First Name</label>
          <input type="text" onChange={(e) => this.props.signUpFirstName(e)} id="FirstName" placeholder="FirstName"></input>
          <label htmlFor="signUpLastName">Last Name</label>
          <input type="text" onChange={(e) => this.props.signUpLastName(e)} id="LastName" placeholder="LastName"></input>
          <label htmlFor="signUpEmail">Email Address</label>
          <input type="text" onChange={(e) => this.props.signUpEmail(e)} id="Email" placeholder="Email"></input>
          <label htmlFor="loginUsername">Username</label>
          <input type="text" onChange={(e) => this.props.loginUsername(e)} id="username" placeholder="username"></input>
          <label hmtlFor="loginPassword">Password</label>
          <input type="password" onChange={(e) => this.props.loginPassword(e)} id="password" placeholder="password"></input>
          <label htmlFor="signUpLatitude">Latitude</label>
          <input type="text" onChange={(e) => this.props.signUpLatitude(e)} id="Latitude" placeholder="Latitude"></input>
          <label htmlFor="signUpLongitude">Longitude</label>
          <input type="text" onChange={(e) => this.props.signUpLongitude(e)} id="Longitude" placeholder="Longitude"></input>
          <label htmlFor="signUpBio">Short Bio</label>
          <input type="text" onChange={(e) => this.props.signUpBio(e)} id="Bio" placeholder="Bio"></input>
          <button onClick={(e) => { e.preventDefault(); this.props.createuser(this.props.username, this.props.password, this.props.firstName, this.props.lastName, this.props.email, this.props.longitude, this.props.latitude, this.props.bio)}}>Create Account</button>
        </div>
    )
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Signup);