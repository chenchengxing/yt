/**
 * CtrlAdd.js 
 * @description Add控制器
 */
define([
  'app',
  '../../_services/Car'
], function (app) {

  app.registerController('CtrlAdd', [
    '$scope',
    '$stateParams',
    'Car',
    function ($scope, $stateParams, Car) {
      //if id specify,continue
      if ($stateParams.id){
        //get car info according to id
        Car.get({
          id: $stateParams.id
        }).success(function (response) {
          if (response.code === 200){
            $scope.car = response.data;
          }
        });
        
      }
    }
  ]);

});