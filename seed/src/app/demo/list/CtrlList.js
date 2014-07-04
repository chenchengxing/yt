/**
 * CtrlList.js 
 * @description List控制器
 */
define([
  'app',
  '../../_services/Car'
], function (app) {

  app.registerController('CtrlList', [
    '$scope',
    'Car',
    function ($scope, Car) {

      //获取汽车列表
      Car.getList().success(function (response) {
        if (response.code === 200){
          $scope.carList = response.data;
        }
      });
      //删除一行
      $scope.remove = function (index) {
        $scope.carList.splice(index, 1);
      };

    }
  ]);

});