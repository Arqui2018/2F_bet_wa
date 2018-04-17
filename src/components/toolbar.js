import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Redirect } from 'react-route-dom';

export default class Toolbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    if(this.state.name==='home'){
      return <Redirect to="/home" />
    }
    return (
      <Menu color='red' stackable inverted >
        <Menu.Item>
          <img src='images/Logo.png' />
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Inicio
        </Menu.Item>

        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        >
          Perfil
        </Menu.Item>

      </Menu>
    )
  }
}
// import {
//   Link,
// } from "react-router-dom";
//
// export default ()=> [
//   <Link to="/">Home</Link>,
//   <Link to="/register">Register</Link>
// ]
