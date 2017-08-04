(function(){
  var app = angular.module('carApp1', ['ngMaterial'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('indigo')
      .primaryPalette('indigo')
      .accentPalette('pink');

    $mdThemingProvider.theme('lime')
      .primaryPalette('lime')
      .accentPalette('orange')
      .warnPalette('blue');
    
    // This is the absolutely vital part, without this, changes will not cascade down through the DOM.
    $mdThemingProvider.alwaysWatchTheme(true);
  })
  .controller('demoController', function($scope){
      $scope.theme = 'lime';
      $scope.changeTheme = function() {
        $scope.theme = $scope.theme === 'indigo' ? 'lime' : 'indigo'; 
      };
  });
})();