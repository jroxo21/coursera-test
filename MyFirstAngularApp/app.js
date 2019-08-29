(function (){

    'use strict';

  

    angular.module('myFirstApp', [])

    .controller('MyFirstController' , function($scope){

        $scope.name = "Jonatas";
        $scope.sayHello = function(){
            return "Hello!";
        }
    
    });
})();