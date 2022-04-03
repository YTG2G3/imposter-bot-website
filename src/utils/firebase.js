import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDQqmWLkZACC-KLprT_O757YqonMOqdZU",
    authDomain: "imposter-bot-db.firebaseapp.com",
    projectId: "imposter-bot-db",
    storageBucket: "imposter-bot-db.appspot.com",
    messagingSenderId: "201833054113",
    appId: "1:201833054113:web:bcbb5769a6e1753d5155e0"
};

const fapp = initializeApp(firebaseConfig);
const firestore = getFirestore(fapp);

const matches = collection(firestore, "matches");
const results = collection(firestore, "results");

export { matches, results };
