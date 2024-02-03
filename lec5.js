function myFunction(msg){
    console.log(msg *10);
    console.log("welcome");
};

myFunction("123");

//example 1 count vowels
function vowelsCounts(str){
    let count=0;
for(let char of str){
    if (char==="a" || char==="e" || char==="i" ||char==="o" ||char==="u")
    {
        count++;
    }       
}
    console.log(count);
}
vowelsCounts("krina");

//arrow function

 vowels=(str)=>{
    let count=0;
for(let char of str){
    if (char==="a" || char==="e" || char==="i" ||char==="o" ||char==="u")
    {
        count++;
    }       
}
    console.log(count);
}
vowels("patelkrina");


// example 2 squre using the foreach
let arr = [1,2,3,4,5];
arr.forEach(function myfun (val){
    console.log(val**2); //val*val
})

//array methods
/*map -> to print new array
    filter -> cond true than give value
    reduce -> privious and current base change value
*/

//example  3 filter 90+ marks std

mark =[90,99,75,33,98,89];
let output = mark.filter((val) =>{
    return val>90;
});
console.log(output);

//example 4 
let n = prompt("enter the number");
let array =[];
for (i=1;i<=n;i++){
    array[i-1]=i;
}
console.log(array);

let sum = array.reduce((pre,curr) =>{
    return pre+curr;
});
console.log(sum);

let mul =array.reduce((pre,curr) =>{
    return pre*curr;
});
console.log(mul);
