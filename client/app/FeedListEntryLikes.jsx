import React from 'react'

class FeedListEntryLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      userLike: ''
    };
    this.handleClickLike = this.handleClickLike.bind(this);
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

  render() {
    return (
      <div onClick={this.handleClickLike}>
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