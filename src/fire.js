    import firebase from 'firebase';

   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   var firebaseConfig = {
    apiKey: "AIzaSyCYHULiGCoJ2Oh-vLF3sa1QJC1Hl_nV8sk",
    authDomain: "first-b9f9a.firebaseapp.com",
    projectId: "first-b9f9a",
    storageBucket: "first-b9f9a.appspot.com",
    messagingSenderId: "983919727326",
    appId: "1:983919727326:web:d58cb786b9089d6e3ea84f",
    measurementId: "G-K7L467Y7HG"
  };
 
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;