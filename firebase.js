import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC9CGyKCtiois2IRH1TjYBuIG4mwVsBsPc",
  authDomain: "ia-ddded.firebaseapp.com",
  projectId: "ia-ddded",
  storageBucket: "ia-ddded.appspot.com",
  messagingSenderId: "673326942762",
  appId: "1:673326942762:web:db107e3518b635b6c51153"
};

const app = !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app()
const db =app.firestore();

export default db;