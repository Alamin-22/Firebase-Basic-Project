// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqqLIdmDGHX0kiC-B2RguK3v9ntX6YZPo",
    authDomain: "fir-basic-project-aa5a4.firebaseapp.com",
    projectId: "fir-basic-project-aa5a4",
    storageBucket: "fir-basic-project-aa5a4.appspot.com",
    messagingSenderId: "1054512236429",
    appId: "1:1054512236429:web:6e635c21c40760be525fc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth);