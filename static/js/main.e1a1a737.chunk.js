(this.webpackJsonpshopify2021=this.webpackJsonpshopify2021||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),s=n.n(c),r=n(9),i=n.n(r),l=(n(30),n(10)),o=n(17),d=n(5),b=(n(31),n(20)),j=n.n(b);function h(e){Object(c.useRef)(null);var t=e.classes;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:t.searchView,children:Object(a.jsxs)("div",{className:t.searchBarContainer,children:[Object(a.jsx)("p",{children:"Movie Title"}),Object(a.jsxs)("div",{className:t.searchBar,children:[Object(a.jsx)("button",{className:t.searchBtn,disabled:!0,children:Object(a.jsx)(j.a,{})}),Object(a.jsx)("input",{className:t.input,placeholder:"Search\u2026","aria-label":"search",type:"search",onKeyDown:function(t){"Enter"===t.key&&e.handleSearch(t.target.value)}})]})]})})})}function u(e){var t=!1;null!==e._disableHandler&&(t=e._disableHandler(e.movie.imdbID));var n=e.classes;return Object(a.jsxs)("li",{children:[e.movie.Title," ",e.movie.Year,Object(a.jsx)("button",{className:n.viewBtn,onClick:function(){return e._clickHandler(e.movie.imdbID)},disabled:t,children:e.btnText})]})}function x(e){e.classes;return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:Object.entries(e.movies).map((function(t){var n=Object(d.a)(t,2),c=(n[0],n[1]);return Object(a.jsx)(u,{classes:e.classes,movie:c,btnText:e.btnText,_clickHandler:e._clickHandler,_disableHandler:e._disableHandler})}))})})}function m(e){var t=e.classes;return Object.entries(e.results).length<1?Object(a.jsxs)("div",{className:t.view,children:[Object(a.jsx)("h4",{className:t.headerTxt,children:"Search Results"}),Object(a.jsx)("p",{className:t.headerTxt,children:"Search for a movie, and press the enter key to see results here!"})]}):Object(a.jsxs)("div",{className:t.view,children:[Object(a.jsx)("h4",{className:t.headerTxt,children:"Results for ".concat(e.searchTerm)}),Object(a.jsx)(x,{classes:e.classes,nominations:e.nominations,btnText:"Nominate",movies:e.results,_clickHandler:e._clickHandler,_disableHandler:e._disableHandler})]})}function O(e){var t=e.classes;return Object(a.jsxs)("div",{className:t.view,children:[Object(a.jsx)("h4",{className:t.headerTxt,children:"Nominations"}),Object(a.jsx)(x,{classes:e.classes,movies:e.nominations,btnText:"Remove",_clickHandler:e._clickHandler,_disableHandler:e._disableHandler})]})}var p=n(56),v=n(57);function f(e){var t=e.classes;return!0===e.render?Object(a.jsx)("div",{className:t.bannerView,children:Object(a.jsx)("h3",{children:e.text})}):Object(a.jsx)(a.Fragment,{})}var g=Object(p.a)((function(e){return{root:{flexGrow:1,width:"90%",padding:"30px",backgroundColor:"#E8E8E8",margin:"auto auto",marginTop:"20px"},view:{textAlign:"left",width:"100%",margin:"auto auto",backgroundColor:"white",minHeight:"200px",paddingBottom:"50px",overflow:"auto"},headerTxt:{margin:"5px 10px 5px 10px",paddingTop:"10px"},searchView:{position:"relative",width:"100%",backgroundColor:"white",paddingBottom:"20px"},input:{width:"90%",height:"30px",border:"none","&:focus":{outline:"none"}},searchIcon:{display:"flex",margin:"auto"},searchBtn:{float:"left",width:"5%",height:"30px",border:"none",backgroundColor:"white",margin:"0","&:hover":{background:"light-gray"}},viewBtn:{marginLeft:"10px"},searchBarContainer:{width:"95%",margin:"auto auto",padding:"5px 0 5px 0"},searchBar:{border:"1px solid black",display:"flex"},bannerView:{backgroundColor:"green",color:"white",padding:"5px",textAlign:"center"}}}));var w=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)({}),i=Object(d.a)(r,2),b=i[0],j=i[1],u=Object(c.useState)(),x=Object(d.a)(u,2),p=(x[0],x[1]),w=Object(c.useState)({}),k=Object(d.a)(w,2),H=k[0],N=k[1],_=Object(c.useState)(0),T=Object(d.a)(_,2),S=T[0],y=T[1],B=Object(c.useState)(!1),C=Object(d.a)(B,2),E=C[0],I=C[1];Object(c.useEffect)((function(){n&&(console.log("this is searchTerm  ".concat(n)),console.log(b),console.log("Current Nominations ".concat(H)),S>=5?1!=E&&I(!0):S<5&&0!=E&&I(!1))}));var D=g();return Object(a.jsxs)("div",{className:D.root,children:[Object(a.jsx)("h1",{children:"The Shoppies"}),Object(a.jsxs)(v.a,{container:!0,spacing:3,justify:"center",children:[Object(a.jsxs)(v.a,{item:!0,xs:12,children:[Object(a.jsx)(f,{text:"Congrats! You nominated the max amount of 5!",classes:D,render:E}),Object(a.jsx)(h,{handleSearch:function(e){s(e),fetch("http://www.omdbapi.com/?i=tt3896198&apikey=bae5ff4b&s=".concat(e,"&r=json&type=movie")).then((function(e){return e.json()})).then((function(e){var t={};e.Search.map((function(e){return t[e.imdbID]=e})),j(t)}),(function(e){p(e)}))},classes:D})]}),Object(a.jsx)(v.a,{item:!0,xs:!0,children:Object(a.jsx)(m,{classes:D,results:b,searchTerm:n,_clickHandler:function(e){var t=b[e];5!=S?t?(N(Object(o.a)(Object(o.a)({},H),{},Object(l.a)({},e,t))),y((function(e){return Number(e)+1}))):console.log("error adding movie"):I(!0)},_disableHandler:function(e){return!!H[e]}})}),Object(a.jsx)(v.a,{item:!0,xs:!0,children:Object(a.jsx)(O,{classes:D,nominations:H,_clickHandler:function(e){b[e]&&(N((function(t){var n=Object(o.a)({},t);return delete n[e],n})),y((function(e){return Number(e)-1})),S<5&&I(!1))},_disableHandler:null})})]})]})};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e1a1a737.chunk.js.map