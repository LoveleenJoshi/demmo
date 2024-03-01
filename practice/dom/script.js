'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
  // btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn=>btn.addEventListener("click",openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//scrolling of Page
const btnScrollTo=document.querySelector(".btn--scroll-to");
const section1=document.getElementById("section--1");
btnScrollTo.addEventListener("click",function(e){
  //get position about element
  const s1Cords=section1.getBoundingClientRect();
  console.log(s1Cords);
  console.log(e.target.getBoundingClientRect());

  //get info about position of current scrolling
  console.log("position of viewport acc to current scroll :", window.pageXOffset,window.pageYOffset);
  // height and width of viewport
  // console.log("h/w of viewposrt",document.documentElement.clientHeight,document.documentElement.clientWidth);
  //scrolling
  // window.scrollTo(s1Cords.left+window.pageXOffset,s1Cords.top+window.pageYOffset)

  window.scrollTo({
    left:s1Cords.left+window.pageXOffset,
     top:s1Cords.top+window.pageYOffset,
    behaviour:"smooth"
  })

  // section1.scrollIntoView({behaviour:"smooth"})
})

//rgb(255,255,255)
const randomInt=(max,min)=>Math.floor(Math.random()*(max-min)+1)+min;
const randomColor=()=>`rgb(${randomInt(255,0)},${randomInt(255,0)},${randomInt(255,0)})`;
console.log(randomColor());
document.querySelector(".nav__link").addEventListener("click",function(e){
  this.style.backgroundColor=randomColor();
  console.log("LINK",e.target,e.currentTarget)
  //stop propagation
  e.stopPropagation();
},true)
document.querySelector(".nav__links").addEventListener("click",function(e){
  this.style.backgroundColor=randomColor();
  console.log("CONTAINER",e.target,e.currentTarget)
})
document.querySelector(".nav").addEventListener("click",function(e){
  this.style.backgroundColor=randomColor();
  console.log("NAV",e.target,e.currentTarget)
},true)















//Lectures
//selecting
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const allSections=document.querySelectorAll(".section");
// console.log(allSections);
// const allButtons=document.getElementsByTagName("button");//htmlCollection
// console.log(allButtons);
// console.log(document.getElementsByClassName("btn"))//htmlCollection

//creating
//insertAdjacentHTML
// const message=document.createElement("div");
// message.classList.add("cookie-message");
// message.textContent="we use cookied for improved functionality and analytics";
// message.innerHTML="we use cookied for improved functionality and analytics. <div class='btn btn-close-cookie'>Got it</div>";
//  document.querySelector(".header").prepend(message);
// document.querySelector(".header").append(message.cloneNode(true));
// document.querySelector(".header").append(message);

// document.querySelector("header").before(message);
// btn-close-cookie.addEventListener()
//  document.querySelector(".btn-close-cookie").addEventListener("click",function(){
//   // message.remove()
//   message.parentElement.remove(message)
//  })
//style
// message.style.backgroundColor="#34343d";
// message.style.width="120%";
// console.log(message.style.width);
// console.log(message.style.height)
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height)
//  message.style.height=Number.parseFloat(getComputedStyle(message).height+ 80)+ "px";
// message.style.height =Number.parseInt((getComputedStyle(message)).height,10) + 30 + 'px';


  // console.log(Number.parseInt((getComputedStyle(message)).height,10) + 58 + 'px');

    // --color-primary: #5ec576;
    // document.documentElement.style.setProperty("--color-primary","red")
    // message.style.setProperty("backgroundColor", "white");

    //attribute
    // const logo=document.querySelector(".nav__logo");console.log(logo.alt);
    // console.log(logo.src);


    //for non-standard attribute
    // console.log(logo.designer)//undefined;
    // console.log(logo.getAttribute("designer"));

    //for setting attribute
    // logo.alt="Bankist Logo Minimalist";

    // logo.setAttribute("company","bankist");

    // console.log(logo.src);
    // console.log(logo.getAttribute("src"));

    // const link=document.querySelector(".nav__link--btn");
    // console.log(link.href);
    // console.log(link.getAttribute("href"));

    // console.log(link.dataset.versionNumber);


    //class
    // logo.classList.add("");
    // logo.classList.remove("");
    // logo.classList.contains("");
    // logo.classList.toggle("");
    // logo.className="";

    //functions calling other functions
    // const oneword=(str)=>str.replace(/ /g,"").toLowerCase();
    // const convertStr=(str)=>{
    //   const [first,...others]=str.split(" ");
    //   return first.toUpperCase()+` ${ others.join(" ")}`  }
    // const transformatter=(Str,fun)=>{
    //   console.log(`${Str}`);
    //   console.log(fun(Str));
    //   console.log(fun.name)

    // }
    // transformatter("this is a sample title",convertStr)
    // //function returning other functions
    // function greetings(title){
    //   return function name(name){
    //     return `${title} ${name}`
    //   }
    // }
    // const greetings=title=>name=>`${title} ${name}`
    // const greetingsFull=greetings("hii");
    // console.log(greetingsFull("sita"));
    // console.log(greetings("hello")("ram"))
//addEventListener
const H1=document.querySelector("h1");
const alertmsg=function(e){
  alert("addEventListener: hey this is a great heading")
 
};
H1.addEventListener("mouseenter",alertmsg)
// H1.onmouseenter=function(e){
  // alert("onMouseenter: hey this is a great heading")
// }
setTimeout(()=> H1.removeEventListener("mouseenter",alertmsg),1000)


// //creating new element
// const newEl=document.createElement("div");
// newEl.classList.add("cookie-message");
// newEl.innerHTML="i am here <button class='btn btn-close'>Got it</button>";
// document.querySelector("header").append(newEl.cloneNode(true));
// document.querySelector("header").prepend(newEl);
// document.querySelector(".btn-close").addEventListener("click",function(){
//   newEl.remove();
//   // newEl.parentNode.removeChild(newEl)
// this.parentElement.remove()
// })
// const newEl = document.createElement("div");
// newEl.classList.add("cookie-message");
// newEl.innerHTML = "i am here <button class='btn btn-close'>Got it</button>";

// document.querySelector("header").prepend(newEl);
// // Append the cloned element
// document.querySelector("header").append(newEl.cloneNode(true));

// // Prepend the original element

// document.querySelector(".btn-close").addEventListener("click", function() {
//   // Remove the clicked element's parent, which is the whole cookie message div
//   newEl.remove()
//   this.parentNode.remove();
// });
const newEl = document.createElement("div");
newEl.classList.add("cookie-message");
newEl.innerHTML = "i am here <button class='btn btn-close'>Got it</button>";

// Append the cloned element
const clonedEl = newEl.cloneNode(true);
document.querySelector("header").append(clonedEl);

// Prepend the original element
document.querySelector("header").prepend(newEl);

document.querySelector(".btn-close").addEventListener("click", function() {
  // Remove the clicked element's parent, which is the whole cookie message div
  this.parentNode.remove();
});
