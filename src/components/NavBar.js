import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = props => {
  return (
    <nav>
      <ul>
        <Link to={props.page}>
          <i
            class='fa fa-arrow-left'
            aria-hidden='true'
            style={{ color: '#424242', marginTop: '25px' }}
          ></i>
        </Link>
        <li>Two Player Games</li>
      </ul>
    </nav>
  )
}

export default NavBar
