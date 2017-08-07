import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import axios from 'axios'
import Nav from './Nav.jsx'
import FeedList from './FeedList.jsx'
import Auth from '../Auth/Auth';
import FriendList from './FriendList.jsx'
import ChatRoomList from './ChatRoomList.jsx'

const auth = new Auth();

const mapStateToProps = (state) => {
  //state.SOMETHING is the reducer
  //so you need another . to access its properties
  return {
    posts: state.postsReducer.posts,
    friends: state.friendsReducer.friends,
    chatRooms: state.chatRoomReducer.chatRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newPost(post) {
      dispatch({
        type: 'NEW_POST',
        payload: post
      })
    },
    appendChatRoom(room) {
      dispatch({
        type: 'ADD_ROOM',
        payload: room
      })
    }
  }
}

class App extends Component {

authlogin(email, password, callback) {
var conString = "postgres://worejegx:sg-68kIGZY0dCwlgu4qBE7WUi8zHusrK@babar.elephantsql.com:5432/worejegx";
postgres(conString, function (err, client, done) {
  if (err) {
  console.log('could not connect to postgres db', err);
  return callback(err);
  }

  var query = 'SELECT id, nickname, email, password ' +
  'FROM users WHERE email = $1';

  client.query(query, [email], function (err, result) {
  // NOTE: always call `done()` here to close
  // the connection to the database
  done();

  if (err) {
      console.log('error executing query', err);
      return callback(err);
  }

  if (result.rows.length === 0) {
      return callback(new WrongUsernameOrPasswordError(email));
  }

  var user = result.rows[0];

  bcrypt.compare(password, user.password, function (err, isValid) {
      if (err) {
      callback(err);
      } else if (!isValid) {
      callback(new WrongUsernameOrPasswordError(email));
      } else {
      callback(null, {
          id: user.id,
          nickname: user.nickname,
          email: user.email
      });
      }
  });
  });
});
}

authcreate(user, callback) {
  var conString = "postgres://worejegx:sg-68kIGZY0dCwlgu4qBE7WUi8zHusrK@babar.elephantsql.com:5432/worejegx";
  postgres(conString, function (err, client, done) {
    if (err) {
    console.log('could not connect to postgres db', err);
    return callback(err);
    }
    bcrypt.hash(user.password, 10, function (err, hashedPassword) {
    var query = 'INSERT INTO users(email, password) VALUES ($1, $2)';
    client.query(query, [user.email, hashedPassword], function (err, result) {
      // NOTE: always call `done()` here to close
      // the connection to the database
      done();
      if (err) {
      console.log('error executing query', err);
      return callback(err);
      }
      if (result.rows.length === 0) {
      return callback();
      }
      callback(null);
    });
    });
  });
}

submitPost() {
  //send username along with post
    let post = $('#post-area').val()
    //should send post request to server
    this.props.newPost(post)
}

login() {
    auth.login();
    //on login, give user the token
}

changeName() {
  let name = document.getElementById('i').value 
  document.getElementById('i').value = ''
  this.props.name(name)
}

render() {
  console.log(this.props.chatRooms)
  return (
    <div> 
      <Nav login={this.login}/>
      <FeedList posts={this.props.posts}/>
      <input type="text" id="post-area"/>
      <button onClick={this.submitPost.bind(this)}>Post</button>
      <input type="text" id="i"/>
      <button onClick={this.login}>Y</button>
      <button onClick={this.changeName.bind(this)}>X</button>
      <button onClick={this.props.dispatch}>X</button>
      <FeedList posts={this.props.posts}/>
      <FriendList friends={this.props.friends}/>
      <ChatRoomList chatRooms={this.props.chatRooms}/>
    </div>
  )
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)