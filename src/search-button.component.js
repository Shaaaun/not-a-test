'use strict';

angular.
    module('searchButton').
    component('searchButton', {
        templateUrl: 'src/search-button.html',
        controller: function SearchButtonController(resultsService) {
            var ctrl = this;
            ctrl.buttonText = 'Search';
            ctrl.info = "";
            ctrl.flightData = [];
            ctrl.displayData = [];

            ctrl.getResults = function() { 
                resultsService.getCsv().then(function success(response) {
                    ctrl.info = response.data;
                    ctrl.flightData = ctrl.parseCsv();
                    ctrl.findFlights();
                }, function error() {});
            }
    
            ctrl.parseCsv = function() {
                let lines = ctrl.info.split(/\r\n|\n/);
                let poops = [];

                lines.map(line => {
                    poops.push(line.split(';'));
                });
                return poops.map(row => row.toString().split(","));
            }

            ctrl.findFlights = function() {
                var display_num = ctrl.flightData[0].indexOf(ctrl.formattedDay);

                for(var i = 0; i < ctrl.flightData.length; i++) {
                    if (ctrl.flightData[i][display_num] === 'x') {
                        ctrl.displayData.push(ctrl.flightData[i].slice(0, 4));
                    }
                }
                ctrl.displayData.sort();
                ctrl.buttonText = 'Search again';
            }

            ctrl.reset = function() {
                ctrl.buttonText = 'Search';
            }

            ctrl.onChange = function(type, value) {
                ctrl.inputChange({ 
                    type: type,
                    value: value
                });
            }
        },
        bindings: {
            formattedDay: '<',
            isInvalid: '<',
            hasSearched: '<',
            displayData: '<',
            inputChange: '&'
        }
    });