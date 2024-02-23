const dayInput = document.getElementById("Day");
const monthInput = document.getElementById("Month");
const yearInput = document.getElementById("Year");
const button = document.getElementById("getAge");

const dayError = document.getElementById("dayError");
const monthError = document.getElementById("monthError");
const yearError = document.getElementById("yearError");

const dayText = document.querySelector(".inputs div:nth-child(1) label");
const monthText = document.querySelector(".inputs div:nth-child(2) label");
const yearText = document.querySelector("div:nth-child(3) label");

const ageYears = document.querySelector(".App #output p:nth-child(1) span")
const ageMonths = document.querySelector(".App #output p:nth-child(2) span")
const ageDays = document.querySelector(".App #output p:nth-child(3) span")

const time = new Date();

if (localStorage.getItem("ageYears") != null) {
    ageYears.innerHTML = localStorage.getItem("ageYears");
    ageMonths.innerHTML = localStorage.getItem("ageMonths");
    ageDays.innerHTML = localStorage.getItem("ageDays");

    dayInput.value = localStorage.getItem("inputDays");
    monthInput.value = localStorage.getItem("inputMonths");
    yearInput.value = localStorage.getItem("inputYears");
}

button.addEventListener("click", function () {
    let dayVerfication = true;
    let monthVerification = true;
    let yearVerification = true;
    if (dayInput.value == "") {
        dayError.innerHTML = "This field is required";
        dayVerfication = false;
    }
    else if (dayInput.value < 1 || dayInput.value > 31) {
        dayError.innerHTML = "Must be a vaild day";
        dayVerfication = false;
    }
    if (monthInput.value == "") {
        monthError.innerHTML = "This field is required";
        monthVerification = false;
    }
    else if (monthInput.value < 1 || monthInput.value > 12) {
        monthError.innerHTML = "Must be a vaild month";
        monthVerification = false;
    }
    if (yearInput.value == "") {
        yearError.innerHTML = "This field is required";
        yearVerification = false;
    }
    else if (yearInput.value < 1) {
        yearError.innerHTML = "Must be a vaild year";
        yearVerification = false;
    } else if (yearInput.value > time.getFullYear()) {
        yearError.innerHTML = "Must be in the past"
        yearVerification = false;
    } else if (yearInput.value == time.getFullYear()) {
        if (monthInput.value > time.getMonth() + 1) {
            monthError.innerHTML = "Must be in the past";
            monthVerification = false;
        } else {
            if (dayInput.value > time.getDate()) {
                dayVerfication = false;
                dayError.innerHTML = "Must be in the past";
            }
        }
    }

    if (dayVerfication && monthVerification && yearVerification) {
        DisplayAgeDetails();
    }
    invokeError(dayVerfication, monthVerification, yearVerification);
})

function invokeError(dayVerfication, monthVerification, yearVerification) {
    if (!dayVerfication) {
        dayInput.style.borderColor = "red";
        dayText.style.color = "red";
    } else {
        dayInput.style.borderColor = "rgb(200, 199, 199)";
        dayText.style.color = "rgb(115, 115, 115)";
        dayError.innerHTML = "";
    }
    if (!monthVerification) {
        monthInput.style.borderColor = "red";
        monthText.style.color = "red";
    } else {
        monthInput.style.borderColor = "rgb(200, 199, 199)";
        monthText.style.color = "rgb(115, 115, 115)";
        monthError.innerHTML = "";
    }
    if (!yearVerification) {
        yearInput.style.borderColor = "red";
        yearText.style.color = "red";
    } else {
        yearInput.style.borderColor = "rgb(200, 199, 199)";
        yearText.style.color = "rgb(115, 115, 115)";
        yearError.innerHTML = "";
    }
}

function DisplayAgeDetails() {
    const inputDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    let years = (time.getTime() - inputDate.getTime()) / 1000 / 60 / 60 / 24 / 365;
    let months = (years - Math.floor(years)) * 12;
    if (time.getDate() < inputDate.getDate()) {
        months--;
        days = 30 - Math.abs(time.getDate() - inputDate.getDate());

    } else {
        days = time.getDate() - inputDate.getDate();
    }
    years = Math.floor(years);
    months = Math.floor(months);
    days = Math.floor(days);

    ageYears.innerHTML = years;
    ageMonths.innerHTML = months;
    ageDays.innerHTML = days;

    localStorage.setItem("ageYears", years);
    localStorage.setItem("ageMonths", months);
    localStorage.setItem("ageDays", days);

    localStorage.setItem("inputYears", yearInput.value);
    localStorage.setItem("inputMonths", monthInput.value);
    localStorage.setItem("inputDays", dayInput.value);
}