import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAGTafOP1R8rqsziagnJ-c3AdTw_Y53JrM",
    authDomain: "coffee-shop-website-10e34.firebaseapp.com",
    projectId: "coffee-shop-website-10e34",
    storageBucket: "coffee-shop-website-10e34.appspot.com",
    messagingSenderId: "769594087163",
    appId: "1:769594087163:web:dd3a4d7d0d631dc966c25e"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

export { projectFirestore, projectAuth, projectStorage }

