
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

//Load all event listeners
loadEventLiteners();

function loadEventLiteners() {

  loginBtn.addEventListener('click', logForm);
  registerBtn.addEventListener('click', regForm);

}

function regForm() {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  loginBtn.style.display = "block";
  registerBtn.style.display = "none";

}

function logForm() {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  registerBtn.style.display = "block";
  loginBtn.style.display = "none";
}