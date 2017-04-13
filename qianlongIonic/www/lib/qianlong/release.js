// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','home','invest','ours','more'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  	//用于判断当前的移动设备是哪一个
    console.log($ionicPlatform.is("Android"));
    console.log($ionicPlatform.is("IOS")); 
    //用于判断当前是pc还是移动设备或则其他
        function browserRedirect() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            console.log("您的浏览设备为：");
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                console.log("phone");
            } else {
                console.log("pc");
            }
        }

        browserRedirect();




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

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("HomeCtrl",[])
  .controller("homeCtrl",["$scope",function($scope){
    /*初始化数据*/
    $scope.home={
      content:["p2p的新奇","高利率高回报高风险","今天反馈大力赠送"],
      noticeState:1,
      yueYue:[{
        date:"20160619",
        rate:8,
        planMoney:20,
        day:30
      },{
        date:"20161219",
        rate:6,
        planMoney:70,
        day:30
      },{
        date:"20170219",
        rate:8,
        planMoney:100,
        day:30
      }]
    };
    $scope.closeNotic = closeNotic;
    init();
    function closeNotic(){
      $scope.home.noticeState =0;
    }
    function init(){
      $(document).ready(function(){
        var homeSwiper = new Swiper(".home_banner",{
          direction:"horizontal",
          loop:true,
          autoplay:1800,
          pagination:".swiper-pagination"
        });
        var homeAdvSwiper = new Swiper(".home_adv",{
          direction:"vertical",
          loop:true,
          autoplay:2000,
          observer:true
        });
        var homePlanSwiper = new Swiper(".plan_message",{
          direction:"horizontal",
          loop:true,
          pagination:".swiper-pagination"
        });
      });
      /*下面这种方式是swiper里自带的解决不作用，会观察是否改变而初始化swiper*/
        /*var homeSwiper = new Swiper(".home_banner",{
          direction:"horizontal",
          loop:true,
          autoplay:1800,
          pagination:".swiper-pagination",
          observer:true,  //修改Swiper自己或子元素时初始化Swiper
          //用于更多的时候是为了删除 swiper-slide页面而初始化页面的用途
          observeParents:true //修改Swiper的父元素时，自动初始化Swiper
        });
        var homeAdvSwiper = new Swiper(".home_adv",{
          direction:"vertical",
          loop:true,
          autoplay:2000,
          observer:true,  //修改Swiper自己或子元素时初始化Swiper
          observeParents:true //修改Swiper的父元素时，自动初始化Swiper
        });*/
    }
  }]);

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("home",["HomeCtrl"]);

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("InvestCtrl",[])
  .controller("investCtrl",["$scope","$sce",function($scope,$sce){

  	$scope.aa = $sce.trustAsResourceUrl("https://www.baidu.com");
  	$scope.html = $sce.trustAsHtml("<h1>试试行不行</h1>");

  }]);

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("invest",["InvestCtrl"]);

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("MoreCtrl",[])
  .controller("moreCtrl",["$scope",function($scope){

  }]);

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("more",["MoreCtrl"]);

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("OursCtrl",[])
  .controller("oursCtrl",["$scope",function($scope){

  }]);

/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("ours",["OursCtrl"]);
