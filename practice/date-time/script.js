'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-02-23T17:01:17.194Z',
    '2024-02-25T23:36:17.929Z',
    '2024-02-27T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions


const startTimer=function(){
  let time=120;
  const tick=function(){
    
      const min=String(Math.trunc(time/60)).padStart(2,0);
      const sec=String(time%60).padStart(2,0);
    labelTimer.textContent=`${min}:${sec}`;
    
  
    if(time===0){
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get Started`;
      
      containerApp.style.opacity = 0;
  
    }

    time=time-1;

  }
  tick();
  const timer=setInterval(tick,1000);
 
  return timer;

}

const formattedDatesMovement=(date,locale)=>{
   const calDays=(date1,date2)=>Math.round(Math.abs(date2-date1)/(1000*60*60*24));
   const daysTotalPassed=calDays(date,new Date());
  //  console.log(daysTotalPassed)
  if(daysTotalPassed===0)return "today";
  if(daysTotalPassed===1) return "yesterday";
  if(daysTotalPassed<=7) return `${daysTotalPassed} days ago`;

//   const day=`${date.getDate()}`.padStart(2,0);
//    const month=`${date.getMonth()+1}`.padStart(2,0);
//    const year=date.getFullYear();
//    const hour=`${date.getHours()}`.padStart(2,0);
//    const min=`${date.getMinutes()}`.padStart(2,0);
  
//  return `${day}/${month}/${year} ,${hour}:${min}`;
return new Intl.DateTimeFormat(locale).format(date);
}

const formattedCur=(value,locale,currency)=>new Intl.NumberFormat(locale,
  {style:"currency",
currency:currency}).format(value);

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
   const date= new Date(acc.movementsDates[i]);
   const displayDate=formattedDatesMovement(date,acc.locale);
   
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const formattedVal=formattedCur(mov,acc.locale,acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value"> ${formattedVal}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formattedCur(acc.balance,acc.locale,acc.currency)}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formattedCur(incomes,acc.locale,acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formattedCur(out,acc.locale,acc.currency)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formattedCur(interest,acc.locale,acc.currency)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount,Timer;

// //fake account details
//  currentAccount=account1;
//  updateUI(currentAccount);
// containerApp.style.opacity = 100;

//Applying  Api For Date
// const now=new Date();
// const options={
//   hour:"2-digit",
//   minute:"2-digit",
//   second:"numeric",
//   day:"2-digit",
//   month:"long",
//   year:"numeric",
//   weekday:'long'
// }
// const locale=navigator.language;
// console.log(locale)
// labelDate.textContent=new Intl.DateTimeFormat(locale,options).format(now);


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date
    // const now=new Date();
    //             const day=`${now.getDate()}`.padStart(2,0);
    //             const month=`${now.getMonth()+1}`.padStart(2,0);
    //             const year=now.getFullYear();
    //             const hour=`${now.getHours()}`.padStart(2,0);
    //             const min=`${now.getMinutes()}`.padStart(2,0);
    // labelDate.textContent=`${day}/${month}/${year} ,${hour}:${min}`;


        const now=new Date();
        const options={
          hour:"2-digit",
          minute:"2-digit",
          second:"numeric",
          day:"2-digit",
          month:"numeric",
          year:"numeric",
          // weekday:'numeric'
        }
        // const locale=navigator.language;
        // console.log(locale)
        labelDate.textContent=new Intl.DateTimeFormat(currentAccount.locale,options).format(now);



    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();


    //set timer
    if(Timer)clearInterval(Timer)
    Timer=startTimer();
    

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
     
    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    clearInterval(Timer);
    Timer=startTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
   setTimeout(function(){
    currentAccount.movements.push(amount);
    
    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString())
 
     // Update UI
     updateUI(currentAccount);
   },2500)
  }
  clearInterval(Timer);
  Timer=startTimer()
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements= [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300];
const Some=movements.filter((cur)=>cur>0).every((cur)=>cur>0);
console.log(Some)

const array = [1, 2, 3, 4, 5];
const even=(elemet)=>elemet%2==0;
console.log(array.some(even));
function isBiggerThen10(element){
  return element>0
}


console.log([2,3,4,5,6].some(isBiggerThen10))

const fruits = ["apple", "banana", "mango", "guava"];
const checkIsAvailable=(ele,val)=>ele.some((cur)=>val===cur)
console.log(checkIsAvailable(fruits,"apple"));

const arr=[[1,[2,3]],[[4,5],6],7,8];
console.log(arr.flat(2));


const flatMApSample=accounts.flatMap((cur)=>cur.movements);
console.log(flatMApSample);

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
console.log(movements.sort((a,b)=>a-b))

const arrNew=new Array(5);
// const x=arrNew.map(()=>15);
console.log(arrNew.fill(1,3,5 ));
const y=Array.from({length:5},(_,i)=> i+1);
console.log(y) 

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
const arry = [2, 9, 9];
console.log(arry.indexOf(2,-2));
let count=0;
const bankDeposit=accounts.flatMap((cur)=>cur.movements).reduce((acc,cur)=>{
  cur>0?acc.deposits += cur : acc.withdrawal+=cur;
  return acc;
},{
  deposits:0,
  withdrawal:0
});
console.log(bankDeposit)

const convertTitleCase=function(title){
  const exception=["a","an","the","and","is"];
  const val=title.toLowerCase().split(" ").map(cur=>exception.includes(cur)?cur:cur[0].toUpperCase()+cur.slice(1)).join(" ");
  return val;
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));



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

/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
*/
// 1.
// recommendedFood = weight ** 0.75 * 2
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
dogs.forEach((dog)=>
dog.recommendedFood=(dog.weight**0.75)*28);
console.log(dogs)

//2.
const findDog=dogs.find(cur=>cur.owners.includes("Sarah"));
console.log(findDog.curFood>findDog.recommendedFood?"Eating too much":"Eating too less");

//3.

const ownersEatTooMuch=dogs.filter(cur=>cur.curFood>cur.recommendedFood);
console.log(ownersEatTooMuch);
const ownersEatTooLittle=dogs.filter(cur=>cur.curFood<cur.recommendedFood);
console.log(ownersEatTooLittle);

//like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
//4.
const arr1=ownersEatTooMuch.flatMap((cur)=>cur.owners);
console.log(`${arr1[0]}, ${arr1[1]},${arr1[2]} dogs eat too much`)

const arr2=ownersEatTooLittle.flatMap((cur)=>cur.owners);
console.log(`${arr2[0]}, ${arr2[1]},${arr2[2]} dogs eat too little`)

//5.

// console.log(dogs.some(dogs.curFood===dogs.recommendedFood));

//6.
const verify=(dog)=>dog.curFood > (dog.recommendedFood*0.9) && dog.curFood < (dog.recommendedFood*1.1);
console.log(verify(dogs));
//8.
const shallowCopy=[...dogs];
const arrNewASc=shallowCopy.sort((a,b)=>a.recommendedFood-b.recommendedFood)


// Remainder Operator
console.log(5%2)
console.log(5/2);

const isEven=n=>n%2===0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(524));

labelBalance.addEventListener("click",function(){
  const newArr=[...document.querySelectorAll(".movements__row")];
  newArr.map((cur,i)=>{if(i%2===0){
  cur.style.backgroundColor="red"
  }
})
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  );
  console.log(movementsUI.map((cur)=>cur.textContent.replace("€","")));

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
  
  
})
//Numeric Separator
const diameter=28_123_000_000
console.log(diameter);

const price=35_999;
console.log(price);

console.log(3.14_1415);
console.log(Number("123_123"))//nan;
console.log(parseInt("123_123"))//123

//BigInt
console.log(2 ** 53 -1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(12345666667478749829896266575657565756575657567565n);
console.log(BigInt(4543534354343121226789657894677346734));
// console.log(Math.sqrt(16n));

//operations
console.log(54645464544564n*100000000000n);

const sum=123456789n;
const num=23;
console.log(sum*BigInt(num))
console.log(sum +"is reallly a bigint")


//exception
console.log(20n>15);
console.log(20n===20);
console.log(typeof 20n);
console.log(20n =="20")

console.log(10n/3n);


//create date
console.log(new Date());
console.log(new Date("Feb 27 2024"));
console.log(new Date("december 24,2037"));
console.log(new Date(account1.movements[0]))
console.log(new Date(2037,11,25,23,45,55));
 

console.log(new Date(2023,10,34));
console.log(new Date(0));
console.log(new Date(3*24*60*60*1000));

//working with dates
const future=new Date(2037,10,19,15,23);
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getDay())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString())
// console.log(future.getTime())
// console.log(new Date(2142237180000))
// console.log(Date.now())

// console.log(new Date(account1.movementsDates[2]))

// future.setFullYear(2040)
// console.log(future)

const createBooking=(flightnum,passenger=10,price=200*passenger)=>
{
  
  const bookings={
    flightnum,
    passenger,
    price
  }
  return bookings;
}
console.log(createBooking("Lh123",undefined,13000));
const flight="LH123";
const jonas={
  passenger:"jonas",
  passport:123456
}
const checkPassport=(flightNum,passengerDetails)=>{
  flightNum="LH999";
  // 
  passengerDetails.passenger="Mr."+passengerDetails.passenger;
  if(passengerDetails.passport=123456){
    // alert("Check In")
  }else{
    // alert("Not allowed")
  }
  
}
checkPassport(flight,jonas)
//operations with dates
const futur=new Date(2024,3,12);

console.log(Number(futur))

// const futur1=new Date(2024,3,12);
// const calcDaysPassed1=(date1,date2)=>(date2-date1)/(1000*60*60*24);
// const days12=calcDaysPassed(new Date(2024,3,12),new Date(2024,3,22,10,8));
// console.log(days12)

const numb=3012000.90;
const options={
  style:"currency",
  unit:"celsius",
  currency:"EUR",
  // useGrouping:false
}
console.log("India   :",new Intl.NumberFormat("en-IN",options).format(numb));
console.log("US      :",new Intl.NumberFormat("en-US",options).format(numb));

//setTimeOut
// const ingredients=["olives","spinaesh"]
// const Order=setTimeout((ing1,ing2) => {
//   console.log(`Here is Your Pizza Ready 🍕 ${ing1},${ing2}`)
// }, 3000,[...ingredients]);

// console.log("Waiting.....")
// if(ingredients.includes("")){
//   clearTimeout(Order)
// }

//setInterval
 
// setInterval(()=>{
//   const now=new Date();
// const h=now.getHours();
// const m=now.getMinutes();
// const s=now.getSeconds();
// const time=`${h}:${m}:${s}`;

//   console.log(time);
// },1000)


// setInterval(()=>{const now=new Date();console.log(now)},1000)
// const calcDaysPassed=function(date1,date2){
//   return (date2-date1)/(1000*60*60*24);
// }
// const days=calcDaysPassed(new Date(2024,1,18),new Date(2024,1,28));
// console.log(days)

const Today=new Date();
const opt={
  day:"2-digit",
  month:"numeric",
  year:"numeric",
  hour:"2-digit",
  minute:"2-digit",
  second:"2-digit",
  weekday:"long"

}
console.log(new Intl.DateTimeFormat("en-IN",opt).format(Today));
const val=5055122.89;
console.log(new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(val))