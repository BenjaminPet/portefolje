

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {


    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        playaudio(this.innerHTML);

        buttonAnime(this.innerHTML);
    })

}

    document.addEventListener("keypress", function(event) {
        playaudio(event.key);

        buttonAnime(event.key);
    })

    function playaudio(key) {
        switch (key) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
            case "j":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
            case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;
            case "b":
                var audio = new Audio("sounds/drum audio.mp3");
                audio.play();
            break;
            default: console.log(this.innerHTML);

    }
}

function buttonAnime(currentKey) {

    var Activebutton = document.querySelector("." + currentKey);

    Activebutton.classList.add("pressed");

    setTimeout(function() {
        Activebutton.classList.remove("pressed");
    }, 100);
}
