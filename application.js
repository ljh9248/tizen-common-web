!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(p){if(t[p])return t[p].exports;var o=t[p]={i:p,l:!1,exports:{}};return e[p].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,p){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:p})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var p=Object.create(null);if(n.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(p,o,function(t){return e[t]}.bind(null,o));return p},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}({1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ApplicationUsageMode=t.ApplicationControlLaunchMode=t.removeAppStatusChangeListener=t.addAppStatusChangeListener=t.removeAppInfoEventListener=t.addAppInfoEventListener=t.getAppMetaData=t.getAppSharedURI=t.getAppCerts=t.getAppInfo=t.getAppsInfo=t.getAppContext=t.getAppsContext=t.findAppControl=t.launchAppControl=t.launch=t.kill=t.getCurrentApplication=void 0;const{application:p}=window.tizen;t.getCurrentApplication=p.getCurrentApplication,t.kill=p.kill,t.launch=p.launch,t.launchAppControl=p.launchAppControl,t.findAppControl=p.findAppControl,t.getAppsContext=p.getAppsContext,t.getAppContext=p.getAppContext,t.getAppsInfo=p.getAppsInfo,t.getAppInfo=p.getAppInfo,t.getAppCerts=p.getAppCerts,t.getAppSharedURI=p.getAppSharedURI,t.getAppMetaData=p.getAppMetaData,t.addAppInfoEventListener=p.addAppInfoEventListener,t.removeAppInfoEventListener=p.removeAppInfoEventListener,t.addAppStatusChangeListener=p.addAppStatusChangeListener,t.removeAppStatusChangeListener=p.removeAppStatusChangeListener,function(e){e.SINGLE="SINGLE",e.GROUP="GROUP"}(t.ApplicationControlLaunchMode||(t.ApplicationControlLaunchMode={})),function(e){e.RECENTLY="RECENTLY",e.FREQUENTLY="FREQUENTLY"}(t.ApplicationUsageMode||(t.ApplicationUsageMode={}))},14:function(e,t,n){e.exports=n(1)}}));