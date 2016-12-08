window.addEventListener("load", setTimeToLive);

function getYear() {
    var date = new Date();
    var year = date.getFullYear();
    return year;
}
function getDate() {
    var date = new Date();
    var day = date.getDate();
    return day;
}
function getMonth() {
    var date = new Date();
    var month = date.getMonth() + 1;
    return month;
}

function setTimeToLive() {
    var bMonth = 8;
    var bDay = 15;
    var bYear = 1994;
    var days = document.getElementById("T2L");

    var yyyy = getYear();
    var date = getDate();
    var mm = getMonth();
    var avgLife = 95;
    var totalDays;
    var daysLeft;

    var years = yyyy - bYear;

    if (mm < bMonth) {
        years = years - 1;
    }
    if (mm === bMonth) {
        if (date < bDay) {
            years = years - 1;
        }
    }

    totalDays = years * 365;            // Does not include leap yrs
    avgLife = avgLife * 365;
    daysLeft = avgLife - totalDays;

    days.innerHTML = daysLeft + " days";
}