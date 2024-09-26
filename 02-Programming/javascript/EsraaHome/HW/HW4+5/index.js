

  
// 1. Convert the text to uppercase while typing in the username field
  document.getElementById("username").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
  });


 

// 2. Change the email field background when focused
  document.getElementById("email").addEventListener("focus", function() {
    this.style.background = "lightblue";
   });


// 3. Change the font of the signup label when the mouse button is released
  document.getElementById("label-singup").addEventListener("mouseup",function(){

    this.style.fontFamily = "Comic Sans MS, cursive";
  });


// 4. Change the font of the login label when the mouse button is released
  document.getElementById("label-login").addEventListener("mouseup",function(){

    this.style.fontFamily = "Comic Sans MS, cursive";
  });

// 5. Add an error class to the email login field if it's empty after losing focus
  document.getElementById("email-login").addEventListener("blur", function() {
    this.style.backgroundColor = ""; 
    if(this.value === "") {
        this.classList.add("error"); 
    } else {
        this.classList.remove("error");
    }
});

// 6. Add an error class to the password login field if it's empty after losing focus
document.getElementById("password-login").addEventListener("blur", function() {
    this.style.backgroundColor = ""; 
    if(this.value === "") {
        this.classList.add("error"); 
        this.classList.remove("error");
    }
});


// 7. Show an alert if the password length is valid when changed
document.getElementById("password").addEventListener("change", function() {
    if(this.value.length >= 5) {
        alert("Password is valid!");
    } else {
        alert("Password must be at least 5 characters!");
    }
});

// 8. Add a highlight class when the mouse enters the username field
document.getElementById("username").addEventListener("mouseenter", function() {
    this.classList.add("highlight"); 
});
console.log("");
console.log("");

const mainClass = document.getElementById("singup-but");

const randomColor=()=>{
  const hexCode='123456789ABCDEF'
  let colorhash="#"
  for(let i=0;i<6;i++){
    colorhash += hexCode[Math.floor(Math.random()*16)]
  }
  return colorhash;
}
setInterval(()=>{
mainClass.style.background=randomColor()

},1000)


//HW 5


//1
let firstName = "Esraa";
let middleName = "Ali";
let lastName = "Ahmed";
let fullName = firstName + " " + middleName + " " + lastName; // Esraa Ali Ahmed


let sentence = "Hi, I'm "+ fullName +   "  " +"and I love cybersecurity!";
console.log(sentence);//Hi, I'm Esraa Ali Ahmed, and I love  cybersecurity!

console.log("Uppercase middle name: " + middleName.toUpperCase()); // ALI

console.log("Shortened last name: "+ lastName.slice(0, 3)); // Ahm


console.log( sentence.replace("cybersecurity", "CYBERSECURITY"));//Hi, I'm Esraa Ali Ahmed, and I love CYBERSECURITY!

console.log("My full name has"+ "  " + fullName.length+ "  " + "characters");//My full name has 15 characters.




//2

const article = "האיש עם \"המגאפון הגדול בעולם\" בשירות המועמד לנשיאות טראמפ. עם הון של 252 מיליארד דולר, בעלות על רשת X (טוויטר) וכמעט 200 מיליון עוקבים — אילון מאסק מסומן כאחת הסכנות הגדולות בעולם של דיסאינפורמציה ושקרים. באמצעות תיאוריות קונספירציה וציוצים בעד דונלד טראמפ, מאסק שואף להיות אחד מהאנשים המשפיעים ביותר בעולם. בברזיל ובאוסטרליה כבר שוקלים להגביל את כוחו, אבל אם טראמפ ייבחר, מאסק צפוי לקבל תפקיד בכיר בבית הלבן.";
const sentencesArray = article.split('.');
console.log(sentencesArray);






const arry=[];
//3
document.getElementById("username").addEventListener("input",function(){
const inputValue=this.value;

const firstFourLetters=inputValue.slice(0,4);
console.log("First four letters"+ firstFourLetters);

//const arry=[];
arry.push(firstFourLetters);
console.log(arry);

});


const input = document.getElementById("username");
const but= document.getElementById("singup-but");

const inputValue = input.value;
const firstFourLetters2=inputValue.slice(0,4);



but.addEventListener("click" , async function(e){
 e.preventDefault();
 const sentData = arry.slice(arry.length-4, arry.length);


 await fetch('https://my-website.com', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'xx-nickname': 'esraa', 
  },
  body: JSON.stringify(sentData)
});

window.location.href = 'https://www.bankhapoalim.co.il/';
})




