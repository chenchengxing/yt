/**
 * main.js 入口js
 * @description 
 * @more 为什么会有这种情况？什么还有入口，相信很多后端选手都没有这个概念，他们从来不需要关心main函数的东西。但web不一样，web是先去加载html，渲染完成之后加载js，然后js才能托管整个app
 */

//baseUrl fetch
var cssMapPath = '';
var baseUrl = '../resources/app';
if ( window.GCRM && window.GCRM.constants ) {
  cssMapPath = window.GCRM.constants.CONTEXT;
} else {
  baseUrl = './app';
}

//requirejs config 
var configObj = {
  waitSeconds : 0,
  urlArgs: "v=20140630694",
  baseUrl: baseUrl,
  paths: {
    'angular'               : '../../vendor/angular/angular',
    'angular-ui-router'     : '../../vendor/angular-ui-router/release/angular-ui-router',
    'angular-couch-potato'  : '../../vendor/angular-couch-potato/dist/angular-couch-potato',
    'angular-ui-bootstrap'  : '../../vendor/angular-bootstrap/ui-bootstrap-tpls',
    'angular-loading-bar'   : '../../vendor/angular-loading-bar/build/loading-bar',
    'jquery'                : '../../vendor/jquery/jquery'
  },
  shim: {
    'angular': {
      exports   : 'angular',
      deps : ['jquery']
    },
    'angular-couch-potato': {
      deps :['angular']
    },
    'angular-ui-router': {
      deps      : ['angular']
    },
    'angular-ui-bootstrap' : {
      deps      : ['angular']
    },
    'angular-loading-bar': {
      deps      : ['angular']
    },
  }
};
require.config(configObj);

// run is required to force the app to run, not because we need to interact
// with it.  Anything required here will by default be combined/minified by
// r.js if you use it.
require(['app', 'angular', 'app-init'], function(app, angular) {

  angular.element(document).ready(function() {

    angular.bootstrap(document, [app['name'], function() {

      // for good measure, put ng-app on the html element
      // studiously avoiding jQuery because angularjs.org says we shouldn't
      // use it.  In real life, there are a ton of reasons to use it.
      // karma likes to have ng-app on the html element when using requirejs.
      angular.element(document).find('html').addClass('ng-app');

    }]);

  });

});