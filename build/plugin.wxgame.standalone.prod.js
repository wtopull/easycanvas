!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(91)},79:function(e,t){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(){a.addEventListener=a.canvas.addEventListener=function(e,t){a.document.addEventListener(e,t)},a.removeEventListener=a.canvas.removeEventListener=function(e,t){a.document.removeEventListener(e,t)};var e=wx.getSystemInfoSync(),t=e.platform;if("undefined"==typeof __devtoolssubcontext&&"devtools"===t){for(var n in a){var o=Object.getOwnPropertyDescriptor(u,n);o&&o.configurable!==!0||Object.defineProperty(window,n,{value:a[n]})}for(var r in a.document){var i=Object.getOwnPropertyDescriptor(u.document,r);i&&i.configurable!==!0||Object.defineProperty(u.document,r,{value:a.document[r]})}window.parent=window}else{for(var c in a)u[c]=a[c];u.window=a,window=u,window.top=window.parent=window}}var i=n(1),a=o(i),u=GameGlobal;GameGlobal.__isAdapterInjected||(GameGlobal.__isAdapterInjected=!0,r())},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.cancelAnimationFrame=t.requestAnimationFrame=t.clearInterval=t.clearTimeout=t.setInterval=t.setTimeout=t.canvas=t.location=t.localStorage=t.HTMLElement=t.FileReader=t.Audio=t.Image=t.WebSocket=t.XMLHttpRequest=t.navigator=t.document=void 0;var r=n(2);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var i=n(3);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=n(9),u=o(a),c=n(10),l=o(c),s=n(17),f=o(s),d=n(18),p=o(d),h=n(19),y=o(h),v=n(11),b=o(v),g=n(12),_=o(g),w=n(20),m=o(w),O=n(4),E=o(O),j=n(21),T=o(j),P=n(22),k=o(P);t.document=l.default,t.navigator=f.default,t.XMLHttpRequest=p.default,t.WebSocket=y.default,t.Image=b.default,t.Audio=_.default,t.FileReader=m.default,t.HTMLElement=E.default,t.localStorage=T.default,t.location=k.default;var M=new u.default;t.canvas=M,t.setTimeout=setTimeout,t.setInterval=setInterval,t.clearTimeout=clearTimeout,t.clearInterval=clearInterval,t.requestAnimationFrame=requestAnimationFrame,t.cancelAnimationFrame=cancelAnimationFrame},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=wx.getSystemInfoSync(),o=n.screenWidth,r=n.screenHeight,i=n.devicePixelRatio,a=t.innerWidth=o,u=t.innerHeight=r;t.devicePixelRatio=i;t.screen={availWidth:a,availHeight:u},t.performance={now:function(){return Date.now()/1e3}},t.ontouchstart=null,t.ontouchmove=null,t.ontouchend=null},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.HTMLCanvasElement=t.HTMLImageElement=void 0;var c=n(4),l=r(c);t.HTMLImageElement=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"img"))}return u(t,e),t}(l.default),t.HTMLCanvasElement=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"canvas"))}return u(t,e),t}(l.default)},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(5),s=r(l),f=n(8),d=n(2),p=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.className="",n.childern=[],n.style={width:d.innerWidth+"px",height:d.innerHeight+"px"},n.insertBefore=f.noop,n.innerHTML="",n.tagName=e.toUpperCase(),n}return u(t,e),c(t,[{key:"setAttribute",value:function(e,t){this[e]=t}},{key:"getAttribute",value:function(e){return this[e]}},{key:"getBoundingClientRect",value:function(){return{top:0,left:0,width:d.innerWidth,height:d.innerHeight}}},{key:"focus",value:function(){}},{key:"clientWidth",get:function(){var e=parseInt(this.style.fontSize,10)*this.innerHTML.length;return Number.isNaN(e)?0:e}},{key:"clientHeight",get:function(){var e=parseInt(this.style.fontSize,10);return Number.isNaN(e)?0:e}}]),t}(s.default);t.default=p},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(6),l=r(c),s=function(e){function t(){i(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.className="",e.children=[],e}return u(t,e),t}(l.default);t.default=s},function(e,t,r){function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=r(7),f=i(s),d=function(e){function t(){a(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.childNodes=[],e}return c(t,e),l(t,[{key:"appendChild",value:function(e){if(!(e instanceof t))throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");this.childNodes.push(e)}},{key:"cloneNode",value:function(){var e=Object.create(this);return n(e,this),e}},{key:"removeChild",value:function(e){var t=this.childNodes.findIndex(function(t){return t===e});return t>-1?this.childNodes.splice(t,1):null}}]),t}(f.default);t.default=d},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=new WeakMap,i=function(){function e(){n(this,e),r.set(this,{})}return o(e,[{key:"addEventListener",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.get(this);o||(o={},r.set(this,o)),o[e]||(o[e]=[]),o[e].push(t),n.capture&&console.warn("EventTarget.addEventListener: options.capture is not implemented."),n.once&&console.warn("EventTarget.addEventListener: options.once is not implemented."),n.passive&&console.warn("EventTarget.addEventListener: options.passive is not implemented.")}},{key:"removeEventListener",value:function(e,t){var n=r.get(this)[e];if(n&&n.length>0)for(var o=n.length;o--;o>0)if(n[o]===t){n.splice(o,1);break}}},{key:"dispatchEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.get(this)[e.type];if(t)for(var n=0;n<t.length;n++)t[n](e)}}]),e}();t.default=i},function(e,t){function n(){}Object.defineProperty(t,"__esModule",{value:!0}),t.noop=n},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e=wx.createCanvas();e.type="canvas",e.__proto__.__proto__=new a.default("canvas");return e.getBoundingClientRect=function(){var e={top:0,left:0,width:window.innerWidth,height:window.innerHeight};return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=(n(3),n(4)),a=o(i),u=n(10);o(u)},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),a=r(i),u=n(4),c=o(u),l=n(11),s=o(l),f=n(12),d=o(f),p=n(9),h=o(p);n(15);var y={},v={readyState:"complete",visibilityState:"visible",documentElement:a,hidden:!1,style:{},location:a.location,ontouchstart:null,ontouchmove:null,ontouchend:null,head:new c.default("head"),body:new c.default("body"),createElement:function(e){return"canvas"===e?new h.default:"audio"===e?new d.default:"img"===e?new s.default:new c.default(e)},getElementById:function(e){return e===a.canvas.id?a.canvas:null},getElementsByTagName:function(e){return"head"===e?[v.head]:"body"===e?[v.body]:"canvas"===e?[a.canvas]:[]},querySelector:function(e){return"head"===e?v.head:"body"===e?v.body:"canvas"===e?a.canvas:e==="#"+a.canvas.id?a.canvas:null},querySelectorAll:function(e){return"head"===e?[v.head]:"body"===e?[v.body]:"canvas"===e?[a.canvas]:[]},addEventListener:function(e,t){y[e]||(y[e]=[]),y[e].push(t)},removeEventListener:function(e,t){var n=y[e];if(n&&n.length>0)for(var o=n.length;o--;o>0)if(n[o]===t){n.splice(o,1);break}},dispatchEvent:function(e){var t=y[e.type];if(t)for(var n=0;n<t.length;n++)t[n](e)}};t.default=v},function(e,t){function n(){var e=wx.createImage();return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(13),s=r(l),f=0,d=1,p=2,h=3,y=4,v=new WeakMap,b=new WeakMap,g=(new WeakMap,new WeakMap,function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.HAVE_NOTHING=f,n.HAVE_METADATA=d,n.HAVE_CURRENT_DATA=p,n.HAVE_FUTURE_DATA=h,n.HAVE_ENOUGH_DATA=y,n.readyState=f,b.set(n,"");var o=wx.createInnerAudioContext();return v.set(n,o),o.onCanplay(function(){n.dispatchEvent({type:"load"}),n.dispatchEvent({type:"loadend"}),n.dispatchEvent({type:"canplay"}),n.dispatchEvent({type:"canplaythrough"}),n.dispatchEvent({type:"loadedmetadata"}),n.readyState=p}),o.onPlay(function(){n.dispatchEvent({type:"play"})}),o.onPause(function(){n.dispatchEvent({type:"pause"})}),o.onEnded(function(){n.dispatchEvent({type:"ended"}),n.readyState=y}),o.onError(function(){n.dispatchEvent({type:"error"})}),e&&(v.get(n).src=e),n}return u(t,e),c(t,[{key:"load",value:function(){console.warn("HTMLAudioElement.load() is not implemented.")}},{key:"play",value:function(){v.get(this).play()}},{key:"pause",value:function(){v.get(this).pause()}},{key:"canPlayType",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"string"!=typeof e?"":e.indexOf("audio/mpeg")>-1||e.indexOf("audio/mp4")?"probably":""}},{key:"cloneNode",value:function(){var e=new t;return e.loop=v.get(this).loop,e.autoplay=v.get(this).loop,e.src=this.src,e}},{key:"currentTime",get:function(){return v.get(this).currentTime},set:function(e){v.get(this).seek(e)}},{key:"src",get:function(){return b.get(this)},set:function(e){b.set(this,e),v.get(this).src=e}},{key:"loop",get:function(){return v.get(this).loop},set:function(e){v.get(this).loop=e}},{key:"autoplay",get:function(){return v.get(this).autoplay},set:function(e){v.get(this).autoplay=e}},{key:"paused",get:function(){return v.get(this).paused}}]),t}(s.default));t.default=g},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(14),l=r(c),s=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"audio"))}return u(t,e),t}(l.default);t.default=s},function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":o(t))&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),s=r(l),f=function(e){function t(e){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),c(t,[{key:"addTextTrack",value:function(){}},{key:"captureStream",value:function(){}},{key:"fastSeek",value:function(){}},{key:"load",value:function(){}},{key:"pause",value:function(){}},{key:"play",value:function(){}}]),t}(s.default);t.default=f},function(e,t,n){n(16)},function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return function(t){var n=new d(e);n.touches=t.touches,t.touches[0]&&(p=t.touches[0].clientX,h=t.touches[0].clientY),n.layerX=p,n.layerY=h,n.targetTouches=Array.prototype.slice.call(t.touches),n.changedTouches=t.changedTouches,n.timeStamp=t.timeStamp,s.default.dispatchEvent(n)}}var u=n(1),c=r(u),l=n(10),s=o(l),f=n(8),d=function e(t){i(this,e),this.target=c.canvas,this.currentTarget=c.canvas,this.touches=[],this.targetTouches=[],this.changedTouches=[],this.preventDefault=f.noop,this.stopPropagation=f.noop,this.type=t},p=0,h=0;wx.onTouchStart(a("touchstart")),wx.onTouchMove(a("touchmove")),wx.onTouchEnd(a("touchend")),wx.onTouchCancel(a("touchcancel"))},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=wx.getSystemInfoSync(),i=r.platform,a={platform:i,language:"zh-cn",appVersion:"5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",onLine:!0,geolocation:{getCurrentPosition:o.noop,watchPosition:o.noop,clearWatch:o.noop}};t.default=a},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){if("function"==typeof this["on"+e]){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];this["on"+e].apply(this,n)}}function r(e){this.readyState=e,o.call(this,"readystatechange")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=new WeakMap,u=new WeakMap,c=new WeakMap,l=new WeakMap,s=new WeakMap,f=function(){function e(){n(this,e),this.onabort=null,this.onerror=null,this.onload=null,this.onloadstart=null,this.onprogress=null,this.ontimeout=null,this.onloadend=null,this.onreadystatechange=null,this.readyState=0,this.response=null,this.responseText=null,this.responseType="",this.responseXML=null,this.status=0,this.statusText="",this.upload={},this.withCredentials=!1,c.set(this,{"content-type":"application/x-www-form-urlencoded"}),l.set(this,{})}return i(e,[{key:"abort",value:function(){var e=s.get(this);e&&e.abort()}},{key:"getAllResponseHeaders",value:function(){var e=l.get(this);return Object.keys(e).map(function(t){return t+": "+e[t]}).join("\n")}},{key:"getResponseHeader",value:function(e){return l.get(this)[e]}},{key:"open",value:function(t,n){u.set(this,t),a.set(this,n),r.call(this,e.OPENED)}},{key:"overrideMimeType",value:function(){}},{key:"send",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.readyState!==e.OPENED)throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");wx.request({data:n,url:a.get(this),method:u.get(this),header:c.get(this),responseType:this.responseType,success:function(n){var i=n.data,a=n.statusCode,u=n.header;if("string"!=typeof i&&!(i instanceof ArrayBuffer))try{i=JSON.stringify(i)}catch(e){i=i}if(t.status=a,l.set(t,u),o.call(t,"loadstart"),r.call(t,e.HEADERS_RECEIVED),r.call(t,e.LOADING),t.response=i,i instanceof ArrayBuffer){t.responseText="";for(var c=new Uint8Array(i),s=c.byteLength,f=0;f<s;f++)t.responseText+=String.fromCharCode(c[f])}else t.responseText=i;r.call(t,e.DONE),o.call(t,"load"),o.call(t,"loadend")},fail:function(e){var n=e.errMsg;n.indexOf("abort")!==-1?o.call(t,"abort"):o.call(t,"error",n),o.call(t,"loadend")}})}},{key:"setRequestHeader",value:function(e,t){var n=c.get(this);n[e]=t,c.set(this,n)}}]),e}();f.UNSEND=0,f.OPENED=1,f.HEADERS_RECEIVED=2,f.LOADING=3,f.DONE=4,t.default=f},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=new WeakMap,i=function(){function e(t){var o=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(n(this,e),this.binaryType="",this.bufferedAmount=0,this.extensions="",this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this.protocol="",this.readyState=3,"string"!=typeof t||!/(^ws:\/\/)|(^wss:\/\/)/.test(t))throw new TypeError("Failed to construct 'WebSocket': The URL '"+t+"' is invalid");this.url=t,this.readyState=e.CONNECTING;var a=wx.connectSocket({url:t,protocols:Array.isArray(i)?i:[i]});return r.set(this,a),a.onClose(function(t){o.readyState=e.CLOSED,"function"==typeof o.onclose&&o.onclose(t)}),a.onMessage(function(e){"function"==typeof o.onmessage&&o.onmessage(e)}),a.onOpen(function(){o.readyState=e.OPEN,"function"==typeof o.onopen&&o.onopen()}),a.onError(function(e){"function"==typeof o.onerror&&o.onerror(new Error(e.errMsg))}),this}return o(e,[{key:"close",value:function(t,n){this.readyState=e.CLOSING;var o=r.get(this);o.close({code:t,reason:n})}},{key:"send",value:function(e){if("string"!=typeof e&&!(e instanceof ArrayBuffer))throw new TypeError("Failed to send message: The data "+e+" is invalid");var t=r.get(this);t.send({data:e})}}]),e}();i.CONNECTING=0,i.OPEN=1,i.CLOSING=2,i.CLOSED=3,t.default=i},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(){n(this,e)};t.default=o},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={get length(){var e=wx.getStorageInfoSync(),t=e.keys;return t.length},key:function(e){var t=wx.getStorageInfoSync(),n=t.keys;return n[e]},getItem:function(e){return wx.getStorageSync(e)},setItem:function(e,t){return wx.setStorageSync(e,t)},removeItem:function(e){wx.removeStorageSync(e)},clear:function(){wx.clearStorageSync()}};t.default=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={href:"game.js",reload:function(){}};t.default=n}])},91:function(e,t,n){"use strict";n(79)}})});