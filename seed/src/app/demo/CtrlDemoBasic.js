define([
       'app'
       ], function ( app ) {
  app.registerController( 'CtrlDemoBasic', [ '$scope', function ( $scope ) {
    $scope.name = 'hehhe';
  }]);
});