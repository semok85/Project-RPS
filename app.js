const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
let myScore = 0;
let comScore = 0;
const getPlayerInput = () => {
  return prompt("Please Select Paper, Scissor or Paper").toLocaleLowerCase();
};

const playRsp = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `Draw, ${playerSelection} equal with ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    myScore++;
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    comScore++;
    return `You Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    comScore++;
    return `You Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    myScore++;
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    comScore++;
    return `You Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    myScore++;
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else {
    return "Please select the right one";
  }
};
const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(playRsp(getPlayerInput(), getComputerChoice()));
    console.log(`Score : You ${myScore} vs Computer ${comScore}`);
  }
};
