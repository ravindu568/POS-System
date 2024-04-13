import {initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrQNFxjCc9EtwOW5Bb3Nj8fzNxPn-_nZ4",
    authDomain: "react-pos-8cb3f.firebaseapp.com",
    projectId: "react-pos-8cb3f",
    storageBucket: "react-pos-8cb3f.appspot.com",
    messagingSenderId: "66416658769",
    appId: "1:66416658769:web:a01bc8517d937f9e976b70",
    measurementId: "G-7TY6X2PDWJ"
  };

  const app=initializeApp(firebaseConfig);
const storage=getStorage(app);
export {storage};
