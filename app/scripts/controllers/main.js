'use strict';

/**
 * @ngdoc function
 * @name proyectoAppGlobalesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoAppGlobalesApp
 */
angular.module('proyectoAppGlobalesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.reportes = [
      {
        img: 'images/poste.jpg',
        titulo: 'Poste de luz dañado',
        descripcion: 'Un poste de luz se ha caído y no hay iluminación',
        dirección: 'Heredia centro',
        fecha: new Date('2015', '23', '10')
      },
      {
        img: 'images/tuberia.jpg',
        titulo: 'Fuga de agua',
        descripcion: 'Una tubería esta rota y se esta desperdiciando mucha agua',
        dirección: 'Barva, Heredia',
        fecha: new Date('2015', '23', '10')
      }
    ];
  });
