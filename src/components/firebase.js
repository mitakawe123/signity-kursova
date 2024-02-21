import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyD7YorUP8ELPpN-GFov39Zh70m1qYptnV4",
    authDomain: "sign-language-main.firebaseapp.com",
    projectId: "sign-language-main",
    storageBucket: "sign-language-main.appspot.com",
    messagingSenderId: "962320278380",
    appId: "1:962320278380:web:c42b82a8dc1b99cc888949"
}

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();

export { storage,database, firebase as default };