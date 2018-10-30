
var start = 2018;
var end = new Date().getFullYear() + 50;
var options = "";
var search_date = generateDate();
var full_day = "";
var elements = document.querySelectorAll('#search');
elements.forEach(function(i) {
    i.addEventListener('click', hide())
});


for(var year = start; year <= end; year++) {
    options += "<option value="+year+">"+ year +"</option>";
}
document.getElementById("year").innerHTML += options;

function upDate() {
    search_date = generateDate();
    var button = document.getElementById("search");
    if (search_date.toString() === 'Invalid Date' && (button.attributes.getNamedItem('disabled') === null)) {
        button.setAttribute('disabled', '');
    } else if (search_date.toString() != 'Invalid Date' && button.attributes.getNamedItem('disabled') != null) {
        button.attributes.removeNamedItem('disabled');
    }
}

function getSearchDay(){
    let day = search_date.toString().split(" ")[0];

    switch (day) {
        case 'Mon':
            full_day = 'Monday';
            break;
        case 'Tue':
            full_day = 'Tuesday';
            break;
        case 'Wed':
            full_day = 'Wednesday';
            break;
        case 'Thu':
            full_day = 'Thursday';
            break;
        case 'Fri':
            full_day = 'Friday';
            break;
        case 'Sat':
            full_day = 'Saturday';
            break;
        case 'Sun':
            full_day = 'Sunday';
            break;
        default:
            console.log("Invalid day");
    }
    localStorage.setItem('day', full_day);
    localStorage.setItem('date', search_date);
    hide();
}

function generateDate() {
    if (document.getElementById("day").value === 'dd') {
        return 'Invalid Date'
    } else if (document.getElementById("month").value === 'mm') {
        return 'Invalid Date'
    } else {
        return new Date(document.getElementById("day").value + " " + document.getElementById("month").value + " " + document.getElementById("year").value);
    }
}

function clearStoragePls() {
    localStorage.clear();
    hide();
    removeData();
}

function hide() {
    document.querySelectorAll(".search-date").forEach(function(j) {
        j.classList.toggle('hide') 
    })
}

function removeData() {
    var flights = document.getElementsByClassName("flight");
    while (flights.length > 0) {
        flights[0].parentNode.removeChild(flights[0]);
    }
}