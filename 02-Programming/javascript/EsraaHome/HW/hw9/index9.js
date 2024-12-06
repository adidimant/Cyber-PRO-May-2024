/*1) Choose  from previous HW (for loops) - and implement their solution using a while loop.*/

//1
const arr =[10,10,10,10,10];
let x = 0;
let i =0;
while(i<arr.length){
    x += arr[i]
    i++
}
console.log(x);

//2
const arr2=[1,2,3,4,5,6,7,8,9];
let even = 0
let y =0;
while(y<arr2.length){
    if(arr2[y] %2 === 0){
        even ++;
    }
    y++
}
console.log(even);
  

//3
const arr3 =[7,2,10,4,6];
let max =0
let z=0;
while(z<arr3.length){
    if(arr3 [z]> max){
        max= arr[z];
    }
    z++
}
console.log(max);


//4
const arr4 =[1,2,3,4,5];
let reverseArr=[];
let j =arr.length-1;
while(j>=0){
    reverseArr.push(arr4[j]);
    j--
}

console.log(reverseArr);

console.log(" first 4 questions 👆👆👆 ");







//2) Math.random(); // creates a random string in the range of 0 to 1
//Create a function that return a number in the range of 0 to 100
              
console.log( Math.floor(Math.random()*101));
console.log(" number in the range of 0 to 100👆👆👆 ");

///3) Math.random(); // creates a random string in the range of 0 to 1
//Create a lottery function, that returns a number in the range of 0 to 6000000

console.log(Math.floor(Math.random()*6000001))
console.log(" number in the range of 0 to 6000000👆👆👆 ");


//4) Write a function that accepts a number n, randomize number between 0 to 100, and return how much you can divide the random number with n.
//note - please use what you created in question #2 as well
//the function also should console.log the random number that was chosen

function howManyTimesDivisible(n){
   let count =0;
   let x=Math.floor(Math.random()*101);
   console.log(x);

   
    while(x>=n){
        x = Math.floor(x/n);
        count++
    }
    return count;
}
console.log (howManyTimesDivisible(2));