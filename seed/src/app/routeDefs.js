/**
 * [description] this module require `app` to be loaded
 */
define(['app'], function (app) {
/**
  * register `routeDefs`
  *
 */
app.registerProvider( 'routeDefs', [
  '$stateProvider',
  '$urlRouterProvider',
  '$couchPotatoProvider',
  'STATIC_DIR',
  function (
    $stateProvider,
    $urlRouterProvider,
    $couchPotatoProvider,
    STATIC_DIR
  ) {

    this.$get = function () {
      // this is a config-time-only provider
      // in a future sample it will expose runtime information to the app
      return {};
    };
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('demo');

    var baseUrl = STATIC_DIR + "app/";
    var headerConfig = {
      templateUrl: baseUrl + '_common/header/header.tpl.html',
      controller: 'CtrlHeader',
      resolve: {
        ctrl: $couchPotatoProvider.resolveDependencies(['_common/header/CtrlHeader'])
      }
    };
    var footerConfig = {
      templateUrl: baseUrl + '_common/footer/footer.tpl.html'
    };
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
    /**
     * [url description] home
     * @type {String}
     */
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'body': {
          templateUrl: baseUrl + 'home/home.tpl.html',
          controller: 'CtrlHome',
          resolve: {
            ctrl: $couchPotatoProvider.resolveDependencies(['home/CtrlHome'])
          }
        },
        header: headerConfig,
        footer: footerConfig
      }
    });
    $stateProvider.state('demo', {
            url: '/demo',
            views: {
              'leftNav' : {
                templateUrl: baseUrl + 'demo/leftNav.tpl.html'
              },
              'body' : {
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
              'demoContainer' : {
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
              'demoContainer' : {
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
              'demoContainer' : {
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