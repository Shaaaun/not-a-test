'use strict';

// Register `dateSelect` component, along with its associated controller and template
angular.
  module('dateSelect').
  component('dateSelect', {
    templateUrl: 'src/date-select.html',
    controller: function DateSelectController() {
        var ctrl = this;
        let start = new Date().getFullYear();
        let end = start + 50;
        ctrl.days = [];
        ctrl.months = [];
        ctrl.years = [];

        for(var day = 1; day <= 31; day++) {
            ctrl.days.push(day);
        }

        for(var month = 0; month < 12; month++) {
            ctrl.months.push(new Date(2018, month));
        }    

        for(var year = start; year < end; year++) {
            ctrl.years.push({'name': year, 'id': year});
        }

        ctrl.onChange = function(type, value) {
            ctrl.inputChange({ 
                type: type,
                value: value
            });
        }
    }, 
    bindings: {
        selectedDay: "<",
        selectedMonth: "<",
        selectedYear: "<",
        hasSearched: "<",
        inputChange: '&'
    }
  });