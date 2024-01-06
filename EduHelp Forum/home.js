import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"


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

buttn.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        
        alert("User Logged Out!!")
        window.location.href = 'login.html'
    }).catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)

    })
})