import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBJO6LQs01oBgqVRJwpCWj6ur3fa0Bh-L4',
  authDomain: 'b2b-app-auth.firebaseapp.com',
  projectId: 'b2b-app-auth',
  storageBucket: 'b2b-app-auth.appspot.com',
  messagingSenderId: '795546495985',
  appId: '1:795546495985:web:bd913536f21f472c1a3250',
  measurementId: 'G-0NL60T50V5',
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
