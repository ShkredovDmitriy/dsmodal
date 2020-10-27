!function(e){var n={};function a(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=n,a.d=function(o,t,e){a.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},a.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)a.d(e,n,function(o){return t[o]}.bind(null,n));return e},a.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return a.d(t,"a",t),t},a.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},a.p="",a(a.s=3)}([function(o,t){o.exports=function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}},function(o,t){function n(o,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,n.key,n)}}o.exports=function(o,t,e){return t&&n(o.prototype,t),e&&n(o,e),o}},function(o,t,e){},function(o,t,e){"use strict";e.r(t);e(2);var t=e(0),n=e.n(t),t=e(1),a=e.n(t),l={bodyBlockClass:"ds-modal-overflow-hidden",modalQuery:".ds-modal-container[data-ds-modal]",modalContainer:".ds-modal-container",modalData:"data-ds-modal",modalWrapper:".ds-modal-wrapper",modalClass:".ds-modal",openData:"data-ds-modal-open",buttonClose:".ds-modal-close",animationStep1:"block",animationStep2:"shadow",animationStep3:"opacity",animationStep4:"transform",vibration:"vibration",modals:new Map,logs:!1,initialised:!1,outClick:!0,zIndex:9999,modalSelector:function(o){return'.ds-modal-container[data-ds-modal="'.concat(o,'"]')},modalWrapperSelector:function(o){return'.ds-modal-container[data-ds-modal="'.concat(o,'"] .ds-modal-wrapper')},openSelector:function(o){return'[data-ds-modal-open="'.concat(o,'"]')},closeSelector:function(o){return'[data-ds-modal-close="'.concat(o,'"]')}};function i(o,t){t&&console.log("%c ".concat(o," "),"background: #00ff00; color: #000000")}function d(o,t){t&&console.log("%c ".concat(o," "),"background: #ff0000; color: #ffffff")}function c(o,t,e){setTimeout(function(){document.querySelector(o).classList.add(t)},e)}function r(o){var t=l.modalSelector(o);document.querySelector(t).style.zIndex=l.zIndex,c(t,l.animationStep1,0),c(t,l.animationStep2,50),c(t,l.animationStep3,200),c(t,l.animationStep4,200),i("ds-modal: ".concat(o," opened"),l.logs)}function u(o,t,e){setTimeout(function(){document.querySelector(o).classList.remove(t)},e)}function s(o){var t=l.modalSelector(o);u(t,l.animationStep1,600),u(t,l.animationStep2,250),u(t,l.animationStep3,0),u(t,l.animationStep4,0),i("ds-modal: ".concat(o," closed"),l.logs)}function f(o,t,e){document.querySelectorAll(o).forEach(function(o){o.addEventListener("click",function(){!0===t&&r(e),!1===t&&s(e)})})}var m=function(){function t(o){n()(this,t),this.dataValue=o}return a()(t,[{key:"addOpenButtons",value:function(){f(l.openSelector(this.dataValue),!0,this.dataValue)}},{key:"addCloseButtons",value:function(){f(l.closeSelector(this.dataValue),!1,this.dataValue)}},{key:"addOutClickClose",value:function(){var t,e;t=this.dataValue,(e=document.querySelector(l.modalWrapperSelector(t))).addEventListener("click",function(o){o.target===e&&(l.modals.has(t)?!0===l.outClick?l.modals.get(t).close():l.modals.get(t).vibration():error("ds-modal: no such modal exists",!0))})}},{key:"open",value:function(){r(this.dataValue)}},{key:"close",value:function(){s(this.dataValue)}},{key:"vibration",value:function(){var o,t;o=this.dataValue,c(t=l.modalSelector(o),l.vibration,50),u(t,l.vibration,500),i("ds-modal: ".concat(o," vibration"),l.logs)}},{key:"status",value:function(){return this.dataValue}},{key:"init",value:function(){this.addOpenButtons(),this.addCloseButtons(),this.addOutClickClose()}}]),t}();function p(){!1===l.initialised?(l.initialised=!0,document.querySelectorAll(l.modalQuery).forEach(function(o){var t=o.getAttribute(l.modalData),o=new m(t);o.init(),l.modals.set("".concat(t),o)})):console.log("%c ".concat("ds-modal has already been initialized"," "),"background: #ff8504; color: #000000")}function v(o){var t;o&&(!0===o.logs&&i("ds-modal: logs = true",l.logs=!0),!1===o.logs&&i("ds-modal: logs = false",!(l.logs=!1)),!0===o.outClick&&i("ds-modal: outClick = true",l.outClick=!0),!1===o.outClick&&i("ds-modal: outClick = false",!(l.outClick=!1)),o.zIndex&&(o=o.zIndex,Number.isInteger(o)&&0<(t=Math.floor(o))&&t<1e5?(l.zIndex=t,i("ds-modal: zIndex = ".concat(t),l.logs)):d("ds-modal: please set zIndex from 1 to 99999",!0)))}var y=function(){i("ds-modal status:",!0),l.modals.forEach(function(o,t){i("modal ".concat(t," is ready to work"),!0)}),i("logs: ".concat(l.logs),!0),i("outClick: ".concat(l.outClick),!0),i("zIndex: ".concat(l.zIndex),!0)};t=function(){function o(){n()(this,o),this.makeWithLove=!0}return a()(o,[{key:"init",value:function(){p()}},{key:"config",value:function(o){v(o)}},{key:"open",value:function(o){(o=o)&&(l.modals.has(o)?l.modals.get(o).open():d("ds-modal: no such modal exists",!0))}},{key:"close",value:function(o){(o=o)&&(l.modals.has(o)?l.modals.get(o).close():d("ds-modal: no such modal exists",!0))}},{key:"destroy",value:function(){i("ds-modal destroyed",!0)}},{key:"status",value:function(){y()}}]),o}();window.dsModal=new t,window.dsModal.init();window.dsModal}]);