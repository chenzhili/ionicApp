/**
 * Created by ASUS on 2017/2/22.
 */
(function(){
  angular.module("date222-ctrl",[])
    .controller("date222Ctrl",date222Ctrl);
  date222Ctrl.$inject = ["$scope","$ionicScrollDelegate","$interval","$state","$ionicPopup"];
  function date222Ctrl($scope,$ionicScrollDelegate,$interval,$state,$ionicPopup){
    $scope.aa= 11;
    $scope.arr = [{name:"tom",age:12}];
    $scope.num =10;
       $scope.bb=$interval(function(){
        $scope.arr.push({name:"jerry",age:29});
        $scope.num--;
        $ionicScrollDelegate.$getByHandle("myscroll").scrollBottom(true);
      },500,14);
       $scope.openPop = function(){
         $ionicPopup.confirm({
           template:"没登录",
           button:[
             {text:"cancel",type:"button-calm"},
             {text:"confirm",type:"button-positive"}
           ]
         }).then(function(){
           $state.go("tabs.home");
         });
       }
  }
})();
/*(function(){
  angular.module("date222-ctrl",[])
    .controller("date222Ctrl",["$scope","$ionicScrollDelegate","$interval",function($scope,$ionicScrollDelegate,$interval){
      $scope.aa= 11;
      $scope.arr = [{name:"tom",age:12}];
      $interval(function(){
        $scope.arr.push({name:"jerry",age:29});
        $ionicScrollDelegate.$getByHandle("myscroll").scrollBottom(true);
      },500);

    }]);
})();*/
