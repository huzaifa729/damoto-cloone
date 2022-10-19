
import { getApp, getApps, initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAescicKYKze8XoK42lVhkE-7XfDPCftPk",
    authDomain: "damota-app.firebaseapp.com",
    databaseURL: "https://damota-app-default-rtdb.firebaseio.com",
    projectId: "damota-app",
    storageBucket: "damota-app.appspot.com",
    messagingSenderId: "625616635029",
    appId: "1:625616635029:web:89a89d69dc2518802bc79c"
  };
 
  
 const app = getApps > 0 ? getApp() : initializeApp(firebaseConfig);
 
 const firestore = getFirestore(app);

 const storage = getStorage(app);

 export { app, firestore, storage };