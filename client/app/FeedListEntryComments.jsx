import React, { Component } from 'react';
import FeedListEntryLikes from './FeedListEntryLikes.jsx';
import axios from 'axios';

class FeedListEntryComments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			imageLink: ''
		}
		this.timeSince = this.timeSince.bind(this);
	}

	componentDidMount() {
		//get name and image links
		let id = this.props.comment.userId;
		axios.get(`api/user/getUserById?id=${id}`)
		.then( (data) => {
			this.setState({name: data.data.nickname});
			this.setState({imageLink: data.data.profilePicture});
		})
		.catch(err => {
			console.log(err, 'could not get data');
		})
	}

	timeSince(date) {
		var seconds = Math.floor((new Date() - date) / 1000);
		var interval = Math.floor(seconds / 31536000);
		if (interval > 1) {
			return interval + " years";
		}
		interval = Math.floor(seconds / 2592000);
		if (interval > 1) {
			return interval + " months";
		}
		interval = Math.floor(seconds / 86400);
		if (interval > 1) {
			return interval + " days";
		}
		interval = Math.floor(seconds / 3600);
		if (interval > 1) {
			return interval + " hours";
		}
		interval = Math.floor(seconds / 60);
		if (interval > 1) {
			return interval + " minutes";
		}
		return Math.floor(seconds) + " seconds";
	}

	render() {
		return (
				<div className="comment-container">
					<div className="userinfo">
						<img src={this.state.imageLink} height="50" width="50" />
						<span className="username">{this.state.name}</span>
					</div>
					<div className="comment-time">
						<div>{this.timeSince(new Date(this.props.comment.updatedAt))} ago</div>
						<div className="comment">{this.props.comment.userComment}</div>
					</div>
				</div>
		)
	}
}

export default FeedListEntryComments;