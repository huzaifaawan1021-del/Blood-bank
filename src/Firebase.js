import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Auth SDK import kiya

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzibHAitWsket5YWY7E4KEG632__ZIbIg",
  authDomain: "landing-page-bf7bf.firebaseapp.com",
  projectId: "landing-page-bf7bf",
  storageBucket: "landing-page-bf7bf.firebasestorage.app",
  messagingSenderId: "526335674107",
  appId: "1:5263356S74107:web:41ccd803b30026b0c4d25e",
  measurementId: "G-B3LZJJ1JFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication aur ise export kiya
export const auth = getAuth(app);