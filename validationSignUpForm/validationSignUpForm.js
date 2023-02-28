const form = document.getElementById('loginForm');
const inputLogin = document.getElementById('login');
const inputUserName = document.getElementById("userName");
const inputPassword = document.getElementById("password");
const reEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i; 
const reTelephone = /^[\d\+][\d\(\)\- ]{4,14}$/;
const reUserName = /^[A-Za-z ]{8,20}$/;
const rePassword = /^[A-Za-z\d]{8,}$/;

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //Checking login validity
        const login = inputLogin.value;
        const isEmailValid = reEmail.test(login);
        const isTelephoneValid = reTelephone.test(login);
        const isLoginValid = isEmailValid || isTelephoneValid;

        if (isLoginValid) {
          console.log("Login pattern is correct");
        } else{
          console.log("login pattern is incorrect");
          inputLogin.setCustomValidity("Please, enter your email or telephone in correct way\n" + 
                                       "For example: ivanIvanov@mail.com or 378553695847");                       
        }
        //Checking UserName 
        const userName = inputUserName.value;
        const isUserNameValid = reUserName.test(userName);
        if (isUserNameValid) {
            console.log("UserName pattern is correct");
        } else {
            console.log("UserName pattern is incorrect");
            inputUserName.setCustomValidity("UserName uses only latin latters and space")
        }

        //Checking password validity
        const password = inputPassword.value;
        const isPasswordValid = rePassword.test(password);

        if (isPasswordValid) {
          console.log("Password pattern is correct");
        } else {
          console.log("Password pattern is incorrect");
          inputPassword.setCustomValidity("Please, enter correct password pattern\n"+
                                          "Password length is at least 8 characters. "+
                                          "The password uses only latin letters and numbers.")
        }
        });
} else {
    console.log('Some problems with form!')
}
