import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDlWIX5cNCsFfGnQftdxvN513PidoOr2zg",
  authDomain: "himan-95a7f.firebaseapp.com",
  databaseURL: "https://himan-95a7f.firebaseio.com",
  projectId: "himan-95a7f",
  storageBucket: "himan-95a7f.appspot.com",
  messagingSenderId: "608285032792"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
