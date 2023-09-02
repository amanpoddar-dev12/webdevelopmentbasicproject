gamePattern = [];
userClickedPattern = [];
// console.log(gamePattern)
buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.random() * 4;
  return (randomNumber = Number.parseInt(randomNumber));
}

// console.log(nextSequence())
var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function () {
  if (!started) {
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

var temp = nextSequence();
console.log(temp);
let randomChosenColour = buttonColours[temp];

console.log(randomChosenColour);
gamePattern[-1] = randomChosenColour;
// gamePattern.push(randomChosenColour);


$(".btn").on("click", function () {
  // userChosenColour = this.id;
  var userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
});
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
function checkAnswer(currentLevel) {
  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {
      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
   
    console.log("wrong");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $('#level-title').text('Game Over, Press Any Key to Restart');
    

    $('body').addClass('game-over');
    setTimeout(function(){
      $('body').removeClass('game-over');
    },200)
  }
}



$("#red").click(function () {
  $("#red").fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/red.mp3");
  audio.play();
  animatePress(userChosenColour);
});
$("#green").click(function () {
  $("#green").fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/green.mp3");
  audio.play();
  animatePress(userChosenColour);
});
$("#yellow").click(function () {
  $("#yellow").fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/yellow.mp3");
  audio.play();
  animatePress(userChosenColour);
});

$("#blue").click(function () {
  $("#blue").fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/blue.mp3");
  audio.play();
  animatePress(userChosenColour);
});

function animatePress(currentColor) {
  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
