var app = angular.module("app")

app.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {
    
        $urlRouterProvider.otherwise("/money");
        

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
            .state('energy', {
                url: "/energy",
                templateUrl: "/html/EnegryClickerPage.html",
                controller: "EnergyController",
            })
            .state('oil', {
                url: "/oil",
                templateUrl: "/html/OilClickerPage.html",
                controller: "OilController",
            })
            .state('population', {
                url: "/population",
                templateUrl: "/html/PopClickerPage.html",
                controller: "PopulationController",
            })
            .state('money', {
                url: "/money",
                templateUrl: "/html/MoneyClickerPage.html",
                controller: "MoneyController",
            });

} 
