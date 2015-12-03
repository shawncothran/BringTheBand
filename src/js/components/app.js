import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Search from './search';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     bands: []
  //   };
  //
  //   this.handleBandData = this.handleBandData.bind(this);
  // }

  handleBandData(data) {
    // this.setState({bands: data.results})
    console.log(data);
  }

  componentDidMount() {
    $.ajax({
      url: 'https://api.spotify.com/v1/artists/41CysDLDJ809nkDqtRpES8',
      success: this.handleBandData
    });
  }

  render () {
    return (
      <main>
        <header>
          <h1>Who do you NEED to see live?</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="profile">Profile</Link>
            <Link to="login">Login</Link>
          </nav>
        </header>
        <Search />
        this.props.children
      </main>
    )
  }
}

export default App;
