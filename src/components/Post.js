import React, { PropTypes } from 'react'
import MarkDown from 'react-remarkable'
import {POST_STYL} from '../styles/styles'

const Post = ({item}) => (
  <div style={POST_STYL}>
    <MarkDown source={item} />
  </div>
)

Post.propTypes = {
  item: PropTypes.string.isRequired
}

export default Post
