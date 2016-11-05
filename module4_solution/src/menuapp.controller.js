(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['MenuDataService','items'];
function MenuAppController(MenuDataService,items) {
  var categorylist = this;
  categorylist.items = items.data;
}

})();
