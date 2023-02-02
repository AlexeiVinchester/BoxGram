function loginEmailValidation() {
    let login = document.getElementById('login').value;
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = re.test(login);
    if (valid) {
        alert('Success');
    } else {
        alert('Error');
    }
    return valid;
}