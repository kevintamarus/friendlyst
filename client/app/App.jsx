import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component {

    changeName() {
        let name = document.getElementById('i').value 
        document.getElementById('i').value = ''
        this.props.name(name)
    }

    render() {
        return (
            <div>
                {this.props.num.num}
                {this.props.user.name}
                <input type="text" id="i"/>
                <button onClick={this.changeName.bind(this)}>X</button>
                <button onClick={this.props.dispatch}>X</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        num: state.math,
        user: state.user
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        changeNum() {
            dispatch({
                type: 'INC',
                payload: 1
            })
        },
        name(n) {
            dispatch({
                type: 'CHANGE_NAME',
                payload: n
            })
        },
        dec() {
            dispatch({
                type: 'DEC',
                payload: 1
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)