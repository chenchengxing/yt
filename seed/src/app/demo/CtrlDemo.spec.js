define(['angular', 'angular-mock', './CtrlDemo'], function (angular, couchPotato) {

  describe('xxx', function () {
    // body...
    beforeEach(function (argument) {
      // angular.module('app', ['scs.couch-potato', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'chieffancypants.loadingBar', 'app-templates'])
      module('app');
    });
    var MainCtrl, scope;

      // Initialize the controller and a mock scope
      beforeEach(
          inject(function ($rootScope, $controller) {
          // $couchPotatoProvider.resolveDependencies(['demo/CtrlDemo']);
          scope = $rootScope.$new();
          MainCtrl = $controller('CtrlDemo', { $scope:scope });
      }));

      it('should attach a list of awesomeThings to the scope', function () {
          expect(scope.name).toBe( "Demo Name" );
          expect(scope.ccx).toBeUndefined();
          expect(scope.ccx2).toBe( "" );
      });

      it('should expect awesome things to have require JS', function() {
          expect(true).toBeTruthy();
      });
  });


});