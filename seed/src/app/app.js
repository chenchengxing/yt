/**
 * app.js,定义app模块
 * @author wujun,ccx
 */
define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-ui-bootstrap',
  'angular-loading-bar',
], function (angular, couchPotato) {

  //定义angular模块
  var app = angular.module('app', ['scs.couch-potato', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'chieffancypants.loadingBar']);

  //couchPotato托管app，负责lazyload
  couchPotato.configureApp(app);

  /**
   * 通常定义全局的service，如登录用户、外部环境等
   * @description 可以针对dev和真实环境做hack处理
   * @example
    
   */
  //get context
  if ( window.GCRM && window.GCRM.constants ) {
    app.constant('APP_CONTEXT', window.GCRM.constants.CONTEXT);
    app.constant('STATIC_DIR', '/gcrm-front/resources/');
  } else {
    //for de
    app.constant('APP_CONTEXT', '/gcrm-front/');
    app.constant('STATIC_DIR', '');
    app.constant('CURRENT_USER_NAME', '');
  }
  
  return app;
});