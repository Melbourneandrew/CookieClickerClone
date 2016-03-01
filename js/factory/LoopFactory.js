var app = angular.module("app")


app.factory("LoopFactory", function($rootScope, $interval){
    
    var loaded = false;
    
    var load = function(){
        if(!loaded){
            $interval(function() {
                    $rootScope.Progress.Energy = addResource($rootScope.Progress.EnergyPS, $rootScope.Progress.Energy, $rootScope.Progress.MaxEnergy);
                    $rootScope.Progress.Oil = addResource($rootScope.Progress.OilPS, $rootScope.Progress.Oil, $rootScope.Progress.MaxOil);
                    $rootScope.Progress.Money = addResource($rootScope.Progress.MoneyPS, $rootScope.Progress.Money, $rootScope.Progress.MaxMoney);
            }, 1000);
        }
    };
    
    var addResource = function(times, current, max){
        
        //TODO: Refactor this method
        
        //Make sure to round number to nearest whole number
        var amountAdded = Math.round(times);
        
        while((current < max) && (amountAdded > 0)){
            current++;
            amountAdded--;
        }
        
        //Make sure to round the energy to the nearest whole number
        current = Math.round(current);
        
        return current;
    };
    
    return {
        Load: load
    };
    
})