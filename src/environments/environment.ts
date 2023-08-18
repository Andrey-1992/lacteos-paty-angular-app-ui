// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxMWO4PxAkNrDDBQl4fu0KoKPAEYTxjy0",
  authDomain: "fabrica-produccion-database.firebaseapp.com",
  databaseURL: "https://fabrica-produccion-database-default-rtdb.firebaseio.com",
  projectId: "fabrica-produccion-database",
  storageBucket: "fabrica-produccion-database.appspot.com",
  messagingSenderId: "113232990741",
  appId: "1:113232990741:web:61c647185339031a75b41c",
  measurementId: "G-F14FS23JRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {};