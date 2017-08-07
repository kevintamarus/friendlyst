import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'


const FeedList = ({ posts }) => {
    return (
        <ul>
            {posts.map(post => <FeedListEntry key={post} post={post}/>)}
        </ul>
    )
}

export default FeedList