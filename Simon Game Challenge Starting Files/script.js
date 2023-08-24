gamePattern=[];
userClickedPattern=[];
// console.log(gamePattern)
buttonColours=["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber=Math.random(0)*4;
    return randomNumber=Number.parseInt(randomNumber)
}

// console.log(nextSequence())
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// console.log(buttonColours)
var temp=nextSequence();
console.log(temp)
let randomChosenColour=buttonColours[temp]

console.log(randomChosenColour)
gamePattern[-1]=randomChosenColour;
// console.log(gamePattern)

// $( "level-title" ).text('amann')
// $("#level-title").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

$( ".btn" ).on( "click", function() {
    userChosenColour=this.id
    console.log(userChosenColour)
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern)
  } );

$('#red').click(function(){
    $('#red').fadeOut(100).fadeIn(100);
    var audio=new Audio('sounds/red.mp3');
    audio.play();
    animatePress(userChosenColour)
   
})
$('#green').click(function(){
    $('#green').fadeOut(100).fadeIn(100);
    var audio=new Audio('sounds/green.mp3');
    audio.play();
    animatePress(userChosenColour)
})
$('#yellow').click(function(){
    $('#yellow').fadeOut(100).fadeIn(100);
    var audio=new Audio('sounds/yellow.mp3');
    audio.play();
    animatePress(userChosenColour)
})

$('#blue').click(function(){
    $('#blue').fadeOut(100).fadeIn(100);
    var audio=new Audio('sounds/blue.mp3');
    audio.play();
    animatePress(userChosenColour)
})




  function animatePress(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
  
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  























