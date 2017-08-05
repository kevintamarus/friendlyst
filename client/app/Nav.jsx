import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div id="nav-bar">
            <Link to="/"><button>Home</button></Link>
						<Link to="/profile"><button>Profile</button></Link>
						<Link to="/login"><button>Logout</button></Link>
        </div>
    )
}


export default Nav