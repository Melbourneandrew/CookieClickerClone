var app = angular.module("app", ['ui.router']);

app.run(function($rootScope, SaveFactory, LoopFactory){

    
    /* Fields for module can include
        Name: The name of the module
        PopRequirment: The population subtracted by the module
        EnergyPS: the efficency of the module
        Cost: The cost multiplyer of the module
        OilPS: The amount of oil each module produces
        MoneyPS: The amoun of money it produces
        Count: The amount already owned
        Description: descripition
    */
    
      $rootScope.Modules = [{
            Name: "Power Plant",
            PopRequirement: 1,
            EnergyPS: 2,
            OilPS: 0,
            MoneyPS: 0,
            MoneyCost: 0,
            EnergyCost: 1,
            OilCost: 0,
            Count: 0,
            Description: "Not Photosynthetic",
            Category: "energy",
        }, {
            Name: "Solar Field",
            PopRequirement: 5,
            EnergyPS: 5,
            OilPS: 0,
            MoneyPS: 0,
            MoneyCost: 0,
            EnergyCost: 1,
            OilCost: 0,
            Count: 0,
            Description: "Sun bathing, for energy",
            Category: "energy",
        }, {
            Name: "Nuclear Generator",
            PopRequirement: 15,
            EnergyPS: 100,
            OilPS: 0,
            MoneyPS: 0,
            MoneyCost: 0,
            EnergyCost: 1,
            OilCost: 0,
            OilProduces: 0,
            Count: 0,
            Description: "It has been 1 days sence total reactor melt down",
            Category: "energy",
        }, 
        {
            Name: "Printer",
            PopRequirement: 1,
            EnergyPS: 0,
            OilPS: 0,
            MoneyPS: 1,
            MoneyCost: 1,
            EnergyCost: 0,
            OilCost: 0,
            Count: 0,
            Description: "Don't get caught",
            Category: "money"
        },
        {
            Name: "Oil Rig",
            PopRequirement: 1,
            EnergyPS: 0,
            OilPS: 1,
            MoneyPS: 0,
            MoneyCost: 0,
            EnergyCost: 0,
            OilCost: 1,
            Count: 0,
            Description: "Don't worry about spilling it all",
            Category: "oil"
            
        }
        
        ];
        
        $rootScope.ModulesOwned = [];
        
        
        SaveFactory.Load();
        SaveFactory.SaveLoop();
        LoopFactory.Load();
        
})