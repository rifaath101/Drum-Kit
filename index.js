// Detecting Button Press

let numberOfDrumButtons = document.querySelectorAll(".drum").length; 

for (let i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { // Listening to when a button is clicked on the drum class
        
        let buttonInnerHTML = this.innerHTML; // It stores the html text eg. "w", "a", etc.

        makeSound(buttonInnerHTML); // buttonInnerHTML is now the key in the makeSound function

        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) { // The event keyword tells you which key is being pressed and adds the key to the makeSound function
    
    makeSound(event.key);

    buttonAnimation(event.key);

}); 



function makeSound(key) {

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }

}


function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
