var app = angular.module("app")

app.factory("SaveFactory", function($rootScope, $interval){
    
    var loaded = false; 
    var load = function(){
        if(loaded){
            return;
        }
        loaded = true;
        
        var progress = sessionStorage.getItem("progress");
        
        progress = JSON.parse(progress) ;
        
        
        $rootScope.ModulesOwned = [];
        
        
        if(!progress) {
         $rootScope.Progress = {
            Energy: 0,
            Oil: 0,
            Money: 0,
            Population: 0,
            MaxEnergy: 500,
            MaxOil: 100,
            EnergyPS: 0,
            MoneyPS: 0,
            OilPS: 0,
            NegEnergyPS: 0,
            NegOilPS: 0,
            NegMoneyPS: 0,
            ModulesOwned: []
         };
         
         
         return;
        }
        
        $rootScope.Progress = progress;
        

        for(var i = 0; i<$rootScope.Progress.ModulesOwned.length; i++){
            for(var j = 0; j<$rootScope.Modules.length; j++){
                if($rootScope.Progress.ModulesOwned[i].Name == $rootScope.Modules[j].Name){
                    $rootScope.ModulesOwned.push($rootScope.Modules[j]);
                    $rootScope.Modules[j].Count = $rootScope.Progress.ModulesOwned[i].Count;
                }
            }
        }    
        

        delete $rootScope.Progress.ModulesOwned;
    };
    
    var save = function(){
         
        $rootScope.Progress.ModulesOwned = [];
        for(var i = 0; i<$rootScope.Modules.length; i++){
          if($rootScope.Modules[i].Count){
              //The user owns the module
              $rootScope.Progress.ModulesOwned.push({Name: $rootScope.Modules[i].Name, Count: $rootScope.Modules[i].Count});
          }
        } 
        
        //save 
        sessionStorage.setItem("progress", JSON.stringify($rootScope.Progress));
        
    };
    
    
    var saveLoop = function(){
           $interval(function() {
                save();
            }, 30000);
    };
    
    
    return {
        Load: load,
        SaveLoop: saveLoop
    };
    
})