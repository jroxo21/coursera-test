(function () {
    'use scrict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter)
        .filter('truth', TruthFilter);

    MsgController.inject = ['$scope', 'lovesFilter'];
    function MsgController($scope, lovesFilter) {
        
        $scope.stateOfBeing = "hungry";
        

        $scope.sayMessage = function () {

            var msg = 'I like to eat healthy snacks at night';
            return msg;
        }
        
        $scope.sayLovesMessage = function () {

            var msg = 'I like to eat healthy snacks at night';
            msg = lovesFilter(msg);
            return msg;
        }


        $scope.feedJonatas = function () {
            $scope.stateOfBeing = "wellFed"
        }
    }

    function LovesFilter(){
        return function (input) {
            input = input || "";
            input = input.replace("like", "love");
            return input;
        }
    }

    function TruthFilter (){
        return function(input, target, replace){
            input = input || "";
            input = input.replace(target, replace);
            return input; 
        }
    }
 
}());