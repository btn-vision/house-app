angular
  .module('vision')
  .config(config);

function config($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'src/views/main.html',
      controller: 'Main',
      controllerAs: 'main'
    }).otherwise({
      redirectTo: '/home'
    });
    
};
