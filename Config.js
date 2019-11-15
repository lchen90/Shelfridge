import firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAO9TLrCd8hozJViTv8ZrPvkc4X0LuQJQg',
  authDomain: 'shelfridge-435c9.firebaseapp.com',
  databaseURL: 'https://shelfridge-435c9.firebaseio.com',
  projectId: 'shelfridge-435c9',
  storageBucket: 'shelfridge-435c9.appspot.com',
  messagingSenderId: '1036799394705',
  appId: '1:1036799394705:web:99ad8870a1d9581d6f1030',
  measurementId: 'G-C3KN1HMSXW',
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
