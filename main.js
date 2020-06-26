let bb1 = document.querySelector("#button1");
let bb2 = document.querySelector("#button2");
let bb3 = document.querySelector("#button3");
let input = document.querySelector("#txtvalue");

bb1.addEventListener("click", () => {
  input.value = bb1.value;
});
bb2.addEventListener("click", () => {
  input.value = bb2.value;
});
bb3.addEventListener("click", () => {
  input.value = bb3.value;
});

const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");

function onSubmit() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (numberValue === "") {
    setErrorFor(number, "Contact cannot be blank");
  } else {
    setSuccessFor(number);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
