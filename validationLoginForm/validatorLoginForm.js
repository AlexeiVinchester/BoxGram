let form = document.getElementById("loginForm");
let validateBtn = document.querySelector(".log_btn");
let inputLogin = document.getElementById('login');
let reEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i; 
let reTelephone = /^[\d\+][\d\(\)\- ]{4,14}$/;
let valueEmail = reEmail.test(inputLogin.value);
let valueTelephone = reTelephone.test(inputLogin.value);
let value = valueEmail || valueTelephone;

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("clicked on submit");
    console.log("inputLogin: ", inputLogin.value);
    console.log("valueEmail: ", valueEmail);
    console.log("valueTelephone: ", valueTelephone);
    if (value) {
      console.log("Log is correct");
    } else{
      console.log("login is incorrect");
      inputLogin.setCustomValidity("Incorrect!!!!!!");
    }
  });
} else {
  console.log("Error with form");

}
