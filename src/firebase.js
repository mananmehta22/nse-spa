import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDHGjCohfRqXFrCv1ilSNZcFUiw1pY1UI8",
    authDomain: "react-nse.firebaseapp.com",
    projectId: "react-nse",
    storageBucket: "react-nse.appspot.com",
    messagingSenderId: "684042877523",
    appId: "1:684042877523:web:bfe61ad5b92bf3b158e4a6"
  };

const fire_DB = firebase.initializeApp(firebaseConfig)
export default fire_DB.database().ref();