function validateForm() {
    let f = document.getElementById("form1");
    let name = f.name.value;
    let email = f.email.value;
    let phone = f.phone.value;
    let password = f.password.value;
    if (!/\d/.test(password)) {
        alert("error: password must contain at least one number");
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        alert("error: password must contain at least one uppercase letter");
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
        alert("error: name must contin only letters ");
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("error : invalid email format");
        return false;
    }
    if (!/\d/.test(phone)) {
        alert("error: phone number  must contain at least one number");
        return false;
    }
    return true;
}