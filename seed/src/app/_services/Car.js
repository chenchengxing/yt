/**
 * Car.js 
 * @description Car Service
 */
define([
  'app'
], function (app) {

  app.registerService('Car', [
    '$http',
    function ($http) {
      return {
        /**
         * get car list
         * @return {Promise} carList promise
         */
        getList: function () {
          return $http.get('data/carList.djson');
        },
        /**
         * get car according to id
         * @param  {Object} paramObj must specify id
         * @example
         * {
         *   id: 1
         * }
         * @return {Promise}       
         */
        get: function (paramObj) {
          return $http.get('data/car.djson');
        }
      };
    }
  ]);

});