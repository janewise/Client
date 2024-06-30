import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database'; // Import the Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyBb0STZdIj74Esu1kuuoDWlBsvCy-z1Bk4",
  authDomain: "bitbrawl-404.firebaseapp.com",
  databaseURL: "https://bitbrawl-404-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bitbrawl-404",
  storageBucket: "bitbrawl-404.appspot.com",
  messagingSenderId: "403464469352",
  appId: "1:403464469352:web:ad6b3e3f44ab2da96374dd",
  measurementId: "G-PTE8NYVB75"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp); // Pass the initialized app to getAnalytics

// Initialize Realtime Database
const db = getDatabase(firebaseApp); // Initialize the Realtime Database

export { db };
