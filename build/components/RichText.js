!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(this,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=9)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="undefined"!=typeof window;t["default"]=function(e,t){n&&window.Easycanvas&&(Easycanvas[t]=function(t){return e(t,Easycanvas)})}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n={},o="\n".slice(0,1),r=function(e,t){var i,r=String(e),l=r+JSON.stringify(t);if(t.fontSize=t.fontSize||16,n[l])return n[l];t.padding?((i=(i=t.padding.split(" ")).map(function(e){return parseInt(e)}))[1]=Number(i[1]||i[0]),i[2]=Number(i[2]||i[0]),i[3]=Number(i[3]||i[1])):i=[0,0,0,0];var a=t.minWidth||t.width||(t.fontSize||16)*r.length+i[1]+i[3]+100,f=r.split("\n").length,d=t.fontSize*(Math.round(r.length)/a+f-1)*(t.lineHeight||t.fontSize)+i[0]+i[2]+100,u=document.createElement("canvas");u.width=a,u.height=d;var c=u.getContext("2d");window.tempCanvas=u,window.tempCtx=c,c.textBaseline="middle",c.font=(t.fontStyle?t.fontStyle+" ":"")+t.fontSize+"px "+(t.family||"serif"),c.fillStyle=t.color||"#000",c.textAlign=t.textAlign||"left";for(var s=t.lineHeight?(t.lineHeight-t.fontSize)/2:0,h=0,g=1,p=0,v=0,m=1;;)if((v=c.measureText(r.slice(h,g)).width)>t.width){if("ellipsis"===t.textOverflow){g-=2,c.fillText(r.slice(h,g)+"...",0,s+t.fontSize/2),s+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:0),m++,p=t.width-i[1]-i[3];break}g-=1,c.fillText(r.slice(h,g),0,s+t.fontSize/2),g=(h=g)+1,s+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:10),m++}else{if(g>r.length-1){v>p&&(p=v),c.fillText(r.slice(h,g),0,s+t.fontSize/2),s+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:0);break}r.slice(g,g+1)===o&&(c.fillText(r.slice(h,g),0,s+t.fontSize/2),g=(h=g+=1)+1,s+=t.fontSize+(t.lineHeight?(t.lineHeight-t.fontSize)/2:10),m++),v>p&&(p=v),g++}var y=document.createElement("canvas");y.lastLineLeft=v,y.lineCount=m,y.width=Math.max(p+i[1]+i[3],t.minWidth||0),y.height=s+i[0]+i[2];var S=y.getContext("2d");if(t.backgroundColor&&(S.fillStyle=t.backgroundColor,S.fillRect(0,0,y.width,y.height)),S.drawImage(u,(y.width-p)/2,i[0]),t.border){var b=t.border.split(" "),w=b.pop();"solid"===b[b.length-1]&&b.pop();var x=b[0],z=b[1]||x,_=b[2]||x,T=b[3]||z||x;x=parseInt(x),z=parseInt(z),_=parseInt(_),T=parseInt(T);var j=t.borderRadius||0;if(S.beginPath(),S.strokeStyle=w,x&&(S.lineWidth=x,S.moveTo(T?j:0,0),S.lineTo(y.width-(z?j:0),0)),z&&(S.lineWidth=z,S.moveTo(y.width,x?j:0),S.lineTo(y.width,y.height-(_?j:0))),_&&(S.lineWidth=_,S.moveTo(T?j:0,y.height),S.lineTo(y.width-(z?j:0),y.height)),T&&(S.lineWidth=T,S.moveTo(0,x?j:0),S.lineTo(0,y.height-(_?j:0))),S.stroke(),j){var H=document.createElement("canvas"),O=Math.min(y.width,y.height);H.width=H.height=O;var M=H.getContext("2d");M.beginPath(),M.strokeStyle=w,M.arc(O>>1,O>>1,(O>>1)-1,0,2*Math.PI),M.stroke(),x&&z&&S.drawImage(H,O>>1,0,O>>1,O>>1,y.width-j,0,j,j),_&&z&&S.drawImage(H,O>>1,O>>1,O>>1,O>>1,y.width-j,y.height-j,j,j),x&&T&&S.drawImage(H,0,0,O>>1,O>>1,0,0,j,j),_&&T&&S.drawImage(H,0,O>>1,O>>1,O>>1,0,y.height-j,j,j)}}return n[l]=y,y};t["default"]=r},,,,,,,,function(e,t,i){e.exports=i(10)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(i(0)),o=r(i(1));function r(e){return e&&e.__esModule?e:{"default":e}}var l={padding:0,width:300,lineHeight:100,family:'"Helvetica Neue",Helvetica,Arial,sans-serif'},a=function(e){e.content.img=e.text?(0,o["default"])(e.text,Object.assign({},l,{lineHeight:e.style.fontSize,textAlign:"left"},e.style)):undefined},f=function(e,t){var i;return e.name=e.name||"Text",i=new t.Sprite(e),a(i),Object.defineProperty(i,"text",{get:function(){return i.content.text},set:function(e){i.content.img=text}}),i.update=function(e){this.__proto__.update.call(this,e),a(this)},i};(0,n["default"])(f,"RichText");var d=f;t["default"]=d}])});