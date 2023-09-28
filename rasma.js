
function changePic(x){
   x.src = "444.png";
}

function Normal(p){
    p.src = "3333.png";

}

// let ahmed = document.querySelectorAll(".hh");

function changeColor(g){
    g.style.color = "purple";

}
function returnColor(p){
    p.style.color = "rgb(20, 73, 73)";
}
let channge = document.getElementById("con")

function changeBachGround(){
    channge.style.backgroundColor= "teal"
}

function returnBack(){
    channge.style.backgroundColor= "royalblue"
};



let btn = document.getElementById("btn");

window.onscroll = function (){
    if(scrollY >= 50 ){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}

// btn.onclick = function(){
//     scroll({
//         left:0,
//         top : 0,
//         behavior :"smooth"

//     });
// }

function goTop(){
    scroll({
        left : 0,
        top : 0 ,
        behavior : "smooth"
    })
}