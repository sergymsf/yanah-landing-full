// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics"; // opcional em apps não-PWA

const firebaseConfig = {
  apiKey: "AIzaSyCdumcGRKiDlspkekTuz3W1S243BE3FqMA",
  authDomain: "yanah-project.firebaseapp.com",
  projectId: "yanah-project",
  storageBucket: "yanah-project.firebasestorage.app",
  messagingSenderId: "513802493157",
  appId: "1:513802493157:web:a2c51b395b5c710c71080c",
  measurementId: "G-PG6KZFTW56"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que serão usados
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app); // opcional

export { db, auth };
