angular.module('app')
.service('productsService', function( $http ) {

    this.getProducts = function() {
      console.log('get');
      return $http({
        method: 'GET',
        url: '/products',
      }).then(function(response){
        console.log(response);
        return response.data;
      });
    };

this.createProduct = function(createTitle, createImg, createPrice){
  return $http({
    method: 'POST',
    url: '/products',
    data: {
      title: createTitle,
      price: createPrice,
      img: createImg
    }
  });
};

this.remove = function(id) {
  return $http({
    method: 'DELETE',
    url: '/products/' + id ,
}).then(function(response){
  return response.data;
});
};


this.editSubmit = function(id, editTitle, editImg, editPrice){
  return $http({
    method: 'PUT',
    url: '/products/' + id,
    data: {
      title: editTitle,
      price: editPrice,
      img: editImg
    }
  });
};






});
