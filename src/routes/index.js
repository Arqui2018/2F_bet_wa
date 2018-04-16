import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Login from '../components/login';
import Matchedate from '../components/matchedate';
import Bet from '../components/bet'

import 'semantic-ui-css/semantic.min.css';
import '../css/main.css';

export default ()=>(
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Matchedate} />
      <Route path="/bet" exact component={Bet} />
    </Switch>
  </Router>
)
