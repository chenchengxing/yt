/**
 * routeDefs.js 路由定义
 * @description 该app为SPA，single page application
 * 路由完全有前端控制，此处配置**路由**
 */
define(['app'], function(app) {
  /**
   * register `routeDefs`
   *
   */
  app.registerProvider('routeDefs', [
    '$stateProvider',
    '$urlRouterProvider',
    '$couchPotatoProvider',
    'STATIC_DIR',
    function(
      $stateProvider,
      $urlRouterProvider,
      $couchPotatoProvider,
      STATIC_DIR
    ) {

      this.$get = function() {
        // this is a config-time-only provider
        // in a future sample it will expose runtime information to the app
        return {};
      };
      // $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise('home');


      var baseUrl = STATIC_DIR + "app/";
      var headerConfig = {
        templateUrl: baseUrl + '_common/header/header.tpl.html'
      };
      var footerConfig = {
        templateUrl: baseUrl + '_common/footer/footer.tpl.html'
      };
      // Home
      $stateProvider.state('home', {
        url: '/home',
        views: {
          'body': {
            templateUrl: baseUrl + 'home/home.tpl.html',
          },
          header: headerConfig,
          footer: footerConfig
        }
      });
      // List
      $stateProvider.state('list', {
        url: '/list',
        views: {
          'body': {
            templateUrl: baseUrl + 'demo/list/list.tpl.html',
            controller: 'CtrlList',
            resolve: {
              ctrl: $couchPotatoProvider.resolveDependencies(['demo/list/CtrlList'])
            }
          },
          header: headerConfig,
          footer: footerConfig
        }
      });
      // Detail
      $stateProvider.state('detail', {
        url: '/detail?id',
        views: {
          'body': {
            templateUrl: baseUrl + 'demo/detail/detail.tpl.html',
            controller: 'CtrlDetail',
            resolve: {
              ctrl: $couchPotatoProvider.resolveDependencies(['demo/detail/CtrlDetail'])
            }
          },
          header: headerConfig,
          footer: footerConfig
        }
      });
      // Add
      $stateProvider.state('add', {
        url: '/add',
        views: {
          'body': {
            templateUrl: baseUrl + 'demo/add/add.tpl.html',
            controller: 'CtrlAdd',
            resolve: {
              ctrl: $couchPotatoProvider.resolveDependencies(['demo/add/CtrlAdd'])
            }
          },
          header: headerConfig,
          footer: footerConfig
        }
      });
      /**
       * [url description] home temp
       * @type {String}
       */
      $stateProvider.state('temp', {
        url: '/temp',
        views: {
          'body': {
            templateUrl: baseUrl + 'home/temp.tpl.html'
          }
        }
      });
      
      $stateProvider.state('demo', {
        url: '/demo',
        views: {
          'leftNav': {
            templateUrl: baseUrl + 'demo/leftNav.tpl.html'
          },
          'body': {
            templateUrl: baseUrl + 'demo/demo.tpl.html',
            controller: 'CtrlDemo'
          }
        },
        resolve: {
          dummy: $couchPotatoProvider.resolveDependencies(['demo/CtrlDemo'])
        }
      })
        .state('demo.http', {
          url: '/http',
          views: {
            'demoContainer': {
              templateUrl: baseUrl + 'demo/demo.http.tpl.html',
              controller: 'CtrlDemoHttp'
            }
          },
          resolve: {
            dummy: $couchPotatoProvider.resolveDependencies(['demo/CtrlDemoHttp'])
          }
        })
        .state('demo.form', {
          url: '/form',
          views: {
            'demoContainer': {
              templateUrl: baseUrl + 'demo/demo.form.tpl.html',
              controller: 'CtrlDemoForm'
            }
          },
          resolve: {
            dummy: $couchPotatoProvider.resolveDependencies(['demo/CtrlDemoForm'])
          }
        })
        .state('demo.inputText', {
          url: '/inputText',
          views: {
            'demoContainer': {
              templateUrl: baseUrl + 'demo/demo.inputText.tpl.html',
              controller: 'CtrlDemoInputText'
            }
          },
          resolve: {
            dummy: $couchPotatoProvider.resolveDependencies(['demo/CtrlDemoInputText'])
          }
        });
      angular.noop(); //do not remove this line,grunt tool use this to do reg match.
    }
  ]);
  //end for define
});