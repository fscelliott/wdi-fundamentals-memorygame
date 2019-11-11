
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
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}

//left off 5/7: https://my.generalassemb.ly/activities/245?from=dashboard&assignmentUuid=3fba0ce5-e21f-4cad-9a78-4a2079765516 

flipCard(2);
flipCard(0);

