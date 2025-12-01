function validateForm() {
    const emailInput = document.forms["registrationForm"]["email"];
    const passwordInput = document.forms["registrationForm"]["psw"];
  
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    emailError.textContent = "";
    passwordError.textContent = "";
  
    let isValid = true;
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailInput.value.match(emailPattern)) {
      emailError.textContent = "لطفا یک ایمیل معتبر وارد کنید.";
      isValid = false;
    }
  
    const password = passwordInput.value;
    if (password.length < 8) {
      passwordError.textContent = "پسورد باید حداقل 8 کاراکتر باشد.";
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      passwordError.textContent = "پسورد باید شامل حداقل یک حرف بزرگ باشد.";
      isValid = false;
    } else if (!/[a-z]/.test(password)) {
      passwordError.textContent = "پسورد باید شامل حداقل یک حرف کوچک باشد.";
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      passwordError.textContent = "پسورد باید شامل حداقل یک عدد باشد.";
      isValid = false;
    }
  
    return isValid;
  }