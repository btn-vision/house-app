angular
  .module('vision')
  .config(config);

function config($routeProvider){
  $routeProvider
    .when('/home', {
      templateUrl: 'src/views/post.html',
      controller: 'Main',
      controllerAs: 'main'
    }).when('/post', {
      templateUrl: 'src/views/post.html',
      controller: 'Main',
      controllerAs: 'main'
    }).otherwise({
      redirectTo: '/home'
    });

};
