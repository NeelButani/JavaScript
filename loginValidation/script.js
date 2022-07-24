const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


// ------------ When submitting the form ---------------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// ========================================================================
// ---------------- Main Validate Function -------------------------------
// ======================================================================
const validate = () => {
  const userNameVal = userName.value.trim();
  const emailVal = email.value.trim();
  const phoneNumberVal = phoneNumber.value.trim();
  const passwordVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();

  // validate username
  userNameValidation(userNameVal);

  // validate email
  emailValidation(emailVal);

  // validate phone Number
  phoneNumberValidate(phoneNumberVal);

  // Password validation
  passwordValidation(passwordVal);

  // confirm password
  confirmPasswordValidation(confirmPasswordVal, passwordVal);
};

// ============================================================================
// ---------------- All Input field Validation Code ---------------------------
// =============================================================================

// -------------UserName Validation code-------------
const userNameValidation = (userNameVal) => {
  let illegalCharacters = /\W/;
  let startWith = /^[0-9_]/;

  // blank validation
  if (userNameVal === "") {
    setErrorMsg(userName, "&bull; Username should not be blank");
  }

  // length validation
  else if (userNameVal.length <= 2 || userNameVal.length >= 10) {
    setErrorMsg(userName, " &bull; Username should be between 3 to 10 characters.");
  }

  //   allow only number alphabets and underscore
  else if (illegalCharacters.test(userNameVal)) {
    setErrorMsg(
      userName,
      "&bull; Please enter valid username. Use only numbers and alphabets and underscore"
    );
  }

  // Should not start with number or underscore
  else if (startWith.test(userNameVal)) {
    setErrorMsg(userName, "&bull; Username should not start with number and underscore");
  } else {
    setSuccessMsg(userName);
  }
};

//  ------------- Email validation Code--------------
const emailValidation = (emailVal) => {
  if (emailVal === "") {
    setErrorMsg(email, "&bull; Email cannot be blank.");
  } else if (!isValidEmail(emailVal)) {
    setErrorMsg(email, "&bull; Email is invalid");
  } else {
    setSuccessMsg(email);
  }
  // regex to validate emial
  function isValidEmail(emailVal) {
    const emailTest = /^([\w-.]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?/;

    if (emailTest.test(emailVal)) {
      return true;
    }
    return false;
  }
};

// -------------- Phone Number validation Code------------
const phoneNumberValidate = (phoneNumberVal) => {
  if (phoneNumberVal === "") {
    setErrorMsg(phoneNumber, "&bull; It cannot be blank.");
  } else if (!isValidNumber(phoneNumberVal)) {
    setErrorMsg(phoneNumber, "&bull; Must have 10 numbers");
  } else {
    setSuccessMsg(phoneNumber);
  }
  function isValidNumber(phoneNumberVal) {
    const phoneTest = /^[0-9]{10}/;
    if (phoneTest.test(phoneNumberVal)) {
      return true;
    }
    return false;
  }
};

// ------------- Password validation Code ------------
const passwordValidation = (passwordVal) => {
  if (passwordVal === "") {
    setErrorMsg(password, "&bull; Password cannot be blank");
  } else if (!isvalidPassword(passwordVal)) {
    setErrorMsg(
      password,
      "&bull; Password must have atleast one lowerCase , upperCase , digit and special Character. "
    );
  } else {
    setSuccessMsg(password);
  }
  function isvalidPassword(passwordVal) {
    const passwordTest = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (passwordTest.test(passwordVal)) {
      return true;
    }
    return false;
  }
};

// -------------- Confirm password validation code
const confirmPasswordValidation = (confirmPasswordVal, passwordVal) => {
  if (confirmPasswordVal === "") {
    setErrorMsg(confirmPassword, "&bull; Password cannot be blank");
  } else if (!isConfirmPassword(confirmPasswordVal, passwordVal)) {
    setErrorMsg(confirmPassword, "&bull; Password does  not Match.");
  } else {
    setSuccessMsg(confirmPassword);
  }
  function isConfirmPassword(confirmPasswordVal, passwordVal) {
    if (confirmPasswordVal === passwordVal) {
      return true;
    }
    return false;
  }
};

// ===========================================================================
// ----------------Setting Error and Success Messages--------
// =========================================================================

// ---------------SetErrorMsg Method---------------
function setErrorMsg(input, errorMsg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerHTML = errorMsg;
}

// setSuccessMsg method
function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
