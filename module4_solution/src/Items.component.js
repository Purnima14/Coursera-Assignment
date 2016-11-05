(function () {
'use strict';

angular.module('MenuApp')
.component('itemDetail', {
  templateUrl: 'templates/itemDetail.template.html',
  bindings: {
    items: '<'
  }
});

})();
