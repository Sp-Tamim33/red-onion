
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJtbLosOPIuU53sbcaHtvbhTIN5hHNQsk",
    authDomain: "red-onion-c81ab.firebaseapp.com",
    projectId: "red-onion-c81ab",
    storageBucket: "red-onion-c81ab.appspot.com",
    messagingSenderId: "288419578027",
    appId: "1:288419578027:web:3499b8276800bb30fb77ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth