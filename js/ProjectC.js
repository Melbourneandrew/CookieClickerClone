var app = angular.module("app", ['ui.router']);

app.config(config)

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    
        $urlRouterProvider.otherwise("/home");
        

        /* Page list:
        Page -> Total, Modules, Upgrades
        Home ->
        Money ->
        Energy -> 
        Population -> Population total, population structures & upgrades 
        
        
        */
        
        /* 
         $scope -> The scope for that controller
         $rootScope -> The scope for that app
         
        */
        

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "/html/EnegryClickerPage.html",
                controller: "EnergyController",
            })
    
} 

app.controller("EnergyController", function($scope, $interval, $rootScope) {



    /*START OF Energy VARS
    $scope.Energy = 0;
    $scope.maxEnergy = 500;
    $scope.EnergyPS = 0;
    $scope.powerPlantCount = 0;
     anything followed by "Eff" is that structures efficiency. or how much of its currency it 
    produces per second. I am documenting my code be proud of me 
    $scope.powerPlantEff = 1;
    $scope.powePlantCost = $scope.powerPlantCount * 1.3;
    
    */

    /*END OF Energy VARS*/

    /* Fields for module can include
        Name: The name of the module
        PopRequirment: The population subtracted by the module
        Efficency: the efficency of the module
        Cost: The cost multiplyer of the module
        OilProduces: The amount of oil each module produces
        Count: The amount already owned
    */

    /* Things to do:
     Add a descripition field to the modules and display that in the html
     Don't allow a module to be bought unless they have enough energy
     Don't allow a module to be bought unless they have enough population
     Start taking into account OilProduces and add that the the $scope.Progress
     Refactor Eneregypersecond
    */

    $rootScope.modulesOwned = []


    $rootScope.Progress = {
        Energy: 0,
        MaxEnergy: 10,
        EnergyPS: 0,
        Population: 0,

    }

    $rootScope.Modules = [{
        Name: "Power Plant",
        Cost: 1,
        EnergyPS: 1,
        Count: 0,
    }, {
        Name: "Solar Field",
        Cost: 1.2,
        PopRequirement: 10,
        OilProduces: 1,
        Count: 0,
    }, {
        Name: "Nuclear Generator",
        EnergyPS: 100,
        Count: 0,
    }]
    


    //$scope.Cats = Many cats
    //$scope.Buy(cat) 

    $scope.EditModule = function(oldValue, newValue) {
        for (var i = 0; i < $rootScope.Modules.length; i++) {
            if ($rootScope.Modules[i].Name == oldValue.Name) {
                $rootScope.Modules[i] = newValue
            }
        }

        for (var i = 0; i < $scope.modulesOwned.length; i++) {
            if ($rootScope.modulesOwned[i].Name == oldValue.Name) {
                $rootScope.modulesOwned = newValue
            }
        }

    }

    $scope.Buy = function(module) {
        module.Count += 1;
        $rootScope.Progress.EnergyPS += module.EnergyPS;
        $rootScope.Progress.Population -= module.PopRequirement;
        $rootScope.Progress.Energy -= module.Cost;

        $rootScope.modulesOwned.push(module);
    }

    $scope.addEnergy = function addEnergy() {
        if ($rootScope.Progress.Energy < $rootScope.Progress.MaxEnergy) {
            $rootScope.Progress.Energy += 1;
        }

    };

    /*$scope.buyPowerPlant = function buyPowerPlant() {
        $scope.powerPlantCount += 1;
        $scope.EnergyPS += $scope.powerPlantEff;
        $scope.addEnergyPSLoop();

    }; */

    $rootScope.addEnergyPSLoop = function addEnergyPSLoop() {
        $interval(function() {
            $rootScope.addEnergyPS();
        }, 1000);

    };

    $rootScope.addEnergyPSLoop()


    $rootScope.addEnergyPS = function addEnergyPS() {


        //TODO: Refactor this method
        
        var amountAdded = $rootScope.Progress.EnergyPS 
        while(($rootScope.Progress.Energy < $rootScope.Progress.MaxEnergy) && (amountAdded > 0)){
            $rootScope.Progress.Energy++
            amountAdded--
        }
        
    }

});
