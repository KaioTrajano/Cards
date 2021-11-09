



let redessociais = document.querySelector("li");
redessociais.addEventListener("mouseenter", animationup)
redessociais.addEventListener("mouseleave", animationend)

function animationup(){


redessociais.classList.add("redesup")


}
function animationend(){
redessociais.classList.remove("redesup")


}


let perfil = document.getElementById("perfilkaio")
let perfil2 = document.getElementById("perfilgiulia")
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")

perfil.addEventListener("mouseenter", transform)
perfil.addEventListener("mouseleave", dissolve)
perfil2.addEventListener("mouseenter", transform2)
perfil2.addEventListener("mouseleave", dissolve2)
card1.addEventListener("mouseenter", zoomcard)
card1.addEventListener("mouseleave", zoomcardmenos)
card2.addEventListener("mouseenter", zoomcard2)
card2.addEventListener("mouseleave", zoomcardmenos2)


function transform(){
perfil.style.borderRadius = "8px"
perfil.style.transition = "0.4s"
perfil.style.borderColor = "red"
perfil.style.transform = "scale(1.2)"
}

function zoomcard(){
   
    card1.style.boxShadow = "1px 1px 50px red"
    card1.classList.add("perfil1zoom")
    card1.style.transition = "0.6s"
}

function zoomcardmenos(){
   card1.style.boxShadow = "1px 1px 8px red"
   card1.classList.remove("perfil1zoom")
   card1.style.transition = "0.6"
   
}

function zoomcard2(){
    card2.style.boxShadow = "1px 1px 50px rgb(226, 1, 170)"
   card2.classList.add("perfil1zoom")
   card2.style.transition = "0.6s"
}

function zoomcardmenos2(){
  card2.style.boxShadow = "1px 1px 8px rgb(226, 1, 170)"
  card2.classList.remove("perfil1zoom")
  card2.style.transition = "0.6"
  
}

function transform2(){
perfil2.style.borderRadius = "8px"
perfil2.style.transition = "0.5s"
perfil2.style.borderColor = "rgb(226, 1, 170)"
perfil2.style.transform = "scale(1.2)"

}

function dissolve(){
perfil.style.borderColor = "white"
perfil.style.borderRadius = ""
perfil.style.transition = "0.5s"
perfil.style.transform = "scale(1.0)"


}

function dissolve2(){
perfil2.style.borderRadius = ""
perfil2.style.transition = "0.4s"
perfil2.style.borderColor = "white"
perfil2.style.transform = "scale(1.0)"

}

const socialmedia = {

github: "KaioTrajano",
youtube: "handofnoxus",
facebook: "kaio.vinicios.980",
instagram: "kaiovts",
twitter: "kaiow15"

}





function changesociallink(){

for (let li of lista.children){
    
    let social = li.getAtribute('id')
    
    li.children[0].href = 'https://www.instagram.com/giuliagraziottin/'
    
    
}


}


function getGithubProfileInfos(){
let user = document.getElementById("user")
let gituser = document.getElementById("gituser")
let description = document.getElementById("descrição")
const url = `https://api.github.com/users/${socialmedia.github}`

fetch(url).then(response => response.json())
.then(data =>{
    user.textContent = data.name
    description.textContent = data.bio
    gituser.textContent = data.login

})


}


getGithubProfileInfos()


