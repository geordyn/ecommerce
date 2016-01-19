angular.module('app')
.controller('mainCtrl', function($scope, productsService, $location){

console.log('working');

$scope.getProducts = function(){
  console.log("mainCtrl");
  productsService.getProducts().then(function(response){
    console.log(response);
    $scope.products = response;
  });
};

$scope.getProducts();





});
