var app = angular.module("app")

app.factory("ModuleFactory", function($rootScope){
     
     var Buy = function(module){
         
        module.Cost.Oil = module.Cost.Oil || 0;
        module.Cost.Energy = module.Cost.Energy || 0;
        module.Cost.Money = module.Cost.Money || 0;
        
        module.CostPS.Oil = module.CostPS.Oil || 0;
        module.CostPS.Energy = module.CostPS.Energy || 0;
        module.CostPS.Money = module.CostPS.Money || 0;
        
        module.Produces.Oil = module.Produces.Oil || 0;
        module.Produces.Energy = module.Produces.Energy || 0;
        module.Produces.Money = module.Produces.Money || 0;
        

        if((module.Cost.Energy && $rootScope.Progress.Energy < module.Cost.Energy) || (module.Cost.Oil && $rootScope.Progress.Oil < module.Cost.Oil) || (module.Cost.Money && $rootScope.Progress.Money < module.Cost.Money)){
            //They don't have enough energy to buy the module
            return;
        }
        

        
        $rootScope.Progress.NegEnergyPS += module.CostPS.Energy;
        $rootScope.Progress.NegOilPS += module.CostPS.Oil;
        $rootScope.Progress.NegMoneyPS += module.CostPS.Money;
        
        module.Count += 1;
        
        $rootScope.Progress.EnergyPS += module.Produces.Energy;
        $rootScope.Progress.MoneyPS += module.Produces.Money;
        $rootScope.Progress.OilPS += module.Produces.Oil;
        
        
        $rootScope.Progress.Population -= module.PopRequirement;
        
        $rootScope.Progress.Energy -= module.Cost.Energy;
        $rootScope.Progress.Money -= module.Cost.Money;
        $rootScope.Progress.Oil -= module.Cost.Oil;
        


        $rootScope.ModulesOwned.push(module);
     };
     
     
     return {
         Buy: Buy
     };
})