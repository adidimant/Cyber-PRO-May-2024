/*Using map & join - create an html string for the html body - without using forEach.
You should get the same results.*/
//1

const listarr = ['item1', 'item2', 'item3', 'item4'];

let htmlBody1 = listarr.map(function(item) {
    return `<div><li>${item}</li></div><br/>`;
}).join('');

//document.body.innerHTML = "<ul> " +htmlBody1+ "</ul>";

  
/*2) write a function that gets an array of string numbers, 
and returns an array of this numbers as numbers (using map)*/
const arr =['1','222', '322', '422','522'];
let toNum = arr.map(function(num){
    return parseInt(num);
});
console.log(toNum);
/*3) write a function that gets an array of boolean values,
 and returns an array of 1/0. if the item in the original array was true -
  then the same place in the result array should be 1, otherwise - 0.*/

  const arrBolean =[true,false,true,false];
  let toOneZero =arrBolean.map(function(item){
    if(item== true){
        return 1;
    }
    return 0;
  });
  console.log(toOneZero);


/*4) write a function that gets a string, and for every character in the string 
- console.log it.
you should do it with arr.forEach function (on array!)*/


function getSt (str){
    const charactersArray=str.split("");

    charactersArray.forEach(function(character) {
        console.log(character);
      });
  return;

};
console.log(getSt("esraa"));


/*5) write a function that gets an array of passwords,
 and returns an object which every key is the index,
  and every value is the password. you should use forEach function.*/
 
  

  function arryToObj(arry) {
      let obj = {}; 
      arry.forEach((arr, index) => {
          obj[index] = arr; 
      });
      return obj;
    }
    let arry = ["12345678", "admin", "password", "Aa123456", "user"];
  console.log(arryToObj(arry));


  /*6) given an array of names (strings), filter all the short names 
  (short names have maximum 5 letters)*/
  const string =['ab','abc','abcd','abcde','abcdef','abcdefg'];
  const shortS = string.filter((leter)=> {//leter.length<=5
    if(leter.length<=5){
        return true;
    }
    return false;
  });
  console.log(shortS);


/*7) given an array of anything - filter only the numbers*/
const mix =[ 1,'esraa',23,undefined,'john',17, true,22];
const onlyNum =mix.filter((num)=> {
    if(  typeof num === "number"){
        return true;
    }
    return false;

});
console.log(onlyNum);


const onlystring =mix.filter((str)=> typeof str === "string" );
console.log(onlystring);

/*8) given an array of numbers - filter only the even numbers (even number divide by two) */

 const mixNum =[0,1,2,3,4,5,6,7,8,9,20,23,15];
 const onlyEven=mixNum.filter((num)=> num%2==0 );
 console.log(onlyEven);



 