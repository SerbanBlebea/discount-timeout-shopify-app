!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=0)}([function(t,n,e){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){function t(t,n){return n-t}function n(t){var n=new Date(t);if("object"==(void 0===n?"undefined":o(n)))return parseInt(n.getTime().toFixed(0))}function e(t){var n=parseInt(t%1e3/100),e=parseInt(t/1e3%60),o=parseInt(t/6e4%60),r=parseInt(t/36e5%24);return{days:parseInt(t/864e5),hours:r,minutes:o,seconds:e,milliseconds:n}}function r(){setInterval(function(){var o=(new Date).toString(),r=t(n(o),n("2018/01/14 10:20:20")),c=i(e(r));console.log(c),s.innerHTML=c},1e3)}function i(t){var n=t.minutes<10?"0"+t.minutes:t.minutes,e=t.seconds<10?"0"+t.seconds:t.seconds,o='<div class="note form-success" style="width:100%;display:flex;justify-content:center;">\n                        <div style="margin-right: 10px;">'+t.days+' days</div>\n                        <div style="margin-right: 10px;">'+t.hours+' hours</div>\n                        <div style="margin-right: 10px;">'+n+" minutes</div>\n                        <div>"+e+" seconds</div>\n                    </div>";return 0==t.days&&0==t.hours&&0==t.minutes&&0==t.seconds?'<div class="note form-success" style="width:100%;text-align:center;">\n                            This offer has expired. Stay close for more special offers!\n                        </div>':o}console.log("Script tag is mounted and activated");var s=document.getElementById("discount-timeout");null!==s&&function(t,n){fetch(t).then(function(t){n(t)}).catch(function(t){console.log(t)})}("https://discount-timeout.herokuapp.com/get/config",function(t){console.log(t);new Date;r()})}()}]);