(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{62:function(e,t,n){"use strict";var r=new(n(63).a)("WalletProtector");r.version(1).stores({categories:"++id,name,createdAt,updatedAt"}),r.version(1).stores({costs:"++id,categoryId,cost,createdAt,updatedAt"}),t.a=r},82:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=n(7),l=n(14),s=n(62),d=function(){var e=Object(r.useContext)(l.a),t=e.categories,n=e.setCategories,o=Object(r.useState)(""),d=Object(u.a)(o,2),f=d[0],b=d[1];return a.a.createElement("div",null,a.a.createElement("input",{name:"name",onChange:function(e){var t=e.target.value;b(t)},value:f}),a.a.createElement("button",{disabled:!f,onClick:function(){var e=new Date,r={name:f,createdAt:e,updatedAt:e};s.a.table("categories").add(r).then(function(e){var a=[].concat(i(t),[c({},r,{id:e})]);b(""),n(a)})}},"Add"))};t.default=function(){return a.a.createElement("div",null,a.a.createElement("div",null,"Category"),a.a.createElement(d,null))}}}]);
//# sourceMappingURL=2.f1341b4e.chunk.js.map