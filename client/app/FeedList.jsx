import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'

const FeedList = ({ posts, user }) => {
  return (
    <div>
      {posts.map((post, key) => <FeedListEntry post={post} key={post.id} user={user} />)}
    </div>
  )
}

export default FeedList