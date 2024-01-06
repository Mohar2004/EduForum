
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"


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

btn.addEventListener('click', (e) => {
    var names = document.getElementById('nmm').value
    var ages = document.getElementById('age').value
    var email = document.getElementById('em').value
    var password = document.getElementById('pss').value
    var dbts = ""
    createUserWithEmailAndPassword(auth, email, password, dbts)
        .then((userCredential) => {

            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
                username : names,
                age : ages,
                email: email,
                doubts : dbts
            })
            setTimeout(logging, 2547)
            function logging() {
                let logger = confirm("User Signed Up! Wanna Login?")
                if (logger) {
                    window.location.href = "login.html"
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