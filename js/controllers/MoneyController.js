var app = angular.module("app")


app.controller("MoneyController", function($scope, $interval, $rootScope , ModuleFactory){
    
    $scope.Buy = function(module){
        ModuleFactory.Buy(module);
    };
    
    $scope.addMoney = function() {
        if ($rootScope.Progress.Money < $rootScope.Progress.MaxMoney) {
            $rootScope.Progress.Money += 1;
        }
    };
});

