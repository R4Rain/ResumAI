import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/auth'

firebase.setLogLevel('silent')
const app = firebase.initializeApp({
  apiKey: 'AIzaSyAOjMhgEwU-YmTVmxSrrUSBxgzBEzYRwQc',
  authDomain: 'resumai-auth-development.firebaseapp.com',
  projectId: 'resumai-auth-development',
  storageBucket: 'resumai-auth-development.appspot.com',
  messagingSenderId: '73938285969',
  appId: '1:73938285969:web:4083ab5acddd0b82f41630'
})

export const auth = app.auth()
export const storage = app.storage()
export default app