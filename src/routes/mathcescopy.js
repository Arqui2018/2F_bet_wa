import React from 'react';
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';

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

export default graphql(getAllMatches)(
  ({data: {allMatches=[],lodading}})=>{
    const dateMatch = new Set();
    for(const match of allMatches){

    }
  }
  <ul>
    {resultById.amount}
  </ul>
)
