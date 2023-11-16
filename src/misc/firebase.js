import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAgx2TFo4bdYCHEWk2yHs22FcjCU__DOiM',
  authDomain: 'chats-9b52c.firebaseapp.com',
  projectId: 'chats-9b52c',
  storageBucket: 'chats-9b52c.appspot.com',
  messagingSenderId: '994450607168',
  appId: '1:994450607168:web:2886abd0a20e20aec263a5',
  // measurementId: "G-PE0VJBH1YS"
};

// apiKey: 'AIzaSyC0O37JRT_laxen6x32U4NcdqrjP5xL9Bo',
//   authDomain: 'chat-web-app-d1d12.firebaseapp.com',
//   projectId: 'chat-web-app-d1d12',
//   storageBucket: 'chat-web-app-d1d12.appspot.com',
//   messagingSenderId: '511903723368',
//   appId: '1:511903723368:web:4a4980061f5cf68c5b70dd',
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
