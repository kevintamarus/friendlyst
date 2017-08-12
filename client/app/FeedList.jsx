import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'

const FeedList = ({ posts, previousPosts, user }) => {
  return (
    <div>
      <div>
        {posts.map((post, key) => <FeedListEntry post={post} key={post.id} user={user} />)}
      </div>
      <div>
        {previousPosts.map((post, key) => <FeedListEntry post={post} key={post.id} user={user} />)}
      </div>
    </div>
  )
}

export default FeedList