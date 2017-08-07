<<<<<<< HEAD
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import Profile from './Profile.jsx'
import postsReducer from './reducer/postReducer.js'
import friendsReducer from './reducer/friendsReducer.js'
import userReducer from './reducer/userReducer.js'


const reducers = combineReducers({
   postsReducer,
   friendsReducer,
   userReducer
})

const store = createStore(reducers)


render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
</Provider>
,document.getElementById('app'))
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

ReactDOM.render( <App />, document.getElementById('app'));
>>>>>>> 9eec083e73d30ab558b8ac15214d16c00e85af7a
