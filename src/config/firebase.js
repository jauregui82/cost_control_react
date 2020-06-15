import * as firebase from "firebase";
import dotenv from 'dotenv'
dotenv.config()
// Config file

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

export default firebase.initializeApp(config) ;

// // Other file
// import firebase from '../firebase';
// ...
// console.log(firebase.name);
// console.log(firebase.database());


// export const configFirebase = {
//     apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_FIREBASE_APPID
// }

// export const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_FIREBASE_APPID
// })

// export const googleAuthProvider = firebase.auth.GoogleAuthProvider();
// export const facebookAuthProvider = firebase.auth.FacebookAuthProvider();
// export const githubthProvider = firebase.auth.GithubAuthProvider();