// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','homeCtrl','investCtrl','moreCtrl','myCtrl','huchi'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
  .config(["$ionicConfigProvider","$stateProvider","$urlRouterProvider",function($ionicConfigProvider,$stateProvider,$urlRouterProvider){
    /*
    * 关于Android的导航在上面的问题
    * */
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    /*
    * 页面状态路由的设置
    * */
    $urlRouterProvider.otherwise("/tabs/home");
    $stateProvider
      .state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"/tabs.html"
      })
      .state("tabs.home",{
        url:"/home",
        views:{
          "home":{
            templateUrl:"Home/home.html",
            controller:"homeCtrl"
          }
        }
      })
      .state("tabs.huchi",{
        url:"/huchi",
        views:{
          "home":{
            templateUrl:"Huchi/huchi.html",
            controller:"huchiCtrl"
          }
        }
      })
      .state("tabs.invest",{
        url:"/invest",
        views:{
          "invest":{
            templateUrl:"/Invest/invest.html",
            controller:"investCtrl"
          }
        }
      })
      .state("tabs.more",{
        url:"/more",
        views:{
          "more":{
            templateUrl:"/More/more.html",
            controller:"moreCtrl"
          }
        }
      })
      .state("tabs.myMessage",{
        url:"/myMessage",
        views:{
          "myMessage":{
            templateUrl:"/MyMessage/myMessage.html",
            controller:"myCtrl"
          }
        }
      })
  }]);
