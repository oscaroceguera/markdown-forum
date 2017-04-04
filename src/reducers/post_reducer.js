import { fromJS } from 'immutable'

// Actions
export const LISTENING_POST = 'src/reducers/post/LISTENING_POST'
export const ADD_POST_REQUEST = 'src/reducers/post/ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'src/reducers/post/ADD_POST_SUCCESS'
export const ADD_POST_FAIL = 'src/reducers/post/ADD_POST_FAIL'
export const POSTS_REQUEST = 'src/reducers/post/POSTS_REQUEST'
export const POSTS_REQUEST_SUCCESS = 'src/reducers/post/POSTS_REQUEST_SUCCESS'
export const POSTS_REQUEST_FAIL = 'src/reducers/post/POSTS_REQUEST_FAIL'

// Actions Creators
export const postActions = {
  listeningPost: (newPost) => ({ type: LISTENING_POST, newPost }),
  addPostRequest: () => ({ type: ADD_POST_REQUEST }),
  addPostSuccess: (postSaved) => ({ type: ADD_POST_SUCCESS, postSaved}),
  addPostFail: (err) => ({ type: ADD_POST_FAIL, err}),
  postsRequest: () => ({type: POSTS_REQUEST}),
  postsRequestSuccess: (posts) => ({type: POSTS_REQUEST_SUCCESS, posts}),
  postsRequestFail: (err) => ({type: POSTS_REQUEST_FAIL, err})
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
    case ADD_POST_SUCCESS:
      return state
        .setIn(['postsCurrent', [action.postSaved.postId]], action.postSaved)
        .merge({
          newPost: '',
          postError: null
        })
    case ADD_POST_FAIL:
      return state.set('postError', action.err)
    case POSTS_REQUEST_SUCCESS:
      return state.set('posts', action.posts)
    case POSTS_REQUEST_FAIL:
      return state.set('postError', action.err)
    default:
      return state
  }
}

export default postReducer
