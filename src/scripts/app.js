const DateStuff = {
    config: {
        start: 2018,
        end: new Date().getFullYear() + 50,
        full_day: "",
        search_date: ""
    },
    init: function() {
        var elements = document.querySelectorAll('#search');
        var options = "";
        DateStuff.config.search_date = DateStuff.generateDate();
        elements.forEach(function(i) {
            i.addEventListener('click', DateStuff.hide())
        });

        for(var year = DateStuff.config.start; year <= DateStuff.config.end; year++) {
            options += "<option value="+year+">"+ year +"</option>";
        }
        document.getElementById("year").innerHTML += options;
    },
    upDate: function() {
        DateStuff.config.search_date = DateStuff.generateDate();
        var button = document.getElementById("search");
        if (DateStuff.config.search_date.toString() === 'Invalid Date' && (button.attributes.getNamedItem('disabled') === null)) {
            button.setAttribute('disabled', '');
        } else if (DateStuff.config.search_date.toString() != 'Invalid Date' && button.attributes.getNamedItem('disabled') != null) {
            button.attributes.removeNamedItem('disabled');
        }
    },
    getSearchDay: function() {
        let day = DateStuff.config.search_date.toString().split(" ")[0];
        switch (day) {
            case 'Mon':
                DateStuff.config.full_day = 'Monday';
                break;
            case 'Tue':
                DateStuff.config.full_day = 'Tuesday';
                break;
            case 'Wed':
                DateStuff.config.full_day = 'Wednesday';
                break;
            case 'Thu':
                DateStuff.config.full_day = 'Thursday';
                break;
            case 'Fri':
                DateStuff.config.full_day = 'Friday';
                break;
            case 'Sat':
                DateStuff.config.full_day = 'Saturday';
                break;
            case 'Sun':
                DateStuff.config.full_day = 'Sunday';
                break;
            default:
                console.log("Invalid day");
        }

        localStorage.setItem('day', DateStuff.config.full_day);
        localStorage.setItem('date', DateStuff.config.search_date);
        DateStuff.hide();
    },
    generateDate: function() {
        if (document.getElementById("day").value === 'dd') {
            return 'Invalid Date'
        } else if (document.getElementById("month").value === 'mm') {
            return 'Invalid Date'
        } else {
            return new Date(document.getElementById("day").value + " " + document.getElementById("month").value + " " + document.getElementById("year").value);
        }
    },
    clearStoragePls: function() {
        localStorage.clear();
        DateStuff.hide();
        DateStuff.removeData();
    },
    hide: function () {
        document.querySelectorAll(".search-date").forEach(function(j) {
            j.classList.toggle('hide') 
        })
    },  
    removeData: function() {
        var flights = document.getElementsByClassName("flight");
        while (flights.length > 0) {
            flights[0].parentNode.removeChild(flights[0]);
        }
    }    
}

export default DateStuff 

//DateStuff.init();

//console.log(DateStuff)

/*
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
} */