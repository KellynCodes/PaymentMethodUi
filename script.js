const form = document.getElementById("form");
const cardName = document.querySelector(".card_name_error");
const cardNumber = document.querySelector(".card_number_error");
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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputNameFunc();
  inputNumberFunc();
  DateFunc();
  CVCFUNC();
});

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

const inputNameFunc = () => {
  const inputNameValue = inputName.value.trim() === "";
  if (inputNameValue) {
    inputName.classList.add("error");
    cardName.innerText = "Please insert Your name";
  } else {
    inputName.classList.add("success");
    cardName.innerText = "";
  }
};

const inputNumberFunc = () => {
  const inputNumberValue = inputNumber.value.trim() === "";
  if (inputNumberValue) {
    inputNumber.classList.add("error");
    cardNumber.innerText = "Please fill this field.";
  } else {
    inputNumber.classList.add("success");
    cardNumber.innerText = "";
  }
};

const CheckNumberInput = () => {
  if (inputNumber.value.includes(String)) {
    inputNumber.classList.add("error");
    cardNumber.innerText = "Only numbers allowed in this field";
  } else {
    inputNumber.classList.add("success");
    cardNumber.innerText = "Only numbers allowed in this field";
  }
};

const DateFunc = () => {
  YearValue = Year.value.trim() === "";
  const MonthValue = Month.value.trim() === "";
  if (YearValue) {
    Year.classList.add("error");
    DateError.innerHTML = "This Field Is Required";
  } else {
    Year.classList.add("success");
    DateError.innerHTML = "";
  }

  if (MonthValue) {
    Month.classList.add("error");
    DateError.innerHTML = "This Field Is Required";
  } else {
    Month.classList.add("success");
    DateError.innerHTML = "";
  }
};

const CVCFUNC = () => {
  const cvcInputValue = cvcInput.value.trim() === "";
  if (cvcInputValue) {
    cvcInput.style.border = "2px solid red";
    CvCError.innerHTML = "This field is required";
  } else {
    cvcInput.style.border = "2px solid green";
    CvCError.innerHTML = "";
    ShowSuccessPage();
  }
};

function ShowSuccessPage() {
  form.style.display = "none";
  SuccessPage.style.display = "flex";
}
