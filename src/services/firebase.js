// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbrRgFp2bgraTzZPgqfIm4ofcJaAC0mbc",
  authDomain: "react-coderhouse-35529.firebaseapp.com",
  projectId: "react-coderhouse-35529",
  storageBucket: "react-coderhouse-35529.appspot.com",
  messagingSenderId: "95173505650",
  appId: "1:95173505650:web:7db134a3340ec218e7c8eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)