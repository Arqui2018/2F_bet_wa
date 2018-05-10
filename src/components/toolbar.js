import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Redirect } from 'react-router';
import { TOKEN } from "../variables"
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class Toolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: true,
      token: props.token
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const token = this.state.token;
    const { activeItem } = this.state;
    return (
      <Menu color='red' stackable inverted >
        <Menu.Item>
          <img alt='logo Apuesta Mundial' src='images/Logo.png' />
        </Menu.Item>


        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          href='http://localhost:3000/'
        >
          Inicio
        </Menu.Item>

        {token && (
            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              href='http://localhost:3000/profile'
            >
              Perfil
            </Menu.Item>
          )
        }
        {token && (
            <Menu.Item
              name='logout'
              position='right'
              active={activeItem === 'logout'}
              href='http://localhost:3000/logout'
            >
              Salir
            </Menu.Item>
          )
        }
      </Menu>
    )
  }

  _logout = () => {

  }

  // _logout = async() => {
  //   const token = localStorage.getItem(TOKEN);
  //   await this.props.deleteSessionMutation({
  //     variables:{
  //       token
  //     }
  //   });
  //   localStorage.removeItem(TOKEN);
  //   this.setState({ login: false });
  //   window.location.reload()
  // }

}

const DELETE_SESSION = gql`
  mutation destroySession($token: String!){
    removeSession(token: $token) {
      id
    }
  }
`;


export default graphql(DELETE_SESSION, {name: 'deleteSessionMutation'}) (Toolbar)
// import {
//   Link,
// } from "react-router-dom";
//
// export default ()=> [
//   <Link to="/">Home</Link>,
//   <Link to="/register">Register</Link>
// ]
