import React from 'react'

class PostLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      userLike: ''
    };
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleClickLike() {
    if(this.state.likes === 0) {
      this.setState({ likes: this.state.likes + 1});
      this.setState({ userLike: 'Kevin likes this'});
    } else {
      this.setState({ likes: this.state.likes - 1})
      this.setState({ userLike: ''});
    }
  }

  render() {
    return (
      <div>
        <span>
          <h3>this is the LIKE section</h3>
          <img src="http://www.freeiconspng.com/uploads/like-button-png-33.jpg" height="50" width="50" onClick={this.handleClickLike}/>
          {/* // like button */}
        </span>
        <span>
          {this.state.likes}
          {/* //number of likes */}
        </span>
        <div>
          {this.state.userLike}
        </div>
      </div>
    )
  }
}

export default PostLikes;