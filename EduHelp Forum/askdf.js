import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, child, ref, set, get, push, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
let vari=[{}]
let db=[]
//export function baap() {
    console.log("123")
    const firebaseConfig = {
        apiKey: "AIzaSyCBgsIwW_jAgRPhJxLwIEJ7ByWpHHA6vRk",
        authDomain: "eduforumauth.firebaseapp.com",
        databaseURL: "https://eduforumauth-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "eduforumauth",
        storageBucket: "eduforumauth.appspot.com",
        messagingSenderId: "1094162769847",
        appId: "1:1094162769847:web:70fa9d8ed9867be9822a32"
    };

    
    let nmmm=""
    let agg=""
    let emmm=""
    
    const app = initializeApp(firebaseConfig)
    const database = getDatabase(app)
    const auth = getAuth()
    //const doubtsinDB = ref(database, "doubts")

    sb.addEventListener("click", (e) => {
        const doubtinp = document.getElementById('doubt')
        const btninp = document.getElementById('sb')
        let inpvalue = doubtinp.value
        const user = auth.currentUser
        const uid = user.uid;
        
        console.log(db)
        db.push(inpvalue)
        console.log(db)
    
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${uid}`)).then((snapshot) => {
            if (snapshot.exists()) {
                const arr=snapshot.val()
                //console.log(arr);
                arr['doubts'] = db
                nmmm = arr['username']
                agg = arr['age']
                emmm = arr['email']
                //console.log(arr)
                vari = arr;
            
                
            } 
            
            else {
                console.log("No data available");
             }
             //console.log(vari)
            var dbttt = vari['doubts']
            console.log(dbttt)
             //console.log(dbttt)
            update(ref(database, 'users' + uid),{
                doubts : dbttt
    
             })
        })
        .catch((error) => {
             console.error(error);
        })
        })
        

