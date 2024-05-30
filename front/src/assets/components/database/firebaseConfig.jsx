import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtAJMVRpEeQxizRdMuhm4dnLn0I3MqEvM",
  authDomain: "proyecto-nomina.firebaseapp.com",
  projectId: "proyecto-nomina",
  storageBucket: "proyecto-nomina.appspot.com",
  messagingSenderId: "1029174077996",
  appId: "1:1029174077996:web:163cb4ba986cc525747f89",
};

const app = initializeApp(firebaseConfig);

export const conDatabase = getFirestore(app);
