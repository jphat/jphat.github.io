(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},"0366":function(e,t,n){var r=n("1c0b");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),s=n("fc6a"),a=n("c04e"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=s(e),t=a(t,!0),u)try{return l(e,t)}catch(n){}if(c(e,t))return i(!o.f.call(e,t),e[t])}},"0cfb":function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("cc12");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"19aa":function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1c7e":function(e,t,n){var r=n("b622"),o=r("iterator"),i=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){i=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:iphone|ipod|ipad).*applewebkit/i.test(r)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}},2058:function(e,t,n){"use strict";
/*!
 * Vue3-Lazyload.js v0.2.2-beta
 * A Vue3.x image lazyload plugin
 * (c) 2020 MuRong <admin@imuboy.cn>
 * Released under the MIT License.
 */var r;(function(e){e["LOADING"]="loading",e["LOADED"]="loaded",e["ERROR"]="error"})(r||(r={}));var o="undefined"!==typeof window&&null!==window,i=f(),s=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;function c(e){return"function"===typeof e||"[object Object]"===toString.call(e)}function u(e){return"object"===typeof e?null===e:"function"!==typeof e}function l(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e}function f(){return!!(o&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}function d(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!c(e))throw new TypeError("expected the first argument to be an object");if(0===t.length||"function"!==typeof Symbol||"function"!==typeof a)return e;for(var r=0,o=t;r<o.length;r++)for(var i=o[r],u=a(i),l=0,f=u;l<f.length;l++){var d=f[l];s.call(i,d)&&(e[d]=i[d])}return e}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=0;for(u(e)&&(e=t[r++]),e||(e={});r<t.length;r++)if(c(t[r])){for(var o=0,i=Object.keys(t[r]);o<i.length;o++){var s=i[o];l(s)&&(c(e[s])&&c(t[r][s])?h(e[s],t[r][s]):e[s]=t[r][s])}d(e,t[r])}return e}var p={rootMargin:"0px",threshold:0},v="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",m="",g=function(){function e(e){this.options={loading:v,error:m,observerOptions:p,log:!0,lifecycle:{}},this.config(e)}return e.prototype.config=function(e){void 0===e&&(e={}),h(this.options,e)},e.prototype.mount=function(e,t){this._image=e;var n=this._valueFormatter(t.value),o=n.src,s=n.loading,a=n.error,c=n.lifecycle;this._lifecycle(r.LOADING,c),this._image.setAttribute("src",s||v),i||(this.loadImages(e,o,a,c),this._log((function(){throw new Error("Not support IntersectionObserver!")}))),this._initIntersectionObserver(e,o,a,c)},e.prototype.update=function(e,t){this._observer.unobserve(e);var n=this._valueFormatter(t.value),r=n.src,o=n.error,i=n.lifecycle;this._initIntersectionObserver(e,r,o,i)},e.prototype.unmount=function(e){this._observer.unobserve(e)},e.prototype.loadImages=function(e,t,n,r){this._setImageSrc(e,t,n,r)},e.prototype._setImageSrc=function(e,t,n,o){var i=this,s=e.getAttribute("srcset");"img"===e.tagName.toLowerCase()?(t&&e.setAttribute("src",t),s&&e.setAttribute("srcset",s),this._listenImageStatus(e,(function(){i._log((function(){console.log("Image loaded successfully!")})),i._lifecycle(r.LOADED,o)}),(function(){e.onload=null,i._lifecycle(r.ERROR,o),i._observer.disconnect(),n&&e.setAttribute("src",n),i._log((function(){throw new Error("Image failed to load!")}))}))):e.style.backgroundImage="url('"+t+"')"},e.prototype._initIntersectionObserver=function(e,t,n,r){var o=this,i=this.options.observerOptions;this._observer=new IntersectionObserver((function(i){Array.prototype.forEach.call(i,(function(i){i.isIntersecting&&(o._observer.unobserve(i.target),o._setImageSrc(e,t,n,r))}))}),i),this._observer.observe(this._image)},e.prototype._listenImageStatus=function(e,t,n){e.onload=t,e.onerror=n},e.prototype._valueFormatter=function(e){var t=e,n=this.options.loading,r=this.options.error,o=this.options.lifecycle;return c(e)&&(t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error,o=e.lifecycle||this.options.lifecycle),{src:t,loading:n,error:r,lifecycle:o}},e.prototype._log=function(e){this.options.log&&e()},e.prototype._lifecycle=function(e,t){switch(e){case r.LOADING:this._image.setAttribute("lazy",r.LOADING),(null===t||void 0===t?void 0:t.loading)&&t.loading();break;case r.LOADED:this._image.setAttribute("lazy",r.LOADED),(null===t||void 0===t?void 0:t.loaded)&&t.loaded();break;case r.ERROR:this._image.setAttribute("lazy",r.ERROR),(null===t||void 0===t?void 0:t.error)&&t.error();break}},e}(),b={install:function(e,t){var n=new g(t);e.config.globalProperties.$Lazyload=n,e.provide("Lazyload",n),e.directive("lazy",{mounted:n.mount.bind(n),updated:n.update.bind(n),unmounted:n.unmount.bind(n)})}};t["a"]=b},2266:function(e,t,n){var r=n("825a"),o=n("e95a"),i=n("50c4"),s=n("0366"),a=n("35a1"),c=n("2a62"),u=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var l,f,d,h,p,v,m,g=n&&n.that,b=!(!n||!n.AS_ENTRIES),y=!(!n||!n.IS_ITERATOR),_=!(!n||!n.INTERRUPTED),O=s(t,g,1+b+_),w=function(e){return l&&c(l),new u(!0,e)},j=function(e){return b?(r(e),_?O(e[0],e[1],w):O(e[0],e[1])):_?O(e,w):O(e)};if(y)l=e;else{if(f=a(e),"function"!=typeof f)throw TypeError("Target is not iterable");if(o(f)){for(d=0,h=i(e.length);h>d;d++)if(p=j(e[d]),p&&p instanceof u)return p;return new u(!1)}l=f.call(e)}v=l.next;while(!(m=v.call(l)).done){try{p=j(m.value)}catch(I){throw c(l),I}if("object"==typeof p&&p&&p instanceof u)return p}return new u(!1)}},"23cb":function(e,t,n){var r=n("a691"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},"23e7":function(e,t,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,f,d,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(f in t){if(h=t[f],e.noTargetGet?(p=o(l,f),d=p&&p.value):d=l[f],n=u(m?f:v+(g?".":"#")+f,e.forced),!n&&void 0!==d){if(typeof h===typeof d)continue;c(h,d)}(e.sham||d&&d.sham)&&i(h,"sham",!0),s(l,f,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"260b":function(e,t,n){"use strict";var r=n("5606");n.d(t,"a",(function(){return r["e"]}));var o="firebase-exp",i="9.0.0-beta.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(o,i,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),s=n("83ab"),a=i("species");e.exports=function(e){var t=r(e),n=o.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("825a");e.exports=function(e){var t=e["return"];if(void 0!==t)return r(t.call(e)).value}},"2cf4":function(e,t,n){var r,o,i,s=n("da84"),a=n("d039"),c=n("0366"),u=n("1be4"),l=n("cc12"),f=n("1cdc"),d=n("605d"),h=s.location,p=s.setImmediate,v=s.clearImmediate,m=s.process,g=s.MessageChannel,b=s.Dispatch,y=0,_={},O="onreadystatechange",w=function(e){if(_.hasOwnProperty(e)){var t=_[e];delete _[e],t()}},j=function(e){return function(){w(e)}},I=function(e){w(e.data)},E=function(e){s.postMessage(e+"",h.protocol+"//"+h.host)};p&&v||(p=function(e){var t=[],n=1;while(arguments.length>n)t.push(arguments[n++]);return _[++y]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},r(y),y},v=function(e){delete _[e]},d?r=function(e){m.nextTick(j(e))}:b&&b.now?r=function(e){b.now(j(e))}:g&&!f?(o=new g,i=o.port2,o.port1.onmessage=I,r=c(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts&&h&&"file:"!==h.protocol&&!a(E)?(r=E,s.addEventListener("message",I,!1)):r=O in l("script")?function(e){u.appendChild(l("script"))[O]=function(){u.removeChild(this),w(e)}}:function(e){setTimeout(j(e),0)}),e.exports={set:p,clear:v}},"2d00":function(e,t,n){var r,o,i=n("da84"),s=n("342f"),a=i.process,c=a&&a.versions,u=c&&c.v8;u?(r=u.split("."),o=r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=r[1]))),e.exports=o&&+o},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),o=n("3f8c"),i=n("b622"),s=i("iterator");e.exports=function(e){if(void 0!=e)return e[s]||e["@@iterator"]||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),s=n("df75");e.exports=r?Object.defineProperties:function(e,t){i(e);var n,r=s(t),a=r.length,c=0;while(a>c)o.f(e,n=r[c++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,o=n("69f3"),i=n("7dd0"),s="String Iterator",a=o.set,c=o.getterFor(s);i(String,"String",(function(e){a(this,{type:s,string:String(e),index:0})}),(function(){var e,t=c(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},"44ad":function(e,t,n){var r=n("d039"),o=n("c6b6"),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),o=n("1c0b"),i=n("b622"),s=i("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[s])?t:o(n)}},4930:function(e,t,n){var r=n("605d"),o=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},"4d64":function(e,t,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c.length),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"50c4":function(e,t,n){var r=n("a691"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},5135:function(e,t,n){var r=n("7b0b"),o={}.hasOwnProperty;e.exports=function(e,t){return o.call(r(e),t)}},5502:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w}));var r=n("7a23"),o="store";
/*!
 * vuex v4.0.0
 * (c) 2021 Evan You
 * @license MIT
 */var i="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},s=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(e){s&&(e._devtoolHook=s,s.emit("vuex:init",e),s.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){s.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){s.emit("vuex:action",e,t)}),{prepend:!0}))}function c(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function u(e){return null!==e&&"object"===typeof e}function l(e){return e&&"function"===typeof e.then}function f(e,t){if(!e)throw new Error("[vuex] "+t)}function d(e,t){return function(){return e(t)}}var h=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},h.prototype.addChild=function(e,t){this._children[e]=t},h.prototype.removeChild=function(e){delete this._children[e]},h.prototype.getChild=function(e){return this._children[e]},h.prototype.hasChild=function(e){return e in this._children},h.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},h.prototype.forEachChild=function(e){c(this._children,e)},h.prototype.forEachGetter=function(e){this._rawModule.getters&&c(this._rawModule.getters,e)},h.prototype.forEachAction=function(e){this._rawModule.actions&&c(this._rawModule.actions,e)},h.prototype.forEachMutation=function(e){this._rawModule.mutations&&c(this._rawModule.mutations,e)},Object.defineProperties(h.prototype,p);var v=function(e){this.register([],e,!1)};function m(e,t,n){if(_(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");m(e.concat(r),t.getChild(r),n.modules[r])}}v.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},v.prototype.update=function(e){m([],this.root,e)},v.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),_(e,t);var o=new h(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&c(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var g={assert:function(e){return"function"===typeof e},expected:"function"},b={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},y={getters:g,mutations:g,actions:b};function _(e,t){Object.keys(y).forEach((function(n){if(t[n]){var r=y[n];c(t[n],(function(t,o){f(r.assert(t),O(e,n,o,t,r.expected))}))}}))}function O(e,t,n,r,o){var i=t+" should be "+o+' but "'+t+"."+n+'"';return e.length>0&&(i+=' in module "'+e.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function w(e){return new j(e)}var j=function e(t){var n=this;void 0===t&&(t={}),f("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),f(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null);var i=this,s=this,c=s.dispatch,u=s.commit;this.dispatch=function(e,t){return c.call(i,e,t)},this.commit=function(e,t,n){return u.call(i,e,t,n)},this.strict=o;var l=this._modules.root.state;T(this,l,[],this._modules.root),S(this,l),r.forEach((function(e){return e(n)}));var d=void 0===t.devtools||t.devtools;d&&a(this)},I={state:{configurable:!0}};function E(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function k(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;T(e,n,[],e._modules.root,!0),S(e,n,t)}function S(e,t,n){var o=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};c(i,(function(t,n){s[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=Object(r["t"])({data:t}),e.strict&&L(e),o&&n&&e._withCommit((function(){o.data=null}))}function T(e,t,n,r,o){var i=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!i&&!o){var a=N(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=A(e,s,n);r.forEachMutation((function(t,n){var r=s+n;x(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,o=t.handler||t;R(e,r,o,u)})),r.forEachGetter((function(t,n){var r=s+n;P(e,r,t,u)})),r.forEachChild((function(r,i){T(e,t,n.concat(i),r,o)}))}function A(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=M(n,r,o),s=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?e.commit:function(n,r,o){var i=M(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return C(e,t)}},state:{get:function(){return N(e.state,n)}}}),o}function C(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function x(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function R(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return l(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function P(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function L(e){Object(r["C"])((function(){return e._state.data}),(function(){f(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function N(e,t){return t.reduce((function(e,t){return e[t]}),e)}function M(e,t,n){return u(e)&&e.type&&(n=t,t=e,e=e.type),f("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}j.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this},I.state.get=function(){return this._state.data},I.state.set=function(e){f(!1,"use store.replaceState() to explicit replace store state.")},j.prototype.commit=function(e,t,n){var r=this,o=M(e,t,n),i=o.type,s=o.payload,a=o.options,c={type:i,payload:s},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},j.prototype.dispatch=function(e,t){var n=this,r=M(e,t),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+o)},j.prototype.subscribe=function(e,t){return E(e,this._subscribers,t)},j.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return E(n,this._actionSubscribers,t)},j.prototype.watch=function(e,t,n){var o=this;return f("function"===typeof e,"store.watch only accepts a function."),Object(r["C"])((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},j.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},j.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),f(Array.isArray(e),"module path must be a string or an Array."),f(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),T(this,this.state,e,this._modules.get(e),n.preserveState),S(this,this.state)},j.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),f(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=N(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),k(this)},j.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),f(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},j.prototype.hotUpdate=function(e){this._modules.update(e),k(this,!0)},j.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(j.prototype,I);U((function(e,t){var n={};return F(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),D(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=V(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n})),U((function(e,t){var n={};return F(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),D(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=V(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),U((function(e,t){var n={};return F(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),D(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||V(this.$store,"mapGetters",e)){if(o in this.$store.getters)return this.$store.getters[o];console.error("[vuex] unknown getter: "+o)}},n[r].vuex=!0})),n})),U((function(e,t){var n={};return F(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),D(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=V(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function D(e){return F(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function F(e){return Array.isArray(e)||u(e)}function U(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function V(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}}).call(this,n("c8ba"))},5606:function(e,t,n){"use strict";n.d(t,"a",(function(){return H})),n.d(t,"b",(function(){return V})),n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return q}));var r=n("ffa6"),o=n("abfd"),i=n("a8e9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app-exp",u="0.0.900-exp.725ab4684",l=new o["b"]("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",h="@firebase/analytics-exp",p="@firebase/auth-exp",v="@firebase/auth-compat",m="@firebase/database",g="@firebase/database-compat",b="@firebase/functions-exp",y="@firebase/functions-compat",_="@firebase/installations-exp",O="@firebase/installations-compat",w="@firebase/messaging-exp",j="@firebase/messaging-compat",I="@firebase/performance-exp",E="@firebase/performance-compat",k="@firebase/remote-config-exp",S="@firebase/remote-config-compat",T="@firebase/storage",A="@firebase/storage-compat",C="@firebase/firestore",x="@firebase/firestore-compat",R="firebase-exp",P="9.0.0-beta.4",L="[DEFAULT]",N={[c]:"fire-core",[f]:"fire-core-compat",[h]:"fire-analytics",[d]:"fire-analytics-compat",[p]:"fire-auth",[v]:"fire-auth-compat",[m]:"fire-rtdb",[g]:"fire-rtdb-compat",[b]:"fire-fn",[y]:"fire-fn-compat",[_]:"fire-iid",[O]:"fire-iid-compat",[w]:"fire-fcm",[j]:"fire-fcm-compat",[I]:"fire-perf",[E]:"fire-perf-compat",[k]:"fire-rc",[S]:"fire-rc-compat",[T]:"fire-gcs",[A]:"fire-gcs-compat",[C]:"fire-fst",[x]:"fire-fst-compat","fire-js":"fire-js",[R]:"fire-js-all"},M=new Map,D=new Map;function F(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function U(e){const t=e.name;if(D.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;D.set(t,e);for(const n of M.values())F(n,e);return!0}function V(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$=new i["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app-exp",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=P;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!==typeof o||!o)throw $.create("bad-app-name",{appName:String(o)});if(M.has(o))throw $.create("duplicate-app",{appName:o});const i=new r["b"](o);for(const r of D.values())i.addComponent(r);const s=new B(e,n,i);return M.set(o,s),s}function W(e=L){const t=M.get(e);if(!t)throw $.create("no-app",{appName:e});return t}function q(e,t,n){var o;let i=null!==(o=N[e])&&void 0!==o?o:e;n&&(i+="-"+n);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}U(new r["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){U(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),q(c,u,e),q("fire-js","")}K()},5692:function(e,t,n){var r=n("c430"),o=n("c6cd");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.11.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),o=n("241c"),i=n("7418"),s=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(s(e)),n=i.f;return n?t.concat(n(e)):t}},"5c40":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ue})),n.d(t,"b",(function(){return Mt})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return Hn})),n.d(t,"e",(function(){return Gt})),n.d(t,"f",(function(){return tn})),n.d(t,"g",(function(){return jt})),n.d(t,"h",(function(){return wt})),n.d(t,"i",(function(){return en})),n.d(t,"j",(function(){return Yt})),n.d(t,"k",(function(){return gt})),n.d(t,"l",(function(){return Sn})),n.d(t,"m",(function(){return Ge})),n.d(t,"n",(function(){return Gn})),n.d(t,"o",(function(){return Wn})),n.d(t,"p",(function(){return cn})),n.d(t,"q",(function(){return Nn})),n.d(t,"r",(function(){return A})),n.d(t,"s",(function(){return Ke})),n.d(t,"t",(function(){return Je})),n.d(t,"u",(function(){return we})),n.d(t,"v",(function(){return ke})),n.d(t,"w",(function(){return Ie})),n.d(t,"x",(function(){return $t})),n.d(t,"y",(function(){return X})),n.d(t,"z",(function(){return an})),n.d(t,"A",(function(){return J})),n.d(t,"D",(function(){return qn})),n.d(t,"E",(function(){return xt})),n.d(t,"F",(function(){return Pt})),n.d(t,"G",(function(){return ze})),n.d(t,"H",(function(){return He})),n.d(t,"L",(function(){return Me})),n.d(t,"M",(function(){return s})),n.d(t,"N",(function(){return Re})),n.d(t,"O",(function(){return Ce})),n.d(t,"P",(function(){return Q})),n.d(t,"Q",(function(){return at})),n.d(t,"R",(function(){return Y}));var r=n("a1e9");n.d(t,"B",(function(){return r["i"]})),n.d(t,"C",(function(){return r["j"]})),n.d(t,"I",(function(){return r["m"]})),n.d(t,"K",(function(){return r["s"]}));var o=n("9ff4");n.d(t,"J",(function(){return o["I"]}));const i=[];function s(e,...t){Object(r["g"])();const n=i.length?i[i.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=a();if(o)d(o,n,11,[e+t.join(""),n&&n.proxy,s.map(({vnode:e})=>`at <${$n(n,e.type)}>`).join("\n"),s]);else{const n=["[Vue warn]: "+e,...t];s.length&&n.push("\n",...c(s)),console.warn(...n)}Object(r["k"])()}function a(){let e=i[i.length-1];if(!e)return[];const t=[];while(e){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const r=e.component&&e.component.parent;e=r&&r.vnode}return t}function c(e){const t=[];return e.forEach((e,n)=>{t.push(...0===n?[]:["\n"],...u(e))}),t}function u({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",r=!!e.component&&null==e.component.parent,o=" at <"+$n(e.component,e.type,r),i=">"+n;return e.props?[o,...l(e.props),i]:[o+i]}function l(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(n=>{t.push(...f(n,e[n]))}),n.length>3&&t.push(" ..."),t}function f(e,t,n){return Object(o["A"])(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):"number"===typeof t||"boolean"===typeof t||null==t?n?t:[`${e}=${t}`]:Object(r["f"])(t)?(t=f(e,Object(r["o"])(t.value),!0),n?t:[e+"=Ref<",t,">"]):Object(o["n"])(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=Object(r["o"])(t),n?t:[e+"=",t])}function d(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){p(i,t,n)}return o}function h(e,t,n,r){if(Object(o["n"])(e)){const i=d(e,t,n,r);return i&&Object(o["v"])(i)&&i.catch(e=>{p(e,t,n)}),i}const i=[];for(let o=0;o<e.length;o++)i.push(h(e[o],t,n,r));return i}function p(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,i))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void d(s,null,10,[e,o,i])}v(e,n,o,r)}function v(e,t,n,r=!0){console.error(e)}let m=!1,g=!1;const b=[];let y=0;const _=[];let O=null,w=0;const j=[];let I=null,E=0;const k=Promise.resolve();let S=null,T=null;function A(e){const t=S||k;return e?t.then(this?e.bind(this):e):t}function C(e){let t=y+1,n=b.length;const r=U(e);while(t<n){const e=t+n>>>1,o=U(b[e]);o<r?t=e+1:n=e}return t}function x(e){if((!b.length||!b.includes(e,m&&e.allowRecurse?y+1:y))&&e!==T){const t=C(e);t>-1?b.splice(t,0,e):b.push(e),R()}}function R(){m||g||(g=!0,S=k.then(V))}function P(e){const t=b.indexOf(e);t>y&&b.splice(t,1)}function L(e,t,n,r){Object(o["m"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),R()}function N(e){L(e,O,_,w)}function M(e){L(e,I,j,E)}function D(e,t=null){if(_.length){for(T=t,O=[...new Set(_)],_.length=0,w=0;w<O.length;w++)O[w]();O=null,w=0,T=null,D(e,t)}}function F(e){if(j.length){const e=[...new Set(j)];if(j.length=0,I)return void I.push(...e);for(I=e,I.sort((e,t)=>U(e)-U(t)),E=0;E<I.length;E++)I[E]();I=null,E=0}}const U=e=>null==e.id?1/0:e.id;function V(e){g=!1,m=!0,D(e),b.sort((e,t)=>U(e)-U(t));try{for(y=0;y<b.length;y++){const e=b[y];e&&d(e,null,14)}}finally{y=0,b.length=0,F(e),m=!1,S=null,(b.length||j.length)&&V(e)}}new Set;new Map;function z(e,t,...n){const r=e.vnode.props||o["b"];let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=r[e]||o["b"];s?i=n.map(e=>e.trim()):t&&(i=n.map(o["K"]))}let c;let u=r[c=Object(o["J"])(t)]||r[c=Object(o["J"])(Object(o["e"])(t))];!u&&s&&(u=r[c=Object(o["J"])(Object(o["k"])(t))]),u&&h(u,e,6,i);const l=r[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else(e.emitted={})[c]=!0;h(l,e,6,i)}}function $(e,t,n=!1){if(!t.deopt&&void 0!==e.__emits)return e.__emits;const r=e.emits;let i={},s=!1;if(!Object(o["n"])(e)){const r=e=>{const n=$(e,t,!0);n&&(s=!0,Object(o["h"])(i,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return r||s?(Object(o["m"])(r)?r.forEach(e=>i[e]=null):Object(o["h"])(i,r),e.__emits=i):e.__emits=null}function B(e,t){return!(!e||!Object(o["u"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(o["j"])(e,t[0].toLowerCase()+t.slice(1))||Object(o["j"])(e,Object(o["k"])(t))||Object(o["j"])(e,t))}let H=0;const G=e=>H+=e;let W=null,q=null;function K(e){const t=W;return W=e,q=e&&e.type.__scopeId||null,t}function J(e){q=e}function X(){q=null}const Y=e=>Q;function Q(e,t=W){if(!t)return e;const n=(...n)=>{H||$t(!0);const r=K(t),o=e(...n);return K(r),H||Bt(),o};return n._c=!0,n}function Z(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:f,renderCache:d,data:h,setupState:v,ctx:m}=e;let g;const b=K(e);try{let e;if(4&n.shapeFlag){const t=i||r;g=nn(f.call(t,t,d,s,v,h,m)),e=u}else{const n=t;0,g=nn(n.length>1?n(s,{attrs:u,slots:c,emit:l}):n(s,null)),e=t.props?u:te(u)}let p=g;if(!1!==t.inheritAttrs&&e){const t=Object.keys(e),{shapeFlag:n}=p;t.length&&(1&n||6&n)&&(a&&t.some(o["s"])&&(e=ne(e,a)),p=Zt(p,e))}n.dirs&&(p.dirs=p.dirs?p.dirs.concat(n.dirs):n.dirs),n.transition&&(p.transition=n.transition),g=p}catch(y){Vt.length=0,p(y,e,1),g=Yt(Ft)}return K(b),g}function ee(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!Wt(r))return;if(r.type!==Ft||"v-if"===r.children){if(t)return;t=r}}return t}const te=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(o["u"])(n))&&((t||(t={}))[n]=e[n]);return t},ne=(e,t)=>{const n={};for(const r in e)Object(o["s"])(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function re(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||oe(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?oe(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!B(u,n))return!0}}return!1}function oe(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!B(n,i))return!0}return!1}function ie({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const se=e=>e.__isSuspense;function ae(e){const{shapeFlag:t,children:n}=e;let r,o;return 32&t?(r=ce(n.default),o=ce(n.fallback)):(r=ce(n),o=nn(null)),{content:r,fallback:o}}function ce(e){if(Object(o["n"])(e)&&(e=e()),Object(o["m"])(e)){const t=ee(e);0,e=t}return nn(e)}function ue(e,t){t&&t.pendingBranch?Object(o["m"])(e)?t.effects.push(...e):t.effects.push(e):M(e)}function le(e,t,n,i=!1){const s={},a={};Object(o["g"])(a,Kt,1),e.propsDefaults=Object.create(null),de(e,t,s,a),n?e.props=i?s:Object(r["l"])(s):e.type.props?e.props=s:e.props=a,e.attrs=a}function fe(e,t,n,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=e,u=Object(r["o"])(s),[l]=e.propsOptions;if(!(i||c>0)||16&c){let r;de(e,t,s,a);for(const i in u)t&&(Object(o["j"])(t,i)||(r=Object(o["k"])(i))!==i&&Object(o["j"])(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=he(l,t||o["b"],i,void 0,e)):delete s[i]);if(a!==u)for(const e in a)t&&Object(o["j"])(t,e)||delete a[e]}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){const i=n[r],c=t[i];if(l)if(Object(o["j"])(a,i))a[i]=c;else{const t=Object(o["e"])(i);s[t]=he(l,u,t,c,e)}else a[i]=c}}Object(r["r"])(e,"set","$attrs")}function de(e,t,n,i){const[s,a]=e.propsOptions;if(t)for(const r in t){const a=t[r];if(Object(o["w"])(r))continue;let c;s&&Object(o["j"])(s,c=Object(o["e"])(r))?n[c]=a:B(e.emitsOptions,r)||(i[r]=a)}if(a){const t=Object(r["o"])(n);for(let r=0;r<a.length;r++){const o=a[r];n[o]=he(s,t,o,t[o],e)}}}function he(e,t,n,r,i){const s=e[n];if(null!=s){const e=Object(o["j"])(s,"default");if(e&&void 0===r){const e=s.default;if(s.type!==Function&&Object(o["n"])(e)){const{propsDefaults:o}=i;n in o?r=o[n]:(Tn(i),r=o[n]=e(t),Tn(null))}else r=e}s[0]&&(Object(o["j"])(t,n)||e?!s[1]||""!==r&&r!==Object(o["k"])(n)||(r=!0):r=!1)}return r}function pe(e,t,n=!1){if(!t.deopt&&e.__props)return e.__props;const r=e.props,i={},s=[];let a=!1;if(!Object(o["n"])(e)){const r=e=>{a=!0;const[n,r]=pe(e,t,!0);Object(o["h"])(i,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!r&&!a)return e.__props=o["a"];if(Object(o["m"])(r))for(let c=0;c<r.length;c++){0;const e=Object(o["e"])(r[c]);ve(e)&&(i[e]=o["b"])}else if(r){0;for(const e in r){const t=Object(o["e"])(e);if(ve(t)){const n=r[e],a=i[t]=Object(o["m"])(n)||Object(o["n"])(n)?{type:n}:n;if(a){const e=be(Boolean,a.type),n=be(String,a.type);a[0]=e>-1,a[1]=n<0||e<n,(e>-1||Object(o["j"])(a,"default"))&&s.push(t)}}}}return e.__props=[i,s]}function ve(e){return"$"!==e[0]}function me(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function ge(e,t){return me(e)===me(t)}function be(e,t){return Object(o["m"])(t)?t.findIndex(t=>ge(t,e)):Object(o["n"])(t)&&ge(t,e)?0:-1}function ye(e,t,n=kn,o=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Object(r["g"])(),Tn(n);const i=h(t,n,e,o);return Tn(null),Object(r["k"])(),i});return o?i.unshift(s):i.push(s),s}}const _e=e=>(t,n=kn)=>!xn&&ye(e,t,n),Oe=_e("bm"),we=_e("m"),je=_e("bu"),Ie=_e("u"),Ee=_e("bum"),ke=_e("um"),Se=_e("rtg"),Te=_e("rtc"),Ae=(e,t=kn)=>{ye("ec",e,t)};function Ce(e,t){return Pe(e,null,t)}const xe={};function Re(e,t,n){return Pe(e,t,n)}function Pe(e,t,{immediate:n,deep:i,flush:s,onTrack:a,onTrigger:c}=o["b"],u=kn){let l,f,p=!1;if(Object(r["f"])(e)?(l=()=>e.value,p=!!e._shallow):Object(r["d"])(e)?(l=()=>e,i=!0):l=Object(o["m"])(e)?()=>e.map(e=>Object(r["f"])(e)?e.value:Object(r["d"])(e)?Ne(e):Object(o["n"])(e)?d(e,u,2,[u&&u.proxy]):void 0):Object(o["n"])(e)?t?()=>d(e,u,2,[u&&u.proxy]):()=>{if(!u||!u.isUnmounted)return f&&f(),h(e,u,3,[v])}:o["d"],t&&i){const e=l;l=()=>Ne(e())}let v=e=>{f=y.options.onStop=()=>{d(e,u,4)}},m=Object(o["m"])(e)?[]:xe;const g=()=>{if(y.active)if(t){const e=y();(i||p||Object(o["i"])(e,m))&&(f&&f(),h(t,u,3,[e,m===xe?void 0:m,v]),m=e)}else y()};let b;g.allowRecurse=!!t,b="sync"===s?g:"post"===s?()=>_t(g,u&&u.suspense):()=>{!u||u.isMounted?N(g):g()};const y=Object(r["b"])(l,{lazy:!0,onTrack:a,onTrigger:c,scheduler:b});return Fn(y,u),t?n?g():m=y():"post"===s?_t(y,u&&u.suspense):y(),()=>{Object(r["n"])(y),u&&Object(o["H"])(u.effects,y)}}function Le(e,t,n){const r=this.proxy,i=Object(o["A"])(e)?()=>r[e]:e.bind(r);return Pe(i,t.bind(r),n,this)}function Ne(e,t=new Set){if(!Object(o["t"])(e)||t.has(e))return e;if(t.add(e),Object(r["f"])(e))Ne(e.value,t);else if(Object(o["m"])(e))for(let n=0;n<e.length;n++)Ne(e[n],t);else if(Object(o["y"])(e)||Object(o["r"])(e))e.forEach(e=>{Ne(e,t)});else for(const n in e)Ne(e[n],t);return e}function Me(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return we(()=>{e.isMounted=!0}),Ee(()=>{e.isUnmounting=!0}),e}const De=[Function,Array],Fe={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},setup(e,{slots:t}){const n=Sn(),o=Me();let i;return()=>{const s=t.default&&Ge(t.default(),!0);if(!s||!s.length)return;const a=Object(r["o"])(e),{mode:c}=a;const u=s[0];if(o.isLeaving)return $e(u);const l=Be(u);if(!l)return $e(u);const f=ze(l,a,o,n);He(l,f);const d=n.subTree,h=d&&Be(d);let p=!1;const{getTransitionKey:v}=l.type;if(v){const e=v();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(h&&h.type!==Ft&&(!qt(l,h)||p)){const e=ze(h,a,o,n);if(He(h,e),"out-in"===c)return o.isLeaving=!0,e.afterLeave=()=>{o.isLeaving=!1,n.update()},$e(u);"in-out"===c&&l.type!==Ft&&(e.delayLeave=(e,t,n)=>{const r=Ve(o,h);r[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=n})}return u}}},Ue=Fe;function Ve(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ze(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:m,onAppear:g,onAfterAppear:b,onAppearCancelled:y}=t,_=String(e.key),O=Ve(n,e),w=(e,t)=>{e&&h(e,r,9,t)},j={mode:i,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!o)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const i=O[_];i&&qt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,i=l;if(!n.isMounted){if(!o)return;t=g||c,r=b||u,i=y||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?i:r,[e]),j.delayedLeave&&j.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(f,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),w(n?v:p,[t]),t._leaveCb=void 0,O[o]===e&&delete O[o])};O[o]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return ze(e,t,n,r)}};return j}function $e(e){if(We(e))return e=Zt(e),e.children=null,e}function Be(e){return We(e)?e.children?e.children[0]:void 0:e}function He(e,t){6&e.shapeFlag&&e.component?He(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ge(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const i=e[o];i.type===Mt?(128&i.patchFlag&&r++,n=n.concat(Ge(i.children,t))):(t||i.type!==Ft)&&n.push(i)}if(r>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}const We=e=>e.type.__isKeepAlive;RegExp,RegExp;function qe(e,t){return Object(o["m"])(e)?e.some(e=>qe(e,t)):Object(o["A"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Ke(e,t){Xe(e,"a",t)}function Je(e,t){Xe(e,"da",t)}function Xe(e,t,n=kn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(ye(t,r,n),n){let e=n.parent;while(e&&e.parent)We(e.parent.vnode)&&Ye(r,t,n,e),e=e.parent}}function Ye(e,t,n,r){const i=ye(t,e,r,!0);ke(()=>{Object(o["H"])(r[t],i)},n)}function Qe(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ze(e){return 128&e.shapeFlag?e.ssContent:e}const et=e=>"_"===e[0]||"$stable"===e,tt=e=>Object(o["m"])(e)?e.map(nn):[nn(e)],nt=(e,t,n)=>Q(e=>tt(t(e)),n),rt=(e,t)=>{const n=e._ctx;for(const r in e){if(et(r))continue;const i=e[r];if(Object(o["n"])(i))t[r]=nt(r,i,n);else if(null!=i){0;const e=tt(i);t[r]=()=>e}}},ot=(e,t)=>{const n=tt(t);e.slots.default=()=>n},it=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=t,Object(o["g"])(t,"_",n)):rt(t,e.slots={})}else e.slots={},t&&ot(e,t);Object(o["g"])(e.slots,Kt,1)},st=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=o["b"];if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(o["h"])(i,t),n||1!==e||delete i._):(s=!t.$stable,rt(t,i)),a=t}else t&&(ot(e,t),a={default:1});if(s)for(const o in i)et(o)||o in a||delete i[o]};function at(e,t){const n=W;if(null===n)return e;const r=n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=o["b"]]=t[s];Object(o["n"])(e)&&(e={mounted:e,updated:e}),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function ct(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);const c=a.dir[r];c&&h(c,n,8,[e.el,a,e,t])}}function ut(){return{app:null,config:{isNativeTag:o["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:o["c"],errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}let lt=0;function ft(e,t){return function(n,r=null){null==r||Object(o["t"])(r)||(r=null);const i=ut(),s=new Set;let a=!1;const c=i.app={_uid:lt++,_component:n,_props:r,_container:null,_context:i,version:Kn,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(o["n"])(e.install)?(s.add(e),e.install(c,...t)):Object(o["n"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||(i.mixins.push(e),(e.props||e.emits)&&(i.deopt=!0)),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(o,s,u){if(!a){const l=Yt(n,r);return l.appContext=i,s&&t?t(l,o):e(l,o,u),a=!0,c._container=o,o.__vue_app__=c,l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}let dt=!1;const ht=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,pt=e=>8===e.nodeType;function vt(e){const{mt:t,p:n,o:{patchProp:r,nextSibling:i,parentNode:s,remove:a,insert:c,createComment:u}}=e,l=(e,t)=>{dt=!1,f(t.firstChild,e,null,null,null),F(),dt&&console.error("Hydration completed but contains mismatches.")},f=(n,r,o,a,c,u=!1)=>{const l=pt(n)&&"["===n.data,g=()=>v(n,r,o,a,c,l),{type:b,ref:y,shapeFlag:_}=r,O=n.nodeType;r.el=n;let w=null;switch(b){case Dt:3!==O?w=g():(n.data!==r.children&&(dt=!0,n.data=r.children),w=i(n));break;case Ft:w=8!==O||l?g():i(n);break;case Ut:if(1===O){w=n;const e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=w.outerHTML),t===r.staticCount-1&&(r.anchor=w),w=i(w);return w}w=g();break;case Mt:w=l?p(n,r,o,a,c,u):g();break;default:if(1&_)w=1!==O||r.type.toLowerCase()!==n.tagName.toLowerCase()?g():d(n,r,o,a,c,u);else if(6&_){r.slotScopeIds=c;const e=s(n),f=()=>{t(r,e,null,o,a,ht(e),u)},d=r.type.__asyncLoader;d?d().then(f):f(),w=l?m(n):i(n)}else 64&_?w=8!==O?g():r.type.hydrate(n,r,o,a,c,u,e,h):128&_&&(w=r.type.hydrate(n,r,o,a,ht(s(n)),c,u,e,f))}return null!=y&&Ot(y,null,a,r),w},d=(e,t,n,i,s,c)=>{c=c||!!t.dynamicChildren;const{props:u,patchFlag:l,shapeFlag:f,dirs:d}=t;if(-1!==l){if(d&&ct(t,null,n,"created"),u)if(!c||16&l||32&l)for(const t in u)!Object(o["w"])(t)&&Object(o["u"])(t)&&r(e,t,null,u[t]);else u.onClick&&r(e,"onClick",null,u.onClick);let p;if((p=u&&u.onVnodeBeforeMount)&&Et(p,n,t),d&&ct(t,null,n,"beforeMount"),((p=u&&u.onVnodeMounted)||d)&&ue(()=>{p&&Et(p,n,t),d&&ct(t,null,n,"mounted")},i),16&f&&(!u||!u.innerHTML&&!u.textContent)){let r=h(e.firstChild,t,e,n,i,s,c);while(r){dt=!0;const e=r;r=r.nextSibling,a(e)}}else 8&f&&e.textContent!==t.children&&(dt=!0,e.textContent=t.children)}return e.nextSibling},h=(e,t,r,o,i,s,a)=>{a=a||!!t.dynamicChildren;const c=t.children,u=c.length;for(let l=0;l<u;l++){const t=a?c[l]:c[l]=nn(c[l]);if(e)e=f(e,t,o,i,s,a);else{if(t.type===Dt&&!t.children)continue;dt=!0,n(null,t,r,null,o,i,ht(r),s)}}return e},p=(e,t,n,r,o,a)=>{const{slotScopeIds:l}=t;l&&(o=o?o.concat(l):l);const f=s(e),d=h(i(e),t,f,n,r,o,a);return d&&pt(d)&&"]"===d.data?i(t.anchor=d):(dt=!0,c(t.anchor=u("]"),f,d),d)},v=(e,t,r,o,c,u)=>{if(dt=!0,t.el=null,u){const t=m(e);while(1){const n=i(e);if(!n||n===t)break;a(n)}}const l=i(e),f=s(e);return a(e),n(null,t,f,l,r,o,ht(f),c),l},m=e=>{let t=0;while(e)if(e=i(e),e&&pt(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return i(e);t--}return e};return[l,f]}function mt(){}function gt(e){return Object(o["n"])(e)?{setup:e,name:e.name}:e}const bt=e=>!!e.type.__asyncLoader;const yt={scheduler:x,allowRecurse:!0};const _t=ue,Ot=(e,t,n,i)=>{if(Object(o["m"])(e))return void e.forEach((e,r)=>Ot(e,t&&(Object(o["m"])(t)?t[r]:t),n,i));let s;if(i){if(bt(i))return;s=4&i.shapeFlag?i.component.exposed||i.component.proxy:i.el}else s=null;const{i:a,r:c}=e;const u=t&&t.r,l=a.refs===o["b"]?a.refs={}:a.refs,f=a.setupState;if(null!=u&&u!==c&&(Object(o["A"])(u)?(l[u]=null,Object(o["j"])(f,u)&&(f[u]=null)):Object(r["f"])(u)&&(u.value=null)),Object(o["A"])(c)){const e=()=>{l[c]=s,Object(o["j"])(f,c)&&(f[c]=s)};s?(e.id=-1,_t(e,n)):e()}else if(Object(r["f"])(c)){const e=()=>{c.value=s};s?(e.id=-1,_t(e,n)):e()}else Object(o["n"])(c)&&d(c,a,12,[s,l])};function wt(e){return It(e)}function jt(e){return It(e,vt)}function It(e,t){mt();const{insert:n,remove:i,patchProp:s,forcePatchProp:a,createElement:c,createText:u,createComment:l,setText:f,setElementText:d,parentNode:h,nextSibling:p,setScopeId:v=o["d"],cloneNode:m,insertStaticContent:g}=e,b=(e,t,n,r=null,o=null,i=null,s=!1,a=null,c=!1)=>{e&&!qt(e,t)&&(r=J(e),H(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:f}=t;switch(u){case Dt:y(e,t,n,r);break;case Ft:_(e,t,n,r);break;case Ut:null==e&&O(t,n,r,s);break;case Mt:x(e,t,n,r,o,i,s,a,c);break;default:1&f?I(e,t,n,r,o,i,s,a,c):6&f?R(e,t,n,r,o,i,s,a,c):(64&f||128&f)&&u.process(e,t,n,r,o,i,s,a,c,Y)}null!=l&&o&&Ot(l,e&&e.ref,i,t)},y=(e,t,r,o)=>{if(null==e)n(t.el=u(t.children),r,o);else{const n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},_=(e,t,r,o)=>{null==e?n(t.el=l(t.children||""),r,o):t.el=e.el},O=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r)},w=({el:e,anchor:t},r,o)=>{let i;while(e&&e!==t)i=p(e),n(e,r,o),e=i;n(t,r,o)},j=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),i(e),e=n;i(t)},I=(e,t,n,r,o,i,s,a,c)=>{s=s||"svg"===t.type,null==e?E(t,n,r,o,i,s,a,c):T(e,t,o,i,s,a,c)},E=(e,t,r,i,a,u,l,f)=>{let h,p;const{type:v,props:g,shapeFlag:b,transition:y,patchFlag:_,dirs:O}=e;if(e.el&&void 0!==m&&-1===_)h=e.el=m(e.el);else{if(h=e.el=c(e.type,u,g&&g.is,g),8&b?d(h,e.children):16&b&&S(e.children,h,null,i,a,u&&"foreignObject"!==v,l,f||!!e.dynamicChildren),O&&ct(e,null,i,"created"),g){for(const t in g)Object(o["w"])(t)||s(h,t,null,g[t],u,e.children,i,a,K);(p=g.onVnodeBeforeMount)&&Et(p,i,e)}k(h,e,e.scopeId,l,i)}O&&ct(e,null,i,"beforeMount");const w=(!a||a&&!a.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(h),n(h,t,r),((p=g&&g.onVnodeMounted)||w||O)&&_t(()=>{p&&Et(p,i,e),w&&y.enter(h),O&&ct(e,null,i,"mounted")},a)},k=(e,t,n,r,o)=>{if(n&&v(e,n),r)for(let i=0;i<r.length;i++)v(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;k(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},S=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=s?rn(e[u]):nn(e[u]);b(null,c,t,n,r,o,i,s,a)}},T=(e,t,n,r,i,c,u)=>{const l=t.el=e.el;let{patchFlag:f,dynamicChildren:h,dirs:p}=t;f|=16&e.patchFlag;const v=e.props||o["b"],m=t.props||o["b"];let g;if((g=m.onVnodeBeforeUpdate)&&Et(g,n,t,e),p&&ct(t,e,n,"beforeUpdate"),f>0){if(16&f)C(l,t,v,m,n,r,i);else if(2&f&&v.class!==m.class&&s(l,"class",null,m.class,i),4&f&&s(l,"style",v.style,m.style,i),8&f){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const c=o[t],u=v[c],f=m[c];(f!==u||a&&a(l,c))&&s(l,c,u,f,i,e.children,n,r,K)}}1&f&&e.children!==t.children&&d(l,t.children)}else u||null!=h||C(l,t,v,m,n,r,i);const b=i&&"foreignObject"!==t.type;h?A(e.dynamicChildren,h,l,n,r,b,c):u||V(e,t,l,null,n,r,b,c,!1),((g=m.onVnodeUpdated)||p)&&_t(()=>{g&&Et(g,n,t,e),p&&ct(t,e,n,"updated")},r)},A=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.type===Mt||!qt(c,u)||6&c.shapeFlag||64&c.shapeFlag?h(c.el):n;b(c,u,l,null,r,o,i,s,!0)}},C=(e,t,n,r,i,c,u)=>{if(n!==r){for(const l in r){if(Object(o["w"])(l))continue;const f=r[l],d=n[l];(f!==d||a&&a(e,l))&&s(e,l,d,f,u,t.children,i,c,K)}if(n!==o["b"])for(const a in n)Object(o["w"])(a)||a in r||s(e,a,n[a],null,u,t.children,i,c,K)}},x=(e,t,r,o,i,s,a,c,l)=>{const f=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:v}=t;h>0&&(l=!0),v&&(c=c?c.concat(v):v),null==e?(n(f,r,o),n(d,r,o),S(t.children,r,d,i,s,a,c,l)):h>0&&64&h&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,r,i,s,a,c),(null!=t.key||i&&t===i.subTree)&&kt(e,t,!0)):V(e,t,r,d,i,s,a,c,l)},R=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):L(t,n,r,o,i,s,c):N(e,t,c)},L=(e,t,n,r,o,i,s)=>{const a=e.component=En(e,r,o);if(We(e)&&(a.ctx.renderer=Y),Rn(a),a.asyncDep){if(o&&o.registerDep(a,M),!e.el){const e=a.subTree=Yt(Ft);_(null,e,t,n)}}else M(a,e,t,n,o,i,s)},N=(e,t,n)=>{const r=t.component=e.component;if(re(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,P(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,s,a,c)=>{e.update=Object(r["b"])((function(){if(e.isMounted){let t,{next:n,bu:r,u:i,parent:u,vnode:l}=e,f=n;0,n?(n.el=l.el,U(e,n,c)):n=l,r&&Object(o["l"])(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Et(t,u,n,l);const d=Z(e);0;const p=e.subTree;e.subTree=d,b(p,d,h(p.el),J(p),e,s,a),n.el=d.el,null===f&&ie(e,d.el),i&&_t(i,s),(t=n.props&&n.props.onVnodeUpdated)&&_t(()=>{Et(t,u,n,l)},s)}else{let r;const{el:c,props:u}=t,{bm:l,m:f,parent:d}=e;l&&Object(o["l"])(l),(r=u&&u.onVnodeBeforeMount)&&Et(r,d,t);const h=e.subTree=Z(e);if(c&&ee?ee(t.el,h,e,s,null):(b(null,h,n,i,e,s,a),t.el=h.el),f&&_t(f,s),r=u&&u.onVnodeMounted){const e=t;_t(()=>{Et(r,d,e)},s)}const{a:p}=e;p&&256&t.shapeFlag&&_t(p,s),e.isMounted=!0,t=n=i=null}}),yt)},U=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,fe(e,t.props,o,n),st(e,t.children,n),Object(r["g"])(),D(void 0,e.update),Object(r["k"])()},V=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void $(u,f,n,r,o,i,s,a,c);if(256&h)return void z(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&K(u,o,i),f!==u&&d(n,f)):16&l?16&p?$(u,f,n,r,o,i,s,a,c):K(u,o,i,!0):(8&l&&d(n,""),16&p&&S(f,n,r,o,i,s,a,c))},z=(e,t,n,r,i,s,a,c,u)=>{e=e||o["a"],t=t||o["a"];const l=e.length,f=t.length,d=Math.min(l,f);let h;for(h=0;h<d;h++){const r=t[h]=u?rn(t[h]):nn(t[h]);b(e[h],r,n,null,i,s,a,c,u)}l>f?K(e,i,s,!0,!1,d):S(t,n,r,i,s,a,c,u,d)},$=(e,t,n,r,i,s,a,c,u)=>{let l=0;const f=t.length;let d=e.length-1,h=f-1;while(l<=d&&l<=h){const r=e[l],o=t[l]=u?rn(t[l]):nn(t[l]);if(!qt(r,o))break;b(r,o,n,null,i,s,a,c,u),l++}while(l<=d&&l<=h){const r=e[d],o=t[h]=u?rn(t[h]):nn(t[h]);if(!qt(r,o))break;b(r,o,n,null,i,s,a,c,u),d--,h--}if(l>d){if(l<=h){const e=h+1,o=e<f?t[e].el:r;while(l<=h)b(null,t[l]=u?rn(t[l]):nn(t[l]),n,o,i,s,a,c,u),l++}}else if(l>h)while(l<=d)H(e[l],i,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=h;l++){const e=t[l]=u?rn(t[l]):nn(t[l]);null!=e.key&&m.set(e.key,l)}let g,y=0;const _=h-v+1;let O=!1,w=0;const j=new Array(_);for(l=0;l<_;l++)j[l]=0;for(l=p;l<=d;l++){const r=e[l];if(y>=_){H(r,i,s,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(g=v;g<=h;g++)if(0===j[g-v]&&qt(r,t[g])){o=g;break}void 0===o?H(r,i,s,!0):(j[o-v]=l+1,o>=w?w=o:O=!0,b(r,t[o],n,null,i,s,a,c,u),y++)}const I=O?St(j):o["a"];for(g=I.length-1,l=_-1;l>=0;l--){const e=v+l,o=t[e],d=e+1<f?t[e+1].el:r;0===j[l]?b(null,o,n,d,i,s,a,c,u):O&&(g<0||l!==I[g]?B(o,n,d,2):g--)}}},B=(e,t,r,o,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,r,o);if(128&l)return void e.suspense.move(t,r,o);if(64&l)return void a.move(e,t,r,Y);if(a===Mt){n(s,t,r);for(let e=0;e<u.length;e++)B(u[e],t,r,o);return void n(e.anchor,t,r)}if(a===Ut)return void w(e,t,r);const f=2!==o&&1&l&&c;if(f)if(0===o)c.beforeEnter(s),n(s,t,r),_t(()=>c.enter(s),i);else{const{leave:e,delayLeave:o,afterLeave:i}=c,a=()=>n(s,t,r),u=()=>{e(s,()=>{a(),i&&i()})};o?o(s,a,u):u()}else n(s,t,r)},H=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:d}=e;if(null!=a&&Ot(a,null,n,null),256&l)return void t.ctx.deactivate(e);const h=1&l&&d;let p;if((p=s&&s.onVnodeBeforeUnmount)&&Et(p,t,e),6&l)q(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&ct(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,o,Y,r):u&&(i!==Mt||f>0&&64&f)?K(u,t,n,!1,!0):(i===Mt&&(128&f||256&f)||!o&&16&l)&&K(c,t,n),r&&G(e)}((p=s&&s.onVnodeUnmounted)||h)&&_t(()=>{p&&Et(p,t,e),h&&ct(e,null,t,"unmounted")},n)},G=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===Mt)return void W(n,r);if(t===Ut)return void j(e);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,i=()=>t(n,s);r?r(e.el,s,i):i()}else s()},W=(e,t)=>{let n;while(e!==t)n=p(e),i(e),e=n;i(t)},q=(e,t,n)=>{const{bum:i,effects:s,update:a,subTree:c,um:u}=e;if(i&&Object(o["l"])(i),s)for(let o=0;o<s.length;o++)Object(r["n"])(s[o]);a&&(Object(r["n"])(a),H(c,e,t,n)),u&&_t(u,t),_t(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},K=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)H(e[s],t,n,r,o)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),X=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):b(t._vnode||null,e,t,null,null,null,n),F(),t._vnode=e},Y={p:b,um:H,m:B,r:G,mt:L,mc:S,pc:V,pbc:A,n:J,o:e};let Q,ee;return t&&([Q,ee]=t(Y)),{render:X,hydrate:Q,createApp:ft(X,Q)}}function Et(e,t,n,r=null){h(e,t,7,[n,r])}function kt(e,t,n=!1){const r=e.children,i=t.children;if(Object(o["m"])(r)&&Object(o["m"])(i))for(let o=0;o<r.length;o++){const e=r[o];let t=i[o];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[o]=rn(i[o]),t.el=e.el),n||kt(e,t))}}function St(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=(i+s)/2|0,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const Tt=e=>e.__isTeleport;const At="components",Ct="directives";function xt(e,t){return Lt(At,e,!0,t)||e}const Rt=Symbol();function Pt(e){return Lt(Ct,e)}function Lt(e,t,n=!0,r=!1){const i=W||kn;if(i){const n=i.type;if(e===At){const e=zn(n);if(e&&(e===t||e===Object(o["e"])(t)||e===Object(o["f"])(Object(o["e"])(t))))return n}const s=Nt(i[e]||n[e],t)||Nt(i.appContext[e],t);return!s&&r?n:s}}function Nt(e,t){return e&&(e[t]||e[Object(o["e"])(t)]||e[Object(o["f"])(Object(o["e"])(t))])}const Mt=Symbol(void 0),Dt=Symbol(void 0),Ft=Symbol(void 0),Ut=Symbol(void 0),Vt=[];let zt=null;function $t(e=!1){Vt.push(zt=e?null:[])}function Bt(){Vt.pop(),zt=Vt[Vt.length-1]||null}let Ht=1;function Gt(e,t,n,r,i){const s=Yt(e,t,n,r,i,!0);return s.dynamicChildren=zt||o["a"],Bt(),Ht>0&&zt&&zt.push(s),s}function Wt(e){return!!e&&!0===e.__v_isVNode}function qt(e,t){return e.type===t.type&&e.key===t.key}const Kt="__vInternal",Jt=({key:e})=>null!=e?e:null,Xt=({ref:e})=>null!=e?Object(o["A"])(e)||Object(r["f"])(e)||Object(o["n"])(e)?{i:W,r:e}:e:null,Yt=Qt;function Qt(e,t=null,n=null,i=0,s=null,a=!1){if(e&&e!==Rt||(e=Ft),Wt(e)){const r=Zt(e,t,!0);return n&&on(r,n),r}if(Bn(e)&&(e=e.__vccOpts),t){(Object(r["c"])(t)||Kt in t)&&(t=Object(o["h"])({},t));let{class:e,style:n}=t;e&&!Object(o["A"])(e)&&(t.class=Object(o["F"])(e)),Object(o["t"])(n)&&(Object(r["c"])(n)&&!Object(o["m"])(n)&&(n=Object(o["h"])({},n)),t.style=Object(o["G"])(n))}const c=Object(o["A"])(e)?1:se(e)?128:Tt(e)?64:Object(o["t"])(e)?4:Object(o["n"])(e)?2:0;const u={__v_isVNode:!0,["__v_skip"]:!0,type:e,props:t,key:t&&Jt(t),ref:t&&Xt(t),scopeId:q,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};if(on(u,n),128&c){const{content:e,fallback:t}=ae(u);u.ssContent=e,u.ssFallback=t}return Ht>0&&!a&&zt&&(i>0||6&c)&&32!==i&&zt.push(u),u}function Zt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,c=t?sn(r||{},t):r;return{__v_isVNode:!0,["__v_skip"]:!0,type:e.type,props:c,key:c&&Jt(c),ref:t&&t.ref?n&&i?Object(o["m"])(i)?i.concat(Xt(t)):[i,Xt(t)]:Xt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),el:e.el,anchor:e.anchor}}function en(e=" ",t=0){return Yt(Dt,null,e,t)}function tn(e="",t=!1){return t?($t(),Gt(Ft,null,e)):Yt(Ft,null,e)}function nn(e){return null==e||"boolean"===typeof e?Yt(Ft):Object(o["m"])(e)?Yt(Mt,null,e):"object"===typeof e?null===e.el?e:Zt(e):Yt(Dt,null,String(e))}function rn(e){return null===e.el?e:Zt(e)}function on(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(Object(o["m"])(t))n=16;else if("object"===typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&G(1),on(e,n()),n._c&&G(-1)))}{n=32;const r=t._;r||Kt in t?3===r&&W&&(1024&W.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=W}}else Object(o["n"])(t)?(t={default:t,_ctx:W},n=32):(t=String(t),64&r?(n=16,t=[en(t)]):n=8);e.children=t,e.shapeFlag|=n}function sn(...e){const t=Object(o["h"])({},e[0]);for(let n=1;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=Object(o["F"])([t.class,r.class]));else if("style"===e)t.style=Object(o["G"])([t.style,r.style]);else if(Object(o["u"])(e)){const n=t[e],o=r[e];n!==o&&(t[e]=n?[].concat(n,r[e]):o)}else""!==e&&(t[e]=r[e])}return t}function an(e,t){if(kn){let n=kn.provides;const r=kn.parent&&kn.parent.provides;r===n&&(n=kn.provides=Object.create(r)),n[e]=t}else 0}function cn(e,t,n=!1){const r=kn||W;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Object(o["n"])(t)?t():t}else 0}let un=!0;function ln(e,t,n=[],i=[],s=[],a=!1){const{mixins:c,extends:u,data:l,computed:f,methods:d,watch:h,provide:p,inject:v,components:m,directives:g,beforeMount:b,mounted:y,beforeUpdate:_,updated:O,activated:w,deactivated:j,beforeDestroy:I,beforeUnmount:E,destroyed:k,unmounted:S,render:T,renderTracked:A,renderTriggered:C,errorCaptured:x,expose:R}=t,P=e.proxy,L=e.ctx,N=e.appContext.mixins;a&&T&&e.render===o["d"]&&(e.render=T),a||(un=!1,fn("beforeCreate","bc",t,e,N),un=!0,hn(e,N,n,i,s)),u&&ln(e,u,n,i,s,!0),c&&hn(e,c,n,i,s);if(v)if(Object(o["m"])(v))for(let r=0;r<v.length;r++){const e=v[r];L[e]=cn(e)}else for(const r in v){const e=v[r];Object(o["t"])(e)?L[r]=cn(e.from||r,e.default,!0):L[r]=cn(e)}if(d)for(const r in d){const e=d[r];Object(o["n"])(e)&&(L[r]=e.bind(P))}if(a?l&&n.push(l):(n.length&&n.forEach(t=>pn(e,t,P)),l&&pn(e,l,P)),f)for(const r in f){const e=f[r],t=Object(o["n"])(e)?e.bind(P,P):Object(o["n"])(e.get)?e.get.bind(P,P):o["d"];0;const n=!Object(o["n"])(e)&&Object(o["n"])(e.set)?e.set.bind(P):o["d"],i=Hn({get:t,set:n});Object.defineProperty(L,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(h&&i.push(h),!a&&i.length&&i.forEach(e=>{for(const t in e)vn(e[t],L,P,t)}),p&&s.push(p),!a&&s.length&&s.forEach(e=>{const t=Object(o["n"])(e)?e.call(P):e;Reflect.ownKeys(t).forEach(e=>{an(e,t[e])})}),a&&(m&&Object(o["h"])(e.components||(e.components=Object(o["h"])({},e.type.components)),m),g&&Object(o["h"])(e.directives||(e.directives=Object(o["h"])({},e.type.directives)),g)),a||fn("created","c",t,e,N),b&&Oe(b.bind(P)),y&&we(y.bind(P)),_&&je(_.bind(P)),O&&Ie(O.bind(P)),w&&Ke(w.bind(P)),j&&Je(j.bind(P)),x&&Ae(x.bind(P)),A&&Te(A.bind(P)),C&&Se(C.bind(P)),E&&Ee(E.bind(P)),S&&ke(S.bind(P)),Object(o["m"])(R))if(a)0;else if(R.length){const t=e.exposed||(e.exposed=Object(r["h"])({}));R.forEach(e=>{t[e]=Object(r["p"])(P,e)})}else e.exposed||(e.exposed=o["b"])}function fn(e,t,n,r,o){for(let i=0;i<o.length;i++)dn(e,t,o[i],r);dn(e,t,n,r)}function dn(e,t,n,r){const{extends:o,mixins:i}=n,s=n[e];if(o&&dn(e,t,o,r),i)for(let a=0;a<i.length;a++)dn(e,t,i[a],r);s&&h(s.bind(r.proxy),r,t)}function hn(e,t,n,r,o){for(let i=0;i<t.length;i++)ln(e,t[i],n,r,o,!0)}function pn(e,t,n){un=!1;const i=t.call(n,n);un=!0,Object(o["t"])(i)&&(e.data===o["b"]?e.data=Object(r["i"])(i):Object(o["h"])(e.data,i))}function vn(e,t,n,r){const i=r.includes(".")?mn(n,r):()=>n[r];if(Object(o["A"])(e)){const n=t[e];Object(o["n"])(n)&&Re(i,n)}else if(Object(o["n"])(e))Re(i,e.bind(n));else if(Object(o["t"])(e))if(Object(o["m"])(e))e.forEach(e=>vn(e,t,n,r));else{const r=Object(o["n"])(e.handler)?e.handler.bind(n):t[e.handler];Object(o["n"])(r)&&Re(i,r,e)}else 0}function mn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function gn(e){const t=e.type,{__merged:n,mixins:r,extends:o}=t;if(n)return n;const i=e.appContext.mixins;if(!i.length&&!r&&!o)return t;const s={};return i.forEach(t=>bn(s,t,e)),bn(s,t,e),t.__merged=s}function bn(e,t,n){const r=n.appContext.config.optionMergeStrategies,{mixins:i,extends:s}=t;s&&bn(e,s,n),i&&i.forEach(t=>bn(e,t,n));for(const a in t)r&&Object(o["j"])(r,a)?e[a]=r[a](e[a],t[a],n.proxy,a):e[a]=t[a]}const yn=e=>e?An(e)?e.exposed?e.exposed:e.proxy:yn(e.parent):null,_n=Object(o["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yn(e.parent),$root:e=>yn(e.root),$emit:e=>e.emit,$options:e=>gn(e),$forceUpdate:e=>()=>x(e.update),$nextTick:e=>A.bind(e.proxy),$watch:e=>Le.bind(e)}),On={get({_:e},t){const{ctx:n,setupState:i,data:s,props:a,accessCache:c,type:u,appContext:l}=e;if("__v_skip"===t)return!0;let f;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 0:return i[t];case 1:return s[t];case 3:return n[t];case 2:return a[t]}else{if(i!==o["b"]&&Object(o["j"])(i,t))return c[t]=0,i[t];if(s!==o["b"]&&Object(o["j"])(s,t))return c[t]=1,s[t];if((f=e.propsOptions[0])&&Object(o["j"])(f,t))return c[t]=2,a[t];if(n!==o["b"]&&Object(o["j"])(n,t))return c[t]=3,n[t];un&&(c[t]=4)}}const d=_n[t];let h,p;return d?("$attrs"===t&&Object(r["q"])(e,"get",t),d(e)):(h=u.__cssModules)&&(h=h[t])?h:n!==o["b"]&&Object(o["j"])(n,t)?(c[t]=3,n[t]):(p=l.config.globalProperties,Object(o["j"])(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==o["b"]&&Object(o["j"])(i,t))i[t]=n;else if(r!==o["b"]&&Object(o["j"])(r,t))r[t]=n;else if(Object(o["j"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return void 0!==n[a]||e!==o["b"]&&Object(o["j"])(e,a)||t!==o["b"]&&Object(o["j"])(t,a)||(c=s[0])&&Object(o["j"])(c,a)||Object(o["j"])(r,a)||Object(o["j"])(_n,a)||Object(o["j"])(i.config.globalProperties,a)}};const wn=Object(o["h"])({},On,{get(e,t){if(t!==Symbol.unscopables)return On.get(e,t,e)},has(e,t){const n="_"!==t[0]&&!Object(o["o"])(t);return n}});const jn=ut();let In=0;function En(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||jn,s={uid:In++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pe(r,i),emitsOptions:$(r,i),emit:null,emitted:null,propsDefaults:o["b"],ctx:o["b"],data:o["b"],props:o["b"],attrs:o["b"],slots:o["b"],refs:o["b"],setupState:o["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=z.bind(null,s),s}let kn=null;const Sn=()=>kn||W,Tn=e=>{kn=e};function An(e){return 4&e.vnode.shapeFlag}let Cn,xn=!1;function Rn(e,t=!1){xn=t;const{props:n,children:r}=e.vnode,o=An(e);le(e,n,o,t),it(e,r);const i=o?Pn(e,t):void 0;return xn=!1,i}function Pn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,On);const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Dn(e):null;kn=e,Object(r["g"])();const s=d(i,e,0,[e.props,n]);if(Object(r["k"])(),kn=null,Object(o["v"])(s)){if(t)return s.then(n=>{Ln(e,n,t)}).catch(t=>{p(t,e,0)});e.asyncDep=s}else Ln(e,s,t)}else Mn(e,t)}function Ln(e,t,n){Object(o["n"])(t)?e.render=t:Object(o["t"])(t)&&(e.setupState=Object(r["h"])(t)),Mn(e,n)}const Nn=()=>!Cn;function Mn(e,t){const n=e.type;e.render||(Cn&&n.template&&!n.render&&(n.render=Cn(n.template,{isCustomElement:e.appContext.config.isCustomElement,delimiters:n.delimiters})),e.render=n.render||o["d"],e.render._rc&&(e.withProxy=new Proxy(e.ctx,wn))),kn=e,Object(r["g"])(),ln(e,n),Object(r["k"])(),kn=null}function Dn(e){const t=t=>{e.exposed=Object(r["h"])(t)};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}function Fn(e,t=kn){t&&(t.effects||(t.effects=[])).push(e)}const Un=/(?:^|[-_])(\w)/g,Vn=e=>e.replace(Un,e=>e.toUpperCase()).replace(/[-_]/g,"");function zn(e){return Object(o["n"])(e)&&e.displayName||e.name}function $n(e,t,n=!1){let r=zn(t);if(!r&&t.__file){const e=t.__file.match(/([^/\\]+)\.\w+$/);e&&(r=e[1])}if(!r&&e&&e.parent){const n=e=>{for(const n in e)if(e[n]===t)return n};r=n(e.components||e.parent.type.components)||n(e.appContext.components)}return r?Vn(r):n?"App":"Anonymous"}function Bn(e){return Object(o["n"])(e)&&"__vccOpts"in e}function Hn(e){const t=Object(r["a"])(e);return Fn(t.effect),t}function Gn(e,t,n){const r=arguments.length;return 2===r?Object(o["t"])(t)&&!Object(o["m"])(t)?Wt(t)?Yt(e,null,[t]):Yt(e,t):Yt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Wt(n)&&(n=[n]),Yt(e,t,n))}Symbol("");function Wn(){return void 0}function qn(e,t){let n;if(Object(o["m"])(e)||Object(o["A"])(e)){n=new Array(e.length);for(let r=0,o=e.length;r<o;r++)n[r]=t(e[r],r)}else if("number"===typeof e){0,n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(Object(o["t"])(e))if(e[Symbol.iterator])n=Array.from(e,t);else{const r=Object.keys(e);n=new Array(r.length);for(let o=0,i=r.length;o<i;o++){const i=r[o];n[o]=t(e[i],i,o)}}else n=[];return n}const Kn="3.0.11"},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"605d":function(e,t,n){var r=n("c6b6"),o=n("da84");e.exports="process"==r(o.process)},"60da":function(e,t,n){"use strict";var r=n("83ab"),o=n("d039"),i=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,f=Object.defineProperty;e.exports=!l||o((function(){if(r&&1!==l({b:1},l(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||i(l({},t)).join("")!=o}))?function(e,t){var n=c(e),o=arguments.length,l=1,f=s.f,d=a.f;while(o>l){var h,p=u(arguments[l++]),v=f?i(p).concat(f(p)):i(p),m=v.length,g=0;while(m>g)h=v[g++],r&&!d.call(p,h)||(n[h]=p[h])}return n}:l},6547:function(e,t,n){var r=n("a691"),o=n("1d80"),i=function(e){return function(t,n){var i,s,a=String(o(t)),c=r(n),u=a.length;return c<0||c>=u?e?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):i:e?a.slice(c,c+2):s-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"69f3":function(e,t,n){var r,o,i,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),f=n("c6cd"),d=n("f772"),h=n("d012"),p="Object already initialized",v=a.WeakMap,m=function(e){return i(e)?o(e):r(e,{})},g=function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(s){var b=f.state||(f.state=new v),y=b.get,_=b.has,O=b.set;r=function(e,t){if(_.call(b,e))throw new TypeError(p);return t.facade=e,O.call(b,e,t),t},o=function(e){return y.call(b,e)||{}},i=function(e){return _.call(b,e)}}else{var w=d("state");h[w]=!0,r=function(e,t){if(l(e,w))throw new TypeError(p);return t.facade=e,u(e,w,t),t},o=function(e){return l(e,w)?e[w]:{}},i=function(e){return l(e,w)}}e.exports={set:r,get:o,has:i,enforce:m,getterFor:g}},"6a7c":function(e,t,n){"use strict";n.d(t,"a",(function(){return er})),n.d(t,"b",(function(){return it})),n.d(t,"c",(function(){return ot})),n.d(t,"d",(function(){return st}));var r=n("5606"),o=n("a8e9"),i=n("abfd");function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var a=n("ffa6");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=new o["b"]("auth","Firebase",c()),l=new i["b"]("@firebase/auth-exp");function f(e,...t){l.logLevel<=i["a"].ERROR&&l.error(`Auth (${r["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,...t){throw p(e,...t)}function h(e,...t){return p(e,...t)}function p(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw p(t,...n)}function m(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function g(e,t){e||m(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function y(e){g(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(g(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){const n=Object(r["b"])(e,"auth-exp");if(n.isInitialized()){const e=n.getImmediate();d(e,"already-initialized")}const o=n.initialize({options:t});return o}function O(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(y);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function j(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(j()||Object(o["i"])()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.shortDelay=e,this.longDelay=t,g(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(o["l"])()||Object(o["m"])()}get(){return E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){g(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void m("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void m("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void m("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded"},x=new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,r,i={}){return L(e,i,()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=Object(o["n"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=new(A.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),A.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function L(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},C),t);try{const t=new D(e),o=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw F(e,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const t=o.ok?i.errorMessage:i.error.message,n=t.split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw F(e,"email-already-in-use",i);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");d(e,s)}}catch(i){if(i instanceof o["c"])throw i;d(e,"network-request-failed")}}async function N(e,t,n,r,o={}){const i=await P(e,t,n,r,o);return"mfaPendingCredential"in i&&d(e,"multi-factor-auth-required",{serverResponse:i}),i}function M(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?T(e.config,o):`${e.config.apiScheme}://${o}`}class D{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(h(this.auth,"timeout")),x.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=h(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t=!1){const n=Object(o["g"])(e),r=await n.getIdToken(t),i=H(r);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:z(B(i.auth_time)),issuedAtTime:z(B(i.iat)),expirationTime:z(B(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function H(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(o["d"])(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(i){return f("Caught error parsing JWT payload as JSON",i),null}}function G(e){const t=H(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof o["c"]&&q(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function q({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),o=await W(e,V(n,{idToken:r}));v(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?Z(i.providerUserInfo):[],a=Q(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new J(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function Y(e){const t=Object(o["g"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Q(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function Z(e){return e.map(e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t){const n=await L(e,{},()=>{const n=Object(o["n"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=M(e,r,"/v1/token","key="+i);return A.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ee(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new te;return n&&(v("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(v("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new te,this.toJSON())}_performRefresh(){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class re{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new K(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.metadata=new J(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await W(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $(this,e)}reload(){return Y(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await W(this,U(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:O,providerData:w,stsTokenManager:j}=t;v(y&&j,e,"internal-error");const I=te.fromJSON(this.name,j);v("string"===typeof y,e,"internal-error"),ne(l,e.name),ne(f,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof O,e,"internal-error"),ne(d,e.name),ne(h,e.name),ne(p,e.name),ne(m,e.name),ne(g,e.name),ne(b,e.name);const E=new re({uid:y,auth:e,email:f,emailVerified:_,displayName:l,isAnonymous:O,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:b});return w&&Array.isArray(w)&&(E.providerData=w.map(e=>Object.assign({},e))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new te;r.updateFromServerResponse(t);const o=new re({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ie=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t,n){return`firebase:${e}:${t}:${n}`}class ae{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=se(this.userKey,r.apiKey,o),this.fullPersistenceKey=se("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ae(y(ie),e,n);let r=y(ie);for(const a of t)if(await a._isAvailable()){r=a;break}let o=null;const i=se(n,e.config.apiKey,e.name);for(const a of t)try{const t=await a._get(i);if(t){const n=re._fromJSON(e,t);a!==r&&(o=n);break}}catch(s){}return o&&await r._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(i)}catch(s){}})),new ae(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(de(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pe(t))return"Blackberry";if(ve(t))return"Webos";if(le(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(he(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ue(e=Object(o["h"])()){return/firefox\//i.test(e)}function le(e=Object(o["h"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(o["h"])()){return/crios\//i.test(e)}function de(e=Object(o["h"])()){return/iemobile/i.test(e)}function he(e=Object(o["h"])()){return/android/i.test(e)}function pe(e=Object(o["h"])()){return/blackberry/i.test(e)}function ve(e=Object(o["h"])()){return/webos/i.test(e)}function me(e=Object(o["h"])()){return/iphone|ipad|ipod/i.test(e)}function ge(e=Object(o["h"])()){var t;return me(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return Object(o["k"])()&&10===document.documentMode}function ye(e=Object(o["h"])()){return me(e)||he(e)||ve(e)||pe(e)||/windows phone/i.test(e)||de(e)}function _e(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t=[]){let n;switch(e){case"Browser":n=ce(Object(o["h"])());break;case"Worker":n=`${ce(Object(o["h"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["a"]}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ie(this),this.idTokenSubscription=new Ie(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.redirectInitializerError=null,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=y(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await ae.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise.then(()=>{if(this.redirectInitializerError)throw this.redirectInitializerError})}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);r&&r!==o||!(null===i||void 0===i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){this.redirectInitializerError=n,await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(o["g"])(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(y(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&y(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ae.create(this,[y(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then(()=>o(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function je(e){return Object(o["g"])(e)}class Ie{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(o["e"])(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return m("not implemented")}_getIdTokenResponse(e){return m("not implemented")}_linkToIdToken(e,t){return m("not implemented")}_getReauthenticationResolver(e){return m("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Te(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}async function Ae(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Ee{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ce(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ce(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Se(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Te(e,{email:this._email,oobCode:this._password});default:d(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ke(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{idToken:t,email:this._email,oobCode:this._password});default:d(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",R(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="http://localhost";class Pe extends Ee{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):d("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new Pe(n,r);return Object.assign(i,o),i}_getIdTokenResponse(e){const t=this.buildRequest();return xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xe(e,t)}buildRequest(){const e={requestUri:Re,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(o["n"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",R(e,t))}async function Ne(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t))}async function Me(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,t));if(n.temporaryProof)throw F(e,"account-exists-with-different-credential",n);return n}const De={["USER_NOT_FOUND"]:"user-not-found"};async function Fe(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",R(e,n),De)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Ee{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ue({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ue({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ne(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Me(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Fe(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new Ue({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ze(e){const t=Object(o["o"])(Object(o["f"])(e))["link"],n=t?Object(o["o"])(Object(o["f"])(t))["deep_link_id"]:null,r=Object(o["o"])(Object(o["f"])(e))["deep_link_id"],i=r?Object(o["o"])(Object(o["f"])(r))["link"]:null;return i||r||n||t||e}class $e{constructor(e){var t,n,r,i,s,a;const c=Object(o["o"])(Object(o["f"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=Ve(null!==(r=c["mode"])&&void 0!==r?r:null);v(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ze(e);try{return new $e(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(){this.providerId=Be.PROVIDER_ID}static credential(e,t){return Ce._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=$e.parseLink(t);return v(n,"argument-error"),Ce._fromEmailAndCode(e,n.code,n.tenantId)}}Be.PROVIDER_ID="password",Be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends He{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We extends Ge{constructor(){super("facebook.com")}static credential(e){return Pe._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch(t){return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com",We.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pe._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return qe.credential(t,n)}catch(r){return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com",qe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ge{constructor(){super("github.com")}static credential(e){return Pe._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com",Ke.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Pe._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.TWITTER_SIGN_IN_METHOD="twitter.com",Je.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await re._fromIdTokenResponse(e,n,r),i=Ye(n),s=new Xe({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ye(n);return new Xe({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ye(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends o["c"]{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Qe.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(o=e.tenantId)&&void 0!==o?o:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Qe(e,t,n,r)}}function Ze(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Qe._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t,n=!1){const r=await W(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Xe._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tt(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await W(e,Ze(r,o,t,e),n);v(i.idToken,r,"internal-error");const s=H(i.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),Xe._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&d(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t,n=!1){const r="signIn",o=await Ze(e,r,t),i=await Xe._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function rt(e,t){return nt(je(e),t)}function ot(e,t,n){return rt(Object(o["g"])(e),Be.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e,t,n,r){return Object(o["g"])(e).onAuthStateChanged(t,n,r)}function st(e){return Object(o["g"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function at(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}new WeakMap;var ct="@firebase/auth-exp",ut="0.0.900-exp.725ab4684";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dt(e){Object(r["c"])(new a["a"]("auth-exp",(t,{options:n})=>{const r=t.getProvider("app-exp").getImmediate(),{apiKey:o,authDomain:i}=r.options;return(t=>{v(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:t.name});const r={apiKey:o,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(e)},s=new we(t,r);return O(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(r["c"])(new a["a"]("auth-internal",e=>{const t=je(e.getProvider("auth-exp").getImmediate());return(e=>new lt(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["f"])(ct,ut,ft(e))}const ht="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ht,"1"),this.storage.removeItem(ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){const e=Object(o["h"])();return le(e)||me(e)}const mt=1e3,gt=10;class bt extends pt{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vt()&&_e(),this.fallbackToPolling=ye(),this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);be()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,gt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},mt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bt.type="LOCAL";const yt=bt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ot(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map(async e=>e(t.origin,o)),a=await _t(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wt(e="",t=20){return`${e}${Math.floor(Math.random()*Math.pow(10,t))}`}Ot.receivers=[];class jt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((s,a)=>{const c=wt();r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function Et(e){It().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return"undefined"!==typeof It()["WorkerGlobalScope"]&&"function"===typeof It()["importScripts"]}async function St(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Tt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function At(){return kt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="firebaseLocalStorageDb",xt=1,Rt="firebaseLocalStorage",Pt="fbase_key";class Lt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nt(e,t){return e.transaction([Rt],t?"readwrite":"readonly").objectStore(Rt)}function Mt(){const e=indexedDB.deleteDatabase(Ct);return new Lt(e).toPromise()}function Dt(){const e=indexedDB.open(Ct,xt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Rt,{keyPath:Pt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;if(!n.objectStoreNames.contains(Rt))return await Mt(),Dt();t(n)})})}async function Ft(e,t,n){const r=Nt(e,!0).put({[Pt]:t,value:n});return new Lt(r).toPromise()}async function Ut(e,t){const n=Nt(e,!1).get(t),r=await new Lt(n).toPromise();return void 0===r?null:r.value}function Vt(e,t){const n=Nt(e,!0).delete(t);return new Lt(n).toPromise()}const zt=800,$t=3;class Bt{constructor(){this.type="LOCAL",this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Dt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>$t)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ot._getInstance(At()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await St(),!this.activeServiceWorker)return;this.sender=new jt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Tt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dt();return await Ft(e,ht,"1"),await Vt(e,ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ft(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Ut(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Nt(e,!1).getAll();return new Lt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Bt.type="LOCAL";const Ht=Bt,Gt=6e5;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jt(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Kt(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(h(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gt&&this.cachedEventUids.clear(),this.cachedEventUids.has(qt(e))}saveEventToCache(e){this.cachedEventUids.add(qt(e)),this.lastProcessedEventTime=Date.now()}}function qt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Kt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Jt(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kt(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){return`${e||""}${Math.floor(1e9*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e){return P(e,"GET","/v1/projects",{})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zt=/^https?/;async function en(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Yt(e);for(const r of t)try{if(tn(r))return}catch(n){}d(e,"unauthorized-domain")}function tn(e){const t=w(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Zt.test(n))return!1;if(Qt.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function rn(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=n,r.type="text/javascript",r.charset="UTF-8",nn().appendChild(r)})}function on(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new S(3e4,6e4);function an(){const e=It().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function cn(e){return new Promise((t,n)=>{var r,o,i;function s(){an(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{an(),n(h(e,"network-request-failed"))},timeout:sn.get()})}if(null===(o=null===(r=It().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=It().gapi)||void 0===i?void 0:i.load)){const t=on("iframefcb");return It()[t]=()=>{gapi.load?s():n(h(e,"network-request-failed"))},rn("https://apis.google.com/js/api.js?onload="+t)}s()}}).catch(e=>{throw un=null,e})}let un=null;function ln(e){return un=un||cn(e),un}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new S(5e3,15e3),dn="__/auth/iframe",hn="emulator/auth/iframe",pn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},vn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?T(t,hn):`https://${e.config.authDomain}/${dn}`,i={apiKey:t.apiKey,appName:e.name,v:r["a"]},s=vn.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Object(o["n"])(i).slice(1)}`}async function gn(e){const t=await ln(e),n=It().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:mn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=h(e,"network-request-failed"),i=It().setTimeout(()=>{r(o)},fn.get());function s(){It().clearTimeout(i),n(t)}t.ping(s).then(s,()=>{r(o)})}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends pt{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bn.type="SESSION";const yn=bn,_n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},On=500,wn=600,jn="_blank",In="http://localhost";
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function kn(e,t,n,r=On,i=wn){const s=Math.min((window.screen.availHeight-i)/2,0).toString(),a=Math.min((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},_n),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Object(o["h"])().toLowerCase();n&&(c=fe(l)?jn:n),ue(l)&&(t=t||In,u.scrollbars="yes");const f=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ge(l)&&"_self"!==c)return Sn(t||"",c),new En(null);const d=window.open(t||"",c,f);v(d,e,"popup-blocked");try{d.focus()}catch(h){}return new En(d)}function Sn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e,t){return t?y(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ee{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cn(e){return nt(e.auth,new An(e),e.bypassAuthState)}function xn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),tt(n,new An(e),e.bypassAuthState)}async function Rn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),et(n,new An(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cn;case"linkViaPopup":case"linkViaRedirect":return Rn;case"reauthViaPopup":case"reauthViaRedirect":return xn;default:d(this.auth,"internal-error")}}resolve(e){g(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){g(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="pendingRedirect",Nn=new Map;class Mn extends Pn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Nn.get(this.auth._key());if(!e){try{const t=await Dn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Nn.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Dn(e,t){const n=Un(t),r="true"===await Fn(e)._get(n);return await Fn(e)._remove(n),r}function Fn(e){return y(e._redirectPersistence)}function Un(e){return se(Ln,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e,t,n=!1){const r=je(e),o=Tn(r,t),i=new Mn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zn="__/auth/handler",$n="emulator/auth/handler";function Bn(e,t,n,i,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r["a"],eventId:s};if(t instanceof He){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(o["j"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Hn(e)}?${Object(o["n"])(u).slice(1)}`}function Hn({config:e}){return e.emulator?T(e,$n):`https://${e.authDomain}/${zn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="webStorageSupport";class Wn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yn,this._completeRedirectFn=Vn}async _openPopup(e,t,n,r){var o;g(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=Bn(e,t,n,w(),r);return kn(e,i,Xt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Et(Bn(e,t,n,w(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(g(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await gn(e),n=new Wt(e);return t.register("authEvent",t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Gn,{type:Gn},n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Gn];void 0!==o&&t(!!o),d(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=en(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ye()||le()||me()}}const qn=Wn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new S(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jn="recaptcha";async function Xn(e,t,n){var r;const o=await n.verify();try{let i;if(v("string"===typeof o,e,"argument-error"),v(n.type===Jn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await at(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await Kn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Le(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yn{constructor(e){this.providerId=Yn.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,t){return Xn(this.auth,e,Object(o["g"])(t))}static credential(e,t){return Ue._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yn.credentialFromTaggedObject(t)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ue._fromTokenResponse(t,n):null}}Yn.PROVIDER_ID="phone",Yn.PHONE_SIGN_IN_METHOD="phone";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qn=new S(2e3,1e4);class Zn extends Pn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){g(1===this.filter.length,"Popup operations only handle one event");const e=Xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(h(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(h(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(h(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Qn.get())};e()}}Zn.currentPopupAction=null;function er(e=Object(r["d"])()){const t=Object(r["b"])(e,"auth-exp");return t.isInitialized()?t.getImmediate():_(e,{popupRedirectResolver:qn,persistence:[Ht,yt]})}dt("Browser")},"6c02":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return H})),n.d(t,"c",(function(){return rt})),n.d(t,"d",(function(){return nt}));var r=n("7a23");
/*!
  * vue-router v4.0.6
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>o?Symbol(e):"_vr_"+e,s=i("rvlm"),a=i("rvd"),c=i("r"),u=i("rl"),l=i("rvl"),f="undefined"!==typeof window;function d(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function p(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}let v=()=>{};const m=/\/$/,g=e=>e.replace(m,"");function b(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),o=e(i)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=k(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function y(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function O(e,t,n){let r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&w(t.matched[r],n.matched[o])&&j(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function w(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function j(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!I(e[n],t[n]))return!1;return!0}function I(e,t){return Array.isArray(e)?E(e,t):Array.isArray(t)?E(t,e):e===t}function E(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==s&&"."!==i){if(".."!==i)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var S,T;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function A(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const C=/^[^#]+#/;function x(e,t){return e.replace(C,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){let n=e.el;const r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=R(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function F(e){const t=M.get(e);return M.delete(e),t}let U=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let e=o.slice(1);return"/"!==e[0]&&(e="/"+e),_(e,"")}const s=_(n,e);return s+r+o}function z(e,t,n,r){let o=[],i=[],s=null;const a=({state:i})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function c(){s=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:P()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:f}}function $(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function B(e){const{history:t,location:n}=window;let r={value:V(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=h({},t.state,$(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function a(e,n){const s=h({},o.value,t.state,{forward:e,scroll:P()});i(s.current,s,!0);const a=h({},$(r.value,e,null),{position:s.position+1},n);i(e,a,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:a,replace:s}}function H(e){e=A(e);const t=B(e),n=z(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(o,"location",{get:()=>t.location.value}),Object.defineProperty(o,"state",{get:()=>t.state.value}),o}function G(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=i("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return h(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t);let r=[],o=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const f=c||Q;if(f!==Q){s+=10;try{new RegExp(`(${f})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+u.message)}}let d=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),o+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:i,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ne(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const oe={type:0,value:""},ie=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function f(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ie.test(a)?d():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function ae(e,t,n){const r=te(se(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ce(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){let o=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(h({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let f,d;for(const t of l){let{path:l}=t;if(n&&"/"!==l[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(f=ae(t,n,u),r?r.alias.push(f):(d=d||f,d!==f&&d.alias.push(f),o&&e.name&&!de(f)&&s(e.name)),"children"in a){let e=a.children;for(let t=0;t<e.length;t++)i(e[t],f,r&&r.children[t])}r=r||f,c(f)}return d?()=>{s(d)}:v}function s(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,s,a={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw X(1,{location:e});s=o.record.name,a=h(ue(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),i=o.stringify(a)}else if("path"in e)i=e.path,o=n.find(e=>e.re.test(i)),o&&(a=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw X(1,{location:e,currentLocation:t});s=o.record.name,a=h({},t.params,e.params),i=o.stringify(a)}const c=[];let u=o;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:i,params:a,matched:c,meta:he(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>i(e)),{addRoute:i,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function ue(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function pe(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,me=/&/g,ge=/\//g,be=/=/g,ye=/\?/g,_e=/\+/g,Oe=/%5B/g,we=/%5D/g,je=/%5E/g,Ie=/%60/g,Ee=/%7B/g,ke=/%7C/g,Se=/%7D/g,Te=/%20/g;function Ae(e){return encodeURI(""+e).replace(ke,"|").replace(Oe,"[").replace(we,"]")}function Ce(e){return Ae(e).replace(Ee,"{").replace(Se,"}").replace(je,"^")}function xe(e){return Ae(e).replace(_e,"%2B").replace(Te,"+").replace(ve,"%23").replace(me,"%26").replace(Ie,"`").replace(Ee,"{").replace(Se,"}").replace(je,"^")}function Re(e){return xe(e).replace(be,"%3D")}function Pe(e){return Ae(e).replace(ve,"%23").replace(ye,"%3F")}function Le(e){return Pe(e).replace(ge,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(_e," ");let n=e.indexOf("="),i=Ne(n<0?e:e.slice(0,n)),s=n<0?null:Ne(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function De(e){let t="";for(let n in e){t.length&&(t+="&");const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=n);continue}let o=Array.isArray(r)?r.map(e=>e&&xe(e)):[r&&xe(r)];for(let e=0;e<o.length;e++)t+=(e?"&":"")+n,null!=o[e]&&(t+="="+o[e])}return t}function Fe(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):G(e)?a(X(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function ze(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let s=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if($e(s)){let a=s.__vccOpts||s;const c=a[t];c&&o.push(Ve(c,n,r,i,e))}else{let a=s();a=a.catch(console.error),o.push(()=>a.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const s=d(o)?o.default:o;i.components[e]=s;let a=s.__vccOpts||s;const c=a[t];return c&&Ve(c,n,r,i,e)()}))}}return o}function $e(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Be(e){const t=Object(r["k"])(c),n=Object(r["k"])(u),o=Object(r["b"])(()=>t.resolve(Object(r["A"])(e.to))),i=Object(r["b"])(()=>{let{matched:e}=o.value,{length:t}=e;const r=e[t-1];let i=n.matched;if(!r||!i.length)return-1;let s=i.findIndex(w.bind(null,r));if(s>-1)return s;let a=Ke(e[t-2]);return t>1&&Ke(r)===a&&i[i.length-1].path!==a?i.findIndex(w.bind(null,e[t-2])):s}),s=Object(r["b"])(()=>i.value>-1&&qe(n.params,o.value.params)),a=Object(r["b"])(()=>i.value>-1&&i.value===n.matched.length-1&&j(n.params,o.value.params));function l(n={}){return We(n)?t[Object(r["A"])(e.replace)?"replace":"push"](Object(r["A"])(e.to)):Promise.resolve()}return{route:o,href:Object(r["b"])(()=>o.value.href),isActive:s,isExactActive:a,navigate:l}}const He=Object(r["h"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:t}){const n=Object(r["t"])(Be(e)),{options:o}=Object(r["k"])(c),i=Object(r["b"])(()=>({[Je(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r["j"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),Ge=He;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qe(e,t){for(let n in t){let r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["h"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r["k"])(l),i=Object(r["b"])(()=>e.route||o.value),c=Object(r["k"])(a,0),u=Object(r["b"])(()=>i.value.matched[c]);Object(r["r"])(a,c+1),Object(r["r"])(s,u),Object(r["r"])(l,i);const f=Object(r["u"])();return Object(r["C"])(()=>[f.value,u.value,e.name],([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&w(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=i.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:o});const l=s.props[e.name],d=l?!0===l?o.params:"function"===typeof l?l(o):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},v=Object(r["j"])(a,h({},d,t,{onVnodeUnmounted:p,ref:f}));return Ye(n.default,{Component:v,route:o})||v}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Xe;function Ze(e){const t=ce(e.routes,e);let n=e.parseQuery||Me,o=e.stringifyQuery||De,i=e.history;const s=Ue(),a=Ue(),d=Ue(),m=Object(r["y"])(q);let g=q;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),w=p.bind(null,Le),j=p.bind(null,Ne);function I(e,n){let r,o;return W(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function E(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map(e=>e.record)}function S(e){return!!t.getRecordMatcher(e)}function T(e,r){if(r=h({},r||m.value),"string"===typeof e){let o=b(n,e,r.path),s=t.resolve({path:o.path},r),a=i.createHref(o.fullPath);return h(o,s,{params:j(s.params),hash:Ne(o.hash),redirectedFrom:void 0,href:a})}let s;"path"in e?s=h({},e,{path:b(n,e.path,r.path).path}):(s=h({},e,{params:w(e.params)}),r.params=w(r.params));let a=t.resolve(s,r);const c=e.hash||"";a.params=_(j(a.params));const u=y(o,h({},e,{hash:Ce(c),path:a.path}));let l=i.createHref(u);return h({fullPath:u,hash:c,query:o===De?Fe(e.query):e.query},a,{redirectedFrom:void 0,href:l})}function A(e){return"string"===typeof e?b(n,e,m.value.path):h({},e)}function C(e,t){if(g!==e)return X(8,{from:t,to:e})}function x(e){return U(e)}function R(e){return x(h(A(e),{replace:!0}))}function M(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=A(r):{path:r}),h({query:e.query,hash:e.hash,params:e.params},r)}}function U(e,t){const n=g=T(e),r=m.value,i=e.state,s=e.force,a=!0===e.replace,c=M(n);if(c)return U(h(A(c),{state:i,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&O(o,r,n)&&(l=X(16,{to:u,from:r}),ne(r,r,!0,!1)),(l?Promise.resolve(l):z(u,r)).catch(e=>Y(e)?e:Z(e)).then(e=>{if(e){if(Y(e,2))return U(h(A(e.to),{state:i,force:s,replace:a}),t||u)}else e=B(u,r,!0,a,i);return $(u,r,e),e})}function V(e,t){const n=C(e,t);return n?Promise.reject(n):Promise.resolve()}function z(e,t){let n;const[r,o,i]=tt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=V.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=ze(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=ze(i,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function $(e,t,n){for(const r of d.list())r(e,t,n)}function B(e,t,n,r,o){const s=C(e,t);if(s)return s;const a=t===q,c=f?history.state:{};n&&(r||a?i.replace(e.fullPath,h({scroll:a&&c&&c.scroll},o)):i.push(e.fullPath,o)),m.value=e,ne(e,t,n,a),te()}let H;function G(){H=i.listen((e,t,n)=>{let r=T(e);const o=M(r);if(o)return void U(h(o,{replace:!0}),r).catch(v);g=r;const s=m.value;f&&D(N(s.fullPath,n.delta),P()),z(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(U(e.to,r).catch(v),Promise.reject()):(n.delta&&i.go(-n.delta,!1),Z(e))).then(e=>{e=e||B(r,s,!1),e&&n.delta&&i.go(-n.delta,!1),$(r,s,e)}).catch(v)})}let K,J=Ue(),Q=Ue();function Z(e){return te(e),Q.list().forEach(t=>t(e)),Promise.reject(e)}function ee(){return K&&m.value!==q?Promise.resolve():new Promise((e,t)=>{J.add([e,t])})}function te(e){K||(K=!0,G(),J.list().forEach(([t,n])=>e?n(e):t()),J.reset())}function ne(t,n,o,i){const{scrollBehavior:s}=e;if(!f||!s)return Promise.resolve();let a=!o&&F(N(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return Object(r["l"])().then(()=>s(t,n,a)).then(e=>e&&L(e)).catch(Z)}const re=e=>i.go(e);let oe;const ie=new Set,se={currentRoute:m,addRoute:I,removeRoute:E,hasRoute:S,getRoutes:k,resolve:T,options:e,push:x,replace:R,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Q.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>Object(r["A"])(m)}),f&&!oe&&m.value===q&&(oe=!0,x(i.location).catch(e=>{0}));const n={};for(let i in q)n[i]=Object(r["b"])(()=>m.value[i]);e.provide(c,t),e.provide(u,Object(r["t"])(n)),e.provide(l,m);let o=e.unmount;ie.add(e),e.unmount=function(){ie.delete(e),ie.size<1&&(H(),m.value=q,oe=!1,K=!1),o()}}};return se}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find(e=>w(e,i))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find(e=>w(e,a))||o.push(a))}return[n,r,o]}function nt(){return Object(r["k"])(c)}function rt(){return Object(r["k"])(u)}}).call(this,n("c8ba"))},"6eeb":function(e,t,n){var r=n("da84"),o=n("9112"),i=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,f=String(String).split("String");(e.exports=function(e,t,n,a){var c,u=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||o(n,"name",t),c=l(n),c.source||(c.source=f.join("string"==typeof t?t:""))),e!==r?(u?!h&&e[t]&&(d=!0):delete e[t],d?e[t]=n:o(e,t,n)):d?e[t]=n:s(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(e,t,n){"use strict";n("5c40");var r=n("830f");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]})),n.d(t,"g",(function(){return r["g"]})),n.d(t,"h",(function(){return r["h"]})),n.d(t,"i",(function(){return r["i"]})),n.d(t,"j",(function(){return r["j"]})),n.d(t,"k",(function(){return r["k"]})),n.d(t,"l",(function(){return r["l"]})),n.d(t,"m",(function(){return r["m"]})),n.d(t,"n",(function(){return r["n"]})),n.d(t,"o",(function(){return r["o"]})),n.d(t,"p",(function(){return r["p"]})),n.d(t,"q",(function(){return r["q"]})),n.d(t,"r",(function(){return r["r"]})),n.d(t,"s",(function(){return r["s"]})),n.d(t,"t",(function(){return r["t"]})),n.d(t,"u",(function(){return r["u"]})),n.d(t,"v",(function(){return r["v"]})),n.d(t,"w",(function(){return r["w"]})),n.d(t,"x",(function(){return r["x"]})),n.d(t,"y",(function(){return r["y"]})),n.d(t,"z",(function(){return r["z"]})),n.d(t,"A",(function(){return r["A"]})),n.d(t,"B",(function(){return r["B"]})),n.d(t,"C",(function(){return r["C"]})),n.d(t,"D",(function(){return r["D"]})),n.d(t,"E",(function(){return r["E"]})),n.d(t,"F",(function(){return r["F"]})),n.d(t,"G",(function(){return r["G"]})),n.d(t,"H",(function(){return r["H"]}))},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7c73":function(e,t,n){var r,o=n("825a"),i=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),f=">",d="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return d+p+f+e+d+"/"+p+f},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}_=r?b(r):y();var e=s.length;while(e--)delete _[h][s[e]];return _()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=o(e),n=new m,m[h]=null,n[v]=e):n=_(),void 0===t?n:i(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),o=n("9ed3"),i=n("e163"),s=n("d2bb"),a=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),f=n("c430"),d=n("3f8c"),h=n("ae93"),p=h.IteratorPrototype,v=h.BUGGY_SAFARI_ITERATORS,m=l("iterator"),g="keys",b="values",y="entries",_=function(){return this};e.exports=function(e,t,n,l,h,O,w){o(n,t,l);var j,I,E,k=function(e){if(e===h&&x)return x;if(!v&&e in A)return A[e];switch(e){case g:return function(){return new n(this,e)};case b:return function(){return new n(this,e)};case y:return function(){return new n(this,e)}}return function(){return new n(this)}},S=t+" Iterator",T=!1,A=e.prototype,C=A[m]||A["@@iterator"]||h&&A[h],x=!v&&C||k(h),R="Array"==t&&A.entries||C;if(R&&(j=i(R.call(new e)),p!==Object.prototype&&j.next&&(f||i(j)===p||(s?s(j,p):"function"!=typeof j[m]&&c(j,m,_)),a(j,S,!0,!0),f&&(d[S]=_))),h==b&&C&&C.name!==b&&(T=!0,x=function(){return C.call(this)}),f&&!w||A[m]===x||c(A,m,x),d[t]=x,h)if(I={values:k(b),keys:O?x:k(g),entries:k(y)},w)for(E in I)(v||T||!(E in A))&&u(A,E,I[E]);else r({target:t,proto:!0,forced:v||T},I);return I}},"7f9a":function(e,t,n){var r=n("da84"),o=n("8925"),i=r.WeakMap;e.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"830f":function(e,t,n){"use strict";n.d(t,"c",(function(){return de})),n.d(t,"B",(function(){return re})),n.d(t,"F",(function(){return ce})),n.d(t,"G",(function(){return se}));var r=n("9ff4"),o=n("5c40");n("a1e9");n.d(t,"a",(function(){return o["b"]})),n.d(t,"b",(function(){return o["d"]})),n.d(t,"d",(function(){return o["e"]})),n.d(t,"e",(function(){return o["f"]})),n.d(t,"f",(function(){return o["i"]})),n.d(t,"g",(function(){return o["j"]})),n.d(t,"h",(function(){return o["k"]})),n.d(t,"i",(function(){return o["l"]})),n.d(t,"j",(function(){return o["n"]})),n.d(t,"k",(function(){return o["p"]})),n.d(t,"l",(function(){return o["r"]})),n.d(t,"m",(function(){return o["s"]})),n.d(t,"n",(function(){return o["t"]})),n.d(t,"o",(function(){return o["v"]})),n.d(t,"p",(function(){return o["x"]})),n.d(t,"q",(function(){return o["y"]})),n.d(t,"r",(function(){return o["z"]})),n.d(t,"s",(function(){return o["A"]})),n.d(t,"t",(function(){return o["B"]})),n.d(t,"u",(function(){return o["C"]})),n.d(t,"v",(function(){return o["D"]})),n.d(t,"w",(function(){return o["E"]})),n.d(t,"x",(function(){return o["F"]})),n.d(t,"y",(function(){return o["I"]})),n.d(t,"z",(function(){return o["J"]})),n.d(t,"A",(function(){return o["K"]})),n.d(t,"C",(function(){return o["N"]})),n.d(t,"D",(function(){return o["P"]})),n.d(t,"E",(function(){return o["Q"]})),n.d(t,"H",(function(){return o["R"]}));const i="http://www.w3.org/2000/svg",s="undefined"!==typeof document?document:null;let a,c;const u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?s.createElementNS(i,e):s.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>s.createTextNode(e),createComment:e=>s.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>s.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const o=r?c||(c=s.createElementNS(i,"svg")):a||(a=s.createElement("div"));o.innerHTML=e;const l=o.firstChild;let f=l,d=f;while(f)d=f,u.insert(f,t,n),f=o.firstChild;return[l,d]}};function l(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}function f(e,t,n){const o=e.style;if(n)if(Object(r["A"])(n)){if(t!==n){const t=o.display;o.cssText=n,"_vod"in e&&(o.display=t)}}else{for(const e in n)h(o,e,n[e]);if(t&&!Object(r["A"])(t))for(const e in t)null==n[e]&&h(o,e,"")}else e.removeAttribute("style")}const d=/\s*!important$/;function h(e,t,n){if(Object(r["m"])(n))n.forEach(n=>h(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const o=m(e,t);d.test(n)?e.setProperty(Object(r["k"])(o),n.replace(d,""),"important"):e[o]=n}}const p=["Webkit","Moz","ms"],v={};function m(e,t){const n=v[t];if(n)return n;let o=Object(r["e"])(t);if("filter"!==o&&o in e)return v[t]=o;o=Object(r["f"])(o);for(let r=0;r<p.length;r++){const n=p[r]+o;if(n in e)return v[t]=n}return t}const g="http://www.w3.org/1999/xlink";function b(e,t,n,o){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const o=Object(r["z"])(t);null==n||o&&!1===n?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function y(e,t,n,r,o,i,s){if("innerHTML"===t||"textContent"===t)return r&&s(r,o,i),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName){if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){0}}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}let _=Date.now,O=!1;if("undefined"!==typeof window){_()>document.createEvent("Event").timeStamp&&(_=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);O=!!(e&&Number(e[1])<=53)}let w=0;const j=Promise.resolve(),I=()=>{w=0},E=()=>w||(j.then(I),w=_());function k(e,t,n,r){e.addEventListener(t,n,r)}function S(e,t,n,r){e.removeEventListener(t,n,r)}function T(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=C(t);if(r){const s=i[t]=x(r,o);k(e,n,s,a)}else s&&(S(e,n,s,a),i[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function C(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["k"])(e.slice(2)),t]}function x(e,t){const n=e=>{const r=e.timeStamp||_();(O||r>=n.attached-1)&&Object(o["c"])(R(e,n.value),t,5,[e])};return n.value=e,n.attached=E(),n}function R(e,t){if(Object(r["m"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const P=/^on[a-z]/,L=(e,t)=>"value"===t,N=(e,t,n,o,i=!1,s,a,c,u)=>{switch(t){case"class":l(e,o,i);break;case"style":f(e,n,o);break;default:Object(r["u"])(t)?Object(r["s"])(t)||T(e,t,n,o,a):M(e,t,o,i)?y(e,t,o,s,a,c,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),b(e,t,o,i));break}};function M(e,t,n,o){return o?"innerHTML"===t||!!(t in e&&P.test(t)&&Object(r["n"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!P.test(t)||!Object(r["A"])(n))&&t in e))))}const D="transition",F="animation",U=(e,{slots:t})=>Object(o["n"])(o["a"],z(e),t);U.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};U.props=Object(r["h"])({},o["a"].props,V);function z(e){let{name:t="v",type:n,css:o=!0,duration:i,enterFromClass:s=t+"-enter-from",enterActiveClass:a=t+"-enter-active",enterToClass:c=t+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:f=c,leaveFromClass:d=t+"-leave-from",leaveActiveClass:h=t+"-leave-active",leaveToClass:p=t+"-leave-to"}=e;const v={};for(const r in e)r in V||(v[r]=e[r]);if(!o)return v;const m=$(i),g=m&&m[0],b=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:O,onLeave:w,onLeaveCancelled:j,onBeforeAppear:I=y,onAppear:E=_,onAppearCancelled:k=O}=v,S=(e,t,n)=>{G(e,t?f:c),G(e,t?l:a),n&&n()},T=(e,t)=>{G(e,p),G(e,h),t&&t()},A=e=>(t,r)=>{const o=e?E:_,i=()=>S(t,e,r);o&&o(t,i),W(()=>{G(t,e?u:s),H(t,e?f:c),o&&o.length>1||K(t,n,g,i)})};return Object(r["h"])(v,{onBeforeEnter(e){y&&y(e),H(e,s),H(e,a)},onBeforeAppear(e){I&&I(e),H(e,u),H(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const r=()=>T(e,t);H(e,d),Q(),H(e,h),W(()=>{G(e,d),H(e,p),w&&w.length>1||K(e,n,b,r)}),w&&w(e,r)},onEnterCancelled(e){S(e,!1),O&&O(e)},onAppearCancelled(e){S(e,!0),k&&k(e)},onLeaveCancelled(e){T(e),j&&j(e)}})}function $(e){if(null==e)return null;if(Object(r["t"])(e))return[B(e.enter),B(e.leave)];{const t=B(e);return[t,t]}}function B(e){const t=Object(r["K"])(e);return t}function H(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function G(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let q=0;function K(e,t,n,r){const o=e._endId=++q,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=J(e,t);if(!s)return r();const u=s+"end";let l=0;const f=()=>{e.removeEventListener(u,d),i()},d=t=>{t.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,d)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(D+"Delay"),i=r(D+"Duration"),s=X(o,i),a=r(F+"Delay"),c=r(F+"Duration"),u=X(a,c);let l=null,f=0,d=0;t===D?s>0&&(l=D,f=s,d=i.length):t===F?u>0&&(l=F,f=u,d=c.length):(f=Math.max(s,u),l=f>0?s>u?D:F:null,d=l?l===D?i.length:c.length:0);const h=l===D&&/\b(transform|all)(,|$)/.test(n[D+"Property"]);return{type:l,timeout:f,propCount:d,hasTransform:h}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>Y(t)+Y(e[n])))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["m"])(t)?e=>Object(r["l"])(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=Z(i);const s=o||"number"===e.type;k(e,t?"change":"input",t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Object(r["K"])(o)),e._assign(o)}),n&&k(e,"change",()=>{e.value=e.value.trim()}),t||(k(e,"compositionstart",ee),k(e,"compositionend",te),k(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:o}},i){if(e._assign=Z(i),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["K"])(e.value)===t)return}const s=null==t?"":t;e.value!==s&&(e.value=s)}};const oe=["ctrl","shift","alt","meta"],ie={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>oe.some(n=>e[n+"Key"]&&!t.includes(n))},se=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ie[t[e]];if(r&&r(n,t))return}return e(n,...r)},ae={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ce=(e,t)=>n=>{if(!("key"in n))return;const o=Object(r["k"])(n.key);return t.some(e=>e===o||ae[e]===o)?e(n):void 0};const ue=Object(r["h"])({patchProp:N,forcePatchProp:L},u);let le;function fe(){return le||(le=Object(o["h"])(ue))}const de=(...e)=>{const t=fe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=he(e);if(!o)return;const i=t._component;Object(r["n"])(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function he(e){if(Object(r["A"])(e)){const t=document.querySelector(e);return t}return e}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},8925:function(e,t,n){var r=n("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),o=/#|\.prototype\./,i=function(e,t){var n=a[s(e)];return n==u||n!=c&&("function"==typeof t?r(t):!!t)},s=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new A(r||[]);return i._invoke=E(e,n,s),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function b(){}var y={};y[i]=function(){return this};var _=Object.getPrototypeOf,O=_&&_(_(C([])));O&&O!==n&&r.call(O,i)&&(y=O);var w=b.prototype=m.prototype=Object.create(y);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(o,i,s,a){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return x()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:x}}function x(){return{value:t,done:!0}}return g.prototype=w.constructor=b,b.constructor=g,g.displayName=c(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,a,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},j(I.prototype),I.prototype[s]=function(){return this},e.AsyncIterator=I,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new I(u(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},j(w),c(w,a,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"9bf2":function(e,t,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),s=n("c04e"),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(i(e),t=s(t,!0),i(n),o)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=o(r,{next:i(1,n)}),s(e,u,!1,!0),a[u]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return Z})),n.d(t,"g",(function(){return re})),n.d(t,"h",(function(){return A})),n.d(t,"i",(function(){return te})),n.d(t,"j",(function(){return R})),n.d(t,"k",(function(){return Q})),n.d(t,"l",(function(){return ne})),n.d(t,"m",(function(){return P})),n.d(t,"n",(function(){return D})),n.d(t,"o",(function(){return i})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return W})),n.d(t,"r",(function(){return L})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return V})),n.d(t,"u",(function(){return S})),n.d(t,"v",(function(){return z})),n.d(t,"w",(function(){return q})),n.d(t,"x",(function(){return m})),n.d(t,"y",(function(){return N})),n.d(t,"z",(function(){return a})),n.d(t,"A",(function(){return F})),n.d(t,"B",(function(){return U})),n.d(t,"C",(function(){return b})),n.d(t,"D",(function(){return y})),n.d(t,"E",(function(){return r})),n.d(t,"F",(function(){return d})),n.d(t,"G",(function(){return c})),n.d(t,"H",(function(){return C})),n.d(t,"I",(function(){return _})),n.d(t,"J",(function(){return ee})),n.d(t,"K",(function(){return oe})),n.d(t,"L",(function(){return H}));const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){if(P(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=c(F(r)?f(r):r);if(o)for(const e in o)t[e]=o[e]}return t}if(V(e))return e}const u=/;(?![^(]*\))/g,l=/:(.+)/;function f(e){const t={};return e.split(u).forEach(e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function d(e){let t="";if(F(e))t=e;else if(P(e))for(let n=0;n<e.length;n++){const r=d(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const h="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",p="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",v=r(h),m=r(p);function g(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=P(e),r=P(t),n||r)return!(!n||!r)&&g(e,t);if(n=V(e),r=V(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const _=e=>null==e?"":V(e)?JSON.stringify(e,O,2):String(e),O=(e,t)=>L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!V(t)||P(t)||G(t)?t:String(t),w={},j=[],I=()=>{},E=()=>!1,k=/^on[^a-z]/,S=e=>k.test(e),T=e=>e.startsWith("onUpdate:"),A=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,R=(e,t)=>x.call(e,t),P=Array.isArray,L=e=>"[object Map]"===B(e),N=e=>"[object Set]"===B(e),M=e=>e instanceof Date,D=e=>"function"===typeof e,F=e=>"string"===typeof e,U=e=>"symbol"===typeof e,V=e=>null!==e&&"object"===typeof e,z=e=>V(e)&&D(e.then)&&D(e.catch),$=Object.prototype.toString,B=e=>$.call(e),H=e=>B(e).slice(8,-1),G=e=>"[object Object]"===B(e),W=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,q=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,X=K(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),Y=/\B([A-Z])/g,Q=K(e=>e.replace(Y,"-$1").toLowerCase()),Z=K(e=>e.charAt(0).toUpperCase()+e.slice(1)),ee=K(e=>e?"on"+Z(e):""),te=(e,t)=>e!==t&&(e===e||t===t),ne=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},re=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t}}).call(this,n("c8ba"))},a1e9:function(e,t,n){"use strict";n.d(t,"a",(function(){return Le})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return _e})),n.d(t,"d",(function(){return be})),n.d(t,"e",(function(){return ye})),n.d(t,"f",(function(){return je})),n.d(t,"g",(function(){return g})),n.d(t,"h",(function(){return Ce})),n.d(t,"i",(function(){return pe})),n.d(t,"j",(function(){return Ie})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return ve})),n.d(t,"m",(function(){return Ee})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return Oe})),n.d(t,"p",(function(){return Re})),n.d(t,"q",(function(){return _})),n.d(t,"r",(function(){return O})),n.d(t,"s",(function(){return Te}));var r=n("9ff4");const o=new WeakMap,i=[];let s;const a=Symbol(""),c=Symbol("");function u(e){return e&&!0===e._isEffect}function l(e,t=r["b"]){u(e)&&(e=e.raw);const n=h(e,t);return t.lazy||n(),n}function f(e){e.active&&(p(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let d=0;function h(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!i.includes(n)){p(n);try{return b(),i.push(n),s=n,e()}finally{i.pop(),y(),s=i[i.length-1]}}};return n.id=d++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}function p(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let v=!0;const m=[];function g(){m.push(v),v=!1}function b(){m.push(v),v=!0}function y(){const e=m.pop();v=void 0===e||e}function _(e,t,n){if(!v||void 0===s)return;let r=o.get(e);r||o.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=new Set),i.has(s)||(i.add(s),s.deps.push(i))}function O(e,t,n,i,u,l){const f=o.get(e);if(!f)return;const d=new Set,h=e=>{e&&e.forEach(e=>{(e!==s||e.allowRecurse)&&d.add(e)})};if("clear"===t)f.forEach(h);else if("length"===n&&Object(r["m"])(e))f.forEach((e,t)=>{("length"===t||t>=i)&&h(e)});else switch(void 0!==n&&h(f.get(n)),t){case"add":Object(r["m"])(e)?Object(r["q"])(n)&&h(f.get("length")):(h(f.get(a)),Object(r["r"])(e)&&h(f.get(c)));break;case"delete":Object(r["m"])(e)||(h(f.get(a)),Object(r["r"])(e)&&h(f.get(c)));break;case"set":Object(r["r"])(e)&&h(f.get(a));break}const p=e=>{e.options.scheduler?e.options.scheduler(e):e()};d.forEach(p)}const w=Object(r["E"])("__proto__,__v_isRef,__isVue"),j=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["B"])),I=A(),E=A(!1,!0),k=A(!0),S=A(!0,!0),T={};function A(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_raw"===o&&i===(e?t?fe:le:t?ue:ce).get(n))return n;const s=Object(r["m"])(n);if(!e&&s&&Object(r["j"])(T,o))return Reflect.get(T,o,i);const a=Reflect.get(n,o,i);if(Object(r["B"])(o)?j.has(o):w(o))return a;if(e||_(n,"get",o),t)return a;if(je(a)){const e=!s||!Object(r["q"])(o);return e?a.value:a}return Object(r["t"])(a)?e?me(a):pe(a):a}}["includes","indexOf","lastIndexOf"].forEach(e=>{const t=Array.prototype[e];T[e]=function(...e){const n=Oe(this);for(let t=0,o=this.length;t<o;t++)_(n,"get",t+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(Oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{const t=Array.prototype[e];T[e]=function(...e){g();const n=t.apply(this,e);return y(),n}});const C=R(),x=R(!0);function R(e=!1){return function(t,n,o,i){let s=t[n];if(!e&&(o=Oe(o),s=Oe(s),!Object(r["m"])(t)&&je(s)&&!je(o)))return s.value=o,!0;const a=Object(r["m"])(t)&&Object(r["q"])(n)?Number(n)<t.length:Object(r["j"])(t,n),c=Reflect.set(t,n,o,i);return t===Oe(i)&&(a?Object(r["i"])(o,s)&&O(t,"set",n,o,s):O(t,"add",n,o)),c}}function P(e,t){const n=Object(r["j"])(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&O(e,"delete",t,void 0,o),i}function L(e,t){const n=Reflect.has(e,t);return Object(r["B"])(t)&&j.has(t)||_(e,"has",t),n}function N(e){return _(e,"iterate",Object(r["m"])(e)?"length":a),Reflect.ownKeys(e)}const M={get:I,set:C,deleteProperty:P,has:L,ownKeys:N},D={get:k,set(e,t){return!0},deleteProperty(e,t){return!0}},F=Object(r["h"])({},M,{get:E,set:x}),U=(Object(r["h"])({},D,{get:S}),e=>Object(r["t"])(e)?pe(e):e),V=e=>Object(r["t"])(e)?me(e):e,z=e=>e,$=e=>Reflect.getPrototypeOf(e);function B(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Oe(e),i=Oe(t);t!==i&&!n&&_(o,"get",t),!n&&_(o,"get",i);const{has:s}=$(o),a=r?z:n?V:U;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void 0}function H(e,t=!1){const n=this["__v_raw"],r=Oe(n),o=Oe(e);return e!==o&&!t&&_(r,"has",e),!t&&_(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function G(e,t=!1){return e=e["__v_raw"],!t&&_(Oe(e),"iterate",a),Reflect.get(e,"size",e)}function W(e){e=Oe(e);const t=Oe(this),n=$(t),r=n.has.call(t,e);return r||(t.add(e),O(t,"add",e,e)),this}function q(e,t){t=Oe(t);const n=Oe(this),{has:o,get:i}=$(n);let s=o.call(n,e);s||(e=Oe(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Object(r["i"])(t,a)&&O(n,"set",e,t,a):O(n,"add",e,t),this}function K(e){const t=Oe(this),{has:n,get:r}=$(t);let o=n.call(t,e);o||(e=Oe(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&O(t,"delete",e,void 0,i),s}function J(){const e=Oe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&O(e,"clear",void 0,void 0,n),r}function X(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=Oe(i),c=t?z:e?V:U;return!e&&_(s,"iterate",a),i.forEach((e,t)=>n.call(r,c(e),c(t),o))}}function Y(e,t,n){return function(...o){const i=this["__v_raw"],s=Oe(i),u=Object(r["r"])(s),l="entries"===e||e===Symbol.iterator&&u,f="keys"===e&&u,d=i[e](...o),h=n?z:t?V:U;return!t&&_(s,"iterate",f?c:a),{next(){const{value:e,done:t}=d.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function Q(e){return function(...t){return"delete"!==e&&this}}const Z={get(e){return B(this,e)},get size(){return G(this)},has:H,add:W,set:q,delete:K,clear:J,forEach:X(!1,!1)},ee={get(e){return B(this,e,!1,!0)},get size(){return G(this)},has:H,add:W,set:q,delete:K,clear:J,forEach:X(!1,!0)},te={get(e){return B(this,e,!0)},get size(){return G(this,!0)},has(e){return H.call(this,e,!0)},add:Q("add"),set:Q("set"),delete:Q("delete"),clear:Q("clear"),forEach:X(!0,!1)},ne={get(e){return B(this,e,!0,!0)},get size(){return G(this,!0)},has(e){return H.call(this,e,!0)},add:Q("add"),set:Q("set"),delete:Q("delete"),clear:Q("clear"),forEach:X(!0,!0)},re=["keys","values","entries",Symbol.iterator];function oe(e,t){const n=t?e?ne:ee:e?te:Z;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Object(r["j"])(n,o)&&o in t?n:t,o,i)}re.forEach(e=>{Z[e]=Y(e,!1,!1),te[e]=Y(e,!0,!1),ee[e]=Y(e,!1,!0),ne[e]=Y(e,!0,!0)});const ie={get:oe(!1,!1)},se={get:oe(!1,!0)},ae={get:oe(!0,!1)};oe(!0,!0);const ce=new WeakMap,ue=new WeakMap,le=new WeakMap,fe=new WeakMap;function de(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function he(e){return e["__v_skip"]||!Object.isExtensible(e)?0:de(Object(r["L"])(e))}function pe(e){return e&&e["__v_isReadonly"]?e:ge(e,!1,M,ie,ce)}function ve(e){return ge(e,!1,F,se,ue)}function me(e){return ge(e,!0,D,ae,le)}function ge(e,t,n,o,i){if(!Object(r["t"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=he(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function be(e){return ye(e)?be(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ye(e){return!(!e||!e["__v_isReadonly"])}function _e(e){return be(e)||ye(e)}function Oe(e){return e&&Oe(e["__v_raw"])||e}const we=e=>Object(r["t"])(e)?pe(e):e;function je(e){return Boolean(e&&!0===e.__v_isRef)}function Ie(e){return Se(e)}function Ee(e){return Se(e,!0)}class ke{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:we(e)}get value(){return _(Oe(this),"get","value"),this._value}set value(e){Object(r["i"])(Oe(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:we(e),O(Oe(this),"set","value",e))}}function Se(e,t=!1){return je(e)?e:new ke(e,t)}function Te(e){return je(e)?e.value:e}const Ae={get:(e,t,n)=>Te(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return je(o)&&!je(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Ce(e){return be(e)?e:new Proxy(e,Ae)}class xe{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Re(e,t){return je(e[t])?e[t]:new xe(e,t)}class Pe{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=l(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,O(Oe(this),"set","value"))}}),this["__v_isReadonly"]=n}get value(){const e=Oe(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),_(e,"get","value"),e._value}set value(e){this._setter(e)}}function Le(e){let t,n;return Object(r["n"])(e)?(t=e,n=r["d"]):(t=e.get,n=e.set),new Pe(t,n,Object(r["n"])(e)||!e.set)}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a79d:function(e,t,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("fea9"),s=n("d039"),a=n("d066"),c=n("4840"),u=n("cdf9"),l=n("6eeb"),f=!!i&&s((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=c(this,a("Promise")),n="function"==typeof e;return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),o||"function"!=typeof i||i.prototype["finally"]||l(i.prototype,"finally",a("Promise").prototype["finally"])},a8e9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return _})),n.d(t,"o",(function(){return O}));var r=n("fbb0"),o=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},i=function(e){var t=[],n=0,r=0;while(n<e.length){var o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){i=e[n++];var s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],o=0;o<e.length;o+=3){var i=e[o],s=o+1<e.length,a=s?e[o+1]:0,c=o+2<e.length,u=c?e[o+2]:0,l=i>>2,f=(3&i)<<4|a>>4,d=(15&a)<<2|u>>6,h=63&u;c||(h=64,s||(d=64)),r.push(n[l],n[f],n[d],n[h])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],o=0;o<e.length;){var i=n[e.charAt(o++)],s=o<e.length,a=s?n[e.charAt(o)]:0;++o;var c=o<e.length,u=c?n[e.charAt(o)]:64;++o;var l=o<e.length,f=l?n[e.charAt(o)]:64;if(++o,null==i||null==a||null==u||null==f)throw Error();var d=i<<2|a>>4;if(r.push(d),64!==u){var h=a<<4&240|u>>2;if(r.push(h),64!==f){var p=u<<6&192|f;r.push(p)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function f(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function h(){var e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var p="FirebaseError",v=function(e){function t(n,r,o){var i=e.call(this,r)||this;return i.code=n,i.customData=o,i.name=p,Object.setPrototypeOf(i,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(i,m.prototype.create),i}return Object(r["b"])(t,e),t}(Error),m=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},o=this.service+"/"+e,i=this.errors[e],s=i?g(i,r):"Error",a=this.serviceName+": "+s+" ("+o+").",c=new v(o,a,r);return c},e}();function g(e,t){return e.replace(b,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var b=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,o=Object.entries(e);r<o.length;r++){var i=o[r],s=i[0],a=i[1];n(s,a)}return t.length?"&"+t.join("&"):""}function O(e){var t={},n=e.replace(/^\?/,"").split("&");return n.forEach((function(e){if(e){var n=e.split("="),r=n[0],o=n[1];t[decodeURIComponent(r)]=decodeURIComponent(o)}})),t}function w(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"===typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var o=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(o<<1|o>>>31)}var i,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],f=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(i=l^c&(u^l),s=1518500249):(i=c^u^l,s=1859775393):r<60?(i=c&u|l&(c|u),s=2400959708):(i=c^u^l,s=3395469782);o=(a<<5|a>>>27)+i+f+s+n[r]&4294967295;f=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=o}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var n=t-this.blockSize,r=0,o=this.buf_,i=this.inbuf_;while(r<t){if(0===i)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(o[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}else while(r<t)if(o[i]=e[r],++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[n]>>o&255,++r;return e}})();function j(e,t){var n=new I(e,t);return n.subscribe.bind(n)}var I=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,o=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=E(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=k),void 0===r.error&&(r.error=k),void 0===r.complete&&(r.complete=k);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?r.error(o.finalError):r.complete()}catch(e){}})),this.observers.push(r),i},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function E(e,t){if("object"!==typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var o=r[n];if(o in e&&"function"===typeof e[o])return!0}return!1}function k(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},abfd:function(e,t,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var o;n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return h}));var i,s=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));var a={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},c=i.INFO,u=(o={},o[i.DEBUG]="log",o[i.VERBOSE]="log",o[i.INFO]="info",o[i.WARN]="warn",o[i.ERROR]="error",o),l=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=u[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,r(["["+i+"]  "+e.name+":"],n))}},f=function(){function e(e){this.name=e,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,s.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?a[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.DEBUG],e)),this._logHandler.apply(this,r([this,i.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.VERBOSE],e)),this._logHandler.apply(this,r([this,i.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.INFO],e)),this._logHandler.apply(this,r([this,i.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.WARN],e)),this._logHandler.apply(this,r([this,i.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,r([this,i.ERROR],e)),this._logHandler.apply(this,r([this,i.ERROR],e))},e}();function d(e){s.forEach((function(t){t.setLogLevel(e)}))}function h(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=a[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var o=[],s=2;s<arguments.length;s++)o[s-2]=arguments[s];var a=o.map((function(e){if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((function(e){return e})).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:a,args:o,type:t.name})}},r=0,o=s;r<o.length;r++){var c=o[r];n(c)}}},ae93:function(e,t,n){"use strict";var r,o,i,s=n("d039"),a=n("e163"),c=n("9112"),u=n("5135"),l=n("b622"),f=n("c430"),d=l("iterator"),h=!1,p=function(){return this};[].keys&&(i=[].keys(),"next"in i?(o=a(a(i)),o!==Object.prototype&&(r=o)):h=!0);var v=void 0==r||s((function(){var e={};return r[d].call(e)!==e}));v&&(r={}),f&&!v||u(r,d)||c(r,d,p),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}},b041:function(e,t,n){"use strict";var r=n("00ee"),o=n("f5df");e.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b575:function(e,t,n){var r,o,i,s,a,c,u,l,f=n("da84"),d=n("06cf").f,h=n("2cf4").set,p=n("1cdc"),v=n("a4b4"),m=n("605d"),g=f.MutationObserver||f.WebKitMutationObserver,b=f.document,y=f.process,_=f.Promise,O=d(f,"queueMicrotask"),w=O&&O.value;w||(r=function(){var e,t;m&&(e=y.domain)&&e.exit();while(o){t=o.fn,o=o.next;try{t()}catch(n){throw o?s():i=void 0,n}}i=void 0,e&&e.enter()},p||m||v||!g||!b?_&&_.resolve?(u=_.resolve(void 0),l=u.then,s=function(){l.call(u,r)}):s=m?function(){y.nextTick(r)}:function(){h.call(f,r)}:(a=!0,c=b.createTextNode(""),new g(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=w||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,s()),i=t}},b622:function(e,t,n){var r=n("da84"),o=n("5692"),i=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=o("wks"),l=r.Symbol,f=c?l:l&&l.withoutSetter||s;e.exports=function(e){return i(u,e)&&(a||"string"==typeof u[e])||(a&&i(l,e)?u[e]=l[e]:u[e]=f("Symbol."+e)),u[e]}},c04e:function(e,t,n){var r=n("861d");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,s=n("d012");e.exports=function(e,t){var n,a=o(e),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(t.length>c)r(a,n=t[c++])&&(~i(u,n)||u.push(n));return u}},cc12:function(e,t,n){var r=n("da84"),o=n("861d"),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(e,t,n){var r=n("825a"),o=n("861d"),i=n("f069");e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),o=n("9112");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("428f"),o=n("da84"),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),t?e.call(n,i):n.__proto__=i,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,o=n("5135"),i=n("b622"),s=i("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},ddb0:function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("e260"),s=n("9112"),a=n("b622"),c=a("iterator"),u=a("toStringTag"),l=i.values;for(var f in o){var d=r[f],h=d&&d.prototype;if(h){if(h[c]!==l)try{s(h,c,l)}catch(v){h[c]=l}if(h[u]||s(h,u,f),o[f])for(var p in i)if(h[p]!==i[p])try{s(h,p,i[p])}catch(v){h[p]=i[p]}}}},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},e163:function(e,t,n){var r=n("5135"),o=n("7b0b"),i=n("f772"),s=n("e177"),a=i("IE_PROTO"),c=Object.prototype;e.exports=s?Object.getPrototypeOf:function(e){return e=o(e),r(e,a)?e[a]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,n){"use strict";var r,o,i,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),f=n("fea9"),d=n("6eeb"),h=n("e2cc"),p=n("d2bb"),v=n("d44e"),m=n("2626"),g=n("861d"),b=n("1c0b"),y=n("19aa"),_=n("8925"),O=n("2266"),w=n("1c7e"),j=n("4840"),I=n("2cf4").set,E=n("b575"),k=n("cdf9"),S=n("44de"),T=n("f069"),A=n("e667"),C=n("69f3"),x=n("94ca"),R=n("b622"),P=n("605d"),L=n("2d00"),N=R("species"),M="Promise",D=C.get,F=C.set,U=C.getterFor(M),V=f&&f.prototype,z=f,$=u.TypeError,B=u.document,H=u.process,G=T.f,W=G,q=!!(B&&B.createEvent&&u.dispatchEvent),K="function"==typeof PromiseRejectionEvent,J="unhandledrejection",X="rejectionhandled",Y=0,Q=1,Z=2,ee=1,te=2,ne=x(M,(function(){var e=_(z)!==String(z);if(!e){if(66===L)return!0;if(!P&&!K)return!0}if(c&&!z.prototype["finally"])return!0;if(L>=51&&/native code/.test(z))return!1;var t=z.resolve(1),n=function(e){e((function(){}),(function(){}))},r=t.constructor={};return r[N]=n,!(t.then((function(){}))instanceof n)})),re=ne||!w((function(e){z.all(e)["catch"]((function(){}))})),oe=function(e){var t;return!(!g(e)||"function"!=typeof(t=e.then))&&t},ie=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;E((function(){var r=e.value,o=e.state==Q,i=0;while(n.length>i){var s,a,c,u=n[i++],l=o?u.ok:u.fail,f=u.resolve,d=u.reject,h=u.domain;try{l?(o||(e.rejection===te&&ue(e),e.rejection=ee),!0===l?s=r:(h&&h.enter(),s=l(r),h&&(h.exit(),c=!0)),s===u.promise?d($("Promise-chain cycle")):(a=oe(s))?a.call(s,f,d):f(s)):d(r)}catch(p){h&&!c&&h.exit(),d(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&ae(e)}))}},se=function(e,t,n){var r,o;q?(r=B.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!K&&(o=u["on"+e])?o(r):e===J&&S("Unhandled promise rejection",n)},ae=function(e){I.call(u,(function(){var t,n=e.facade,r=e.value,o=ce(e);if(o&&(t=A((function(){P?H.emit("unhandledRejection",r,n):se(J,n,r)})),e.rejection=P||ce(e)?te:ee,t.error))throw t.value}))},ce=function(e){return e.rejection!==ee&&!e.parent},ue=function(e){I.call(u,(function(){var t=e.facade;P?H.emit("rejectionHandled",t):se(X,t,e.value)}))},le=function(e,t,n){return function(r){e(t,r,n)}},fe=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=Z,ie(e,!0))},de=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw $("Promise can't be resolved itself");var r=oe(t);r?E((function(){var n={done:!1};try{r.call(t,le(de,n,e),le(fe,n,e))}catch(o){fe(n,o,e)}})):(e.value=t,e.state=Q,ie(e,!1))}catch(o){fe({done:!1},o,e)}}};if(ne&&(z=function(e){y(this,z,M),b(e),r.call(this);var t=D(this);try{e(le(de,t),le(fe,t))}catch(n){fe(t,n)}},r=function(e){F(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:Y,value:void 0})},r.prototype=h(z.prototype,{then:function(e,t){var n=U(this),r=G(j(this,z));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=P?H.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=Y&&ie(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r,t=D(e);this.promise=e,this.resolve=le(de,t),this.reject=le(fe,t)},T.f=G=function(e){return e===z||e===i?new o(e):W(e)},!c&&"function"==typeof f&&V!==Object.prototype)){s=V.then,d(V,"then",(function(e,t){var n=this;return new z((function(e,t){s.call(n,e,t)})).then(e,t)}),{unsafe:!0});try{delete V.constructor}catch(he){}p&&p(V,z.prototype)}a({global:!0,wrap:!0,forced:ne},{Promise:z}),v(z,M,!1,!0),m(M),i=l(M),a({target:M,stat:!0,forced:ne},{reject:function(e){var t=G(this);return t.reject.call(void 0,e),t.promise}}),a({target:M,stat:!0,forced:c||ne},{resolve:function(e){return k(c&&this===i?z:this,e)}}),a({target:M,stat:!0,forced:re},{all:function(e){var t=this,n=G(t),r=n.resolve,o=n.reject,i=A((function(){var n=b(t.resolve),i=[],s=0,a=1;O(e,(function(e){var c=s++,u=!1;i.push(void 0),a++,n.call(t,e).then((function(e){u||(u=!0,i[c]=e,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=G(t),r=n.reject,o=A((function(){var o=b(t.resolve);O(e,(function(e){o.call(t,e).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},e893:function(e,t,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=o(t),a=s.f,c=i.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e95a:function(e,t,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[i]===e)}},ea7b:function(e,t,n){"use strict";var r=n("6a7c");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]}))},f069:function(e,t,n){"use strict";var r=n("1c0b"),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},f5df:function(e,t,n){var r=n("00ee"),o=n("c6b6"),i=n("b622"),s=i("toStringTag"),a="Arguments"==o(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=Object(e),s))?n:a?o(t):"Object"==(r=o(t))&&"function"==typeof t.callee?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),o=n("90e3"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},fbb0:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.create;Object.create},fc6a:function(e,t,n){var r=n("44ad"),o=n("1d80");e.exports=function(e){return r(o(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise},ffa6:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));function r(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r["throw"](e))}catch(t){i(t)}}function c(e){e.done?n(e.value):o(e.value).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}Object.create;function i(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{while((void 0===t||t-- >0)&&!(r=i.next()).done)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i["return"])&&n.call(i)}finally{if(o)throw o.error}}return s}function a(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}Object.create;var c=n("a8e9"),u=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),l="[DEFAULT]",f=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new c["a"];if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(h(e))try{this.getOrInitializeService({instanceIdentifier:l})}catch(p){}try{for(var r=i(this.instancesDeferred.entries()),o=r.next();!o.done;o=r.next()){var a=s(o.value,2),c=a[0],u=a[1],f=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:f});u.resolve(d)}catch(p){}}}catch(v){t={error:v}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=l),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(a(a([],s(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),s(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=l),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,o=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var u=i(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var f=s(l.value,2),d=f[0],h=f[1],p=this.normalizeInstanceIdentifier(d);a===p&&h.resolve(c)}}catch(v){t={error:v}}finally{try{l&&!l.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}return this.invokeOnInitCallbacks(c,a),c},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);var i=this.instances.has(r);return i&&e(i,r),function(){o.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,o=this.onInitCallbacks.get(t);if(o)try{for(var s=i(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(e,t)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:d(t),options:r}),this.instances.set(t,o),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch(i){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=l),this.component?this.component.multipleInstances?e:l:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function d(e){return e===l?void 0:e}function h(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new f(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);
//# sourceMappingURL=chunk-vendors.20e7eb2a.js.map