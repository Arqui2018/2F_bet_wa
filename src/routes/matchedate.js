import React from 'react';
import {Grid} from 'semantic-ui-react';
import Signin from './login/Signin'
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



// const matchesByDay = {};
// let dayMatch, currentDate;
//
// for (const match of allMatches) {
//   currentDate = new Date(match.date);
//   dayMatch = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).toString();
//   if (!matchesByDay.hasOwnProperty(dayMatch)) //
//     matchesByDay[dayMatch] = [];
//   matchesByDay[dayMatch].push(match);
// }
//
// for (const day in matchesByDay) {
//   console.log(day);
//   console.log('------');
//   for (const match of matchesByDay[day])
//     console.log(match);
//   console.log();
// }



class Matchedate extends React.Component {
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
  render() {
    return (
    <Grid  verticalAlign='middle' columns={3} centered style={styles.grid}>
      <img src='images/APUESTAMUNDIAL2.png'/>
      <container>
        <h1>Seleccione la fecha del encuentro en el cual desea efectuar su apuesta</h1>
      </container>
      <Grid.Row>
        <Grid.Column>

          <div>

            <div style={styles.box}>
              <h4>Junio 14</h4>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 15</h4>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 16</h4>

            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 17</h4>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 18</h4>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 19</h4>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 20</h4>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 21</h4>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 22</h4>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 23</h4>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 24</h4>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 25</h4>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 26</h4>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 27</h4>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              <h4>Junio 28</h4>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

export default Matchedate
