(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyList();
    toBuyList.errorMessage = "Everything is bought!";
    toBuyList.bought = function(itemIndex){
      ShoppingListCheckOffService.bought(itemIndex);
    }
  }

 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService){
   var alreadyBoughtlist = this;
   alreadyBoughtlist.errorMessage = "Nothing bought yet";
   alreadyBoughtlist.items = ShoppingListCheckOffService.getAlreadyBoughtList();
 }



  function ShoppingListCheckOffService()
  {
      var service = this;
      var alreadyBoughtlist = [];
      var errorMessage = "";
      var toBuyList = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "bread",
        quantity: "5"
      },
      {
        name: "eggs",
        quantity: "18"
      },
      {
        name: "coffee",
        quantity: "2"
      },
      {
        name: "butter",
        quantity: "2"
      }

  ];

    service.getToBuyList = function(){
      return toBuyList;
    }
    service.getAlreadyBoughtList = function(){

      return alreadyBoughtlist;
    }

    service.bought = function(index){
      var item = toBuyList [index];
      toBuyList.splice(index,1)
      alreadyBoughtlist.push(item);
      //service.getBoughtErrorMessage();
      // alreadyBoughtlist.errorMessage = "";

    }

}
})();
