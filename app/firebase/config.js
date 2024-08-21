// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDfapsJqVn5WeEIAJnQXPGqd8gE7C52vbc",
	authDomain: "alore-fafe3.firebaseapp.com",
	projectId: "alore-fafe3",
	storageBucket: "alore-fafe3.appspot.com",
	messagingSenderId: "1010011817238",
	appId: "1:1010011817238:web:b385a25c09ff0c344afc37",
    persistance: browserLocalPersistence
};

// Initialize Firebase
//necessary for server-side rendering
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
