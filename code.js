//Create a rock paper scissors game in which a player plays vs computer

//initialize required variables (round, score)
let round = 1
let score = [0,0]
let human_choice_value
let computer_choice_value
let winner
let closed = false

let LossSrc = "https://preview.redd.it/vx2dgjvpkvs71.jpg?width=320&format=pjpg&auto=webp&s=3e962b7ea922d8f330ba81b5f9800ff683029b5a"
let winSrc = "https://i.kym-cdn.com/entries/icons/facebook/000/027/195/cover10.jpg"

let outcomeText = document.querySelector("#outcomeText")

let humanChoiceButtons = document.querySelectorAll('.playerOptions')
humanChoiceButtons.forEach(button => {
    button.addEventListener('click',(e) => {getHumanChoice(e.currentTarget)})});

getHumanChoice = (choice) => {
    human_choice_value = choice.id
    alert(choice.id)
    choice.style.boxShadow = "0px 0px 0px 5px yellow"
    return (human_choice_value)
    }
    

let gameRound = () => {
// testing if program has been closed
    if (closed == true) {return [score,round]}
//Alert Round
console.log("Round " + round)
//Get players rps choices
//get human rps choice
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
    case "rockDiv":
        if (computer_choice_value == "scissors") {winner = "human"}
        else if (computer_choice_value == "paper") {winner = "computer"}
        else {winner = "draw"}
        break;
    case "paperDiv":
        if (computer_choice_value == "rock") {winner = "human"}
        else if (computer_choice_value == "scissors") {winner = "computer"}
        else {winner = "draw"}
        break;
    case "scissorsDiv":
        if (computer_choice_value == "paper") {winner = "human"}
        else if (computer_choice_value == "rock") {winner = "computer"}
        else {winner = "draw"}
    break;
    default:
    // alert ("empty, closing program")
    // closed = true
    // return closed
}

//Announce winner
if (winner == "human") {
    console.log(`${human_choice_value} beats ${computer_choice_value}`)
    outcomeText.textContent = "Outcome: You Win!"
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

// let game = () => {
//     [score, round] = gameRound()
//     [score, round] = gameRound()
//     [score, round] = gameRound()


// }
// game()