import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Matches from './matches'

const styles={
  box:{
    backgroundColor: 'white',
    border:'1px solid #e6e6e6',
    textAlign:'center',
    marginBottom:'1em',
    padding:'1em'
  }
}


class Date extends Component {
  constructor(props){
    super(props);
    this.state={
      day: props.day,
      clicked: false
    }
    this.viewMatches = this.viewMatches.bind(this);
  }
  viewMatches(e) {
    this.setState({clicked:!this.state.clicked});
    console.log("clicked")
  }


  render() {
    return (
      <div onClick={this.viewMatches}style={styles.box} >
        <div onClick={this.viewMatches}>
          <h3 >Junio {this.state.day}</h3>
        </div>
        { this.state.clicked ?
          <Matches day={this.state.day} />
          : <a href="#" onClick={this.viewMatches}>Ver Partidos</a>
        }
      </div>
    )
  }
}
export default Date
