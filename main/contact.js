//import instance
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import{getDatabase, ref, get, set, child, orderByChild, update, remove, onValue} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js"
import { getStorage, ref as sref, uploadBytes , getDownloadURL} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-storage.js";

// firebase  config
const firebaseConfig = {
    apiKey: "AIzaSyAQDu6A1Zxsxi9uq_GGB5p5Pl5VeCb_J1g",
    authDomain: "test-eaccf.firebaseapp.com",
    databaseURL: "https://test-eaccf.firebaseio.com",
    projectId: "test-eaccf",
    storageBucket: "test-eaccf.appspot.com",
    messagingSenderId: "352845030343",
    appId: "1:352845030343:web:1e1119aa07112da0372fe2",
    measurementId: "${config.measurementId}"
  };

//init database
const app = initializeApp(firebaseConfig)
const db  = getDatabase()


readcontact()
function readcontact(){
    $(document).ready(function(){
        const dbref = ref(db)

        get(child(dbref,"data/"+"kontak/")).then(snapshot=>{
            if(snapshot.exists()){
                let layoutcontact = ''
                snapshot.forEach(value=>{
                    console.log(value.val()['nama'])

                    layoutcontact += '<div class="p-2 col-md">'
                    layoutcontact +=    '<div class="card-body text-dark text-center">'
                    layoutcontact +=            '<div>'
                    layoutcontact +=                '<img class="card-img-top" src="'+value.val()['pic']+'"  style="width: 30%;"  alt="Card image cap">'
                    layoutcontact +=            '</div>'
                    layoutcontact +=            '<div>'
                    layoutcontact +=                '<a href="'+value.val()['nama']+'" class="p-2"><h2>'+value.val()['nam']+'</h2></a>'                                
                    layoutcontact +=            '</div>'
                    layoutcontact +=        '</div>'
                    layoutcontact +=    '</div>'

                    $("#lyt_kontak").html(layoutcontact)
                })
            }
        })
    })

}