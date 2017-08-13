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

	render() {
		console.log(this.state.name, this.state.imageLink)
		return (
			<div>
				<div id="comment-container">
					<div className="userinfo">
						<img src={this.state.imageLink} height="50" width="50" />
						<span className="username">{this.state.name}</span>
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