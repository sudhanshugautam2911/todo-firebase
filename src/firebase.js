
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrpyFW5YUonMbyCfFEp6ShfhKEnnMdL8s",
    authDomain: "todo-firebase-db621.firebaseapp.com",
    databaseURL: "https://todo-firebase-db621-default-rtdb.firebaseio.com",
    projectId: "todo-firebase-db621",
    storageBucket: "todo-firebase-db621.appspot.com",
    messagingSenderId: "750837095036",
    appId: "1:750837095036:web:4b6425d927ec6882f147f9",
    measurementId: "G-426NQ4DHYJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;



