/*1) Write your own implementation for padStart function on arrays - the function should get: 
1) an array, 2) what's the maximum size of the array should be, 
3) which value to pad - the function returns the array with a padding at the beginning of what you wrote.
*/


function padStart(arry,maxarry,padstarValue){
    let padding  = maxarry-arry.length;
    let paddingarry = new Array(padding).fill(padstarValue);
    return paddingarry.concat(arry);
 
}
console.log(padStart([1,2,3],4,'full')); 
console.log("^_____^");





/*2) write a function that finds the second largest element in the array.
hint: use the sort() function*/

function secLargElement(arry){
    let arrySave = arry.sort(  function (a,b) {return b-a })//sort( (a, b) => a - b );
    console.log(arrySave);
   return  arrySave [1] ;
}
console.log(secLargElement([10,5,20,8]));
console.log("^_____^");






/*3) write a function that gets one array and splits it to a half,
 the function should return a new array that the first item is halfarray,
  the second item is the another half array. example: splitHalf([1,2,3,4]) => [[1,2],[3,4]]*/



  function cutArry(arr){
    let middle = Math.floor(arr.length/2);

    let halfone=arr.slice(0,middle);
    let hafetow=arr.slice(middle);
    console.log(hafetow);
    console.log(halfone);
    return [hafetow,halfone] ;

  }
  console.log(cutArry([1,2,3,4,5,6,7,8]));
  console.log("^_____^");





 /* 4) write a function that gets two number arrays and check if the arrays are equal.
  hint: you can use JSON.stringify()*/

function checkIfEqual(arry1,arry2){
    let jsonArr1 = JSON.stringify(arry1);
    let jsonArr2 = JSON.stringify(arry2);
    
    if ( jsonArr1 === jsonArr2 ){
        return 'equal';
    }
    return 'not equal';

}
console.log(checkIfEqual([1,2,3,4,5],[1,2,3,2,5]));
console.log("^_____^");






/*5) write a function that gets an array of numbers and check if all the items are unique (no duplicates in the arrays)
 - the function should return a boolean value - true/false*/

 function notEqual(arry){

   const uniqueSet=new Set(arry);
   console.log(uniqueSet);

   if(arry.length === uniqueSet.size){
    return true;
   }
   return false;
   // return arry.length === uniqueSet.size;
 }
 console.log(notEqual([1,2,3,4,9]));
 console.log("^_____^");




 /*6) write a function called "removeAt" - that gets an array, gets an index to remove - and returned a new array 
 - but without the item that needed to remove. 
 NOTE - you should not change the original array! using just splice on the original array will change it!*/
  
 function removeAt(arr, indexToRemove) {

    const newArr = arr.slice(0, indexToRemove).concat(arr.slice(indexToRemove + 1));
    return newArr;
  }
  console.log(removeAt([1,2,3,4,5],3));
  console.log("^_____^");






  /*7) Write a function that accepts two arrays of numbers,
   the arrays has both the length 5, the function should return an array that is the sum of the two arrays*/
  
   function sumArry(arr1,arr2){
    if(arr1.length ===5 && arr2.length===5){


        return arr1.map((num, index) => num + arr2[index]);
    }
    return 'The arrays must be of length 5';

   }
   console.log(sumArry([1,2,3,4,5],[6,7,8,9,10]));