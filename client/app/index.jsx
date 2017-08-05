import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'

const initialState = {
    newsFeed: [],
    currentPerson: ''
}

const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'NEW_POST':
            state = Object.assign({}, state, {
                newsFeed: [...state.newsFeed, action.payload]
            })
            return state 
        default:
            return state
    }

}



const store = createStore(postReducer)



render(
<Provider store={store}>
    <App />
</Provider>
,document.getElementById('app'))