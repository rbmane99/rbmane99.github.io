let buttonSelector = document.querySelectorAll(".drum");

// click event listener
for (const btn of buttonSelector) {
  btn.addEventListener("click", function () {
    var buttonInnerhtml = this.innerHTML;
    // ----------------OR----------------
    // let numbersOfDrumButton=document.querySelectorAll(".drum").length
    // for(i=0; i<numbersOfDrumButton;i++){
    //     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //         alert("i got clicked");
    //     });
    // }
    makeSound(buttonInnerhtml);
    btnAnimation(buttonInnerhtml);
  });
}


// detecting keyboard press
document.addEventListener("keydown",function(event){

makeSound(event.key);
btnAnimation(event.key);
});



// makesound function
function makeSound(key){
  switch (key) {

    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;


    default: console.log(buttonInnerhtml);
      break;
  }
}

function btnAnimation(currentKey){
  let activeBtn= document.querySelector("."+currentKey);
  activeBtn.classList.add('pressed');

  setTimeout(function(){
    activeBtn.classList.remove("pressed")
  },100);

}






