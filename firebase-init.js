// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0VF7SkuXvOAJyuC-2tPl_KGris3f4gqE",
  authDomain: "final-project-fb104.firebaseapp.com",
  projectId: "final-project-fb104",
  storageBucket: "final-project-fb104.appspot.com",
  messagingSenderId: "150740541108",
  appId: "1:150740541108:web:1a0dba9ebb4cbb157001e1",
  measurementId: "G-XRR8QBXS35"
};

// 初始化 Firebase App，只初始化一次
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 導出物件
export { auth, onAuthStateChanged, signOut, db };
