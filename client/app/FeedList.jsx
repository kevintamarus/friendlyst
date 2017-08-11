import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'

const FeedList = ({ previousPosts, posts, mainUser }) => {
  return (
    <div>
      {previousPosts.reverse().map((post, key) => <FeedListEntry post={post} key={key} mainUser={mainUser}/>)}
    </div>
  )
}

export default FeedList