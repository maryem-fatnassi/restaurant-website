import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjf_A-hF_NvL0bOeeDwSsLQKSO_OkfBTo",
  authDomain: "restaurant-website-feca9.firebaseapp.com",
  projectId: "restaurant-website-feca9",
  storageBucket: "restaurant-website-feca9.firebasestorage.app",
  messagingSenderId: "87513988852",
  appId: "1:87513988852:web:6dcedc78efc9faa2a0e8a1",
  measurementId: "G-BQBN2T5DSZ"
};
// Initialize Firebase App
const app = initializeApp(firebaseConfig);
// Export Firebase services
export const auth = getAuth(app);
// export const db = getFirestore(app);