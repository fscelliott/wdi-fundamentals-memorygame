
//var cards = ["queen", "queen", "king", "king"];

var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];
//var cardOne = cards[0];
//var cardTwo = cards[2];

testCard = cards[1];
console.log('cards: ' + testCard.cardImage);


function flipCard(cardId) {
    console.log( "User flipped " + cards[cardId].rank);
    console.log( cards[cardId].cardImage);
    console.log( cards[cardId].suit);
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

