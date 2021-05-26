import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyBA0d52c8nRCsSa6A3MQHKu-rR8TeH75DQ",
    authDomain: "buzzer-app-64406.firebaseapp.com",
    databaseURL: "https://buzzer-app-64406-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-64406",
    storageBucket: "buzzer-app-64406.appspot.com",
    messagingSenderId: "264467929820",
    appId: "1:264467929820:web:05e47433f6a3c5b66e7219",
    measurementId: "G-N8PVEKMRGG"
  };


// Initialize Firebase
if(firebase.apps.length === 0){
firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
