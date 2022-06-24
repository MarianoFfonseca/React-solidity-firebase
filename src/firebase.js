import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6q3H_emBUMu6jpvwDeMzSz3eGZHslDAA",
    authDomain: "react-fireabase-solidity.firebaseapp.com",
    projectId: "react-fireabase-solidity",
    storageBucket: "react-fireabase-solidity.appspot.com",
    messagingSenderId: "766399918820",
    appId: "1:766399918820:web:9c97c876846121d3a2f2f1"
  };
  

  const app = initializeApp(firebaseConfig);


  export default app