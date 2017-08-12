import React from 'react';
import axios from 'axios';

class FeedListEntryLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      userLike: ''
    };
    //this.handleClickLike = this.handleClickLike.bind(this);
    this.checkLike = this.checkLike.bind(this);
  }

  handleClickLike() {
    if (this.state.likes === 0) {
      this.setState({ likes: this.state.likes + 1 });
      this.setState({ userLike: 'Kevin likes this' });
    } else {
      this.setState({ likes: this.state.likes - 1 })
      this.setState({ userLike: '' });
    }
  }

  checkLike() {
		let email = 'kevin'
		let postId = this.props.id;
		axios.post('api/like/like', {
			email: email,
			postId: postId,
		})
		.then(data => {
      console.log(data);
      this.setState({likes: this.state.likes + 1});
		})
		.catch(err => {
			console.log('like request did not go through');
		})
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
        <span>
          {this.state.userLike}
        </span>
      </div>
    )
  }
}

export default FeedListEntryLikes;