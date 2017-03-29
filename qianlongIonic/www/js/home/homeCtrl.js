/**
 * Created by ASUS on 2017/3/19.
 */
angular.module("HomeCtrl",[])
  .controller("homeCtrl",["$scope",function($scope){
    /*初始化数据*/
    $scope.home={
      content:["p2p的新奇","高利率高回报高风险","今天反馈大力赠送"],
      noticeState:1
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
