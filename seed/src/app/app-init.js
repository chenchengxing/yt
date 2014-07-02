/**
 * app-init.js app的配置
 * 1.http请求的头部设定
 * 2.couchpatato设定
 */
define([
  'app',
  'routeDefs',
  'app-http-interceptor',
  './CtrlApp',
  './_common/ytCommon'
], function (app) {

  app.config(['routeDefsProvider', '$httpProvider',
    function(routeDefsProvider, $httpProvider ) {

      //GET header config
      $httpProvider.defaults.headers.get = $httpProvider.defaults.headers.get || {};
      $httpProvider.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
      $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';

      //POST header config
      $httpProvider.defaults.headers.post = {
          'Content-Type' : 'application/json; charset=UTF-8',
          'X-Requested-With':'XMLHttpRequest'
      };
    }
  ]);

  app.run(['$couchPotato', '$state', '$stateParams', '$rootScope',
    function($couchPotato, $state, $stateParams, $rootScope) {

      // by assigning the couchPotato service to the lazy property, we
      // the register functions will know to run-time-register components
      // instead of config-time-registering them.
      app.lazy = $couchPotato;

      // angular-ui-project recommends assigning these services to the root
      // scope.  Others have argued that doing so can lead to obscured
      // dependencies and that making services directly available to html and
      // directives is unclean.  In any case, the ui-router demo assumes these
      // are available in the DOM, therefore they should be on $rootScope.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]);

});