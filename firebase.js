import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAVmlCu8_082OlaGTmAJ4ofuLcEbb6byjo',
  authDomain: 'pizza-10de4.firebaseapp.com',
  projectId: 'pizza-10de4',
  storageBucket: 'pizza-10de4.appspot.com',
  messagingSenderId: '361635639916',
  appId: '1:361635639916:web:a05b9e8dd08e5dab045e49'
}

export const firebase = firebaseApp.initializeApp(firebaseConfig)
export const db = firebase.firestore()
