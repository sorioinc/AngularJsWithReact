import angular from 'angular'
// import reactDirective from './src/angular/reactDirective'

const  app = angular.module('app', []);
app.controller('FilipCtrl', function($scope) {
  $scope.data = '';

  $scope.dataUpdater = function(data) {
    $scope.safeApply(() => {
      $scope.data = JSON.stringify(data);
    });
  };

  $scope.safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest') {
      if(fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };
})


export default app;