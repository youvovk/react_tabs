(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),l=n(2),r=n.n(l),i=n(3),o=n(4),s=n(6),u=n(5),m=n(7);var b=function(t){return c.a.createElement(c.a.Fragment,null,t.children)};var p=function(t){var e=t.children;return c.a.createElement("div",{className:"tab-content__wrapp"},c.a.createElement("p",{className:"tab-content"},e))},d=(n(13),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],childVisible:0},n}return Object(m.a)(e,t),Object(o.a)(e,[{key:"onTabSelected",value:function(t){this.setState({childVisible:t})}},{key:"render",value:function(){var t=this,e=this.state.tabs;return c.a.createElement("div",{className:"App"},c.a.createElement(b,null,c.a.createElement("div",{className:"tab-switch__wrapp"},e.map(function(e,n){return c.a.createElement("button",{type:"button",onClick:function(){return t.onTabSelected(n)},className:"tab"},e.title)})),e.map(function(e,n){return c.a.createElement(c.a.Fragment,null,t.state.childVisible===n?c.a.createElement(p,{title:e.title,key:e.title},e.content):null)})))}}]),e}(c.a.Component));r.a.render(c.a.createElement(d,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.83c43f9d.chunk.js.map