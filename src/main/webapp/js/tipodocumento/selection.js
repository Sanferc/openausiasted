/* 
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */



moduloTipodocumento.controller('TipodocumentoSelectionController', ['$scope', '$routeParams', 'serverService', 'sharedSpaceService', '$location',
    function ($scope, $routeParams, serverService, sharedSpaceService, $location) {
        $scope.ob = "tipodocumento";
        $scope.op = "selection";
        $scope.title = "Selección de un tipo de documento";
        $scope.neighbourhood = 2;
        $scope.numpage = $routeParams.page;
        $scope.rpp = $routeParams.rpp;
        //$scope.rppPad = serverService.getNrppBar($scope.ob, $scope.op, $scope.numpage, $scope.rpp);

//        $scope.order = $routeParams.order;
//        $scope.ordervalue = $routeParams.value;
//
//        $scope.filter = $routeParams.filter;
//        $scope.filteroperator = $routeParams.filteroperator;
//        $scope.filtervalue = $routeParams.filtervalue;
//
//        $scope.systemfilter = $routeParams.systemfilter;
//        $scope.systemfilteroperator = $routeParams.systemfilteroperator;
//        $scope.systemfiltervalue = $routeParams.systemfiltervalue;


        $scope.order = "";
        $scope.ordervalue = "";
        $scope.filter = "id";
        $scope.filteroperator = "like";
        $scope.filtervalue = "";
        $scope.systemfilter = "";
        $scope.systemfilteroperator = "";
        $scope.systemfiltervalue = "";
        $scope.params = "";
        $scope.paramsWithoutOrder = "";
        $scope.paramsWithoutFilter = "";
        $scope.paramsWithoutSystemFilter = "";




        if ($routeParams.order && $routeParams.ordervalue) {
            $scope.order = $routeParams.order;
            $scope.ordervalue = $routeParams.ordervalue;
            $scope.orderParams = "&order=" + $routeParams.order + "&ordervalue=" + $routeParams.ordervalue;
            $scope.paramsWithoutFilter += $scope.orderParams;
            $scope.paramsWithoutSystemFilter += $scope.orderParams;
        } else {
            $scope.orderParams = "";
        }

        if ($routeParams.filter && $routeParams.filteroperator && $routeParams.filtervalue) {
            $scope.filter = $routeParams.filter;
            $scope.filteroperator = $routeParams.filteroperator;
            $scope.filtervalue = $routeParams.filtervalue;
            $scope.filterParams = "&filter=" + $routeParams.filter + "&filteroperator=" + $routeParams.filteroperator + "&filtervalue=" + $routeParams.filtervalue;
            $scope.paramsWithoutOrder += $scope.filterParams;
            $scope.paramsWithoutSystemFilter += $scope.filterParams;
        } else {
            $scope.filterParams = "";
        }

        if ($routeParams.systemfilter && $routeParams.systemfilteroperator && $routeParams.systemfiltervalue) {
            $scope.systemFilterParams = "&systemfilter=" + $routeParams.systemfilter + "&systemfilteroperator=" + $routeParams.systemfilteroperator + "&systemfiltervalue=" + $routeParams.systemfiltervalue;
            $scope.paramsWithoutOrder += $scope.systemFilterParams;
            $scope.paramsWithoutFilter += $scope.systemFilterParams;
        } else {
            $scope.systemFilterParams = "";
        }

        $scope.params = ($scope.orderParams + $scope.filterParams + $scope.systemFilterParams);
        //$scope.paramsWithoutOrder = $scope.paramsWithoutOrder.replace('&', '?');
        //$scope.paramsWithoutFilter = $scope.paramsWithoutFilter.replace('&', '?');
        //$scope.paramsWithoutSystemFilter = $scope.paramsWithoutSystemFilter.replace('&', '?');
        $scope.params = $scope.params.replace('&', '?');

        serverService.getDataFromPromise(serverService.promise_getSome($scope.ob, $scope.rpp, $scope.numpage, $scope.filterParams, $scope.orderParams, $scope.systemFilterParams)).then(function (data) {
            if (data.status != 200) {
                $scope.status = "Error en la recepción de datos del servidor";
            } else {
                $scope.pages = data.message.pages.message;
                if (parseInt($scope.numpage) > parseInt($scope.pages))
                    $scope.numpage = $scope.pages;

                $scope.page = data.message.page.message;
                $scope.registers = data.message.registers.message;
                $scope.status = "";
            }
        });


//        $scope.pages = serverService.getPages($scope.ob, $scope.rpp, null, null, null, null, null, null).then(function (datos5) {
//            $scope.pages = data['data'];
//            if (parseInt($scope.page) > parseInt($scope.pages))
//                $scope.page = $scope.pages;
//            //$location.path( "#/clientes/" +$scope.pages + "/" + $scope.pages);
//        });


//        $scope.$watch('pages', function () {
//            $scope.$broadcast('myApp.construirBotoneraPaginas');
//        }, true)
//

        $scope.getRangeArray = function (lowEnd, highEnd) {
            var rangeArray = [];
            for (var i = lowEnd; i <= highEnd; i++) {
                rangeArray.push(i);
            }
            return rangeArray;
        };
        $scope.evaluateMin = function (lowEnd, highEnd) {
            return Math.min(lowEnd, highEnd);
        };
        $scope.evaluateMax = function (lowEnd, highEnd) {
            return Math.max(lowEnd, highEnd);
        };

        $scope.dofilter = function () {
            if ($scope.filter != "" && $scope.filteroperator != "" && $scope.filtervalue != "") {
                //console.log('#/' + $scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp + '?filter=' + $scope.filter + '&filteroperator=' + $scope.filteroperator + '&filtervalue=' + $scope.filtervalue + $scope.paramsWithoutFilter);
                if ($routeParams.order && $routeParams.ordervalue) {
                    if ($routeParams.systemfilter && $routeParams.systemfilteroperator) {
                        $location.path($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filter).search('filteroperator', $scope.filteroperator).search('filtervalue', $scope.filtervalue).search('order', $routeParams.order).search('ordervalue', $routeParams.ordervalue).search('systemfilter', $routeParams.systemfilter).search('systemfilteroperator', $routeParams.systemfilteroperator).search('systemfiltervalue', $routeParams.systemfiltervalue);
                    } else {
                        $location.path($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filter).search('filteroperator', $scope.filteroperator).search('filtervalue', $scope.filtervalue).search('order', $routeParams.order).search('ordervalue', $routeParams.ordervalue);
                    }
                } else {
                    $location.path($scope.ob + '/' + $scope.op + '/' + $scope.numpage + '/' + $scope.rpp).search('filter', $scope.filter).search('filteroperator', $scope.filteroperator).search('filtervalue', $scope.filtervalue);
                }
            }
            return false;
        };


        $scope.go = function (num) {
            sharedSpaceService.getObject().obj_tipodocumento.id = num;
            //$scope.compartida.id_tipoproducto = num;
            //sharedSpaceService.setId(num);        
            //sharedSpaceService.setObject($scope.compartida);
            sharedSpaceService.setFase(2);
            $location.path(sharedSpaceService.getReturnLink());
        };

        $scope.back = function () {
            window.history.back();
        };



//    $scope.clase = "tipoproducto";
//    $scope.accion = "selection";



//    $scope.numPagina = $routeParams.numpage;
//    $scope.nrpp = $routeParams.numrpp;
//    $scope.botoneraNrpp = serverService.getNrppBar($scope.ob, $scope.op, $scope.numPagina, $scope.nrpp);
//
//    $scope.pages = serverService.getPages($scope.ob, $scope.nrpp, null, null, null, null, null, null).then(function(datos5) {
//        $scope.pages = datos5['data'];
//        if (parseInt($scope.numPagina) > parseInt($scope.pages))
//            $scope.numPagina = $scope.pages;
//    });
//
//    $scope.$watch('pages', function() {
//        $scope.$broadcast('myApp.construirBotoneraPaginas');
//    }, true)
//
//    $scope.$on('myApp.construirBotoneraPaginas', function() {
//        $scope.botoneraPaginas = serverService.getPaginationBar($scope.ob, $scope.op, $scope.numPagina, $scope.pages, 2, $scope.nrpp);
//    })
//
//    $scope.prettyFieldNames = serverService.getPrettyFieldNames($scope.ob).then(function(datos4) {
//        datos4['data'].push('acciones');
//        $scope.prettyFieldNames = datos4['data'];
//    });
//
//    $scope.objetos = serverService.getPage($scope.ob, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
//        $scope.objetos = datos3['list'];
//
//    });
//
//    $scope.fieldNames = serverService.getFieldNames($scope.ob).then(function(datos6) {
//        $scope.fieldNames = datos6['data'];
//        $scope.selectedFilterFieldName = null;
//    });
//
//
//    $scope.$watch('numPagina', function() {
//        $scope.$broadcast('myApp.construirPagina');
//    }, true)
//
//
//    $scope.$on('myApp.construirPagina', function() {
//        $scope.objetos = serverService.getPage($scope.ob, $scope.numPagina, null, null, $scope.nrpp, null, null, null, null, null, null).then(function(datos3) {
//            $scope.objetos = datos3['list'];
//        });
//    })

    }]);

