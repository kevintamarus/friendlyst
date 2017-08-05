import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    return (
        <div id="nav-bar">
            <Link to="/"><button>Home</button></Link>
						<Link to="/profile"><button>Profile</button></Link>
						<button onClick={props.login}>Logout</button>
        </div>
    )
}

export default Nav