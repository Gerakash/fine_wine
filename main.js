const ageFormSubmit = document.getElementById("ageForm")

ageFormSubmit.addEventListener("submit", (e) => {
    e.preventDefault()

    validateInput()

    const errorMessages = document.querySelectorAll(".error");
    if (errorMessages.length === 0) {
        ageFormSubmit.reset();
    }
})


const errorMsg = (message, inputId) => {
    const errMsgInput = document.getElementById(inputId);
    const errMsgTxt = errMsgInput.nextElementSibling;
    if (errMsgTxt) {
        errMsgInput.classList.add("error")
        errMsgTxt.innerHTML = message.replace(/\n/g, '<br/>');
    }
}

const clearErrorMsg = (inputId) => {
    const errMsgInput = document.getElementById(inputId);
    const errMsgTxt = errMsgInput.nextElementSibling;
    if (errMsgTxt) {
        errMsgInput.classList.remove("error")
        errMsgTxt.innerText = ""
    }
}

const isLeapYear = (year) =>{
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Validating age
const validateInput = () => {
    const day = parseInt(document.getElementById("day").value)
    const month = parseInt(document.getElementById("month").value)
    const year = parseInt(document.getElementById("year").value)

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    
    clearErrorMsg("day");
    clearErrorMsg("month");
    clearErrorMsg("year");

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        errorMsg("This field is required", "day");
        errorMsg("This field is required", "month");
        errorMsg("This field is required", "year");
        return;
    }

    if (day < 1 || day > 31) {
        errorMsg("Must be a valid day", "day");
        return;
    }

    if (month < 1 || month > 12) {
        errorMsg("Must be a valid month", "month");
        return;
    }

    // const currentYear = new Date().getFullYear();

    if (year > currentYear) {
        errorMsg("Must be a valid year", "year");
        return;
    }

    if (
        (day > 30 && [4, 6, 9, 11].includes(month)) ||
        (day > 29 && month === 2) ||
        (day > 28 && month === 2 && !isLeapYear(year))
    ) {
        errorMsg("The day does not exist \nin the selected month.", "day");
        return;
    }

    // Calc age
    

    const ageYear = currentYear - year;
    const ageMonth = currentMonth - month;
    const ageDay = currentDate.getDate() - day;

    const resultYear = document.getElementById("result-year");
    const resultMonth = document.getElementById("result-month");
    const resultDay = document.getElementById("result-day");

    resultYear.innerText = ageYear
    resultMonth.innerText = ageMonth
    resultDay.innerText = ageDay


}



















