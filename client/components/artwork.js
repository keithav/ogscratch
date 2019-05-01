import React, { Component } from 'react';

class Artwork extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {

    return (
      <div className="artUnit">
        <img src={this.props.data.image} style={{height: 800 }}></img>
        <p className="unitTitle"><strong>{this.props.data.title}</strong></p>
        <p>Description: {this.props.data.description}</p>
        <p>Material: {this.props.data.material}</p>
        <p>Price: {this.props.data.price}</p>
        </div>
    )
  }
}

export default Artwork;