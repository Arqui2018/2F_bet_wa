import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


export default class Toolbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu color='red' stackable inverted >
        <Menu.Item>
          <img src='images/Logo.png' />
        </Menu.Item>


        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          href='http://localhost:3000/home'
          >
            Inicio
          </Menu.Item>

        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
          href='http://localhost:3000/profile'
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
