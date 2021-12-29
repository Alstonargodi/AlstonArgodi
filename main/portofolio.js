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


readporto()
function readporto(){
    $(document).ready(function(){
        const dbref = ref(db)

        //android portofolio
        get(child(dbref,"data/" + "person project/" + "android/")).then((snapshot)=>{
            if(snapshot.exists()){
                let projectcard_person = ""
                snapshot.forEach(value=>{      
                    projectcard_person += '<div class="p-2 col-md-4" id="card">'
                    projectcard_person +=    '<div class="h-50 text-light" id="content">'
                    projectcard_person +=        '<div class="card-body text-center" id="front">'
                    projectcard_person +=            '<div class="h1 mb3">'
                    projectcard_person +=                '<img class="card-img-top"src="'+value.val()['banner']+'" alt="Card image cap">'
                    projectcard_person +=            '</div>'
                    projectcard_person +=        '</div>'
                    projectcard_person +=        '<div class="card-body text-center" id="back">'
                    projectcard_person +=                '<h1 class="card-title">'+value.val()['nama']+'</h1>'
                    projectcard_person +=                '<h5 class="">'+value.val()['decsdua']+'</h5>'
                    projectcard_person +=                '<button class="btn text-danger card-title" id="detail'+value.key+'">see more detail</button>'
                    projectcard_person +=        '</div>'
                    projectcard_person +=    '</div>'
                    projectcard_person += '</div>'
                    
                    $("#lyt_personalproject").html(projectcard_person)

                    let idlayout = document.getElementById("lyt_personalproject")
                    let dataid = "detail"+value.key

                    idlayout.addEventListener('click',function(e){
                        if(e.target.id == dataid){
                            detailpage(value.key)
                        }
                    })
                })
            }
        })

        //web portofolio
        get(child(dbref,"data/" + "person project/" + "web/")).then((snapshot)=>{
            if(snapshot.exists()){
                let projectcard_person = ""
                snapshot.forEach(value=>{      
                    projectcard_person += '<div class="p-2 col-md" id="cardweb">'
                    projectcard_person +=    '<div class="text-light" id="contentweb">'
                    projectcard_person +=        '<div class="text-center" id="frontweb">'
                    projectcard_person +=            '<div class="h1 mb3">'
                    projectcard_person +=                '<img class="card-img-top"src="'+value.val()['banner']+'" alt="Card image cap">'
                    projectcard_person +=            '</div>'
                    projectcard_person +=                '<div class="row  d-grid gap-1">'
                    projectcard_person +=                '</div>'
                    projectcard_person +=        '</div>'
                    projectcard_person +=        '<div class="text-center" id="backweb">'
                    projectcard_person +=                '<h1 class="card-title">'+value.val()['nama']+'</h1>'
                    projectcard_person +=                '<h4 class="">'+value.val()['decsdua']+'</h4>'
                    projectcard_person +=                '<h5 class="text-danger card-title" id="moredetail">see more detail</h5>'
                    projectcard_person +=        '</div>'
                    projectcard_person +=    '</div>'
                    projectcard_person += '</div>'
                    
                    $("#lyt_personalproject_web").html(projectcard_person)

                    
                })
            }
        })

        //team project
        get(child(dbref,"data/" + "team project/")).then((snapshot)=>{
            if(snapshot.exists()){
                let projectcard_person = ""
                snapshot.forEach(value=>{      
                    projectcard_person += '<div class="p-3 m-3 col-md" id="cardteam">'
                    projectcard_person +=    '<div class="text-light" id="contentteam">'
                    projectcard_person +=        '<div class=" text-center" id="frontteam">'
                    projectcard_person +=            '<div class="h1 mb3">'
                    projectcard_person +=                '<img class="card-img-top"src="'+value.val()['banner']+'" alt="Card image cap">'
                    projectcard_person +=            '</div>'
                    projectcard_person +=        '</div>'
                    projectcard_person +=        '<div class=" text-center" id="backteam">'
                    projectcard_person +=                '<h4 class="">'+value.val()['desc']+'</h4>'
                    projectcard_person +=                '<h5 class="text-danger card-title">see more detail</h5>'
                    projectcard_person +=        '</div>'
                    projectcard_person +=    '</div>'
                    projectcard_person += '</div>'
                    
                    $("#lyt_teamproject").html(projectcard_person)
                })
            }
        })
    })
}

function detailpage(id){
    $(document).ready(function(){
        const dbref = ref(db)
    

        $("#lay_detail").css("display","block")

        //main
        let header = ""
        let banner = ""
        let story = ""

        let features = ""
        get(child(dbref,"data/" + "person project/" + "android/" + id)).then((snapshot)=>{

            header += '<h1>'+snapshot.val()["nama"]+'</h1>'

            banner += '<img class="card-img-top p-5"src="'+snapshot.val()["bannerdua"]+'" alt="Card image cap">'

            story +=  '<h3 class="p-5">'+snapshot.val()["decsdua"]+'</h3>'



            console.log(snapshot.val()["nama"])

            $("#header_detail").html(header)
            $("#lay_banner").html(banner)
            $("#lay_story").html(story)
        })


        //feature

        get(child(dbref,"data/" + "person project/" + "android/" + id + "/" + "fitur")).then((snapshot)=>{
            snapshot.forEach((value)=>{
                // console.log(value.val()["nama"])
            })
    
        })


     
    })
}