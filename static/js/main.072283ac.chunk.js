(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var a=n(28),r=n(27),o=n(3),c=n(0),i=n.n(c),u=n(16),l=i.a.createContext({}),s=function(e){var t=e.children,n=Object(c.useState)([{}]),s=Object(o.a)(n,2),d=s[0],f=s[1];Object(c.useEffect)(function(){u.a.table("costs").toArray().then(function(e){f(e)})},[]);return i.a.createElement(l.Provider,{value:{costs:d,addCost:function(e){var t=e.cost,n=e.categoryId,o=new Date,c={cost:parseFloat(t),categoryId:n,createdAt:o,updatedAt:o};u.a.table("costs").add(c).then(function(e){f([].concat(Object(r.a)(d),[Object(a.a)({},c,{id:e})]))})}}},t)}},16:function(e,t,n){"use strict";var a=new(n(32).a)("WalletProtector");a.version(1).stores({categories:"++id,name,createdAt,updatedAt"}),a.version(1).stores({costs:"++id,categoryId,cost,createdAt,updatedAt"}),t.a=a},17:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return i});var a=n(3),r=n(0),o=n.n(r),c=o.a.createContext({}),i=function(e){var t=e.children,n=Object(r.useState)([]),i=Object(a.a)(n,2),u=i[0],l=i[1],s=Object(r.useState)(parseInt(localStorage.getItem("categoryId"))||0),d=Object(a.a)(s,2),f=d[0],b=d[1];return o.a.createElement(c.Provider,{value:{categories:u,setCategories:l,categoryId:f,setCategoryId:function(e){b(e),localStorage.setItem("categoryId",e)}}},t)}},25:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return i});var a=n(3),r=n(0),o=n.n(r),c=o.a.createContext({}),i=function(e){var t=e.children,n=Object(r.useState)(0),i=Object(a.a)(n,2),u=i[0],l=i[1];return o.a.createElement(c.Provider,{value:{cost:u,setCost:l}},t)}},26:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u});var a=n(3),r=n(0),o=n.n(r),c=n(10),i=o.a.createContext({}),u=function(e){var t=e.children,n=Object(r.useContext)(c.a).costs,u=Object(r.useState)(0),l=Object(a.a)(u,2),s=l[0],d=l[1],f=Object(r.useState)(0),b=Object(a.a)(f,2),p=b[0],v=b[1],m=Object(r.useState)(0),g=Object(a.a)(m,2),w=g[0],h=g[1],E=Object(r.useState)(0),j=Object(a.a)(E,2),O=j[0],C=j[1],y=function(e){return e.map(function(e){return e.cost}).reduce(function(e,t){return e+t},0)};return Object(r.useEffect)(function(){!function(){var e=y(n);C(e)}(),function(){var e=new Date,t=n.filter(function(t){return t.updatedAt?e.setHours(0,0,0,0)===t.updatedAt.setHours(0,0,0,0):null}),a=y(t);d(a)}(),function(){var e=new Date,t=e.getFullYear(),a=e.getMonth(),r=new Date(t,a,1),o=new Date(t,a+1,0),c=n.filter(function(e){if(!e.updatedAt)return null;var t=e.updatedAt.setHours(0,0,0,0);return t>=r.setHours(0,0,0,0)&&t<=o.setHours(0,0,0,0)}),i=y(c);v(i)}(),function(){var e=(new Date).getFullYear(),t=new Date(e,0,1),a=new Date(e,12,31),r=n.filter(function(e){if(!e.updatedAt)return null;var n=e.updatedAt.setHours(0,0,0,0);return n>=t.setHours(0,0,0,0)&&n<=a.setHours(0,0,0,0)}),o=y(r);h(o)}()},[n.length]),o.a.createElement(i.Provider,{value:{currentDateCounter:s,currentMonthCounter:p,currentYearCounter:w,totalCounter:O}},t)}},34:function(e,t,n){e.exports=n(75)},73:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(82),u=n(85),l=n(67),s=n(83),d=n(29),f=(n(50),n(3)),b=n(30),p=n(78),v=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],o=t[1];return r.a.createElement(b.slide,{isOpen:n,outerContainerId:"outer-container",pageWrapId:"page-wrap"},r.a.createElement(p.a,{exact:!0,onClick:o,to:"/"},"Form"),r.a.createElement(p.a,{onClick:o,to:"/stats"},"Stats"),r.a.createElement(p.a,{onClick:o,to:"/settings"},"Settings"),r.a.createElement(p.a,{onClick:o,to:"/category"},"Category"))},m=function(){return r.a.createElement("header",null,"Protector")},g=n(25),w=n(17),h=n(26),E=n(10),j=Object(a.lazy)(function(){return n.e(1).then(n.bind(null,84))}),O=Object(a.lazy)(function(){return n.e(2).then(n.bind(null,79))}),C=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,80))}),y=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,81))}),A=Object(s.a)(function(){return r.a.createElement("div",{id:"outer-container"},r.a.createElement(d.ToastContainer,{autoClose:3e3}),r.a.createElement(v,null),r.a.createElement(m,null),r.a.createElement(u.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement(E.b,null,r.a.createElement(h.b,null,r.a.createElement(w.b,null,r.a.createElement(g.b,null,r.a.createElement(l.a,{component:O,exact:!0,path:"/"})),r.a.createElement(l.a,{component:j,path:"/category"})),r.a.createElement(l.a,{component:C,path:"/settings"}),r.a.createElement(l.a,{component:y,path:"/stats"}))))))))}),S=function(){return r.a.createElement(i.a,{basename:"/wallet-protector-pwa"},r.a.createElement(A,null))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(73);c.a.render(r.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/wallet-protector-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/wallet-protector-pwa","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):I(t,e)})}}()}},[[34,8,7]]]);
//# sourceMappingURL=main.072283ac.chunk.js.map