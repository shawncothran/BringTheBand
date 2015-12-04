import React from 'react'

import Search from './search';
import Band from './band';

class Bands extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    // let bands = this.props.bands.map( band => {
    //   return (
    //     <Band key={band.objectId} name={band.name}/>
    //   )
    // });
    return (
      <section>
        <Search />
        <ul>
          <Band artist={this.props.artist}
                image={this.props.image}
                followers={this.props.followers}
                genre={this.props.genre}/>
        </ul>
      </section>
    )
  }
}
export default Bands;
