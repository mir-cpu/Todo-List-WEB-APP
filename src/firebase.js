import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBKIj0Sw_cyf-L_DGR-QDjSmFiewzWcXoQ",
  authDomain: "todoapp-f943e.firebaseapp.com",
  projectId: "todoapp-f943e",
  storageBucket: "todoapp-f943e.appspot.com",
  messagingSenderId: "79873320102",
  appId: "1:79873320102:web:d77344b0a31a8a50dd8067",
  measurementId: "G-8KWHJK4PMY"
});

const db = firebaseApp.firestore();
export default db