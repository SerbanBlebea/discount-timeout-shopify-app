!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=0)}([function(t,n,e){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,n){return n-t}function n(t){var n=new Date(t);if("object"==(void 0===n?"undefined":r(n)))return parseInt(n.getTime().toFixed(0))}function e(t){var n=parseInt(t%1e3/100),e=parseInt(t/1e3%60),r=parseInt(t/6e4%60),o=parseInt(t/36e5%24),i=parseInt(t/864e5);return r=r<10?"0"+r:r,e=e<10?"0"+e:e,{days:i,hours:o,minutes:r,seconds:e,milliseconds:n}}function o(t){return'<div style="display:flex;">\n                    <div style="margin-right: 10px;">'+t.days+' days</div>\n                    <div style="margin-right: 10px;">'+t.hours+' hours</div>\n                    <div style="margin-right: 10px;">'+t.minutes+" minutes</div>\n                    <div>"+t.seconds+" seconds</div>\n                </div>"}var i=document.getElementById("discount-timeout");new Date;alert("Script tag is mounted and activated"),function(){setInterval(function(){var r=(new Date).toString(),u=t(n(r),n("2018/01/14 10:20:20")),s=o(e(u));console.log(s),i.innerHTML=s},1e3)}()}()}]);