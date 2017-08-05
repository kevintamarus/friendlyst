import { render } from 'react-dom'
import React from 'react'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'

const initialState = {
    num: 0,
    name: 'joe'
}

const mathReducer = (state=initialState, action) => {
    if (action.type === 'INC') {
        state = Object.assign({}, state, {
            num: state.num + action.payload
        })
        return state
    } else if (action.type == 'DEC') {
        state = Object.assign({}, state, {
            num: state.num - action.payload
        })
        return state
    }
    return state
}

const userReducer = (state=initialState, action) => {
    if (action.type === 'CHANGE_NAME') {
        state = Object.assign({}, state, {
            name: action.payload
        })
        return state
    }
    return state
}

const reducers = combineReducers({
    user: userReducer,
    math: mathReducer
})

const store = createStore(reducers)



render(
<Provider store={store}>
    <App />
</Provider>
,document.getElementById('app'))