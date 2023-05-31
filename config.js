import firebase from "firebase";
require("@firebase/firestore")




const firebaseConfig = {
  apiKey: "AIzaSyDNohZWDK72cnwiXmceqYZQSukPzq-UkKQ",
  authDomain: "biblioteca-a6818.firebaseapp.com",
  projectId: "biblioteca-a6818",
  storageBucket: "biblioteca-a6818.appspot.com",
  messagingSenderId: "409668335787",
  appId: "1:409668335787:web:18e47fd41550b00b385fee"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();