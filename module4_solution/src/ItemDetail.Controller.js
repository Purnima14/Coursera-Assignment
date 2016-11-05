(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'MenuDataService','items'];
function ItemDetailController($stateParams,MenuDataService,items) {
  var itemDetail = this;
  itemDetail.items = items.data.menu_items;
}

})();
