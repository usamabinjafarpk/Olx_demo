import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZkxhGJa1dtMRjwNBVwQP1YI9VNyeIc5A",
    authDomain: "olx-demo-be835.firebaseapp.com",
    projectId: "olx-demo-be835",
    storageBucket: "olx-demo-be835.appspot.com",
    messagingSenderId: "831376278147",
    appId: "1:831376278147:web:79a4f05014e2afc992d1b6",
    measurementId: "G-9GS3FY3ZDJ"
  };





 export default firebase.initializeApp(firebaseConfig);