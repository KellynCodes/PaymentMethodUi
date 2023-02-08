const form = document.getElementById("form");
const cardNameError = document.querySelector(".card_name_error");
const cardNumberError = document.querySelector(".card_number_error");
const inputNumber = document.getElementById("inputNumber");
const inputName = document.getElementById("inputName");
const LogInput = document.querySelectorAll(".logInput");
const FrontCardName = document.querySelector(".front_card_name");
const FrontCardNumber = document.querySelector(".front_card_number");
const Year = document.getElementById("year");
const Month = document.getElementById("month");
const DateError = document.querySelector(".date_error");
const ExpireYear = document.getElementById("ExpireYear");
const CvCError = document.querySelector(".cvc_error");
const CvCNumber = document.querySelector(".cvc_number");

inputName.addEventListener("input", () => {
  FrontCardName.innerHTML = inputName.value;
});

inputNumber.addEventListener("input", () => {
  FrontCardNumber.innerHTML = inputNumber.value;
});

Month.addEventListener("keyup", () => {
  ExpireMonth.innerHTML = Month.value + Year.value;
});

Year.addEventListener("keyup", () => {
  ExpireYear.innerHTML = Year.value;
});
//this cvcInput is an id in the Html so if i want i cannot get it again by document.getelementbyid so far it is and id; Check about this if u dont Understand;
cvcInput.addEventListener("input", () => {
  CvCNumber.innerHTML = cvcInput.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  CheckInputs();
});

function CheckInputs() {
  // Get input values
  const inputNameValue = inputName.value.trim();
  const inputNumberValue = inputNumber.value.trim();
  YearValue = Year.value.trim();
  const MonthValue = Month.value.trim();
  const cvcInputValue = cvcInput.value.trim();

  if (inputNameValue === "") {
    //show error and add error class
    setErrorFor(inputName, "Card Name Cannot be blank ");
  } else {
    // add success class
    setSuccessFor(inputName);
  }

  if (inputNameValue === "") {
    setErrorFor(inputNumber, "Card Number Cannot be blank ");
  } else {
    setSuccessFor(inputNumber);
  }
}

function setErrorFor(input, message) {
  input.classList.add("error");
  cardNameError.innerText = message;
  cardNumberError.innerText = message;
}

function setSuccessFor(input) {
  input.classList.remove("error");
  input.classList.add("success");
  cardNameError.innerText = "";
  cardNumberError.innerText = "";
}
