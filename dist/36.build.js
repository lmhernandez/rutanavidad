webpackJsonp([36],{339:function(t,a,e){"use strict";function i(t){e(815)}Object.defineProperty(a,"__esModule",{value:!0});var r=e(760),o=e(819),n=e(333),s=i,d=n(r.a,o.a,!1,s,null,null);a.default=d.exports},570:function(t,a,e){t.exports=e.p+"loader.png?906bd902525a623d3491350af83d1e48"},571:function(t,a,e){t.exports=e.p+"logo-miraflores.png?c376f73e106e0a94ccb09c2488ca36c6"},596:function(t,a,e){"use strict";a.a={}},748:function(t,a,e){"use strict";function i(t){e(749)}var r=e(596),o=e(751),n=e(333),s=i,d=n(r.a,o.a,!1,s,"data-v-54dcbd36",null);a.a=d.exports},749:function(t,a,e){var i=e(750);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(48)("1c01939f",i,!0,{})},750:function(t,a,e){a=t.exports=e(37)(!1),a.push([t.i,".relative[data-v-54dcbd36]{position:absolute;width:100%;min-height:calc(100vh - 75px)}.content_loader[data-v-54dcbd36]{position:absolute;z-index:999;top:0;background:#eaf0f9;width:100%;height:100%}.loader-content img[data-v-54dcbd36]{position:relative;z-index:1;max-width:65px}.loader-content[data-v-54dcbd36]{position:relative;display:flex;padding:51px;margin:auto;height:100%;width:100%;align-items:center;justify-content:center}.loader-circle[data-v-54dcbd36]{width:102px;height:102px;border-radius:50%;box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.1);background:#fff}.loader-circle[data-v-54dcbd36],.loader-line-mask[data-v-54dcbd36]{position:absolute;left:50%;top:50%;margin-left:-51px;margin-top:-51px}.loader-line-mask[data-v-54dcbd36]{width:60px;height:120px;overflow:hidden;-webkit-transform-origin:51px 51px;-moz-transform-origin:51px 51px;-ms-transform-origin:51px 51px;-o-transform-origin:51px 51px;transform-origin:51px 51px;-webkit-animation:rotate-data-v-54dcbd36 1.2s infinite linear;-moz-animation:rotate-data-v-54dcbd36 1.2s infinite linear;-o-animation:rotate-data-v-54dcbd36 1.2s infinite linear;animation:rotate-data-v-54dcbd36 1.2s infinite linear}.loader-line-mask .loader-line[data-v-54dcbd36]{width:102px;height:102px;border-radius:50%;box-shadow:inset 0 0 0 3px #0078cf}@-webkit-keyframes rotate-data-v-54dcbd36{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@-moz-keyframes rotate-data-v-54dcbd36{0%{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(1turn)}}@-o-keyframes rotate-data-v-54dcbd36{0%{-o-transform:rotate(0deg)}to{-o-transform:rotate(1turn)}}@keyframes rotate-data-v-54dcbd36{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);-ms-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}@-moz-keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}@-o-keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}@keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}lesshat-selector[data-v-54dcbd36]{-lh-property:0}@-webkit-keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}@-moz-keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}@keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}[not-existing][data-v-54dcbd36]{zoom:1}",""])},751:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"relative"},[i("div",{staticClass:"content_loader"},[i("div",{staticClass:"loader-content"},[i("div",{staticClass:"loader-circle"}),t._v(" "),i("div",{staticClass:"loader-line-mask"},[i("div",{staticClass:"loader-line"})]),t._v(" "),i("img",{attrs:{src:e(570)}})])])])}],o={render:i,staticRenderFns:r};a.a=o},760:function(t,a,e){"use strict";var i=e(817);a.a={data:function(){return{}},components:{headerRegistro:i.a},mounted:function(){}}},761:function(t,a,e){"use strict";var i=e(748),r=e(94);a.a={components:{Loader:i.a},created:function(){var t=this;r.a.$on("loadershow",function(a){t.showloader(a)})},data:function(){return{imagen:"./assets/logo_miraflores_fblanco.png",login:0,load:null,title:[{link:"",name:"Plataforma"}],paginaActual:null,paginasPermitidas:["pageMultasAdministrativas","pageMultasAdministrativasEstadoCuenta","pageSolicitudInfPublica"]}},methods:{showloader:function(t){this.load=t},logoutInterno:function(){r.a.$emit("logout"),this.$router.push("/login")},validaPaginaActual:function(){var t=!1;return this.paginasPermitidas.includes(this.paginaActual)&&(t=!0),t}},filters:{upper:function(t){return t.toLowerCase()}},watch:{$route:function(t,a){console.log("TOOOOt",t),this.title=t.meta.breadCrumb,this.paginaActual=t.name}}}},815:function(t,a,e){var i=e(816);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(48)("7d62d986",i,!0,{})},816:function(t,a,e){a=t.exports=e(37)(!1),a.push([t.i,"",""])},817:function(t,a,e){"use strict";var i=e(761),r=e(818),o=e(333),n=o(i.a,r.a,!1,null,null,null);a.a=n.exports},818:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("header",{staticClass:"container-fluid header"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4 col-sm-3 col-md-2 text-center"},[i("router-link",{attrs:{to:"/"}},[i("img",{staticClass:"img-fluid",attrs:{src:e(571),width:"100px"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),t.load?i("loader"):t._e(),t._v(" "),t.$root.$userLogged||t.validaPaginaActual()?i("nav",{staticClass:"general",attrs:{"aria-label":"breadcrumb"}},[i("div",{staticClass:"container"},[i("ol",{staticClass:"breadcrumb"},t._l(t.title,function(a,e){return i("li",{key:e,staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:a.link}},[t._v("\n                  "+t._s(a.name)+"\n                  ")])],1)}),0)])]):t._e()],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col h1-vecenter"},[e("h1",[t._v("Plataforma Digital de Atención al Ciudadano")])])}],o={render:i,staticRenderFns:r};a.a=o},819:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("headerRegistro"),t._v(" "),e("div",[e("router-view")],1)],1)},r=[],o={render:i,staticRenderFns:r};a.a=o}});
//# sourceMappingURL=36.build.js.map?v0.08787076142646266