webpackJsonp([35],{349:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(771),o=r(847),s=r(333),i=s(a.a,o.a,!1,null,null,null);e.default=i.exports},533:function(t,e,r){"use strict";function a(t){return"[object Array]"===S.call(t)}function o(t){return void 0===t}function s(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function i(t){return"[object ArrayBuffer]"===S.call(t)}function n(t){return"undefined"!=typeof FormData&&t instanceof FormData}function c(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function l(t){return"string"==typeof t}function u(t){return"number"==typeof t}function d(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===S.call(t)}function p(t){return"[object File]"===S.call(t)}function h(t){return"[object Blob]"===S.call(t)}function m(t){return"[object Function]"===S.call(t)}function v(t){return d(t)&&m(t.pipe)}function g(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function b(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function C(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),a(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function w(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=w(e[r],t):e[r]=t}for(var e={},r=0,a=arguments.length;r<a;r++)C(arguments[r],t);return e}function _(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=_(e[r],t):e[r]="object"==typeof t?_({},t):t}for(var e={},r=0,a=arguments.length;r<a;r++)C(arguments[r],t);return e}function A(t,e,r){return C(e,function(e,a){t[a]=r&&"function"==typeof e?x(e,r):e}),t}var x=r(535),S=Object.prototype.toString;t.exports={isArray:a,isArrayBuffer:i,isBuffer:s,isFormData:n,isArrayBufferView:c,isString:l,isNumber:u,isObject:d,isUndefined:o,isDate:f,isFile:p,isBlob:h,isFunction:m,isStream:v,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:C,merge:w,deepMerge:_,extend:A,trim:b}},535:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),a=0;a<r.length;a++)r[a]=arguments[a];return t.apply(e,r)}}},536:function(t,e,r){"use strict";function a(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(533);t.exports=function(t,e,r){if(!e)return t;var s;if(r)s=r(e);else if(o.isURLSearchParams(e))s=e.toString();else{var i=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),i.push(a(e)+"="+a(t))}))}),s=i.join("&")}if(s){var n=t.indexOf("#");-1!==n&&(t=t.slice(0,n)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},537:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},538:function(t,e,r){"use strict";(function(e){function a(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r(533),s=r(550),i={"Content-Type":"application/x-www-form-urlencoded"},n={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(539):void 0!==e&&"[object process]"===Object.prototype.toString.call(e)&&(t=r(539)),t}(),transformRequest:[function(t,e){return s(e,"Accept"),s(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};n.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){n.headers[t]={}}),o.forEach(["post","put","patch"],function(t){n.headers[t]=o.merge(i)}),t.exports=n}).call(e,r(167))},539:function(t,e,r){"use strict";var a=r(533),o=r(551),s=r(536),i=r(553),n=r(556),c=r(557),l=r(540);t.exports=function(t){return new Promise(function(e,u){var d=t.data,f=t.headers;a.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password||"";f.Authorization="Basic "+btoa(h+":"+m)}var v=i(t.baseURL,t.url);if(p.open(t.method.toUpperCase(),s(v,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?n(p.getAllResponseHeaders()):null,a=t.responseType&&"text"!==t.responseType?p.response:p.responseText,s={data:a,status:p.status,statusText:p.statusText,headers:r,config:t,request:p};o(e,u,s),p=null}},p.onabort=function(){p&&(u(l("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(l("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),u(l(e,t,"ECONNABORTED",p)),p=null},a.isStandardBrowserEnv()){var g=r(558),b=(t.withCredentials||c(v))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;b&&(f[t.xsrfHeaderName]=b)}if("setRequestHeader"in p&&a.forEach(f,function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete f[e]:p.setRequestHeader(e,t)}),a.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),u(t),p=null)}),void 0===d&&(d=null),p.send(d)})}},540:function(t,e,r){"use strict";var a=r(552);t.exports=function(t,e,r,o,s){var i=new Error(t);return a(i,e,r,o,s)}},541:function(t,e,r){"use strict";var a=r(533);t.exports=function(t,e){e=e||{};var r={},o=["url","method","params","data"],s=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];a.forEach(o,function(t){void 0!==e[t]&&(r[t]=e[t])}),a.forEach(s,function(o){a.isObject(e[o])?r[o]=a.deepMerge(t[o],e[o]):void 0!==e[o]?r[o]=e[o]:a.isObject(t[o])?r[o]=a.deepMerge(t[o]):void 0!==t[o]&&(r[o]=t[o])}),a.forEach(i,function(a){void 0!==e[a]?r[a]=e[a]:void 0!==t[a]&&(r[a]=t[a])});var n=o.concat(s).concat(i),c=Object.keys(e).filter(function(t){return-1===n.indexOf(t)});return a.forEach(c,function(a){void 0!==e[a]?r[a]=e[a]:void 0!==t[a]&&(r[a]=t[a])}),r}},542:function(t,e,r){"use strict";function a(t){this.message=t}a.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},a.prototype.__CANCEL__=!0,t.exports=a},543:function(t,e,r){"use strict";var a={},o="https://mz-services-test.miraflores.gob.pe:8090/api",s="https://apptest.miraflores.gob.pe/plataforma-atencion";a.filesRecuperaProd="https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/",a.filesRecupera=o+"/files/recuperarEntidadArchivo/",a.filesRecuperaPrincipal=o+"/files/recuperarArchivoPrincipal/",a.filesAnula=o+"/files/anular",a.rutaTramite=o+"/tramites/",a.rutaParametros=o+"/parametros/",a.rutaTareasComunes=o+"/tareas-comun/",a.rutaPagos=o+"/pagos/",a.rutaPersona=o+"/persona/contribuyente/",a.rutaAtencion=o+"/atencion/",a.API_RENTAS=o+"/rentas",a.API_TAREAS_COMUN=o+"/tareas-comun",a.API_PERSONA=o+"/persona",a.API_PAGOS=o+"/pagos",a.API_TRAMITE=o+"/tramites",a.respuestaPagoTributos=s+"/proceso/pagos/tributos/respuesta.php",a.urlIniciaPagoTributo=s+"/#/pago-tributo",a.respuestaPagoTramite=s+"/proceso/pago.php?idArea=",a.MODULO_TRIBUTO_RENTAS="PAGO-TRIBUTOS-RENTAS",a.version="release-1.0.0",e.a=a},544:function(t,e,r){t.exports=r(545)},545:function(t,e,r){"use strict";function a(t){var e=new i(t),r=s(i.prototype.request,e);return o.extend(r,i.prototype,e),o.extend(r,e),r}var o=r(533),s=r(535),i=r(546),n=r(541),c=r(538),l=a(c);l.Axios=i,l.create=function(t){return a(n(l.defaults,t))},l.Cancel=r(542),l.CancelToken=r(559),l.isCancel=r(537),l.all=function(t){return Promise.all(t)},l.spread=r(560),t.exports=l,t.exports.default=l},546:function(t,e,r){"use strict";function a(t){this.defaults=t,this.interceptors={request:new i,response:new i}}var o=r(533),s=r(536),i=r(547),n=r(548),c=r(541);a.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=c(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[n,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},a.prototype.getUri=function(t){return t=c(this.defaults,t),s(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,r){return this.request(o.merge(r||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,r,a){return this.request(o.merge(a||{},{method:t,url:e,data:r}))}}),t.exports=a},547:function(t,e,r){"use strict";function a(){this.handlers=[]}var o=r(533);a.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},a.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},a.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=a},548:function(t,e,r){"use strict";function a(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(533),s=r(549),i=r(537),n=r(538);t.exports=function(t){return a(t),t.headers=t.headers||{},t.data=s(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||n.adapter)(t).then(function(e){return a(t),e.data=s(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(a(t),e&&e.response&&(e.response.data=s(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},549:function(t,e,r){"use strict";var a=r(533);t.exports=function(t,e,r){return a.forEach(r,function(r){t=r(t,e)}),t}},550:function(t,e,r){"use strict";var a=r(533);t.exports=function(t,e){a.forEach(t,function(r,a){a!==e&&a.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[a])})}},551:function(t,e,r){"use strict";var a=r(540);t.exports=function(t,e,r){var o=r.config.validateStatus;!o||o(r.status)?t(r):e(a("Request failed with status code "+r.status,r.config,null,r.request,r))}},552:function(t,e,r){"use strict";t.exports=function(t,e,r,a,o){return t.config=e,r&&(t.code=r),t.request=a,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},553:function(t,e,r){"use strict";var a=r(554),o=r(555);t.exports=function(t,e){return t&&!a(e)?o(t,e):e}},554:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},555:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},556:function(t,e,r){"use strict";var a=r(533),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,s,i={};return t?(a.forEach(t.split("\n"),function(t){if(s=t.indexOf(":"),e=a.trim(t.substr(0,s)).toLowerCase(),r=a.trim(t.substr(s+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([r]):i[e]?i[e]+", "+r:r}}),i):i}},557:function(t,e,r){"use strict";var a=r(533);t.exports=a.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=a.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},558:function(t,e,r){"use strict";var a=r(533);t.exports=a.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,s,i){var n=[];n.push(t+"="+encodeURIComponent(e)),a.isNumber(r)&&n.push("expires="+new Date(r).toGMTString()),a.isString(o)&&n.push("path="+o),a.isString(s)&&n.push("domain="+s),!0===i&&n.push("secure"),document.cookie=n.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},559:function(t,e,r){"use strict";function a(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(542);a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var t;return{token:new a(function(e){t=e}),cancel:t}},t.exports=a},560:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},771:function(t,e,r){"use strict";var a=r(544),o=r.n(a),s=r(543);e.a={data:function(){return{showModal:!1,observacion:"",labelArchivoSec:"Seleccione Archivo",tipoTramite:"",solicitante:"",estado:"",listaAdjuntos:null,listaObservaciones:null,listaObservacionesModelo:[],idTramite:0,urlDescarga:"https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/2/",usuarioPost:{},esPrincipal:!1,estiloDisplayAprobar:"block",estiloDisplayVer:"none",estiloDisplayObservar:"block",urlDescargaConstancia:"",idObservacion:0}},mounted:function(){"true"==localStorage.getItem("logueado")?(this.CargarTramite(),this.ObtenerListaAdjuntos(),this.ListarObservaciones(),this.InicializarUsuario()):this.$router.push("/auth/login/")},methods:{removeElement:function(t){console.log("index eliminar observacion:"+t),this.listaObservaciones.splice(t,1),this.ReorganizarIndicesObservaciones()},Desestimar:function(){var t=this;this.$swal({title:"Guardando",onOpen:function(){t.$swal.showLoading()}});var e={};e.idTramite=this.idTramite,e.usuarioModificador=this.usuarioPost,console.log(e);var r=new FormData;r.append("tramite",JSON.stringify(e)),o.a.post(s.a.rutaTramite+"desestimar/",r).then(function(e){console.log(e.data),t.adjuntoModeloSec=null,e.data.success&&(t.$swal({icon:"success",text:"Trámite desestimado con éxito"}),t.CargarTramite(),t.ListarObservaciones())}).catch(function(t){return console.log(t)})},AgregarObservacion:function(){var t={},e={};e.idTramite=this.idTramite,t.tramite=e,t.usuarioCreador=this.usuarioPost,t.descripcion=this.observacion,t.idObservacion=this.idObservacion,this.listaObservaciones.push(t),console.log(this.listaObservaciones),this.idObservacion=this.idObservacion+1},ReorganizarIndicesObservaciones:function(){for(this.idObservacion=0;this.idObservacion<this.listaObservaciones.length;)this.listaObservaciones[this.idObservacion].idObservacion=this.idObservacion,this.idObservacion=this.idObservacion+1},ListarObservaciones:function(){var t=this,e=s.a.rutaTramite+"observaciones/"+this.$route.params.idTramite;console.log("ruta lista  observaciones: "+e),o.a.get(e).then(function(e){console.log(e.data.data),t.listaObservaciones=e.data.data}).catch(function(t){return console.log(t)})},Observar2:function(){var t=this;this.$swal({title:"Seguro de Observar?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"No",confirmButtonText:"Sí"}).then(function(e){e.value&&t.Observar()})},Observar:function(){var t=this;console.log("entró a observar"),this.showModal=!0,this.estiloDisplayObservar="block",this.$swal({title:"Guardando",onOpen:function(){t.$swal.showLoading()}});var e={};e.idTramite=this.idTramite,e.usuarioModificador=this.usuarioPost,e.usuarioObservador=this.usuarioPost,e.listaObservacion=this.listaObservaciones,console.log(e);var r=new FormData;r.append("tramite",JSON.stringify(e)),o.a.post(s.a.rutaTramite+"observar/",r).then(function(e){console.log(e.data),t.adjuntoModeloSec=null,e.data.success&&(t.$swal({icon:"success",text:"Observaciones agregadas con éxito"}),t.CargarTramite(),t.ListarObservaciones())}).catch(function(t){return console.log(t)})},Aprobar:function(){var t=this;this.$swal({title:"Guardando",onOpen:function(){t.$swal.showLoading()}});var e={};e.idTramite=this.idTramite,e.usuarioCreador=this.usuarioPost,e.usuarioModificador=this.usuarioPost;var r=new FormData;r.append("tramite",JSON.stringify(e)),o.a.post(s.a.rutaTramite+"aprobar/",r).then(function(e){console.log(e.data),t.adjuntoModeloSec=null,e.data.success&&(t.$swal({icon:"success",text:"El trámite fue aprobado con éxito"}),t.estiloDisplayAprobar="none",t.estiloDisplayVer="block",t.CargarTramite())}).catch(function(t){return console.log(t)})},InicializarUsuario:function(){var t={};t.desLoginUser=localStorage.getItem("cuenta"),t.ideEstado=1,t.idePersona=localStorage.getItem("idPersonaLogueado"),t.ideUsuario=localStorage.getItem("idUsuarioLogueado"),t.inCredencialExpirada="1",t.inCuentaBloqueada="1",t.inCuentaExpirada="1",t.inHabilitado="1";var e={};e.nomApellidoMaterno=localStorage.getItem("maternoUsuarioLogueado"),e.nomApellidopaterno=localStorage.getItem("paternoUsuarioLogueado"),e.nomNombres=localStorage.getItem("nombreUsuarioLogueado"),e.numNumeroDocuento=localStorage.getItem("numeroDocumentoLogueado"),e.perSoc=localStorage.getItem("nombreCompleto"),e.idePersona=localStorage.getItem("idPersonaLogueado"),t.persona=e,this.usuarioPost=t},EliminarArchivo:function(t){var e=this,r={};r.idArchivoTramite=t,r.observacion="Eliminado postObservacion",r.usuarioCreador=this.usuarioPost,r.usuarioModificador=this.usuarioPost;var a=new FormData;a.append("archivoString",JSON.stringify(r));o.a.post(s.a.rutaTramite+"anular-adjunto",a).then(function(t){console.log(t.data),e.ObtenerListaAdjuntos()}).catch(function(t){return console.log(t)})},GuardarAdjunto:function(){var t=this;if(null==this.adjuntoModeloSec)this.$swal({icon:"error",title:"Error",text:"Debe seleccionar un archivo."});else{this.$swal({title:"Guardando",onOpen:function(){t.$swal.showLoading()}});var e={},r={};r.idTramite=this.idTramite,e.tramite=r,e.usuarioCreador=this.usuarioPost,e.usuarioModificador=this.usuarioPost,e.flagPrincipal=this.esPrincipal,e.observacion="Nuevo";var a=new FormData;a.append("adjunto",JSON.stringify(e)),a.append("imgCroquis",this.adjuntoModeloSec);o.a.post(s.a.rutaTramite+"adjunto/",a).then(function(e){console.log(e.data),t.adjuntoModeloSec=null,t.labelArchivoSec="Seleccione Archivo",t.ObtenerListaAdjuntos(),t.$swal({icon:"success",text:"El adjunto fue registrado con éxito"})}).catch(function(t){return console.log(t)})}},ObtenerListaAdjuntos:function(){var t=this,e=s.a.rutaTramite+"adjuntos/"+this.$route.params.idTramite;o.a.get(e).then(function(e){console.log(e.data.data),t.listaAdjuntos=e.data.data}).catch(function(t){return console.log(t)})},CargarTramite:function(){var t=this,e=s.a.rutaTramite+"tramites/"+this.$route.params.idTramite+"/0/0/-";console.log("url cargar tramite:"+e),o.a.get(e).then(function(e){t.urlDescargaConstancia="https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/1/"+t.$route.params.idTramite+"/0",console.log(e.data.data),t.tipoTramite=e.data.data[0].tipoTramite.nombre,t.idTramite=e.data.data[0].idTramite,t.solicitante=e.data.data[0].usuarioCreador.persona.desNombreCompleto,t.estado=e.data.data[0].id011Estado.nombre,console.log("antes de entrar a validar estado"),23==e.data.data[0].id011Estado.idParametro&&(console.log("23"),t.estiloDisplayAprobar="block",t.estiloDisplayDesestimar="block",t.estiloDisplayVer="none"),24==e.data.data[0].id011Estado.idParametro&&(console.log("24"),t.estiloDisplayAprobar="none",t.estiloDisplayDesestimar="none",t.estiloDisplayVer="block"),27==e.data.data[0].id011Estado.idParametro&&(console.log("27"),t.estiloDisplayAprobar="none",t.estiloDisplayDesestimar="block",t.estiloDisplayVer="none"),28==e.data.data[0].id011Estado.idParametro&&(console.log("28"),t.estiloDisplayAprobar="none",t.estiloDisplayDesestimar="none",t.estiloDisplayVer="none")}).catch(function(t){return console.log(t)})},onFileSelectedSec:function(t){this.adjuntoModeloSec=t.target.files[0],console.log(t.target.files[0]),this.labelArchivoSec=t.target.files[0].name},PadLeft:function(t,e){return t.toString().length<e?this.PadLeft("0"+t,e):t}}}},847:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content-wrapper",staticStyle:{height:"83vh","overflow-y":"scroll"}},[r("section",{staticClass:"content"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-sm-4"},[r("div",{staticClass:"row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-sm-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tipoTramite,expression:"tipoTramite"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.tipoTramite},on:{input:function(e){e.target.composing||(t.tipoTramite=e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group col-sm-4"},[r("div",{staticClass:"row"},[t._m(1),t._v(" "),r("div",{staticClass:"col-sm-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.solicitante,expression:"solicitante"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.solicitante},on:{input:function(e){e.target.composing||(t.solicitante=e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"form-group col-sm-4"},[r("div",{staticClass:"row"},[t._m(2),t._v(" "),r("div",{staticClass:"col-sm-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.estado,expression:"estado"}],staticClass:"form-control",attrs:{type:"text",disabled:""},domProps:{value:t.estado},on:{input:function(e){e.target.composing||(t.estado=e.target.value)}}})])])])])])])])]),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-sm-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4",staticStyle:{right:"-160%"},style:{display:t.estiloDisplayAprobar},attrs:{id:"divBtnGuardar"}},[r("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button"},on:{click:function(e){return t.Aprobar()}}},[t._v("Aprobar")])]),t._v(" "),r("div",{staticClass:"col-sm-4",staticStyle:{right:"-160%"},style:{display:t.estiloDisplayVer}},[r("a",{attrs:{href:t.urlDescargaConstancia,target:"_blank"}},[r("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button"}},[t._v("Ver Constancia")])])])])])])])]),t._v(" "),r("div",{staticClass:"card"},[t._m(3),t._v(" "),r("div",{staticClass:"tab-pane active",attrs:{id:"tabArchivo"}},[r("div",{staticClass:"container",staticStyle:{"padding-top":"1%"}},[r("div",{staticClass:"form-group col-sm-13"},[r("div",{staticClass:"row"},[t._m(4),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"validatedCustomFile",required:"",lang:"es"},on:{change:t.onFileSelectedSec}}),t._v(" "),r("label",{staticClass:"custom-file-label",attrs:{for:"validatedCustomFile"}},[t._v(t._s(t.labelArchivoSec))]),t._v(" "),r("div",{staticClass:"invalid-feedback"},[t._v("Archivo inválido")])]),t._v(" "),r("div",{staticClass:"col-sm-3"},[r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.esPrincipal,expression:"esPrincipal"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck1"},domProps:{checked:Array.isArray(t.esPrincipal)?t._i(t.esPrincipal,null)>-1:t.esPrincipal},on:{change:function(e){var r=t.esPrincipal,a=e.target,o=!!a.checked;if(Array.isArray(r)){var s=t._i(r,null);a.checked?s<0&&(t.esPrincipal=r.concat([null])):s>-1&&(t.esPrincipal=r.slice(0,s).concat(r.slice(s+1)))}else t.esPrincipal=o}}}),t._v(" "),t._m(5)])]),t._v(" "),r("div",{staticClass:"col-sm-2"},[r("button",{staticClass:"btn btn-success",style:{display:t.estiloDisplayAprobar},on:{click:function(e){return t.GuardarAdjunto()}}},[t._v("Agregar")])])])]),t._v(" "),r("div",{staticClass:"form-group col-sm-13"},[r("div",{staticClass:"table"},[r("table",{staticClass:"table table-bordered table-hover table-sm"},[t._m(6),t._v(" "),r("tbody",t._l(t.listaAdjuntos,function(e){return r("tr",{key:e.idArchivoTramite},[r("th",{attrs:{scope:"row"}},[t._v(t._s(e.nombreArchivo))]),t._v(" "),r("td",[t._v(t._s(1==e.flagPrincipal?"SI":"NO"))]),t._v(" "),1==e.flagPrincipal?r("td",[r("div",{staticClass:"row",staticStyle:{"pading-left":"55px"}},[r("a",{staticStyle:{"padding-left":"15px","padding-right":"15px"},attrs:{href:t.urlDescarga+e.idArchivoTramite+"/0",target:"_blank"}},[r("button",{staticClass:"btn btn-success"},[t._v("Ver")])])])]):r("td",[r("div",{staticClass:"row",staticStyle:{"pading-left":"55px"}},[r("a",{staticStyle:{"padding-left":"15px","padding-right":"15px"},attrs:{href:t.urlDescarga+e.idArchivoTramite+"/0",target:"_blank"}},[r("button",{staticClass:"btn btn-success"},[t._v("Ver")])]),t._v(" "),r("button",{staticClass:"btn btn-danger",staticStyle:{"padding-left":"15px"},style:{display:t.estiloDisplayAprobar},on:{click:function(r){return t.EliminarArchivo(e.idArchivoTramite)}}},[t._v("Eliminar")])])])])}),0)])])])])])]),t._v(" "),r("div",{staticClass:"card"},[t._m(7),t._v(" "),r("div",{staticClass:"tab-pane active",staticStyle:{"padding-top":"1%"},attrs:{id:"tabObservaciones"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"form-group col-sm-11"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-bordered table-hover table-sm"},[t._m(8),t._v(" "),r("tbody",t._l(t.listaObservaciones,function(e){return r("tr",{key:e.idObservacion},[r("td",{attrs:{scope:"row"}},[t._v(t._s(e.descripcion))])])}),0)])])])])])])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"col-sm-3 col-form-label",staticStyle:{"text-align":"right","padding-right":"0px"},attrs:{for:"exampleInputPassword1"}},[r("b",[t._v("Tipo Tramite")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"col-sm-3 col-form-label",staticStyle:{"padding-right":"0px"},attrs:{for:"exampleInputPassword1"}},[r("b",[t._v("Solicitante:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"col-sm-3 col-form-label",staticStyle:{"padding-right":"0px"},attrs:{for:"exampleInputPassword1"}},[r("b",[t._v("Estado:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h5",{staticClass:"card-title"},[r("b",[t._v("Adjuntos")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"col-sm-2 col-form-label",staticStyle:{"text-align":"center"},attrs:{for:"lblAdjuntoSecundario"}},[r("b",[t._v("Adjunto:")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",{staticClass:"custom-control-label col-form-label",attrs:{for:"customCheck1"}},[r("b",[t._v("Actualizar Principal")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"btn-primary"},[r("tr",[r("th",{attrs:{width:"55%"}},[t._v("Archivo")]),t._v(" "),r("th",{attrs:{width:"15%"}},[t._v("Es Principal")]),t._v(" "),r("th",{attrs:{width:"20%"}},[t._v("Acciones")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h5",{staticClass:"card-title"},[r("b",[t._v("Observaciones")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"btn-primary"},[r("tr",[r("th",{attrs:{width:"80%"}},[t._v("Observación")])])])}],s={render:a,staticRenderFns:o};e.a=s}});
//# sourceMappingURL=35.build.js.map?v0.2925188300772039