var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var started = false;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var sound = new Audio("./sounds/"+name+".mp3");
    sound.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");

    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else {
        $("h1").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        $("body").addClass("game-over");
        
        setTimeout(function() {
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

$(".btn").click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function() {
    if(!started) {
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
});