( function(){
    'use scrict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject['$scope'];
    function MsgController($scope) {
        $scope.name="Jonatas";
        $scope.sayHello = function (){
            return 'Hello my friend!'
        }
    }

}());