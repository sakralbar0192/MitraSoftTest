(this.webpackJsonppoke_dex=this.webpackJsonppoke_dex||[]).push([[0],{10:function(e,t,n){e.exports={pokemonPage:"PokemonPage_pokemonPage__Ib7PX",pokemonPage__wrapper:"PokemonPage_pokemonPage__wrapper__3EyBG",pokemonPage__innerWrapper:"PokemonPage_pokemonPage__innerWrapper__1N1A9",pokemonPage__imageWrapper:"PokemonPage_pokemonPage__imageWrapper__3rF6S",pokemonPage__pokemonDescription:"PokemonPage_pokemonPage__pokemonDescription__3o6pv",pokemonPage__pokemonCharacteristics:"PokemonPage_pokemonPage__pokemonCharacteristics__zLSws",pokemonPage__pokemonTypes:"PokemonPage_pokemonPage__pokemonTypes__3p4Ve",pokemonPage__pokemonAbilities:"PokemonPage_pokemonPage__pokemonAbilities__32ogO"}},16:function(e,t,n){e.exports={PokemonsPage:"PokemonsPage_PokemonsPage__1I6Az",pokemonPage__wrapper:"PokemonsPage_pokemonPage__wrapper__uYZTd",PokemonsPage__innerWrapper:"PokemonsPage_PokemonsPage__innerWrapper__QiHn-",PokemonsPage__pagination:"PokemonsPage_PokemonsPage__pagination__3hLCv"}},19:function(e,t,n){e.exports={"ldio-wzu5q9yi9t":"Loader_ldio-wzu5q9yi9t__1SlRY","loadingio-spinner-ripple-m3n8nqi9o6f":"Loader_loadingio-spinner-ripple-m3n8nqi9o6f__PmC6a"}},22:function(e,t,n){e.exports={pagination:"Pagination_pagination__39pr6",active:"Pagination_active__1WIMF"}},23:function(e,t,n){e.exports={pokemonCard:"PokemonCard_pokemonCard__1wh0m",pokemonCard__imageWrapper:"PokemonCard_pokemonCard__imageWrapper__2l7ER"}},24:function(e,t,n){e.exports={ability:"AbilityPage_ability__39zCG"}},37:function(e,t,n){e.exports={container:"Container_container__27c27"}},40:function(e,t,n){e.exports={pokemonList:"PokemonList_pokemonList__1E0Mj",pokemonList__wrapper:"PokemonList_pokemonList__wrapper__1ppqj",pokemonList__loader:"PokemonList_pokemonList__loader__3_4j7",pokemonList__list:"PokemonList_pokemonList__list__3UIlG"}},76:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(34),c=n.n(o),i=n(4),s=n(11),p={pokemons:[],setPokemons:function(){},currentPage:1,setCurrentPage:function(){},cardsPerView:0},u=Object(a.createContext)(p),j=n(2),m=n(3),l=n.n(m),b=n(5),_=n(35),d=n(36),k=n(13),O=n.n(k),f=function(){function e(){Object(_.a)(this,e)}return Object(d.a)(e,null,[{key:"getAll",value:function(){var e=Object(b.a)(l.a.mark((function e(){var t,n,a,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:20,n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,O.a.get("https://pokeapi.co/api/v2/pokemon",{params:{limit:t,offset:t*(n-1)}});case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getOne",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://pokeapi.co/api/v2/pokemon/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getImage",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(t,".png"),{responseType:"arraybuffer"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAbility",value:function(){var e=Object(b.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://pokeapi.co/api/v2/ability/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),h=n(37),g=n.n(h),x=n(0),P=function(e){var t=e.title,n=e.children;return Object(x.jsxs)("div",{className:g.a.container,children:[Object(x.jsx)("h1",{children:t[0].toUpperCase()+t.slice(1)}),n]})},v=n(19),w=n.n(v),y=function(){return Object(x.jsx)("div",{className:w.a["loadingio-spinner-ripple-m3n8nqi9o6f"],children:Object(x.jsxs)("div",{className:w.a["ldio-wzu5q9yi9t"],children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})})};function C(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),p=s[0],u=s[1],j=function(){var t=Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(!0),t.next=4,e();case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0 instanceof Error&&u(t.t0.message);case 9:return t.prev=9,o(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[j,r,p]}var N=n.p+"static/media/pokeball.91245270.png",S=n(10),L=n.n(S),A=function(){var e=Object(j.h)(),t=Object(a.useState)(),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)("empty"),p=Object(i.a)(c,2),u=p[0],m=p[1],_=C(Object(b.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getOne(e.name);case 2:n=t.sent,o(n),void 0!==n&&(a=n.sprites.other["official-artwork"].front_default,m(null===a?N:a));case 5:case"end":return t.stop()}}),t)})))),d=Object(i.a)(_,3),k=d[0],O=d[1],h=d[2],g=Object(j.g)();return Object(a.useEffect)((function(){k()}),[]),Object(x.jsx)(P,{title:e.name,children:Object(x.jsx)("div",{className:L.a.pokemonPage,children:O?Object(x.jsx)(y,{}):h?Object(x.jsxs)("h1",{children:["Sory, something went wrong... ",h]}):void 0!==r?Object(x.jsxs)("div",{className:L.a.pokemonPage__wrapper,children:[Object(x.jsxs)("div",{className:L.a.pokemonPage__innerWrapper,children:[Object(x.jsx)("div",{className:L.a.pokemonPage__imageWrapper,children:Object(x.jsx)("img",{src:u,alt:e.name,width:"500",height:"500"})}),Object(x.jsxs)("div",{className:L.a.pokemonPage__pokemonDescription,children:[Object(x.jsx)("ul",{className:L.a.pokemonPage__pokemonCharacteristics,children:r.stats.map((function(e){return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{children:e.stat.name}),Object(x.jsx)("span",{children:e.base_stat})]},e.stat.name)}))}),Object(x.jsx)("ul",{className:L.a.pokemonPage__pokemonTypes,children:r.types.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("span",{children:e.type.name})},e.type.name)}))}),Object(x.jsx)("ul",{className:L.a.pokemonPage__pokemonAbilities,children:r.abilities.map((function(t){return Object(x.jsx)("li",{onClick:function(){g.push("/pokemons/".concat(e.name,"/").concat(t.ability.name))},children:Object(x.jsx)("span",{children:t.ability.name})},t.ability.name)}))})]})]}),Object(x.jsx)(s.b,{style:{textAlign:"center"},to:"/main",children:"back to Pokemons!"})]}):Object(x.jsx)("h1",{children:"Sory, something went wrong..."})})})},W=n(9),E=n(22),M=n.n(E),I=function(e){var t=e.totalCount,n=Object(a.useContext)(u),r=n.cardsPerView,o=n.currentPage,c=n.setCurrentPage,s=Object(a.useState)(Object(W.d)(o,t)),p=Object(i.a)(s,2),j=p[0],m=p[1];return Object(a.useEffect)((function(){m(Object(W.d)(o,Object(W.c)(t,r)))}),[o,t,r]),j.length?Object(x.jsx)("ul",{className:M.a.pagination,children:j.map((function(e,t){return Object(x.jsx)("li",{className:e===o?M.a.active:"",children:Object(x.jsx)("button",{onClick:function(){c("..."!==e?Number(e):Object(W.b)(j[t-1],j[t+1]))},children:e})},"..."!==e?e:void 0!==j[t+1]?Object(W.b)(j[t-1],j[t+1]):t+1)}))}):Object(x.jsx)("div",{})},q=n(23),z=n.n(q),V=function(e){var t=e.name,n=e.index,r=Object(a.useContext)(u),o=r.currentPage,c=r.cardsPerView,s=Object(j.g)(),p=t[0].toUpperCase()+t.slice(1),m=Object(a.useState)(""),_=Object(i.a)(m,2),d=_[0],k=_[1],O=C(Object(b.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(W.e)(o,c,n),e.next=3,f.getImage(t);case 3:a=e.sent,r=a.data?Object(W.a)(a.data):N,k(r);case 6:case"end":return e.stop()}}),e)})))),h=Object(i.a)(O,3),g=h[0],P=h[1],v=h[2];return Object(a.useEffect)((function(){g()}),[]),Object(x.jsxs)("div",{className:z.a.pokemonCard,onClick:function(){s.push("/pokemons/".concat(t))},children:[P?Object(x.jsx)(y,{}):Object(x.jsx)("div",{className:z.a.pokemonCard__imageWrapper,children:Object(x.jsx)("img",{src:v?N:d,alt:p,width:"250",height:"250"})}),Object(x.jsx)("h2",{children:p})]})},T=n(40),D=n.n(T),B=function(e){var t=e.pokemons;return t.length?Object(x.jsx)("ul",{className:D.a.pokemonList__list,children:t.map((function(e,t){return Object(x.jsx)("li",{children:Object(x.jsx)(V,{name:e.name,index:t})},e.name)}))}):Object(x.jsx)("h2",{children:"No pokemons here!"})},G=n(16),U=n.n(G),F=function(){var e=Object(a.useContext)(u),t=e.pokemons,n=e.setPokemons,r=e.currentPage,o=e.cardsPerView,c=Object(a.useState)(0),s=Object(i.a)(c,2),p=s[0],j=s[1],m=C(Object(b.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAll(o,r);case 2:t=e.sent,a=t.count,j(a),n(t.results);case 6:case"end":return e.stop()}}),e)})))),_=Object(i.a)(m,3),d=_[0],k=_[1],O=_[2];return Object(a.useEffect)((function(){d()}),[r]),Object(x.jsx)(P,{title:"pokeDex",children:Object(x.jsxs)("div",{className:U.a.PokemonsPage,children:[Object(x.jsx)("div",{className:U.a.PokemonsPage__pagination,children:k&&!t.length||O?Object(x.jsx)("div",{}):Object(x.jsx)(I,{totalCount:p})}),Object(x.jsx)("div",{className:U.a.pokemonList__wrapper,children:k?Object(x.jsx)(y,{}):O?Object(x.jsxs)("h2",{style:{textAlign:"center"},children:["Error! ",O," "]}):Object(x.jsx)(B,{pokemons:t})})]})})},J=n(24),R=n.n(J),Y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(j.h)(),c=C(Object(b.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAbility(o.ability);case 2:t=e.sent,n=t.effect_entries,a=n.find((function(e){return"en"===e.language.name})),r(a?a.effect:"Sory there is no description in your language for current ability");case 6:case"end":return e.stop()}}),e)})))),s=Object(i.a)(c,3),p=s[0],u=s[1],m=s[2],_=Object(j.g)();return Object(a.useEffect)((function(){p()}),[]),Object(x.jsx)(P,{title:o.ability,children:Object(x.jsxs)("div",{className:R.a.ability,children:[u?Object(x.jsx)(y,{}):m?Object(x.jsxs)("p",{children:["Sory, something went wrong... ",m]}):Object(x.jsx)("p",{className:R.a.ability,children:n}),Object(x.jsx)("button",{onClick:function(){_.push("/pokemons/".concat(o.name))},children:"back to Pokemon!"})]})})},H=function(){return Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{exact:!0,path:"/pokemons",children:Object(x.jsx)(F,{})}),Object(x.jsx)(j.b,{exact:!0,path:"/pokemons/:name",children:Object(x.jsx)(A,{})}),Object(x.jsx)(j.b,{exact:!0,path:"/pokemons/:name/:ability",children:Object(x.jsx)(Y,{})}),Object(x.jsx)(j.a,{to:"/pokemons"})]})};var Q=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(1),c=Object(i.a)(o,2),p={pokemons:n,setPokemons:r,currentPage:c[0],setCurrentPage:c[1],cardsPerView:20};return Object(x.jsx)(u.Provider,{value:p,children:Object(x.jsx)(s.a,{children:Object(x.jsx)(H,{})})})};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Q,{})}),document.getElementById("root"))},9:function(e,t,n){"use strict";(function(e){function a(e,t,n){var a=(e-1)*t+n+1;return a>898&&(a=1e4+a-898),a}function r(t){return"data:image/png;base64, ".concat(e.from(t,"binary").toString("base64"))}function o(e,t){return Math.ceil(e/t)}function c(e,t){function n(e,t){return Array(t-e+1).fill(null).map((function(t,n){return n+e}))}var a;a=t<=7?7:e>4&&e<t-3?2:4;var r={start:Math.round(e-a/2),end:Math.round(e+a/2)};r.start-1!==1&&r.end+1!==t||(r.start+=1,r.end+=1);var o=e>a?n(Math.min(r.start,t-a),Math.min(r.end,t)):n(1,Math.min(t,a+1)),c=function(e,n){return o.length+1!==t?n:[e]};return 1!==o[0]&&(o=c(1,[1,"..."]).concat(o)),o[o.length-1]<t&&(o=o.concat(c(t,["...",t]))),o}function i(e,t){return Math.trunc((Number(e)+Number(t))/2)}n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i}))}).call(this,n(72).Buffer)}},[[76,1,2]]]);
//# sourceMappingURL=main.c8f7e849.chunk.js.map