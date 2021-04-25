import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCjdtchAEuN_uQAN7XpwpiuX_5eex9r24Q",
    authDomain: "barter-app-67946.firebaseapp.com",
    projectId: "barter-app-67946",
    storageBucket: "barter-app-67946.appspot.com",
    messagingSenderId: "1017136324216",
    appId: "1:1017136324216:web:b3ec197e7f7e518178578d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()