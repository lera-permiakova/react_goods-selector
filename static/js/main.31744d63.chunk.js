(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),s=c.n(n),o=c(7),a=c(5),d=c(6),l=c(9),r=c(8),i=c(1),u=c.n(i),h=c(3),j=c.n(h),b=(c(14),c(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),d=0;d<n;d++)s[d]=arguments[d];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:["Jam"]},e.clearSelectedGood=function(){e.setState({selectedGood:[]})},e.changeSelectedGood=function(t){e.setState((function(e){return{selectedGood:[].concat(Object(o.a)(e.selectedGood),[t])}}))},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)("section",{className:"products",children:[Object(b.jsxs)("h1",{className:"products__title",children:[Object(b.jsx)("button",{type:"button",className:"products__close",disabled:0===t.length,onClick:this.clearSelectedGood,children:"X"}),Object(b.jsxs)(b.Fragment,{children:[t.join(2===t.length?" and ":", ")||"No goods",1===t.length?" is ":t.length>1?" are ":" ","selected"]})]}),Object(b.jsx)("ul",{className:"products__goods",children:p.map((function(c){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:j()("products__button",{active__button:t.includes(c)}),disabled:t.includes(c),type:"button",onClick:function(){e.changeSelectedGood(c)},children:t.includes(c)?"Added":"Add"}),Object(b.jsx)("li",{className:j()("products__good",{active:t.includes(c)}),children:c},c)]})}))})]})})}}]),c}(u.a.Component),m=g;s.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.31744d63.chunk.js.map