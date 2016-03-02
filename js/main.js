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
    
    
    /*
        CostPS: {
            Oil:1
            
            
        },
        Cost: {
            Oil: 1
        }
        
        OilCost
        OilCostPS
    */
    
      $rootScope.Modules = [{
            Name: "Power Plant",
            PopRequirement: 1,
            Cost: {
                Money: 1
            },
            CostPS: {
                Oil: 1
            },
            Produces: {
                Energy: 1
            },
            Count: 0,
            Description: "Not Photosynthetic",
            Category: "energy",
        }, {
            Name: "Solar Field",
            PopRequirement: 5,
            Cost: {
                Energy: 1
            },
            CostPS: {

            },
            Produces: {
                Energy: 5
            },
            Count: 0,
            Description: "Sun bathing, for energy",
            Category: "energy",
        }, {
            Name: "Nuclear Generator",
            PopRequirement: 15,
            Cost: {
                Energy: 500
            },
            CostPS: {
                Money: 10
            },
            Produces: {
                Energy: 50
            },
            Count: 0,
            Description: "It has been 1 days since total reactor melt down",
            Category: "energy",
        }, 
        {
            Name: "Printer",
            PopRequirement: 1,
            Cost: {
                Money: 1
            },
            CostPS: {
                Energy: 1
            },
            Produces: {
                Money: 1
            },
            Count: 0,
            Description: "Don't get caught",
            Category: "money"
        },
        {
            Name: "Bank",
            PopRequirement: 1,
            Cost: {
                Money: 1
            },
            CostPS: {
                
            },
            Produces: {
                Money: 10
            },
            Count: 0,
            Description: "Lehman Brothers joke",
            Category: "money"
        },
        {
            Name: "Oil Rig",
            PopRequirement: 1,
            Cost: {
                Oil: 1
            },
            CostPS: {
                Energy: 10,
                Money: 5,
            },
            Produces: {
                Oil: 10
            },
            Count: 0,
            Description: "Don't worry about spilling it all",
            Category: "oil"
            
        },
        {
            Name: "Fracking Operation",
            PopRequirement: 1,
            Cost: {
                Money: 20
            },
            CostPS: {
                Energy: 3,
                Money: 5,
            },
            Produces: {
                Oil: 1
            },
            Count: 0,
            Description: "Who needs a clean water table?",
            Category: "oil"
            
        }
        
        ];
        
        
        SaveFactory.Load();
        SaveFactory.SaveLoop();
        LoopFactory.Load();
        
})

function HackIt(){
    var scope = angular.element(document.getElementsByClassName("navBar")[0]).scope()
    
    scope.$root.Progress.MaxEnergy = 10000
    scope.$root.Progress.MaxMoney = 10000
    scope.$root.Progress.MaxOil = 10000
    
        
    scope.$root.Progress.Energy = 10000
    scope.$root.Progress.Money = 10000
    scope.$root.Progress.Oil = 10000


}