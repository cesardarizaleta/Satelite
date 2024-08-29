// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXaoDy-3Vi4RPw4nJHM8B8lK4G2IJ2hDA",
  authDomain: "satelitexpressca.firebaseapp.com",
  projectId: "satelitexpressca",
  storageBucket: "satelitexpressca.appspot.com",
  messagingSenderId: "363098683393",
  appId: "1:363098683393:web:9ed54e085fa26c9a77e800",
  measurementId: "G-4Z5R2J07WV"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;