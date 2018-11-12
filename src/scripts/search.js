const Farts =  {
    config: {
        flightsReq: new XMLHttpRequest(),
        data: ""
    },
    init: function() {
        Farts.config.flightsReq.addEventListener("load", Farts.reqListener);
        Farts.config.flightsReq.open("GET", "../data/flights.csv");
        Farts.config.flightsReq.send();
    },
    reqListener: function() {
        Farts.config.data = this.responseText;
    },
    farts: function() {
        let lines = Farts.config.data.split(/\r\n|\n/);
        let poops = [];
        let flight_data = [];

        poops = lines.map(line => {
            return line.split(';')
        })

        flight_data = poops.map(row => row.toString().split(","));
        Farts.findFlights(flight_data);
    },
    findFlights: function(flight_data) {
        var day = localStorage.getItem('day');
        let display_data = [];
        var display_num = flight_data[0].indexOf(day);

        for(var i = 0; i < flight_data.length; i++) {
            if (flight_data[i][display_num] === 'x') {
                display_data.push(flight_data[i].slice(0, 4));
            }
        }

        display_data.sort();
        Farts.generatelist(display_data);
    },
    generatelist: function(data) {
        var flights = "";
        
        for(var i = 0; i < data.length; i++) {
            flights += "<div class='flight'>" 
        for(var j = 0; j < data[i].length; j++) {
            flights += `<div>${data[i][j]}</div>`;
        }
        flights += "</div>"
        }

    document.getElementById('flight-data').innerHTML += flights;
    }
}

export default Farts