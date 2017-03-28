/**
 * Created by ASUS on 2017/1/12.
 */
angular.module("homeCtrl",[])
  .controller("homeCtrl",["$scope","$ionicLoading","$timeout",function($scope,$ionicLoading,$timeout){
    $scope.openPop = function(){
      $ionicLoading.show({
        template:"请登录"
      });
      $timeout(function(){
        $ionicLoading.hide();
      },100);
    }
  }]);
