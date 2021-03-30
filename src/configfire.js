import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBksTY5226HMnC3tqyFvUvN7KWzppXs7Gk",
  authDomain: "react-starwarsapp.firebaseapp.com",
  projectId: "react-starwarsapp",
  storageBucket: "react-starwarsapp.appspot.com",
  messagingSenderId: "697874527090",
  appId: "1:697874527090:web:ec6533231897cdc9e023eb",
  measurementId: "G-JGXY392EZM"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;