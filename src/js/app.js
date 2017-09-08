angular.module('ClockChimes', [
  'ngRoute',
  'mobile-angular-ui',
  'ClockChimes.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});