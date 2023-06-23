let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let homePoints = 0
let awayPoints = 0


function addHome1Point() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function addHome2Point() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function addHome3Point() {
    homePoints += 3
    homeScore.textContent = homePoints
}

function addAway1Point() {
    awayPoints += 1
    awayScore.textContent = awayPoints
}

function addAway2Point() {
    awayPoints += 2
    awayScore.textContent = awayPoints
}

function addAway3Point() {
    awayPoints += 3
    awayScore.textContent = awayPoints
}
