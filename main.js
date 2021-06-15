const backgrounds = {
    header: {
        bg: 'url("images/webbg.jpg")',
        opacity: 0
    },
    education: {
        bg: 'url("images/edubg.jpg")',
        above: "header",
        opacity: 0.1

    },
    experiences: {
        bg: 'url("images/experiencesbg.jpg")',
        above: "education",
        opacity: 0.3
    },
    resume: {
        bg: 'url("images/resumebg.jpg")',
        above: "experiences",
        opacity: 0.6
    },
    interests: {
        bg: 'url("images/interestsbg.png")',
        above: "resume",
        opacity: 0.5
    },
    contact: {
        bg: 'url("images/webbg.jpg")',
        above: "contact",
        opacity: 0
    }

};

let bgblack = true;


function changeBG(){  

    
    if(bgblack == true){
        document.body.style.backgroundImage = 'url("images/altwebbg.jpg")';
        console.log("background-blue");
        console.log(document.body.style.backgroundImage);
        bgblack = false;
        console.log(bgblack);
    }
    else {
        document.body.style.backgroundImage = 'url("images/webbg.jpg")';
        console.log("background-black");
        bgblack = true;
    }

    
}



document.querySelector("#education-header").addEventListener("mouseover",function(){
    console.log("mouse over");
    let arr = document.querySelectorAll(".eduimg");
    for(var i = 0; i <arr.length; i++){
        arr[i].style.opacity = "1.0";
    }
});


document.querySelector("#education-header").addEventListener("mouseout",function(){

    let arr = document.querySelectorAll(".eduimg");
    for(var i = 0; i <arr.length; i++){
        arr[i].style.opacity = "0.7";
    }
});
$("#education-header").click(function(){
    console.log("hallo")
});



//Fading in school pictures on "education" header hover
function brightImgs(){
    let arr = document.querySelectorAll(".eduimg");
    for(var i = 0; i <arr.length; i++){
        arr[i].style.opacity = "1.0";
    }
    console.log("hovering")
}

function fadeImgs(){
    let arr = document.querySelectorAll(".eduimg");
    for(var i = 0; i <arr.length; i++){
        arr[i].style.opacity = "0.7";
    }
}



const overlay = document.querySelector("#overlay");

for(let section in backgrounds){
    new Waypoint({
        element: document.getElementById(section),
        handler: direction => {
            if(direction === "up"){
                overlay.style.backgroundImage = backgrounds[backgrounds[section].above].bg;
                overlay.style.opacity = backgrounds[backgrounds[section].above].opacity;
            }
            else{
                overlay.style.backgroundImage = backgrounds[section].bg;
                overlay.style.opacity = backgrounds[section].opacity;
            }
        }
    })
}
let x= 10;
function fxn(){
    console.log("clicked button");
}




