// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQMy7xmgO0lIUAA5HIb-MpcWE8PM4V5YI",
  authDomain: "share-now-40b05.firebaseapp.com",
  projectId: "share-now-40b05",
  storageBucket: "share-now-40b05.appspot.com",
  messagingSenderId: "928929045629",
  appId: "1:928929045629:web:99ef0fbb55c7a4c102a514",
  measurementId: "G-XLF3SVJZV2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app