import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBv2jGKVEOfSOPOt9xuu1h9faZBwlMoacM",
    authDomain: "coderhouse-ecommerce-8890b.firebaseapp.com",
    projectId: "coderhouse-ecommerce-8890b",
    storageBucket: "coderhouse-ecommerce-8890b.appspot.com",
    messagingSenderId: "508127582311",
    appId: "1:508127582311:web:8477690b3c17ca76339cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db