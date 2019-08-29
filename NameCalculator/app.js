(function () {
    'use stric';

    angular.module('NameCalculator', [])
    .controller('NameCalculatorController', function ($scope) {

        $scope.name = "";
        $scope.totalValue = 0;

        $scope.displayNumeric = function () {
            var totalNameValue = 0; //get the total Value
            $scope.totalValue = totalNameValue;
        }


    } );

})();