
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBRL2ykn83WfPX3L1ld9Zh1oufOxvL3LIs",
  authDomain: "zima-ceramica-a2caa.firebaseapp.com",
  projectId: "zima-ceramica-a2caa",
  storageBucket: "zima-ceramica-a2caa.appspot.com",
  messagingSenderId: "69039459215",
  appId: "1:69039459215:web:2fa8837f388fb61f0659fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const BaDat = getFirestore(app)