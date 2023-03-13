import { initializeApp,getApp,getApps } from "firebase/app";
import{getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDL1_XnSXk7CALabzUqBUaMlQswvG0gjxo",
    authDomain: "sandis-resto.firebaseapp.com",
    databaseURL: "https://sandis-resto-default-rtdb.firebaseio.com",
    projectId: "sandis-resto",
    storageBucket: "sandis-resto.appspot.com",
    messagingSenderId: "196029468121",
    appId: "1:196029468121:web:4e0b45d7821a8a0c9c1dc8"
  };
  const app = getApps.length>0? getApp() :initializeApp(firebaseConfig);
  const firestore =getFirestore(app);
  const storage =getStorage(app);

  export {app,firestore,storage};