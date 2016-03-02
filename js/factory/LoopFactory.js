var app = angular.module("app")


app.factory("LoopFactory", function($rootScope, $interval){
    
    var loaded = false;
    
    var load = function(){
        if(!loaded){
            $interval(function() {
                     addResource();
                     
            }, 1000);
        }
    };
    
    
    /*
     $rootScope.Progress = {NegativeEnergy: 1, NegativeOil: 1, NegativeMoney: 1)
     
      
    */
    var addResource = function(){
        
        for(var i = 0; i<$rootScope.ModulesOwned.length; i++){
            var module = $rootScope.ModulesOwned[i];
            
            
            module.Cost.Oil = module.Cost.Oil || 0;
            module.Cost.Energy = module.Cost.Energy || 0;
            module.Cost.Money = module.Cost.Money || 0;
            
            module.CostPS.Oil = module.CostPS.Oil || 0;
            module.CostPS.Energy = module.CostPS.Energy || 0;
            module.CostPS.Money = module.CostPS.Money || 0;
             
            module.Produces.Oil = module.Produces.Oil || 0;
            module.Produces.Energy = module.Produces.Energy || 0;
            module.Produces.Money = module.Produces.Money || 0;
            
            
            if( ($rootScope.Progress.Energy - module.CostPS.Energy) < 0 || ($rootScope.Progress.Oil - module.CostPS.Oil) < 0 || ($rootScope.Progress.Money - module.CostPS.Money) < 0){
                break;
            }
            
            $rootScope.Progress.Energy -= module.CostPS.Energy;
            $rootScope.Progress.Money -= module.CostPS.Money;
            $rootScope.Progress.Oil -= module.CostPS.Oil;
            

            var amountAdded = Math.round(module.Produces.Energy); 
            while(($rootScope.Progress.Energy < $rootScope.Progress.MaxEnergy) && (amountAdded > 0)){
                $rootScope.Progress.Energy++; 
                amountAdded--; 
            }
        
            $rootScope.Progress.Money += module.Produces.Money;
            
            var amountAdded = Math.round(module.Produces.Oil); 
            while(($rootScope.Progress.Oil < $rootScope.Progress.MaxOil) && (amountAdded > 0)){
                $rootScope.Progress.Oil++; 
                amountAdded--; 
            }
           
            
        }
               

   
       
       
       /* //TODO: Refactor this method
        
        //Make sure to round number to nearest whole number
        var amountAdded = Math.round(times);
        
        while((current < max) && (amountAdded > 0)){
            current++;
            amountAdded--;
        }
        
        //Make sure to round the energy to the nearest whole number
        current = Math.round(current);
        
        return current;
        
        */
    };
    
    return {
        Load: load
    };
    
})