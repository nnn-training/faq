(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2775:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),u=n(1165),d=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var d=h[c];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var l=a.props[d],f=r[d]||new Set;"name"===d&&i||!f.has(l)?(f.add(l),r[d]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),i=(n(1506),n(2205)),s=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),l=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},8148:function(e,t,n){"use strict";var r=n(5893),a=n(9008);t.Z=function(e){var t=e.children,n=e.title,o=void 0===n?"FAQ\u30fb\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0 - N\u4e88\u5099\u6821\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b3\u30fc\u30b9":n;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{className:"px-5 ",children:(0,r.jsx)("div",{className:"max-w-4xl mx-auto pt-5 pb-2 border-gray-100 border-b",children:(0,r.jsx)("a",{href:"/",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("img",{className:"icon ml-1 mb-0.5 cursor-pointer",src:"/images/nyobiko.png"}),(0,r.jsxs)("h1",{className:"leading-4 pl-4 cursor-pointer",children:[(0,r.jsx)("div",{className:"ml-1",children:"N\u4e88\u5099\u6821\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b3\u30fc\u30b9"}),(0,r.jsx)("div",{className:"font-bold text-xl ml-1",children:"FAQ\u30fb\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"})]})]})})})}),t,(0,r.jsxs)("footer",{className:"",children:[(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"px-5 pt-3 pb-5 bg-gray-700 text-sm text-white font-bold",children:(0,r.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:"/",children:"FAQ\u30fb\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0 - N\u4e88\u5099\u6821\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u30b3\u30fc\u30b9"})})})})]})]})}},4601:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(8148);t.default=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)("main",{className:"p-5 bg-blue-50 min-h-screen",children:(0,r.jsxs)("div",{className:"max-w-4xl mx-auto px-1",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("span",{className:"cursor-pointer text-blue-600 hover:text-blue-400 transition duration-300",children:"FAQ\u30fb\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"})}),"\xa0/ \u5927\u898f\u6a21 Web \u30a2\u30d7\u30ea"]}),(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsx)("h1",{className:"font-bold text-xl pb-1 border-b-2",children:"\u5927\u898f\u6a21 Web \u30a2\u30d7\u30ea"})})]})})})})}},4936:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/webapp",function(){return n(4601)}])},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=4936,e(e.s=t);var t}));var t=e.O();_N_E=t}]);