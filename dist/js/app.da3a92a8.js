(function(t){function e(e){for(var o,i,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0d2df3a1"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"267a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7b17"),n("ab8b"),n("15f5");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container",attrs:{id:"nav"}},[n("div",{staticClass:"row "},[n("div",{staticClass:"col-12 d-flex justify-content-between"},[t._m(0),n("div",{staticClass:"menu"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)])])]),n("router-view")],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo"},[o("img",{attrs:{src:n("cf05"),alt:"Logo"}})])}],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,r,a,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home container"},[n("div",{staticClass:"row"},t._l(t.pokemonList,(function(t,e){return n("Card",{key:e,staticClass:"col-12\tcol-sm-6 col-md-4\tcol-lg-2",attrs:{id:e,pokemonName:t.name}})})),1),n("button",{staticClass:"btn btn-primary",on:{click:t.next}},[t._v("carica di più")])])},p=[],d=(n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mb-4"},[n("div",{staticClass:"inner"},[n("img",{staticClass:"img-fluid",attrs:{src:t.imageUrl+(t.id+1)+".png",alt:""}}),n("div",{staticClass:"pt-2"},[t._v(" "+t._s(t.pokemonName)+" ")])])])}),m=[],b=(n("a9e3"),{name:"Card",props:{pokemonName:String,id:Number},data:function(){return{imageUrl:"https://pokeres.bastionbot.org/images/pokemon/"}}}),v=b,h=(n("f4b5"),Object(i["a"])(v,d,m,!1,null,"244fe9c0",null)),g=h.exports,y=n("bc3a"),x=n.n(y),_={name:"Home",components:{Card:g},data:function(){return{pokemonList:[],nextUrl:"",apiUrl:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"}},created:function(){this.getApi(this.apiUrl)},mounted:function(){},methods:{getApi:function(t){var e=this;x.a.get(t).then((function(t){e.nextUrl=t.data.next,e.pokemonList=t.data.results,console.log("getApi function started")}))},next:function(){var t=this;x.a.get(this.nextUrl).then((function(e){var n=[];t.nextUrl=e.data.next,n=e.data.results,n.forEach((function(e){t.pokemonList.push(e)})),console.log(n),console.log("next function started")}))}}},k=_,w=(n("8205"),Object(i["a"])(k,f,p,!1,null,"eac1e182",null)),C=w.exports;o["a"].use(l["a"]);var j=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new l["a"]({mode:"history",base:"/",routes:j}),P=O;o["a"].config.productionTip=!1,new o["a"]({router:P,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},8205:function(t,e,n){"use strict";n("267a")},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.3fa72200.png"},e909:function(t,e,n){},f4b5:function(t,e,n){"use strict";n("e909")}});
//# sourceMappingURL=app.da3a92a8.js.map