import React, { Component } from 'react'
import Nav from './Nav.jsx'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    user: state.userReducer.user
  }
}

class NotUserProfile extends Component {

  render() {
    return (
      <div>
        <div className="navcopy">
          <Nav />
        </div>
        <div className="not-user-profile">
          <h2>This user does not exist on Friendlyst!</h2>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(NotUserProfile);



