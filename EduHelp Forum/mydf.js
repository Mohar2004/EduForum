import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// import{ getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
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
console.log("state = unknown (until the callback is invoked)")
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid
        console.log("state = definitely signed in")
        console.log(uid)
        console.log(user.email)
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    else {
        console.log("state = definitely signed out")
    }
})
// const app =  initializeApp(firebaseConfig)

// const db = getFirestore()

// const colref = collection(db, 'users')

// getDocs(colref)
//    .then((snapshot) => {
//     console.log(snapshot.docs)
//    })