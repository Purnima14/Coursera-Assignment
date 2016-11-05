(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'templates/main.categoryList.template.html',
     controller: 'MenuAppController as categorylist',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{categoryShortName}',
    templateUrl: 'templates/items.component.template.html',
    controller: 'ItemDetailController as itemDetail',
    // param:{
    //   categoryShortName: null;
    // }
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);

            }]
    }
  });
}

})();
