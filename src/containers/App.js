import React, { Component } from 'react'
import Post from '../components/Post'
import PostEditor from '../components/PostEditor'

import {Paper} from 'material-ui';
import {
  PAPER_STYL, H3_STYL,
  MSG_STYL, EDITOR_STYL
} from '../styles/styles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      newPost: ''
    }
  }

  addPost = () => {
    const newState = Object.assign({}, this.state)
    if (this.state.newPost === '') {
      return
    }
    newState.posts.push(this.state.newPost)
    newState.newPost = ''
    this.setState(newState)
  }

  handleOnChange = (ev) => {
    this.setState({
      newPost: ev.target.value
    })
  }

  render () {
    return (
      <Paper style={PAPER_STYL} zDepth={2}>
        <h3 style={H3_STYL}>{'Chat!'}</h3>
        <div style={MSG_STYL}>
            { this.state.posts.map((item, key) => (<Post key={key} item={item} />)) }
        </div>
        <div style={EDITOR_STYL}>
          <PostEditor addPost={this.addPost} newPost={this.state.newPost} handleOnChange={this.handleOnChange}/>
        </div>
      </Paper>
    );
  }
}

export default App;
