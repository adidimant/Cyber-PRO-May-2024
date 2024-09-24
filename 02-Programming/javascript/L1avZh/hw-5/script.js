// 1) Construct your full name with a short sentence on yourself using at least 6 different methods on strings.

const firstName = "Liav";
const lastName = " Zecharya";

const fullName1 = firstName.concat("", lastName);
console.log(fullName1);

const fullName2 = firstName.padEnd(13, lastName);
console.log(fullName2);

const fullName3 = "INT" + firstName + lastName + "INT";
const fullName3Fix = fullName3.slice(3, 16);
console.log(fullName3Fix);

const fullname4 = "Test Zecharya";
const fullname4Fix = fullname4.replace("Test", firstName);
console.log(fullname4Fix);

const fullname5 = "Liav Zecharya";
const fullname5Fix = fullname5.split(" ");
console.log(fullname5Fix);

const fullname6 = "TEST";
const fullname6Fix = fullname6.replaceAll("TEST", "Liav Zecharya");
console.log(fullname6Fix);

console.log("---------------------------------");

// 2) Take a article from some articel in ynet, then create an array automatically (using split), that contains all the sentences splitted by ".".

const ynetArticale =
  "רסיסים נפלו באזור נצרת נזק נגרם לבית החולים בעיר ובכפר גדעון שבעמק יזרעאל התנפצו חלונות. מספר בני אדם נחבלו בדרכם למרחב המוגן ירי גם לאזור נהריה יותר מ-200 שיגורים מאתמול בבוקר, ולראשונה מטחים לשומרון ולחיפה  צהל תקף בביירות. דיווחים: עלי כרכי מספר 3 בחיזבאללה, נפצע. ארגון הטרור הודיע:  הוא חי והועבר למקום בטוח  יותר מ-1,600 יעדים הותקפו בלבנון";

const arrayOfYnetArticale = ynetArticale.split(" ");
console.log(arrayOfYnetArticale);

console.log("---------------------------------");

// 3) activate event listener of "input" on an input element (on some simple website you build/you already built), take the current value inside the input, cut the first 4 letters of the value, console.log them and push them into an array.

// 4) Activate an event listener of "click" on a submit button, then create a PUT request to "http://my-website.com", contains in the body the last 4 items that you pushed to the array in the last question. note that you should cut the last 4 items from the array every time you sends the put request.
// your request should add an http header with your personal nickname like this: 'xx-nickname': 'your-nickname'
// it is recommended to use at the beginning of the function (passed to the event listener) the: e.preventDefault();

const input = document.getElementById("my-input");
const btn = document.getElementById("my-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  const newValue = inputValue.slice(0, 4);
  const newValueArray = newValue.split("");
  console.log(newValueArray);

  fetch("https://my-website.com", {
    method: "PUT",
    headers: {
      "xx-nickname": "L1avZh",
    },
    body: JSON.stringify(newValueArray),
  });
});
