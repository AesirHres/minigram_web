import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBsgwp1p6SSYZ2NHni-ngwgzXGlDqzhw6I",
    authDomain: "mim-web-e81f4.firebaseapp.com",
    projectId: "mim-web-e81f4",
    storageBucket: "mim-web-e81f4.appspot.com",
    messagingSenderId: "426694107395",
    appId: "1:426694107395:web:8bf35fb276933c202b8936",
    measurementId: "G-P3CZQGB7T8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };