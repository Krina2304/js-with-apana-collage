let h1 =document.querySelector("h1");
console.log(h1);
let h2 =document.querySelector("h2");
console.log(h2);

let id = h1.getAttribute("id");
console.log(id);
let name = h1.getAttribute("name");
console.log(name);
let name1 = h1.setAttribute("name","jk");
console.log(name1);

//style using js

h1.style.color="red";

//create tag threw js

let button =document.createElement("button");
button.innerText="submit";
console.log(button);

let btn=document.querySelector("div");
btn.append(button); //inside->end
btn.prepend(button); //inside->start
btn.before(button); //outside->start
btn.after(button);//outside->after

//example 1

let btn2 =document.createElement("button");
btn2.innerText="click me!";
console.log(btn2);
let bt=document.querySelector("body");
bt.prepend(btn2); //inside->start
btn2.style.background="red";
btn2.style.color="white";

//example 2
let para = document.querySelector("p");
let add=para.classList.add("newclass");
console.log(add);



