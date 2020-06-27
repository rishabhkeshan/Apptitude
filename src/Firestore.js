import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyAGG8qoJ25Fw-2jjgys4o52hF4BCnGrAR4",
  authDomain: "apptitude-8eeb0.firebaseapp.com",
  databaseURL: "https://apptitude-8eeb0.firebaseio.com",
  projectId: "apptitude-8eeb0",
  storageBucket: "apptitude-8eeb0.appspot.com",
  messagingSenderId: "29740219985",
  appId: "1:29740219985:web:beb0fd966004395c174270",
  measurementId: "G-91QRYTR53B",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;