webpackJsonp([38],{373:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(803),r=o(927),n=o(333),s=n(a.a,r.a,!1,null,null,null);e.default=s.exports},561:function(t,e,o){"use strict";var a={};a.storage={},a.pagina={},a.alert={},a.storage.get=function(t){return null!=localStorage.getItem(t)?JSON.parse(localStorage.getItem(t)):null},a.storage.set=function(t,e){localStorage.setItem(t,JSON.stringify(e))},a.storage.delete=function(t){localStorage.removeItem(t)},a.limpiarStorage=function(){console.log("Limpiaremos el localStorage"),localStorage.clear()},a.alert.success=function(t,e,o){t.$swal({toast:!0,position:"top",showConfirmButton:!1,timer:1500,timerProgressBar:!0,icon:"success",title:e,text:o})},a.cerrarSesion=function(t){console.log("Cerraremos la sesion"),localStorage.clear(),t.$router.push("/login")},a.pagina.go=function(t,e){t.$router.push(e)},a.pagina.anterior=function(t){t.$router.go(-1)},e.a=a},803:function(t,e,o){"use strict";var a=o(561);e.a={created:function(){a.a.pagina.go(this,"/multas-administrativas/estado-cuenta")}}},927:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},r=[],n={render:a,staticRenderFns:r};e.a=n}});
//# sourceMappingURL=38.build.js.map?v0.12009191621709436