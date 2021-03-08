import firebase from 'firebase';
import "@firebase/firestore";


  var firebaseConfig = {
    apiKey: "AIzaSyDRTMDejQPQDbS_QIVzEwDaXe9T_NuMzYY",
    authDomain: "burgerappp-c5b69.firebaseapp.com",
    projectId: "burgerappp-c5b69",
    storageBucket: "burgerappp-c5b69.appspot.com",
    messagingSenderId: "617934162954",
    appId: "1:617934162954:web:b4f07151b96f49c0bc23f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;