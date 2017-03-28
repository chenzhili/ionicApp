/**
 * Created by ASUS on 2017/1/12.
 */
/*angular.module("myCtrl",[])
  .controller("myCtrl",["$scope",function($scope){

  }]);*/
(function () {
  angular.module("myCtrl",[])
    .controller("myCtrl",myCtrl);
  myCtrl.$inject=["$scope"];
  function myCtrl($scope){
    $scope.obj = {"name":"tom","age":12};
    $scope.arr = [];
    for (var i=0;i<3;i++) {
      $scope.arr.push($scope.obj);
    }
    console.log($scope.arr);
    $scope.connect = function () {
      var ws = new WebSocket("ws://localhost");
      console.log(ws);
      ws.onopen = function(){
        ws.send("建立连接传送给你");
      };
      ws.onmessage = function (e) {
        var recieve = e.data;
        console.log(recieve);
      };
      ws.onclose = function(){
        alert("连接已关闭");
      }
    }
  }
})();
