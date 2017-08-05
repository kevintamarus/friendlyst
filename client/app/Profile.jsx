import React, { Component } from 'react'
import Nav from './Nav.jsx'

class Profile extends Component {

  render() {
    return (
      <div className="profile-container">
        <Nav />
        This is profile page
      </div>
    )
  }
}

export default Profile