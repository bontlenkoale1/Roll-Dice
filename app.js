const rollbtnElement = document.getElementById("rollBtn");
const resultElement = document.getElementById("results");
const diceElement = document.querySelector(".roll i");

const diceFaces = [
    "fas fa-dice-one",
    "fas fa-dice-two",
    "fas fa-dice-three",
    "fas fa-dice-four",
    "fas fa-dice-five",
    "fas fa-dice-six"
];

rollbtnElement.addEventListener("click", () => {
  const roll = Math.floor(Math.random() * 6) + 1;
    diceElement.className = `fas ${diceFaces[roll - 1]}`;
  resultElement.textContent = `You rolled ${roll}`;
  });
