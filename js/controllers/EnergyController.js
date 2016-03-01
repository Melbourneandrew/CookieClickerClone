var app = angular.module("app")

app.controller("EnergyController", function($scope, $interval, $rootScope, ModuleFactory) {
    

    /* Things to do:
     Don't allow a module to be bought unless they have enough energy
     Don't allow a module to be bought unless they have enough population
     Start taking into account OilProduces and add that the the $scope.Progress
     Refactor Eneregypersecond
    */

    $scope.Buy = function(module){
        ModuleFactory.Buy(module);
    };
    
    $scope.addEnergy = function() {
        if ($rootScope.Progress.Energy < $rootScope.Progress.MaxEnergy) {
            $rootScope.Progress.Energy += 1;
        }

    };

});
