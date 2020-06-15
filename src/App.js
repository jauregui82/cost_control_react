import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import firebase from './config/firebase';
// import ChatRoom from './components/ChatRoom';
import Layout from './components/Layout';
// import './utils/Firebase.js';
// import dotenv from 'dotenv'
// dotenv.config()
// console.log(process.env.REACT_APP_FIREBASE_APIKEY);

export  const App = () => {
  // console.log(firebase.name);
  // console.log(firebase.database());
  return (
    <div className="App">
      {/* <ChatRoom /> */}
      <Layout>
        <div>Bienvenido</div>
      </Layout>
    </div>
  );
}
