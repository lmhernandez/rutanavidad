webpackJsonp([31],{359:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(782),o=r(888),s=r(333),a=s(n.a,o.a,!1,null,null,null);t.default=a.exports},533:function(e,t,r){"use strict";function n(e){return"[object Array]"===R.call(e)}function o(e){return void 0===e}function s(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function a(e){return"[object ArrayBuffer]"===R.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function c(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function f(e){return"number"==typeof e}function l(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===R.call(e)}function p(e){return"[object File]"===R.call(e)}function h(e){return"[object Blob]"===R.call(e)}function m(e){return"[object Function]"===R.call(e)}function v(e){return l(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function x(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function E(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=E(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)x(arguments[r],e);return t}function C(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=C(t[r],e):t[r]="object"==typeof e?C({},e):e}for(var t={},r=0,n=arguments.length;r<n;r++)x(arguments[r],e);return t}function w(e,t,r){return x(t,function(t,n){e[n]=r&&"function"==typeof t?_(t,r):t}),e}var _=r(535),R=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:a,isBuffer:s,isFormData:i,isArrayBufferView:c,isString:u,isNumber:f,isObject:l,isUndefined:o,isDate:d,isFile:p,isBlob:h,isFunction:m,isStream:v,isURLSearchParams:g,isStandardBrowserEnv:b,forEach:x,merge:E,deepMerge:C,extend:w,trim:y}},535:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},536:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(533);e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(o.isURLSearchParams(t))s=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+"="+n(e))}))}),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},537:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},538:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(533),s=r(550),a={"Content-Type":"application/x-www-form-urlencoded"},i={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(539):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(e=r(539)),e}(),transformRequest:[function(e,t){return s(t,"Accept"),s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};i.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){i.headers[e]={}}),o.forEach(["post","put","patch"],function(e){i.headers[e]=o.merge(a)}),e.exports=i}).call(t,r(167))},539:function(e,t,r){"use strict";var n=r(533),o=r(551),s=r(536),a=r(553),i=r(556),c=r(557),u=r(540);e.exports=function(e){return new Promise(function(t,f){var l=e.data,d=e.headers;n.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),s(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?p.response:p.responseText,s={data:n,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,f,s),p=null}},p.onabort=function(){p&&(f(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var g=r(558),y=(e.withCredentials||c(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(d,function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},540:function(e,t,r){"use strict";var n=r(552);e.exports=function(e,t,r,o,s){var a=new Error(e);return n(a,t,r,o,s)}},541:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],s=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,function(e){void 0!==t[e]&&(r[e]=t[e])}),n.forEach(s,function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])}),n.forEach(a,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])});var i=o.concat(s).concat(a),c=Object.keys(t).filter(function(e){return-1===i.indexOf(e)});return n.forEach(c,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r}},542:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},543:function(e,t,r){"use strict";var n={},o="https://mz-services-test.miraflores.gob.pe:8090/api",s="https://apptest.miraflores.gob.pe/plataforma-atencion";n.filesRecuperaProd="https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/",n.filesRecupera=o+"/files/recuperarEntidadArchivo/",n.filesRecuperaPrincipal=o+"/files/recuperarArchivoPrincipal/",n.filesAnula=o+"/files/anular",n.rutaTramite=o+"/tramites/",n.rutaParametros=o+"/parametros/",n.rutaTareasComunes=o+"/tareas-comun/",n.rutaPagos=o+"/pagos/",n.rutaPersona=o+"/persona/contribuyente/",n.rutaAtencion=o+"/atencion/",n.API_RENTAS=o+"/rentas",n.API_TAREAS_COMUN=o+"/tareas-comun",n.API_PERSONA=o+"/persona",n.API_PAGOS=o+"/pagos",n.API_TRAMITE=o+"/tramites",n.respuestaPagoTributos=s+"/proceso/pagos/tributos/respuesta.php",n.urlIniciaPagoTributo=s+"/#/pago-tributo",n.respuestaPagoTramite=s+"/proceso/pago.php?idArea=",n.MODULO_TRIBUTO_RENTAS="PAGO-TRIBUTOS-RENTAS",n.version="release-1.0.0",t.a=n},544:function(e,t,r){e.exports=r(545)},545:function(e,t,r){"use strict";function n(e){var t=new a(e),r=s(a.prototype.request,t);return o.extend(r,a.prototype,t),o.extend(r,t),r}var o=r(533),s=r(535),a=r(546),i=r(541),c=r(538),u=n(c);u.Axios=a,u.create=function(e){return n(i(u.defaults,e))},u.Cancel=r(542),u.CancelToken=r(559),u.isCancel=r(537),u.all=function(e){return Promise.all(e)},u.spread=r(560),e.exports=u,e.exports.default=u},546:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=r(533),s=r(536),a=r(547),i=r(548),c=r(541);n.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=c(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},n.prototype.getUri=function(e){return e=c(this.defaults,e),s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},547:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(533);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},548:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(533),s=r(549),a=r(537),i=r(538);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return n(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(n(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},549:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},550:function(e,t,r){"use strict";var n=r(533);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},551:function(e,t,r){"use strict";var n=r(540);e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},552:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},553:function(e,t,r){"use strict";var n=r(554),o=r(555);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},554:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},555:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},556:function(e,t,r){"use strict";var n=r(533),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,a={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}}),a):a}},557:function(e,t,r){"use strict";var n=r(533);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},558:function(e,t,r){"use strict";var n=r(533);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},559:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(542);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},560:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},782:function(e,t,r){"use strict";var n=r(544),o=(r.n(n),r(887)),s=r(94);t.a={name:"recupera",data:function(){return{noRecupera:!0,correoEnviado:!0,reg:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,correo:"",usuarioNoEncontrado:!1}},methods:{loginPagina:function(){this.$router.push("/login/0")},recuperaClave:function(){var e=this;if(this.usuarioNoEncontrado=!1,this.validaCorreoFormato(this.correo.trim())){s.a.$emit("loadershow",!0);var t={};t.usuario=this.correo.trim(),Object(o.a)(t).then(function(t){e.noRecupera=!1,t.data.success?e.correoEnviado=!0:(t.data.message.includes("no encontrado")&&(e.usuarioNoEncontrado=!0),e.correoEnviado=!1),s.a.$emit("loadershow",!1)}).catch(function(e){return console.log(e)})}},validaCorreoFormato:function(e){return""!=e&&!!this.reg.test(e)}}}},887:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(544),o=r.n(n),s=r(543),a=s.a.API_TRAMITE,i=function(e){return o.a.post(a+"/recupera",e)}},888:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container text-center"},[r("div",{staticClass:"container"},[r("div",{staticClass:"card card-muni card-muni-min"},[r("h3",[e._v("Recuperar Contraseña")]),e._v(" "),e.noRecupera?r("div",[r("div",{staticClass:"row justify-content-center"},[e._m(0),e._v(" "),r("div",{staticClass:"col-12 col-sm-6 col-md-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.correo,expression:"correo"}],staticClass:"form-control",attrs:{name:"user",type:"text"},domProps:{value:e.correo},on:{input:function(t){t.target.composing||(e.correo=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 text-center mt-4"},[r("button",{staticClass:"btn btn-block btn-lg btn-default",attrs:{name:"ingresar"},on:{click:function(t){return e.recuperaClave()}}},[e._v("Recuperar contraseña")])])]),e._v(" "),r("div",{staticClass:"row justify-content-center"},[e._m(1),e._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-12"},[e._v('\n            *Escriba su dirección de correo electrónico y presione "Recuperar Contraseña"\n            o de lo contrario regrese a la página de logueo\n            '),r("router-link",{attrs:{to:"/login/0"}},[e._v("desde aqui.")])],1)])]):r("div",[r("div",{staticClass:"row justify-content-center"},[e.correoEnviado?r("div",{staticClass:"col-12 col-sm-12 col-md-12 text-center"},[e._m(2),e._v(" "),r("div",[e._v('\n              * En caso el correo no llegue busque dentro de su buzón de "correo no deseado"\n              y marquelo como un correo "No Spam".\n            ')])]):e._e(),e._v(" "),!e.correoEnviado&&e.usuarioNoEncontrado?r("div",{staticClass:"col-12 col-sm-12 col-md-12 text-center"},[e._m(3)]):e._e(),e._v(" "),e.correoEnviado||e.usuarioNoEncontrado?e._e():r("div",[e._m(4),e._v(" "),r("div",[e._v("\n              * Lamentamos los inconvenientes sucedidos reintentelo mas tarde\n              por favor. Gracias\n            ")])]),e._v(" "),r("div",{staticClass:"col-12 col-sm-12 col-md-12 text-center mt-5"},[r("button",{staticClass:"btn btn-block btn-lg btn-default",on:{click:function(t){return e.loginPagina()}}},[e._v("Volver al logueo")])])])])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 col-sm-6 col-md-12"},[r("div",{staticClass:"mt-1 line15"},[r("label",[e._v("Correo electrónico")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-12 col-sm-12 col-md-12"},[r("hr")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[r("h4",[e._v("\n                Se ha enviado un correo electrónico a su cuenta.\n                "),r("br"),e._v(" "),r("small",[e._v("Revise su buzón y realice las intrucciones")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("h4",[e._v("\n                La cuenta ingresada no corresponde a un usuario\n                "),r("br")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[r("h4",[e._v("\n                El mensaje no ha podido ser enviado.\n                "),r("br"),e._v(" "),r("small",[e._v("Intentelo mas tarde.")])])])}],s={render:n,staticRenderFns:o};t.a=s}});
//# sourceMappingURL=31.build.js.map?v0.673578943022187