var app = angular.module("app")


app.controller("OilController", function($scope, $interval, $rootScope, ModuleFactory){
    
    $scope.Buy = function(module){
        ModuleFactory.Buy(module);
    };
    
    $scope.addOil = function() {
        if ($rootScope.Progress.Oil < $rootScope.Progress.MaxOil) {
            $rootScope.Progress.Oil += 1;
        }
    };
    
});

