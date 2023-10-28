//Create a rock paper scissors game in which a player plays vs computer

//initialize required variables (round, score)
let round = 1
let score = [0,0]
let human_choice_value
let computer_choice_value
let winner
let closed = false

let gameRound = () => {
// testing if program has been closed
    if (closed == true) {return [score,round]}
//Alert Round
console.log("Round " + round)
//Get players rps choices
//get human rps choice
getHumanChoice = () => {
    human_choice_value = prompt("Rock Paper or Scissors:")
    if (human_choice_value != null) {human_choice_value = human_choice_value.toLowerCase()}
    if (human_choice_value != "rock" && human_choice_value != "paper" && human_choice_value !== "scissors" && human_choice_value !== "")
    {alert("not a legal choice")
getHumanChoice()}
return (human_choice_value)
}
human_choice_value = getHumanChoice()

//get computer rps choice
getComputerChoice = () => {
let number = Math.random()
if (number < 0.333) {computer_choice_value = "rock"}
else if (number < 0.666) {computer_choice_value = "paper"}
else if (number <= 1) {computer_choice_value = "scissors"}
else {alert("Something fucked up on line 20")}
return computer_choice_value}
computer_choice_value = getComputerChoice()
//Determine winner
switch (human_choice_value) {
    case "rock":
        if (computer_choice_value == "scissors") {winner = "human"}
        else if (computer_choice_value == "paper") {winner = "computer"}
        else {winner = "draw"}
        break;
    case "paper":
        if (computer_choice_value == "rock") {winner = "human"}
        else if (computer_choice_value == "scissors") {winner = "computer"}
        else {winner = "draw"}
        break;
    case "scissors":
        if (computer_choice_value == "paper") {winner = "human"}
        else if (computer_choice_value == "rock") {winner = "computer"}
        else {winner = "draw"}
    break;
    default:
    alert ("empty, closing program")
    closed = true
    return closed
}

//Announce winner
if (winner == "human") {
    console.log(`${human_choice_value} beats ${computer_choice_value}`)
    alert("Human Wins!")
    score[0] += 1
}
else if (winner == "computer") {
    console.log(`${human_choice_value} gets beaten by ${computer_choice_value}`)
    alert("Computer Wins!")
    score[1] += 1

}
else if (winner == "draw") {
    console.log(`${human_choice_value} ties with ${computer_choice_value}`)
    alert("None Wins!")
}
else {alert("INVALID outcome")}
//Announce score
console.log(`The score is: Human - ${score[0]}, Computer - ${score[1]}`)
// set up round for next game
round += 1
return [score,round]
}

let game = () => {
    [score, round] = gameRound()
    [score, round] = gameRound()
    [score, round] = gameRound()


}
game()