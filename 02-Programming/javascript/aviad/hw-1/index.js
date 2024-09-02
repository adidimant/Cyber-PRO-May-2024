
/**
 *  *  const  = משתנה קבוע
 * let = משתנה לא קבוע
 * פונקציה שמשנה את הצבע של הרקע של הטופס ברגע שולחצים על כפתור מסויים.
 * 
 * איך לכתוב פונקציה 
 * 1.מה אני צריך לעשות? (מה הבעיה שאני מנסה לפתור?)
 * 2ץ הכרזה על משתנים
 * 3. כתיבת הקוד.
 * 4. בדיקה
 * 5. תיקון בעיות
 * 6. שיפור קוד.
 */

/*Change-Color*/

/* 1) create a website with paragraph and a button
when clicking on the button - the color of text in the paragraph is changed to red/navy*/


const pColorChange = document.getElementById("pColorChange");

const pColorChangeButton = document.getElementById("changeColorButton");


function changeColor(){
    if(pColorChange.style.color === "navy"){
        pColorChange.style.color = "red";
    }else{
        pColorChange.style.color = "navy";
    }
}

pColorChangeButton.addEventListener("click", () => {
    changeColor();
});


/* 2) create a website with a form, and a button (with the text "Auto Fill Form!")
the form needs to be empty
after clicking the button - the form inputs will be auto-filled with your details
 */

/*AutoFill */


const autoFillButton = document.getElementById("autoFillButton");

function autoFill(){
    document.getElementById("fName").value = "Aviad"
    document.getElementById("lName").value = "Megirov"
    document.getElementById("email").value = "aviad@gmail.com"
    document.getElementById("address").value = "Migdal Emek"
}

autoFillButton.addEventListener("click", () => {
    autoFill();
});



/* 3) create a website with a background color (not white)
create some input for the user
create a function in javascript that changes the background color
by any input the user writes (keydown press) - the function is triggered
when the user release the key in the input (keyup) - the background color is changed back */


/*Change-Background-Color*/

const background = document.getElementById("form");

function changeBackgroundColor(color){
    background.style.backgroundColor = color;
}


document.addEventListener("keydown", (button) => {

    if(button.key === "v"){
        let color = prompt("what color you want to change?")
        changeBackgroundColor(color);
    }

});