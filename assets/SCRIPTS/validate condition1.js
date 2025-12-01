function validateForm() {
    const email = document.forms["registrationForm"]["email"].value;
    const password = document.forms["registrationForm"]["psw"].value;
    const confirmPassword = document.forms["registrationForm"]["psw-repeat"].value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "لطفاً یک ایمیل معتبر وارد کنید.";
        isValid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = "رمز عبور باید حداقل 8 کاراکتر باشد.";
        isValid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "رمز عبور و تایید آن با هم مطابقت ندارند.";
        isValid = false;
    }

    return isValid;
}