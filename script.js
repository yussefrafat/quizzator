var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var totalPoints = 0;
var end = false

// functions use in questsions
var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have" + totalPoints + " points!");
}

var timer = function() {
    var timeInterval = setInterval (() => {
        if (end === false) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    },1000);

    console.log("TIMER STARTEDC")
    if (end === true){
        timerEl.textContent = timeLeft;
    }
}

var highScores = function() {
    // div
    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "hs-container";
    mainEl,appendChild(highScoreContainer);

    // high Score TITLE 
    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Scores";
    highScoreContainer.appendChild(title);

    // displays high scores
       // displays player scores
    var initals = localStorage.getItem("initals");
    var score =  localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = "1." + initals + " - " + score;
    highScoreContainer.appendChild(leaderboardScore);

    //div 
    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);
        // "GO BACK"
    var goBack = document.createElement("button");
    goBack.className = "go-back-btn";
    goBack.textContent = "Go Back";
    goBack.addEventListener("click", event => {
        totalPoints = 0;
        end = false;
        timeLeft = 75;
        highScoreContainer.remove();
        start();
    })

}