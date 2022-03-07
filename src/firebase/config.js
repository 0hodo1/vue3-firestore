import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX0rSU8ag5ivDd7R2Oh3hQJF7A-ACxDFc",
  authDomain: "vue3-firebase-projects-dc331.firebaseapp.com",
  projectId: "vue3-firebase-projects-dc331",
  storageBucket: "vue3-firebase-projects-dc331.appspot.com",
  messagingSenderId: "483335661311",
  appId: "1:483335661311:web:ba074ee90f7d6746540eca",
};

firebase.initializeApp(firebaseConfig);

const firestoreRef = firebase.firestore();

export { firestoreRef };
