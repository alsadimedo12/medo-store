function validateForm() {
    let f = document.getElementById("form1");
    let name = f.name.value;
    let email = f.email.value;
    let password = f.password.value;
    if (!/^[a-zA-Z]+$/.test(name)) {
        alert("error: name must contin only letters ");
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("error : invalid email format");
        return false;
    }
    if (!/\d/.test(password)) {
        alert("error: password must contain at least one number");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        alert("error: password must contain at least one uppercase letter");
        return false;
    }
    return true;
}