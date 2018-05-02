import React, { Component } from 'react';
import {Form, Button} from "semantic-ui-react";
import {TOKEN} from "../../variables"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router';

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

class Signin extends Component {

  state = {
    login: false,
    email: '',
    password: ''
  }
  render(){
    if (this.state.login) {
       return <Redirect to='/home' />;
    }
    return(
      <div>
        <div style={styles.box}>
          <img alt="Logo" src='images/APUESTA MUNDIAL.png' />
          <Form>
            <Form.Field>
              <input
                placeholder='Email'
                onChange={e => this.setState({ email: e.target.value })}
                required />
            </Form.Field>
            <Form.Field>
              <input type="password"
                placeholder='Contraseña'
                onChange={e => this.setState({ password: e.target.value })}
                required />
            </Form.Field>
            <Button type='submit' onClick={() => this._signin()} primary fluid>Iniciar Sesión </Button>
          </Form>
        </div>
      </div>
    )
  }
  _signin = async() =>{
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(user);
    const result = await this.props.createSessisonMutation({
      variables: {
        user
      }
    });
    const token= result.data.createSession.authentication_token
    if(token){
      localStorage.setItem(TOKEN, token)
      this.setState({login: true})
    }
  }
}


const CREATE_SESSION = gql`
  mutation createSession($user: UserIntput!) {
    createSession(user: $user) {
      authentication_token
    }
  }
`;

export default graphql(CREATE_SESSION, { name: 'createSessisonMutation' }) (Signin)
