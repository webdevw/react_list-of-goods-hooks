(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),a=n(8),r=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="none",t.ALPHABET="alphabet",t.LENGTH="length"}(s||(s={}));var j=function(){var t=Object(r.useState)(s.NONE),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],p=function(t,e){var n=e.sortType,s=e.isReversed,c=Object(a.a)(t);return c.sort((function(t,e){switch(n){case"none":default:return 0;case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length}})),s&&c.reverse(),c}(h,{sortType:n,isReversed:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":"alphabet"!==n}),onClick:function(){c(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":"length"!==n}),onClick:function(){c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!j}),onClick:function(){d((function(t){return!t}))},children:"Reverse"}),("none"!==n||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.NONE),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:p.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a35bbe50.chunk.js.map