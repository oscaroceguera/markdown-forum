import { fromJS, List, Map } from 'immutable'
import { saveToPosts, fetchPost } from 'helpers/api'
import { ref } from 'config'

// Actions
export const LISTENING_POST = 'src/reducers/post/LISTENING_POST'
export const ADD_POST = 'src/reducers/post/ADD_POST'
const POSTS_REQUEST_SUCCESS = 'src/reducers/post/POSTS_REQUEST_SUCCESS'
const POSTS_REQUEST_FAIL = 'src/reducers/post/POSTS_REQUEST_FAIL'

// Actions Creators
export const postActions = {

  listeningPost: (newPost) => ({ type: LISTENING_POST, newPost }),

  addPostFanout: () => {
    return (dispatch, getState) => {
      const post = getState().postsReducer.toJS().newPost

      if (post === '') return

      saveToPosts(post).then((postSaved) => {
        dispatch({
          type: ADD_POST,
          postSaved: postSaved
        })
      }).catch((error) => {
        console.warn('Error', error)
      })
    }
  },

  postsRequest: () => {
    return (dispatch) => {
      return ref.child('posts').once('value', (snap) => {
        dispatch({
          type: POSTS_REQUEST_SUCCESS,
          posts: snap.val()
        })
      })
      .catch((err) => {
        dispatch({
          type: POSTS_REQUEST_FAIL,
          err
        })
      })
    }
  },
}

const initalState = fromJS({
  postError: null,
  newPost: '',
  posts: []
})

function postReducer (state = initalState, action) {
  switch (action.type) {
    case LISTENING_POST:
      return state.set('newPost', action.newPost)
    case ADD_POST:
      return state
        .setIn(['postsCurrent', [action.postSaved.postId]], action.postSaved)
        .merge({
          newPost: '',
          postError: null
        })
    case POSTS_REQUEST_SUCCESS:
      return state.set('posts', action.posts)
    case POSTS_REQUEST_FAIL:
      return state.set('postError', action.err)
    default:
      return state
  }
}

export default postReducer
