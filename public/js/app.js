angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
console.log('working');
  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: './mainTmpl.html',
    controller: 'mainCtrl'
  })

  .state('admin', {
    url:'/admin',
    templateUrl: './adminTmpl.html',
    controller: 'adminCtrl'
  });


	$urlRouterProvider.otherwise('/main');


});
