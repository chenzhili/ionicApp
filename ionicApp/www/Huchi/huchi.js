/**
 * Created by ASUS on 2017/2/19.
 */
(function(){
  angular.module("huchi",[])
    .controller("huchiCtrl",function huchiCtrl($scope){
      $scope.content1={
        1:{odds:11,check:false},
        2:{odds:22,check:false},
        3:{odds:33,check:false}
      };
      $scope.content2={
        1:{odds:1,check:false},
        2:{odds:2,check:false},
        3:{odds:3,check:false}
      };
      $scope.checkBox = function(item,name,index){
        if(name == "double"){
          if(item.check){
            item.check = false;
          }else{
            item.check = true;
            $scope.content2[index+1].check =false;
          }
        }else if(name =="original"){
          if(item.check){
            item.check = false;
          }else{
            item.check = true;
            $scope.content1[index+1].check =false;
          }
        }
      }
    });
})();

