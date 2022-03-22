import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhkMBWlrJ_BkJ4xLDiRWWRf8BArwv0Go8",
  authDomain: "thomasjuranek-com.firebaseapp.com",
  projectId: "thomasjuranek-com",
  storageBucket: "thomasjuranek-com.appspot.com",
  messagingSenderId: "206253506884",
  appId: "1:206253506884:web:dc2730edd008b9b8a91711",
  measurementId: "G-QVDMT8L2FX"
};

let app: any;
let analytics: any;

export function initializeAnalytics() {
    if (process.env.NODE_ENV !== 'production') return;

    if (!app) {
        app = initializeApp(firebaseConfig);
    }

    analytics = getAnalytics(app);
};

export function trackEvent(name: string, data?: any) {
    if (process.env.NODE_ENV !== 'production') return;

    logEvent(analytics, name, data);
}

