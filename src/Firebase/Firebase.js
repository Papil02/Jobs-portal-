import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage  } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCWYUYJ4Ho8DwPePJwyF6zFLiKgS6ZjBTs",
  authDomain: "jobplatform-b5ed7.firebaseapp.com",
  projectId: "jobplatform-b5ed7",
  storageBucket: "jobplatform-b5ed7.appspot.com",
  messagingSenderId: "1044103073828",
  appId: "1:1044103073828:web:7b9686b61f4e242b3608b1",

   
  // apiKey: "AIzaSyD843BP3WfghGr68g-fxH9Ja_LJhsOgHvU",
  // authDomain: "newdata-cad7e.firebaseapp.com",
  // projectId: "newdata-cad7e",
  // storageBucket: "newdata-cad7e.appspot.com",
  // messagingSenderId: "161432441410",
  // appId: "1:161432441410:web:b60b3c83f5c9dc9c18d3db",
  // measurementId: "G-LX70HE089E"

}

// Initialize Firebase and Firestore

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

const auth = getAuth()
export { db ,auth , storage  } 
