webpackJsonp([34],{343:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(765),o=r(827),i=r(333),s=i(n.a,o.a,!1,null,null,null);t.default=s.exports},533:function(e,t,r){"use strict";function n(e){return"[object Array]"===R.call(e)}function o(e){return void 0===e}function i(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function s(e){return"[object ArrayBuffer]"===R.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function f(e){return"number"==typeof e}function p(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===R.call(e)}function l(e){return"[object File]"===R.call(e)}function h(e){return"[object Blob]"===R.call(e)}function m(e){return"[object Function]"===R.call(e)}function v(e){return p(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function T(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=T(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)w(arguments[r],e);return t}function b(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=b(t[r],e):t[r]="object"==typeof e?b({},e):e}for(var t={},r=0,n=arguments.length;r<n;r++)w(arguments[r],e);return t}function A(e,t,r){return w(t,function(t,n){e[n]=r&&"function"==typeof t?E(t,r):t}),e}var E=r(535),R=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:s,isBuffer:i,isFormData:a,isArrayBufferView:u,isString:c,isNumber:f,isObject:p,isUndefined:o,isDate:d,isFile:l,isBlob:h,isFunction:m,isStream:v,isURLSearchParams:g,isStandardBrowserEnv:x,forEach:w,merge:T,deepMerge:b,extend:A,trim:y}},535:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},536:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(533);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(n(t)+"="+n(e))}))}),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},537:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},538:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(533),i=r(550),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(539):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(e=r(539)),e}(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(s)}),e.exports=a}).call(t,r(167))},539:function(e,t,r){"use strict";var n=r(533),o=r(551),i=r(536),s=r(553),a=r(556),u=r(557),c=r(540);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;n.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:n,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};o(t,f,i),l=null}},l.onabort=function(){l&&(f(c("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){f(c("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",l)),l=null},n.isStandardBrowserEnv()){var g=r(558),y=(e.withCredentials||u(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in l&&n.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},540:function(e,t,r){"use strict";var n=r(552);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},541:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,function(e){void 0!==t[e]&&(r[e]=t[e])}),n.forEach(i,function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])}),n.forEach(s,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])});var a=o.concat(i).concat(s),u=Object.keys(t).filter(function(e){return-1===a.indexOf(e)});return n.forEach(u,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r}},542:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},543:function(e,t,r){"use strict";var n={},o="https://mz-services-test.miraflores.gob.pe:8090/api",i="https://apptest.miraflores.gob.pe/plataforma-atencion";n.filesRecuperaProd="https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/",n.filesRecupera=o+"/files/recuperarEntidadArchivo/",n.filesRecuperaPrincipal=o+"/files/recuperarArchivoPrincipal/",n.filesAnula=o+"/files/anular",n.rutaTramite=o+"/tramites/",n.rutaParametros=o+"/parametros/",n.rutaTareasComunes=o+"/tareas-comun/",n.rutaPagos=o+"/pagos/",n.rutaPersona=o+"/persona/contribuyente/",n.rutaAtencion=o+"/atencion/",n.API_RENTAS=o+"/rentas",n.API_TAREAS_COMUN=o+"/tareas-comun",n.API_PERSONA=o+"/persona",n.API_PAGOS=o+"/pagos",n.API_TRAMITE=o+"/tramites",n.respuestaPagoTributos=i+"/proceso/pagos/tributos/respuesta.php",n.urlIniciaPagoTributo=i+"/#/pago-tributo",n.respuestaPagoTramite=i+"/proceso/pago.php?idArea=",n.MODULO_TRIBUTO_RENTAS="PAGO-TRIBUTOS-RENTAS",n.version="release-1.0.0",t.a=n},544:function(e,t,r){e.exports=r(545)},545:function(e,t,r){"use strict";function n(e){var t=new s(e),r=i(s.prototype.request,t);return o.extend(r,s.prototype,t),o.extend(r,t),r}var o=r(533),i=r(535),s=r(546),a=r(541),u=r(538),c=n(u);c.Axios=s,c.create=function(e){return n(a(c.defaults,e))},c.Cancel=r(542),c.CancelToken=r(559),c.isCancel=r(537),c.all=function(e){return Promise.all(e)},c.spread=r(560),e.exports=c,e.exports.default=c},546:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=r(533),i=r(536),s=r(547),a=r(548),u=r(541);n.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},n.prototype.getUri=function(e){return e=u(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},547:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(533);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},548:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(533),i=r(549),s=r(537),a=r(538);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},549:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},550:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},551:function(e,t,r){"use strict";var n=r(540);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},552:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},553:function(e,t,r){"use strict";var n=r(554),o=r(555);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},554:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},555:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},556:function(e,t,r){"use strict";var n=r(533),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}}),s):s}},557:function(e,t,r){"use strict";var n=r(533);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},558:function(e,t,r){"use strict";var n=r(533);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},559:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(542);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},560:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},765:function(e,t,r){"use strict";var n=r(544),o=r.n(n),i=r(543);t.a={name:"Tramite",data:function(){return{idTramite:0,idArea:0,idTipoTramite:0,idPaso:0,token:"",numeroPedido:0}},mounted:function(){console.log("entro a retorno visa"),this.idTramite=this.$route.params.idTramite,this.idArea=this.$route.params.idArea,this.idTipoTramite=this.$route.params.idTipoTramite,this.idPaso=this.$route.params.paso,this.token=this.$route.params.token,this.numeroPedido=this.$route.params.numeroPedido,this.ActualizarToken()},methods:{ActualizarToken:function(){var e=this,t={};t.idTramite=this.idTramite,t.token=this.token,t.numeroPedido=this.numeroPedido;var r=new FormData;r.append("tramite",JSON.stringify(t)),o.a.post(i.a.rutaTramite+"token-tramite/",r).then(function(t){t.data.success?(console.log("redirigiendo a Carta externa"),e.$router.push("/tramite/ce/"+e.idArea+"&"+e.idTipoTramite+"&"+e.idTramite+"&"+e.idPaso)):(e.$swal.close(),e.$swal({icon:"error",title:"Error",text:"Sucedió un error. Favor vuelva a intentar en unos minutos. "+t.data.message}))}).catch(function(e){return console.log(e)})}}}},827:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],i={render:n,staticRenderFns:o};t.a=i}});
//# sourceMappingURL=34.build.js.map?v0.08787076142646266