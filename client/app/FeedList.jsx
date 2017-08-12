import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'

const FeedList = ({ previousPosts, posts }) => {
  return (
    <div>
      {previousPosts.reverse().map((post, key) => <FeedListEntry post={post} key={key} postId={post.id} userId={post.userId}/>)}
    </div>
  )
}

export default FeedList