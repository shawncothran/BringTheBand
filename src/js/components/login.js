import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <input type="submit" value="login"/>
        <Link to="signup">...and if you haven't already, Sign Up!</Link>
      </form>
    )
  }
}

export default Login;
