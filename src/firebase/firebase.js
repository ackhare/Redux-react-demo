import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAv8Kgynlxmjp4kKzEs59NWVAQ3_Z7LKOs",
    authDomain: "react-data-redux.firebaseapp.com",
    databaseURL: "https://react-data-redux.firebaseio.com",
    projectId: "react-data-redux",
    storageBucket: "",
    messagingSenderId: "355191331974"
  };

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };