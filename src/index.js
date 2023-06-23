import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD186w5YgPfyzX47-kdUqItOe8YP5lnFmA",
  authDomain: "primer-proyecto-a0b09.firebaseapp.com",
  projectId: "primer-proyecto-a0b09",
  storageBucket: "primer-proyecto-a0b09.appspot.com",
  messagingSenderId: "625480252554",
  appId: "1:625480252554:web:275520c9e60890067cc173"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

