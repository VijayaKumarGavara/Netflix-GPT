// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnNaHTaPMLQr4PsK2X6WMM-SX1tMxBFWY",
  authDomain: "netflix-gpt-9b06a.firebaseapp.com",
  projectId: "netflix-gpt-9b06a",
  storageBucket: "netflix-gpt-9b06a.firebasestorage.app",
  messagingSenderId: "456386951682",
  appId: "1:456386951682:web:3b886d963aa29d6fd0c51b",
  measurementId: "G-REY60JQRK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();