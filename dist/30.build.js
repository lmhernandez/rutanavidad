webpackJsonp([30],{370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(799),o=n(918),a=n(333),i=a(r.a,o.a,!1,null,null,null);t.default=i.exports},533:function(e,t,n){"use strict";function r(e){return"[object Array]"===A.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function i(e){return"[object ArrayBuffer]"===A.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function f(e){return"number"==typeof e}function p(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===A.call(e)}function d(e){return"[object File]"===A.call(e)}function h(e){return"[object Blob]"===A.call(e)}function m(e){return"[object Function]"===A.call(e)}function g(e){return p(e)&&m(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function x(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)x(arguments[n],e);return t}function R(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=R(t[n],e):t[n]="object"==typeof e?R({},e):e}for(var t={},n=0,r=arguments.length;n<r;n++)x(arguments[n],e);return t}function S(e,t,n){return x(t,function(t,r){e[r]=n&&"function"==typeof t?E(t,n):t}),e}var E=n(535),A=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:i,isBuffer:a,isFormData:s,isArrayBufferView:u,isString:c,isNumber:f,isObject:p,isUndefined:o,isDate:l,isFile:d,isBlob:h,isFunction:m,isStream:g,isURLSearchParams:v,isStandardBrowserEnv:b,forEach:x,merge:w,deepMerge:R,extend:S,trim:y}},535:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},536:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(533);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},537:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},538:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(533),a=n(550),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(539):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(e=n(539)),e}(),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,n(167))},539:function(e,t,n){"use strict";var r=n(533),o=n(551),a=n(536),i=n(553),s=n(556),u=n(557),c=n(540);e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+m)}var g=i(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(g,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:r,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,f,a),d=null}},d.onabort=function(){d&&(f(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=n(558),y=(e.withCredentials||u(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(l,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},540:function(e,t,n){"use strict";var r=n(552);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},541:function(e,t,n){"use strict";var r=n(533);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,function(e){void 0!==t[e]&&(n[e]=t[e])}),r.forEach(a,function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])}),r.forEach(i,function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])});var s=o.concat(a).concat(i),u=Object.keys(t).filter(function(e){return-1===s.indexOf(e)});return r.forEach(u,function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}),n}},542:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},543:function(e,t,n){"use strict";var r={},o="https://mz-services-test.miraflores.gob.pe:8090/api",a="https://apptest.miraflores.gob.pe/plataforma-atencion";r.filesRecuperaProd="https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/",r.filesRecupera=o+"/files/recuperarEntidadArchivo/",r.filesRecuperaPrincipal=o+"/files/recuperarArchivoPrincipal/",r.filesAnula=o+"/files/anular",r.rutaTramite=o+"/tramites/",r.rutaParametros=o+"/parametros/",r.rutaTareasComunes=o+"/tareas-comun/",r.rutaPagos=o+"/pagos/",r.rutaPersona=o+"/persona/contribuyente/",r.rutaAtencion=o+"/atencion/",r.API_RENTAS=o+"/rentas",r.API_TAREAS_COMUN=o+"/tareas-comun",r.API_PERSONA=o+"/persona",r.API_PAGOS=o+"/pagos",r.API_TRAMITE=o+"/tramites",r.respuestaPagoTributos=a+"/proceso/pagos/tributos/respuesta.php",r.urlIniciaPagoTributo=a+"/#/pago-tributo",r.respuestaPagoTramite=a+"/proceso/pago.php?idArea=",r.MODULO_TRIBUTO_RENTAS="PAGO-TRIBUTOS-RENTAS",r.version="release-1.0.0",t.a=r},544:function(e,t,n){e.exports=n(545)},545:function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(533),a=n(535),i=n(546),s=n(541),u=n(538),c=r(u);c.Axios=i,c.create=function(e){return r(s(c.defaults,e))},c.Cancel=n(542),c.CancelToken=n(559),c.isCancel=n(537),c.all=function(e){return Promise.all(e)},c.spread=n(560),e.exports=c,e.exports.default=c},546:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(533),a=n(536),i=n(547),s=n(548),u=n(541);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},547:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(533);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},548:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(533),a=n(549),i=n(537),s=n(538);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},549:function(e,t,n){"use strict";var r=n(533);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},550:function(e,t,n){"use strict";var r=n(533);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},551:function(e,t,n){"use strict";var r=n(540);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},552:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},553:function(e,t,n){"use strict";var r=n(554),o=n(555);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},554:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},555:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},556:function(e,t,n){"use strict";var r=n(533),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},557:function(e,t,n){"use strict";var r=n(533);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},558:function(e,t,n){"use strict";var r=n(533);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},559:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(542);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},560:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},561:function(e,t,n){"use strict";var r={};r.storage={},r.pagina={},r.alert={},r.storage.get=function(e){return null!=localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null},r.storage.set=function(e,t){localStorage.setItem(e,JSON.stringify(t))},r.storage.delete=function(e){localStorage.removeItem(e)},r.limpiarStorage=function(){console.log("Limpiaremos el localStorage"),localStorage.clear()},r.alert.success=function(e,t,n){e.$swal({toast:!0,position:"top",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:t,text:n})},r.cerrarSesion=function(e){console.log("Cerraremos la sesion"),localStorage.clear(),e.$router.push("/login")},r.pagina.go=function(e,t){e.$router.push(t)},r.pagina.anterior=function(e){e.$router.go(-1)},t.a=r},563:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return d}),n.d(t,"c",function(){return p});var r=n(544),o=n.n(r),a=n(543),i=a.a.API_RENTAS,s=function(e,t){return o.a.post(i+"/acceso",t,{params:{guardarEnPtdGenUsuario:e}})},u=function(e){return o.a.get(i+"/contribuyente/"+e)},c=function(e,t,n){return o.a.get(i+"/estado-cuenta/"+e+"/"+t+"/"+n)},f=function(e){return o.a.get(i+"/estado-cuenta/"+e)},p=function(e){return o.a.post(i+"/estado-cuenta/codigo-cuenta",e)},l=function(e){return o.a.get(i+"/estado-cuenta/predios/"+e)},d=function(e){return o.a.post(i+"/estado-cuenta/selecciona-predios",e)}},799:function(e,t,n){"use strict";var r=n(561),o=n(563);t.a={data:function(){return{app:"appRentas",appRentas:null}},created:function(){this.appRentas=r.a.storage.get(this.app),this.iniciaProceso()},methods:{iniciaProceso:function(){var e=this;Object(o.b)(this.appRentas.contribuyente.numDoc).then(function(t){if(t.data.success){var n=t.data.data;e.appRentas.contribuyente.nombres=n[0].nomb,1==n.length?n[0].siContribuyente?(e.appRentas.contribuyente.seleccionado={},e.appRentas.contribuyente.seleccionado.tdi=n[0].tdi,e.appRentas.contribuyente.seleccionado.con=n[0].con,e.appRentas.contribuyente.seleccionado.nombres=n[0].nomb,r.a.pagina.go(e,"/estado-cuenta/contribuyente/cuenta")):e.noEsContribuyente():(r.a.pagina.go(e,"/estado-cuenta/contribuyente"),e.appRentas.siContribuyentesAsociados=!0),r.a.storage.set(e.app,e.appRentas)}else e.noEsContribuyente()}).catch(function(e){return console.log(e)})},noEsContribuyente:function(){var e=this;this.$swal.fire({title:"Información",text:"No puede acceder a este módulo ya que no está relacionado a ningún contribuyente",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"Aceptar"}).then(function(t){t.value&&r.a.pagina.go(e,"/")})}}}},918:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],a={render:r,staticRenderFns:o};t.a=a}});
//# sourceMappingURL=30.build.js.map?v0.12009191621709436