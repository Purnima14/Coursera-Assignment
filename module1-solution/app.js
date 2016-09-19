(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
    $scope.lunchList = "";

    $scope.CheckIfTooMany = function(){
      var lunchCollection = [];
      lunchCollection = GetList($scope.lunchList);
      $scope.message = GetMessage(lunchCollection);
    };

    function GetList(string){
      var list = string.split(',');
      var lunchCollection = [];
      var i;
      for(i=0;i<list.length;i++)
      {
        if(list[i] != "")
         lunchCollection.push(list[i]);
      }
      return lunchCollection;
    };

    function GetMessage(lunchCollection){
      var message = "";
      if(lunchCollection.length === 0)
      {
         message = "Please enter data first";
           $scope.fontColor = "red-font-message";
           $scope.borderColor = "red-border"
      }
      else if (lunchCollection.length <= 3)
      {
        message = "Enjoy!";
        $scope.fontColor = "green-font-message";
         $scope.borderColor = "green-border"
      }
      else
      {
        message = "Too Much!";
          $scope.fontColor = "green-font-message";
          $scope.borderColor = "green-border"
      }
      return message;
    };
  };
})();
