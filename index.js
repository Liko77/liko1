const choices = ["daş", "kağız", "qayçı"];
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
            case "daş":
             result = (computerChocie === "qayçı") ? "UDDUN!" : "UDUZDUN!";
                break;

                case "kağız":
                    result = (computerChocie === "daş") ? "UDDUN!" : "UDUZDUN!";
                       break;
                       
                case "qayçı":
                    result =(computerChocie === "kağız") ? "UDDUN!" : "UDUZDUN!";
                       break;
        }
    }
    PlayerDisplay.textContent = `OYUNÇU: ${palyerChoice}`;
    ComputerDisplay.textContent = `COMP: ${computerChocie}`;
    ResultDisplay.textContent = result;
}
