import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from '../components/login';
import Matchedate from '../components/matchedate';
import Bet from '../components/bet'
import Profile from '../components/profile'
import { TOKEN } from "../variables"

import 'semantic-ui-css/semantic.min.css';
import '../css/main.css';

// const Matchedate = ()=> <h1>Contenido no autorizado</h1>
//
// const isAuthenticated = ()=>false;
//
// const MyRoute = (props)=>(
//   isAuthenticated()
//     ?<Route {...props}/>
//     :<Redirect to="/login" />
// )
const Logout =()=>{
  localStorage.removeItem('token');
  return <Redirect to="/login" />
}

export default ()=>(

  <Router>
    <Switch>
      <Route path="/" exact component={Matchedate} />
      <Route path="/login" exact component={Login} />
      <Route path="/bet" exact component={Bet} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/logout" exact component={Logout} />
    </Switch>
  </Router>
)
