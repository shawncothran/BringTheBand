import React from 'react'

import Band from './band';

let bands = this.props.bands.map( band => {
      return (
        <Band key={band.objectId} name={band.name}/>
      )
    });
    return (
      <ul>
        {bands}
      </ul>
    )
  }
}

export default Bands;
