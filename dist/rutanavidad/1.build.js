webpackJsonp([1],{38:function(t,a,e){"use strict";function o(t){e(808)}Object.defineProperty(a,"__esModule",{value:!0});var r=e(758),i=e(814),n=e(333),s=o,d=n(r.a,i.a,!1,s,null,null);a.default=d.exports},570:function(t,a,e){t.exports=e.p+"loader.png?906bd902525a623d3491350af83d1e48"},571:function(t,a,e){t.exports=e.p+"logo-miraflores.png?c376f73e106e0a94ccb09c2488ca36c6"},581:function(t,a,e){t.exports=e.p+"user.png?e97a19018afa3007312be416b9376a4c"},596:function(t,a,e){"use strict";a.a={}},748:function(t,a,e){"use strict";function o(t){e(749)}var r=e(596),i=e(751),n=e(333),s=o,d=n(r.a,i.a,!1,s,"data-v-54dcbd36",null);a.a=d.exports},749:function(t,a,e){var o=e(750);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(48)("1c01939f",o,!0,{})},750:function(t,a,e){a=t.exports=e(37)(!1),a.push([t.i,".relative[data-v-54dcbd36]{position:absolute;width:100%;min-height:calc(100vh - 75px)}.content_loader[data-v-54dcbd36]{position:absolute;z-index:999;top:0;background:#eaf0f9;width:100%;height:100%}.loader-content img[data-v-54dcbd36]{position:relative;z-index:1;max-width:65px}.loader-content[data-v-54dcbd36]{position:relative;display:flex;padding:51px;margin:auto;height:100%;width:100%;align-items:center;justify-content:center}.loader-circle[data-v-54dcbd36]{width:102px;height:102px;border-radius:50%;box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.1);background:#fff}.loader-circle[data-v-54dcbd36],.loader-line-mask[data-v-54dcbd36]{position:absolute;left:50%;top:50%;margin-left:-51px;margin-top:-51px}.loader-line-mask[data-v-54dcbd36]{width:60px;height:120px;overflow:hidden;-webkit-transform-origin:51px 51px;-moz-transform-origin:51px 51px;-ms-transform-origin:51px 51px;-o-transform-origin:51px 51px;transform-origin:51px 51px;-webkit-animation:rotate-data-v-54dcbd36 1.2s infinite linear;-moz-animation:rotate-data-v-54dcbd36 1.2s infinite linear;-o-animation:rotate-data-v-54dcbd36 1.2s infinite linear;animation:rotate-data-v-54dcbd36 1.2s infinite linear}.loader-line-mask .loader-line[data-v-54dcbd36]{width:102px;height:102px;border-radius:50%;box-shadow:inset 0 0 0 3px #0078cf}@-webkit-keyframes rotate-data-v-54dcbd36{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@-moz-keyframes rotate-data-v-54dcbd36{0%{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(1turn)}}@-o-keyframes rotate-data-v-54dcbd36{0%{-o-transform:rotate(0deg)}to{-o-transform:rotate(1turn)}}@keyframes rotate-data-v-54dcbd36{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);-ms-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}@-moz-keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}@-o-keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}@keyframes fade-data-v-54dcbd36{0%{opacity:1}50%{opacity:.25}}lesshat-selector[data-v-54dcbd36]{-lh-property:0}@-webkit-keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}@-moz-keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}@-o-keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}@keyframes fade-in-data-v-54dcbd36{0%{opacity:0}to{opacity:1}}[not-existing][data-v-54dcbd36]{zoom:1}",""])},751:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"relative"},[o("div",{staticClass:"content_loader"},[o("div",{staticClass:"loader-content"},[o("div",{staticClass:"loader-circle"}),t._v(" "),o("div",{staticClass:"loader-line-mask"},[o("div",{staticClass:"loader-line"})]),t._v(" "),o("img",{attrs:{src:e(570)}})])])])}],i={render:o,staticRenderFns:r};a.a=i},758:function(t,a,e){"use strict";var o=e(810);a.a={data:function(){return{}},components:{headerPlataforma:o.a},mounted:function(){console.log("LAYOUT")}}},759:function(t,a,e){"use strict";var o=e(748),r=e(94);a.a={components:{Loader:o.a},created:function(){var t=this;r.a.$on("loadershow",function(a){t.showloader(a)})},data:function(){return{imagen:"./assets/logo_miraflores_fblanco.png",login:0,load:null,title:[{link:"",name:"Plataforma"}],paginaActual:null,paginasPermitidas:["pageMultasAdministrativas","pageMultasAdministrativasEstadoCuenta","solicitudInfPublica"]}},methods:{showloader:function(t){this.load=t},logoutInterno:function(){r.a.$emit("logout"),this.$router.push("/login")},validaPaginaActual:function(){var t=!1;return this.paginasPermitidas.includes(this.paginaActual)&&(t=!0),t}},filters:{upper:function(t){return t.toLowerCase()}},watch:{$route:function(t,a){console.log("TOOOOtHEADER",t),this.title=t.meta.breadCrumb,this.paginaActual=t.name}}}},808:function(t,a,e){var o=e(809);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(48)("14067f6b",o,!0,{})},809:function(t,a,e){a=t.exports=e(37)(!1),a.push([t.i,"",""])},810:function(t,a,e){"use strict";function o(t){e(811)}var r=e(759),i=e(813),n=e(333),s=o,d=n(r.a,i.a,!1,s,null,null);a.a=d.exports},811:function(t,a,e){var o=e(812);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(48)("4154f108",o,!0,{})},812:function(t,a,e){a=t.exports=e(37)(!1),a.push([t.i,'.desplegable-perfil .dropdown-toggle:after{display:inline-block;margin-left:0;vertical-align:.255em;content:"";border-top:.6em solid #0078cf;border-right:.6em solid transparent;border-bottom:0;border-left:.6em solid transparent}.desplegable-perfil button{background:#ff000000!important;color:#212121!important;border:none!important}.desplegable-perfil button:focus{outline:none!important;box-shadow:none!important}.desplegable-perfil ul.dropdown-menu{right:0!important}.desplegable-perfil .dropdown-item.active,.desplegable-perfil .dropdown-item:active{color:#212121;background-color:#e7e7e7}.desplegable-perfil .dropdown-item{padding:1rem 1.5rem}',""])},813:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("header",{staticClass:"container-fluid header"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-4 col-sm-3 col-md-2 text-center"},[o("router-link",{attrs:{to:"/"}},[o("img",{staticClass:"img-fluid",attrs:{src:e(571),width:"100px"}})])],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"d-none d-sm-block col-sm-2 col-md-6 text-right align-middle vcenter content-btn"},[t.$root.$userLogged?o("div",[o("b-dropdown",{staticClass:"desplegable-perfil",scopedSlots:t._u([{key:"button-content",fn:function(){return[o("span",{staticClass:"welcome"},[o("img",{attrs:{src:e(581),alt:""}}),t._v("\n                        ¡Hola "+t._s(t._f("upper")(t.$root.$nameUser))+"!\n                      ")])]},proxy:!0}])},[t._v(" "),o("b-dropdown-item",{attrs:{to:"/EditarUsuario"}},[t._v("Mi perfil")]),t._v(" "),o("b-dropdown-item",{attrs:{href:"javascript:;"},on:{click:function(a){return t.logoutInterno()}}},[t._v("Cerrar sesión")])],1)],1):o("div",[o("router-link",{staticClass:"btn btn-default",attrs:{to:"/login"}},[t._v("Ingresa a tu cuenta")]),t._v(" "),o("router-link",{staticClass:"btn btn-primary",attrs:{to:"/registroUsuarioOption"}},[t._v("Regístrate")])],1)])])]),t._v(" "),t.load?o("loader"):t._e(),t._v(" "),t.$root.$userLogged||t.validaPaginaActual()?o("nav",{staticClass:"general",attrs:{"aria-label":"breadcrumb"}},[o("div",{staticClass:"container"},[o("ol",{staticClass:"breadcrumb"},t._l(t.title,function(a,e){return o("li",{key:e,staticClass:"breadcrumb-item"},[o("router-link",{attrs:{to:a.link}},[t._v("\n                  "+t._s(a.name)+"\n                  ")])],1)}),0)])]):t._e()],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col h1-vecenter"},[e("h1",[t._v("Plataforma Digital de Atención al Ciudadano")])])}],i={render:o,staticRenderFns:r};a.a=i},814:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("headerPlataforma"),t._v(" "),e("div",[e("router-view")],1)],1)},r=[],i={render:o,staticRenderFns:r};a.a=i}});
//# sourceMappingURL=1.build.js.map?v0.7838989243616388