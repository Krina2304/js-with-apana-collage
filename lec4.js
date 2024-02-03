//array
let marks = [10, 20, 30, 40, 50, 60, 70];
for (let marks = 0; marks < marks.length; marks++);
    {
        console.log(marks);
    }

//example 1  avg of std marks 
let std=[85,97,44,37,76,60];
let sum=0;
avg=0;
for(i=0;i<std.length;i++){
    sum = sum+std[i];
    avg=sum/std.length;
}
console.log(avg);

//example 2 offer of items
 let prize=[250,645,300,900,50];
 console.log(prize);
  for(i=0;i<prize.length;i++){
    let offer = prize[i]/10;    // 10% offer
    prize[i]-=offer;
 }
 console.log(prize);

 //array method
 let price=[250,645,300,900,50];
 price.push(90); //push
 console.log(price);    
 price.pop();  //pop
 console.log(price);

 let mark=[60,50,70];
console.log(price.concat(mark)); //concat
price.unshift(50); //unshift-add starting element of array
console.log(price);
mark.shift(); //shift - delete starting element of array
console.log(mark);


let arr=[1,2,3,4,5,6,7,8,9];

console.log(arr.slice(1,3));
arr.splice(1,3,101,102);
console.log(arr);

//example 3
let companies=["blomberg","microsoft","uber","google","IBM","netflix"];
companies.shift();
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
companies.push("amazon");
console.log(companies);



