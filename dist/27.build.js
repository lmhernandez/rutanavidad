webpackJsonp([27],{360:function(t,e,n){"use strict";function r(t){n(889)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(783),a=n(891),i=n(333),s=r,c=i(o.a,a.a,!1,s,"data-v-217d9bd2",null);e.default=c.exports},533:function(t,e,n){"use strict";function r(t){return"[object Array]"===C.call(t)}function o(t){return void 0===t}function a(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function i(t){return"[object ArrayBuffer]"===C.call(t)}function s(t){return"undefined"!=typeof FormData&&t instanceof FormData}function c(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function u(t){return"string"==typeof t}function d(t){return"number"==typeof t}function l(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===C.call(t)}function p(t){return"[object File]"===C.call(t)}function h(t){return"[object Blob]"===C.call(t)}function m(t){return"[object Function]"===C.call(t)}function v(t){return l(t)&&m(t.pipe)}function b(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function w(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=w(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)y(arguments[n],t);return e}function _(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=_(e[n],t):e[n]="object"==typeof t?_({},t):t}for(var e={},n=0,r=arguments.length;n<r;n++)y(arguments[n],t);return e}function A(t,e,n){return y(e,function(e,r){t[r]=n&&"function"==typeof e?E(e,n):e}),t}var E=n(535),C=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:i,isBuffer:a,isFormData:s,isArrayBufferView:c,isString:u,isNumber:d,isObject:l,isUndefined:o,isDate:f,isFile:p,isBlob:h,isFunction:m,isStream:v,isURLSearchParams:b,isStandardBrowserEnv:x,forEach:y,merge:w,deepMerge:_,extend:A,trim:g}},535:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},536:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(533);t.exports=function(t,e,n){if(!e)return t;var a;if(n)a=n(e);else if(o.isURLSearchParams(e))a=e.toString();else{var i=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),i.push(r(e)+"="+r(t))}))}),a=i.join("&")}if(a){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+a}return t}},537:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},538:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(533),a=n(550),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(539):void 0!==e&&"[object process]"===Object.prototype.toString.call(e)&&(t=n(539)),t}(),transformRequest:[function(t,e){return a(e,"Accept"),a(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){s.headers[t]={}}),o.forEach(["post","put","patch"],function(t){s.headers[t]=o.merge(i)}),t.exports=s}).call(e,n(167))},539:function(t,e,n){"use strict";var r=n(533),o=n(551),a=n(536),i=n(553),s=n(556),c=n(557),u=n(540);t.exports=function(t){return new Promise(function(e,d){var l=t.data,f=t.headers;r.isFormData(l)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",m=t.auth.password||"";f.Authorization="Basic "+btoa(h+":"+m)}var v=i(t.baseURL,t.url);if(p.open(t.method.toUpperCase(),a(v,t.params,t.paramsSerializer),!0),p.timeout=t.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?p.response:p.responseText,a={data:r,status:p.status,statusText:p.statusText,headers:n,config:t,request:p};o(e,d,a),p=null}},p.onabort=function(){p&&(d(u("Request aborted",t,"ECONNABORTED",p)),p=null)},p.onerror=function(){d(u("Network Error",t,null,p)),p=null},p.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),d(u(e,t,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var b=n(558),g=(t.withCredentials||c(v))&&t.xsrfCookieName?b.read(t.xsrfCookieName):void 0;g&&(f[t.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(f,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete f[e]:p.setRequestHeader(e,t)}),r.isUndefined(t.withCredentials)||(p.withCredentials=!!t.withCredentials),t.responseType)try{p.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&p.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){p&&(p.abort(),d(t),p=null)}),void 0===l&&(l=null),p.send(l)})}},540:function(t,e,n){"use strict";var r=n(552);t.exports=function(t,e,n,o,a){var i=new Error(t);return r(i,e,n,o,a)}},541:function(t,e,n){"use strict";var r=n(533);t.exports=function(t,e){e=e||{};var n={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,function(t){void 0!==e[t]&&(n[t]=e[t])}),r.forEach(a,function(o){r.isObject(e[o])?n[o]=r.deepMerge(t[o],e[o]):void 0!==e[o]?n[o]=e[o]:r.isObject(t[o])?n[o]=r.deepMerge(t[o]):void 0!==t[o]&&(n[o]=t[o])}),r.forEach(i,function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])});var s=o.concat(a).concat(i),c=Object.keys(e).filter(function(t){return-1===s.indexOf(t)});return r.forEach(c,function(r){void 0!==e[r]?n[r]=e[r]:void 0!==t[r]&&(n[r]=t[r])}),n}},542:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},543:function(t,e,n){"use strict";var r={},o="https://mz-services-test.miraflores.gob.pe:8090/api",a="https://apptest.miraflores.gob.pe/plataforma-atencion";r.filesRecuperaProd="https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/",r.filesRecupera=o+"/files/recuperarEntidadArchivo/",r.filesRecuperaPrincipal=o+"/files/recuperarArchivoPrincipal/",r.filesAnula=o+"/files/anular",r.rutaTramite=o+"/tramites/",r.rutaParametros=o+"/parametros/",r.rutaTareasComunes=o+"/tareas-comun/",r.rutaPagos=o+"/pagos/",r.rutaPersona=o+"/persona/contribuyente/",r.rutaAtencion=o+"/atencion/",r.API_RENTAS=o+"/rentas",r.API_TAREAS_COMUN=o+"/tareas-comun",r.API_PERSONA=o+"/persona",r.API_PAGOS=o+"/pagos",r.API_TRAMITE=o+"/tramites",r.respuestaPagoTributos=a+"/proceso/pagos/tributos/respuesta.php",r.urlIniciaPagoTributo=a+"/#/pago-tributo",r.respuestaPagoTramite=a+"/proceso/pago.php?idArea=",r.MODULO_TRIBUTO_RENTAS="PAGO-TRIBUTOS-RENTAS",r.version="release-1.0.0",e.a=r},544:function(t,e,n){t.exports=n(545)},545:function(t,e,n){"use strict";function r(t){var e=new i(t),n=a(i.prototype.request,e);return o.extend(n,i.prototype,e),o.extend(n,e),n}var o=n(533),a=n(535),i=n(546),s=n(541),c=n(538),u=r(c);u.Axios=i,u.create=function(t){return r(s(u.defaults,t))},u.Cancel=n(542),u.CancelToken=n(559),u.isCancel=n(537),u.all=function(t){return Promise.all(t)},u.spread=n(560),t.exports=u,t.exports.default=u},546:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new i,response:new i}}var o=n(533),a=n(536),i=n(547),s=n(548),c=n(541);r.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=c(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},r.prototype.getUri=function(t){return t=c(this.defaults,t),a(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},547:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(533);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},548:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(533),a=n(549),i=n(537),s=n(538);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=a(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=a(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(r(t),e&&e.response&&(e.response.data=a(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},549:function(t,e,n){"use strict";var r=n(533);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},550:function(t,e,n){"use strict";var r=n(533);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},551:function(t,e,n){"use strict";var r=n(540);t.exports=function(t,e,n){var o=n.config.validateStatus;!o||o(n.status)?t(n):e(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},552:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},553:function(t,e,n){"use strict";var r=n(554),o=n(555);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},554:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},555:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},556:function(t,e,n){"use strict";var r=n(533),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,a,i={};return t?(r.forEach(t.split("\n"),function(t){if(a=t.indexOf(":"),e=r.trim(t.substr(0,a)).toLowerCase(),n=r.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([n]):i[e]?i[e]+", "+n:n}}),i):i}},557:function(t,e,n){"use strict";var r=n(533);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},558:function(t,e,n){"use strict";var r=n(533);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,a,i){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},559:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(542);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},560:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},783:function(t,e,n){"use strict";var r=n(544),o=n.n(r),a=n(543);e.a={name:"DetalleDocumento",data:function(){return{tramite:null,unidadOrganica:null,documento:null,solicitante:null,"fechaPresentación":null,listaAnexo:null,fechaRecibido:null,fechaRegistrado:null,fechaEnTramite:null,fechaAtendido:null,fechaArchivado:null,urlArchivo:"https://mz-services.miraflores.gob.pe:8923/recuperarEntidadArchivo/8707/",estadoOracle:0,fechaPresentacion:null}},created:function(){this.CargarDocumento(),this.CargarAnexos()},computed:{estado:function(){var t="active3";return 9749==this.estadoOracle&&(t="active4"),9732==this.estadoOracle&&(t="active5"),t}},methods:{CargarDocumento:function(){var t=this,e=a.a.rutaTramite+"tramite-detalle/"+this.$route.params.idExpedienteOracle+"/1";o.a.get(e).then(function(e){var n=e.data.data;t.tramite=n.asunto,t.unidadOrganica=n.unidadDestino.uniorgnom,t.documento=n.expediente.idTipoTramite.id008Tipo.abreviatura+" "+n.expediente.numeroExpediente+"-"+(0==n.idExpedienteAnexo?n.fechaEnTramite.substr(0,4):n.anioExpedienteAnexo)+"-"+n.unidadDestino.sigla,t.solicitante=n.numeroDocumentoSolicitante+" - "+n.nombresSolicitante,t.fechaPresentacion=n.fechaPresentacion,t.fechaRecibido=n.fechaRecibido,t.fechaRegistrado=n.fechaRegistrado,t.fechaEnTramite=n.fechaEnTramite,t.estadoOracle=n.idEstadoOracle}).catch(function(t){return console.log(t)})},CargarAnexos:function(){var t=this,e=a.a.rutaTramite+"anexos-expediente/"+this.$route.params.idExpedienteOracle;o.a.get(e).then(function(e){t.listaAnexo=e.data.data,console.log(e.data),console.log(t.listaAnexo)}).catch(function(t){return console.log(t)})}}}},889:function(t,e,n){var r=n(890);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(48)("6a5c6978",r,!0,{})},890:function(t,e,n){e=t.exports=n(37)(!1),e.push([t.i,".detalle-documento[data-v-217d9bd2]{position:relative;margin-bottom:100px}.detalle-documento .subtitle[data-v-217d9bd2]{font-size:14px;margin-top:50px}.detalle-documento .mobile-block[data-v-217d9bd2]{display:none}.detalle-documento .list-action li[data-v-217d9bd2]{display:block;padding:8px;background:#e9ecef}.detalle-documento .top-title[data-v-217d9bd2]{display:flex}.detalle-documento ul[data-v-217d9bd2]{margin-left:0;padding-left:0;list-style:none;border:1px solid #ced4da;border-radius:20px;overflow:hidden;margin-bottom:20px}.detalle-documento ul li[data-v-217d9bd2]{border-bottom:1px solid #eaeaea}.detalle-documento ul li>p.principal[data-v-217d9bd2]{color:#636363;background:#fff;margin-bottom:0;padding:10px}.detalle-documento ul li>span[data-v-217d9bd2]{padding:10px;display:block}.detalle-documento h5[data-v-217d9bd2]{font-size:15px;color:#0078cf;font-weight:400}.detalle-documento .area[data-v-217d9bd2]{color:#2db5c3;font-weight:500;text-transform:capitalize}.active[data-v-217d9bd2]{width:10%}.active2[data-v-217d9bd2]{width:30%}.active3[data-v-217d9bd2]{width:50%}.active4[data-v-217d9bd2]{width:70%}.active5[data-v-217d9bd2]{width:100%}.content-requi[data-v-217d9bd2]{margin-top:15px;margin-bottom:50px}.content-requi .table[data-v-217d9bd2],.content-requi table[data-v-217d9bd2]{width:100%;margin-bottom:0}.content-requi .table .result[data-v-217d9bd2],.content-requi table .result[data-v-217d9bd2]{color:#0078cf}.content-requi .requi-title[data-v-217d9bd2]{padding-left:25px;padding-top:20px;padding-right:25px}.content-requi .requi-title label[data-v-217d9bd2]{margin-bottom:0;padding-bottom:0}.content-requi ul[data-v-217d9bd2]{padding-left:20px;list-style:none;padding-top:25px;padding-right:20px}.content-requi ul li[data-v-217d9bd2]{flex-flow:row;align-items:flex-start;display:flex;width:100%;margin-bottom:12px}.content-requi ul li .left-img[data-v-217d9bd2]{margin-right:10px;width:25px}.content-requi ul li .left-img img[data-v-217d9bd2]{max-width:20px}.content-requi ul li:hover .closee[data-v-217d9bd2]{display:block!important;background:#fff}.content-requi ul li:hover .conten-letter[data-v-217d9bd2]{position:relative}.content-requi ul li:hover .conten-letter input[data-v-217d9bd2]{height:18px;cursor:pointer}.content-requi ul li:hover .conten-letter span[data-v-217d9bd2]{display:inline-block;cursor:pointer}.content-requi ul li .conten-adj[data-v-217d9bd2]{width:385px;line-height:normal}.content-requi ul li .full[data-v-217d9bd2]{max-width:193px;width:100%;text-align:right;height:20px}.content-requi ul li .full.full2[data-v-217d9bd2]{max-width:inherit}.content-requi ul li .conten-letter[data-v-217d9bd2]{position:relative}.content-requi ul li .conten-letter span.change[data-v-217d9bd2]{display:inline-block;position:relative;padding-left:42px}.content-requi ul li .conten-letter span.change p.nom[data-v-217d9bd2]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:0;max-width:100px}.content-requi ul li .conten-letter span.change img[data-v-217d9bd2]{position:absolute;left:4px;top:0}.content-requi ul li .conten-letter .change[data-v-217d9bd2]{font-size:12px;line-height:normal;padding:5px 10px;border-radius:10px;background:#fff;color:#9c9c9c;border:1px solid #ddd}.content-requi ul li .conten-letter .change~input[data-v-217d9bd2]{display:none}.content-requi ul li .conten-icon span[data-v-217d9bd2]{width:10px;height:10px;border-radius:50%;display:inline-block}.content-requi ul li .conten-icon span.er[data-v-217d9bd2]{background:#ff6464}.content-requi ul li .conten-icon span.su[data-v-217d9bd2]{background:#bed730}.content-requi ul li .conten-icon span.pe[data-v-217d9bd2]{background:#989898}.content-requi ul.full-list[data-v-217d9bd2]{padding-left:26px;padding-top:5px}.content-requi ul.full-list li .full[data-v-217d9bd2]{width:100%;text-align:left}.content-requi ul.full-list li p.nom[data-v-217d9bd2]{width:100%;max-width:100%!important}@media only screen and (max-width:600px){.detalle-documento ul[data-v-217d9bd2]{margin-bottom:0}.detalle-documento .mobile-block[data-v-217d9bd2]{padding-top:40px;padding-bottom:60px;text-align:center;display:block}.detalle-documento .top-title[data-v-217d9bd2]{flex-direction:column-reverse}.detalle-documento .top-title>div[data-v-217d9bd2]{width:100%!important}.detalle-documento .top-title h5[data-v-217d9bd2]{width:100%}.detalle-documento .mobile-hide[data-v-217d9bd2]{display:none}}",""])},891:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detalle-documento"},[n("div",{staticClass:"container"},[n("div",{staticClass:"card card-muni"},[n("div",{staticClass:"top-title"},[n("div",[n("h5",[t._v(t._s(t.tramite))]),t._v(" "),n("p",{staticClass:"area"},[t._v(t._s(t.unidadOrganica))])])]),t._v(" "),n("div",{staticClass:"row cont-asunto justify-content-center align-items-center mt-4"},[n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"mt-1 line15"},[t._m(0),t._v(" "),n("p",[t._v(t._s(t.documento))])])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"mt-1 line15"},[t._m(1),t._v(" "),n("p",[t._v(t._s(t.solicitante))])])]),t._v(" "),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"mt-1 line15"},[t._m(2),t._v(" "),n("p",[t._v(t._s(t.fechaPresentacion))])])])]),t._v(" "),n("h4",{staticClass:"subtitle"},[t._v("Lista de anexos")]),t._v(" "),n("div",{staticClass:"content-requi"},[n("div",{staticClass:"table"},[n("table",{staticClass:"text-center"},[t._m(3),t._v(" "),n("tbody",t._l(t.listaAnexo,function(e){return n("tr",{key:e.ideDocumento},[n("td",[t._v(t._s(e.desAsunto))]),t._v(" "),n("td",[t._v(t._s(e.fecDocumento))]),t._v(" "),n("td",{staticClass:"text-center"},[n("a",{attrs:{target:"_blank",href:t.urlArchivo+e.ideDocumento+"/"+e.idArchivoPrincipal}},[n("button",{staticClass:"btn btn-default ml-3"},[t._v("Ver")])])])])}),0)])])]),t._v(" "),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",class:t.estado,attrs:{role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),n("div",{staticClass:"content-requi"},[n("div",{staticClass:"table"},[n("table",{staticClass:"text-center"},[n("thead",[n("th",{class:{result:t.fechaRecibido},staticStyle:{width:"20%"}},[t._v("Recibido")]),t._v(" "),n("th",{class:{result:t.fechaRegistrado},staticStyle:{width:"20%"}},[t._v("Registrado")]),t._v(" "),n("th",{class:{result:t.fechaEnTramite},staticStyle:{width:"20%"}},[t._v("En Trámite")]),t._v(" "),n("th",{class:{result:t.fechaAtendido},staticStyle:{width:"20%"}},[t._v("Resuelto / Atendido")]),t._v(" "),n("th",{class:{result:t.fechaArchivado},staticStyle:{width:"20%"}},[t._v("Archivado")])]),t._v(" "),n("tbody")])])])])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("b",[t._v("Documento")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("b",[t._v("Solicitante")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("b",[t._v("Fecha Presentación")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("Nombre")]),t._v(" "),n("th",[t._v("Fecha")]),t._v(" "),n("th",{staticClass:"text-center"},[t._v("Link")])])}],a={render:r,staticRenderFns:o};e.a=a}});
//# sourceMappingURL=27.build.js.map?v0.673578943022187