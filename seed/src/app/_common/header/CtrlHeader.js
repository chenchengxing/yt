define([
  'app',
  '../../_services/http/Task'
], function ( app ) {

  app.registerController('CtrlHeader', [
    '$scope',
    '$rootScope',
    '$state',
    '$filter',
    'PageSet',
    'Task',
    'Modal',
  function ($scope, $rootScope, $state, $filter, PageSet, Task, Modal) {

    $rootScope.activeIndex = -1;
    $rootScope.breadcrumb = [];
    PageSet.setHeadNavs();

    var stateMap = {
      approval: 'task.facade.approval',
      schedule: 'task.facade.schedule',
      quote: 'task.facade.benchmarkPriceApproval',
      material: 'task.facade.materialApproval',
      customer: 'task.facade.customerApproval'
    };
    $rootScope.myTaskCount = $rootScope.myTaskCount || 0;
    Task.toDoCount({}).success(function (response) {
      if ( response.data.count ) {
        $rootScope.myTaskCount = response.data.count;
        $rootScope.myFirstTask = response.data.firstAct;
      }
    });

    $scope.goFirstMyTask = function () {
      goFirst();
      // Task.toDoCount({}).success(function (response) {
      //   $rootScope.myTaskCount = response.data.count;
      //   if ( response.data && response.data.firstAct ) {
      //     var firstTask = response.data.firstAct;
      //     var state = stateMap[firstTask.subtype],
      //         stateParams = {};

      //     stateParams[firstTask.foreignName] = firstTask.foreignKey;
      //     stateParams.activityId = firstTask.activityId;
      //     //排期、客户审核需要processId
      //     stateParams.processId = firstTask.processId;
      //     $state.go(state, stateParams);
      //   } else {
      //     $state.go('task.facade.noTask');
      //   }
      // });
    };

    $scope.changePsw = function () {
      var alertCotent =  $filter('translate')('CHANGE_PSW_ALERT') + '<div class="mt5"><a href="mailto:"gongyao@baidu.com">gongyao@baidu.com</a>, <a href="mailto:liuxiao06@baidu.com">liuxiao06@baidu.com</a></div>';
      Modal.alert( { content: alertCotent, ngClass: 'modal-lg' } );
    };

    function goFirst () {
       var state = 'task.facade.noTask',
           stateParams = {},
           firstTask = $rootScope.myFirstTask;
        if ( firstTask && firstTask.subtype in stateMap ) {
          state = stateMap[firstTask.subtype];
          stateParams[firstTask.foreignName] = firstTask.foreignKey;
          stateParams.activityId = firstTask.activityId;
          //排期、客户审核需要processId
          stateParams.processId = firstTask.processId;
        }
        $state.go(state, stateParams);
    }

  }]);
});