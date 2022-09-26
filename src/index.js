import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsx2jqICnidIBI9B_DpP-lBa4919TF2g4",
  authDomain: "coderhouse-ecommerce-d465d.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d465d",
  storageBucket: "coderhouse-ecommerce-d465d.appspot.com",
  messagingSenderId: "902879389279",
  appId: "1:902879389279:web:af77a915e14b67a40d5dea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
