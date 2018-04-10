import React from 'react';
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';
import Toolbar from '../components/toolbar';


const query= gpl`{
  resultById(id:2) {
    amount
  }
}`;

//const resultItems = (result, i)=><li key={i}>{result.user_id}</li>

export default graphql(query)(
  ({data: {resultById=0,lodading}})=>
  <ul>
    {resultById.amount}
  </ul>
)
