import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyAN8J6iltTJ7bTU-76hBSk8qK1E2OGBO_A",
  authDomain: "medical-clinic-db.firebaseapp.com",
  projectId: "medical-clinic-db",
  storageBucket: "medical-clinic-db.appspot.com",
  messagingSenderId: "529552749456",
  appId: "1:529552749456:web:7b23b6f033079e01b83915",
  measurementId: "G-5H64M71JY8"
}

const app = firebase.initializeApp(config);

export const auth = getAuth(app)

export default firebase;


