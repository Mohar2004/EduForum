
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyCBgsIwW_jAgRPhJxLwIEJ7ByWpHHA6vRk",
    authDomain: "eduforumauth.firebaseapp.com",
    databaseURL: "https://eduforumauth-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eduforumauth",
    storageBucket: "eduforumauth.appspot.com",
    messagingSenderId: "1094162769847",
    appId: "1:1094162769847:web:70fa9d8ed9867be9822a32"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth()


login.addEventListener('click', (e) => {

    var email = document.getElementById('em').value
    var password = document.getElementById('pwd').value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
             
            const dt = new Date()
            const user = userCredential.user;
            const uid = user.uid
            update(ref(database, 'users' + uid), {
                last_login: dt
            })
            setTimeout(logging, 547)
            function logging() {
                let logger = confirm("Logged in Buddy!!")
                if (logger) {
                    window.location.href = "home.html"
                }
                else {
                    console.log("login karlo yaar")
                }
            }
            

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage)
        })
})

const user = auth.currentUser
onAuthStateChanged(auth, (user) => {
    if (user) {
        
        const uid = user.uid;
        console.log(uid)
        
    } 
    else {
    
        // User is signed out
        
    }
})