import React from 'react';

class Band extends React.Component {
  render () {
    return (
      <li className="band">
        <h2>{this.props.artist}</h2>
        <p>Followers: {this.props.followers}</p>
        <img className="bandImg" src={this.props.image} alt="band image" title="band image"/>
      </li>
    )
  }
}

export default Band;
