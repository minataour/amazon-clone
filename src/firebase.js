// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA56GI1aFZt_VMN5onZtUwYTzwsw2A6m5Y",
    authDomain: "project-94a17.firebaseapp.com",
    projectId: "project-94a17",
    storageBucket: "project-94a17.appspot.com",
    messagingSenderId: "241430815599",
    appId: "1:241430815599:web:61354b9163d014a9a3be9a",
    measurementId: "G-1G5C2Z1VWX"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db , auth}