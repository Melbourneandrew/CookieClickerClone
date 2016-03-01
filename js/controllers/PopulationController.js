var app = angular.module("app")


app.controller("PopulationController", function($scope, $interval, $rootScope, ModuleFactory){
    
    $scope.Buy = function(module){
        ModuleFactory.Buy(module);
    };
    
    
    
    
});

