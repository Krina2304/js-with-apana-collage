//for loop
for(let i=1;i<=10;i++){
    console.log("krina patel");
}

// sum of first n number
num = 10;
let sum=0;
for(let i=1;i<=num;i++) {
sum=sum+i;
}
console.log(sum);

//while loop
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

//do.....while loop
let a=1;
do{
    console.log(a);
    a++;
}while(a<=5);

//for .....of loop
let st= "krinapatel";
let size=0;
for  (let i of st){
    console.log(i);
    size++;
}
console.log("size of str",size);

// for....in loop

const profile={
    firstName:"Krina",
    lastName:"Patel",
    gender:"Female",
    country:"india",
    skills:["html","css","js"],
}
for(let i in profile){
    console.log(i,profile[i]);
}

//example 1   even number sum 1 to 100
sum=0;
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i)
        sum=sum+i;
    }
}
console.log(sum);

//example 2   guessing number game
let gamenum=25;
let usernum=prompt("guess the number");
while(usernum != gamenum){
   usernum = prompt("this is not write number");
}
console.log("this is write number");

//strings methods
let str="Hello Krina Patel";
let str1="\tsay somthings";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(2,6));
console.log(str.trim());
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('e'));
console.log(str.concat(str1));
console.log(str.replace("Krina","simran"));
console.log(str.charAt(6));


//example 3

str=prompt("enter your full name");
let username=console.log("@",str,str.length);