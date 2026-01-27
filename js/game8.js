let playGame = confirm("Lets Play rock ,paper or scissors");
if(playGame){
    let playerChoice = prompt("Please Enter rock , paper or scissors");

    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();

        if(playerOne === "rock" ||
            playerOne === "paper"||
            playerOne === "scissors")
            {
            let computerChoice = Math.floor(Math.random() *3 + 1);
            let computer = computerChoice === 1 
            ? "rock"
            : computerChoice === 2 
            ? "paper"
            :"scissors";
            
            let result =
            playerOne === computer
            ? "Tie Game"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayer wins`;
            alert(result);
            let playAgain = confirm("Play Again ?");
            playAgain ? location.reload() : alert("Thanks for playing");
        }
        else{
            alert("You didn't enter rock , paper or scissors");
        }
    }
    else{
        alert("May be Next Time")
    }
}
else{
    alert("Better Luck Next Time");
}



// let playGame = confirm("Lets Play rock, paper, scissors");
// if(playGame){
//     let playerChoice = prompt("Choose one rock,paper or scissors");
//     if(playerChoice){
//         let playerOne = playerChoice.trim().toLowerCase();
//         if(playerOne === "rock"||
//             playerOne === "paper"||
//             playerOne === "scissors"
//         ){
//             let computerChoice = Math.floor(Math.random()*3+1);
//             let computer = computerChoice === 1
//             ?"rock"
//             : computerChoice === 2
//             ? "paper"
//             :"scissors";

//             let result = playerOne === computer
//             ? "Tie game"
//             :playerOne === "rock" && computer === "paper"
//             ?`playerOne : ${playerOne}\n Computer: ${computer}\n Computer Wins !`
//             :playerOne === "paper" && computer === "scissors"
//             ?`playerOne : ${playerOne}\n Computer: ${computer}\n Computer Wins !`
//             :playerOne === "scissors" && computer === "rock"
//             ?`playerOne : ${playerOne}\n Computer: ${computer}\n Computer Wins !`
//             :`playerOne : ${playerOne}\n Computer: ${computer}\n Player Wins !`;
//             alert(result);

//             let playAgain = confirm("Play again ?");
//             playAgain ? location.reload() : alert("Thanks for Playing");
//         }
//         else{
//             alert("You didnt choose rock, paper or scissors");
//         }
//     }
//     else{
//         alert("You change your mind so May be next time");
//     }
// }
// else{
//     alert("Better luck next time");
// }