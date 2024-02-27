'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements=function(movements,sort=false){
    containerMovements.innerHTML="";
    const Movs=sort?movements.slice().sort((a,b)=>a-b):movements;
    Movs.forEach(function(movement,i){
    
    const type=(movement>0?"deposit":"withdrawal");
    const html=`
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
   
    <div class="movements__value">${movement}€</div> 
    
  </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin",html)
})
}

const updateUI=function(accs){
 //display movements
 displayMovements(accs.movements);

 //display balance
 displayBalance(accs)

//display Summary
calcDisplaySummary(accs)
}

const displayBalance=function(acc){
    acc.balance=acc.movements.reduce(function(acc,cur){
        return acc+cur
    },0)
    labelBalance.textContent=`${acc.balance}€`;
   
}



//display deposit and withdrawals
const calcDisplaySummary=function(acc){
const incomes=acc.movements.filter(mov=>mov>0).reduce((acc,cur)=>acc+cur,0);
labelSumIn.textContent=`${incomes}€`;
const out=acc.movements.filter(mov=>mov<0).reduce((acc,cur)=>acc+cur,0);
labelSumOut.textContent=`${Math.abs(out)}€`;
const interest=acc.movements.filter(value=>value>0).map(value=>
  value*`${acc.interestRate}`/100
).filter((int,i,arr)=>int>1).reduce((acc,int)=>acc+int,0);
labelSumInterest.textContent=`${interest}€`;
}



// usernames
const createUsernames=function(accs){
    accs.forEach(function(user){
        user.username=user.owner.toLowerCase().split(" ").map(function(word){
            return word[0]
        }).join("")
    })
   
}
createUsernames(accounts);


//Event Handlers
let currentHolder;

btnLogin.addEventListener("click",function(e){
  e.preventDefault();
   currentHolder=accounts.find(acc=>acc.username===inputLoginUsername.value);
    if(currentHolder?.pin===Number(inputLoginPin.value)){
      labelWelcome.textContent=`Welcome back ${currentHolder.owner.split(" ")[0]}`;
      containerApp.style.opacity=100;

      inputLoginUsername.value=inputLoginPin.value="";
      inputLoginPin.blur();
       //updating ui
     updateUI(currentHolder);
     
    }
   
})

btnTransfer.addEventListener("click",function(e){
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const receiverAccount=accounts.find(acc=>acc.username===inputTransferTo.value);
 
  if(amount>0 && receiverAccount && amount<=currentHolder.balance && receiverAccount.username!==currentHolder.username){
    currentHolder.movements.push(-amount);
    receiverAccount.movements.push(amount);

     //updating ui
     updateUI(currentHolder);
     
  }
})
btnLoan.addEventListener("click",function(e){
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  if(amount>0 && currentHolder.movements.some(mov=>mov>=amount*.1)){
    currentHolder.movements.push(amount);
    updateUI(currentHolder);
  }
  inputLoanAmount.value=" "
})

btnClose.addEventListener("click",function(e){
  e.preventDefault();
  if(inputCloseUsername.value===currentHolder.username && Number(inputClosePin.value)===currentHolder.pin){
    const index=accounts.findIndex((accs)=>accs.username===currentHolder.username)
     //Deleting 
    accounts.splice(0,1);
      //hiding
      containerApp.style.opacity=0;
  }
  inputCloseUsername.value=inputClosePin.value=" ";
})
let sorted=false;
btnSort.addEventListener("click",function(e){

  e.preventDefault();
  
  displayMovements(currentHolder.movements,!sorted);
 
 sorted=!sorted;
console.log(sorted)
})

/////////////////////////////////////////////////
const movements=[200, 450, -400, 3000, -650, -130, 70, 1300];
const Value=function(acts){
  const total=acts.map((acc)=>acc.movements).flat(                                                          );
  console.log(total)
}
Value(accounts)
// for(const [i,mov] of movements.entries()){
//   if(mov>0){
//     console.log(`Movement ${i+1}:deposited ${mov}`)
//   }else{
//     console.log(`Movement ${i+1}:withdrew ${mov}`)
//   }
// }
// movements.forEach(function(mov,i,arr){
//   if(mov>0){
//     console.log(`Movement ${i+1}:deposited ${mov}`)
//   }else{
//     console.log(`Movement ${i+1}:withdrew ${mov}`)
//   }
// })
// const total=movements.filter(mov=>mov>0).map((mov,i)=>mov*1.1).reduce((acc,cur)=>acc+cur);
// console.log(total)
const empty=new Array(5);
// empty.fill(1)
empty.fill(23,3,5)
console.log(empty);
const x=[1,2,3,4,5,6,7];
console.log(x.fill(0,3,6))

//Array.from
const y=Array.from({length:7},()=>1);
console.log(y);
const z=Array.from({length:7},(_,i)=>i+1);
console.log(z);
const dice=Array.from({length:100},()=>Math.trunc(Math.random()*99)+1);
console.log(dice);
const currencies2 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])
const demo=Array.from(currencies2);
console.log(demo);

const stri="loveleen joshi";
const arr=stri.split(" ");
console.log(Array.from(arr))

// labelBalance.addEventListener("click",function(){
//   const movementsUI=Array.from(document.querySelectorAll(".movements__value"));
//   console.log(movementsUI.map(el=>el.textContent.replace("€","")))
// })
labelBalance.addEventListener("click",function(){
  const movementsUI=Array.from(document.querySelectorAll(".movements__value"),el=>Number(el.textContent.replace("€","")));
  console.log(movementsUI)
})
//converting into
const movementsUI2=[...document.querySelectorAll(".movements__value")]
//1
const bankDepositSum=accounts.map(acc=>acc.movements).flat().filter(val=>val>0).reduce((tot,cur)=>tot+cur,0);
console.log(bankDepositSum)
//2
// const totalNumbers=accounts.map(acc=>acc.movements).flat().filter(val=>val>1000);
// console.log(totalNumbers.length)
const totalNumbers=accounts.map(acc=>acc.movements).flat().reduce((acc,cur)=>cur>=1000?++acc:acc,0);
console.log(totalNumbers)


//postfix increment
let a=10;
console.log(a++);
console.log(a)

//prefix increment
let a1=10;
console.log(++a1);
console.log(a1)
 //3
 const Obj=accounts.map(acc=>acc.movements)
 .flat()
 .reduce((tot,cur)=>{cur>0?(tot.deposits+=cur):(tot.withdrwal+=cur)
 return tot
},{
  deposits:0,withdrwal:0
 })
console.log(Obj)

//4

const title=function(word){
  const exception=["a","an","the","with","or","is","and"]
 let fun=word=>word[0].toUpperCase() + word.slice(1);
  const correct=word.toLowerCase().split(" ").map(mov=>exception.includes(mov)?mov:fun(mov)).join(" ")
return fun(correct)
}
console.log(title("this is a nice title"));
console.log(title("THIS IS a LoNG title but NOT to Lond"));
console.log(title("AND here is one more title with example"));




/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
]
// //1
// const recomendedFood=dogs.map((mov)=>mov.recomendedFood= Math.trunc(mov.weight ** 0.75 * 28));
// console.log(dogs.recomendedFood);
// console.log(dogs)
// //2

// const Owner=dogs.find(mov=>mov.owners.includes("Sarah"))
// console.log(Owner.curFood>Owner.recomendedFood)

// //3
// const newArray=dogs.filter(mov=>mov.curFood>mov.recomendedFood);
// console.log(newArray)
// const newArray2=dogs.filter(mov=>mov.curFood<mov.recomendedFood);
// console.log(newArray2)

// //4
// const newArrayCopy=dogs.filter(mov=>mov.curFood>mov.recomendedFood);
// const values=newArrayCopy.map(mov=>mov.owners).flat()
// console.log(`${values[0]},${values[1]} and ${values[2]}  dogs eat too much!`)

// const newArrayCopy2=dogs.filter(mov=>mov.curFood<mov.recomendedFood);
// const values2=newArrayCopy2.map(mov=>mov.owners).flat()
// console.log(`${values2[0]},${values2[1]} and ${values2[2]}  dogs eat too little!`)

// //5
// const exactly=dogs.some(mov=>mov.curFood===mov.recomendedFood);
// console.log(exactly)

// //6
// dogs.map(mov=>mov.okayAmtGreater=mov.curFood*1.1);
// dogs.map(mov=>mov.okayAmtlesser=mov.curFood*0.9);
// const okay=dogs.some(mov=>(mov.okayAmtGreater>mov.curFood && mov.okayAmtlesser<mov.curFood ?true:false))
// console.log(okay)
// //7
// dogs.map(mov=>mov.okayAmtGreater=mov.curFood*1.1);
// dogs.map(mov=>mov.okayAmtlesser=mov.curFood*0.9);
// const okay2=dogs.find(mov=>mov.okayAmtGreater>mov.curFood && mov.okayAmtlesser<mov.curFood)
// console.log(okay2)
// //8
// const dogsopy=dogs.slice();
// const val=dogsopy.map(mov=>mov.recomendedFood);
// val.sort((a,b)=>a-b)
// console.log(val)


const arr1=["a","b","c","d","e"];
//splice-mutuate the array
arr1.splice(1,3)
console.log(arr1)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
months.splice(4,0,"May")
months.splice(6,0,"July")
console.log(months);
const myFish = ["angel", "clown", "mandarin", "sturgeon"]


myFish.splice(2)
console.log(myFish)

"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open(`GET`, `https://restcountries.eu/rest/v2/name/portugal`);
request.send();
console.log(request.responseText);
request.addEventListener("load", function () {
  console.log(request.responseText);
});
