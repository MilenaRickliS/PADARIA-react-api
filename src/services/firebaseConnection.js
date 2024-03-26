// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm-N_rStEiEten7TIjCUIi6zxUy6BTxkc",
    authDomain: "padaria-eeb32.firebaseapp.com",
    databaseURL: "https://padaria-eeb32-default-rtdb.firebaseio.com",
    projectId: "padaria-eeb32",
    storageBucket: "padaria-eeb32.appspot.com",
    messagingSenderId: "507562594451",
    appId: "1:507562594451:web:98ca40ccfaa84b24287d66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};