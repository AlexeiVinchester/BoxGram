function validator() {
    let inputLogin = document.getElementById("login").value;
    let reEmail = /^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i; 
    let reTelephone = /^[\d\+][\d\(\)\- ]{4,14}$/;
    let valueEmail = reEmail.test(inputLogin);
    let valueTelephone = reTelephone.test(inputLogin);
    let value = valueEmail || valueTelephone;

    if (value){
        alert("Success");
    } else{
        alert("Error");
    }
    return value;
}