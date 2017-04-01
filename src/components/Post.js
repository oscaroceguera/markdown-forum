import React, { PropTypes } from 'react'
import {POST_STYL} from '../styles/styles'
import ReactMarkdown from 'react-markdown'

const Post = ({item}) => (
  <div style={POST_STYL}>
    <ReactMarkdown source={item} />
  </div>
)

Post.propTypes = {
  item: PropTypes.string.isRequired
}

export default Post
