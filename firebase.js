import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-oN0pnBPo1dZQHDVtTtDY061vr5D4x0U",
  authDomain: "twitter-clone-ea64a.firebaseapp.com",
  projectId: "twitter-clone-ea64a",
  storageBucket: "twitter-clone-ea64a.appspot.com",
  messagingSenderId: "125105220257",
  appId: "1:125105220257:web:6939407c5ec6d99ed0dee0",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
