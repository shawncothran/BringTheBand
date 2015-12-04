import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserBands = this.handleUserBands.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  handleUserBands(data) {
    this.setState({
      bands: data.results
    })
  }

  setUser(data) {
    this.setState ({
      user: data
    })
  }

  componentDidMount() {
    $.ajax({
      url: 'https://api.parse.com/1/classes/bands',
      success: this.handleUserBands,
      headers: {
        "X-Parse-Application-Id": "KAc6phjwaLyKxVrJ3yn8M740A0LTgG0NsQb02gZF",
        "X-Parse-REST-API-Key": "TTC0D1lHobCSFy70rqZsIYT562JHqOLFPo0zM8Sg"
      }
    });
  }

  render () {
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {bands: this.state.bands, handleUser: this.saveUser})
    });
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
        {childrenWithProps}
      </main>
    )
  }
}

export default App;
