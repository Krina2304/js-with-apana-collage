//arithmetic opration
let a=2;
let b=5;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);
a++;
b--;
console.log("a++=",a++);
console.log("b--=",b--);

//assignment operators
a=2;
b=4;
console.log("a+=",a+=1);
console.log("b-=",b-=1);
console.log("a*=",a*=2);
console.log("a%=",a%=2);
console.log("a**=",a**=2);

//comparision operators
a=5;
b=2;
console.log("a==b",a==b);
console.log("a!=b",a!=b);
console.log("a===b",a===b);
console.log("a!==",a!==b);
console.log("a<b",a<b);
console.log("a<=b",a<=b);
console.log("a>b",a>b);
console.log("a>=b",a>=b);

//logical operators
a=4;
b=3;
console.log("&&",a>b && a==4);
console.log("||",a>b||a<b);
console.log("!",!(a>b));

//conditional statements

//if-else
let age=17;
if(age>18){
    console.log("you can vot");
}
else{
    console.log("you cannot vot");
}

//even or odd
let num=6;
if(num%2==0){
    console.log(num,"this is even")
}
else{
    console.log(num ,"this is odd")
}

//if-else-if

let ag=44;
if(ag<=20){
    console.log("junior");
}
else if( ag>20 && ag<60){
    console.log("youth");
}
else if(ag>=60){
console.log("senior");
}
else{
    console.log("this is not human")
}

//ternary operators

let ag2=17;
result=ag2>18 ? "youth" : "tenagor";
console.log(result);

//example 1

num=prompt("enter a number");
if(num%5==0){
    console.log(num,"is multiple of 5")
}
else{
    console.log(num,"is not multiple of 5")
}

//example 2
num=prompt("enter the persentage");
if(num>=90 && num<=100){
    console.log("A");
}
else if(num>=70 && num<=89){
    console.log("B");
}
else if(num>=60 && num<=69){
    console.log("C");
}
else if(num>=50 && num<=59){
    console.log("D");
}
else if(num>=0 && num<=49){
    console.log("F")
}
