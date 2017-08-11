import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    notificationCount: state.notificationReducer.notificationCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetNotification() {
      dispatch({
        type: 'RESET_NOTIFICATION'
      })
    },
  }
}

class Notification extends Component {
  render() {
    return (
      <div className="notification-container" onClick={this.props.resetNotification}>
        <div>Notification</div>
        {this.props.notificationCount}
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Notification)