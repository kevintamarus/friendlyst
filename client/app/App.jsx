import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                Test
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        num: state.num
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        changeNum(num) {
            dispath({
                type: 'INC',
                payload: num
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(App)