import { takeLatest } from 'redux-saga'
import { call, put, select, fork } from 'redux-saga/effects'
import {ADD_POST_REQUEST,postActions} from 'reducers/post_reducer'
import { saveToPosts } from 'helpers/api'
import { ref } from 'config'

function* fetchPosts () {
  try {
    const posts = yield ref.child('posts').once('value', snap => snap)
    yield put(postActions.postsRequestSuccess(posts.val()))
  } catch (err) {
    yield put(postActions.postsRequestFail(err))
  }

}

function* watchAddPost() {
  const newPost = yield select((state) => state.postsReducer.toJS().newPost)
  try {
    const postSaved = yield call(saveToPosts, newPost)
    yield put(postActions.addPostSuccess(postSaved))
    yield fork(fetchPosts)
  } catch (err) {
    yield put(postActions.addPostFail(err))
  }
}

export default function* rootSaga() {
  yield [
    fork(fetchPosts),
    takeLatest(ADD_POST_REQUEST, watchAddPost)
  ]
}
