import React from 'react'
import { Link } from 'react-router-dom'
import Notification from './Notification.jsx'
import Auth from '../Auth/Auth';

const auth = new Auth();

const Nav = (props) => {
  return (
    <div id="nav-bar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/profile"><button>Profile</button></Link>
      <Notification />
      <button onClick={() => auth.logout()}>Logout</button>
      <form className="search">
        <input type="text" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Nav