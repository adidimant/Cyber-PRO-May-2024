  
/*1) this is your object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

create a copy for person to a new variable */
 
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const x = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; ;
//edite
x.eyeColor="green";
x.age=40;
//add
x.country="israil";
x.phoneNumber = "123-456-7890";
x.email = "john.doe@example.com";

console.log( "the oreginal person:",person);
console.log("Copied person object: " ,x);

console.log("***************************************")


/*2) create a `utils` object, the object keys will be the name of the functions from last hw
the value of these keys will be the actual functions.
then use this utils object in order to use the functions

include in the object the function that converts celsius to farenigeht temprature and other function that does the opposite
 */


 function AlwaysT() {
    return true;
  }
  
  function TrueOr(x) {
    if (typeof x === "boolean") {
      return !x;
    }
    return null;
  }
  
  function CheckToF(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    }
    return null;
  }
  
  function CheckString(s1, s2) {
    if (typeof s1 === "string" && typeof s2 === "string") {
      return  `<${s1}><${s2}><${s1}>`;
    }
    return null;
  }
  
  //function getType(value) {
    //if(Array.isArray(value)) {
   //   return 'array';
   // }
   // if (value === null) {
   //   return 'null';
   // }
   // return typeof value;
  //}
  
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
 
 const utils = {
    AlwaysT: AlwaysT,
    TrueOr: TrueOr,
    CheckToF: CheckToF,
    CheckString: CheckString,
   // getType: getType,
    celsiusToFahrenheit: celsiusToFahrenheit,
    fahrenheitToCelsius: fahrenheitToCelsius
  };
  

  console.log(utils.AlwaysT()); // true
 console.log(utils.TrueOr(true)); // false
 console.log(utils.CheckToF(5, 10)); // 15
 console.log(utils.CheckString("esraa", "home")); // <esraa><home><esraa>
 //console.log(utils.getType([1, 2, 3])); // array
 console.log(utils.celsiusToFahrenheit(0)); // 32
 console.log(utils.fahrenheitToCelsius(32)); // 0





console.log("***************************************")
/*3) create a function that gets a url as a parameter
checks if the hostname of the url in the website you stay now is the same hostname of the url
if yes - does nothing
if not - redirect to the new url */


function checkAndRedirect(url) {
    const newUrl = new URL(url);
    if(newUrl.host!==currentHostname)
       {
           window.location.href = url;
       }

   
}  
   

/*4) create function that gets two parameters:
 - object with any keys you would like (lets say at least 4 keys)
 - array of strings, that represents the required keys to be in the object
 the function should check if the object contains all the keys in the array
 the function return true/false
 */



function chechN(ObjCheck,Array)
{
    if(Array.length>4)
        {
            return false;
        }

        if (Array.length >= 1 && !ObjCheck.hasOwnProperty(Array[0])) {
            return false;
        }
        if (Array.length >= 2 && !ObjCheck.hasOwnProperty(Array[1])) {
            return false;
        }
        if (Array.length >= 3 && !ObjCheck.hasOwnProperty(Array[2])) {
            return false;
        }
        if (Array.length >= 4 && !ObjCheck.hasOwnProperty(Array[3])) {
            return false;
        }

        return true;

}

const ObjCheck ={ 
    key1: 'value1',
     key2: 'value2', 
     key3: 'value3',
     key4: 'value4' 
}

let Array =["key1" ,"key2","key3","key4" ];
console.log(chechN(ObjCheck,Array));