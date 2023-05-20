"use strict";

const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const password = document.querySelector("#password");
const gender = document.querySelector("#gender");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const submitBtn = document.querySelector("#submit");
const showPassword = document.querySelector("#showPassword");

// regex for validations
const onlyLetters = /^[A-Za-z]+$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^\d{10}$/;
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;

const validateFirstName = (value) => {
  if (!value) {
    displayError(firstName, "First Name is required");
    return false;
  }

  if (!onlyLetters.test(value)) {
    displayError(firstName, "First Name should only contain Letters");
    return false;
  }

  if (value.length <= 3) {
    displayError(firstName, "First Name should be more than 3 Letters");
    return false;
  }

  removeError(firstName);
  return true;
};

const validateLastName = (value) => {
  if (!value) {
    displayError(lastName, "last Name  is required");
    return false;
  }

  if (!onlyLetters.test(value)) {
    displayError(lastName, "Last Name should only contain Letters");
    return false;
  }

  if (value.length <= 3) {
    displayError(lastName, "Last Name should be more than 3 Letters");
    return false;
  }

  removeError(lastName);
  return true;
};

const validateEmail = (value) => {
  if (!value) {
    displayError(email, "Email  is required");
    return false;
  }

  if (!emailRegex.test(value)) {
    displayError(email, "Please Enter a Valid Email Address");
    return false;
  }

  removeError(email);
  return true;
};

const validatePhone = (value) => {
  if (!value) {
    displayError(phone, "Phone Number is required");
    return false;
  }

  if (!phoneRegex.test(value)) {
    displayError(phone, "Please Enter a Valid Phone Number");
    return false;
  }

  if (value[0] !== "9" && value[0] !== "8" && value[0] !== "7") {
    displayError(phone, "Phone Number should start with either 9,8 or 7");
    return false;
  }
  removeError(phone);
  return true;
};

const validateGender = (value) => {
  if (!value) {
    displayError(gender, "Gender is required");
    return false;
  }

  removeError(gender);
  return true;
};

const validatePassword = (value) => {
  if (!value) {
    displayError(password, "password is required");
    return false;
  }

  if (value.length < 8) {
    displayError(password, "Password length should be minimun 8");
    return false;
  }

  if (!passwordRegex.test(value)) {
    displayError(
      password,
      "Password should contain at least one letter, one number, and one special character"
    );
    return false;
  }

  removeError(password);
  return true;
};

const displayError = (errorElm, errorMsg) => {
  const parentElement = errorElm.parentElement;
  const errorExists = parentElement.querySelector(".error");

  if (errorExists && errorExists.parentNode === parentElement) {
    parentElement.removeChild(errorExists);
  }
  const errorElement = document.createElement("span");
  errorElement.innerText = errorMsg;
  errorElement.className = "error";
  parentElement.classList.add("error-container");
  errorElm.parentElement.appendChild(errorElement);
  errorElm.focus();
};

const removeError = (errorElm) => {
  const parentElement = errorElm.parentElement;
  parentElement.classList.remove("error-container");
  const errorExists = parentElement.querySelector(".error");
  if (errorExists && errorExists.parentNode === parentElement) {
    parentElement.removeChild(errorExists);
  }
};

const validateSubmit = (e) => {
  e.preventDefault();
  validateFirstName(firstName.value);
  validateLastName(lastName.value);
  validatePassword(password.value);
  validateGender(gender.value);
  validateEmail(email.value);
  validatePhone(phone.value);
  const registrationForm = document.querySelector("#registration-form");
  let canSubmit =
    validateFirstName(firstName.value) &&
    validateLastName(lastName.value) &&
    validatePassword(password.value) &&
    validateGender(gender.value) &&
    validateEmail(email.value) &&
    validatePhone(phone.value);

  if (canSubmit) {
    alert("Form Sumbmitted SuccessFully !!!!");
    registrationForm.reset();
  }
};

firstName.addEventListener("keyup", () => validateFirstName(firstName.value));
lastName.addEventListener("keyup", () => validateLastName(lastName.value));
email.addEventListener("keyup", () => validateEmail(email.value));
phone.addEventListener("keyup", () => validatePhone(phone.value));
gender.addEventListener("change", () => validateGender(gender.value));
password.addEventListener("keyup", () => validatePassword(password.value));

showPassword.addEventListener("change", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

submitBtn.addEventListener("click", (e) => validateSubmit(e));
