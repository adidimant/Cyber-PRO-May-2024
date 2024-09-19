

  

  document.getElementById("username").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
  });


 


  document.getElementById("email").addEventListener("focus", function() {
    this.style.background = "lightblue";
   });



  document.getElementById("label-singup").addEventListener("mouseup",function(){

    this.style.fontFamily = "Comic Sans MS, cursive";
  });



  document.getElementById("label-login").addEventListener("mouseup",function(){

    this.style.fontFamily = "Comic Sans MS, cursive";
  });


  document.getElementById("email-login").addEventListener("blur", function() {
    this.style.backgroundColor = ""; // إعادة لون الخلفية الافتراضي عند فقدان التركيز
    if(this.value === "") {
        this.classList.add("error"); // إضافة حدود حمراء إذا كان الحقل فارغًا
    } else {
        this.classList.remove("error");
    }
});


document.getElementById("password-login").addEventListener("blur", function() {
    this.style.backgroundColor = ""; // إعادة لون الخلفية الافتراضي عند فقدان التركيز
    if(this.value === "") {
        this.classList.add("error"); // إضافة حدود حمراء إذا كان الحقل فارغًا
    } else {
        this.classList.remove("error");
    }
});

document.getElementById("password").addEventListener("change", function() {
    if(this.value.length >= 5) {
        alert("Password is valid!");
    } else {
        alert("Password must be at least 5 characters!");
    }
});

document.getElementById("username").addEventListener("mouseenter", function() {
    this.classList.add("highlight"); // إضافة تأثير عند مرور الماوس
});
document.getElementById("username-login").addEventListener("keyup", function() {
    console.log("You released a key: " + this.value);
});
