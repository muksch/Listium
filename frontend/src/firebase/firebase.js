import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCBk_cpDbw2Wnh6vqRfebHW7YXq9Y0Za_A',
  authDomain: 'listium.firebaseapp.com',
  projectId: 'listium',
  storageBucket: 'listium.firebasestorage.app',
  messagingSenderId: '122068480010',
  appId: '1:122068480010:web:5d6ccbebe3701700f9eff3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
