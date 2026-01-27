// Ternary Operators

let god = "Sachin";
let cricket = god ? "God of Cricket" : "SRT";
//console.log(cricket);

let mark = 90;
let grade = mark > 89 ? "A" 
: mark > 79 ? "B" 
: mark > 69 ? "C" 
: "D";
//console.log(grade);

let player = "rock";
let computer = "sccisors";
let result =
player === computer ? "tie"
: player == "rock" && computer == "paper" ? "computer wins"
: player == "paper" && computer == "sccisors" ? "computer wins"
: player == "sccisors" && computer == "rock" ? "computer wins"
:"player wins";
console.log(result);