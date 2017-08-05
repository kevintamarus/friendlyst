import { render } from 'react-dom'
import React from 'react'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'


const reducer = (state={}, action) => {
    if (action.type = 'INC') {
        state = Object.assign({}, state, {
            num: state.num + action.payload
        })
        return state
    }
    return state
}

const store = createStore(reducer, {
    num: 0
})



render(
<Provider store={store}>
    <App />
</Provider>
,document.getElementById('app'))