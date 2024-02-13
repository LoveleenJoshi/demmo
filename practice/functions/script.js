'use strict';
// const Bookings=[]
// const createBooking=function(flightNum,numPassengers=1,price=200*numPassengers){
//     //  numPassengers ||=1;
//     //  price||=199;
// const booking={
//     flightNum,
//     numPassengers,
//     price
// }
// console.log(booking);
// Bookings.push(booking);
// // console.log(Bookings)
// }
// createBooking("11B07");
//  createBooking("908U&", 2,800);
//  createBooking("ooPM9",9);
//  createBooking("A90Z",undefined,300)


// const flight="LH234";
// const jonas={
//     name:"Ramratan jakhar",
//     passport:23456789
// }
// const checkIn=function(flightNum,passenger){
// flightNum='Lh999';
// passenger.name="Mrs " + passenger.name;
// if(passenger.passport===23456789){
//     alert("Checked In")
// }else{
//     alert("Wrong Number")
// }
// }
// console.log(flight);

// checkIn(flight,jonas);
// console.log(jonas);

// const newPassport=function(pass){
    
//     pass.passport=Math.trunc(Math.random()*100000000000)
// }
// newPassport(jonas);
// console.log(jonas)
// checkIn(flight,jonas)
// jonas.name="ram";
// console.log(jonas.name)


// 
// 
const Indigo={
    airline:"Indigo Airline",
    iCode:"IN",
    bookings:[],
    book(flightNum,name){
        console.log(`${name} have booked a ${this.airline} ${this.iCode} flightNo. ${flightNum} `)
        this.bookings.push({flight:`${flightNum} ${this.iCode},${name}`})
    }
}
Indigo.book(999,"Loveleen joshi");
Indigo.book(989,"rama joshi");
console.log(Indigo);

const AirAsia={
    airline:"Air Asia",
    iCode:"AirAsia",
    bookings:[],}

const spice={
    airline:"spice",
    iCode:"SH",
    bookings:[]
}
const book=Indigo.book;
//call method

book.call(AirAsia,123,"RamGopal");
console.log(AirAsia);
book.call(spice,900,"kaalu")
console.log(spice)

//apply method
const flightData=[456,"anand"];
book.apply(Indigo,flightData);

//call
book.call(AirAsia,...flightData);

//bind
const bookIN=book.bind(Indigo);
const bookAirAsia=book.bind(AirAsia);
const bookSpice=book.bind(spice);

const bookIN44=book.bind(Indigo,44,"Kallu");

bookIN(34,"Jonas Schetmann");
bookIN44()


//with Event Listener
Indigo.planes=300;

Indigo.countPlanes=function(){
    this.planes++;
    console.log(this.planes)
}

document.querySelector(".buy").addEventListener("click",Indigo.countPlanes.bind(Indigo))
 //Partial Application
 const CalTax=(rate,value)=>value+value*rate;
 const CalVAT=CalTax.bind(null,0.23)
 console.log(CalVAT(100))



 function caltax(value){
    return function(rate=.23){
        console.log(value+value*rate)
    }
 }

 const abc=caltax(100);
 abc(.12)


 const vari="qewwccfrrrteteb";
 console.log(vari.lastIndexOf("t"));


 const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    // registerNewAnswer(){
    //     //get answer
    // let answ=Number(prompt(
    //     `${this.question}
    //     \n${this.options.join("\n")}
    //      \n (Write option answer)`
    //  ))
    //  typeof answ==="number" && answ<this.answers.length && this.answers[answ]++;
    // // this.displayResults();
    // this.displayResults("string")
    // },
    // displayResults(type="array"){
    // if(type==="array"){
    //     console.log(this.answers)
    // }else if(type==="string"){
    //     console.log(`Poll results are ${this.answers.join(", ")}`)
    // }
    // }
// }
// poll.registerNewAnswer();
// document.querySelector(".poll").addEventListener("click" , poll.registerNewAnswer.bind(poll))
//  //[5,2,3]
//  //[1,5,3,9,6,1]
//  poll.displayResults.call({answers:[5,2,3]},'string');
//  poll.displayResults.call({answers:[1,5,3,9,6,1]},'string');
//  poll.displayResults.call({answers:[1,5,3,9,6,1]});


//  (function(){
//     console.log("This will never Work")
//  })();
//  (()=> console.log("This will also never Work"))();
 
// {
//     const isPrivate=23;
//     var notPRivate=23;
// }
// // console.log(isPrivate);

// console.log(notPRivate);



// function add(a){
//     return function(b){
//         return a*b;
//     }
// }
// console.log(add(10)(20));


// const lovi={
//     profession:"manager",
//     id:"1212",
//     Bookings:[],
//     confirm(name,age){
//         console.log(`${this.profession}:${name} of ${age} having ${this.id}`)
//        this.Bookings.push({name:`${name}`, profession:`${this.profession}`})
//     }
// }
// lovi.confirm("Reenu",21);
// const rama={
//     profession:"CEO",
//     id:"2323",
//     Bookings:[]
// }

// lovi.confirm.call(rama,"Kaalu",24)

// // //apply
//  const Data=["laalu",29];
//  lovi.confirm.apply(rama,Data)

// //bind
// const confirmLovi=lovi.confirm.bind(lovi,"kaao",30);
// const  confirmRama=lovi.confirm.bind(rama);
// // confirmLovi("kaao",30)
// confirmLovi()
 }

const addTax=(rate,value)=>value+(value*rate)/100;
const addVAT=addTax.bind(null,23)
console.log(addVAT(100));

function addTAX(value){
    return function(rate=23){
        console.log(`${value+(value*rate/100)}`)
    }
}
addTAX(100)(12)

const poll2={
    
        question: 'What is your favourite programming language?',
        options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
        // This generates [0, 0, 0, 0]. More in the next section 😃
        answers: new Array(4).fill(0),
        RegisterNewAnser(){
            // const Answer=Number(prompt(
            //     `${this.question}\n${this.options.join("\n")}\n(Write option Answe)`
            // ))
    
            typeof Answer==="number" && Answer<this.answers.length && (this.answers[`${Answer}`])++;

             this.DisplayResults("string");
        },
        DisplayResults(type="array"){
      if(type==="array"){
      console.log(this.answers)
      }else if(type==="string"){
        console.log(`Poll Results are:${this.answers.join(" ")}`)
      }
        }
}
poll2.RegisterNewAnser()
document.querySelector(".poll").addEventListener("click",poll2.RegisterNewAnser.bind(poll2))
// 2poll2.DisplayResults("string")
poll2.DisplayResults.call({answers:[5,2,3]},"array");
const secureBooking=function(){
    let passengercount=0;
    return function(){
        passengercount++;
        console.log(`${passengercount}`)
    }
}
secureBooking()()
secureBooking()()
secureBooking()()
secureBooking()()
secureBooking()()
//  const booker=secureBooking();
//  booker()
//  booker()
//  booker()
//  booker()


let f;
const g =function(){
    const a=9;
    f=function(){
        console.log(a*9)
    }
}

const h=function(){
    const b=200;
    f=function(){
        console.log(b*3)
    }
}
g()
f()

h()
f()
console.dir(f)

//Examle 2
const boardPassengers=function(n,wait){
    //  const perGroup=n/3;
    setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3groups ${perGroup}`)
    },wait*1000)
    console.log(`we will strat boarding in ${wait} seconds`)
}
const perGroup=900;
boardPassengers(180,3);
(function () {
   let header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector("body").addEventListener("click",function(){
        header.style.color="blue"
    })
})();

//   function num(a=10,b=20,c){
//     // a=a||10;
//     // b=b||20;
//     console.log(a,b,c)
//   }
//   num(undefined,undefined,30)
// const Name="SamSung Tv";
// const Products_details={
//     price:12000,
//     category:"Electronics"
// }
// function print(name,products_Details){
//  name="Smasung Washing machine";
//  products_Details.price=22000;
//  if(products_Details.category==="Electronics"){
//     console.log(`Category:${products_Details.category}`)
//  }
// }
// print(Name,Products_details)
const OneWord=function(str){
    console.log(str.replace(/ /g,""))
}
const Upper_Case=function(str){
    const [first,...others]=str.split(" ");
    console.log(`${first.toUpperCase()} ${others.join(" ")}`)
}

const transFormer=function(stri,fn){
    console.log(`${fn(stri)}`);
    console.log(`${fn.name}`)
}
transFormer("hello! I am loving the javascript language",Upper_Case)

// const High5=function(){
//     console.log(`${"😘".repeat(5)}`)
// }

// const greet=function(rate=23){
//     return function(value){
//         console.log(`${value+(value*rate/100)}`)
//     }
// }
// const WelcomeStatement=greet(12);
// WelcomeStatement(1000)

const fight_details={
    airline:"Indigo",
    iCode:"In",
    Bookings:[],
    Book(fightNum,passenger){
    console.log(`${this.airline} flight with ${this.iCode} fight number ${fightNum} is carrying ${passenger} passengers.`)
    }
}
// fight_details.Book(123,300);

const fight_details2={
    airline:"AirAsia",
    iCode:"A2",
    Bookings:[],
}
// fight_details.Book.call(fight_details2,234,100)
const flight_detailsBind=fight_details.Book.bind(fight_details);
const flight_details2Bind=fight_details.Book.bind(fight_details2);
flight_detailsBind(234,900);

fight_details.count=100;
fight_details.CountValue=function(){
    this.count++;
    console.log(`${this.count}`)
}
document.querySelector("body").addEventListener("click",fight_details.CountValue.bind(fight_details))


//partial application
const Sample_addTax=(rate,value)=>console.log(`${value+value*rate/100}`);
const Sample_VatTax=Sample_addTax.bind(null,23);
Sample_VatTax(1000)
const Greet_sample=function(firstName,secondName){
    console.log(`${firstName.toUpperCase()} ${secondName.toLowerCase()}`);
}
const Data_sample=Greet_sample.bind(null,"Loveleen","joshi")
Data_sample()