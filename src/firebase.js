import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFL-rv-3oPYfU5h0AET35JLO8p7T2-HpE",
  authDomain: "react-authentication-7acc3.firebaseapp.com",
  projectId: "react-authentication-7acc3",
  storageBucket: "react-authentication-7acc3.appspot.com",
  messagingSenderId: "324122835192",
  appId: "1:324122835192:web:695a33e80ddba0bb4a630d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
