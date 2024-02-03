let id =document.getElementById("1");
console.log(id);

let hello = document.getElementsByClassName("head");
console.log(hello);

let query=document.querySelector("h1");
console.log(query);

//example 1
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText= h2.innerText + "\tfrom apna collage students";

//example 2
let box = document.querySelectorAll(".box");
let ind =1;
for(div of box){
   div.innerText="new unique value\t"+ ind;
   ind++;
}