import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA8b0Hmsvp0AOFGU_aZPgaDxh9hejhT7cU",
    authDomain: "fcm-push-d19a2.firebaseapp.com",
    projectId: "fcm-push-d19a2",
    storageBucket: "fcm-push-d19a2.appspot.com",
    messagingSenderId: "925891131633",
    appId: "1:925891131633:web:ece7fc83d8bd276d445150",
    measurementId: "G-QLSVS11Q75"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
