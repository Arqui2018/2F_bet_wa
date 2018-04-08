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



class Matches extends React.Component {
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
    <Grid  verticalAlign='middle' columns={4} centered style={styles.grid}>
      <Grid.Row>
        <Grid.Column>
          <div>
            <div style={styles.box}>
              {this.state.allMatches.map((match, i)=><li key={i}>{match.id}</li>)}
            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>

            </div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div>
            <div style={styles.box}>

            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
  }
}

export default Matches
