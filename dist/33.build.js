webpackJsonp([33],{341:function(t,e,r){"use strict";function n(t){r(821)}Object.defineProperty(e,"__esModule",{value:!0});var o=r(763),i=r(823),s=r(333),a=n,u=s(o.a,i.a,!1,a,null,null);e.default=u.exports},533:function(t,e,r){"use strict";function n(t){return"[object Array]"===S.call(t)}function o(t){return void 0===t}function i(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function s(t){return"[object ArrayBuffer]"===S.call(t)}function a(t){return"undefined"!=typeof FormData&&t instanceof FormData}function u(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function c(t){return"string"==typeof t}function f(t){return"number"==typeof t}function p(t){return null!==t&&"object"==typeof t}function l(t){return"[object Date]"===S.call(t)}function d(t){return"[object File]"===S.call(t)}function h(t){return"[object Blob]"===S.call(t)}function m(t){return"[object Function]"===S.call(t)}function v(t){return p(t)&&m(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function w(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=w(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)b(arguments[r],t);return e}function T(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=T(e[r],t):e[r]="object"==typeof t?T({},t):t}for(var e={},r=0,n=arguments.length;r<n;r++)b(arguments[r],t);return e}function C(t,e,r){return b(e,function(e,n){t[n]=r&&"function"==typeof e?E(e,r):e}),t}var E=r(535),S=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:s,isBuffer:i,isFormData:a,isArrayBufferView:u,isString:c,isNumber:f,isObject:p,isUndefined:o,isDate:l,isFile:d,isBlob:h,isFunction:m,isStream:v,isURLSearchParams:g,isStandardBrowserEnv:x,forEach:b,merge:w,deepMerge:T,extend:C,trim:y}},535:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},536:function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(533);t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},537:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},538:function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r(533),i=r(550),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(539):void 0!==e&&"[object process]"===Object.prototype.toString.call(e)&&(t=r(539)),t}(),transformRequest:[function(t,e){return i(e,"Accept"),i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){a.headers[t]={}}),o.forEach(["post","put","patch"],function(t){a.headers[t]=o.merge(s)}),t.exports=a}).call(e,r(167))},539:function(t,e,r){"use strict";var n=r(533),o=r(551),i=r(536),s=r(553),a=r(556),u=r(557),c=r(540);t.exports=function(t){return new Promise(function(e,f){var p=t.data,l=t.headers;n.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password||"";l.Authorization="Basic "+btoa(h+":"+m)}var v=s(t.baseURL,t.url);if(d.open(t.method.toUpperCase(),i(v,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:n,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};o(e,f,i),d=null}},d.onabort=function(){d&&(f(c("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),f(c(e,t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var g=r(558),y=(t.withCredentials||u(v))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;y&&(l[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(l,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)}),n.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===p&&(p=null),d.send(p)})}},540:function(t,e,r){"use strict";var n=r(552);t.exports=function(t,e,r,o,i){var s=new Error(t);return n(s,e,r,o,i)}},541:function(t,e,r){"use strict";var n=r(533);t.exports=function(t,e){e=e||{};var r={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,function(t){void 0!==e[t]&&(r[t]=e[t])}),n.forEach(i,function(o){n.isObject(e[o])?r[o]=n.deepMerge(t[o],e[o]):void 0!==e[o]?r[o]=e[o]:n.isObject(t[o])?r[o]=n.deepMerge(t[o]):void 0!==t[o]&&(r[o]=t[o])}),n.forEach(s,function(n){void 0!==e[n]?r[n]=e[n]:void 0!==t[n]&&(r[n]=t[n])});var a=o.concat(i).concat(s),u=Object.keys(e).filter(function(t){return-1===a.indexOf(t)});return n.forEach(u,function(n){void 0!==e[n]?r[n]=e[n]:void 0!==t[n]&&(r[n]=t[n])}),r}},542:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},544:function(t,e,r){t.exports=r(545)},545:function(t,e,r){"use strict";function n(t){var e=new s(t),r=i(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(533),i=r(535),s=r(546),a=r(541),u=r(538),c=n(u);c.Axios=s,c.create=function(t){return n(a(c.defaults,t))},c.Cancel=r(542),c.CancelToken=r(559),c.isCancel=r(537),c.all=function(t){return Promise.all(t)},c.spread=r(560),t.exports=c,t.exports.default=c},546:function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(533),i=r(536),s=r(547),a=r(548),u=r(541);n.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=u(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},n.prototype.getUri=function(t){return t=u(this.defaults,t),i(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(o.merge(r||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(o.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},547:function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(533);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},548:function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(533),i=r(549),s=r(537),a=r(538);t.exports=function(t){return n(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},549:function(t,e,r){"use strict";var n=r(533);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},550:function(t,e,r){"use strict";var n=r(533);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},551:function(t,e,r){"use strict";var n=r(540);t.exports=function(t,e,r){var o=r.config.validateStatus;!o||o(r.status)?t(r):e(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},552:function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},553:function(t,e,r){"use strict";var n=r(554),o=r(555);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},554:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},555:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},556:function(t,e,r){"use strict";var n=r(533),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,s={};return t?(n.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([r]):s[e]?s[e]+", "+r:r}}),s):s}},557:function(t,e,r){"use strict";var n=r(533);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},558:function(t,e,r){"use strict";var n=r(533);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},559:function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(542);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},560:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},763:function(t,e,r){"use strict";var n=r(544),o=r.n(n);e.a={name:"TipoTramite",props:{msg:String},data:function(){return{nombreTipoTramite:"",idTipoTramite:0,listaTipoTramite:null}},mounted:function(){this.ObtenerTipoTramite(this.nombreTipoTramite)},methods:{reemplazaVacio:function(t){return""==t?"-":t},Elegir:function(t){1==t&&this.$router.push("/tramite/"+t+"&0"),2==t&&this.$router.push("/tramite/ce/"+t+"&0")},ObtenerTipoTramite:function(t){var e=this;o.a.get("https://mz-services.miraflores.gob.pe:8090/api/tramites/tipotramite/"+this.reemplazaVacio(t)).then(function(t){e.listaTipoTramite=t.data.data,console.log(t.data.data),console.log(e.listaTipoTramite),console.log(e.listaTipoTramite[0].nombre)}).catch(function(t){return console.log(t)})}}}},821:function(t,e,r){var n=r(822);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(48)("0bf8bcab",n,!0,{})},822:function(t,e,r){e=t.exports=r(37)(!1),e.push([t.i,'.rectangulo{width:100%;height:40px;background:#428bca}.buscador{border:0;border-bottom:1px solid}.input-wrapper{display:inline-block;position:relative}.input-wrapper:after{font-family:FontAwesome;content:"\\F0B0";position:absolute;right:6px}',""])},823:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"rectangulo"}),t._v(" "),r("div",{staticClass:"container"},[t._m(1),t._v(" "),r("div",{staticClass:"form-group col-sm-5",staticStyle:{"padding-right":"0px"}},[r("ul",{staticClass:"fa-ul"},t._l(t.listaTipoTramite,function(e){return r("li",{key:e.idTipoTramite,staticStyle:{"text-align":"left"},on:{click:function(r){return t.Elegir(e.idTipoTramite)}}},[r("a",{staticStyle:{cursor:"pointer"},attrs:{onmouseover:""}},[t._m(2,!0),t._v(t._s(e.nombre))])])}),0)]),t._v(" "),r("div",{staticClass:"form-group col-sm-5",staticStyle:{"padding-right":"0px"}}),t._v(" "),r("div",{staticClass:"form-group col-sm-5",staticStyle:{"padding-right":"0px"}})])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticStyle:{"text-align":"left"}},[r("b",[t._v("Trámites y Servicios On-Line")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group col-sm-11",staticStyle:{"padding-top":"100px"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8 input-wrapper"},[r("input",{staticClass:"buscador col-sm-12",attrs:{type:"text",placeholder:"Filtrar por nombre"}})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"fa-li"},[r("i",{staticClass:"fa fa-play"})])}],i={render:n,staticRenderFns:o};e.a=i}});
//# sourceMappingURL=33.build.js.map?v0.43116148788409236