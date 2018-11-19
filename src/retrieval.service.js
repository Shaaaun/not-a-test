angular.module('dateSelect').service('resultsService', function($http) {

    this.getCsv = function() {
        return $http({
            method: 'GET',
            url: '/src/data/flights.csv'
            }).then(function successCallback(response) {
                return response;
            }, function errorCallback(response) {
                return response;
            });
    }
});