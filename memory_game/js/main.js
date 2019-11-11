
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


testCard = cards[1];
console.log('cards: ' + testCard.cardImage);


function flipCard(cardId) {
    console.log("uuuser flipped " + this.src);
    cardId = this.getAttribute("data-id");
    console.log('card id: ' + cardId);
    //console.log( "User flipped " + cards[cardId].rank);
    //console.log( cards[cardId].cardImage);
    //console.log( cards[cardId].suit);
    cardsInPlay.push(cardId);
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length == 2) {
       checkForMatch();
       }
    }

function checkForMatch() {
  console.log('card 1 rank ' + cardsInPlay[0].rank)
  var cardId1 = cardsInPlay[0];
  var cardId2 = cardsInPlay[1];
  if (cards[cardId1].rank === cards[cardId2].rank) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
}

function createBoard() {
    
    for (var i = 0; i < cards.length; i++) {
        
        //For each card, use createElement to create an img element and store it in a variable cardElement. 
        
        var cardElement = document.createElement('img');
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(cardElement);
        console.log('card created w/ scr: ' + cards[i].cardImage);
       
        }
        
    }
    
createBoard();    

//flipCard(2);
//flipCard(0);

