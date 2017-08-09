import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div id="nav-bar">
      <Link to="/"><button>Home</button></Link>
      <Link to="/profile"><button>Profile</button></Link>
      <button onClick={props.login}>Logout</button>
      <form className="search">
          <input type="text" />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Nav