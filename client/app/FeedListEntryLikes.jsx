import React from 'react';
import axios from 'axios';

class FeedListEntryLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      userLikes: []
    };
    //this.handleClickLike = this.handleClickLike.bind(this);
    this.checkLike = this.checkLike.bind(this);
  }

  componentDidMount() {
    let id = this.props.post.id;
    axios.get(`api/like/getLikes?postId=${id}`)
    .then((data) => {
      this.setState({userLikes: data.data});
      this.setState({likes: this.state.userLikes.length});
    })
    .catch(err => {
      console.log(err, 'could not get likes')
    })
  }

  checkLike() {
		let userId = this.props.user.id;
    let postId = this.props.post.id;
    let liked = false;
    this.state.userLikes.forEach(obj => {
      if(obj.userId === this.props.user.id) {
        liked = true;
      }
    })
    console.log(liked, 'liked or not')
    if(liked === false) {
      axios.post('api/like/likePost', {
        userId: userId,
        postId: postId,
      })
      .then(data => {
        this.setState({likes: this.state.likes + 1});
      })
      .catch(err => {
        console.log('like request did not go through');
      })
    } else {
      axios.delete(`api/like/unlikePost?userId=${userId}&postId=${postId}`)
      .then(data => {
        this.setState({likes: this.state.likes - 1});
      })
      .catch(err => {
        console.log('unlike request did not go through');
      })
    }
	}

  render() {
    return (
      <div onClick={this.checkLike}>
        <span>
          {this.state.likes}
        </span>
        <span>
          <img src="./images/like.jpg" height="25" width="25" />
        </span>
        <div className="user-likes">
          {/* {this.state.userLikes.map((user, key) => {
            <span user={user} key={key}>this works</span>
          })} */}
        </div>
      </div>
    )
  }
}

export default FeedListEntryLikes;