(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{77:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(14),o=a.n(r),i=a(69),s=a(17),l=a(16),u=function(){var e=Object(c.useContext)(s.a),t=e.categories,a=e.categoryId,r=e.setCategories,i=e.setCategoryId;return Object(c.useEffect)(function(){l.a.table("categories").toArray().then(function(e){r(e)})},[]),t.map(function(e){var t=e.id,c=e.name,r=o()("category",{active:a===t});return n.a.createElement("div",{className:r,key:t,onClick:function(){return i(t)}},c)})};t.default=function(){var e=Object(c.useContext)(s.a).categoryId,t=o()("categories__header",{"--inactive":!e});return n.a.createElement("div",{className:"categories"},n.a.createElement("div",{className:t},"Select category"),n.a.createElement("div",{className:"categories__container"},n.a.createElement(u,null),n.a.createElement("div",{className:"category active"},n.a.createElement(i.a,{to:"/category"},"Add category"))))}}}]);
//# sourceMappingURL=5.2ffcb2e0.chunk.js.map