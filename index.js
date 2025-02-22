console.log("working");
var noOfButtons = document.querySelectorAll(".drum").length;

// Button press
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "white";
    var btnInnerText = this.innerText;
    makeSound(btnInnerText);
    buttonAnimation(btnInnerText);
  });
}

// key press from keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  // var lowerKey = event.code.toLocaleLowerCase().charAt(event.code.length - 1);
  // makeSound(lowerKey);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    default:
      alert("Please press a key from given drums");
      break;
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 2000);
}
