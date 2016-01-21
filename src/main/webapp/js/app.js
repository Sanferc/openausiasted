/*
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/openAUSIAS
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
 */

'use strict';

//var appName = 'AjaxStockNg';

var openAusias = angular.module('myApp', [
    'ngRoute',
    'Filters',
    'Services',
    'Directives',
    'systemControllers',
    'documentoControllers',
    'usuarioControllers',
    'tipodocumentoControllers',
    'tipocompeticionControllers',
    'equipoControllers',    
    'temporadaControllers',
    'competicionControllers',
    'jornadaControllers',
    'partidoControllers',
    'tipousuarioControllers',
    'estadoControllers',
    'ui.bootstrap',
    'ngSanitize'
]);

openAusias.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        //------------
        $routeProvider.when('/home', {templateUrl: 'js/system/home.html', controller: 'HomeController'});
        //------------
        $routeProvider.when('/documento/view/:id', {templateUrl: 'js/documento/view.html', controller: 'DocumentoViewController'});
        $routeProvider.when('/documento/new', {templateUrl: 'js/documento/newedit.html', controller: 'DocumentoNewController'});
        $routeProvider.when('/documento/edit/:id', {templateUrl: 'js/documento/newedit.html', controller: 'DocumentoEditController'});
        $routeProvider.when('/documento/remove/:id', {templateUrl: 'js/documento/remove.html', controller: 'DocumentoRemoveController'});
        $routeProvider.when('/documento/plist/:page?/:rpp?', {templateUrl: 'js/documento/plist.html', controller: 'DocumentoPListController'});
        //------------
        $routeProvider.when('/usuario/view/:id', {templateUrl: 'js/usuario/view.html', controller: 'UsuarioViewController'});
        $routeProvider.when('/usuario/new/:id?', {templateUrl: 'js/usuario/newedit.html', controller: 'UsuarioNewController'});
        $routeProvider.when('/usuario/edit/:id', {templateUrl: 'js/usuario/newedit.html', controller: 'UsuarioEditController'});
        $routeProvider.when('/usuario/remove/:id', {templateUrl: 'js/usuario/remove.html', controller: 'UsuarioRemoveController'});
        $routeProvider.when('/usuario/plist/:page?/:rpp?', {templateUrl: 'js/usuario/plist.html', controller: 'UsuarioPListController'});
        //------------
        $routeProvider.when('/tipodocumento/view/:id', {templateUrl: 'js/tipodocumento/view.html', controller: 'TipodocumentoViewController'});
        $routeProvider.when('/tipodocumento/selection/:page/:rpp', {templateUrl: 'js/tipodocumento/selection.html', controller: 'TipodocumentoSelectionController'});
        //------------
        $routeProvider.when('/tipousuario/selection/:page/:rpp', {templateUrl: 'js/tipousuario/selection.html', controller: 'TipousuarioSelectionController'});
        //------------
        $routeProvider.when('/estado/selection/:page/:rpp', {templateUrl: 'js/estado/selection.html', controller: 'EstadoSelectionController'});        
        
    //------------ PROYECTO FUTBOL ANGULAR -------------------------------------
    
       //------------ Tabla TipoCompeticion -------------------------------------
       $routeProvider.when('/tipocompeticion/view/:id', {templateUrl: 'js/tipocompeticion/view.html', controller: 'TipocompeticionViewController'});
       $routeProvider.when('/tipocompeticion/remove/:id', {templateUrl: 'js/tipocompeticion/remove.html', controller: 'TipocompeticionRemoveController'});
       $routeProvider.when('/tipocompeticion/plist/:page?/:rpp?', {templateUrl: 'js/tipocompeticion/plist.html', controller: 'TipocompeticionPListController'}); 
        
       $routeProvider.when('/tipocompeticion/selection/:page/:rpp', {templateUrl: 'js/tipocompeticion/selection.html', controller: 'TipocompeticionSelectionController'});
       $routeProvider.when('/tipocompeticion/new', {templateUrl: 'js/tipocompeticion/newedit.html', controller: 'TipocompeticionNewController'});
       $routeProvider.when('/tipocompeticion/edit/:id', {templateUrl: 'js/tipocompeticion/newedit.html', controller: 'TipocompeticionEditController'}); 
       
        
       //------------ Tabla Equipo -------------------------------------
       $routeProvider.when('/equipo/view/:id', {templateUrl: 'js/equipo/view.html', controller: 'EquipoViewController'});
       $routeProvider.when('/equipo/remove/:id', {templateUrl: 'js/equipo/remove.html', controller: 'EquipoRemoveController'});
       $routeProvider.when('/equipo/plist/:page?/:rpp?', {templateUrl: 'js/equipo/plist.html', controller: 'EquipoPListController'});
       $routeProvider.when('/equipo/new', {templateUrl: 'js/equipo/new.html', controller: 'EquipoNewController'});
       $routeProvider.when('/equipo/edit/:id', {templateUrl: 'js/equipo/edit.html', controller: 'EquipoEditController'});
       $routeProvider.when('/equipo/selection/:page/:rpp', {templateUrl: 'js/equipo/selection.html', controller: 'EquipoSelectionController'});
       
       
       
       
       //------------ Tabla Temporada -------------------------------------
       $routeProvider.when('/temporada/view/:id', {templateUrl: 'js/temporada/view.html', controller: 'TemporadaViewController'});
       $routeProvider.when('/temporada/remove/:id', {templateUrl: 'js/temporada/remove.html', controller: 'TemporadaRemoveController'});
       $routeProvider.when('/temporada/plist/:page?/:rpp?', {templateUrl: 'js/temporada/plist.html', controller: 'TemporadaPListController'});
       
       $routeProvider.when('/temporada/selection/:page/:rpp', {templateUrl: 'js/temporada/selection.html', controller: 'TemporadaSelectionController'});
       $routeProvider.when('/temporada/new', {templateUrl: 'js/temporada/newedit.html', controller: 'TemporadaNewController'});
       $routeProvider.when('/temporada/edit/:id', {templateUrl: 'js/temporada/newedit.html', controller: 'TemporadaEditController'});
       
       
       
       //------------ Tabla Competicion -------------------------------------
       $routeProvider.when('/competicion/view/:id', {templateUrl: 'js/competicion/view.html', controller: 'CompeticionViewController'});
       $routeProvider.when('/competicion/remove/:id', {templateUrl: 'js/competicion/remove.html', controller: 'CompeticionRemoveController'});
       $routeProvider.when('/competicion/plist/:page?/:rpp?', {templateUrl: 'js/competicion/plist.html', controller: 'CompeticionPListController'});
       
       
       $routeProvider.when('/competicion/selection/:page/:rpp', {templateUrl: 'js/competicion/selection.html', controller: 'CompeticionSelectionController'});
       $routeProvider.when('/competicion/new', {templateUrl: 'js/competicion/newedit.html', controller: 'CompeticionNewController'});
       $routeProvider.when('/competicion/edit/:id', {templateUrl: 'js/competicion/newedit.html', controller: 'CompeticionEditController'});
              
       
       
       //------------ Tabla Jornada -------------------------------------
       $routeProvider.when('/jornada/view/:id', {templateUrl: 'js/jornada/view.html', controller: 'JornadaViewController'});
       $routeProvider.when('/jornada/remove/:id', {templateUrl: 'js/jornada/remove.html', controller: 'JornadaRemoveController'});
       $routeProvider.when('/jornada/plist/:page?/:rpp?', {templateUrl: 'js/jornada/plist.html', controller: 'JornadaPListController'});
       $routeProvider.when('/jornada/selection/:page/:rpp', {templateUrl: 'js/jornada/selection.html', controller: 'JornadaSelectionController'});
       
       
       $routeProvider.when('/jornada/new', {templateUrl: 'js/jornada/newedit.html', controller: 'JornadaNewController'});
       $routeProvider.when('/jornada/edit/:id', {templateUrl: 'js/jornada/newedit.html', controller: 'JornadaEditController'});
       
       
       
       
       //------------ Tabla Partido -------------------------------------
       $routeProvider.when('/partido/view/:id', {templateUrl: 'js/partido/view.html', controller: 'PartidoViewController'});
       $routeProvider.when('/partido/remove/:id', {templateUrl: 'js/partido/remove.html', controller: 'PartidoRemoveController'});
       $routeProvider.when('/partido/plist/:page?/:rpp?', {templateUrl: 'js/partido/plist.html', controller: 'PartidoPListController'});
       $routeProvider.when('/partido/selection/:page/:rpp', {templateUrl: 'js/partido/selection.html', controller: 'PartidoSelectionController'});
       

       $routeProvider.when('/partido/new', {templateUrl: 'js/partido/new.html', controller: 'PartidoNewController'});
       $routeProvider.when('/partido/edit/:id', {templateUrl: 'js/partido/edit.html', controller: 'PartidoEditController'});
       

        //------------
        $routeProvider.otherwise({redirectTo: '/'});


    }]);

var moduloSistema = angular.module('systemControllers', []);
var moduloUsuario = angular.module('usuarioControllers', []);
var moduloDocumento = angular.module('documentoControllers', []);
var moduloTipodocumento = angular.module('tipodocumentoControllers', []);
var moduloTipousuario = angular.module('tipousuarioControllers', []);
var moduloEstado = angular.module('estadoControllers', []);


//------------ PROYECTO FUTBOL ANGULAR -------------------------------------
var moduloTipocompeticion = angular.module('tipocompeticionControllers', []);
var moduloEquipo = angular.module('equipoControllers', []);
var moduloTemporada = angular.module('temporadaControllers', []);
var moduloCompeticion = angular.module('competicionControllers', []);
var moduloJornada = angular.module('jornadaControllers', []);
var moduloPartido = angular.module('partidoControllers', []);

