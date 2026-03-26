import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { appEnv, hasFirebaseConfig } from "@/config/env";

const firebaseConfig = {
  apiKey: appEnv.firebase.apiKey,
  authDomain: appEnv.firebase.authDomain,
  projectId: appEnv.firebase.projectId,
  storageBucket: appEnv.firebase.storageBucket,
  messagingSenderId: appEnv.firebase.messagingSenderId,
  appId: appEnv.firebase.appId,
  measurementId: appEnv.firebase.measurementId,
};

const firebaseApp = hasFirebaseConfig()
  ? getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig)
  : null;

export const db = firebaseApp ? getFirestore(firebaseApp) : null;
export { firebaseApp };
