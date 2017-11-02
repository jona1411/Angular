var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = ["Cheese", "Wheat"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    };

    $scope.removeItem = function (x) {
        $scope.products.splice(x,1);
    };

    var bolognese = ["Tomato","Spaghetti"];

    $scope.addRecipe = function() {
        $scope.products = $scope.products.concat(bolognese);
    };
});

