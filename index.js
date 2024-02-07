const choices = ["rock", "paper", "scissors"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");

function playGame(palyerChoice) {

    const computerChocie = choices[Math.floor(Math.random() * 3)]

    let result = "";

    if (palyerChoice === computerChocie) {
        result = "IT'S A TIE!";

    } 
     else{
        switch (palyerChoice) {
            case "rock":
             result = (computerChocie === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

                case "paper":
                    result = (computerChocie === "rock") ? "YOU WIN!" : "YOU LOSE!";
                       break;
                       
                case "scissors":
                    result =(computerChocie === "paper") ? "YOU WIN!" : "YOU LOSE!";
                       break;
        }
    }
    PlayerDisplay.textContent = `PLAYER: ${palyerChoice}`;
    ComputerDisplay.textContent = `COMPUTER: ${computerChocie}`;
    ResultDisplay.textContent = result;
}
