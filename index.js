const choices = ["rock", "paper", "scissors"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");

function playGame(palyerChoice) {

    const computerChocie = choices[Math.floor(Math.random() * 3)]

    let result = "";

    if (palyerChoice === computerChocie) {
        result = "BƏRABƏR";

    } 
     else{
        switch (palyerChoice) {
            case "rock":
             result = (computerChocie === "scissors") ? "UDDUN!" : "UDUZDUN!";
                break;

                case "paper":
                    result = (computerChocie === "rock") ? "UDDUN!" : "UDUZDUN!";
                       break;
                       
                case "scissors":
                    result =(computerChocie === "paper") ? "UDDUN!" : "UDUZDUN!";
                       break;
        }
    }
    PlayerDisplay.textContent = `OYUNÇU: ${palyerChoice}`;
    ComputerDisplay.textContent = `COMP: ${computerChocie}`;
    ResultDisplay.textContent = result;
}
