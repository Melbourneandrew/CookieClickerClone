var app = angular.module("app")

app.factory("ModuleFactory", function($rootScope){
     
     var Buy = function(module){
        if((module.EnergyCost && $rootScope.Progress.Energy < module.EnergyCost) || (module.OilCost && $rootScope.Progress.Oil < module.OilCost) || (module.MoneyCost && $rootScope.Progress.Money < module.MoneyCost)){
            //They don't have enough energy to buy the module
            return;
        }
        
        module.Count += 1;
        $rootScope.Progress.EnergyPS += module.EnergyPS;
        $rootScope.Progress.MoneyPS += module.MoneyPS;
        $rootScope.Progress.OilPS += module.OilPS;
        $rootScope.Progress.Population -= module.PopRequirement;
        
        $rootScope.Progress.Energy -= module.EnergyCost;
        $rootScope.Progress.Oil -= module.OilCost;
        $rootScope.Progress.Money -= module.MoneyCost;
        


        $rootScope.ModulesOwned.push(module);
     };
     
     
     return {
         Buy: Buy
     };
})