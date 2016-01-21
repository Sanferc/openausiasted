'use strict';

/* Controllers */

var moduloCliente = angular.module('myApp.clienteControllers', []);



moduloCliente.controller('controlClienteList', function ($scope, $routeParams, serverService) {
    $scope.clase = "cliente";
    $scope.accion = "list";


    $scope.filter = "";
    $scope.filteroperator = "";
    $scope.filtervalue = "";
    $scope.systemfilter = "";
    $scope.systemfilteroperator = "";
    $scope.systemfiltervalue = "";


    $scope.numPagina = $routeParams.numpage;
    $scope.nrpp = $routeParams.numrpp;
    $scope.botoneraNrpp = serverService.getNrppBar($scope.clase, $scope.accion, $scope.numPagina, $scope.nrpp);

    $scope.pages = serverService.getPages($scope.clase, $scope.nrpp, null, null, null, null, null, null).then(function (datos5) {
        $scope.pages = datos5['data'];
        if (parseInt($scope.numPagina) > parseInt($scope.pages))
            $scope.numPagina = $scope.pages;
        //$location.path( "#/clientes/" +$scope.pages + "/" + $scope.pages);
    });

    $scope.$watch('pages', function () {
        $scope.$broadcast('myApp.construirBotoneraPaginas');
    }, true)

    $scope.$on('myApp.construirBotoneraPaginas', function () {
        $scope.botoneraPaginas = serverService.getPaginationBar($scope.clase, $scope.accion, $scope.numPagina, $scope.pages, 2, $scope.nrpp);
    })

    $scope.prettyFieldNames = serverService.getPrettyFieldNames($scope.clase).then(function (datos4) {
        datos4['data'].push('acciones');
        $scope.prettyFieldNames = datos4['data'];
    });

    $scope.clientes = serverService.getPage($scope.clase, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function (datos3) {
        $scope.clientes = datos3['list'];

    });

    $scope.fieldNames = serverService.getFieldNames($scope.clase).then(function (datos6) {
        $scope.fieldNames = datos6['data'];
        $scope.selectedFilterFieldName = null;
    });


    $scope.$watch('numPagina', function () {
        $scope.$broadcast('myApp.construirPagina');
    }, true)

    $scope.$on('myApp.construirPagina', function () {

        $scope.clientes = serverService.getPage($scope.clase, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function (datos3) {
            $scope.clientes = datos3['list'];

        });

    })

    $scope.filtrar = function () {
        alert("f")


    };


});

moduloCliente.controller('controlClienteView', function ($scope, $routeParams, serverService) {
    $scope.back = function () {
        window.history.back();
    };
    $scope.id = $routeParams.id;
    $scope.objeto = serverService.get('cliente', $scope.id).then(function (datos4) {
        $scope.objeto = datos4;
    });
});


moduloCliente.controller('controlClienteRemove', function ($scope, $routeParams, serverService) {
    $scope.result = "";
    $scope.back = function () {
        window.history.back();
    };
    $scope.id = $routeParams.id;
    $scope.objeto = serverService.get('cliente', $scope.id).then(function (datos4) {
        $scope.objeto = datos4;
    });

    $scope.remove = function () {
        $scope.result = serverService.remove('cliente', $scope.id).then(function (datos5) {
            $scope.result = datos5;
        });
    };
});




moduloCliente.controller('controlClienteEdit', function ($scope, $routeParams, serverService) {
    $scope.back = function () {
        window.history.back();
    };
    $scope.id = $routeParams.id;
    $scope.objeto = serverService.get('cliente', $scope.id).then(function (datos4) {
        $scope.objeto = datos4;
    });

    $scope.save = function () {
        $scope.result = serverService.save('cliente', $scope.objeto).then(function (datos5) {
            $scope.result = datos5;
        });
    };


});









moduloCliente.controller('MyCtrl2', function ($scope) {
    $scope.flores = [{nombre: 'margarita'}, {nombre: 'jazmin'}];
});




moduloCliente.controller('controlClienteCompra', function ($scope, $routeParams, serverService) {
    $scope.clase = "compra";
    $scope.accion = "compra";

    $scope.id_cliente = $routeParams.id;
    $scope.numPagina = $routeParams.numpage;
    $scope.nrpp = $routeParams.numrpp;
    $scope.botoneraNrpp = serverService.getNrppBar($scope.clase, $scope.accion, $scope.numPagina, $scope.nrpp);

    $scope.pages = serverService.getPages($scope.clase, $scope.nrpp, null, null, null, null, null, null).then(function (datos5) {
        $scope.pages = datos5['data'];
        if (parseInt($scope.numPagina) > parseInt($scope.pages))
            $scope.numPagina = $scope.pages;
        //$location.path( "#/clientes/" +$scope.pages + "/" + $scope.pages);
    });

    $scope.$watch('pages', function () {
        $scope.$broadcast('myApp.construirBotoneraPaginas');
    }, true)

    $scope.$on('myApp.construirBotoneraPaginas', function () {

        $scope.botoneraPaginas = serverService.getPaginationBar($scope.clase, $scope.accion, $scope.numPagina, $scope.pages, 2, $scope.nrpp);
    })

//    $scope.prettyFieldNames = serverService.getPrettyFieldNames($scope.clase).then(function(datos4) {
//        datos4['data'].push('acciones');
//        $scope.prettyFieldNames = datos4['data'];
//    });

    $scope.objeto = serverService.getPage($scope.clase, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function (datos3) {
        $scope.objeto = datos3['list'];
    });

    $scope.fieldNames = serverService.getFieldNames($scope.clase).then(function (datos6) {
        $scope.fieldNames = datos6['data'];
        $scope.selectedFilterFieldName = null;
    });


    $scope.$watch('numPagina', function () {
        $scope.$broadcast('myApp.construirPagina');
    }, true)

    $scope.$on('myApp.construirPagina', function () {

        $scope.clientes = serverService.getPage($scope.clase, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function (datos3) {
            $scope.clientes = datos3['list'];

        });

    })


});