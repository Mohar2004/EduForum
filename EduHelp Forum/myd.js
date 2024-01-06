import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
const firebaseConfig = {
  apiKey: "AIzaSyCBgsIwW_jAgRPhJxLwIEJ7ByWpHHA6vRk",
  authDomain: "eduforumauth.firebaseapp.com",
  databaseURL: "https://eduforumauth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eduforumauth",
  storageBucket: "eduforumauth.appspot.com",
  messagingSenderId: "1094162769847",
  appId: "1:1094162769847:web:70fa9d8ed9867be9822a32"
};
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const auth = getAuth()
const dbRef = ref(getDatabase());
const user = auth.currentUser
const uid = auth.uid
get(child(dbRef, `users/${uid}`)).then((snapshot) => {
  if (snapshot.exists()) {
    const arr = snapshot.val()
    console.log(arr)

  }
})