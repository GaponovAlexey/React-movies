(this.webpackJsonpMovies=this.webpackJsonpMovies||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),i=c.n(s),r=c(0),l=function(){return Object(r.jsx)("footer",{className:"page-footer yellow lighten-5",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container",style:{color:"black"},children:[(new Date).toLocaleDateString()," ",Object(r.jsx)("br",{}),"Hello from React",Object(r.jsx)("a",{className:"grey-text black text-lighten-4 right",href:"https://github.com/kekelberi/demo",children:"Repo"})]})})})},j=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"purple yellow lighten-5",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)("a",{href:"!#",className:"brand-logo right",style:{color:"black"},children:"Movies"}),Object(r.jsx)("ul",{id:"nav-mobile",className:"left hide-on-med-and-down",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"http://localhost:3000/",style:{color:"black"},children:"Home"})})})]})})})},o=(c(11),c(2)),d=c(5),h=function(e){var t=e.Title,c=e.Year,a=(e.imdbID,e.Poster),n=e.Type;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===a?Object(r.jsx)("img",{className:"activator",src:" https://via.placeholder.com/150x210?text=".concat(t)}):Object(r.jsx)("img",{className:"activator",src:a})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(r.jsxs)("p",{children:[c,Object(r.jsx)("span",{className:"right",children:n})]})]})]})})},b=function(e){var t=e.movies,c=void 0===t?[]:t;return Object(r.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(r.jsx)(h,Object(d.a)({},e),e.imdbID)})):Object(r.jsx)("h4",{children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})},O=function(){return Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate"})})},m=function(e){var t=e.searchMovies,c=Object(a.useState)(""),n=Object(o.a)(c,2),s=n[0],i=n[1],l=Object(a.useState)("all"),j=Object(o.a)(l,2),d=j[0],h=j[1],b=function(e){h((function(t){return e.target.dataset.type})),t(d)};return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col s12",children:Object(r.jsxs)("div",{style:{display:"flex"},className:"input-field ",children:[Object(r.jsx)("input",{value:s,onKeyDown:function(e){"Enter"===e.key&&(t(s,d),i(""))},onChange:function(e){return i(e.target.value)},placeholder:"search",type:"email",className:"validate"}),Object(r.jsx)("button",{className:"btn search-btn",onClick:function(){s.trim().length&&(t(s,d),i(""))},children:"send"})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap inp",name:"type",type:"radio","data-type":"all",onChange:b,checked:"all"===d}),Object(r.jsx)("span",{children:"all "})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap inp",name:"type",type:"radio","data-type":"movie",onChange:b,checked:"movie"===d}),Object(r.jsx)("span",{children:" Movies only "})]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{className:"with-gap inp",name:"type",type:"radio","data-type":"series",onChange:b,checked:"series"===d}),Object(r.jsx)("span",{children:"Series only"})]})]})})]})})},x="a605fa0d",p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!0),i=Object(o.a)(s,2),l=i[0],j=i[1];Object(a.useEffect)((function(){fetch("http://www.omdbapi.com/?apikey=".concat(x,"&page=1&s=top")).then((function(e){return e.json()})).then((function(e){return n(e.Search,j((function(e){return!1})))}))}),[n]);return l?Object(r.jsx)(O,{}):Object(r.jsx)("main",{className:"conteiner content",children:Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{searchMovies:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";fetch("http://www.omdbapi.com/?apikey=".concat(x,"&page=1&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){return n(e.Search)}))}}),Object(r.jsx)(b,{movies:c})]})})};var u=function(){return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(j,{}),Object(r.jsx)(p,{}),Object(r.jsx)(l,{})]})};i.a.render(Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.0aa8e027.chunk.js.map