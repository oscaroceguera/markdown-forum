import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { postActions } from 'reducers/post_reducer'
import { bindActionCreators } from 'redux'
import Post from '../components/Post'
import PostEditor from '../components/PostEditor'
import _ from 'lodash'

import {Paper} from 'material-ui';
import {
  PAPER_STYL, H3_STYL,
  MSG_STYL, EDITOR_STYL
} from '../styles/styles'

class App extends Component {
  static propTypes = {
    newPost: PropTypes.string.isRequired,
    addPost: PropTypes.func.isRequired,
    listeningPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
  }
  addPost = () => {
    const { newPost, addPost } = this.props
    if (newPost === '') { return }
    addPost(newPost)
  }
  handleOnChange = (ev) => {
    this.props.listeningPost(ev.target.value)
  }
  render () {
    const {posts, newPost} = this.props
    const postsReverse = _.reverse(posts)
    return (
      <Paper style={PAPER_STYL} zDepth={2}>
        <h3 style={H3_STYL}>{'Chat!'}</h3>
        <div style={MSG_STYL}>
            { postsReverse.map((item, key) => (<Post key={key} item={item} />)) }
        </div>
        <div style={EDITOR_STYL}>
          <PostEditor addPost={this.addPost} newPost={newPost} handleOnChange={this.handleOnChange}/>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = ({postsReducer}) => {
  const postsJS = postsReducer.toJS()
  return {
    posts: postsJS.posts,
    newPost: postsJS.newPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...postActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
