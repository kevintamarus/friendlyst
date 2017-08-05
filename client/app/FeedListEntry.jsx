import React, { Component } from 'react'

class FeedListEntry extends Component {
    render() {
			return  (
					<li>
							{
									this.props.post
							}
					</li>
			)
		}
}

export default FeedListEntry