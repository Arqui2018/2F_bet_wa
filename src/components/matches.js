import React from 'react';
import {Grid} from 'semantic-ui-react';
import Signin from './login/Signin'
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';

const styles={
  grid:{
    height:'100%',
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

class Matches extends React.Component {

  render() {
    return (
    <Grid  verticalAlign='middle' centered style={styles.grid}>
      <container>
        <img src='images/APUESTAMUNDIAL2.png'/>
      </container>
      <container>
        <h1>Seleccione el encuentro en el cual desea efectuar su apuesta</h1>
      </container>
      <container>
        <div>
          <div style={styles.box}>
            <h2>Aqui van los partidos </h2>
            </div>
        </div>
      </container>
    </Grid>
    )
  }
}

export default Matches
