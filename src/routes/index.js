import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Home from '../components/home';
import Login from '../components/login';
import Matchedate from '../components/matchedate';
import Date from '../components/date';


import 'semantic-ui-css/semantic.min.css';
import '../css/main.css';

export default ()=>(
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/home" exact component={Matchedate}/>      
    </Switch>
  </Router>
)
