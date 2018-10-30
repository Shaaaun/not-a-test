var flightsReq = new XMLHttpRequest();
flightsReq.addEventListener("load", reqListener);
flightsReq.open("GET", "/src/data/flights.csv");
flightsReq.send();
let data = "";
var full_day = localStorage.getItem('day');

function reqListener() {
    data = this.responseText;
}   

function _(){
    let lines = data.split(/\r\n|\n/);
    let poops = [];
    let flight_data = [];
    
    for(var i = 0; i < lines.length; i++) {
        let row = lines[i].split(";");
        let col = [];

        for (var j = 0; j < row.length; j++) {
            col.push(row[j]);
        }

        poops.push(col);
    }
    
    for(var i = 0; i < poops.length; i++) {
        flight_data.push(poops[i].toString().split(","));
    }
    findFlights(full_day, flight_data);
}

function findFlights(day, flight_data) {
    
    let display_data = [];
    display_num = flight_data[0].indexOf(day);

    for(var i = 0; i < flight_data.length; i++) {

        if (flight_data[i][display_num] === 'x') {
            display_data.push(flight_data[i].slice(0, 4));
        }

    }
    display_data.sort();
    generatelist(display_data);
}

function generatelist(data) {
    var flights = "";
    
    for(var i = 0; i < data.length; i++) {
        flights += "<div class='flight'>" 
      for(var j = 0; j<data[i].length; j++) {
        flights += "<div>" + data[i][j] + "</div>";
      }
      flights += "</div>"
    }

  document.getElementById('flight-data').innerHTML += flights;
}