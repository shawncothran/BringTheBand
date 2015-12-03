import React from 'react';

class Band extends React.Component {
  render () {
    return (
      <article className="band">
        <h2>The Cants</h2>
        <p>Fans: 666</p>
        <img className="bandImg" src="https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfa1/t31.0-8/736631_591205900905779_32106376_o.jpg" alt="band image" title="band image"/>
      </article>
    )
  }
}

export default Band;
