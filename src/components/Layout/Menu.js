import React from 'react'
import { slide as BurgerMenu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

const Menu = () => (
  <BurgerMenu outerContainerId={'outer-container'} pageWrapId={'page-wrap'}>
    <NavLink exact to="/">
      Form
    </NavLink>
    <NavLink to="/stats">Stats</NavLink>
    <NavLink to="/settings">Settings</NavLink>
    <NavLink to="/category">Category</NavLink>
  </BurgerMenu>
)

export default Menu
