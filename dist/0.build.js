webpackJsonp([0,29],{334:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(577),o=r(597),a=r(333),i=a(n.a,o.a,!1,null,null,null);t.default=i.exports},39:function(e,t,r){"use strict";function n(e){r(857)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(775),a=r(860),i=r(333),s=n,c=i(o.a,a.a,!1,s,null,null);t.default=c.exports},533:function(e,t,r){"use strict";function n(e){return"[object Array]"===_.call(e)}function o(e){return void 0===e}function a(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function i(e){return"[object ArrayBuffer]"===_.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function c(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function l(e){return"number"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===_.call(e)}function d(e){return"[object File]"===_.call(e)}function m(e){return"[object Blob]"===_.call(e)}function g(e){return"[object Function]"===_.call(e)}function h(e){return f(e)&&g(e.pipe)}function v(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function x(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)x(arguments[r],e);return t}function S(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=S(t[r],e):t[r]="object"==typeof e?S({},e):e}for(var t={},r=0,n=arguments.length;r<n;r++)x(arguments[r],e);return t}function E(e,t,r){return x(t,function(t,n){e[n]=r&&"function"==typeof t?C(t,r):t}),e}var C=r(535),_=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:i,isBuffer:a,isFormData:s,isArrayBufferView:c,isString:u,isNumber:l,isObject:f,isUndefined:o,isDate:p,isFile:d,isBlob:m,isFunction:g,isStream:h,isURLSearchParams:v,isStandardBrowserEnv:y,forEach:x,merge:w,deepMerge:S,extend:E,trim:b}},535:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},536:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(533);e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},537:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},538:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(533),a=r(550),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(539):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(e=r(539)),e}(),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,r(167))},539:function(e,t,r){"use strict";var n=r(533),o=r(551),a=r(536),i=r(553),s=r(556),c=r(557),u=r(540);e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",g=e.auth.password||"";p.Authorization="Basic "+btoa(m+":"+g)}var h=i(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(h,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:n,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,l,a),d=null}},d.onabort=function(){d&&(l(u("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){l(u("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var v=r(558),b=(e.withCredentials||c(h))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in d&&n.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},540:function(e,t,r){"use strict";var n=r(552);e.exports=function(e,t,r,o,a){var i=new Error(e);return n(i,t,r,o,a)}},541:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,function(e){void 0!==t[e]&&(r[e]=t[e])}),n.forEach(a,function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])}),n.forEach(i,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])});var s=o.concat(a).concat(i),c=Object.keys(t).filter(function(e){return-1===s.indexOf(e)});return n.forEach(c,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r}},542:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},543:function(e,t,r){"use strict";var n={},o="https://mz-services-test.miraflores.gob.pe:8090/api",a="https://apptest.miraflores.gob.pe/plataforma-atencion";n.filesRecuperaProd="https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/",n.filesRecupera=o+"/files/recuperarEntidadArchivo/",n.filesRecuperaPrincipal=o+"/files/recuperarArchivoPrincipal/",n.filesAnula=o+"/files/anular",n.rutaTramite=o+"/tramites/",n.rutaParametros=o+"/parametros/",n.rutaTareasComunes=o+"/tareas-comun/",n.rutaPagos=o+"/pagos/",n.rutaPersona=o+"/persona/contribuyente/",n.rutaAtencion=o+"/atencion/",n.API_RENTAS=o+"/rentas",n.API_TAREAS_COMUN=o+"/tareas-comun",n.API_PERSONA=o+"/persona",n.API_PAGOS=o+"/pagos",n.API_TRAMITE=o+"/tramites",n.respuestaPagoTributos=a+"/proceso/pagos/tributos/respuesta.php",n.urlIniciaPagoTributo=a+"/#/pago-tributo",n.respuestaPagoTramite=a+"/proceso/pago.php?idArea=",n.MODULO_TRIBUTO_RENTAS="PAGO-TRIBUTOS-RENTAS",n.version="release-1.0.0",t.a=n},544:function(e,t,r){e.exports=r(545)},545:function(e,t,r){"use strict";function n(e){var t=new i(e),r=a(i.prototype.request,t);return o.extend(r,i.prototype,t),o.extend(r,t),r}var o=r(533),a=r(535),i=r(546),s=r(541),c=r(538),u=n(c);u.Axios=i,u.create=function(e){return n(s(u.defaults,e))},u.Cancel=r(542),u.CancelToken=r(559),u.isCancel=r(537),u.all=function(e){return Promise.all(e)},u.spread=r(560),e.exports=u,e.exports.default=u},546:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=r(533),a=r(536),i=r(547),s=r(548),c=r(541);n.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=c(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},n.prototype.getUri=function(e){return e=c(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},547:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(533);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},548:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(533),a=r(549),i=r(537),s=r(538);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return n(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},549:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},550:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},551:function(e,t,r){"use strict";var n=r(540);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},552:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},553:function(e,t,r){"use strict";var n=r(554),o=r(555);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},554:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},555:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},556:function(e,t,r){"use strict";var n=r(533),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,i={};return e?(n.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}}),i):i}},557:function(e,t,r){"use strict";var n=r(533);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},558:function(e,t,r){"use strict";var n=r(533);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},559:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(542);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},560:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},561:function(e,t,r){"use strict";var n={};n.storage={},n.pagina={},n.alert={},n.storage.get=function(e){return null!=localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null},n.storage.set=function(e,t){localStorage.setItem(e,JSON.stringify(t))},n.storage.delete=function(e){localStorage.removeItem(e)},n.limpiarStorage=function(){console.log("Limpiaremos el localStorage"),localStorage.clear()},n.alert.success=function(e,t,r){e.$swal({toast:!0,position:"top",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:t,text:r})},n.cerrarSesion=function(e){console.log("Cerraremos la sesion"),localStorage.clear(),e.$router.push("/login")},n.pagina.go=function(e,t){e.$router.push(t)},n.pagina.anterior=function(e){e.$router.go(-1)},t.a=n},563:function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return c}),r.d(t,"d",function(){return u}),r.d(t,"e",function(){return l}),r.d(t,"f",function(){return p}),r.d(t,"g",function(){return d}),r.d(t,"c",function(){return f});var n=r(544),o=r.n(n),a=r(543),i=a.a.API_RENTAS,s=function(e,t){return o.a.post(i+"/acceso",t,{params:{guardarEnPtdGenUsuario:e}})},c=function(e){return o.a.get(i+"/contribuyente/"+e)},u=function(e,t,r){return o.a.get(i+"/estado-cuenta/"+e+"/"+t+"/"+r)},l=function(e){return o.a.get(i+"/estado-cuenta/"+e)},f=function(e){return o.a.post(i+"/estado-cuenta/codigo-cuenta",e)},p=function(e){return o.a.get(i+"/estado-cuenta/predios/"+e)},d=function(e){return o.a.post(i+"/estado-cuenta/selecciona-predios",e)}},566:function(e,t,r){e.exports=r.p+"success.png?53252348748e49ab1d6462042aa3fbd3"},568:function(e,t,r){e.exports=r.p+"pdf.png?26fe8d5d67ba65e2e5ddc9a8b08bfd4c"},569:function(e,t,r){e.exports=r.p+"ask.png?734f2d6ef55a34a96c078e8e1663f0c9"},570:function(e,t,r){e.exports=r.p+"loader.png?906bd902525a623d3491350af83d1e48"},571:function(e,t,r){e.exports=r.p+"logo-miraflores.png?c376f73e106e0a94ccb09c2488ca36c6"},572:function(e,t,r){e.exports=r.p+"admiracion.png?82d7beec2048090b980dc450afc6b635"},573:function(e,t,r){e.exports=r.p+"ayuda.png?51f6c57ce3e8003900dde966283b625c"},574:function(e,t,r){e.exports=r.p+"file.png?d4b2242988738bfaccc36e19cda85bc4"},575:function(e,t,r){e.exports=r.p+"arrow-left.png?2257d208e2577c8dd47570d6f2f19333"},576:function(e,t,r){e.exports=r.p+"adjuntar.png?72a4f6636dc439aa73b403a5d5b072f2"},577:function(e,t,r){"use strict";var n=r(94),o=r(544),a=r.n(o),i=r(543),s=r(561),c=r(563);t.a={name:"Login",data:function(){return{version:i.a.version,correo:"",contrasena:"",reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},props:{showModal:!1},created:function(){window.rutaReturn=window.rutaReturn?window.rutaReturn:"/"},mounted:function(){this.PaginaVista(),localStorage.setItem("logueadoTramite",!1)},methods:{PaginaVista:function(){dataLayer.push({event:"pagina_vista","page-url":"/login","page-title":"login"})},ValidaCorreoFormato:function(e){return""!==e&&this.reg.test(e)},ValidarFormulario:function(){return""===this.correo?(this.$swal({icon:"error",title:"Error",text:"Ingrese cuenta de usuario"}),!1):""!==this.contrasena||(this.$swal({icon:"error",title:"Error",text:"Ingrese su contraseña"}),!1)},IniciarSesion:function(){var e=this;if(this.ValidarFormulario()){var t={usuario:this.correo,contrasena:this.contrasena},r=i.a.rutaTramite+"acceso/obtener/";a.a.post(r,t).then(function(t){if(t.data.success){var r=t.data.data;localStorage.setItem("logueadoTramite",!0),localStorage.setItem("nombreUsuarioLogueadoTramite",r.nombre),localStorage.setItem("paternoUsuarioLogueadoTramite",r.apePaterno),localStorage.setItem("maternoUsuarioLogueadoTramite",r.apeMaterno),localStorage.setItem("idUsuarioLogueadoTramite",r.idUsuario),localStorage.setItem("cuentaTrmaite",e.correo),localStorage.setItem("idPersonaLogueadoTramite",r.idPersona),localStorage.setItem("nombreCompletoLogueadoTramite",r.apePaterno+" "+r.apeMaterno+" "+r.nombre),localStorage.setItem("numeroDocumentoLogueadoTramite",r.numeroDocumento),localStorage.setItem("correoNotificacionTramite",r.emailNotificacion),localStorage.setItem("restricciones",JSON.stringify(r.restricciones)),s.a.storage.set("usuarioMigrado",!0);var o={};o.contribuyente={},o.contribuyente.numDoc=r.numeroDocumento,o.contribuyente.nombres=r.apePaterno+" "+r.apeMaterno+", "+r.nombre,o.contribuyente.email=e.correo,s.a.storage.set("appRentas",o),n.a.$emit("login",r.nombre),e.$router.push(window.rutaReturn)}else if(t.data.existeUsuario)t.data.activado?e.controlErrorSesion(404):e.controlErrorSesion(405);else{var a={};a.email=e.correo,a.pass=e.contrasena;var i=t.data.message;Object(c.a)(1,a).then(function(t){if(t.data.success){var r=t.data.data;if(e.validaUsuarioRentas(r)){localStorage.setItem("logueadoTramite",!0),localStorage.setItem("nombreUsuarioLogueadoTramite",r.nombre),localStorage.setItem("paternoUsuarioLogueadoTramite",r.apePat),localStorage.setItem("maternoUsuarioLogueadoTramite",r.apeMat),localStorage.setItem("nombreCompletoLogueadoTramite",r.apePat+" "+r.apeMat+" "+r.nombre);var o=""!==localStorage.getItem("nombreUsuarioLogueadoTramite").trim()?localStorage.getItem("nombreUsuarioLogueadoTramite"):localStorage.getItem("nombreCompletoLogueadoTramite");s.a.storage.set("usuarioMigrado",!1);var c={};c.contribuyente={},c.contribuyente.numDoc=r.numDoc.trim(),c.contribuyente.nombres=r.apePat.trim().toUpperCase()+" "+r.apeMat.trim().toUpperCase()+", "+r.nombre.trim().toUpperCase(),c.contribuyente.email=a.email,c.contribuyente.tipoDocumento=r.tipDoc,c.contribuyente.contribuyenteInstitucion=r.contribuyenteInstitucion,s.a.storage.set("appRentas",c),n.a.$emit("login",o),e.IniciarSesion()}else e.controlErrorSesion(40401)}else localStorage.setItem("logueadoTramite",!1),e.$swal({icon:"error",title:"Error",text:""===i||null==i?"Verifique datos":i})}).catch(function(t){var r=t.response.data.code;e.controlErrorSesion(r)})}}).catch(function(e){return console.log("error"+e)})}},validaUsuarioRentas:function(e){var t=!0;return 32!==e.tipDoc&&e.nombre.trim()+e.apePat.trim()+e.apeMat.trim()===""&&(t=!1),32===e.tipDoc&&e.nombre.trim()+e.apePat.trim()+e.apeMat.trim()===""&&(t=!1),t},lanzaServicio:function(e,t){0===e.opcion?this.$router.push("/"):1===e.opcion?this.$router.push("/tramiteVirtual"):2===e.opcion?this.$router.push("/consultaTramite"):5===e.opcion?this.$router.push("/tramite/ce/"+localStorage.getItem("areaTramite")+"&"+localStorage.getItem("tipoTramite")+"&"+localStorage.getItem("idTramite")+"&0"):"pago-tributo"===e.opcion?this.$router.push("/pago-tributo"):"estado-cuenta"===e.opcion&&this.$router.push("/estado-cuenta"),n.a.$emit("login",t)},controlErrorSesion:function(e){if(404===e)this.$swal({icon:"error",title:"Error de inicio de sesión",html:"El usuario y/o la contraseña ingresados son incorrectos"});else if(40401===e){var t="<div style='line-height:24px;'>Por las mejoras realizadas en nuestra plataforma on line, solo podrán ingresar ";t+="los contribuyentes registrados, para mayor información comuníquese al teléfono ",t+="<br/><b>(01) 617-7555</b></div>",this.$swal({icon:"warning",title:"Alerta",html:t})}else 405===e?this.$swal({icon:"error",title:"Error de inicio de sesión",html:"Debe activar su cuenta. Favor revise su correo electrónico."}):500===e&&this.$swal({icon:"error",title:"Error",text:"Ocurrio un error inesperado"})}}}},578:function(e,t,r){e.exports=r.p+"dni-02-01.png?bda472fa019c09f137e1a66a59bd5570"},579:function(e,t,r){e.exports=r.p+"dni-02-02.png?c49941b5a2620e453d36c157a1449b21"},580:function(e,t,r){e.exports=r.p+"flecha_derecha.png?d1009cc4ce3a081670ec3691bb9ef0f7"},581:function(e,t,r){e.exports=r.p+"user.png?e97a19018afa3007312be416b9376a4c"},582:function(e,t,r){e.exports=r.p+"download.png?2fdcfaab54fa40cd87768405a00fb3ae"},583:function(e,t,r){e.exports=r.p+"question.png?247431e9c7cda0d6e5c517bc7d1d8507"},584:function(e,t,r){e.exports=r.p+"nuevotramite.png?ea89c9e46b0659f3f14089bfdd5ca484"},585:function(e,t,r){e.exports=r.p+"anexar.png?6970a37041b50bee2a48f7015860ad86"},586:function(e,t,r){e.exports=r.p+"carta.png?ace1507d002d9b4b805a9ff4520af857"},587:function(e,t,r){e.exports=r.p+"delete.png?bf9794eeca3acca9ceb7351914fefbb5"},588:function(e,t,r){e.exports=r.p+"logo-muni-azul.png?c376f73e106e0a94ccb09c2488ca36c6"},589:function(e,t,r){e.exports=r.p+"institucion.png?26c69573eb226fe3f67b8206890113ef"},590:function(e,t,r){e.exports=r.p+"personajuridica.png?a5216f227934ef2b0473f725dc5287ee"},591:function(e,t,r){e.exports=r.p+"personanatural.png?b7916691d075a41f7ca22061acd89835"},592:function(e,t,r){e.exports=r.p+"tengaEnCuenta.png?728f78c184dd0682eb1ab42cd95f9524"},593:function(e,t,r){e.exports=r.p+"consulta_azul.png?b2ea00be4c036d8c2fd547860b079ccd"},594:function(e,t,r){e.exports=r.p+"login.png?579fc5ee9d4d0b517c6e715b16c7910c"},595:function(e,t,r){e.exports=r.p+"mesadepartes.png?a6ed8e9844f9d976be5f7a84ab414ce8"},597:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",[r("div",{staticClass:"card card-muni card-muni-min"},[r("h3",[e._v("Iniciar Sesión")]),e._v(" "),r("div",{staticClass:"row justify-content-center"},[e._m(0),e._v(" "),r("div",{staticClass:"col-12 col-sm-6 col-md-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.correo,expression:"correo"}],staticClass:"form-control",attrs:{name:"user",type:"text"},domProps:{value:e.correo},on:{input:function(t){t.target.composing||(e.correo=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row justify-content-center mt-2"},[e._m(1),e._v(" "),r("div",{staticClass:"col-12 col-sm-6 col-md-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.contrasena,expression:"contrasena"}],staticClass:"form-control",attrs:{name:"pass",type:"password"},domProps:{value:e.contrasena},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.IniciarSesion(t)},input:function(t){t.target.composing||(e.contrasena=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 text-center mt-3"},[r("button",{staticClass:"btn btn-block btn-lg btn-default",attrs:{name:"ingresar"},on:{click:e.IniciarSesion}},[e._v("Ingresar")])])]),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 text-center"},[e._v("\n          ¿ Aún no tienes cuenta ?\n          "),r("router-link",{staticClass:"enlace4",attrs:{to:"/registroUsuarioOption"}},[e._v("Regístrate")])],1)]),e._v(" "),r("div",{staticClass:"row justify-content-center mt-3"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 text-center"},[e._v("\n          Olvidé la contraseña,\n          "),r("router-link",{staticClass:"enlace4",attrs:{to:"/recupera"}},[e._v("recuperar")])],1)])]),e._v(" "),r("footer",{staticClass:"text-muted text-center mt-3"},[e._v(e._s(e.version))])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 col-sm-6 col-md-12"},[r("div",{staticClass:"mt-1 line15"},[r("label",[e._v("Correo electrónico")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 col-sm-6 col-md-12"},[r("div",{staticClass:"mt-2"},[r("label",[e._v("Contraseña")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12"},[r("hr")])])}],a={render:n,staticRenderFns:o};t.a=a},598:function(e,t,r){function n(e){return r(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var a={"./adjuntar.png":576,"./admiracion.png":572,"./anexar.png":585,"./arrow-left.png":575,"./ask.png":569,"./ayuda.png":573,"./carta.png":586,"./cloud.png":599,"./consulta_azul.png":593,"./consultatutramite.png":600,"./delete.png":587,"./dni-02-01.png":578,"./dni-02-02.png":579,"./download.png":582,"./estadodecuenta.png":601,"./file.png":574,"./flecha_derecha.png":580,"./icono-consultas-linea.png":602,"./images/logo-muni-azul.png":588,"./institucion.png":589,"./like.png":603,"./loader.png":570,"./login.png":594,"./logo-miraflores.png":571,"./logo.png":604,"./logo_miraflores_fblanco.png":605,"./mesadepartes.png":595,"./nuevotramite.png":584,"./pagoenlinea.png":606,"./pdf.png":568,"./personajuridica.png":590,"./personanatural.png":591,"./question.png":583,"./requisito.png":607,"./solicitud.png":608,"./success.png":566,"./tengaEnCuenta.png":592,"./upload-cloud.png":609,"./user.png":581,"./userRegistro.png":610};n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id=598},599:function(e,t,r){e.exports=r.p+"cloud.png?ce73578a5166a8f218fd1eaaa5f2e1ea"},600:function(e,t,r){e.exports=r.p+"consultatutramite.png?10fc0a013388afe78e7e77776f42bc13"},601:function(e,t,r){e.exports=r.p+"estadodecuenta.png?b859e8edb0f27c046bdd5899a8cac092"},602:function(e,t,r){e.exports=r.p+"icono-consultas-linea.png?b6a65182ab5f6d298562e6da60332af6"},603:function(e,t,r){e.exports=r.p+"like.png?236b8480e81a0a414cf0efe4e567055f"},604:function(e,t,r){e.exports=r.p+"logo.png?82b9c7a5a3f405032b1db71a25f67021"},605:function(e,t,r){e.exports=r.p+"logo_miraflores_fblanco.png?88505e4aacc0b9c7cee65f0dedebea75"},606:function(e,t,r){e.exports=r.p+"pagoenlinea.png?9a7b1c511ac521e0e0bdb30d4479e361"},607:function(e,t,r){e.exports=r.p+"requisito.png?9eb1b8c22630fc6b417b99d8d13b71d7"},608:function(e,t,r){e.exports=r.p+"solicitud.png?16f5327e66493f38cd3e4fe402bfc515"},609:function(e,t,r){e.exports=r.p+"upload-cloud.png?ce73578a5166a8f218fd1eaaa5f2e1ea"},610:function(e,t,r){e.exports=r.p+"userRegistro.png?23aebaf8def8f408b7e596cf0df4a6e0"},775:function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var i=t[o](a),s=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}var o=r(334),a=r(561),i=r(859);r.n(i);t.a={components:{Login:o.default},data:function(){return{estiloMuestraLogin:"",estiloMuestraUsuario:"none",mostrarDivPreLogin:!0,nombreUsuario:"",lisItems:[{title:"Trámites Virtuales",description:"Registra tus trámites de manera virtual.",link:"/plataformatramiteVirtual",icon:"mesadepartes",login:1},{title:"Pago en Línea",description:"Realiza el pago de tu estado de cuenta.",link:"/pago-tributo",icon:"pagoenlinea",login:1},{title:"Estado de Cuenta",description:"Consulta tu estado de cuenta.",link:"/estado-cuenta",icon:"estadodecuenta",login:1}]}},created:function(){window.rutaReturn="/"},mounted:function(){dataLayer.push({event:"pagina_vista","page-url":"/home","page-title":"home"});var e=a.a.storage.get("appRentas");null!=e&&null!=e.cuenta&&(delete e.cuenta,a.a.storage.set("appRentas",e)),this.ValidaLogueo()},methods:{ValidaLogueo:function(){var e=this;return n(regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("logueadoTramite");case 2:r=t.sent,"true"===r?(e.mostrarDivPreLogin=!1,e.estiloMuestraLogin="none",e.estiloMuestraUsuario="",e.nombreUsuario=localStorage.getItem("nombreCompletoLogueadoTramite")):(e.mostrarDivPreLogin=!0,e.estiloMuestraLogin="",e.estiloMuestraUsuario="none",e.nombreUsuario=localStorage.getItem("nombreCompletoLogueadoTramite"));case 4:case"end":return t.stop()}},t,e)}))()},validaOpc:function(e,t){2==e&&0==this.$root.$userLogged?(this.$root.$userCuponera=!1,this.$router.push(t)):(this.$root.$userCuponera=!0,this.$router.push(t))}}}},857:function(e,t,r){var n=r(858);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(48)("274c4955",n,!0,{})},858:function(e,t,r){t=e.exports=r(37)(!1),t.push([e.i,".header-nav{background:#e9ecef;padding:15px 0;color:#06c}.subtitulo{min-height:57px;position:relative;display:flex;align-items:center}",""])},859:function(e,t){!function(t){"use strict";function r(e,t,r,n){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),s=new d(n||[]);return i._invoke=u(e,r,s),i}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function s(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(r,o,a,i){var s=n(e[r],e,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&b.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(u).then(function(e){c.value=e,a(c)},i)}i(s.arg)}function r(e,r){function n(){return new Promise(function(n,o){t(e,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function u(e,t,r){var o=_;return function(a,i){if(o===T)throw new Error("Generator is already running");if(o===R){if("throw"===a)throw i;return g()}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var c=l(s,r);if(c){if(c===P)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===_)throw o=R,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=T;var u=n(e,t,r);if("normal"===u.type){if(o=r.done?R:L,u.arg===P)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=R,r.method="throw",r.arg=u.arg)}}}function l(e,t){var r=e.iterator[t.method];if(r===h){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=h,l(e,t),"throw"===t.method))return P;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,P;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=h),t.delegate=null,P):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,P)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function d(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function m(e){if(e){var t=e[x];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(b.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=h,t.done=!0,t};return n.next=n}}return{next:g}}function g(){return{value:h,done:!0}}var h,v=Object.prototype,b=v.hasOwnProperty,y="function"==typeof Symbol?Symbol:{},x=y.iterator||"@@iterator",w=y.asyncIterator||"@@asyncIterator",S=y.toStringTag||"@@toStringTag",E="object"==typeof e,C=t.regeneratorRuntime;if(C)return void(E&&(e.exports=C));C=t.regeneratorRuntime=E?e.exports:{},C.wrap=r;var _="suspendedStart",L="suspendedYield",T="executing",R="completed",P={},I={};I[x]=function(){return this};var j=Object.getPrototypeOf,A=j&&j(j(m([])));A&&A!==v&&b.call(A,x)&&(I=A);var O=i.prototype=o.prototype=Object.create(I);a.prototype=O.constructor=i,i.constructor=a,i[S]=a.displayName="GeneratorFunction",C.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},C.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,S in e||(e[S]="GeneratorFunction")),e.prototype=Object.create(O),e},C.awrap=function(e){return{__await:e}},s(c.prototype),c.prototype[w]=function(){return this},C.AsyncIterator=c,C.async=function(e,t,n,o){var a=new c(r(e,t,n,o));return C.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},s(O),O[S]="Generator",O[x]=function(){return this},O.toString=function(){return"[object Generator]"},C.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},C.values=m,d.prototype={constructor:d,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(p),!e)for(var t in this)"t"===t.charAt(0)&&b.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=h)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return a.type="throw",a.arg=e,r.next=t,n&&(r.method="next",r.arg=h),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=b.call(o,"catchLoc"),s=b.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&b.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),P},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),p(r),P}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;p(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:m(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=h),P}}}(function(){return this}()||Function("return this")())},860:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"container"},[n("div",{staticClass:"card card-muni",class:{loginuser:e.$root.$userLogged}},[n("div",{staticClass:"row"},e._l(e.lisItems,function(t,o){return n("div",{key:o,staticClass:"col-6 col-md-3"},[n("div",{staticClass:"item"},[n("a",{on:{click:function(r){return r.preventDefault(),e.validaOpc(t.login,t.link)}}},[n("div",{staticClass:"content-img"},[n("img",{attrs:{src:r(598)("./"+t.icon+".png")}})]),e._v(" "),n("h5",[n("b",[e._v(" "+e._s(t.title))])]),e._v(" "),n("p",[e._v(e._s(t.description))])])])])}),0)])])])},o=[],a={render:n,staticRenderFns:o};t.a=a}});
//# sourceMappingURL=0.build.js.map?v0.43116148788409236