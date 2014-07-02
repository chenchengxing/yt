/**
 * CtrlApp.js 整个app的上层控制器
 * @description 处理整个app层面的事务
 */
define(['app'], function(app) {
  app.controller('CtrlApp', ['$scope',
    '$http',
    '$rootScope',
    '$timeout',
    '$location',
    '$anchorScroll',
    '$document',
    'APP_CONTEXT',
    '$window',
    'CURRENT_USER_NAME',
    '$q',
    function($scope, $http, $rootScope, $timeout, $translate, $location, $anchorScroll, $document, APP_CONTEXT, $window, CURRENT_USER_NAME, $q) {

      //rootscope中存储用户的信息
      $rootScope.CURRENT_USER_NAME = CURRENT_USER_NAME;
      //anchor处理
      $scope.anchorTo = function(anchor) {
        $location.hash(anchor);
        $anchorScroll();
      };

      //cookie设置
      function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ';path=/';
      }

    }
  ]);
});