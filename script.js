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

let years;
let months;
let days;

const time = new Date();

if (localStorage.getItem("ageYears") != null) {
    getData();
}



button.addEventListener("click", function (form) {

    form.preventDefault();

    let dayVerfication = true;
    let monthVerification = true;
    let yearVerification = true;

    if (dayInput.value == "") {
        dayError.innerHTML = "This field is required";
        dayVerfication = false;
    }
    else if ((dayInput.value < 1 || dayInput.value > 31) || ((monthInput.value == 4 || monthInput.value == 6 || monthInput.value == 9 || monthInput.value == 11) && dayInput.value > 30) || (dayInput.value > 28 && monthInput.value == 2 && yearInput.value % 4 != 0) || (dayInput.value > 29 && monthInput.value == 2 && yearInput.value % 4 == 0)) {
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
            if (dayInput.value > time.getDate() && monthInput.value == time.getMonth() + 1) {
                dayVerfication = false;
                dayError.innerHTML = "Must be in the past";
            }
        }
    }

    invokeError(dayVerfication, monthVerification, yearVerification);

    if (dayVerfication && monthVerification && yearVerification) {
        getAge();
        saveDate();
    }

})

function invokeError(dayVerfication, monthVerification, yearVerification) {

    if (!dayVerfication) {
        dayInput.style.borderColor = "hsl(0, 100%, 67%)";
        dayText.style.color = "hsl(0, 100%, 67%)";
    } else {
        dayInput.style.borderColor = "rgb(200, 199, 199)";
        dayText.style.color = "rgb(115, 115, 115)";
        dayError.innerHTML = "";
    }
    if (!monthVerification) {
        monthInput.style.borderColor = "hsl(0, 100%, 67%)";
        monthText.style.color = "hsl(0, 100%, 67%)";
    } else {
        monthInput.style.borderColor = "rgb(200, 199, 199)";
        monthText.style.color = "rgb(115, 115, 115)";
        monthError.innerHTML = "";
    }
    if (!yearVerification) {
        yearInput.style.borderColor = "hsl(0, 100%, 67%)";
        yearText.style.color = "hsl(0, 100%, 67%)";
    } else {
        yearInput.style.borderColor = "rgb(200, 199, 199)";
        yearText.style.color = "rgb(115, 115, 115)";
        yearError.innerHTML = "";
    }

}

function getAge() {

    const inputDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    years = time.getFullYear() - inputDate.getFullYear();
    months = time.getMonth() - inputDate.getMonth();
    days = time.getDate() - inputDate.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        if (months < 0) {
            years--;
            months += 12;
        }
        if (months == 5 || months == 7 || months == 10 || months == 12) {
            days += 30;
        } else if (months == 3) {
            if (years % 4 == 0)
                days += 29;
            else
                days += 28;
        } else {
            days += 29;
        }
    }

    countUpTimer(days, months, years);

}

function saveDate() {

    localStorage.setItem("ageYears", years);
    localStorage.setItem("ageMonths", months);
    localStorage.setItem("ageDays", days);

    localStorage.setItem("inputYears", yearInput.value);
    localStorage.setItem("inputMonths", monthInput.value);
    localStorage.setItem("inputDays", dayInput.value);

}

function getData() {

    yearInput.value = localStorage.getItem("inputYears");
    monthInput.value = localStorage.getItem("inputMonths");
    dayInput.value = localStorage.getItem("inputDays");
    years = localStorage.getItem("ageYears");
    months = localStorage.getItem("ageMonths");
    days = localStorage.getItem("ageDays");
    countUpTimer(days, months, years);

}

function countUpTimer(Days, Months, Years) {

    ageDays.innerHTML = "00";
    ageMonths.innerHTML = "00";
    ageYears.innerHTML = "00";

    let timer = 0;

    setInterval(function () {
        timer++;
        if (timer <= Years) {
            ageYears.innerHTML = timer.toString().padStart(2, "0");
        } else {
            clearInterval();
        }
        if (timer <= Months) {
            ageMonths.innerHTML = timer.toString().padStart(2, "0");;
        }
        if (timer <= Days) {
            ageDays.innerHTML = timer.toString().padStart(2, "0");;
        }
    }, 60)

}