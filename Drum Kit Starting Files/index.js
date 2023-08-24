let count = document.querySelectorAll(".drum").length;
for (let i = 0; i < count; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var element = this.innerHTML;
    makesound(element)
    addanimation(element)
   });
}

document.addEventListener("keypress",function(event){
  makesound(event.key)
  addanimation(event.key)
});
function makesound(key){
    switch (key) {
        case "j":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "w":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
  
        default:
          console.log("default");
      }
}

function addanimation(eventkey){
   var animation=document.querySelector("."+eventkey);
   animation.classList.add("pressed");

   setTimeout(() => {
    animation.classList.remove("pressed");
   }, 100);
}
