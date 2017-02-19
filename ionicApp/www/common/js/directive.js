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
    }]);
})();
