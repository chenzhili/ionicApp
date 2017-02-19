/**
 * Created by ASUS on 2017/1/12.
 */
angular.module("investCtrl",[])
  .controller("investCtrl",["$scope","$interpolate",function($scope,$interpolate){
    $scope.inter={
      content:'',
      name:'',
      aa:''
    };
    $scope.$watch("inter.content",function(nv,ov,scope){
      var interpolatFun = $interpolate(nv);
      $scope.inter.aa = interpolatFun(scope);
    });
  }]);
