(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(4),u=n.n(i),a=n(2),s=n(0),o=function(e){var t=e.clickSquare,n=e.square,c=e.i;return Object(s.jsx)("div",{onClick:function(){return t(c)},style:{borderRight:8===c||5===c||2===c?"none":"1px solid black",borderBottom:6===c||7===c||8===c?"none":"1px solid black"},className:"square",children:n})},j=function(){var e=Object(c.useState)(new Array(9).fill("")),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)("Human"),u=Object(a.a)(i,2),j=u[0],b=u[1],l=Object(c.useState)(""),O=Object(a.a)(l,2),f=O[0],d=O[1],h=Object(c.useState)(1),m=Object(a.a)(h,2),x=m[0],p=m[1],v=Object(c.useState)(0),S=Object(a.a)(v,2),A=S[0],k=S[1],E=Object(c.useState)(0),H=Object(a.a)(E,2),g=H[0],w=H[1],y=Object(c.useState)(""),N=Object(a.a)(y,2),q=N[0],R=N[1],M=Object(c.useState)(!1),_=Object(a.a)(M,2),T=_[0],W=_[1];Object(c.useEffect)((function(){(g>=3||A>=3)&&R(A>g?"Human":"Ai")}),[f]),Object(c.useEffect)((function(){var e=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(a.a)(t[n],3),r=c[0],i=c[1],u=c[2];if(e[r]&&e[r]===e[i]&&e[i]===e[u])return e[r]}return null}(n);!e||f||q||("X"===e&&k((function(e){return e+1})),"O"===e&&w((function(e){return e+1})),d(e))}),[j]),Object(c.useEffect)((function(){setTimeout((function(){return B()}),500)}),[j]),Object(c.useEffect)((function(){f&&!q&&g<3&&A<3&&setTimeout((function(){p((function(e){return e+1})),C()}),2e3)}),[f]),Object(c.useEffect)((function(){-1!==n.indexOf("")||f||(W(!0),setTimeout((function(){C()}),2e3))}),[n]);var X=function(e){n[e]||f||q||"Human"!==j||(r((function(t){return t.map((function(t,n){return n===e&&(t="X"),t}))})),b("Ai"))},B=function e(){if("Ai"===j&&!f&&!T){var t=Math.floor(9*Math.random());""===n[t]?(n[t]="O",b("Human")):e()}},C=function(){d(""),r(new Array(9).fill("")),b("Human"),W(!1)};return Object(s.jsxs)("div",{className:"board",children:[Object(s.jsxs)("h2",{children:["Round ",x]}),Object(s.jsxs)("div",{className:"board__score",children:[Object(s.jsx)("h1",{children:"Human "})," ",Object(s.jsxs)("h2",{style:{color:"red"},children:[A," : ",g]}),Object(s.jsx)("h1",{children:"Ai"})]}),Object(s.jsx)("div",{className:"board__game-field",children:n.map((function(e,t){return Object(s.jsx)(o,{clickSquare:X,square:e,i:t},t)}))}),Object(s.jsx)("p",{style:{marginRight:"Human"===j?"250px":"-250px"},children:!f&&j+"'s turn"}),Object(s.jsx)("p",{children:f&&!q&&("X"===f?"Human Wins the Round":"O"===f?"Ai Wins the Round":null)}),T&&Object(s.jsx)("p",{children:"Draw !"}),q&&Object(s.jsxs)("p",{children:[" ",q," won the Game "]}),Object(s.jsx)("button",{onClick:function(){C(),p(1),k(0),w(0),R("")},children:" NEW GAME"})]})},b=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(j,{})})};n(10);u.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ba8411a5.chunk.js.map