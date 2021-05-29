import firebase from 'firebase'

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyA9O9nYpfItkmsuvZT-3Z9rXDuYTDa07Q4",
  authDomain: "mydelivery-b6b2b.firebaseapp.com",
  projectId: "mydelivery-b6b2b",
  storageBucket: "mydelivery-b6b2b.appspot.com",
  messagingSenderId: "1034624137878",
  appId: "1:1034624137878:web:856a26e90db60c4d6d20b7",
  measurementId: "G-ZP9T6GQVLC"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;