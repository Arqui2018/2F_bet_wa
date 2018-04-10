import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import Date from './date';

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
};

class Matchedate extends Component {

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
      <img alt="ApuestaMundial" src='images/APUESTAMUNDIAL2.png'/>
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
