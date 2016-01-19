angular.module('app')
.controller('adminCtrl', function($scope, productsService, $location){



  $scope.getProducts = function(){
    console.log("adminCtrl");
    productsService.getProducts().then(function(response){
      console.log(response);
      $scope.products = response;
    });
  };

  $scope.getProducts();


  $scope.createProduct = function(createTitle, createImg, createPrice){
    productsService.createProduct(createTitle, createImg, createPrice).then(function(response){
      $scope.getProducts();
      $scope.createTitle = null;
      $scope.createImg = null;
      $scope.createPrice = null;
    });
  };

  $scope.remove = function(id) {
    productsService.remove(id).then(function(){
      $scope.getProducts();
      alert('product deleted');
    });
  };



$scope.editSubmit = function(id, editTitle, editImg, editPrice){
  productsService.editSubmit(id, editTitle, editImg, editPrice).then(function(){
    $scope.getProducts();
    $scope.editInfo = true;
    alert('product updated');

  });

};









});
