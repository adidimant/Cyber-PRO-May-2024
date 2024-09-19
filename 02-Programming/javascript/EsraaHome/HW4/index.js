

  
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