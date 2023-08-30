// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd2Celm4Pndqd1vkVeqov3uRAoRr7rY4M",
  authDomain: "realtime-logs-b7109.firebaseapp.com",
  databaseURL: "https://realtime-logs-b7109-default-rtdb.firebaseio.com",
  projectId: "realtime-logs-b7109",
  storageBucket: "realtime-logs-b7109.appspot.com",
  messagingSenderId: "505992893583",
  appId: "1:505992893583:web:375dab689490d8f3690cfa",
  measurementId: "G-K2W2EJP24K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDatabase = getDatabase(app)

export default app
