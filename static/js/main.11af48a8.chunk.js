(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s});var a=n(28),r=n(27),c=n(5),o=n(0),u=n.n(o),l=n(16),i=u.a.createContext({}),s=function(e){var t=e.children,n=Object(o.useState)([{}]),s=Object(c.a)(n,2),d=s[0],m=s[1];Object(o.useEffect)(function(){l.a.table("costs").toArray().then(function(e){m(e)})},[]);return u.a.createElement(i.Provider,{value:{costs:d,addCost:function(e){var t=e.cost,n=e.categoryId,c=new Date,o={cost:parseFloat(t),categoryId:n,createdAt:c,updatedAt:c};l.a.table("costs").add(o).then(function(e){m([].concat(Object(r.a)(d),[Object(a.a)({},o,{id:e})]))})}}},t)}},16:function(e,t,n){"use strict";var a=new(n(32).a)("WalletProtector");a.version(1).stores({categories:"++id,name,createdAt,updatedAt"}),a.version(1).stores({costs:"++id,categoryId,cost,createdAt,updatedAt"}),t.a=a},17:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u});var a=n(5),r=n(0),c=n.n(r),o=c.a.createContext({}),u=function(e){var t=e.children,n=Object(r.useState)([]),u=Object(a.a)(n,2),l=u[0],i=u[1],s=Object(r.useState)(parseInt(localStorage.getItem("categoryId"))||0),d=Object(a.a)(s,2),m=d[0],f=d[1];return c.a.createElement(o.Provider,{value:{categories:l,setCategories:i,categoryId:m,setCategoryId:function(e){f(e),localStorage.setItem("categoryId",e)}}},t)}},25:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u});var a=n(5),r=n(0),c=n.n(r),o=c.a.createContext({}),u=function(e){var t=e.children,n=Object(r.useState)(0),u=Object(a.a)(n,2),l=u[0],i=u[1];return c.a.createElement(o.Provider,{value:{cost:l,setCost:i}},t)}},26:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l});var a=n(5),r=n(0),c=n.n(r),o=n(10),u=c.a.createContext({}),l=function(e){var t=e.children,n=Object(r.useContext)(o.a).costs,l=Object(r.useState)(0),i=Object(a.a)(l,2),s=i[0],d=i[1],m=Object(r.useState)(0),f=Object(a.a)(m,2),b=f[0],E=(f[1],Object(r.useState)(0)),p=Object(a.a)(E,2),v=p[0],g=(p[1],Object(r.useState)(0)),j=Object(a.a)(g,2),O=j[0],h=j[1];return Object(r.useLayoutEffect)(function(){console.log(123),function(){var e=n.map(function(e){return e.cost}).reduce(function(e,t){return e+t});h(e)}(),function(){new Date,n.filter(function(e){console.log(n)});var e=n.map(function(e){return e.cost}).reduce(function(e,t){return e+t});d(e)}()},{}),c.a.createElement(u.Provider,{value:{currentDateCounter:s,currentMonthCounter:b,currentYearCounter:v,totalCounter:O}},t)}},34:function(e,t,n){e.exports=n(75)},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),u=n(81),l=n(83),i=n(67),s=n(82),d=n(29),m=(n(50),n(30)),f=n(77),b=function(){return r.a.createElement(m.slide,{outerContainerId:"outer-container",pageWrapId:"page-wrap"},r.a.createElement(f.a,{exact:!0,to:"/"},"Form"),r.a.createElement(f.a,{to:"/stats"},"Stats"),r.a.createElement(f.a,{to:"/settings"},"Settings"),r.a.createElement(f.a,{to:"/category"},"Category"))},E=function(){return r.a.createElement("header",null,"Header")},p=n(25),v=n(17),g=n(26),j=n(10),O=Object(a.lazy)(function(){return n.e(1).then(n.bind(null,84))}),h=Object(a.lazy)(function(){return n.e(2).then(n.bind(null,78))}),w=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,79))}),y=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,80))}),C=Object(s.a)(function(){return r.a.createElement("div",{id:"outer-container"},r.a.createElement(d.ToastContainer,{autoClose:3e3}),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(l.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement(j.b,null,r.a.createElement(g.b,null,r.a.createElement(v.b,null,r.a.createElement(p.b,null,r.a.createElement(i.a,{component:h,exact:!0,path:"/"})),r.a.createElement(i.a,{component:O,path:"/category"})),r.a.createElement(i.a,{component:w,path:"/settings"}),r.a.createElement(i.a,{component:y,path:"/stats"}))))))))}),I=function(){return r.a.createElement(u.a,{basename:"/wallet-protector-pwa"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(73);o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,7,6]]]);
//# sourceMappingURL=main.11af48a8.chunk.js.map