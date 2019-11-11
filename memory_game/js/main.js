
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];






function flipCard(cardId) {
    console.log( "User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length == 2) {
       checkForMatch();
       }
      
    

}

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}



flipCard(2);
flipCard(0);




console.log("User flipped " + cardsInPlay[cardsInPlay.length-2]);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);