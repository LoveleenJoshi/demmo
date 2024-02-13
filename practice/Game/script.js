'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent=10;

// document.querySelector(".score").textContent=10;
// document.querySelector("input").value=23;
let score=20;
let highScore=0;

let secretNumber=Math.trunc(Math.random()*19)+1;
const displayMessage=function(message){
    document.querySelector(".message").textContent=`${message}`;

}

// console.log(secretNumber)
document.querySelector(".check").addEventListener('click' , function(){
    const guess=Number(document.querySelector(".guess").value);
    
    if(!guess){
        displayMessage("⛔️ No Number!");
    }


    else if(secretNumber===guess){
        document.querySelector(".message").textContent="Correct Number!";

        document.querySelector(".number").textContent=secretNumber;

        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector(".number").style.width="30rem";

        if(score>highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }
    

    else if(secretNumber !==guess){
        if(score>1){
            document.querySelector(".message").textContent= secretNumber>guess? "📈 Too High!":"📈 Too Low!";
            score--;
            document.querySelector(".score").textContent=score;
           }else{
            document.querySelector(".message").textContent="You Lost!"
            document.querySelector(".score").textContent=0;
           }
    }

    // else if(secretNumber<guess){
    //    if(score>1){
    //     document.querySelector(".message").textContent="📈 Too High!"
    //     score--;
    //     document.querySelector(".score").textContent=score;
    //    }else{
    //     document.querySelector(".message").textContent="You Lost!"
    //     document.querySelector(".score").textContent=0;
    //    }
    // }


    // else if(secretNumber>guess){
    //     if(score>1){
    //         document.querySelector(".message").textContent="📈 Too Low!"
    //         score--;
    //         document.querySelector(".score").textContent=score;
    //        }else{
    //         document.querySelector(".message").textContent="You Lost!"
    //         document.querySelector(".score").textContent=0;
    //        }
    // }
    
  
})
document.querySelector(".again").addEventListener("click" , function(){
    secretNumber=Math.trunc(Math.random()*19)+1;
    document.querySelector(".number").textContent="?";
   
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".score").textContent=20;
    document.querySelector(".message").textContent="Start guessing...";
    document.querySelector(".guess").value="";

})