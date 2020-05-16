import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GuestPage from './containers/GuestPage';
import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import OnboardPage from './containers/OnboardPage';
import RegisterPage from './containers/RegisterPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/guest">
            <GuestPage />
          </Route>
          <Route path="/landing">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/onboard">
            <OnboardPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);