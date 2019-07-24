module.controller("calcCtrl",calcCtrl)
module.controller("c2Ctrl",c2Ctrl)
module.controller("myNameCtrl",myNameCtrl)
module.controller("mobileCtrl",mobileCtrl)


function calcCtrl($scope, $rootScope){
    $rootScope.result = 0
    $scope.x = 0
    $scope.y = 0

    $scope.expression = "+"

    $scope.calcFunc =  function(){
        switch($scope.expression) { 
            case "+": { 
               $rootScope.result = parseInt($scope.x) + parseInt($scope.y) 
               break; 
            } 
            case "-": { 
                $rootScope.result = parseInt($scope.x) - parseInt($scope.y) 
                break; 
            } 
            case "*": { 
                $rootScope.result = parseInt($scope.x) * parseInt($scope.y) 
                break; 
            }
            case "/": { 
                $rootScope.result = parseInt($scope.x) / parseInt($scope.y) 
                break; 
            }
         } 
    }
}


function c2Ctrl($scope, $rootScope){
    $scope.encreaseFunc = function(){
        $rootScope.result--
    }
}

function myNameCtrl($scope, $rootScope){
    $scope.x = 0

    $scope.$watch('x', function(newX, old) {
        if(newX === "hadas"){
            alert("called me?....")
        }
    })
}

function mobileCtrl($scope, $rootScope){
    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]

    $scope.deleteMob = function(index){
        $scope.devices.splice(index,1)
    }
    $scope.addMob = function(_model,_color,_price){
        $scope.devices.push(new Mobile({model : _model, color: _color, price:_price }))
    }
    $scope.updateMob = function(index,_model,_color,_price){
        if( _model !== undefined){
            $scope.devices[index].model = _model
        }
        if(_color !== undefined){
            $scope.devices[index].color = _color
        }
        if(_price !== undefined){
            $scope.devices[index].price = _price
        }
    }

    $scope.getdisplyTemplate = function () {
         return 'display';
       };
       
    $scope.geteditTemplate = function () {
        return 'edit';
      };
}

    
class Mobile {
    constructor({model, color, price}) {
        this.model = model
        this.color = color
        this.price = price
    }
}



