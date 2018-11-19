'use strict';

// Register `results` component, along with its associated controller and template
angular.
  module('results').
  component('results', {
    templateUrl: 'src/results.html',
    controller: function ResultsController() {
        var ctrl = this;
        ctrl.headings = ['Departure Time', 'Destination', 'IATA Code', 'Flight Number'];
    },
    bindings: {
      hasSearched: "<",
      displayData: '<'
    }
  });