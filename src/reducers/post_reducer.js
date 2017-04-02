import { fromJS, List } from 'immutable'

// Actions
export const LISTENING_POST = 'src/reducers/post/LISTENING_POST'
export const ADD_POST = 'src/reducers/post/ADD_POST'
const POSTS_REQUEST = 'src/reducers/post/POSTS_REQUEST'
const POSTS_REQUEST_SUCCESS = 'src/reducers/post/POSTS_REQUEST_SUCCESS'
const POSTS_REQUEST_FAIL = 'src/reducers/post/POSTS_REQUEST_FAIL'

// Actions Creators
export const postActions = {
  listeningPost: (newPost) => ({ type: LISTENING_POST, newPost }),
  addPost: (post) => ({ type: ADD_POST, post }),
  postsRequest: () => ({ type: POSTS_REQUEST }),
  postsRequestSuccess: (posts) => ({ type: POSTS_REQUEST_SUCCESS, posts}),
  postsRequestFail: (fail) => ({ type: POSTS_REQUEST_FAIL, fail })
}

const initalState = fromJS({
  posts: [],
  postError: null,
  newPost: ''
})

function postReducer (state = initalState, action) {
  switch (action.type) {
    case LISTENING_POST:
      return state.set('newPost', action.newPost)
    case ADD_POST:
      return state.merge({
        posts: state.get('posts').unshift(action.post),
        newPost: '',
        postError: null
      })
    default:
      return state
  }
}

export default postReducer
