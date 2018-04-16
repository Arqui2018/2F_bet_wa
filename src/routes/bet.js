import React from 'react';
import {Grid} from 'semantic-ui-react';
import Result from './bet/Result'
import '../css/main.css';

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

class Bet extends React.Component {
  render() {
    return (
    <Grid  verticalAlign='middle' columns={2} centered style={styles.grid}>
      <Grid.Row>
        <Grid.Column>
          <Result styles={styles}/>
        </Grid.Column>
        <Grid.Column>
          <img src="images/mascota.jpg"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

export default Bet
