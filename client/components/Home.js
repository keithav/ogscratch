import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Redirect } from 'react-router-dom';
import Artwork from './artwork';

const axios = require('axios');

let displayArt;

const mapStateToProps = store => ({
  error: store.userTraffic.error,
  art: store.userTraffic.art,
});

const mapDispatchToProps = dispatch => ({
  getArt: () => {
    dispatch(actions.getArt())
  }
});


class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    console.log("ON WILL MOUNT: CALLING this.props.getArt()");
    this.props.getArt();

  }
  
  render() {
    console.log("XXX", this.props.art);
    let parsedArt = this.props.art.map(el => {
      // console.log(el)
      return <Artwork data={el} />
    })
 
    return (
      <div>
        {console.log("YYY", this.props.art)}
        <h2>Current Art Available</h2>
        {parsedArt}
      </div>
    )
  }

}
  
 export default connect(mapStateToProps, mapDispatchToProps)(Home);