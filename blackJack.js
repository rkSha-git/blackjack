let cardEl = document.getElementById('card');
let sumEl = document.getElementById('sum');
let eligibleEl = document.getElementById('gotblackjack');
let priceEl = document.getElementById('price');
let eligible = false;
let alive = true;

let cards = [];
cards[0] = Math.floor(Math.random() * 13) + 1;
cards[1] = Math.floor(Math.random() * 13) + 1;

let Sum;
function sum(){
    Sum = 0;
    for(let i = 0; i < cards.length; i++){
         Sum += cards[i];
        };
    sumEl.textContent = "Sum : " + Sum;
    if(Sum < 21){
        eligibleEl.textContent = "Want to get a new card!";
        eligible= true;
    }else if(Sum == 21){
        eligibleEl.textContent = "You've won a blackjack!";
        priceEl.textContent = 'You won : $500';
        alive = false;
    }else if(Sum > 21){
        eligibleEl.textContent = "You've lose a blackjack!";
        priceEl.textContent = 'You lost : $100';
        alive = false;
    };
};

function startGame(){
   cardEl.textContent = "Cards : " + cards[0] + " " + cards[1];
   sum();
};

function newCard(){
    if(eligible == true && alive == true){
    cards.push(Math.floor(Math.random()* 13) + 1);
    sum();
    };
};