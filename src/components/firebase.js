import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDTg-DU0NMYF1W7AIJW4oMl_Yk7NPDqVQA",
    authDomain: "kontaktai-ec688.firebaseapp.com",
    projectId: "kontaktai-ec688",
    storageBucket: "kontaktai-ec688.appspot.com",
    messagingSenderId: "805132132139",
    appId: "1:805132132139:web:bfed553d27d12a3e456f6e"
  };


const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db