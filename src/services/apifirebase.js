import firebase from "firebase/compat/app";
import "firebase/compat/auth";  
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7Ajegv3YaVlugUKOoxO8XHTCfl2JPpRw",
  authDomain: "pontonow-f94f4.firebaseapp.com",
  projectId: "pontonow-f94f4",
  storageBucket: "pontonow-f94f4.appspot.com",
  messagingSenderId: "248854841293",
  appId: "1:248854841293:web:aa57b9e43ae85947d16684",
  measurementId: "G-KES6WBVJZH"
};

//verifica se ja tem uma chamada aberta para firebase
// se nao tem ele chama
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;