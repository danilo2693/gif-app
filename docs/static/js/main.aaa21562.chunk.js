(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(16),r=n.n(c),i=n(13),s=n(6),o=n(34),l=n(2),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(l.jsx)(o.a,{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t(r),i(""))},children:Object(l.jsx)(o.a.Group,{controlId:"formBasicEmail",children:Object(l.jsx)(o.a.Control,{type:"text",value:r,onChange:function(e){return i(e.target.value)},placeholder:"Search GIFs...",autoComplete:"off"})})})},u=n(19),d=n(12),b=n.n(d),m=n(18),f="1SPbygaro4cf31qOcsmmExHLIVl10MLX",h="https://api.giphy.com/v1/gifs/search",p=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,c,r,i,s,o=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:10,a="".concat(h,"?q=").concat(encodeURI(t),"&limit=").concat(n,"&api_key=").concat(f),e.next=4,fetch(a);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,i=r.data,s=i.map((function(e){var t=e.id,n=e.title,a=e.images;return{id:t,title:n,url:null===a||void 0===a?void 0:a.fixed_height.url}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(32),O=n(17),g=function(e){var t=e.title,n=e.url;return Object(l.jsxs)("div",{className:"border m-2",children:[Object(l.jsx)("img",{className:"img-fluid img-center",src:n,alt:t}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{className:"text-center p-1",children:t})]})},v=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){return p(e).then((function(e){return r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"text-info",children:t}),r?Object(l.jsxs)("div",{className:"animate__animated animate__flash",children:[Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("div",{className:"spinner-border",role:"status",children:Object(l.jsx)("span",{className:"sr-only",children:"Loading..."})})}),Object(l.jsx)("p",{className:"text-center",children:"Loading..."})]}):Object(l.jsx)(x.a,{className:"animate__animated animate__fadeIn",children:c.map((function(e){return Object(l.jsx)(O.a,{md:4,children:Object(l.jsx)(g,Object(u.a)({},e))},e.id)}))})]})},N=n(33),y=function(){var e=Object(a.useState)(["Kimetsu no Yaiba"]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=function(e,t,n){var a=e.splice(t,1);e.splice(n,0,a[0])};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(N.a,{children:[Object(l.jsx)("h1",{className:"text-primary mb-3",children:"GifApp"}),Object(l.jsx)(j,{setCategories:function(e){var t=function(t){return t===e};if(n.find(t)){var a=n.findIndex(t);r(n,a,0),c(Object(i.a)(n))}else c([e].concat(Object(i.a)(n)))}}),n.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{category:e}),Object(l.jsx)("hr",{className:"m-5"})]},e)}))]})})};n(29),n(30);r.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.aaa21562.chunk.js.map