import React, { useState } from 'react'
import { slide as BurgerMenu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BurgerMenu isOpen={isOpen} outerContainerId={'outer-container'} pageWrapId={'page-wrap'}>
      <NavLink exact onClick={setIsOpen} to="/">
        Form
      </NavLink>
      <NavLink onClick={setIsOpen} to="/stats">
        Stats
      </NavLink>
      <NavLink onClick={setIsOpen} to="/settings">
        Settings
      </NavLink>
      <NavLink onClick={setIsOpen} to="/category">
        Category
      </NavLink>
    </BurgerMenu>
  )
}

export default Menu
