!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s=e();for(var a in s)("object"==typeof exports?exports:t)[a]=s[a]}}(this,function(){return function(t){function e(a){if(s[a])return s[a].exports;var i=s[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}({0:function(t,e,s){t.exports=s(88)},1:function(t,e){"use strict";var s={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){return"function"==typeof t?t.call(e):t},execFuncs:function(t,e,a){t&&(s.isArray(a)||(a=[a])),"function"==typeof t?t.apply(e,a):s.isArray(t)&&t.length&&t.forEach(function(t){t&&t.apply(e,a)})},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,s,a,i,r){return!(s>t||t>a||i>e||e>r)},firstValuable:function(t,e,s){return void 0===t?void 0===e?s:e:t}};t.exports=s},88:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(1),r=a(i),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=",o=new Image;o.src=l;var h={drip:function(t,e,s){var a=t.subtype||1;e.clearRect(0,0,this.style.tw,this.style.th),e.globalCompositeOperation="source-over",e.globalAlpha=1,1===a&&e.drawImage(o,(this.style.tw>>1)-(this.style.tw>>1)*t.progress*2,(this.style.th>>1)-(this.style.th>>1)*t.progress*2,this.style.tw*t.progress*2,this.style.th*t.progress*2),1!==a&&e.drawImage(o,(this.style.tw>>1)-(this.style.tw>>1)*(1-t.progress)*2,(this.style.th>>1)-(this.style.th>>1)*(1-t.progress)*2,this.style.tw*(1-t.progress)*2,this.style.th*(1-t.progress)*2),e.globalCompositeOperation=1===a?"source-out":"source-in",e.globalAlpha=Math.max(1-t.progress,0),e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0,this.style.tw,this.style.th)},door:function(t,e,s){var a=t.subtype||1,i=0,l=0;1===a?i=this.style.tw/2:2===a?(i=this.style.tw,l=this.style.th/2):3===a?(i=this.style.tw/2,l=this.style.th):4===a&&(l=this.style.th/2),e.clearRect(0,0,this.style.tw,this.style.th),e.save(),e.translate(i,l),e.rotate(90*(3>a?1:-1)*3.14/180*t.progress),e.translate(-i,-l),e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0,i||this.style.tw,this.style.th-l||l,0,0,i||this.style.tw,this.style.th-l||l),e.restore(),e.save(),e.translate(i,l),e.rotate(90*(3>a?-1:1)*3.14/180*t.progress),e.translate(-i,-l),e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),4>a?this.style.tw-i:0,3>a?l:4>a?0:l,this.style.tw-i||i,this.style.th-l||l,4>a?this.style.tw-i:0,3>a?l:4>a?0:l,this.style.tw-i||i,this.style.th-l||l),e.restore()},rotate:function(t,e,s){var a=t.subtype||1,i=0,l=0;1===a?i=this.style.tw:2===a?(i=this.style.tw,l=this.style.th):3===a&&(l=this.style.th),e.clearRect(0,0,this.style.tw,this.style.th),e.save(),e.translate(i,l),e.rotate(1.57*t.progress),e.translate(-i,-l),e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0,this.style.tw,this.style.th),e.restore()},print:function(t,e,s){e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0);var a=t.subtype||1;1===a&&e.clearRect(0,0,this.style.tw,t.progress*this.style.th),2===a&&e.clearRect(0,0,t.progress*this.style.tw,this.style.th),3===a&&e.clearRect(0,(1-t.progress)*this.style.th,this.style.tw,this.style.th),4===a&&e.clearRect((1-t.progress)*this.style.tw,0,this.style.tw,this.style.th)},switch:function(t,e,s){var a=1.3*t.progress;0===a&&(s.fillStyle="rgba(0, 0, 0, 1)",s.globalAlpha=.2);var i=t.subtype||1;1===i&&s.fillRect(0,0,this.style.tw,a*this.style.th),2===i&&s.fillRect(0,0,a*this.style.tw,this.style.th),3===i&&s.fillRect(0,(1-a)*this.style.th,this.style.tw,this.style.th),4===i&&s.fillRect((1-a)*this.style.tw,0,this.style.tw,this.style.th),e.globalCompositeOperation="source-over",e.clearRect(0,0,this.style.tw,this.style.th),e.drawImage(s.$canvas,0,0),e.globalCompositeOperation="source-out",e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0)},sweep:function(t,e,s){if(!t.particleData.length)for(var a=t.subtype||1,i=this.style.th/this.style.tw,l=0;this.style.tw/50>l;l++)1===a&&t.particleData.push({x:50*l+Math.random()*this.style.tw/5/2-this.style.tw/5,y:50*i*l+Math.random()*this.style.th/5/2-this.style.th/5,size:100-l}),2===a&&t.particleData.push({x:this.style.tw-(50*l+Math.random()*this.style.tw/5/2-this.style.tw/5),y:50*i*l+Math.random()*this.style.th/5/2-this.style.th/5,size:100-l}),3===a&&t.particleData.push({x:this.style.tw/2,y:50*i*l+Math.random()*this.style.th/5/2-this.style.th/5,size:100-l}),4===a&&t.particleData.push({x:50*i*l+Math.random()*this.style.tw/5/2-this.style.tw/5,y:this.style.th/2,size:100-l});s.fillStyle="rgba(0, 0, 0, 0.005)",s.fillRect(0,0,this.style.tw,this.style.th),s.globalAlpha=t.progress*t.progress,t.particleData.forEach(function(e,a){e.size>t.size+t.minsize||(s.drawImage(o,e.x-e.size/2,e.y-e.size/2,e.size,e.size),e.size=t.progress*t.size*1.3)}),e.globalCompositeOperation="source-over",e.clearRect(0,0,this.style.tw,this.style.th),e.drawImage(s.$canvas,0,0),e.globalCompositeOperation="source-out",e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0,this.style.tw,this.style.th)},flow:function(t,e,s){var a=this;if(!t.particleData.length)for(var i=0;this.style.tw/50>i;i++)t.particleData.push({x:-100+50*i+40*Math.random()-20,y:200*-Math.random()-300,extra:20*Math.random()});s.fillStyle="rgba(0, 0, 0, 0.01)",s.fillRect(0,0,this.style.tw,this.style.th),t.particleData.forEach(function(e){s.drawImage(o,e.x,e.y,200,200),e.y+=1/t.ticks*a.style.th+e.extra}),e.globalCompositeOperation="source-over",e.clearRect(0,0,this.style.tw,this.style.th),e.drawImage(s.$canvas,0,0),e.globalCompositeOperation="source-out",e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0,this.style.tw,this.style.th)},spiral:function(t,e,s){s.translate(this.style.tw/2,this.style.th/2),s.rotate(360/t.ticks*3*3.14/180*t.progress),s.translate(-this.style.tw/2,-this.style.th/2),s.globalAlpha=t.progress*t.progress,s.fillStyle="rgba(0, 0, 0, 1)",s.fillRect(this.style.tw/2-t.size*t.progress/2,this.style.th/2-t.size*t.progress/2,t.size*t.progress,t.size*t.progress),e.globalCompositeOperation="source-over",e.clearRect(0,0,this.style.tw,this.style.th),e.drawImage(s.$canvas,0,0),e.globalCompositeOperation="source-out",e.drawImage(r.default.funcOrValue(this.$fade.originImg,this),0,0)}};window.Easycanvas.class.sprite.prototype.fade=function(t){var e=t.type,s=t.ticks,a=t.subtype,i=this;i.$fade||(i.$fade={originImg:i.content.img,filterCanvas:document.createElement("canvas"),middlewareCanvas:document.createElement("canvas")},i.$fade.filterCanvas.width=i.$fade.middlewareCanvas.width=i.style.tw,i.$fade.filterCanvas.height=i.$fade.middlewareCanvas.height=i.style.th,i.$fade.filterCxt=i.$fade.filterCanvas.getContext("2d"),i.$fade.middlewareCxt=i.$fade.middlewareCanvas.getContext("2d"),i.$fade.filterCxt.$canvas=i.$fade.filterCanvas,i.$fade.middlewareCxt.$canvas=i.$fade.middlewareCanvas);var l={ticks:0,progress:0,callback:!1,particleData:[]};l.ticks=s||60,l.subtype=a,l.size=Math.max(i.style.tw,i.style.th),l.minsize=Math.min(i.style.tw,i.style.th);var o=document.createElement("canvas");o.width=r.default.funcOrValue(i.style.tw,i),o.height=r.default.funcOrValue(i.style.th,i);var n=o.getContext("2d");return n.drawImage(i.$canvas.$dom,i.getStyle("tx"),i.getStyle("ty")),i.$fade.originImg=o,i.children=[],i.content.img=i.$fade.filterCanvas,i.on("beforeTick",function t(){if(i.$fade)return h[e||"drip"].call(i,l,i.$fade.filterCxt,i.$fade.middlewareCxt),l.progress>1?(i.off("beforeTick",t),i.style.opacity=0,delete i.$fade,void(l.callback&&i.$canvas.nextTick(function(){l.callback.call(i)}))):void(l.progress+=1/(s||100))}),{then:function(t){l.callback=t}}},window.Easycanvas.class.sprite.prototype.fade.types=[];for(var n in h)window.Easycanvas.class.sprite.prototype.fade.types.push(n)}})});