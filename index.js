const createDeck = () => {
  const suits = ["S", "D", "H", "C"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const deck = [];

  for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (let cardCounter = 0; cardCounter < 13; cardCounter++) {
      deck.push(cards[cardCounter] + suits[suitCounter]);
    }
  }
  return deck;
};

const getRandomCard = (deck) => {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  console.log(`The random card is ${randomCard}`);
  return randomCard;
};

const deck = createDeck();
const randomCard = getRandomCard(deck);

const buttonContainerElement = document.querySelector(".start-game");
const gameContainerElement = document.querySelector(".container-game");
const startButtonElement = document.querySelector(".go-button");
startButtonElement.addEventListener("click", () => {
  buttonContainerElement.classList.add("hidden");
  gameContainerElement.classList.remove("hidden");
});
