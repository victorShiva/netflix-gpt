// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhNRtaU_RbxcmJdUhGsqDPR4Voh40_lpg",
    authDomain: "netflixgpt-2ae6e.firebaseapp.com",
    projectId: "netflixgpt-2ae6e",
    storageBucket: "netflixgpt-2ae6e.firebasestorage.app",
    messagingSenderId: "163790095793",
    appId: "1:163790095793:web:ad43b91fe2ad844485e990",
    measurementId: "G-2Q2GJJKHC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();