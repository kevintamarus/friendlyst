import React from 'react'
import FeedListEntry from './FeedListEntry.jsx'

const FeedList = ({ posts, mainUser }) => {
  return (
    <ul>
      {posts.map((post, key) => <FeedListEntry post={post} key={key} mainUser={mainUser}/>)}
    </ul>
  )
}

export default FeedList