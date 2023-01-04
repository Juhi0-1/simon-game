var  gamePattern =[];
var buttonColours= ["red","blue","yellow","green"];

var userPattern =[];


var level =  0;
  
var started = false;
const newfunction = function(){

   
    userPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);


     $("#" + randomChosenColour).fadeOut(100).fadeIn(100);


     playsound(randomChosenColour);
     

    
    
}


$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);

    playsound(userChosenColour);
    currentPress(userChosenColour);

    checkAnswer(userPattern.length - 1);

})

 
function playsound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();


}
function currentPress(currentcolor){

    $("#" + currentcolor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentcolor).removeClass("pressed");
      }, 100);
}
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      newfunction();
      started = true;
    }
  });



  function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          newfunction();
        }, 1000);

      }

    } else {

        console.log("wrong");

       
        playsound("wrong");
  
       
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
      
        
        startOver();
    }

}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  

