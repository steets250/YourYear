import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

import './index.less';

import GuestPage from './containers/GuestPage';
import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import OnboardPage from './containers/OnboardPage';
import RegisterPage from './containers/RegisterPage';
import PlannerPage from './containers/PlannerPage';

WebFont.load({
  google: {
    families: [
      'Raleway:100,200,300,400,500,600,700,800,900',
      'Montserrat:100,200,300,400,500,600,700,800,900',
    ],
  },
});

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
        <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/onboard">
            <OnboardPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/planner">
            <PlannerPage />
          </Route>
          <Route exact path="/guest">
            <GuestPage />
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