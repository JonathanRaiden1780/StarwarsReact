import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB57FNv9JtoqI26vLhevozRCXvqrCU8GUo",
    authDomain: "starwarsreactapp.firebaseapp.com",
    projectId: "starwarsreactapp",
    storageBucket: "starwarsreactapp.appspot.com",
    messagingSenderId: "940618927632",
    appId: "1:940618927632:web:2740493cfc5eb0bfc08495",
    measurementId: "G-7YH737CE38"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;