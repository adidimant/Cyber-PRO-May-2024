/*1) Sum of Numbers in an Array:
Write a for loop to calculate the sum of all numbers in the array [2, 5, 8, 3].
Expected Output: 18*/

const arr =[10,10,10,10,10];
let x = 0;
for( let i=0 ;i<arr.length;i++){
    x += arr[i]
}
console.log(x);

/*2) Counting Even Numbers:
Write a for loop that counts the number of even numbers in the array [1, 4, 6, 9, 10].
Expected Output: 3*/

const arr2=[1,2,3,4,5,6,7,8,9];
let even = 0
for(let i=0;i<arr2.length;i++){
    if(arr2[i] %2 === 0){
        even ++;
    }
}
console.log(even);
  

/*3) Finding the Maximum Value:
Use a for loop to find the largest number in the array [7, 2, 10, 4, 6].
Expected Output: 10*/
const arr3 =[7,2,10,4,6];
let max =0
for(let i=0;i<arr3.length;i++){
    if(arr3 [i]> max){
        max= arr[i];
    }
}
console.log(max);


/*4) Reverse an Array:
Write a for loop that reverses the elements of the array [1, 2, 3, 4, 5] and stores it in a new array.
Expected Output: [5, 4, 3, 2, 1]*/

const arr4 =[1,2,3,4,5];
let reverseArr=[];
for(let i =arr.length-1;i>=0;i--){
    reverseArr.push(arr4[i]);
}
console.log(reverseArr);

/*5) Sum of Odd Numbers in a Range:
Use a for loop to find the sum of all odd numbers between 1 and 10.
Expected Output: 25*/
let odd =0;
for(let i=0;i<=10;i++){
    if(i%2 === 1){
        odd += i;
     
    }
}
console.log(odd);

/*6) Multiplication Table:
Write a for loop to generate a multiplication table for the number 5 (from 1 to 10).
Expected Output:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50 */

for(let i=0;i<=10;i++){
  console.log("5 x " + i+ "  =  " + 5*i);
}



/**
7) Count Characters in a String - this should be a function that accepts the string & the char to count as a second param:
Use a for loop to count the number of occurrences of the letter "a" in the string "javascript is awesome".
Expected Output: 3 */

const str = 'javascript is awesome';
let countstr =0
for(let i=0;i<str.length;i++){
    if(str.charAt(i)==="a"){
        countstr ++
    }
}
console.log(countstr);





 /*
 8) Concatenate Array Elements:
Write a for loop to concatenate all elements in the array ["Hello", " ", "world", "!"] into a single string.
Expected Output: "Hello world!" */

const helloWArr =["Hello", " ", "world", "!"] ;
let helloWArrstr=""
for(let i=0;i<helloWArr.length;i++){
    helloWArrstr += helloWArr[i];
}
console.log(helloWArrstr);