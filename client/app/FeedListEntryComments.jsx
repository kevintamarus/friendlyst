import React, { Component } from 'react';
import FeedListEntryLikes from './FeedListEntryLikes.jsx';
import axios from 'axios';

class FeedListEntryComments extends Component {

	componentDidMount() {
		//get name and image links
		let id = this.props.comment.userId;
		axios.get(`api/user/getUserById?id=${id}`)
		.then( (data) => {
			this.setState({name: data.data.email});
			this.setState({imageLink: data.data.profilePicture});
		})
		.catch(err => {
			console.log(err, 'could not get data');
		})
	}

	render() {
		return (
			<div>
				<div id="comment-container">
					<div className="userinfo">
						<img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/19366468_10100764456410460_270583895771912490_n.jpg?oh=20a818a4fa156b1a4e7b4424589ff832&oe=59F19DE8" height="50" width="50" />
						<span className="username">Kevin</span>
					</div>
					<div className="comment-time">
						<div>{this.props.comment.updatedAt}</div>
						<div className="comment">{this.props.comment.userComment}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default FeedListEntryComments;