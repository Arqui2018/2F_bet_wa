import React from 'react';
import {Grid} from 'semantic-ui-react';
import Signin from './login/Signin'
import Match from './match'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

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
  constructor(){
    super();
    this.state={
      date: null,
      local: null,
      visitor: null
    }
  }
  selectMactchesByDate( allMatches, day){
    let matchesOnDay = [], tmp;
    allMatches.map( match => {
        tmp = new Date(match.date)
        if(tmp.getDate() === day){
          matchesOnDay.push(match)
        }
      }
    )
    return matchesOnDay;
  }

  render() {
    if (this.props.allMatchesQuery && this.props.allMatchesQuery.loading) {
      return <div>Loading</div>
    }
    if (this.props.allMatchesQuery && this.props.allMatchesQuery.error) {
      return <div>Error</div>
    }
    const Matches = this.props.allMatchesQuery.allMatches
    const MatchesOnDay = this.selectMactchesByDate( Matches, this.props.day)
    let state={
      title: null,
      visitor: null,
      date: null
    }
    return (
      MatchesOnDay.map( mat => <Match match={mat} /> )
      //   <Match match={this.state} />
      // </div>
    )
  }
}

const ALL_MATCHES_QUERY = gql`
  query AllMatches {
    allMatches {
      id
      team_local_id
      team_visitor_id
      date
    }
  }
`

export default graphql(ALL_MATCHES_QUERY, { name: 'allMatchesQuery' }) (Matches)
