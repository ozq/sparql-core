/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SparqlClient
 */
var SparqlClient = function () {
    /**
     * @param configuration
     */
    function SparqlClient(configuration) {
        _classCallCheck(this, SparqlClient);

        this.loadConfiguration(configuration);
    }

    /**
     * @param configuration
     */


    _createClass(SparqlClient, [{
        key: 'loadConfiguration',
        value: function loadConfiguration(configuration) {
            if ((typeof configuration === 'undefined' ? 'undefined' : _typeof(configuration)) === 'object') {
                this.configuration = configuration;
                this.requestUrl = this.loadConfigurationItem('requestUrl', '');
                this.graphIri = this.loadConfigurationItem('graphIri', '');
                this.requestType = this.loadConfigurationItem('requestType', '');
                this.requestDataType = this.loadConfigurationItem('requestType', 'json');
                this.debugMode = this.loadConfigurationItem('debugMode', 'no');
                this.responseFormat = this.loadConfigurationItem('responseFormat', 'html');
            } else {
                console.error('Configuration must be instance of Object!');
            }
        }

        /**
         * @param option
         * @param defaultValue
         * @returns {*}
         */

    }, {
        key: 'loadConfigurationItem',
        value: function loadConfigurationItem(option, defaultValue) {
            if (this.configuration.hasOwnProperty(option) && this.configuration[option]) {
                return this.configuration[option];
            } else {
                if (typeof defaultValue !== 'undefined') {
                    return defaultValue;
                } else {
                    console.error('Option ' + option + ' must be passed and be defined!');
                }
            }
        }

        /**
         * @param query
         * @param successCallback
         * @param errorCallback
         */

    }, {
        key: 'execute',
        value: function execute(query, successCallback, errorCallback) {
            var data = {
                'query': query,
                'debug': this.debugMode,
                'format': this.responseFormat,
                'default-graph-uri': this.graphIri
            };

            $.ajax({
                data: data,
                type: this.requestType,
                url: this.requestUrl,
                dataType: this.requestDataType,
                success: function success(data) {
                    if (successCallback) {
                        successCallback(data);
                    }
                },
                error: function error(data) {
                    if (errorCallback) {
                        errorCallback(data);
                    }
                }
            });
        }
    }]);

    return SparqlClient;
}();

window.SparqlClient = SparqlClient;

/***/ })

/******/ });