// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfQug_15JmURls-S0RURM98AjY1X14iPA",
  authDomain: "whatsapp-571e6.firebaseapp.com",
  projectId: "whatsapp-571e6",
  storageBucket: "whatsapp-571e6.appspot.com",
  messagingSenderId: "492013735317",
  appId: "1:492013735317:web:30ad38bfb9cb5e70803a9c",
  measurementId: "G-CJ297J7SKD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
