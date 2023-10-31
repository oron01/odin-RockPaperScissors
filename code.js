//Create a rock paper scissors game in which a player plays vs computer

//initialize required variables (round, score)
let round = 1
let score = [0,0]
let humanChoiceValue
let computerChoiceValue
let winner
let closed = false
let computerChoiceImage = document.querySelector('#computerChoiceImage')
let computerChoiceText = document.querySelector('#computerChoiceText')
let SCISSORSIMAGE = "https://static.vecteezy.com/system/resources/previews/003/808/404/non_2x/scissors-icon-for-web-presentation-logo-infographic-haircut-tailor-hairdresser-haircut-free-vector.jpg"
let PAPERIMAGE = "https://uproxx.com/wp-content/uploads/2017/12/john-cena-gel-pens.jpg?w=650"
let ROCKIMAGE = "https://i.kym-cdn.com/entries/icons/facebook/000/037/848/cover2.jpg"
let QUESTIONMARKIMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD39/fV1dVLS0v5+flubm5bW1vv7++lpaWTk5MbGxvj4+PS0tLn5+fZ2dmvr6+BgYG4uLhkZGQ7OztRUVHExMSMjIxzc3NGRkaXl5cVFRUwMDAlJSV6enq7u7vKysqHh4egoKAsLCxfX18LCwsYGBhOTk5ktAlSAAAFbUlEQVR4nO2dh3biMBBFMazB9F4DwZQs//+HawMh5LCQN9KoTM7cD7D0jO3polJRFEVRFEVRFOUXkPb6s8F+PqwfGxeO48Ww1RzMar1q6L3ZkuXN4fIjecWhPh/V0tAbNSHNV423l9ruWY/3XVEya60JLO6LSUuIylndQN0n41Hsr2Z3YSHvwnQb7y9Z3W+s9Z1Z9ENL+S+ddx55Zybb0HIe6IwZ9ZW0B6ElfaPHra/kYxRa1o1050BfyaEbWtqFrSN9JeMstLrCMzs5FFgQ/HUcuNVXMA3rAxydCyzIw+nrtH0ITJJWKIEjP/oKGmEEtrwJLHycEC+jTQhB582/2Wh4FVjgW+LUt8Dkw69E/wKLB9Vn3OjFDD4w8SfQPpA3Y+xL4CqQwCRp+hE4CyYwSbykN3oBBSZtHwqZsk2GDN0L5Mw3meD8Oc0DC3RvMkILTBLH+anQz2jBm1OBNYudLetlzTDPZ9vBvlX/oej2CqeZG5OSUsn7qPdwrWw2XxtdzKXFMAvqh7WnF8yaS4MLOsz44yXPG+ufPgx9eiT9x5nAJnkvbeR2d8jB9OMjzwT547AHL0z1dF3l3qjJ3wl+q6u0xPnGkUKiQ7ojXZxmaN24bkR/jep67CgXXzlRSEvNPLcQz6D8iksH+ioZSaDJY0S5hezyKsTUhdF7khIWyHnFnaEUYQydDoLRQO0QgT5BoLG5wk3/kVPbBUIZxvwz0IHXODBKu3LAFVpk3/GWDvb8NyHBZpPT7MKrdNikXcE9NjuPCnZ9Z0zCbuDfALuld+gy7IE+LHBttw5sMLjDC9xWWGbCqug63JlhPPa1XQlN3Sw4ZN0BZxqsby36wnObfDgpZt1qtwMXmnLI+gJ+O+x9/j24EHP8BBviuvVSqOFlVgjnSe2tVCCFO1ShvS+F3kzm9xCOvu2XQn9D5qaFfnc2GjT3q/l7/Tg9LdfPomGG2h5qebnt4SNpmnX63bKQ1FzNd8PF8TTZcNxYNA71UO12BBohOkhjeAKt38U3cQIC59simVOgAyfWYx9xe8ocFOilc8gJaA02UOO3PbAD7KY04wE4DpX6ocGrP6F3agrcmcvsd3sDT+oHH/cyBO+tiWBmzwQ8oSf0IcWfUdftia4gdOuE3qoZhCp+sGE9KygjHCK9btTjLqG1IkUCaZRR4k9IEijR6d5RBEqMDGkttAKjClq/nLwsYkYbeLcsogcAby+54Kz/2RXUtuM89IapUGdRpSW6M+pAyXvoHRMhH2vjbQqYCfKMmLAUaYc8iSpMIH36RpZAg4OX7Js8fGIw7S7LVzMYQ/V00AAPZCOYCKv3mpzHwN7w7BKDEzWWopIWBgcvifrGpAYzv6JewYx+oMZGVDhocCSKqCeUUnf5hH2kwil0gSdR31CDR1RYOE+bPy34G+dh0E9JqV9RWZFEhVKfvyCuxEvMqE3EtSEQ4/l56P2SoQwQJyILL6QTX4QZwTOkcELeE0qMeEUFEp9QBAqz8heGuL62OCNRQvC31wK/MRXKBLjH42U5wU3hId6/lnkJ/BO2hQrE30JR6Zg7YI9boKd2Bh5hEhbOf4H2WQhtaa7gca9IS1+CJp9EVc6+AQa+ElsNr4CVbFlp33vAL6m8Trwb4DCo1PGeClwLDb1NCzCfVFzq9w7sJxSZt7gAnmgjM+w9g/X+Cv6SgoewyCryfgebEZHrsaFJtjz0Ni3AjIXIDOmV8fLPz8iroymKoiiKoiiKoiiKoiiKwg2ULS0RW5pRhaowflShKowfVagK40cVqsL4UYWqMH5UoSqMH1WoCuNHFarC+FGFqjB+VKEqjB9VqArjRxWqwvj5/Qq7NQyp57YoiqIoijz+AYpeThvypTXpAAAAAElFTkSuQmCC"

let LOSSIMAGE = "https://preview.redd.it/vx2dgjvpkvs71.jpg?width=320&format=pjpg&auto=webp&s=3e962b7ea922d8f330ba81b5f9800ff683029b5a"
let WINIMAGE = "https://i.kym-cdn.com/entries/icons/facebook/000/027/195/cover10.jpg"
let ILLEGALCHOICEIMAGE = "https://famisafe.wondershare.com/images/article/2023/05/bruh-meme-2.jpg"
let DRAWIMAGE = "https://staticg.sportskeeda.com/editor/2022/08/c8013-16603931227930-1920.jpg"
let LOSSAUDIO = new Audio('LOSSAUDIO.mp3')
LOSSAUDIO.duration = 2
LOSSAUDIO.volume = 0.01
let WINAUDIO = new Audio('WINAUDIO.mp3')
WINAUDIO.duration = 2
WINAUDIO.volume = 0.01
let currentAudio 

let outcomeText = document.querySelector("#outcomeText")
let outcomeImage = document.querySelector('#outcomeImage')
let stats = document.querySelector("#stats")
stats.textContent = `Round: ${round} | Score: You - ${score[0]} Computer - ${score[1]}`


let humanChoiceButtons = document.querySelectorAll('.playerOptions')
humanChoiceButtons.forEach(button => {
    button.addEventListener('click',(e) => {getHumanChoice(e.currentTarget)})});

let fightFunction = () => {
    getComputerChoice()
    getWinner()
    announceWinner()
}
let fightButton = document.querySelector('#fightButton')
fightButton.addEventListener('click',fightFunction
)

let getHumanChoice = (choice) => {
    if (humanChoiceValue !== undefined) {
        let reset = document.querySelector(`#${humanChoiceValue}`)
        reset.style.boxShadow = ""}
    humanChoiceValue = choice.id
    // alert(choice.id)
    choice.style.boxShadow = "0px 0px 0px 5px yellow"
    return (humanChoiceValue)
    }
    
//Get players rps choices
//get human rps choice
//get computer rps choice
getComputerChoice = () => {
let number = Math.random()
if (number < 0.333) {computerChoiceValue = "rock"}
else if (number < 0.666) {computerChoiceValue = "paper"}
else if (number <= 1) {computerChoiceValue = "scissors"}
else {alert("Something fucked up on line 20")}
// alert(computerChoiceValue)
return computerChoiceValue}
computerChoiceValue = getComputerChoice()
//Determine winner
let getWinner = () => {
    // alert(humanChoiceValue)
switch (humanChoiceValue) {
    case "rockDiv":
        if (computerChoiceValue == "scissors") {winner = "human"}
        else if (computerChoiceValue == "paper") {winner = "computer"}
        else {winner = "draw"}
        break;
    case "paperDiv":
        if (computerChoiceValue == "rock") {winner = "human"}
        else if (computerChoiceValue == "scissors") {winner = "computer"}
        else {winner = "draw"}
        break;
    case "scissorsDiv":
        if (computerChoiceValue == "paper") {winner = "human"}
        else if (computerChoiceValue == "rock") {winner = "computer"}
        else {winner = "draw"}
    break;
    default:
        winner = "nobody"
}}

let announceWinner = () => { 
//Announce winner
if (winner == "human") {
    outcomeText.textContent = "Outcome: You Win!"
    outcomeImage.src = WINIMAGE
    score[0] += 1
    WINAUDIO.play()
    currentAudio = WINAUDIO
}
else if (winner == "computer") {
    outcomeText.textContent = "Outcome: You Lose!"
    outcomeImage.src = LOSSIMAGE
    score[1] += 1
    LOSSAUDIO.play()
    currentAudio = LOSSAUDIO


}
else if (winner == "draw") {
    outcomeText.textContent = "Outcome: None Wins!"
    outcomeImage.src = DRAWIMAGE
}
else {outcomeText.textContent = "Outcome: You didn't pick a weapon, try again."
outcomeImage.src = ILLEGALCHOICEIMAGE}

switch (computerChoiceValue) {
case "rock":
computerChoiceImage.src = ROCKIMAGE
computerChoiceText.textContent = "ROCK!"
break;
case "scissors":
computerChoiceImage.src = SCISSORSIMAGE
computerChoiceText.textContent = "SCISSORS!"
break;
case "paper":
computerChoiceImage.src = PAPERIMAGE
computerChoiceText.textContent = "PAPER!"
break;
}
fightButton.removeEventListener('click',fightFunction)
stats.textContent = `Round: ${round} | Score: You - ${score[0]} Computer - ${score[1]}`

let resetFunction = (e) => {
computerChoiceImage.src = QUESTIONMARKIMAGE
computerChoiceText.textContent = "?"
outcomeImage.src = QUESTIONMARKIMAGE
fightButton.textContent = "FIGHT!"
if (currentAudio) {currentAudio.pause()
currentAudio.currentTime = 0}
fightButton.addEventListener('click',fightFunction

)
stats.textContent = `Round: ${round} | Score: You - ${score[0]} Computer - ${score[1]}`
}

if (winner !== "nobody") {round += 1}

fightButton.textContent = "Reset"
fightButton.addEventListener('click',(e) => {
    resetFunction(e)
    fightButton.removeEventListener('click',() => {resetFunction()}
    )})
//Announce score
// set up round for next game
}

// let game = () => {
//     [score, round] = gameRound()
//     [score, round] = gameRound()
//     [score, round] = gameRound()


// }
// game()