var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)

    });

}
        

document.addEventListener("keydown", function(event) {
   makeSound(event.key);

   buttonAnimation(event.key);
    });

function makeSound(key) {
    switch (key) {
        case "w" :
            var tom1 = new Audio("./sounds/drzm5.mp3");
            tom1.play();
            break;

        case "a" :
            var tom2 = new Audio("./sounds/drzm4.mp3");
            tom2.play();
            break;

        case "s" :
            var tom3 = new Audio("./sounds/drzm3.mp3");
            tom3.play();
            break;

        case "d" :
            var tom4 = new Audio("./sounds/drzm2.mp3");
            tom4.play();
            break;

        case "c" :
            var clap = new Audio("./sounds/clap.mp3");
            clap.play();
            break;

        case "f" :
            var techkick = new Audio("./sounds/TechKick.mp3");
            techkick.play();
            break;

        case "g" :
            var vibe = new Audio("./sounds/Vibe.mp3");
            vibe.play();
            break;

        case "h" :
            var kick808 = new Audio("./sounds/808Kick.mp3");
            kick808.play();
            break;

        case "t" :
            var tamborine = new Audio("./sounds/Tamborine.mp3");
            tamborine.play();
            break;

        case "u" :
            var hat = new Audio("./sounds/Hat.mp3");
            hat.play();
            break;
                    
        case "j" :
            var snare = new Audio("./sounds/snarre.mp3");
            snare.play();
            break;
        
        case "m" :
            var clave = new Audio("./sounds/snare.mp3");
            clave.play();
            break;

        case "k" :
            var crash = new Audio("./sounds/crashhh.mp3");
            crash.play();
            break;

        case "l" :
            var kick = new Audio("./sounds/kickk.mp3");
            kick.play();
            break;

        case "v" :
            var eee = new Audio("./sounds/eee.mp3");
            eee.play();
            break;

        case "b" :
            var ggg = new Audio("./sounds/ggg.mp3");
            ggg.play();
            break;

        case "n" :
            var bbb = new Audio("./sounds/bbb.mp3");
            bbb.play();
            break;
       
            default: console.log(buttonInnerHtml);
        }
    
    
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

};



