const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "Rock";
  } else if (randomNum === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

const playRsp = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `Draw, ${playerSelection} equal with ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `You Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You Lose, ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win, ${playerSelection} beats ${computerSelection}`;
  }
};

playerSelection = prompt(
  "Please Select Paper, Scissor or Paper"
).toLocaleLowerCase();
computerSelection = getComputerChoice().toLocaleLowerCase();

if (
  playerSelection === "paper" ||
  playerSelection === "rock" ||
  playerSelection === "scissors"
) {
  console.log(playRsp(playerSelection, computerSelection));
} else {
  location.reload();
}
