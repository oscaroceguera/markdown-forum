import React, { PropTypes } from 'react'
import {POST_STYL} from '../styles/styles'
import ReactMarkdown from 'react-markdown'

const Post = ({item, onClickUp}) => {
  return (
    <div style={POST_STYL}  onClick={onClickUp}>
      <ReactMarkdown source={item.post}/>
    </div>
  )
}

Post.propTypes = {
  item: PropTypes.object.isRequired
}

export default Post
