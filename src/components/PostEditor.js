import React, { PropTypes } from 'react'
import {TextField} from 'material-ui'
import {RaisedButton} from 'material-ui';
import {TXT_STYL, BTN_CONTAINER} from '../styles/styles'

const PostEditor = ({newPost, handleOnChange, addPost}) => {
  return (
    <div>
      <TextField
        style={TXT_STYL}
        value={newPost}
        hintText='Add new message!'
        onChange={handleOnChange}
        multiLine={true}
        rows={2}
        rowsMax={2}
        underlineShow={false}
      />
    <div style={BTN_CONTAINER}>
      <RaisedButton primary onClick={addPost} label={'Post'}/>
    </div>
    </div>
  )
}

PostEditor.propTypes = {
  newPost: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired
}

export default PostEditor
