/**
 * Created by ASUS on 2017/2/19.
 */
(function(){
  angular.module("directive",[])
    .directive("closeTabs",["$rootScope",function($rootScope){
      return {
        restrict:"A",
        link:function(scope,element,attribute){
          scope.$on("$ionicView.beforeEnter",function(){
            scope.$watch(attribute.closeTabs,function(value){
              $rootScope.closeTab = value;
              console.log(value);
            })
          });
          scope.$on("$ionicView.leave",function(){
            $rootScope.closeTab = false;
          });
        }
      }
    }])
    .directive("backButton",function($ionicHistory){
      return {
        restrict:"AE",
        replace:true,
        template:"<button class='button button-clear ion-chevron-left white' nav-direction='forword'></button>",
        link:function(scope,ele,attr){
          ele.bind('click',function(e){
            $ionicHistory.goBack();
          });
        }
      }
    });
})();
