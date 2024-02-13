// // 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },

// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },

// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },

// //   order:function(starterIndex,mainIndex){
// //   return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]];

// //   },
// //   orderPasta:function(ink1,ink2,ink3){
// // console.log(`here is your pasta with ${ink1},${ink2} and ${ink3}`)
// //   },
// //   orderPizza:function(mainItem,...otherItem){
// //     console.log(mainItem,otherItem)
// //   },
// // add:function(){
// //   return 10 +12;
// // }
  
// // };

// // // property names
// // const properties=Object.keys(restaurant.openingHours);
// // let openstr=`we are going top open ${properties.length} days:`;

// // for(const day of properties){
// //   openstr +=`${day},` ;
// // }
// // console.log(openstr);

// // //property values
// // let values=Object.values(restaurant.openingHours);
// // for(let {open,close} of values)
// // console.log(open =`${open}`,close=`${close}`);

// // //entries
// // let entries=Object.entries(restaurant.openingHours);
// // // console.log(entries);
// // for(let [day,{open,close}] of entries){
// //   console.log(`${day}=${open} ,${close}`)
// // }
// // let x=20;
// // let y=56;
// // const obj={
// //   x:10,y:23
// // };
// // ({x,y}=obj);
// // console.log(x,y)

// // const game = {
// //   team1:'Bayern Munich',
// //   team2:'Borrussia Dortmund',
// //   playes:[
// //     [
// //       "Neuer",
// //       "Pavard",
// //       "Martinez",
// //       "Alaba",
// //       "Davies",
// //       "Kimmich",
// //       "Goretzka",
// //       "Coman",
// //        "Muller",
// //        "Gnarby",
// //        "Lewandowski"
// //     ],
// //     [
// //       "Burki",
// //       "Schulz",
// //       "Hummels",
// //       "Akanji",
// //       "Hakimi",
// //       "Weigl",
// //       "Witsel",
// //       "Hazard",
// //       "Brandt",
// //       "Sancho",
// //       "Gotze"
// //     ],

// //   ],
// //   score:"4:0",
// //   scored:["Lewandowski" , "Gnarby", "Lewandowski","Hummels"],
// //   date:'nov 9th,2037',
// //   odd:{
// //     team1:1.33,
// //     x:3.25,
// //     team2:6.5
// //   },

// // }

// // for(let [i,value] of game.scored.entries()){
// //   console.log(`Goal ${i+1}:${value}`)
// // }

// // let avg=0;
// // let key=Object.values(game.odd);
// // // console.log(key.length)
// // for(let odd of key)
// // {
// //   avg+=odd;

// //   avg /= key.length;

// // }

// // console.log(avg);
// const [player1,player2]=[...game.players];
// console.log(pla);
// // const arr=[0,1,2,3,4,5];
// const [gk,...field]=player1;
// const abc=[a,b,c];
// const xyz=[x,yz];
// const arr=[...abc,...xyz];
// // console.log(arr)



// // for(let [team,odd] of Object.entries(game.odd)){
// // let teamStr= team==="x"?"draw":game[team];
// // console.log(`Odd of ${teamStr}:${odd}`)
// // }

// const orderDetails=new Set(["Pizza", "Pasta" , "Pizza", "Risotto", "Pasta"]);
// console.log(orderDetails);
// console.log(new Set("jonas"));

// //length
// console.log(orderDetails.size);
// //includes
// console.log(orderDetails.has("Pasta"));
// console.log(orderDetails.has("Bread"));
// //add
// orderDetails.add("Garlic Bread");
// orderDetails.add("Garlic Bread");
// console.log(orderDetails)
// //remove
// orderDetails.delete("Pasta");
// console.log(orderDetails);
// //remove all the items
// // orderDetails.clear();
// console.log(orderDetails)

// //for looping
// for(const order of orderDetails){
//   console.log(order)
// }


// const staff=["manager" , "chef" , "waiter" , "peon" , "waiter" , "peon"];
// const staffUnique=[...new Set(staff)];
// console.log(staffUnique);


// console.log(new Set(["manager" , "chef" , "waiter" , "peon" , "waiter" , "peon"]).size);
// console.log(new Set("Loveleenjoshiiiiramrattaavv").size);


// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   // order(starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },

//   orderDelivery:function({startIndex=1,mainIndex=2,address="ward no.18",time=00}){
//     console.log(
//       `${this.starterMenu[startIndex]}-${this.mainMenu[mainIndex]}-${time}-${address}`
//     )
//   }

// }
// restaurant.orderDelivery()

// const rest=new Map();
// rest.set("name", "christanio italiano");
// rest.set(1,"fristano ,italy");
// console.log(rest.set(2,"italano portugal"));

// rest
// .set(true,"we are opened")
// .set(false,"we are closed")
// .set("categories", ["italian" , "organic" , "vegeterian"])
// .set("open",8)
// .set("close",24)

// console.log(rest.get("name"));
// // console.log(rest.get(true));

// const time=21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// //has property
// console.log(rest.has("open"));
// //delete
// rest.delete(2);
// console.log(rest)
// console.log(rest.size);
// //array as key
// rest.set([1,2],"test");
// console.log(rest.get[1,2]) ;
// const arr=[1,2];
// rest.set(arr,'test');
// console.log(rest.get(arr));
// rest.set(document.querySelector("h1"),"heading");
// console.log(rest)



// const Question=new Map([
//   ["Question","what is the best programming language in world"],
//   [1, "C"],
//   [2,"Java"],
//   [3,"Javascript"],
//   ["correct",3],
//   [true,"Correct"],
//   [false,"Try Again"]
// ])


// console.log(Question)

// const openingHours= {
//       thu: {
//      open: 12,
//        close: 22,
//      },
  
//     fri: {
//         open: 11,
//     close: 23,
//       },
  
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     };

//     ;
//     console.log(Object.entries(openingHours));

//     const products={
//       name:"samsung tv",
//       price:12000.12
//     }
//     console.log(Object.values(products));
//      const hours=new Map(Object.entries(openingHours));
//      console.log(hours);
//      console.log(openingHours)

//   //  quiz;
//   console.log(Question.get('Question'));
//   for(const [key,value] of Question){
//   if(typeof key==="number")
//   console.log(`Answer ${key}:${value}`)
//   }
//   let answer=Number(prompt("Enter Answer"));
//   console.log(answer);
   

//     console.log(Question.get(Question.get("correct")===answer))

//   //  back to array
//     console.log([...Question]);
//     console.log()
      // const gameEvents=new Map([
      //   [17,"Goal"],
      //   [36,"Substitution"],
      //   [47,"Goal"],
      //   [61,"Substitution"],
      //   [64,"Yellow Card"],
      //   [69,"Red Crad"],
      //   [70,"Substitution"],
      //   [72,"Substitution"],
      //   [76,"Goal"],
      //   [80,"Goal"],
      //   [92,"Yellow Card"],
      // ])
      // const values=gameEvents.values();
      // console.log(new Set(values))
      // console.log(gameEvents.delete(64));

      // for(const [key,innings] of gameEvents){
      //   const time=(key<=45?"first":"second")
        // console.log(`${key} ${time} half:${innings}`)}

        // // const arr=[10,20,34,00,2,8,9,2,82,9];
        // const v=arr.pop();
        // console.log(arr,v)






       
      //   console.log(plane[0]);
      //   console.log(plane[1])

      //   console.log(plane[2]);
      //   console.log(plane[3]);
      //   const arr=["a","b","c","d","e"];
      //   console.log(`${arr[arr.length-1]}`);

      //   console.log(`${"loveleen".length-1}`);
      //  console.log("lovel"[3])
      //  console.log(airline[airline.length-1]);
      //   //index of
      //   console.log(airline.indexOf("r"));
      //   console.log(airline.lastIndexOf("r"))
      //   console.log("loveleen".indexOf("r"));
      //   console.log(airline.indexOf("Portugal"));




      //   //slice
      //  console.log(airline.slice(4));
      //  console.log("loveleenjoshi".slice(3,9));

      //  console.log(airline.slice(0,airline.indexOf(" ")));
      //  console.log(airline.slice(airline.lastIndexOf(" ")+1));

      //  //last no.
      //  console.log(airline.slice(-1))
      //  console.log(airline.slice(0,-1))


      // //task
      // const checkMiddleSeat=function(seat){
      //   //B and E are the middle seat
      //   console.log(
      //     seat.slice(-1)==="B" || seat.slice(-1)==="E"? "Middle SeatS" :"Side Seats")
      // }



      // checkMiddleSeat('11B');
      // checkMiddleSeat("21E");
      // checkMiddleSeat("9C");


      // console.log(typeof new String("jonas"));
      // console.log(typeof new String("jonas").slice(-1))
       

//  const airline="Tap Air Portugal";
//  const plane="A320";

//  console.log(airline.toLowerCase());
//  console.log(airline.toUpperCase());

//  //to convert first letter into capital
//   const passenger=function(name){
//   const passlower=name.toLowerCase();
//   passCorrect=passlower[0].toUpperCase() + passlower.slice(1);
//   console.log(passCorrect)
//  }
// passenger("ObtavTCAFCAFAR");
// passenger("LOVELEEN JOSHI");

// //to comapare two values
// const VerifyEmail=function(a,b){
//   const Normalized=b.toLowerCase().trim();
//   if(a===Normalized){
//     console.log(Normalized)
//   }

// }
// VerifyEmail("hello@jonas.in" ,  "    HEllo@jonas.IN   \n")


// //replacing
// const price="299,93 &";
// console.log(price.replace("&" ,"$").replace("," , "."))
// const Boarding="All Passengers should come and all Passwngers should listen to me";
// console.log(Boarding.replace(/Passengers/g ,"passengers"))


// //Boolean
// const Plane="Airbus A320 neo";
// console.log(Plane.includes("320"));
// console.log(Plane.startsWith("Airbus"));
// if(Plane.startsWith("Air") && Plane.endsWith("neo")){
//   console.log("it is of Neo family panle")
// }

// const checkBaggage=function(items){
// const CoorectItem=items.toLowerCase();
// if(CoorectItem.includes("knife") || CoorectItem.includes("gun")){
//   console.log("not allowed")
// }
// else{
//   console.log("allowed")
// }
// }


// checkBaggage("laptop,kniFE ,snacks");
// checkBaggage("laptop,food")
// checkBaggage("Gun")


// const openingHours= {
//      thu: {
//        open: 12,
//        close: 22,
//      },
  
//      fri: {
//        open: 11,
//        close: 23,
//      },
  
//      sat: {
//        open: 0, // Open 24 hours
//        close: 24,
//      },
//    };
//    console.log(openingHours["fri"]["open"]);
//    const restaurant={
//     name:"Francho italiano",
//     price:12000,
//     categories:["veg", "non-veg" ,"organic"],
//     openingHours,
//    }
//    console.log(restaurant)


function describeCountry(country,population,capitalCity){
 console.log(`${country} has ${population} people and its capital city is ${capitalCity}`) 
}
  
const count1=describeCountry("Finland", "6 million" , "Helsinki")
const count2=describeCountry("India" , "33 million" , "Delhi")


function percentageOfWorld1(population){
  const avg=population/7900*100;
  console.log(Math.round(avg)+"%")
}
const percentageOfWorld3=population=>population/7900*100;
console.log(percentageOfWorld3(13000));
const per1=percentageOfWorld1(1441);
const per2=percentageOfWorld1(22888);
const per3=percentageOfWorld1(142332)


const pert1=percentageOfWorld1(1441);
const pert2=percentageOfWorld1(22888);
const pert3=percentageOfWorld1(142332);





// function describePopulation(country,population){
//   const percentage=percentageOfWorld2(population); 
//   console.log( `${country} has ${population} people, which is about ${percentage} of the world'`);
// }

// describePopulation("china",1441)


// console.log(population.length);


// console.log(populations);

// const countryNeighbour=["Nepal" ,"Germany","Sweden", "Bhutan" , "Pakistan" , "Afganistan"];
// countryNeighbour.push("Utopia")
// countryNeighbour.pop();
// for(const neig of countryNeighbour){
//   if(neig !="Germany"){
//     console.log('Probably not a central european country :D')
//   }
//   else{
//     console.log("Probably  central european country :D")
//   }
// }

// console.log(countryNeighbour.indexOf("Sweden"))

// countryNeighbour[2]="Republic Of Sweden";
// console.log(countryNeighbour);

// const myCountry={
//   country:"India",
//   capital:"Delhi",
//   language:"Hindi",
//   population:6,
//   neighbour:["Nepal" ,"Germany","Sweden", "Bhutan" , "Pakistan" , "Afganistan"],
  
//   checkIsland:function(){
//   const isLand=`${(this.neighbour.length>0)?"true":"false"}` ;
//   console.log(isLand)
//   },
  
//   describe:function(){
//     console.log(`${this.country} has ${this.population} million ${this.language}-spaking people,${this.neighbour.length}` )
//       },
// }
// myCountry.describe();
// myCountry.checkIsland();
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbour.length} neighbouring countries and capital called ${myCountry.capital}`);
// console.log(`${myCountry.population+2}`)
// console.log(`${myCountry["population"]-2}`);
// console.log(myCountry.capital);



// for(let i=0;i<=50;i++){
//   console.log(`Voter number ${i}  is currently voting`)
// }

// // const population=[10, 1441, 332, 83];
// // const percentageOfWorld2=function(population){
// //   return population/7900*100;
// // }
// // const populations=[]
// // for(const pop of population){
  
// //    populations.push(percentageOfWorld2(pop));

// // }

//  const listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
//  for(const neigh of listOfNeighbours){
//    for (const i of neigh){
//     console.log(`Neighbour: ${i}`)
//    }
//  }


console.log('A+very+beautiful+string'.split("+"));
console.log("LOVELEEN JOSHI".split(" "));
//split and join 
const [firstName,lastName]="Loveleen joshi".split(" ");
console.log(`first Name=${firstName} lastName=${lastName}`);

const Names=["MR." , firstName, lastName.toUpperCase() ];
console.log(Names.join(" "));
console.log([...Names].join("-->"));


const capitalize=function(name){
  const n=name.split(" ");
  const arr=[];
  for(const c of n){
  //  arr.push(c[0].toUpperCase() + c.slice(1));
   arr.push(c.replace(c[0],c[0].toUpperCase()))
  }
  console.log(arr.join(" "))
}
capitalize("loveleen joshi");
capitalize("jessica an smith devis");

//padding
console.log("Jonas".padStart(25,"+").padEnd(30,"+"))

const message="Go to Bed!";
console.log(message.padStart(25,"+").padEnd(30,"+"))

const masscard=function(number){
const str=number + "";
const last=str.slice(-4);
console.log(last.padStart(str.length,"*"))
}
masscard(98761234);
masscard(1234567890);
masscard(120099112234);

//repeat
console.log("Good Luck! ".repeat(3))
const planeInLine=function(n){
  console.log(`Bad Weather ${n} planes are waiting ${"🛫".repeat(n)}`)
}
planeInLine(4)



const fun=function(msg){
const rows=msg.split(",");

for(const [i,item] of rows.entries()){
  const [val1,val2]=item.toLowerCase().trim().split("_");
  

const output=`${val1}${val2.replace(val2[0],val2[0].toUpperCase())}`;

console.log(`${output.padEnd(20)}${"😘".repeat(i+1)}`);
}
}
fun("underscore_case,  first_name,some_Variable,Calculate_AGE,deayed_Departure ")


const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
console.log(flights.split("+"));
 for(const values of flights.split("+")){
  const [type,from,to,time]=values.split(";");
  // console.log(type)
  const Output=`${type.startsWith("_Delayed") ? "⛔️" : " "} ${type.replaceAll("_", " ")} from ${from.toUpperCase().slice(0,3)} to  ${to.toUpperCase().slice(0,3)} ${time.replace(":", "h")}`.padStart(values.length," ");
  console.log(Output)
 }


 const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];
console.log(books[books.length-1].ISBN["6"])
console.log(books[books.length-1].ISBN[4])
console.log(books[books.length-1].ISBN[9])
console.log(books[books.length-1].ISBN[8])
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.slice(quote.lastIndexOf(" ")+1))
function isContributor(AuthorName){
 const Veify=AuthorName.endsWith("(Contributor)")?"He's a Contributor":"HE's not a Contributor";
 console.log(Veify)
}
isContributor('Julie Sussman (Contributor)')

function normalizeAuthorName(authorName){
const tet=authorName.slice(0,authorName.lastIndexOf(" "));
 const [a,b]=tet.split(" ")
  console.log(`${a.replace(a[0],a[0].toUpperCase())} ${b.replace(b[0],b[0].toUpperCase())}`)

}
normalizeAuthorName("JuliE sussMan (Contributor)")

const bookTitle=books[1]["title"];

console.log(bookTitle.replace("Programs","Software"))

const logBookTheme=function(title){
  const Title=title.toLowerCase();
  if(Title.startsWith("computers"))
  {console.log("This Book is  about computers")}
  else if (Title.includes("algorithms") && Title.includes("structures")){
    console.log("This book is about algorithms and data structures")
  }else if(Title.includes("system") || Title.includes("systems") && !Title.includes("operating")){
    console.log("This book is about some systems, but definitely not about operating systems")
  }
}
const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
logBookCategories(bookCategories);
function logBookCategories(categories){
for(const str of categories.split(";")){
  console.log(str)
}
}

function getKeywordsAsString(books){
 const keywords=[];
 for(const val of books.keywords){
  keywords.push(val);
  
 }
 const unique=[...new Set(keywords)]
 console.log(keywords.join(";"));
}
getKeywordsAsString(...books);


const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
logBookChapters(bookChapters);
function logBookChapters(val){
  for(const [i,j] of val){
    console.log(`${i.padEnd(20,"___")}${j}`)
  }
}