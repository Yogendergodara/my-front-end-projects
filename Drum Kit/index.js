

var noofbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<noofbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        let bu = this.innerHTML;
        makesound(bu);
       buttonanimation(bu);
    });
}

document.addEventListener("keypress",function (evt) {
    makesound(evt.key);
    buttonanimation(evt.key);
});

function makesound(key) {
    switch (key) {
        case "f":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;


            case "a":
            var audio2 = new Audio("sounds/tom-4.mp3");
            audio2.play();
            break;

            case "s":
            var audio3 = new Audio("sounds/kick-bass.mp3");
            audio3.play();
            break;

            case "d":
            var audio4 = new Audio("sounds/snare.mp3");
            audio4.play();
            break;

            case "j":
            var audio5 = new Audio("sounds/tom-1.mp3");
            audio5.play();
            break;

            case "k":
            var audio6 = new Audio("sounds/tom-2.mp3");
            audio6.play();
            break;

            
            case "l":
            var audio7 = new Audio("sounds/tom-3.mp3");
            audio7.play();
            break;
    
        default:
            alert("Press Write Button");
            break;
    }
}

function buttonanimation(currentkey) {
    let activebuttton = document.querySelector("."+currentkey); 
    activebuttton.classList.add("pressed");
    
    setTimeout(function() {
        activebuttton.classList.remove("pressed");
    },100);
}



// var audio = new Audio("sounds/crash.mp3");
// audio.play();

