/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("InvestCtrl",[])
  .controller("investCtrl",["$scope","$sce",function($scope,$sce){

  	$scope.aa = $sce.trustAsResourceUrl("https://www.baidu.com");
  	$scope.html = $sce.trustAsHtml("<h1>试试行不行</h1>");

  }]);
