( function(){
    'use scrict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject['$scope'];
    function MsgController($scope) {
        $scope.name="Jonatas";
        $scope.stateOfBeing="hungry";

        $scope.feedJonatas = function () {
            $scope.stateOfBeing = "wellFed"
        }

        $scope.sayHello = function (){
            return 'Hello my friend!'
        }
    }

}());