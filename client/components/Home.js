import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';
import Artwork from './artwork';
import { Link } from 'react-router-dom';
import Logout from './Logout';

import { Trail, Spring } from "react-spring";

import '../componentStyles/home.css';




const mapStateToProps = store => ({
  username: store.userTraffic.username,
  error: store.userTraffic.error,
  art: store.userTraffic.art,
  verified: store.userTraffic.verified
});

const mapDispatchToProps = dispatch => ({
  getArt: () => {
    dispatch(actions.getArt())
  },
  clearStateOnLogout: () => {
    dispatch(actions.clearStateOnLogout())
  },
});


class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // console.log("ON WILL MOUNT: CALLING this.props.getArt()");
    this.props.getArt();

  }

  render() {
    // console.log("XXX", this.props.art);

    //testy
    // console.log("VERIFIED IS: ", this.props.verified)
    // if (this.props.verified != true) {
    //   // loaded = true;
    //   return <Redirect to="/"></Redirect>
    // }


    let parsedArt = this.props.art.map(el => {
      return <Artwork data={el} />
    })



    return (
      <div id="pageContainer">
        <h1 id="pageTitle">Current Art Available</h1>
        <div id="usernameLink">
          <strong>{this.props.username}<Link to="/logout">Logout</Link></strong>
        </div>
        <div id="artTray">
          {parsedArt}
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);