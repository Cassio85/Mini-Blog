import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwCqcu_f1tDQLShFad9rGWEhIy5GvCssM",
  authDomain: "miniblog1-43d55.firebaseapp.com",
  projectId: "miniblog1-43d55",
  storageBucket: "miniblog1-43d55.appspot.com",
  messagingSenderId: "497669464855",
  appId: "1:497669464855:web:4494e2420c47d08da8cd52",
  measurementId: "G-J8FH3L8T88"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};