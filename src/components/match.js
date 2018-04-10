import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Match extends Component {

  constructor(){
    super();
  }

  render() {
    if (this.props.teamsMatchQuery && this.props.teamsMatchQuery.loading) {
      return <div>Loading</div>
    }
    if (this.props.teamsMatchQuery && this.props.teamsMatchQuery.error) {
      return <div>Error</div>
    }
    let teamLocal = this.props.teamsMatchQuery.team_local.name
    let teamVisitor = this.props.teamsMatchQuery.team_visitor.name
    let date = new Date(this.props.match.date)
    //Hora: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    return (
      <div>
        <h4>{teamLocal} vs {teamVisitor}</h4>
        Hora: {date.toLocaleTimeString()}
      </div>
    )
  }
}

const TEAMS_MATCH_QUERY = gql`
  query teams($local: Int!, $visitor: Int!){
      team_local: teamById(id: $local){
        name
      },
      team_visitor: teamById(id: $visitor){
        name
      }
  }
`
export default graphql(TEAMS_MATCH_QUERY, {
  options: (ownProps) => ({
    variables: {
      local: ownProps.match.team_local_id,
      visitor: ownProps.match.team_visitor_id
    }
  }),
  name: 'teamsMatchQuery' }) (Match)
