import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import setup from './setup';
import App from './components/app';
import Bands from './components/bands';
import Profile from './components/profile';
import Login from './components/login';
import Signup from './components/signup';

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Bands}/>
      <Route path="profile" component={Profile} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('app'));
