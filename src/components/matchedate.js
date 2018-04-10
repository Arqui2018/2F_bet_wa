import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import Signin from './login/Signin'
import Date from './date'
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';

const styles={
  grid:{
    height:'100',
    width:'900px',
    margin:'0 auto',
  },
  box:{
    backgroundColor: 'white',
    border:'1px solid #e6e6e6',
    textAlign:'center',
    marginBottom:'1em',
    padding:'1em'
  }
}

class Matchedate extends Component {
  constructor(){
    super()
    this.state={allMatches:null,allTeams:null}

  }
  componentWillMount(){
    const getAllMatches = gpl`{
      allMatches {
        id
        team_local_id
        team_visitor_id
        date
      }
    }`;

    const getAllTeams=gpl`{
      allTeams {
        id
        name
      }
    }`;

    graphql(getAllMatches)(
      ({data: {allMatches=[],lodading}})=>
        this.setState({allMatches:allMatches})


    )
    graphql(getAllTeams)(
      ({data: {allTeams=[],lodading}})=>
        this.setState({allTeams:allTeams})


    )

    console.log(this.state)
  }
  getDay(){
      var days = []
      for(var i=14; i<29; i++){
        days.push(
          <Grid.Column>
            <Date day={i}/>
          </Grid.Column>
        )
      }
      return days;
  }
  render() {
    return (
    <Grid  verticalAlign='middle' columns={3} centered style={styles.grid}>
      <img src='images/APUESTAMUNDIAL2.png'/>
      <container>
        <h1>Seleccione la fecha del encuentro en el cual desea efectuar su apuesta</h1>
      </container>
      <Grid.Row>
      {
        this.getDay()
      }
      </Grid.Row>
    </Grid>
    )
  }
}

export default Matchedate
