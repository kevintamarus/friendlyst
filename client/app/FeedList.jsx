import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'


const FeedList = ({ posts }) => {
    return (
        <ul>
            {posts.map((post, key) => <FeedListEntry post={post} key={key}/>)}
        </ul>
    )
}

export default FeedList