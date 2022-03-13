import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6w3ZKR27eJCsdZz6An2bmlUixEmMD174",
  authDomain: "gkit-tesla.firebaseapp.com",
  projectId: "gkit-tesla",
  storageBucket: "gkit-tesla.appspot.com",
  messagingSenderId: "502263130535",
  appId: "1:502263130535:web:753e0eb2b4e5dcd2a4ae82",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
