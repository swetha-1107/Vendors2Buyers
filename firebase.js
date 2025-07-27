import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC4NdeCsb-pFSTklw2VvgbcKI3IxfCY9QY",
    authDomain: "vendors2buyers.firebaseapp.com",
    databaseURL: "https://vendors2buyers-default-rtdb.firebaseio.com",
    projectId: "vendors2buyers",
    storageBucket: "vendors2buyers.firebasestorage.app",
    messagingSenderId: "854247376582",
    appId: "1:854247376582:web:98898811bb36a053b8b9c7",
    measurementId: "G-Z3T6HYW44X",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
export const auth = getAuth(app);
export const db = getFirestore(app);
