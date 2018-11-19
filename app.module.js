'use strict';

// Define the `airportDataApp` module
angular.module('airportDataApp', [
  // ...which depends on the `heading`, `dateSelect` modules
  'dateSelect',
  'results',
  'searchButton'
]).controller("app", function($scope, $filter) {
  $scope.title = "Virgin Holidays Airport Data";
  $scope.subTitle = "Not-a-test Version"
  $scope.selectedDay = "dd";
  $scope.selectedMonth = "mm";
  $scope.selectedYear = "yy";
  $scope.date;
  $scope.formattedDay;
  $scope.isInvalid = true;
  $scope.hasSearched = false;
  $scope.displayData = [];

  $scope.onChanges = function (type, value) {
    $scope[type] = value;

    $scope.date = `${$scope.selectedDay} ${$scope.selectedMonth} ${$scope.selectedYear}`;
    $scope.date = $scope.validDate();
    $scope.formattedDay = $filter('date')(new Date ($scope.date), 'EEEE');
  }

  $scope.validDate = function() {
    if ($scope.selectedDay === 'dd' || $scope.selectedMonth === 'mm' || $scope.selectedYear == 'yy') {
      $scope.isInvalid = true;
      return 'Invalid Date';
    } else {
      $scope.isInvalid = false;
      return $filter('date')(new Date($scope.date), 'dd MMM yyyy');
    }
  }
});