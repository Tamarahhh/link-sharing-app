import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQmCORgdDBO1Jv15IW07NhpfJlqdv5LrI",
  authDomain: "linksharingapp-51063.firebaseapp.com",
  projectId: "linksharingapp-51063",
  storageBucket: "linksharingapp-51063.appspot.com",
  messagingSenderId: "829723461811",
  appId: "1:829723461811:web:770ae3c9ee59f05770c8c6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
