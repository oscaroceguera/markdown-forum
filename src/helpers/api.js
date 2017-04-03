import { ref } from 'config'

export const saveToPosts = (post) => {
  const postId = ref.child('posts').push().key
  const postPromise = ref.child(`posts/${postId}`).set({post, postId})
  return Promise.all([postPromise]).then(() => ({post, postId}))
}
