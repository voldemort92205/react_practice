import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfhOWxcSXsvzPrj0NcRAXvfk7BZTOpKd0",
  authDomain: "react-notes-d43d0.firebaseapp.com",
  projectId: "react-notes-d43d0",
  storageBucket: "react-notes-d43d0.appspot.com",
  messagingSenderId: "116463089360",
  appId: "1:116463089360:web:21fc495ae0ef482e2750d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");