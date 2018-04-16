import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Home from './home';
import Login from './login';
import Matchedate from './matchedate';
import Matches from './matches';
import Bet from './bet';
import Profile from './profile';

import 'semantic-ui-css/semantic.min.css';
import '../css/main.css';

export default ()=>(
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/matchedate" exact component={Matchedate}/>
      <Route path="/matches" exact component={Matches}/>
      <Route path="/bet" exact component={Bet}/>
      <Route path="/profile" exact component={Profile}/>

    </Switch>
  </Router>
)
