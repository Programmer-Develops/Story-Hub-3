import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBLsbCO00YbllftjFDWY7chXwLcHQSHbU8",
    authDomain: "storyhub-aac01.firebaseapp.com",
    projectId: "storyhub-aac01",
    storageBucket: "storyhub-aac01.appspot.com",
    messagingSenderId: "773510781685",
    appId: "1:773510781685:web:55bcfab3473e4abf9343bc"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()