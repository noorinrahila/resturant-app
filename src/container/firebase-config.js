import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDpRSwi7rG2_A9qKIFpslqtbBg4I1dkE84",
    authDomain: "fir-tutorial-964f2.firebaseapp.com",
    projectId: "fir-tutorial-964f2",
    storageBucket: "fir-tutorial-964f2.appspot.com",
    messagingSenderId: "905320235210",
    appId: "1:905320235210:web:1d3de2e8ee506af81ab433",
    measurementId: "G-JYZ25Q4M16"
  };
  
  const app = initializeApp(firebaseConfig);

  export const db= getFirestore(app);