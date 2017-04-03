import React, { PropTypes } from 'react'
import {POST_STYL} from '../styles/styles'
import ReactMarkdown from 'react-markdown'

const Post = ({item}) => {
  return (
    <div style={POST_STYL}>
      <ReactMarkdown source={item.post} />
    </div>
  )
}

Post.propTypes = {
  item: PropTypes.object.isRequired
}

export default Post
