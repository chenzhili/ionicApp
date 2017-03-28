// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','home','invest','ours','more'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(["$urlRouterProvider","$stateProvider","$ionicConfigProvider",function($urlRouterProvider,$stateProvider,$ionicConfigProvider){
    /*对于ionic在Android的tabs默认显示在上面的配置文件的修改*/
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.backButton.icon('ion-ios-arrow-left');
  $ionicConfigProvider.views.maxCache(0);
  $ionicConfigProvider.views.swipeBackEnabled(false);
  $ionicConfigProvider.scrolling.jsScrolling(true);

  /*路由配置*/
  $stateProvider
    .state("tabs",{
      url:"/tabs",
      templateUrl:"tabs.html",
      abstract:true,
      cache:false
    })
    .state("tabs.home",{
      url:"/home",
      views:{
        "home":{
          templateUrl:"template/home.html",
          controller:"homeCtrl",
          cache:false
        }
      }
    })

    .state("tabs.invest",{
      url:"/invest",
      views:{
        "invest":{
          templateUrl:"template/invest.html",
          controller:"investCtrl",
          cache:false
        }
      }
    })

    .state("tabs.ours",{
      url:"/ours",
      views:{
        "ours":{
          templateUrl:"template/ours.html",
          controller:"oursCtrl",
          cache:false
        }
      }
    })

    .state("tabs.more",{
      url:"/more",
      views:{
        "more":{
          templateUrl:"template/more.html",
          controller:"moreCtrl",
          cache:false
        }
      }
    })

  $urlRouterProvider.otherwise("/tabs/home");
}]);
