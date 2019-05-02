import React, { Component } from 'react';
import '../componentStyles/artwork.css';

class Artwork extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="artUnit">
        <img src={this.props.data.image} style={{ height: 800 }}></img>
        <div className="artInfo">
          <p className="unitTitle"><strong>{this.props.data.title}</strong></p>
          <p><strong>Artist:</strong> {this.props.data.firstname} {this.props.data.lastname}</p>
          <p><strong>Material:</strong> {this.props.data.material}</p>
          <p><strong>Price: $</strong> {this.props.data.price}</p>
          <p><strong>Size:</strong> {this.props.data.height} x  {this.props.data.width} in.</p>
        </div>
      </div>
    )
  }
}

export default Artwork;