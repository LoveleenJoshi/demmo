//selecting Elements
const score0El=document.querySelector("#score--0");
const score1El=document.getElementById("score--1");
const dice=document.querySelector(".dice");
const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");
const btnNew=document.querySelector(".btn--new");
let DiceNumber=Math.trunc(Math.round()*6)+1;
let current0=document.getElementById("current--0");
let current1=document.getElementById("current--1");
let score=0;
let currentPlayer=0;
let player0=document.querySelector(".player--0")
let player1=document.querySelector(".player--1");
let scores=[0,0]

//Starting code
score0El.textContent=0;
score1El.textContent=0;
dice.classList.add("hidden");
let playing=true;

const switchPlayer=function(){
    score=0;
    document.querySelector(`#current--${currentPlayer}`).textContent=0;
    currentPlayer=currentPlayer===0?1:0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active")



}

//btnRoll
btnRoll.addEventListener("click",function(){
    if(playing){
    DiceNumber=Math.trunc(Math.random()*6)+1;
    // console.log(DiceNumber);
    dice.classList.remove("hidden");
    dice.src=`./dice${DiceNumber}.png`;
    //if dice is not equal to 1
   if(DiceNumber!==1){ 
    score+=DiceNumber;
    document.querySelector(`#current--${currentPlayer}`).textContent=score;
}else{
 switchPlayer();  
 
 }
}
})

//hold
btnHold.addEventListener("click",function(){
    if(playing){
   scores[currentPlayer]+= score;
   document.getElementById(`score--${currentPlayer}`).textContent=scores[currentPlayer];

   if(scores[currentPlayer]>=10){
    playing=false;
    //  score=0;
    // document.querySelector(`#current--${currentPlayer}`).textContent=0;
    // currentPlayer=currentPlayer===0?1:0;
    // player0.classList.toggle("player--active");
    // player1.classList.toggle("player--active")

    dice.classList.add("hidden");


     document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
     document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active")
   }else{
    switchPlayer();
   }
}
})

btnNew.addEventListener("click", function(){
    current0.textContent=0;
    current1.textContent=0;
    score=0;
    scores=[0,0];
    dice.classList.add("hidden");
    document.querySelector("#score--0").textContent=0;
    document.querySelector("#score--1").textContent=0;
    document.querySelector(`.player--${currentPlayer}`).classList.remove("player--winner");
    document.querySelector(`.player--0`).classList.add("player--active")
})

