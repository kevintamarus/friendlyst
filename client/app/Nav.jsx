import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div id="nav-bar">
      <Link to="/profile">Profile</Link>
      <Link to="/">Home</Link>
      <div className="navbar-search">
        <input type="text" className="navbar-search-input"/>
        <button className="navbar-search-button">Search</button>
      </div>
    </div>
  )
}

export default Nav