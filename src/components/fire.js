import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB9hSdZehcoNEVMD5hnDAkbvgZGqIEsj9I",
  authDomain: "reactmbds-6ec78.firebaseapp.com",
  databaseURL: "https://reactmbds-6ec78.firebaseio.com",
  projectId: "reactmbds-6ec78",
  storageBucket: "reactmbds-6ec78.appspot.com",
  messagingSenderId: "664568875854"
};
var fire = firebase.initializeApp(config);
export default fire;