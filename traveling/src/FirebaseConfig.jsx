// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIYWdTiTYIGWa2QnCEe5LWQ_T4uEdljmE",
  authDomain: "sitetraveling-ff62c.firebaseapp.com",
  projectId: "sitetraveling-ff62c",
  storageBucket: "sitetraveling-ff62c.appspot.com",
  messagingSenderId: "761152543923",
  appId: "1:761152543923:web:8489fd90519ba9b0d124c6",
  measurementId: "G-3Q2HD11N1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;