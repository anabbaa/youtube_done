
let clicked = false;
document.querySelector(".hamburger").addEventListener("click",()=>
{
    clicked = !clicked;

  
    if(clicked){
        document.querySelector('.drop-menu').style.cssText = "display: none;"

    }
else{
document.querySelector(".drop-menu").style.cssText  = 
"display: block; position: absolute;top: 3vh;left:0;z-index: 1;"
  
}
});
let hamburgerDiv = document.querySelectorAll(".hamburger-div");
let HamburgerFather = document.querySelector(".hamburger");

clicked = !clicked;
const hamburgermenue = ()=>{
    hamburgerDiv.forEach(({style}, i)=>{
        if (clicked){
        if(i == 0){
            style.transform = "rotate(0.35turn)";
        }
        else if(i == 1){
            style.display = "none";
        }
        else if(i == 2){
            style.transform = "rotate(-0.35turn)";
            style.position = "absolute";
        }
        }
        else{
            if(i == 0){
                style.transform = "rotate(1turn)";
            }
            else if(i == 1){
                style.display = "block";
                style.marginTop = "1vh";
            }
            else if(i == 2){
                style.transform = "rotate(1turn)";
            }
        }
    });
};
const theme =  ()=>{

    const mood = document.querySelector("#light-dark").checked;
body = document.querySelector("body").style;
hamburger = document.querySelector(".hamburger").style; 
youtubeSpam = document.querySelector(".youtube").style;
searchBox = document.querySelector(".search-box").style;
user = document.querySelector(".fa-adn").style;
uploadTitle = document.querySelector(".upload-title").style;
aside = document.querySelector("aside").style;
dropMenu = document.querySelector(".drop-menu").style;
hamburgerDiv = document.querySelectorAll(".hamburger-div");
asideIcons = document.querySelectorAll(".fas");
if (mood) {
body.backgroundColor = "black";
hamburger.borderWigth = "4vh";
hamburger.borderHeight = "4vh";
hamburger.display = "flex";
hamburgerAlignItems = "flex-start";
hamburger.flexDirection = "column";
hamburger.justifyContent = "space-eventuly";
youtubeSpam.color = "red";
user.color = "white";
youtubeSpam.fontSize = "2rem";
uploadTitle.color = "white";
aside.backgroundColor = "grey";
dropMenu.backgroundColor = "lightgray"
dropMenu.zIndex = "1";
hamburgerDiv.forEach((div)=>{
div.style.border = "0.2rem white solid";
});

asideIcons.forEach(({style}, i)=>{
if (i == 1 || i == 2 || i == 3 ){

style.color = "white";
}
});
} else {
body.backgroundColor = "white";
aside.backgroundColor = "white";
uploadTitle.color = "black";
youtubeSpam.color = "black";
hamburgerDiv.forEach((div)=>{
div.style.border = "0.2rem black solid";
dropMenu.backgroundColor= "yellow";
asideIcons.forEach(({style},i)=>{
    if (i == 1 || i ==2 || i == 3){
        style.color = "black";
    }
})
});
}
};