import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCPUXRZAc1gKTwnVlepH77L3xJDAAHp7Ag",
    authDomain: "my-project-20373.firebaseapp.com",
    projectId: "my-project-20373",
    storageBucket: "my-project-20373.appspot.com",
    messagingSenderId: "671244404691",
    appId: "1:671244404691:web:10c8e0f30c3e27e57f1126",
    measurementId: "G-WJMPR5E6E7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  // firebase.firestore().settings({ timestampsInSnapshots: true });
  // firebase.analytics();

  export default firebase