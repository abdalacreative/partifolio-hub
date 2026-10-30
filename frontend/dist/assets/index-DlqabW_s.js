function Ou(e,r){for(var n=0;n<r.length;n++){const o=r[n];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(o,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hd={exports:{}},ci={},$d={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gn=Symbol.for("react.element"),Hu=Symbol.for("react.portal"),$u=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Yu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Ku=Symbol.for("react.memo"),Ju=Symbol.for("react.lazy"),jl=Symbol.iterator;function Zu(e){return e===null||typeof e!="object"?null:(e=jl&&e[jl]||e["@@iterator"],typeof e=="function"?e:null)}var Vd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qd=Object.assign,Yd={};function Kr(e,r,n){this.props=e,this.context=r,this.refs=Yd,this.updater=n||Vd}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gd(){}Gd.prototype=Kr.prototype;function ma(e,r,n){this.props=e,this.context=r,this.refs=Yd,this.updater=n||Vd}var ya=ma.prototype=new Gd;ya.constructor=ma;qd(ya,Kr.prototype);ya.isPureReactComponent=!0;var wl=Array.isArray,Qd=Object.prototype.hasOwnProperty,ba={current:null},Xd={key:!0,ref:!0,__self:!0,__source:!0};function Kd(e,r,n){var o,i={},s=null,a=null;if(r!=null)for(o in r.ref!==void 0&&(a=r.ref),r.key!==void 0&&(s=""+r.key),r)Qd.call(r,o)&&!Xd.hasOwnProperty(o)&&(i[o]=r[o]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];i.children=d}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)i[o]===void 0&&(i[o]=l[o]);return{$$typeof:Gn,type:e,key:s,ref:a,props:i,_owner:ba.current}}function ef(e,r){return{$$typeof:Gn,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gn}function tf(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var kl=/\/+/g;function Di(e,r){return typeof e=="object"&&e!==null&&e.key!=null?tf(""+e.key):r.toString(36)}function wo(e,r,n,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Gn:case Hu:a=!0}}if(a)return a=e,i=i(a),e=o===""?"."+Di(a,0):o,wl(i)?(n="",e!=null&&(n=e.replace(kl,"$&/")+"/"),wo(i,r,n,"",function(u){return u})):i!=null&&(va(i)&&(i=ef(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(kl,"$&/")+"/")+e)),r.push(i)),1;if(a=0,o=o===""?".":o+":",wl(e))for(var l=0;l<e.length;l++){s=e[l];var d=o+Di(s,l);a+=wo(s,r,n,d,i)}else if(d=Zu(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=o+Di(s,l++),a+=wo(s,r,n,d,i);else if(s==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function no(e,r,n){if(e==null)return e;var o=[],i=0;return wo(e,o,"","",function(s){return r.call(n,s,i++)}),o}function rf(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},ko={transition:null},nf={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:ko,ReactCurrentOwner:ba};function Jd(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:no,forEach:function(e,r,n){no(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return no(e,function(){r++}),r},toArray:function(e){return no(e,function(r){return r})||[]},only:function(e){if(!va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Kr;Y.Fragment=$u;Y.Profiler=qu;Y.PureComponent=ma;Y.StrictMode=Vu;Y.Suspense=Xu;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nf;Y.act=Jd;Y.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=qd({},e.props),i=e.key,s=e.ref,a=e._owner;if(r!=null){if(r.ref!==void 0&&(s=r.ref,a=ba.current),r.key!==void 0&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in r)Qd.call(r,d)&&!Xd.hasOwnProperty(d)&&(o[d]=r[d]===void 0&&l!==void 0?l[d]:r[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:Gn,type:e.type,key:i,ref:s,props:o,_owner:a}};Y.createContext=function(e){return e={$$typeof:Gu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yu,_context:e},e.Consumer=e};Y.createElement=Kd;Y.createFactory=function(e){var r=Kd.bind(null,e);return r.type=e,r};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Qu,render:e}};Y.isValidElement=va;Y.lazy=function(e){return{$$typeof:Ju,_payload:{_status:-1,_result:e},_init:rf}};Y.memo=function(e,r){return{$$typeof:Ku,type:e,compare:r===void 0?null:r}};Y.startTransition=function(e){var r=ko.transition;ko.transition={};try{e()}finally{ko.transition=r}};Y.unstable_act=Jd;Y.useCallback=function(e,r){return We.current.useCallback(e,r)};Y.useContext=function(e){return We.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Y.useEffect=function(e,r){return We.current.useEffect(e,r)};Y.useId=function(){return We.current.useId()};Y.useImperativeHandle=function(e,r,n){return We.current.useImperativeHandle(e,r,n)};Y.useInsertionEffect=function(e,r){return We.current.useInsertionEffect(e,r)};Y.useLayoutEffect=function(e,r){return We.current.useLayoutEffect(e,r)};Y.useMemo=function(e,r){return We.current.useMemo(e,r)};Y.useReducer=function(e,r,n){return We.current.useReducer(e,r,n)};Y.useRef=function(e){return We.current.useRef(e)};Y.useState=function(e){return We.current.useState(e)};Y.useSyncExternalStore=function(e,r,n){return We.current.useSyncExternalStore(e,r,n)};Y.useTransition=function(){return We.current.useTransition()};Y.version="18.3.1";$d.exports=Y;var g=$d.exports;const Zd=Uu(g),of=Ou({__proto__:null,default:Zd},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=g,af=Symbol.for("react.element"),lf=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,cf=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pf={key:!0,ref:!0,__self:!0,__source:!0};function ec(e,r,n){var o,i={},s=null,a=null;n!==void 0&&(s=""+n),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(o in r)df.call(r,o)&&!pf.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:af,type:e,key:s,ref:a,props:i,_owner:cf.current}}ci.Fragment=lf;ci.jsx=ec;ci.jsxs=ec;Hd.exports=ci;var t=Hd.exports,gs={},tc={exports:{}},$e={},rc={exports:{}},nc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(F,R){var U=F.length;F.push(R);e:for(;0<U;){var V=U-1>>>1,D=F[V];if(0<i(D,R))F[V]=R,F[U]=D,U=V;else break e}}function n(F){return F.length===0?null:F[0]}function o(F){if(F.length===0)return null;var R=F[0],U=F.pop();if(U!==R){F[0]=U;e:for(var V=0,D=F.length,L=D>>>1;V<L;){var B=2*(V+1)-1,$=F[B],J=B+1,Z=F[J];if(0>i($,U))J<D&&0>i(Z,$)?(F[V]=Z,F[J]=U,V=J):(F[V]=$,F[B]=U,V=B);else if(J<D&&0>i(Z,U))F[V]=Z,F[J]=U,V=J;else break e}}return R}function i(F,R){var U=F.sortIndex-R.sortIndex;return U!==0?U:F.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var d=[],u=[],x=1,y=null,v=3,m=!1,b=!1,f=!1,j=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(F){for(var R=n(u);R!==null;){if(R.callback===null)o(u);else if(R.startTime<=F)o(u),R.sortIndex=R.expirationTime,r(d,R);else break;R=n(u)}}function k(F){if(f=!1,h(F),!b)if(n(d)!==null)b=!0,Ie(C);else{var R=n(u);R!==null&&qe(k,R.startTime-F)}}function C(F,R){b=!1,f&&(f=!1,c(P),P=-1),m=!0;var U=v;try{for(h(R),y=n(d);y!==null&&(!(y.expirationTime>R)||F&&!W());){var V=y.callback;if(typeof V=="function"){y.callback=null,v=y.priorityLevel;var D=V(y.expirationTime<=R);R=e.unstable_now(),typeof D=="function"?y.callback=D:y===n(d)&&o(d),h(R)}else o(d);y=n(d)}if(y!==null)var L=!0;else{var B=n(u);B!==null&&qe(k,B.startTime-R),L=!1}return L}finally{y=null,v=U,m=!1}}var w=!1,z=null,P=-1,_=5,N=-1;function W(){return!(e.unstable_now()-N<_)}function M(){if(z!==null){var F=e.unstable_now();N=F;var R=!0;try{R=z(!0,F)}finally{R?S():(w=!1,z=null)}}else w=!1}var S;if(typeof p=="function")S=function(){p(M)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,G=H.port2;H.port1.onmessage=M,S=function(){G.postMessage(null)}}else S=function(){j(M,0)};function Ie(F){z=F,w||(w=!0,S())}function qe(F,R){P=j(function(){F(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){b||m||(b=!0,Ie(C))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(F){switch(v){case 1:case 2:case 3:var R=3;break;default:R=v}var U=v;v=R;try{return F()}finally{v=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,R){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var U=v;v=F;try{return R()}finally{v=U}},e.unstable_scheduleCallback=function(F,R,U){var V=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?V+U:V):U=V,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=U+D,F={id:x++,callback:R,priorityLevel:F,startTime:U,expirationTime:D,sortIndex:-1},U>V?(F.sortIndex=U,r(u,F),n(d)===null&&F===n(u)&&(f?(c(P),P=-1):f=!0,qe(k,U-V))):(F.sortIndex=D,r(d,F),b||m||(b=!0,Ie(C))),F},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(F){var R=v;return function(){var U=v;v=R;try{return F.apply(this,arguments)}finally{v=U}}}})(nc);rc.exports=nc;var uf=rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ff=g,Ue=uf;function E(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oc=new Set,_n={};function jr(e,r){Hr(e,r),Hr(e+"Capture",r)}function Hr(e,r){for(_n[e]=r,e=0;e<r.length;e++)oc.add(r[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ms=Object.prototype.hasOwnProperty,xf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sl={},Cl={};function hf(e){return ms.call(Cl,e)?!0:ms.call(Sl,e)?!1:xf.test(e)?Cl[e]=!0:(Sl[e]=!0,!1)}function gf(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mf(e,r,n,o){if(r===null||typeof r>"u"||gf(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Te(e,r,n,o,i,s,a){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=a}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];we[r]=new Te(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var ja=/[\-:]([a-z])/g;function wa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ja,wa);we[r]=new Te(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ja,wa);we[r]=new Te(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ja,wa);we[r]=new Te(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function ka(e,r,n,o){var i=we.hasOwnProperty(r)?we[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(mf(r,n,i,o)&&(n=null),o||i===null?hf(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var Pt=ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),Sa=Symbol.for("react.strict_mode"),ys=Symbol.for("react.profiler"),ic=Symbol.for("react.provider"),sc=Symbol.for("react.context"),Ca=Symbol.for("react.forward_ref"),bs=Symbol.for("react.suspense"),vs=Symbol.for("react.suspense_list"),za=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),ac=Symbol.for("react.offscreen"),zl=Symbol.iterator;function on(e){return e===null||typeof e!="object"?null:(e=zl&&e[zl]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Oi;function fn(e){if(Oi===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Oi=r&&r[1]||""}return`
`+Oi+e}var Ui=!1;function Hi(e,r){if(!e||Ui)return"";Ui=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var o=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){o=u}e.call(r.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=o.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var d=`
`+i[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=l);break}}}finally{Ui=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fn(e):""}function yf(e){switch(e.tag){case 5:return fn(e.type);case 16:return fn("Lazy");case 13:return fn("Suspense");case 19:return fn("SuspenseList");case 0:case 2:case 15:return e=Hi(e.type,!1),e;case 11:return e=Hi(e.type.render,!1),e;case 1:return e=Hi(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case Cr:return"Portal";case ys:return"Profiler";case Sa:return"StrictMode";case bs:return"Suspense";case vs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case ic:return(e._context.displayName||"Context")+".Provider";case Ca:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case za:return r=e.displayName||null,r!==null?r:js(e.type)||"Memo";case Rt:r=e._payload,e=e._init;try{return js(e(r))}catch{}}return null}function bf(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(r);case 8:return r===Sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lc(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function vf(e){var r=lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(a){o=""+a,s.call(this,a)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(a){o=""+a},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function io(e){e._valueTracker||(e._valueTracker=vf(e))}function dc(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=lc(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ws(e,r){var n=r.checked;return de({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nl(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Xt(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function cc(e,r){r=r.checked,r!=null&&ka(e,"checked",r,!1)}function ks(e,r){cc(e,r);var n=Xt(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Ss(e,r.type,n):r.hasOwnProperty("defaultValue")&&Ss(e,r.type,Xt(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function _l(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ss(e,r,n){(r!=="number"||Eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var xn=Array.isArray;function Br(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function Cs(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(E(91));return de({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pl(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(E(92));if(xn(n)){if(1<n.length)throw Error(E(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Xt(n)}}function pc(e,r){var n=Xt(r.value),o=Xt(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Wl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zs(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Pn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(bn).forEach(function(e){jf.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),bn[r]=bn[e]})});function xc(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||bn.hasOwnProperty(e)&&bn[e]?(""+r).trim():r+"px"}function hc(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=xc(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var wf=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ns(e,r){if(r){if(wf[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(E(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(E(61))}if(r.style!=null&&typeof r.style!="object")throw Error(E(62))}}function _s(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ps=null;function Na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,Ar=null,Fr=null;function Tl(e){if(e=Kn(e)){if(typeof Ws!="function")throw Error(E(280));var r=e.stateNode;r&&(r=hi(r),Ws(e.stateNode,e.type,r))}}function gc(e){Ar?Fr?Fr.push(e):Fr=[e]:Ar=e}function mc(){if(Ar){var e=Ar,r=Fr;if(Fr=Ar=null,Tl(e),r)for(e=0;e<r.length;e++)Tl(r[e])}}function yc(e,r){return e(r)}function bc(){}var $i=!1;function vc(e,r,n){if($i)return e(r,n);$i=!0;try{return yc(e,r,n)}finally{$i=!1,(Ar!==null||Fr!==null)&&(bc(),mc())}}function Wn(e,r){var n=e.stateNode;if(n===null)return null;var o=hi(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,r,typeof n));return n}var Ts=!1;if(kt)try{var sn={};Object.defineProperty(sn,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",sn,sn),window.removeEventListener("test",sn,sn)}catch{Ts=!1}function kf(e,r,n,o,i,s,a,l,d){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(x){this.onError(x)}}var vn=!1,Mo=null,Lo=!1,Is=null,Sf={onError:function(e){vn=!0,Mo=e}};function Cf(e,r,n,o,i,s,a,l,d){vn=!1,Mo=null,kf.apply(Sf,arguments)}function zf(e,r,n,o,i,s,a,l,d){if(Cf.apply(this,arguments),vn){if(vn){var u=Mo;vn=!1,Mo=null}else throw Error(E(198));Lo||(Lo=!0,Is=u)}}function wr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function jc(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Il(e){if(wr(e)!==e)throw Error(E(188))}function Nf(e){var r=e.alternate;if(!r){if(r=wr(e),r===null)throw Error(E(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Il(i),e;if(s===o)return Il(i),r;s=s.sibling}throw Error(E(188))}if(n.return!==o.return)n=i,o=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,o=s;break}if(l===o){a=!0,o=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,o=i;break}if(l===o){a=!0,o=s,n=i;break}l=l.sibling}if(!a)throw Error(E(189))}}if(n.alternate!==o)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:r}function wc(e){return e=Nf(e),e!==null?kc(e):null}function kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=kc(e);if(r!==null)return r;e=e.sibling}return null}var Sc=Ue.unstable_scheduleCallback,Rl=Ue.unstable_cancelCallback,_f=Ue.unstable_shouldYield,Pf=Ue.unstable_requestPaint,ue=Ue.unstable_now,Wf=Ue.unstable_getCurrentPriorityLevel,_a=Ue.unstable_ImmediatePriority,Cc=Ue.unstable_UserBlockingPriority,Bo=Ue.unstable_NormalPriority,Tf=Ue.unstable_LowPriority,zc=Ue.unstable_IdlePriority,pi=null,xt=null;function If(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Mf,Rf=Math.log,Ef=Math.LN2;function Mf(e){return e>>>=0,e===0?32:31-(Rf(e)/Ef|0)|0}var ao=64,lo=4194304;function hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?o=hn(l):(s&=a,s!==0&&(o=hn(s)))}else a=n&~i,a!==0?o=hn(a):s!==0&&(o=hn(s));if(o===0)return 0;if(r!==0&&r!==o&&!(r&i)&&(i=o&-o,s=r&-r,i>=s||i===16&&(s&4194240)!==0))return r;if(o&4&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-st(r),i=1<<n,o|=e[n],r&=~i;return o}function Lf(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bf(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-st(s),l=1<<a,d=i[a];d===-1?(!(l&n)||l&o)&&(i[a]=Lf(l,r)):d<=r&&(e.expiredLanes|=l),s&=~l}}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nc(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function Vi(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Qn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-st(r),e[r]=n}function Af(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),s=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~s}}function Pa(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-st(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var K=0;function _c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pc,Wa,Wc,Tc,Ic,Es=!1,co=[],Dt=null,Ot=null,Ut=null,Tn=new Map,In=new Map,Mt=[],Ff="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function El(e,r){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Tn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(r.pointerId)}}function an(e,r,n,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},r!==null&&(r=Kn(r),r!==null&&Wa(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Df(e,r,n,o,i){switch(r){case"focusin":return Dt=an(Dt,e,r,n,o,i),!0;case"dragenter":return Ot=an(Ot,e,r,n,o,i),!0;case"mouseover":return Ut=an(Ut,e,r,n,o,i),!0;case"pointerover":var s=i.pointerId;return Tn.set(s,an(Tn.get(s)||null,e,r,n,o,i)),!0;case"gotpointercapture":return s=i.pointerId,In.set(s,an(In.get(s)||null,e,r,n,o,i)),!0}return!1}function Rc(e){var r=sr(e.target);if(r!==null){var n=wr(r);if(n!==null){if(r=n.tag,r===13){if(r=jc(n),r!==null){e.blockedOn=r,Ic(e.priority,function(){Wc(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Ms(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ps=o,n.target.dispatchEvent(o),Ps=null}else return r=Kn(n),r!==null&&Wa(r),e.blockedOn=n,!1;r.shift()}return!0}function Ml(e,r,n){So(e)&&n.delete(r)}function Of(){Es=!1,Dt!==null&&So(Dt)&&(Dt=null),Ot!==null&&So(Ot)&&(Ot=null),Ut!==null&&So(Ut)&&(Ut=null),Tn.forEach(Ml),In.forEach(Ml)}function ln(e,r){e.blockedOn===r&&(e.blockedOn=null,Es||(Es=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Of)))}function Rn(e){function r(i){return ln(i,e)}if(0<co.length){ln(co[0],e);for(var n=1;n<co.length;n++){var o=co[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Dt!==null&&ln(Dt,e),Ot!==null&&ln(Ot,e),Ut!==null&&ln(Ut,e),Tn.forEach(r),In.forEach(r),n=0;n<Mt.length;n++)o=Mt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)Rc(n),n.blockedOn===null&&Mt.shift()}var Dr=Pt.ReactCurrentBatchConfig,Fo=!0;function Uf(e,r,n,o){var i=K,s=Dr.transition;Dr.transition=null;try{K=1,Ta(e,r,n,o)}finally{K=i,Dr.transition=s}}function Hf(e,r,n,o){var i=K,s=Dr.transition;Dr.transition=null;try{K=4,Ta(e,r,n,o)}finally{K=i,Dr.transition=s}}function Ta(e,r,n,o){if(Fo){var i=Ms(e,r,n,o);if(i===null)ts(e,r,o,Do,n),El(e,o);else if(Df(i,e,r,n,o))o.stopPropagation();else if(El(e,o),r&4&&-1<Ff.indexOf(e)){for(;i!==null;){var s=Kn(i);if(s!==null&&Pc(s),s=Ms(e,r,n,o),s===null&&ts(e,r,o,Do,n),s===i)break;i=s}i!==null&&o.stopPropagation()}else ts(e,r,o,null,n)}}var Do=null;function Ms(e,r,n,o){if(Do=null,e=Na(o),e=sr(e),e!==null)if(r=wr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=jc(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Do=e,null}function Ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wf()){case _a:return 1;case Cc:return 4;case Bo:case Tf:return 16;case zc:return 536870912;default:return 16}default:return 16}}var Bt=null,Ia=null,Co=null;function Mc(){if(Co)return Co;var e,r=Ia,n=r.length,o,i="value"in Bt?Bt.value:Bt.textContent,s=i.length;for(e=0;e<n&&r[e]===i[e];e++);var a=n-e;for(o=1;o<=a&&r[n-o]===i[s-o];o++);return Co=i.slice(e,1<o?1-o:void 0)}function zo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function po(){return!0}function Ll(){return!1}function Ve(e){function r(n,o,i,s,a){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:Ll,this.isPropagationStopped=Ll,this}return de(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),r}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ra=Ve(Jr),Xn=de({},Jr,{view:0,detail:0}),$f=Ve(Xn),qi,Yi,dn,ui=de({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ea,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dn&&(dn&&e.type==="mousemove"?(qi=e.screenX-dn.screenX,Yi=e.screenY-dn.screenY):Yi=qi=0,dn=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:Yi}}),Bl=Ve(ui),Vf=de({},ui,{dataTransfer:0}),qf=Ve(Vf),Yf=de({},Xn,{relatedTarget:0}),Gi=Ve(Yf),Gf=de({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qf=Ve(Gf),Xf=de({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kf=Ve(Xf),Jf=de({},Jr,{data:0}),Al=Ve(Jf),Zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=t0[e])?!!r[e]:!1}function Ea(){return r0}var n0=de({},Xn,{key:function(e){if(e.key){var r=Zf[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ea,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),o0=Ve(n0),i0=de({},ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fl=Ve(i0),s0=de({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ea}),a0=Ve(s0),l0=de({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=Ve(l0),c0=de({},ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),p0=Ve(c0),u0=[9,13,27,32],Ma=kt&&"CompositionEvent"in window,jn=null;kt&&"documentMode"in document&&(jn=document.documentMode);var f0=kt&&"TextEvent"in window&&!jn,Lc=kt&&(!Ma||jn&&8<jn&&11>=jn),Dl=" ",Ol=!1;function Bc(e,r){switch(e){case"keyup":return u0.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function x0(e,r){switch(e){case"compositionend":return Ac(r);case"keypress":return r.which!==32?null:(Ol=!0,Dl);case"textInput":return e=r.data,e===Dl&&Ol?null:e;default:return null}}function h0(e,r){if(Nr)return e==="compositionend"||!Ma&&Bc(e,r)?(e=Mc(),Co=Ia=Bt=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lc&&r.locale!=="ko"?null:r.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ul(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!g0[e.type]:r==="textarea"}function Fc(e,r,n,o){gc(o),r=Oo(r,"onChange"),0<r.length&&(n=new Ra("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var wn=null,En=null;function m0(e){Xc(e,0)}function fi(e){var r=Wr(e);if(dc(r))return e}function y0(e,r){if(e==="change")return r}var Dc=!1;if(kt){var Qi;if(kt){var Xi="oninput"in document;if(!Xi){var Hl=document.createElement("div");Hl.setAttribute("oninput","return;"),Xi=typeof Hl.oninput=="function"}Qi=Xi}else Qi=!1;Dc=Qi&&(!document.documentMode||9<document.documentMode)}function $l(){wn&&(wn.detachEvent("onpropertychange",Oc),En=wn=null)}function Oc(e){if(e.propertyName==="value"&&fi(En)){var r=[];Fc(r,En,e,Na(e)),vc(m0,r)}}function b0(e,r,n){e==="focusin"?($l(),wn=r,En=n,wn.attachEvent("onpropertychange",Oc)):e==="focusout"&&$l()}function v0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fi(En)}function j0(e,r){if(e==="click")return fi(r)}function w0(e,r){if(e==="input"||e==="change")return fi(r)}function k0(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var ct=typeof Object.is=="function"?Object.is:k0;function Mn(e,r){if(ct(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!ms.call(r,i)||!ct(e[i],r[i]))return!1}return!0}function Vl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ql(e,r){var n=Vl(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vl(n)}}function Uc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Uc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Hc(){for(var e=window,r=Eo();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Eo(e.document)}return r}function La(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function S0(e){var r=Hc(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Uc(n.ownerDocument.documentElement,n)){if(o!==null&&La(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=ql(n,s);var a=ql(n,o);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(a.node,a.offset)):(r.setEnd(a.node,a.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C0=kt&&"documentMode"in document&&11>=document.documentMode,_r=null,Ls=null,kn=null,Bs=!1;function Yl(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bs||_r==null||_r!==Eo(o)||(o=_r,"selectionStart"in o&&La(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),kn&&Mn(kn,o)||(kn=o,o=Oo(Ls,"onSelect"),0<o.length&&(r=new Ra("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=_r)))}function uo(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Pr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Ki={},$c={};kt&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function xi(e){if(Ki[e])return Ki[e];if(!Pr[e])return e;var r=Pr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in $c)return Ki[e]=r[n];return e}var Vc=xi("animationend"),qc=xi("animationiteration"),Yc=xi("animationstart"),Gc=xi("transitionend"),Qc=new Map,Gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,r){Qc.set(e,r),jr(r,[e])}for(var Ji=0;Ji<Gl.length;Ji++){var Zi=Gl[Ji],z0=Zi.toLowerCase(),N0=Zi[0].toUpperCase()+Zi.slice(1);er(z0,"on"+N0)}er(Vc,"onAnimationEnd");er(qc,"onAnimationIteration");er(Yc,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(Gc,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(gn));function Ql(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,zf(o,r,void 0,e),e.currentTarget=null}function Xc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var a=o.length-1;0<=a;a--){var l=o[a],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==s&&i.isPropagationStopped())break e;Ql(i,l,u),s=d}else for(a=0;a<o.length;a++){if(l=o[a],d=l.instance,u=l.currentTarget,l=l.listener,d!==s&&i.isPropagationStopped())break e;Ql(i,l,u),s=d}}}if(Lo)throw e=Is,Lo=!1,Is=null,e}function te(e,r){var n=r[Us];n===void 0&&(n=r[Us]=new Set);var o=e+"__bubble";n.has(o)||(Kc(r,e,2,!1),n.add(o))}function es(e,r,n){var o=0;r&&(o|=4),Kc(n,e,o,r)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Ln(e){if(!e[fo]){e[fo]=!0,oc.forEach(function(n){n!=="selectionchange"&&(_0.has(n)||es(n,!1,e),es(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[fo]||(r[fo]=!0,es("selectionchange",!1,r))}}function Kc(e,r,n,o){switch(Ec(r)){case 1:var i=Uf;break;case 4:i=Hf;break;default:i=Ta}n=i.bind(null,r,n,e),i=void 0,!Ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function ts(e,r,n,o,i){var s=o;if(!(r&1)&&!(r&2)&&o!==null)e:for(;;){if(o===null)return;var a=o.tag;if(a===3||a===4){var l=o.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=o.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;a=a.return}for(;l!==null;){if(a=sr(l),a===null)return;if(d=a.tag,d===5||d===6){o=s=a;continue e}l=l.parentNode}}o=o.return}vc(function(){var u=s,x=Na(n),y=[];e:{var v=Qc.get(e);if(v!==void 0){var m=Ra,b=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":m=o0;break;case"focusin":b="focus",m=Gi;break;case"focusout":b="blur",m=Gi;break;case"beforeblur":case"afterblur":m=Gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=qf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=a0;break;case Vc:case qc:case Yc:m=Qf;break;case Gc:m=d0;break;case"scroll":m=$f;break;case"wheel":m=p0;break;case"copy":case"cut":case"paste":m=Kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Fl}var f=(r&4)!==0,j=!f&&e==="scroll",c=f?v!==null?v+"Capture":null:v;f=[];for(var p=u,h;p!==null;){h=p;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,c!==null&&(k=Wn(p,c),k!=null&&f.push(Bn(p,k,h)))),j)break;p=p.return}0<f.length&&(v=new m(v,b,null,n,x),y.push({event:v,listeners:f}))}}if(!(r&7)){e:{if(v=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",v&&n!==Ps&&(b=n.relatedTarget||n.fromElement)&&(sr(b)||b[St]))break e;if((m||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,m?(b=n.relatedTarget||n.toElement,m=u,b=b?sr(b):null,b!==null&&(j=wr(b),b!==j||b.tag!==5&&b.tag!==6)&&(b=null)):(m=null,b=u),m!==b)){if(f=Bl,k="onMouseLeave",c="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(f=Fl,k="onPointerLeave",c="onPointerEnter",p="pointer"),j=m==null?v:Wr(m),h=b==null?v:Wr(b),v=new f(k,p+"leave",m,n,x),v.target=j,v.relatedTarget=h,k=null,sr(x)===u&&(f=new f(c,p+"enter",b,n,x),f.target=h,f.relatedTarget=j,k=f),j=k,m&&b)t:{for(f=m,c=b,p=0,h=f;h;h=Sr(h))p++;for(h=0,k=c;k;k=Sr(k))h++;for(;0<p-h;)f=Sr(f),p--;for(;0<h-p;)c=Sr(c),h--;for(;p--;){if(f===c||c!==null&&f===c.alternate)break t;f=Sr(f),c=Sr(c)}f=null}else f=null;m!==null&&Xl(y,v,m,f,!1),b!==null&&j!==null&&Xl(y,j,b,f,!0)}}e:{if(v=u?Wr(u):window,m=v.nodeName&&v.nodeName.toLowerCase(),m==="select"||m==="input"&&v.type==="file")var C=y0;else if(Ul(v))if(Dc)C=w0;else{C=v0;var w=b0}else(m=v.nodeName)&&m.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(C=j0);if(C&&(C=C(e,u))){Fc(y,C,n,x);break e}w&&w(e,v,u),e==="focusout"&&(w=v._wrapperState)&&w.controlled&&v.type==="number"&&Ss(v,"number",v.value)}switch(w=u?Wr(u):window,e){case"focusin":(Ul(w)||w.contentEditable==="true")&&(_r=w,Ls=u,kn=null);break;case"focusout":kn=Ls=_r=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,Yl(y,n,x);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":Yl(y,n,x)}var z;if(Ma)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Nr?Bc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Lc&&n.locale!=="ko"&&(Nr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Nr&&(z=Mc()):(Bt=x,Ia="value"in Bt?Bt.value:Bt.textContent,Nr=!0)),w=Oo(u,P),0<w.length&&(P=new Al(P,e,null,n,x),y.push({event:P,listeners:w}),z?P.data=z:(z=Ac(n),z!==null&&(P.data=z)))),(z=f0?x0(e,n):h0(e,n))&&(u=Oo(u,"onBeforeInput"),0<u.length&&(x=new Al("onBeforeInput","beforeinput",null,n,x),y.push({event:x,listeners:u}),x.data=z))}Xc(y,r)})}function Bn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Oo(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wn(e,n),s!=null&&o.unshift(Bn(e,s,i)),s=Wn(e,r),s!=null&&o.push(Bn(e,s,i))),e=e.return}return o}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xl(e,r,n,o,i){for(var s=r._reactName,a=[];n!==null&&n!==o;){var l=n,d=l.alternate,u=l.stateNode;if(d!==null&&d===o)break;l.tag===5&&u!==null&&(l=u,i?(d=Wn(n,s),d!=null&&a.unshift(Bn(n,d,l))):i||(d=Wn(n,s),d!=null&&a.push(Bn(n,d,l)))),n=n.return}a.length!==0&&e.push({event:r,listeners:a})}var P0=/\r\n?/g,W0=/\u0000|\uFFFD/g;function Kl(e){return(typeof e=="string"?e:""+e).replace(P0,`
`).replace(W0,"")}function xo(e,r,n){if(r=Kl(r),Kl(e)!==r&&n)throw Error(E(425))}function Uo(){}var As=null,Fs=null;function Ds(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Os=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,Jl=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof Jl<"u"?function(e){return Jl.resolve(null).then(e).catch(R0)}:Os;function R0(e){setTimeout(function(){throw e})}function rs(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Rn(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Rn(r)}function Ht(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Zl(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),ft="__reactFiber$"+Zr,An="__reactProps$"+Zr,St="__reactContainer$"+Zr,Us="__reactEvents$"+Zr,E0="__reactListeners$"+Zr,M0="__reactHandles$"+Zr;function sr(e){var r=e[ft];if(r)return r;for(var n=e.parentNode;n;){if(r=n[St]||n[ft]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Zl(e);e!==null;){if(n=e[ft])return n;e=Zl(e)}return r}e=n,n=e.parentNode}return null}function Kn(e){return e=e[ft]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function hi(e){return e[An]||null}var Hs=[],Tr=-1;function tr(e){return{current:e}}function re(e){0>Tr||(e.current=Hs[Tr],Hs[Tr]=null,Tr--)}function ee(e,r){Tr++,Hs[Tr]=e.current,e.current=r}var Kt={},ze=tr(Kt),Me=tr(!1),pr=Kt;function $r(e,r){var n=e.type.contextTypes;if(!n)return Kt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Ho(){re(Me),re(ze)}function ed(e,r,n){if(ze.current!==Kt)throw Error(E(168));ee(ze,r),ee(Me,n)}function Jc(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(E(108,bf(e)||"Unknown",i));return de({},n,o)}function $o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,pr=ze.current,ee(ze,e),ee(Me,Me.current),!0}function td(e,r,n){var o=e.stateNode;if(!o)throw Error(E(169));n?(e=Jc(e,r,pr),o.__reactInternalMemoizedMergedChildContext=e,re(Me),re(ze),ee(ze,e)):re(Me),ee(Me,n)}var yt=null,gi=!1,ns=!1;function Zc(e){yt===null?yt=[e]:yt.push(e)}function L0(e){gi=!0,Zc(e)}function rr(){if(!ns&&yt!==null){ns=!0;var e=0,r=K;try{var n=yt;for(K=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}yt=null,gi=!1}catch(i){throw yt!==null&&(yt=yt.slice(e+1)),Sc(_a,rr),i}finally{K=r,ns=!1}}return null}var Ir=[],Rr=0,Vo=null,qo=0,Ye=[],Ge=0,ur=null,vt=1,jt="";function or(e,r){Ir[Rr++]=qo,Ir[Rr++]=Vo,Vo=e,qo=r}function ep(e,r,n){Ye[Ge++]=vt,Ye[Ge++]=jt,Ye[Ge++]=ur,ur=e;var o=vt;e=jt;var i=32-st(o)-1;o&=~(1<<i),n+=1;var s=32-st(r)+i;if(30<s){var a=i-i%5;s=(o&(1<<a)-1).toString(32),o>>=a,i-=a,vt=1<<32-st(r)+i|n<<i|o,jt=s+e}else vt=1<<s|n<<i|o,jt=e}function Ba(e){e.return!==null&&(or(e,1),ep(e,1,0))}function Aa(e){for(;e===Vo;)Vo=Ir[--Rr],Ir[Rr]=null,qo=Ir[--Rr],Ir[Rr]=null;for(;e===ur;)ur=Ye[--Ge],Ye[Ge]=null,jt=Ye[--Ge],Ye[Ge]=null,vt=Ye[--Ge],Ye[Ge]=null}var Oe=null,De=null,ne=!1,ot=null;function tp(e,r){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function rd(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Oe=e,De=Ht(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Oe=e,De=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=ur!==null?{id:vt,overflow:jt}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Oe=e,De=null,!0):!1;default:return!1}}function $s(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vs(e){if(ne){var r=De;if(r){var n=r;if(!rd(e,r)){if($s(e))throw Error(E(418));r=Ht(n.nextSibling);var o=Oe;r&&rd(e,r)?tp(o,n):(e.flags=e.flags&-4097|2,ne=!1,Oe=e)}}else{if($s(e))throw Error(E(418));e.flags=e.flags&-4097|2,ne=!1,Oe=e}}}function nd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function ho(e){if(e!==Oe)return!1;if(!ne)return nd(e),ne=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ds(e.type,e.memoizedProps)),r&&(r=De)){if($s(e))throw rp(),Error(E(418));for(;r;)tp(e,r),r=Ht(r.nextSibling)}if(nd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){De=Ht(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}De=null}}else De=Oe?Ht(e.stateNode.nextSibling):null;return!0}function rp(){for(var e=De;e;)e=Ht(e.nextSibling)}function Vr(){De=Oe=null,ne=!1}function Fa(e){ot===null?ot=[e]:ot.push(e)}var B0=Pt.ReactCurrentBatchConfig;function cn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var o=n.stateNode}if(!o)throw Error(E(147,e));var i=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},r._stringRef=s,r)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function go(e,r){throw e=Object.prototype.toString.call(r),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function od(e){var r=e._init;return r(e._payload)}function np(e){function r(c,p){if(e){var h=c.deletions;h===null?(c.deletions=[p],c.flags|=16):h.push(p)}}function n(c,p){if(!e)return null;for(;p!==null;)r(c,p),p=p.sibling;return null}function o(c,p){for(c=new Map;p!==null;)p.key!==null?c.set(p.key,p):c.set(p.index,p),p=p.sibling;return c}function i(c,p){return c=Yt(c,p),c.index=0,c.sibling=null,c}function s(c,p,h){return c.index=h,e?(h=c.alternate,h!==null?(h=h.index,h<p?(c.flags|=2,p):h):(c.flags|=2,p)):(c.flags|=1048576,p)}function a(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,p,h,k){return p===null||p.tag!==6?(p=cs(h,c.mode,k),p.return=c,p):(p=i(p,h),p.return=c,p)}function d(c,p,h,k){var C=h.type;return C===zr?x(c,p,h.props.children,k,h.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rt&&od(C)===p.type)?(k=i(p,h.props),k.ref=cn(c,p,h),k.return=c,k):(k=Ro(h.type,h.key,h.props,null,c.mode,k),k.ref=cn(c,p,h),k.return=c,k)}function u(c,p,h,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=ps(h,c.mode,k),p.return=c,p):(p=i(p,h.children||[]),p.return=c,p)}function x(c,p,h,k,C){return p===null||p.tag!==7?(p=cr(h,c.mode,k,C),p.return=c,p):(p=i(p,h),p.return=c,p)}function y(c,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=cs(""+p,c.mode,h),p.return=c,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oo:return h=Ro(p.type,p.key,p.props,null,c.mode,h),h.ref=cn(c,null,p),h.return=c,h;case Cr:return p=ps(p,c.mode,h),p.return=c,p;case Rt:var k=p._init;return y(c,k(p._payload),h)}if(xn(p)||on(p))return p=cr(p,c.mode,h,null),p.return=c,p;go(c,p)}return null}function v(c,p,h,k){var C=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:l(c,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:return h.key===C?d(c,p,h,k):null;case Cr:return h.key===C?u(c,p,h,k):null;case Rt:return C=h._init,v(c,p,C(h._payload),k)}if(xn(h)||on(h))return C!==null?null:x(c,p,h,k,null);go(c,h)}return null}function m(c,p,h,k,C){if(typeof k=="string"&&k!==""||typeof k=="number")return c=c.get(h)||null,l(p,c,""+k,C);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case oo:return c=c.get(k.key===null?h:k.key)||null,d(p,c,k,C);case Cr:return c=c.get(k.key===null?h:k.key)||null,u(p,c,k,C);case Rt:var w=k._init;return m(c,p,h,w(k._payload),C)}if(xn(k)||on(k))return c=c.get(h)||null,x(p,c,k,C,null);go(p,k)}return null}function b(c,p,h,k){for(var C=null,w=null,z=p,P=p=0,_=null;z!==null&&P<h.length;P++){z.index>P?(_=z,z=null):_=z.sibling;var N=v(c,z,h[P],k);if(N===null){z===null&&(z=_);break}e&&z&&N.alternate===null&&r(c,z),p=s(N,p,P),w===null?C=N:w.sibling=N,w=N,z=_}if(P===h.length)return n(c,z),ne&&or(c,P),C;if(z===null){for(;P<h.length;P++)z=y(c,h[P],k),z!==null&&(p=s(z,p,P),w===null?C=z:w.sibling=z,w=z);return ne&&or(c,P),C}for(z=o(c,z);P<h.length;P++)_=m(z,c,P,h[P],k),_!==null&&(e&&_.alternate!==null&&z.delete(_.key===null?P:_.key),p=s(_,p,P),w===null?C=_:w.sibling=_,w=_);return e&&z.forEach(function(W){return r(c,W)}),ne&&or(c,P),C}function f(c,p,h,k){var C=on(h);if(typeof C!="function")throw Error(E(150));if(h=C.call(h),h==null)throw Error(E(151));for(var w=C=null,z=p,P=p=0,_=null,N=h.next();z!==null&&!N.done;P++,N=h.next()){z.index>P?(_=z,z=null):_=z.sibling;var W=v(c,z,N.value,k);if(W===null){z===null&&(z=_);break}e&&z&&W.alternate===null&&r(c,z),p=s(W,p,P),w===null?C=W:w.sibling=W,w=W,z=_}if(N.done)return n(c,z),ne&&or(c,P),C;if(z===null){for(;!N.done;P++,N=h.next())N=y(c,N.value,k),N!==null&&(p=s(N,p,P),w===null?C=N:w.sibling=N,w=N);return ne&&or(c,P),C}for(z=o(c,z);!N.done;P++,N=h.next())N=m(z,c,P,N.value,k),N!==null&&(e&&N.alternate!==null&&z.delete(N.key===null?P:N.key),p=s(N,p,P),w===null?C=N:w.sibling=N,w=N);return e&&z.forEach(function(M){return r(c,M)}),ne&&or(c,P),C}function j(c,p,h,k){if(typeof h=="object"&&h!==null&&h.type===zr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case oo:e:{for(var C=h.key,w=p;w!==null;){if(w.key===C){if(C=h.type,C===zr){if(w.tag===7){n(c,w.sibling),p=i(w,h.props.children),p.return=c,c=p;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rt&&od(C)===w.type){n(c,w.sibling),p=i(w,h.props),p.ref=cn(c,w,h),p.return=c,c=p;break e}n(c,w);break}else r(c,w);w=w.sibling}h.type===zr?(p=cr(h.props.children,c.mode,k,h.key),p.return=c,c=p):(k=Ro(h.type,h.key,h.props,null,c.mode,k),k.ref=cn(c,p,h),k.return=c,c=k)}return a(c);case Cr:e:{for(w=h.key;p!==null;){if(p.key===w)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(c,p.sibling),p=i(p,h.children||[]),p.return=c,c=p;break e}else{n(c,p);break}else r(c,p);p=p.sibling}p=ps(h,c.mode,k),p.return=c,c=p}return a(c);case Rt:return w=h._init,j(c,p,w(h._payload),k)}if(xn(h))return b(c,p,h,k);if(on(h))return f(c,p,h,k);go(c,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(c,p.sibling),p=i(p,h),p.return=c,c=p):(n(c,p),p=cs(h,c.mode,k),p.return=c,c=p),a(c)):n(c,p)}return j}var qr=np(!0),op=np(!1),Yo=tr(null),Go=null,Er=null,Da=null;function Oa(){Da=Er=Go=null}function Ua(e){var r=Yo.current;re(Yo),e._currentValue=r}function qs(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Or(e,r){Go=e,Da=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(Ee=!0),e.firstContext=null)}function Je(e){var r=e._currentValue;if(Da!==e)if(e={context:e,memoizedValue:r,next:null},Er===null){if(Go===null)throw Error(E(308));Er=e,Go.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return r}var ar=null;function Ha(e){ar===null?ar=[e]:ar.push(e)}function ip(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,Ha(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ct(e,o)}function Ct(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function $a(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function $t(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Q&2){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,Ct(e,n)}return i=o.interleaved,i===null?(r.next=r,Ha(o)):(r.next=i.next,i.next=r),o.interleaved=r,Ct(e,n)}function No(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Pa(e,n)}}function id(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=r:s=s.next=r}else i=s=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function Qo(e,r,n,o){var i=e.updateQueue;Et=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,u=d.next;d.next=null,a===null?s=u:a.next=u,a=d;var x=e.alternate;x!==null&&(x=x.updateQueue,l=x.lastBaseUpdate,l!==a&&(l===null?x.firstBaseUpdate=u:l.next=u,x.lastBaseUpdate=d))}if(s!==null){var y=i.baseState;a=0,x=u=d=null,l=s;do{var v=l.lane,m=l.eventTime;if((o&v)===v){x!==null&&(x=x.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,f=l;switch(v=r,m=n,f.tag){case 1:if(b=f.payload,typeof b=="function"){y=b.call(m,y,v);break e}y=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=f.payload,v=typeof b=="function"?b.call(m,y,v):b,v==null)break e;y=de({},y,v);break e;case 2:Et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else m={eventTime:m,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},x===null?(u=x=m,d=y):x=x.next=m,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(x===null&&(d=y),i.baseState=d,i.firstBaseUpdate=u,i.lastBaseUpdate=x,r=i.shared.interleaved,r!==null){i=r;do a|=i.lane,i=i.next;while(i!==r)}else s===null&&(i.shared.lanes=0);xr|=a,e.lanes=a,e.memoizedState=y}}function sd(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(E(191,i));i.call(o)}}}var Jn={},ht=tr(Jn),Fn=tr(Jn),Dn=tr(Jn);function lr(e){if(e===Jn)throw Error(E(174));return e}function Va(e,r){switch(ee(Dn,r),ee(Fn,e),ee(ht,Jn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:zs(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=zs(r,e)}re(ht),ee(ht,r)}function Yr(){re(ht),re(Fn),re(Dn)}function ap(e){lr(Dn.current);var r=lr(ht.current),n=zs(r,e.type);r!==n&&(ee(Fn,e),ee(ht,n))}function qa(e){Fn.current===e&&(re(ht),re(Fn))}var se=tr(0);function Xo(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var os=[];function Ya(){for(var e=0;e<os.length;e++)os[e]._workInProgressVersionPrimary=null;os.length=0}var _o=Pt.ReactCurrentDispatcher,is=Pt.ReactCurrentBatchConfig,fr=0,ae=null,he=null,me=null,Ko=!1,Sn=!1,On=0,A0=0;function ke(){throw Error(E(321))}function Ga(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!ct(e[n],r[n]))return!1;return!0}function Qa(e,r,n,o,i,s){if(fr=s,ae=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_o.current=e===null||e.memoizedState===null?U0:H0,e=n(o,i),Sn){s=0;do{if(Sn=!1,On=0,25<=s)throw Error(E(301));s+=1,me=he=null,r.updateQueue=null,_o.current=$0,e=n(o,i)}while(Sn)}if(_o.current=Jo,r=he!==null&&he.next!==null,fr=0,me=he=ae=null,Ko=!1,r)throw Error(E(300));return e}function Xa(){var e=On!==0;return On=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ae.memoizedState=me=e:me=me.next=e,me}function Ze(){if(he===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var r=me===null?ae.memoizedState:me.next;if(r!==null)me=r,he=e;else{if(e===null)throw Error(E(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},me===null?ae.memoizedState=me=e:me=me.next=e}return me}function Un(e,r){return typeof r=="function"?r(e):r}function ss(e){var r=Ze(),n=r.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var o=he,i=o.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}o.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,o=o.baseState;var l=a=null,d=null,u=s;do{var x=u.lane;if((fr&x)===x)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var y={lane:x,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=y,a=o):d=d.next=y,ae.lanes|=x,xr|=x}u=u.next}while(u!==null&&u!==s);d===null?a=o:d.next=l,ct(o,r.memoizedState)||(Ee=!0),r.memoizedState=o,r.baseState=a,r.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ae.lanes|=s,xr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function as(e){var r=Ze(),n=r.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,s=r.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);ct(s,r.memoizedState)||(Ee=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),n.lastRenderedState=s}return[s,o]}function lp(){}function dp(e,r){var n=ae,o=Ze(),i=r(),s=!ct(o.memoizedState,i);if(s&&(o.memoizedState=i,Ee=!0),o=o.queue,Ka(up.bind(null,n,o,e),[e]),o.getSnapshot!==r||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Hn(9,pp.bind(null,n,o,i,r),void 0,null),ye===null)throw Error(E(349));fr&30||cp(n,r,i)}return i}function cp(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=ae.updateQueue,r===null?(r={lastEffect:null,stores:null},ae.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function pp(e,r,n,o){r.value=n,r.getSnapshot=o,fp(r)&&xp(e)}function up(e,r,n){return n(function(){fp(r)&&xp(e)})}function fp(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!ct(e,n)}catch{return!0}}function xp(e){var r=Ct(e,1);r!==null&&at(r,e,1,-1)}function ad(e){var r=ut();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:e},r.queue=e,e=e.dispatch=O0.bind(null,ae,e),[r.memoizedState,e]}function Hn(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=ae.updateQueue,r===null?(r={lastEffect:null,stores:null},ae.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function hp(){return Ze().memoizedState}function Po(e,r,n,o){var i=ut();ae.flags|=e,i.memoizedState=Hn(1|r,n,void 0,o===void 0?null:o)}function mi(e,r,n,o){var i=Ze();o=o===void 0?null:o;var s=void 0;if(he!==null){var a=he.memoizedState;if(s=a.destroy,o!==null&&Ga(o,a.deps)){i.memoizedState=Hn(r,n,s,o);return}}ae.flags|=e,i.memoizedState=Hn(1|r,n,s,o)}function ld(e,r){return Po(8390656,8,e,r)}function Ka(e,r){return mi(2048,8,e,r)}function gp(e,r){return mi(4,2,e,r)}function mp(e,r){return mi(4,4,e,r)}function yp(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function bp(e,r,n){return n=n!=null?n.concat([e]):null,mi(4,4,yp.bind(null,r,e),n)}function Ja(){}function vp(e,r){var n=Ze();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Ga(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function jp(e,r){var n=Ze();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&Ga(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function wp(e,r,n){return fr&21?(ct(n,r)||(n=Nc(),ae.lanes|=n,xr|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function F0(e,r){var n=K;K=n!==0&&4>n?n:4,e(!0);var o=is.transition;is.transition={};try{e(!1),r()}finally{K=n,is.transition=o}}function kp(){return Ze().memoizedState}function D0(e,r,n){var o=qt(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Sp(e))Cp(r,n);else if(n=ip(e,r,n,o),n!==null){var i=_e();at(n,e,o,i),zp(n,r,o)}}function O0(e,r,n){var o=qt(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sp(e))Cp(r,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var a=r.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,ct(l,a)){var d=r.interleaved;d===null?(i.next=i,Ha(r)):(i.next=d.next,d.next=i),r.interleaved=i;return}}catch{}finally{}n=ip(e,r,i,o),n!==null&&(i=_e(),at(n,e,o,i),zp(n,r,o))}}function Sp(e){var r=e.alternate;return e===ae||r!==null&&r===ae}function Cp(e,r){Sn=Ko=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function zp(e,r,n){if(n&4194240){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Pa(e,n)}}var Jo={readContext:Je,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},U0={readContext:Je,useCallback:function(e,r){return ut().memoizedState=[e,r===void 0?null:r],e},useContext:Je,useEffect:ld,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,yp.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Po(4194308,4,e,r)},useInsertionEffect:function(e,r){return Po(4,2,e,r)},useMemo:function(e,r){var n=ut();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=ut();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=D0.bind(null,ae,e),[o.memoizedState,e]},useRef:function(e){var r=ut();return e={current:e},r.memoizedState=e},useState:ad,useDebugValue:Ja,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=ad(!1),r=e[0];return e=F0.bind(null,e[1]),ut().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=ae,i=ut();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=r(),ye===null)throw Error(E(349));fr&30||cp(o,r,n)}i.memoizedState=n;var s={value:n,getSnapshot:r};return i.queue=s,ld(up.bind(null,o,s,e),[e]),o.flags|=2048,Hn(9,pp.bind(null,o,s,n,r),void 0,null),n},useId:function(){var e=ut(),r=ye.identifierPrefix;if(ne){var n=jt,o=vt;n=(o&~(1<<32-st(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=On++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=A0++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},H0={readContext:Je,useCallback:vp,useContext:Je,useEffect:Ka,useImperativeHandle:bp,useInsertionEffect:gp,useLayoutEffect:mp,useMemo:jp,useReducer:ss,useRef:hp,useState:function(){return ss(Un)},useDebugValue:Ja,useDeferredValue:function(e){var r=Ze();return wp(r,he.memoizedState,e)},useTransition:function(){var e=ss(Un)[0],r=Ze().memoizedState;return[e,r]},useMutableSource:lp,useSyncExternalStore:dp,useId:kp,unstable_isNewReconciler:!1},$0={readContext:Je,useCallback:vp,useContext:Je,useEffect:Ka,useImperativeHandle:bp,useInsertionEffect:gp,useLayoutEffect:mp,useMemo:jp,useReducer:as,useRef:hp,useState:function(){return as(Un)},useDebugValue:Ja,useDeferredValue:function(e){var r=Ze();return he===null?r.memoizedState=e:wp(r,he.memoizedState,e)},useTransition:function(){var e=as(Un)[0],r=Ze().memoizedState;return[e,r]},useMutableSource:lp,useSyncExternalStore:dp,useId:kp,unstable_isNewReconciler:!1};function rt(e,r){if(e&&e.defaultProps){r=de({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Ys(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:de({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yi={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=_e(),i=qt(e),s=wt(o,i);s.payload=r,n!=null&&(s.callback=n),r=$t(e,s,i),r!==null&&(at(r,e,i,o),No(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=_e(),i=qt(e),s=wt(o,i);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=$t(e,s,i),r!==null&&(at(r,e,i,o),No(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=_e(),o=qt(e),i=wt(n,o);i.tag=2,r!=null&&(i.callback=r),r=$t(e,i,o),r!==null&&(at(r,e,o,n),No(r,e,o))}};function dd(e,r,n,o,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,a):r.prototype&&r.prototype.isPureReactComponent?!Mn(n,o)||!Mn(i,s):!0}function Np(e,r,n){var o=!1,i=Kt,s=r.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Le(r)?pr:ze.current,o=r.contextTypes,s=(o=o!=null)?$r(e,i):Kt),r=new r(n,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yi,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),r}function cd(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&yi.enqueueReplaceState(r,r.state,null)}function Gs(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$a(e);var s=r.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Le(r)?pr:ze.current,i.context=$r(e,s)),i.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(Ys(e,r,s,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&yi.enqueueReplaceState(i,i.state,null),Qo(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,r){try{var n="",o=r;do n+=yf(o),o=o.return;while(o);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:i,digest:null}}function ls(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Qs(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function _p(e,r,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){ei||(ei=!0,ia=o),Qs(e,r)},n}function Pp(e,r,n){n=wt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Qs(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qs(e,r),typeof o!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var a=r.stack;this.componentDidCatch(r.value,{componentStack:a!==null?a:""})}),n}function pd(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new V0;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=ix.bind(null,e,r,n),r.then(e,e))}function ud(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function fd(e,r,n,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=wt(-1,1),r.tag=2,$t(n,r,1))),n.lanes|=1),e)}var q0=Pt.ReactCurrentOwner,Ee=!1;function Ne(e,r,n,o){r.child=e===null?op(r,null,n,o):qr(r,e.child,n,o)}function xd(e,r,n,o,i){n=n.render;var s=r.ref;return Or(r,i),o=Qa(e,r,n,o,s,i),n=Xa(),e!==null&&!Ee?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,zt(e,r,i)):(ne&&n&&Ba(r),r.flags|=1,Ne(e,r,o,i),r.child)}function hd(e,r,n,o,i){if(e===null){var s=n.type;return typeof s=="function"&&!sl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=s,Wp(e,r,s,o,i)):(e=Ro(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(a,o)&&e.ref===r.ref)return zt(e,r,i)}return r.flags|=1,e=Yt(s,o),e.ref=r.ref,e.return=r,r.child=e}function Wp(e,r,n,o,i){if(e!==null){var s=e.memoizedProps;if(Mn(s,o)&&e.ref===r.ref)if(Ee=!1,r.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return r.lanes=e.lanes,zt(e,r,i)}return Xs(e,r,n,o,i)}function Tp(e,r,n){var o=r.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Lr,Fe),Fe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ee(Lr,Fe),Fe|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,ee(Lr,Fe),Fe|=o}else s!==null?(o=s.baseLanes|n,r.memoizedState=null):o=n,ee(Lr,Fe),Fe|=o;return Ne(e,r,i,n),r.child}function Ip(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Xs(e,r,n,o,i){var s=Le(n)?pr:ze.current;return s=$r(r,s),Or(r,i),n=Qa(e,r,n,o,s,i),o=Xa(),e!==null&&!Ee?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,zt(e,r,i)):(ne&&o&&Ba(r),r.flags|=1,Ne(e,r,n,i),r.child)}function gd(e,r,n,o,i){if(Le(n)){var s=!0;$o(r)}else s=!1;if(Or(r,i),r.stateNode===null)Wo(e,r),Np(r,n,o),Gs(r,n,o,i),o=!0;else if(e===null){var a=r.stateNode,l=r.memoizedProps;a.props=l;var d=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Le(n)?pr:ze.current,u=$r(r,u));var x=n.getDerivedStateFromProps,y=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==o||d!==u)&&cd(r,a,o,u),Et=!1;var v=r.memoizedState;a.state=v,Qo(r,o,a,i),d=r.memoizedState,l!==o||v!==d||Me.current||Et?(typeof x=="function"&&(Ys(r,n,x,o),d=r.memoizedState),(l=Et||dd(r,n,l,o,v,d,u))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(r.flags|=4194308)):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=d),a.props=o,a.state=d,a.context=u,o=l):(typeof a.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{a=r.stateNode,sp(e,r),l=r.memoizedProps,u=r.type===r.elementType?l:rt(r.type,l),a.props=u,y=r.pendingProps,v=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=Je(d):(d=Le(n)?pr:ze.current,d=$r(r,d));var m=n.getDerivedStateFromProps;(x=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==y||v!==d)&&cd(r,a,o,d),Et=!1,v=r.memoizedState,a.state=v,Qo(r,o,a,i);var b=r.memoizedState;l!==y||v!==b||Me.current||Et?(typeof m=="function"&&(Ys(r,n,m,o),b=r.memoizedState),(u=Et||dd(r,n,u,o,v,b,d)||!1)?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,b,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,b,d)),typeof a.componentDidUpdate=="function"&&(r.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=b),a.props=o,a.state=b,a.context=d,o=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(r.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(r.flags|=1024),o=!1)}return Ks(e,r,n,o,s,i)}function Ks(e,r,n,o,i,s){Ip(e,r);var a=(r.flags&128)!==0;if(!o&&!a)return i&&td(r,n,!1),zt(e,r,s);o=r.stateNode,q0.current=r;var l=a&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&a?(r.child=qr(r,e.child,null,s),r.child=qr(r,null,l,s)):Ne(e,r,l,s),r.memoizedState=o.state,i&&td(r,n,!0),r.child}function Rp(e){var r=e.stateNode;r.pendingContext?ed(e,r.pendingContext,r.pendingContext!==r.context):r.context&&ed(e,r.context,!1),Va(e,r.containerInfo)}function md(e,r,n,o,i){return Vr(),Fa(i),r.flags|=256,Ne(e,r,n,o),r.child}var Js={dehydrated:null,treeContext:null,retryLane:0};function Zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ep(e,r,n){var o=r.pendingProps,i=se.current,s=!1,a=(r.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(se,i&1),e===null)return Vs(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(a=o.children,e=o.fallback,s?(o=r.mode,s=r.child,a={mode:"hidden",children:a},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ji(a,o,0,null),e=cr(e,o,n,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=Zs(n),r.memoizedState=Js,e):Za(r,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Y0(e,r,a,o,l,i,n);if(s){s=o.fallback,a=r.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:o.children};return!(a&1)&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=d,r.deletions=null):(o=Yt(i,d),o.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Yt(l,s):(s=cr(s,a,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,a=e.child.memoizedState,a=a===null?Zs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,r.memoizedState=Js,o}return s=e.child,e=s.sibling,o=Yt(s,{mode:"visible",children:o.children}),!(r.mode&1)&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function Za(e,r){return r=ji({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function mo(e,r,n,o){return o!==null&&Fa(o),qr(r,e.child,null,n),e=Za(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Y0(e,r,n,o,i,s,a){if(n)return r.flags&256?(r.flags&=-257,o=ls(Error(E(422))),mo(e,r,a,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,i=r.mode,o=ji({mode:"visible",children:o.children},i,0,null),s=cr(s,i,a,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,r.mode&1&&qr(r,e.child,null,a),r.child.memoizedState=Zs(a),r.memoizedState=Js,s);if(!(r.mode&1))return mo(e,r,a,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var l=o.dgst;return o=l,s=Error(E(419)),o=ls(s,o,void 0),mo(e,r,a,o)}if(l=(a&e.childLanes)!==0,Ee||l){if(o=ye,o!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ct(e,i),at(o,e,i,-1))}return il(),o=ls(Error(E(421))),mo(e,r,a,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=sx.bind(null,e),i._reactRetry=r,null):(e=s.treeContext,De=Ht(i.nextSibling),Oe=r,ne=!0,ot=null,e!==null&&(Ye[Ge++]=vt,Ye[Ge++]=jt,Ye[Ge++]=ur,vt=e.id,jt=e.overflow,ur=r),r=Za(r,o.children),r.flags|=4096,r)}function yd(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),qs(e.return,r,n)}function ds(e,r,n,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i)}function Mp(e,r,n){var o=r.pendingProps,i=o.revealOrder,s=o.tail;if(Ne(e,r,o.children,n),o=se.current,o&2)o=o&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,n,r);else if(e.tag===19)yd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ee(se,o),!(r.mode&1))r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),ds(r,!1,i,n,s);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ds(r,!0,n,null,s);break;case"together":ds(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Wo(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function zt(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),xr|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(E(153));if(r.child!==null){for(e=r.child,n=Yt(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function G0(e,r,n){switch(r.tag){case 3:Rp(r),Vr();break;case 5:ap(r);break;case 1:Le(r.type)&&$o(r);break;case 4:Va(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;ee(Yo,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(ee(se,se.current&1),r.flags|=128,null):n&r.child.childLanes?Ep(e,r,n):(ee(se,se.current&1),e=zt(e,r,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(o=(n&r.childLanes)!==0,e.flags&128){if(o)return Mp(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),o)break;return null;case 22:case 23:return r.lanes=0,Tp(e,r,n)}return zt(e,r,n)}var Lp,ea,Bp,Ap;Lp=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ea=function(){};Bp=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,lr(ht.current);var s=null;switch(n){case"input":i=ws(e,i),o=ws(e,o),s=[];break;case"select":i=de({},i,{value:void 0}),o=de({},o,{value:void 0}),s=[];break;case"textarea":i=Cs(e,i),o=Cs(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Uo)}Ns(n,o);var a;n=null;for(u in i)if(!o.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_n.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in o){var d=o[u];if(l=i!=null?i[u]:void 0,o.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&l[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(s||(s=[]),s.push(u,n)),n=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_n.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&te("scroll",e),s||l===d||(s=[])):(s=s||[]).push(u,d))}n&&(s=s||[]).push("style",n);var u=s;(r.updateQueue=u)&&(r.flags|=4)}};Ap=function(e,r,n,o){n!==o&&(r.flags|=4)};function pn(e,r){if(!ne)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Se(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function Q0(e,r,n){var o=r.pendingProps;switch(Aa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(r),null;case 1:return Le(r.type)&&Ho(),Se(r),null;case 3:return o=r.stateNode,Yr(),re(Me),re(ze),Ya(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ho(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ot!==null&&(la(ot),ot=null))),ea(e,r),Se(r),null;case 5:qa(r);var i=lr(Dn.current);if(n=r.type,e!==null&&r.stateNode!=null)Bp(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(E(166));return Se(r),null}if(e=lr(ht.current),ho(r)){o=r.stateNode,n=r.type;var s=r.memoizedProps;switch(o[ft]=r,o[An]=s,e=(r.mode&1)!==0,n){case"dialog":te("cancel",o),te("close",o);break;case"iframe":case"object":case"embed":te("load",o);break;case"video":case"audio":for(i=0;i<gn.length;i++)te(gn[i],o);break;case"source":te("error",o);break;case"img":case"image":case"link":te("error",o),te("load",o);break;case"details":te("toggle",o);break;case"input":Nl(o,s),te("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},te("invalid",o);break;case"textarea":Pl(o,s),te("invalid",o)}Ns(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?o.textContent!==l&&(s.suppressHydrationWarning!==!0&&xo(o.textContent,l,e),i=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xo(o.textContent,l,e),i=["children",""+l]):_n.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&te("scroll",o)}switch(n){case"input":io(o),_l(o,s,!0);break;case"textarea":io(o),Wl(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Uo)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=a.createElement(n,{is:o.is}):(e=a.createElement(n),n==="select"&&(a=e,o.multiple?a.multiple=!0:o.size&&(a.size=o.size))):e=a.createElementNS(e,n),e[ft]=r,e[An]=o,Lp(e,r,!1,!1),r.stateNode=e;e:{switch(a=_s(n,o),n){case"dialog":te("cancel",e),te("close",e),i=o;break;case"iframe":case"object":case"embed":te("load",e),i=o;break;case"video":case"audio":for(i=0;i<gn.length;i++)te(gn[i],e);i=o;break;case"source":te("error",e),i=o;break;case"img":case"image":case"link":te("error",e),te("load",e),i=o;break;case"details":te("toggle",e),i=o;break;case"input":Nl(e,o),i=ws(e,o),te("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=de({},o,{value:void 0}),te("invalid",e);break;case"textarea":Pl(e,o),i=Cs(e,o),te("invalid",e);break;default:i=o}Ns(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?hc(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&fc(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Pn(e,d):typeof d=="number"&&Pn(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_n.hasOwnProperty(s)?d!=null&&s==="onScroll"&&te("scroll",e):d!=null&&ka(e,s,d,a))}switch(n){case"input":io(e),_l(e,o,!1);break;case"textarea":io(e),Wl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Xt(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Br(e,!!o.multiple,s,!1):o.defaultValue!=null&&Br(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Se(r),null;case 6:if(e&&r.stateNode!=null)Ap(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(E(166));if(n=lr(Dn.current),lr(ht.current),ho(r)){if(o=r.stateNode,n=r.memoizedProps,o[ft]=r,(s=o.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:xo(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(o.nodeValue,n,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[ft]=r,r.stateNode=o}return Se(r),null;case 13:if(re(se),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&De!==null&&r.mode&1&&!(r.flags&128))rp(),Vr(),r.flags|=98560,s=!1;else if(s=ho(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(E(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ft]=r}else Vr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Se(r),s=!1}else ot!==null&&(la(ot),ot=null),s=!0;if(!s)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,r.mode&1&&(e===null||se.current&1?ge===0&&(ge=3):il())),r.updateQueue!==null&&(r.flags|=4),Se(r),null);case 4:return Yr(),ea(e,r),e===null&&Ln(r.stateNode.containerInfo),Se(r),null;case 10:return Ua(r.type._context),Se(r),null;case 17:return Le(r.type)&&Ho(),Se(r),null;case 19:if(re(se),s=r.memoizedState,s===null)return Se(r),null;if(o=(r.flags&128)!==0,a=s.rendering,a===null)if(o)pn(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(a=Xo(e),a!==null){for(r.flags|=128,pn(s,!1),o=a.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)s=n,e=o,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),r.child}e=e.sibling}s.tail!==null&&ue()>Qr&&(r.flags|=128,o=!0,pn(s,!1),r.lanes=4194304)}else{if(!o)if(e=Xo(a),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),pn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ne)return Se(r),null}else 2*ue()-s.renderingStartTime>Qr&&n!==1073741824&&(r.flags|=128,o=!0,pn(s,!1),r.lanes=4194304);s.isBackwards?(a.sibling=r.child,r.child=a):(n=s.last,n!==null?n.sibling=a:r.child=a,s.last=a)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=ue(),r.sibling=null,n=se.current,ee(se,o?n&1|2:n&1),r):(Se(r),null);case 22:case 23:return ol(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&r.mode&1?Fe&1073741824&&(Se(r),r.subtreeFlags&6&&(r.flags|=8192)):Se(r),null;case 24:return null;case 25:return null}throw Error(E(156,r.tag))}function X0(e,r){switch(Aa(r),r.tag){case 1:return Le(r.type)&&Ho(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Yr(),re(Me),re(ze),Ya(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return qa(r),null;case 13:if(re(se),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(E(340));Vr()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return re(se),null;case 4:return Yr(),null;case 10:return Ua(r.type._context),null;case 22:case 23:return ol(),null;case 24:return null;default:return null}}var yo=!1,Ce=!1,K0=typeof WeakSet=="function"?WeakSet:Set,O=null;function Mr(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){ce(e,r,o)}else n.current=null}function ta(e,r,n){try{n()}catch(o){ce(e,r,o)}}var bd=!1;function J0(e,r){if(As=Fo,e=Hc(),La(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,d=-1,u=0,x=0,y=e,v=null;t:for(;;){for(var m;y!==n||i!==0&&y.nodeType!==3||(l=a+i),y!==s||o!==0&&y.nodeType!==3||(d=a+o),y.nodeType===3&&(a+=y.nodeValue.length),(m=y.firstChild)!==null;)v=y,y=m;for(;;){if(y===e)break t;if(v===n&&++u===i&&(l=a),v===s&&++x===o&&(d=a),(m=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=m}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fs={focusedElem:e,selectionRange:n},Fo=!1,O=r;O!==null;)if(r=O,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,O=e;else for(;O!==null;){r=O;try{var b=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var f=b.memoizedProps,j=b.memoizedState,c=r.stateNode,p=c.getSnapshotBeforeUpdate(r.elementType===r.type?f:rt(r.type,f),j);c.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=r.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(k){ce(r,r.return,k)}if(e=r.sibling,e!==null){e.return=r.return,O=e;break}O=r.return}return b=bd,bd=!1,b}function Cn(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ta(r,n,s)}i=i.next}while(i!==o)}}function bi(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function ra(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Fp(e){var r=e.alternate;r!==null&&(e.alternate=null,Fp(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[ft],delete r[An],delete r[Us],delete r[E0],delete r[M0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dp(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function na(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Uo));else if(o!==4&&(e=e.child,e!==null))for(na(e,r,n),e=e.sibling;e!==null;)na(e,r,n),e=e.sibling}function oa(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(oa(e,r,n),e=e.sibling;e!==null;)oa(e,r,n),e=e.sibling}var be=null,nt=!1;function It(e,r,n){for(n=n.child;n!==null;)Op(e,r,n),n=n.sibling}function Op(e,r,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:Ce||Mr(n,r);case 6:var o=be,i=nt;be=null,It(e,r,n),be=o,nt=i,be!==null&&(nt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(nt?(e=be,n=n.stateNode,e.nodeType===8?rs(e.parentNode,n):e.nodeType===1&&rs(e,n),Rn(e)):rs(be,n.stateNode));break;case 4:o=be,i=nt,be=n.stateNode.containerInfo,nt=!0,It(e,r,n),be=o,nt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ta(n,r,a),i=i.next}while(i!==o)}It(e,r,n);break;case 1:if(!Ce&&(Mr(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){ce(n,r,l)}It(e,r,n);break;case 21:It(e,r,n);break;case 22:n.mode&1?(Ce=(o=Ce)||n.memoizedState!==null,It(e,r,n),Ce=o):It(e,r,n);break;default:It(e,r,n)}}function jd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new K0),r.forEach(function(o){var i=ax.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function tt(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var s=e,a=r,l=a;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,nt=!1;break e;case 3:be=l.stateNode.containerInfo,nt=!0;break e;case 4:be=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(be===null)throw Error(E(160));Op(s,a,i),be=null,nt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(u){ce(i,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Up(r,e),r=r.sibling}function Up(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(r,e),pt(e),o&4){try{Cn(3,e,e.return),bi(3,e)}catch(f){ce(e,e.return,f)}try{Cn(5,e,e.return)}catch(f){ce(e,e.return,f)}}break;case 1:tt(r,e),pt(e),o&512&&n!==null&&Mr(n,n.return);break;case 5:if(tt(r,e),pt(e),o&512&&n!==null&&Mr(n,n.return),e.flags&32){var i=e.stateNode;try{Pn(i,"")}catch(f){ce(e,e.return,f)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&cc(i,s),_s(l,a);var u=_s(l,s);for(a=0;a<d.length;a+=2){var x=d[a],y=d[a+1];x==="style"?hc(i,y):x==="dangerouslySetInnerHTML"?fc(i,y):x==="children"?Pn(i,y):ka(i,x,y,u)}switch(l){case"input":ks(i,s);break;case"textarea":pc(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Br(i,!!s.multiple,m,!1):v!==!!s.multiple&&(s.defaultValue!=null?Br(i,!!s.multiple,s.defaultValue,!0):Br(i,!!s.multiple,s.multiple?[]:"",!1))}i[An]=s}catch(f){ce(e,e.return,f)}}break;case 6:if(tt(r,e),pt(e),o&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(f){ce(e,e.return,f)}}break;case 3:if(tt(r,e),pt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Rn(r.containerInfo)}catch(f){ce(e,e.return,f)}break;case 4:tt(r,e),pt(e);break;case 13:tt(r,e),pt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rl=ue())),o&4&&jd(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||x,tt(r,e),Ce=u):tt(r,e),pt(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!x&&e.mode&1)for(O=e,x=e.child;x!==null;){for(y=O=x;O!==null;){switch(v=O,m=v.child,v.tag){case 0:case 11:case 14:case 15:Cn(4,v,v.return);break;case 1:Mr(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){o=v,n=v.return;try{r=o,b.props=r.memoizedProps,b.state=r.memoizedState,b.componentWillUnmount()}catch(f){ce(o,n,f)}}break;case 5:Mr(v,v.return);break;case 22:if(v.memoizedState!==null){kd(y);continue}}m!==null?(m.return=v,O=m):kd(y)}x=x.sibling}e:for(x=null,y=e;;){if(y.tag===5){if(x===null){x=y;try{i=y.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,d=y.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=xc("display",a))}catch(f){ce(e,e.return,f)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=u?"":y.memoizedProps}catch(f){ce(e,e.return,f)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:tt(r,e),pt(e),o&4&&jd(e);break;case 21:break;default:tt(r,e),pt(e)}}function pt(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Dp(n)){var o=n;break e}n=n.return}throw Error(E(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Pn(i,""),o.flags&=-33);var s=vd(e);oa(e,s,i);break;case 3:case 4:var a=o.stateNode.containerInfo,l=vd(e);na(e,l,a);break;default:throw Error(E(161))}}catch(d){ce(e,e.return,d)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Z0(e,r,n){O=e,Hp(e)}function Hp(e,r,n){for(var o=(e.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&o){var a=i.memoizedState!==null||yo;if(!a){var l=i.alternate,d=l!==null&&l.memoizedState!==null||Ce;l=yo;var u=Ce;if(yo=a,(Ce=d)&&!u)for(O=i;O!==null;)a=O,d=a.child,a.tag===22&&a.memoizedState!==null?Sd(i):d!==null?(d.return=a,O=d):Sd(i);for(;s!==null;)O=s,Hp(s),s=s.sibling;O=i,yo=l,Ce=u}wd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):wd(e)}}function wd(e){for(;O!==null;){var r=O;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ce||bi(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ce)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:rt(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&sd(r,s,o);break;case 3:var a=r.updateQueue;if(a!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}sd(r,a,n)}break;case 5:var l=r.stateNode;if(n===null&&r.flags&4){n=l;var d=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var x=u.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&Rn(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||r.flags&512&&ra(r)}catch(v){ce(r,r.return,v)}}if(r===e){O=null;break}if(n=r.sibling,n!==null){n.return=r.return,O=n;break}O=r.return}}function kd(e){for(;O!==null;){var r=O;if(r===e){O=null;break}var n=r.sibling;if(n!==null){n.return=r.return,O=n;break}O=r.return}}function Sd(e){for(;O!==null;){var r=O;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{bi(4,r)}catch(d){ce(r,n,d)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(d){ce(r,i,d)}}var s=r.return;try{ra(r)}catch(d){ce(r,s,d)}break;case 5:var a=r.return;try{ra(r)}catch(d){ce(r,a,d)}}}catch(d){ce(r,r.return,d)}if(r===e){O=null;break}var l=r.sibling;if(l!==null){l.return=r.return,O=l;break}O=r.return}}var ex=Math.ceil,Zo=Pt.ReactCurrentDispatcher,el=Pt.ReactCurrentOwner,Ke=Pt.ReactCurrentBatchConfig,Q=0,ye=null,fe=null,je=0,Fe=0,Lr=tr(0),ge=0,$n=null,xr=0,vi=0,tl=0,zn=null,Re=null,rl=0,Qr=1/0,mt=null,ei=!1,ia=null,Vt=null,bo=!1,At=null,ti=0,Nn=0,sa=null,To=-1,Io=0;function _e(){return Q&6?ue():To!==-1?To:To=ue()}function qt(e){return e.mode&1?Q&2&&je!==0?je&-je:B0.transition!==null?(Io===0&&(Io=Nc()),Io):(e=K,e!==0||(e=window.event,e=e===void 0?16:Ec(e.type)),e):1}function at(e,r,n,o){if(50<Nn)throw Nn=0,sa=null,Error(E(185));Qn(e,n,o),(!(Q&2)||e!==ye)&&(e===ye&&(!(Q&2)&&(vi|=n),ge===4&&Lt(e,je)),Be(e,o),n===1&&Q===0&&!(r.mode&1)&&(Qr=ue()+500,gi&&rr()))}function Be(e,r){var n=e.callbackNode;Bf(e,r);var o=Ao(e,e===ye?je:0);if(o===0)n!==null&&Rl(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Rl(n),r===1)e.tag===0?L0(Cd.bind(null,e)):Zc(Cd.bind(null,e)),I0(function(){!(Q&6)&&rr()}),n=null;else{switch(_c(o)){case 1:n=_a;break;case 4:n=Cc;break;case 16:n=Bo;break;case 536870912:n=zc;break;default:n=Bo}n=Kp(n,$p.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function $p(e,r){if(To=-1,Io=0,Q&6)throw Error(E(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var o=Ao(e,e===ye?je:0);if(o===0)return null;if(o&30||o&e.expiredLanes||r)r=ri(e,o);else{r=o;var i=Q;Q|=2;var s=qp();(ye!==e||je!==r)&&(mt=null,Qr=ue()+500,dr(e,r));do try{nx();break}catch(l){Vp(e,l)}while(!0);Oa(),Zo.current=s,Q=i,fe!==null?r=0:(ye=null,je=0,r=ge)}if(r!==0){if(r===2&&(i=Rs(e),i!==0&&(o=i,r=aa(e,i))),r===1)throw n=$n,dr(e,0),Lt(e,o),Be(e,ue()),n;if(r===6)Lt(e,o);else{if(i=e.current.alternate,!(o&30)&&!tx(i)&&(r=ri(e,o),r===2&&(s=Rs(e),s!==0&&(o=s,r=aa(e,s))),r===1))throw n=$n,dr(e,0),Lt(e,o),Be(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(E(345));case 2:ir(e,Re,mt);break;case 3:if(Lt(e,o),(o&130023424)===o&&(r=rl+500-ue(),10<r)){if(Ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){_e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Os(ir.bind(null,e,Re,mt),r);break}ir(e,Re,mt);break;case 4:if(Lt(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var a=31-st(o);s=1<<a,a=r[a],a>i&&(i=a),o&=~s}if(o=i,o=ue()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*ex(o/1960))-o,10<o){e.timeoutHandle=Os(ir.bind(null,e,Re,mt),o);break}ir(e,Re,mt);break;case 5:ir(e,Re,mt);break;default:throw Error(E(329))}}}return Be(e,ue()),e.callbackNode===n?$p.bind(null,e):null}function aa(e,r){var n=zn;return e.current.memoizedState.isDehydrated&&(dr(e,r).flags|=256),e=ri(e,r),e!==2&&(r=Re,Re=n,r!==null&&la(r)),e}function la(e){Re===null?Re=e:Re.push.apply(Re,e)}function tx(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Lt(e,r){for(r&=~tl,r&=~vi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-st(r),o=1<<n;e[n]=-1,r&=~o}}function Cd(e){if(Q&6)throw Error(E(327));Ur();var r=Ao(e,0);if(!(r&1))return Be(e,ue()),null;var n=ri(e,r);if(e.tag!==0&&n===2){var o=Rs(e);o!==0&&(r=o,n=aa(e,o))}if(n===1)throw n=$n,dr(e,0),Lt(e,r),Be(e,ue()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,ir(e,Re,mt),Be(e,ue()),null}function nl(e,r){var n=Q;Q|=1;try{return e(r)}finally{Q=n,Q===0&&(Qr=ue()+500,gi&&rr())}}function hr(e){At!==null&&At.tag===0&&!(Q&6)&&Ur();var r=Q;Q|=1;var n=Ke.transition,o=K;try{if(Ke.transition=null,K=1,e)return e()}finally{K=o,Ke.transition=n,Q=r,!(Q&6)&&rr()}}function ol(){Fe=Lr.current,re(Lr)}function dr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,T0(n)),fe!==null)for(n=fe.return;n!==null;){var o=n;switch(Aa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ho();break;case 3:Yr(),re(Me),re(ze),Ya();break;case 5:qa(o);break;case 4:Yr();break;case 13:re(se);break;case 19:re(se);break;case 10:Ua(o.type._context);break;case 22:case 23:ol()}n=n.return}if(ye=e,fe=e=Yt(e.current,null),je=Fe=r,ge=0,$n=null,tl=vi=xr=0,Re=zn=null,ar!==null){for(r=0;r<ar.length;r++)if(n=ar[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,o.next=a}n.pending=o}ar=null}return e}function Vp(e,r){do{var n=fe;try{if(Oa(),_o.current=Jo,Ko){for(var o=ae.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}Ko=!1}if(fr=0,me=he=ae=null,Sn=!1,On=0,el.current=null,n===null||n.return===null){ge=1,$n=r,fe=null;break}e:{var s=e,a=n.return,l=n,d=r;if(r=je,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,x=l,y=x.tag;if(!(x.mode&1)&&(y===0||y===11||y===15)){var v=x.alternate;v?(x.updateQueue=v.updateQueue,x.memoizedState=v.memoizedState,x.lanes=v.lanes):(x.updateQueue=null,x.memoizedState=null)}var m=ud(a);if(m!==null){m.flags&=-257,fd(m,a,l,s,r),m.mode&1&&pd(s,u,r),r=m,d=u;var b=r.updateQueue;if(b===null){var f=new Set;f.add(d),r.updateQueue=f}else b.add(d);break e}else{if(!(r&1)){pd(s,u,r),il();break e}d=Error(E(426))}}else if(ne&&l.mode&1){var j=ud(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),fd(j,a,l,s,r),Fa(Gr(d,l));break e}}s=d=Gr(d,l),ge!==4&&(ge=2),zn===null?zn=[s]:zn.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var c=_p(s,d,r);id(s,c);break e;case 1:l=d;var p=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Vt===null||!Vt.has(h)))){s.flags|=65536,r&=-r,s.lanes|=r;var k=Pp(s,l,r);id(s,k);break e}}s=s.return}while(s!==null)}Gp(n)}catch(C){r=C,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function qp(){var e=Zo.current;return Zo.current=Jo,e===null?Jo:e}function il(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||!(xr&268435455)&&!(vi&268435455)||Lt(ye,je)}function ri(e,r){var n=Q;Q|=2;var o=qp();(ye!==e||je!==r)&&(mt=null,dr(e,r));do try{rx();break}catch(i){Vp(e,i)}while(!0);if(Oa(),Q=n,Zo.current=o,fe!==null)throw Error(E(261));return ye=null,je=0,ge}function rx(){for(;fe!==null;)Yp(fe)}function nx(){for(;fe!==null&&!_f();)Yp(fe)}function Yp(e){var r=Xp(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,r===null?Gp(e):fe=r,el.current=null}function Gp(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=X0(n,r),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=Q0(n,r,Fe),n!==null){fe=n;return}if(r=r.sibling,r!==null){fe=r;return}fe=r=e}while(r!==null);ge===0&&(ge=5)}function ir(e,r,n){var o=K,i=Ke.transition;try{Ke.transition=null,K=1,ox(e,r,n,o)}finally{Ke.transition=i,K=o}return null}function ox(e,r,n,o){do Ur();while(At!==null);if(Q&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Af(e,s),e===ye&&(fe=ye=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,Kp(Bo,function(){return Ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ke.transition,Ke.transition=null;var a=K;K=1;var l=Q;Q|=4,el.current=null,J0(e,n),Up(n,e),S0(Fs),Fo=!!As,Fs=As=null,e.current=n,Z0(n),Pf(),Q=l,K=a,Ke.transition=s}else e.current=n;if(bo&&(bo=!1,At=e,ti=i),s=e.pendingLanes,s===0&&(Vt=null),If(n.stateNode),Be(e,ue()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(ei)throw ei=!1,e=ia,ia=null,e;return ti&1&&e.tag!==0&&Ur(),s=e.pendingLanes,s&1?e===sa?Nn++:(Nn=0,sa=e):Nn=0,rr(),null}function Ur(){if(At!==null){var e=_c(ti),r=Ke.transition,n=K;try{if(Ke.transition=null,K=16>e?16:e,At===null)var o=!1;else{if(e=At,At=null,ti=0,Q&6)throw Error(E(331));var i=Q;for(Q|=4,O=e.current;O!==null;){var s=O,a=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(O=u;O!==null;){var x=O;switch(x.tag){case 0:case 11:case 15:Cn(8,x,s)}var y=x.child;if(y!==null)y.return=x,O=y;else for(;O!==null;){x=O;var v=x.sibling,m=x.return;if(Fp(x),x===u){O=null;break}if(v!==null){v.return=m,O=v;break}O=m}}}var b=s.alternate;if(b!==null){var f=b.child;if(f!==null){b.child=null;do{var j=f.sibling;f.sibling=null,f=j}while(f!==null)}}O=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,O=a;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Cn(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,O=c;break e}O=s.return}}var p=e.current;for(O=p;O!==null;){a=O;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,O=h;else e:for(a=p;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bi(9,l)}}catch(C){ce(l,l.return,C)}if(l===a){O=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,O=k;break e}O=l.return}}if(Q=i,rr(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(pi,e)}catch{}o=!0}return o}finally{K=n,Ke.transition=r}}return!1}function zd(e,r,n){r=Gr(n,r),r=_p(e,r,1),e=$t(e,r,1),r=_e(),e!==null&&(Qn(e,1,r),Be(e,r))}function ce(e,r,n){if(e.tag===3)zd(e,e,n);else for(;r!==null;){if(r.tag===3){zd(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Vt===null||!Vt.has(o))){e=Gr(n,e),e=Pp(r,e,1),r=$t(r,e,1),e=_e(),r!==null&&(Qn(r,1,e),Be(r,e));break}}r=r.return}}function ix(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=_e(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(je&n)===n&&(ge===4||ge===3&&(je&130023424)===je&&500>ue()-rl?dr(e,0):tl|=n),Be(e,r)}function Qp(e,r){r===0&&(e.mode&1?(r=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):r=1);var n=_e();e=Ct(e,r),e!==null&&(Qn(e,r,n),Be(e,n))}function sx(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Qp(e,n)}function ax(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(E(314))}o!==null&&o.delete(r),Qp(e,n)}var Xp;Xp=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||Me.current)Ee=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return Ee=!1,G0(e,r,n);Ee=!!(e.flags&131072)}else Ee=!1,ne&&r.flags&1048576&&ep(r,qo,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Wo(e,r),e=r.pendingProps;var i=$r(r,ze.current);Or(r,n),i=Qa(null,r,o,e,i,n);var s=Xa();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Le(o)?(s=!0,$o(r)):s=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$a(r),i.updater=yi,r.stateNode=i,i._reactInternals=r,Gs(r,o,e,n),r=Ks(null,r,o,!0,s,n)):(r.tag=0,ne&&s&&Ba(r),Ne(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(Wo(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=dx(o),e=rt(o,e),i){case 0:r=Xs(null,r,o,e,n);break e;case 1:r=gd(null,r,o,e,n);break e;case 11:r=xd(null,r,o,e,n);break e;case 14:r=hd(null,r,o,rt(o.type,e),n);break e}throw Error(E(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:rt(o,i),Xs(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:rt(o,i),gd(e,r,o,i,n);case 3:e:{if(Rp(r),e===null)throw Error(E(387));o=r.pendingProps,s=r.memoizedState,i=s.element,sp(e,r),Qo(r,o,null,n);var a=r.memoizedState;if(o=a.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){i=Gr(Error(E(423)),r),r=md(e,r,o,n,i);break e}else if(o!==i){i=Gr(Error(E(424)),r),r=md(e,r,o,n,i);break e}else for(De=Ht(r.stateNode.containerInfo.firstChild),Oe=r,ne=!0,ot=null,n=op(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),o===i){r=zt(e,r,n);break e}Ne(e,r,o,n)}r=r.child}return r;case 5:return ap(r),e===null&&Vs(r),o=r.type,i=r.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Ds(o,i)?a=null:s!==null&&Ds(o,s)&&(r.flags|=32),Ip(e,r),Ne(e,r,a,n),r.child;case 6:return e===null&&Vs(r),null;case 13:return Ep(e,r,n);case 4:return Va(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=qr(r,null,o,n):Ne(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:rt(o,i),xd(e,r,o,i,n);case 7:return Ne(e,r,r.pendingProps,n),r.child;case 8:return Ne(e,r,r.pendingProps.children,n),r.child;case 12:return Ne(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,s=r.memoizedProps,a=i.value,ee(Yo,o._currentValue),o._currentValue=a,s!==null)if(ct(s.value,a)){if(s.children===i.children&&!Me.current){r=zt(e,r,n);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var d=l.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=wt(-1,n&-n),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var x=u.pending;x===null?d.next=d:(d.next=x.next,x.next=d),u.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),qs(s.return,n,r),l.lanes|=n;break}d=d.next}}else if(s.tag===10)a=s.type===r.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(E(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qs(a,n,r),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===r){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ne(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Or(r,n),i=Je(i),o=o(i),r.flags|=1,Ne(e,r,o,n),r.child;case 14:return o=r.type,i=rt(o,r.pendingProps),i=rt(o.type,i),hd(e,r,o,i,n);case 15:return Wp(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:rt(o,i),Wo(e,r),r.tag=1,Le(o)?(e=!0,$o(r)):e=!1,Or(r,n),Np(r,o,i),Gs(r,o,i,n),Ks(null,r,o,!0,e,n);case 19:return Mp(e,r,n);case 22:return Tp(e,r,n)}throw Error(E(156,r.tag))};function Kp(e,r){return Sc(e,r)}function lx(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,r,n,o){return new lx(e,r,n,o)}function sl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dx(e){if(typeof e=="function")return sl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ca)return 11;if(e===za)return 14}return 2}function Yt(e,r){var n=e.alternate;return n===null?(n=Qe(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,r,n,o,i,s){var a=2;if(o=e,typeof e=="function")sl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case zr:return cr(n.children,i,s,r);case Sa:a=8,i|=8;break;case ys:return e=Qe(12,n,r,i|2),e.elementType=ys,e.lanes=s,e;case bs:return e=Qe(13,n,r,i),e.elementType=bs,e.lanes=s,e;case vs:return e=Qe(19,n,r,i),e.elementType=vs,e.lanes=s,e;case ac:return ji(n,i,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ic:a=10;break e;case sc:a=9;break e;case Ca:a=11;break e;case za:a=14;break e;case Rt:a=16,o=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return r=Qe(a,n,r,i),r.elementType=e,r.type=o,r.lanes=s,r}function cr(e,r,n,o){return e=Qe(7,e,o,r),e.lanes=n,e}function ji(e,r,n,o){return e=Qe(22,e,o,r),e.elementType=ac,e.lanes=n,e.stateNode={isHidden:!1},e}function cs(e,r,n){return e=Qe(6,e,null,r),e.lanes=n,e}function ps(e,r,n){return r=Qe(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function cx(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function al(e,r,n,o,i,s,a,l,d){return e=new cx(e,r,n,l,d),r===1?(r=1,s===!0&&(r|=8)):r=0,s=Qe(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(s),e}function px(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function Jp(e){if(!e)return Kt;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(E(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Le(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Le(n))return Jc(e,n,r)}return r}function Zp(e,r,n,o,i,s,a,l,d){return e=al(n,o,!0,e,i,s,a,l,d),e.context=Jp(null),n=e.current,o=_e(),i=qt(n),s=wt(o,i),s.callback=r??null,$t(n,s,i),e.current.lanes=i,Qn(e,i,o),Be(e,o),e}function wi(e,r,n,o){var i=r.current,s=_e(),a=qt(i);return n=Jp(n),r.context===null?r.context=n:r.pendingContext=n,r=wt(s,a),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=$t(i,r,a),e!==null&&(at(e,i,a,s),No(e,i,a)),a}function ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function ll(e,r){Nd(e,r),(e=e.alternate)&&Nd(e,r)}function ux(){return null}var eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function dl(e){this._internalRoot=e}ki.prototype.render=dl.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(E(409));wi(e,r,null,null)};ki.prototype.unmount=dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;hr(function(){wi(null,e,null,null)}),r[St]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var r=Tc();e={blockedOn:null,target:e,priority:r};for(var n=0;n<Mt.length&&r!==0&&r<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&Rc(e)}};function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Si(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function fx(e,r,n,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var u=ni(a);s.call(u)}}var a=Zp(r,o,e,0,null,!1,!1,"",_d);return e._reactRootContainer=a,e[St]=a.current,Ln(e.nodeType===8?e.parentNode:e),hr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var l=o;o=function(){var u=ni(d);l.call(u)}}var d=al(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=d,e[St]=d.current,Ln(e.nodeType===8?e.parentNode:e),hr(function(){wi(r,d,n,o)}),d}function Ci(e,r,n,o,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var d=ni(a);l.call(d)}}wi(r,a,e,i)}else a=fx(n,r,e,i,o);return ni(a)}Pc=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=hn(r.pendingLanes);n!==0&&(Pa(r,n|1),Be(r,ue()),!(Q&6)&&(Qr=ue()+500,rr()))}break;case 13:hr(function(){var o=Ct(e,1);if(o!==null){var i=_e();at(o,e,1,i)}}),ll(e,1)}};Wa=function(e){if(e.tag===13){var r=Ct(e,134217728);if(r!==null){var n=_e();at(r,e,134217728,n)}ll(e,134217728)}};Wc=function(e){if(e.tag===13){var r=qt(e),n=Ct(e,r);if(n!==null){var o=_e();at(n,e,r,o)}ll(e,r)}};Tc=function(){return K};Ic=function(e,r){var n=K;try{return K=e,r()}finally{K=n}};Ws=function(e,r,n){switch(r){case"input":if(ks(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=hi(o);if(!i)throw Error(E(90));dc(o),ks(o,i)}}}break;case"textarea":pc(e,n);break;case"select":r=n.value,r!=null&&Br(e,!!n.multiple,r,!1)}};yc=nl;bc=hr;var xx={usingClientEntryPoint:!1,Events:[Kn,Wr,hi,gc,mc,nl]},un={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hx={bundleType:un.bundleType,version:un.version,rendererPackageName:un.rendererPackageName,rendererConfig:un.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wc(e),e===null?null:e.stateNode},findFiberByHostInstance:un.findFiberByHostInstance||ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{pi=vo.inject(hx),xt=vo}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx;$e.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cl(r))throw Error(E(200));return px(e,r,null,n)};$e.createRoot=function(e,r){if(!cl(e))throw Error(E(299));var n=!1,o="",i=eu;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=al(e,1,!1,null,null,n,!1,o,i),e[St]=r.current,Ln(e.nodeType===8?e.parentNode:e),new dl(r)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=wc(r),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return hr(e)};$e.hydrate=function(e,r,n){if(!Si(r))throw Error(E(200));return Ci(null,e,r,!0,n)};$e.hydrateRoot=function(e,r,n){if(!cl(e))throw Error(E(405));var o=n!=null&&n.hydratedSources||null,i=!1,s="",a=eu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),r=Zp(r,null,e,1,n??null,i,!1,s,a),e[St]=r.current,Ln(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new ki(r)};$e.render=function(e,r,n){if(!Si(r))throw Error(E(200));return Ci(null,e,r,!1,n)};$e.unmountComponentAtNode=function(e){if(!Si(e))throw Error(E(40));return e._reactRootContainer?(hr(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};$e.unstable_batchedUpdates=nl;$e.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!Si(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ci(e,r,n,!1,o)};$e.version="18.3.1-next-f1338f8080-20240426";function tu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tu)}catch(e){console.error(e)}}tu(),tc.exports=$e;var gx=tc.exports,Pd=gx;gs.createRoot=Pd.createRoot,gs.hydrateRoot=Pd.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vn(){return Vn=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Vn.apply(null,arguments)}var Ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ft||(Ft={}));const Wd="popstate";function mx(e){e===void 0&&(e={});function r(o,i){let{pathname:s,search:a,hash:l}=o.location;return da("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){return typeof i=="string"?i:oi(i)}return bx(r,n,null,e)}function le(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function ru(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function yx(){return Math.random().toString(36).substr(2,8)}function Td(e,r){return{usr:e.state,key:e.key,idx:r}}function da(e,r,n,o){return n===void 0&&(n=null),Vn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?en(r):r,{state:n,key:r&&r.key||o||yx()})}function oi(e){let{pathname:r="/",search:n="",hash:o=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(r+=o.charAt(0)==="#"?o:"#"+o),r}function en(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let o=e.indexOf("?");o>=0&&(r.search=e.substr(o),e=e.substr(0,o)),e&&(r.pathname=e)}return r}function bx(e,r,n,o){o===void 0&&(o={});let{window:i=document.defaultView,v5Compat:s=!1}=o,a=i.history,l=Ft.Pop,d=null,u=x();u==null&&(u=0,a.replaceState(Vn({},a.state,{idx:u}),""));function x(){return(a.state||{idx:null}).idx}function y(){l=Ft.Pop;let j=x(),c=j==null?null:j-u;u=j,d&&d({action:l,location:f.location,delta:c})}function v(j,c){l=Ft.Push;let p=da(f.location,j,c);u=x()+1;let h=Td(p,u),k=f.createHref(p);try{a.pushState(h,"",k)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(k)}s&&d&&d({action:l,location:f.location,delta:1})}function m(j,c){l=Ft.Replace;let p=da(f.location,j,c);u=x();let h=Td(p,u),k=f.createHref(p);a.replaceState(h,"",k),s&&d&&d({action:l,location:f.location,delta:0})}function b(j){let c=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof j=="string"?j:oi(j);return p=p.replace(/ $/,"%20"),le(c,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,c)}let f={get action(){return l},get location(){return e(i,a)},listen(j){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Wd,y),d=j,()=>{i.removeEventListener(Wd,y),d=null}},createHref(j){return r(i,j)},createURL:b,encodeLocation(j){let c=b(j);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:v,replace:m,go(j){return a.go(j)}};return f}var Id;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Id||(Id={}));function vx(e,r,n){return n===void 0&&(n="/"),jx(e,r,n)}function jx(e,r,n,o){let i=typeof r=="string"?en(r):r,s=Xr(i.pathname||"/",n);if(s==null)return null;let a=nu(e);wx(a);let l=null,d=Rx(s);for(let u=0;l==null&&u<a.length;++u)l=Tx(a[u],d);return l}function nu(e,r,n,o){r===void 0&&(r=[]),n===void 0&&(n=[]),o===void 0&&(o="");let i=(s,a,l)=>{let d={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};d.relativePath.startsWith("/")&&(le(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let u=Gt([o,d.relativePath]),x=n.concat(d);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nu(s.children,r,x,u)),!(s.path==null&&!s.index)&&r.push({path:u,score:Px(u,s.index),routesMeta:x})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let d of ou(s.path))i(s,a,d)}),r}function ou(e){let r=e.split("/");if(r.length===0)return[];let[n,...o]=r,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(o.length===0)return i?[s,""]:[s];let a=ou(o.join("/")),l=[];return l.push(...a.map(d=>d===""?s:[s,d].join("/"))),i&&l.push(...a),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function wx(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:Wx(r.routesMeta.map(o=>o.childrenIndex),n.routesMeta.map(o=>o.childrenIndex)))}const kx=/^:[\w-]+$/,Sx=3,Cx=2,zx=1,Nx=10,_x=-2,Rd=e=>e==="*";function Px(e,r){let n=e.split("/"),o=n.length;return n.some(Rd)&&(o+=_x),r&&(o+=Cx),n.filter(i=>!Rd(i)).reduce((i,s)=>i+(kx.test(s)?Sx:s===""?zx:Nx),o)}function Wx(e,r){return e.length===r.length&&e.slice(0,-1).every((o,i)=>o===r[i])?e[e.length-1]-r[r.length-1]:0}function Tx(e,r,n){let{routesMeta:o}=e,i={},s="/",a=[];for(let l=0;l<o.length;++l){let d=o[l],u=l===o.length-1,x=s==="/"?r:r.slice(s.length)||"/",y=ca({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},x),v=d.route;if(!y)return null;Object.assign(i,y.params),a.push({params:i,pathname:Gt([s,y.pathname]),pathnameBase:Lx(Gt([s,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(s=Gt([s,y.pathnameBase]))}return a}function ca(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=Ix(e.path,e.caseSensitive,e.end),i=r.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:o.reduce((u,x,y)=>{let{paramName:v,isOptional:m}=x;if(v==="*"){let f=l[y]||"";a=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}const b=l[y];return m&&!b?u[v]=void 0:u[v]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Ix(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),ru(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,d)=>(o.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,r?void 0:"i"),o]}function Rx(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ru(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function Xr(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,o=e.charAt(n);return o&&o!=="/"?null:e.slice(n)||"/"}function Ex(e,r){r===void 0&&(r="/");let{pathname:n,search:o="",hash:i=""}=typeof e=="string"?en(e):e,s;return n?(n=iu(n),n.startsWith("/")?s=Ed(n.substring(1),"/"):s=Ed(n,r)):s=r,{pathname:s,search:Bx(o),hash:Ax(i)}}function Ed(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function us(e,r,n,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Mx(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function pl(e,r){let n=Mx(e);return r?n.map((o,i)=>i===n.length-1?o.pathname:o.pathnameBase):n.map(o=>o.pathnameBase)}function ul(e,r,n,o){o===void 0&&(o=!1);let i;typeof e=="string"?i=en(e):(i=Vn({},e),le(!i.pathname||!i.pathname.includes("?"),us("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),us("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),us("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let y=r.length-1;if(!o&&a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),y-=1;i.pathname=v.join("/")}l=y>=0?r[y]:"/"}let d=Ex(i,l),u=a&&a!=="/"&&a.endsWith("/"),x=(s||a===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(u||x)&&(d.pathname+="/"),d}const iu=e=>e.replace(/\/\/+/g,"/"),Gt=e=>iu(e.join("/")),Lx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ax=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const su=["post","put","patch","delete"];new Set(su);const Dx=["get",...su];new Set(Dx);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qn(){return qn=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},qn.apply(null,arguments)}const zi=g.createContext(null),au=g.createContext(null),Wt=g.createContext(null),Ni=g.createContext(null),gt=g.createContext({outlet:null,matches:[],isDataRoute:!1}),lu=g.createContext(null);function Ox(e,r){let{relative:n}=r===void 0?{}:r;tn()||le(!1);let{basename:o,navigator:i}=g.useContext(Wt),{hash:s,pathname:a,search:l}=Pi(e,{relative:n}),d=a;return o!=="/"&&(d=a==="/"?o:Gt([o,a])),i.createHref({pathname:d,search:l,hash:s})}function tn(){return g.useContext(Ni)!=null}function kr(){return tn()||le(!1),g.useContext(Ni).location}function du(e){g.useContext(Wt).static||g.useLayoutEffect(e)}function oe(){let{isDataRoute:e}=g.useContext(gt);return e?rh():Ux()}function Ux(){tn()||le(!1);let e=g.useContext(zi),{basename:r,future:n,navigator:o}=g.useContext(Wt),{matches:i}=g.useContext(gt),{pathname:s}=kr(),a=JSON.stringify(pl(i,n.v7_relativeSplatPath)),l=g.useRef(!1);return du(()=>{l.current=!0}),g.useCallback(function(u,x){if(x===void 0&&(x={}),!l.current)return;if(typeof u=="number"){o.go(u);return}let y=ul(u,JSON.parse(a),s,x.relative==="path");e==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:Gt([r,y.pathname])),(x.replace?o.replace:o.push)(y,x.state,x)},[r,o,a,s,e])}const Hx=g.createContext(null);function $x(e){let r=g.useContext(gt).outlet;return r&&g.createElement(Hx.Provider,{value:e},r)}function _i(){let{matches:e}=g.useContext(gt),r=e[e.length-1];return r?r.params:{}}function Pi(e,r){let{relative:n}=r===void 0?{}:r,{future:o}=g.useContext(Wt),{matches:i}=g.useContext(gt),{pathname:s}=kr(),a=JSON.stringify(pl(i,o.v7_relativeSplatPath));return g.useMemo(()=>ul(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function Vx(e,r){return qx(e,r)}function qx(e,r,n,o){tn()||le(!1);let{navigator:i}=g.useContext(Wt),{matches:s}=g.useContext(gt),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let u=kr(),x;if(r){var y;let j=typeof r=="string"?en(r):r;d==="/"||(y=j.pathname)!=null&&y.startsWith(d)||le(!1),x=j}else x=u;let v=x.pathname||"/",m=v;if(d!=="/"){let j=d.replace(/^\//,"").split("/");m="/"+v.replace(/^\//,"").split("/").slice(j.length).join("/")}let b=vx(e,{pathname:m}),f=Kx(b&&b.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Gt([d,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?d:Gt([d,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,o);return r&&f?g.createElement(Ni.Provider,{value:{location:qn({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Ft.Pop}},f):f}function Yx(){let e=th(),r=Fx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},r),n?g.createElement("pre",{style:i},n):null,null)}const Gx=g.createElement(Yx,null);class Qx extends g.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?g.createElement(gt.Provider,{value:this.props.routeContext},g.createElement(lu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xx(e){let{routeContext:r,match:n,children:o}=e,i=g.useContext(zi);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(gt.Provider,{value:r},o)}function Kx(e,r,n,o){var i;if(r===void 0&&(r=[]),n===void 0&&(n=null),o===void 0&&(o=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=o)!=null&&s.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let x=a.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);x>=0||le(!1),a=a.slice(0,Math.min(a.length,x+1))}let d=!1,u=-1;if(n&&o&&o.v7_partialHydration)for(let x=0;x<a.length;x++){let y=a[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(u=x),y.route.id){let{loaderData:v,errors:m}=n,b=y.route.loader&&v[y.route.id]===void 0&&(!m||m[y.route.id]===void 0);if(y.route.lazy||b){d=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((x,y,v)=>{let m,b=!1,f=null,j=null;n&&(m=l&&y.route.id?l[y.route.id]:void 0,f=y.route.errorElement||Gx,d&&(u<0&&v===0?(nh("route-fallback"),b=!0,j=null):u===v&&(b=!0,j=y.route.hydrateFallbackElement||null)));let c=r.concat(a.slice(0,v+1)),p=()=>{let h;return m?h=f:b?h=j:y.route.Component?h=g.createElement(y.route.Component,null):y.route.element?h=y.route.element:h=x,g.createElement(Xx,{match:y,routeContext:{outlet:x,matches:c,isDataRoute:n!=null},children:h})};return n&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?g.createElement(Qx,{location:n.location,revalidation:n.revalidation,component:f,error:m,children:p(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):p()},null)}var cu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cu||{}),pu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pu||{});function Jx(e){let r=g.useContext(zi);return r||le(!1),r}function Zx(e){let r=g.useContext(au);return r||le(!1),r}function eh(e){let r=g.useContext(gt);return r||le(!1),r}function uu(e){let r=eh(),n=r.matches[r.matches.length-1];return n.route.id||le(!1),n.route.id}function th(){var e;let r=g.useContext(lu),n=Zx(),o=uu();return r!==void 0?r:(e=n.errors)==null?void 0:e[o]}function rh(){let{router:e}=Jx(cu.UseNavigateStable),r=uu(pu.UseNavigateStable),n=g.useRef(!1);return du(()=>{n.current=!0}),g.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,qn({fromRouteId:r},s)))},[e,r])}const Md={};function nh(e,r,n){Md[e]||(Md[e]=!0)}function oh(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ii(e){let{to:r,replace:n,state:o,relative:i}=e;tn()||le(!1);let{future:s,static:a}=g.useContext(Wt),{matches:l}=g.useContext(gt),{pathname:d}=kr(),u=oe(),x=ul(r,pl(l,s.v7_relativeSplatPath),d,i==="path"),y=JSON.stringify(x);return g.useEffect(()=>u(JSON.parse(y),{replace:n,state:o,relative:i}),[u,y,i,n,o]),null}function fl(e){return $x(e.context)}function X(e){le(!1)}function ih(e){let{basename:r="/",children:n=null,location:o,navigationType:i=Ft.Pop,navigator:s,static:a=!1,future:l}=e;tn()&&le(!1);let d=r.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:d,navigator:s,static:a,future:qn({v7_relativeSplatPath:!1},l)}),[d,l,s,a]);typeof o=="string"&&(o=en(o));let{pathname:x="/",search:y="",hash:v="",state:m=null,key:b="default"}=o,f=g.useMemo(()=>{let j=Xr(x,d);return j==null?null:{location:{pathname:j,search:y,hash:v,state:m,key:b},navigationType:i}},[d,x,y,v,m,b,i]);return f==null?null:g.createElement(Wt.Provider,{value:u},g.createElement(Ni.Provider,{children:n,value:f}))}function sh(e){let{children:r,location:n}=e;return Vx(pa(r),n)}new Promise(()=>{});function pa(e,r){r===void 0&&(r=[]);let n=[];return g.Children.forEach(e,(o,i)=>{if(!g.isValidElement(o))return;let s=[...r,i];if(o.type===g.Fragment){n.push.apply(n,pa(o.props.children,s));return}o.type!==X&&le(!1),!o.props.index||!o.props.children||le(!1);let a={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(a.children=pa(o.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function si(){return si=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},si.apply(null,arguments)}function fu(e,r){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(r.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function ah(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function lh(e,r){return e.button===0&&(!r||r==="_self")&&!ah(e)}function ua(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((r,n)=>{let o=e[n];return r.concat(Array.isArray(o)?o.map(i=>[n,i]):[[n,o]])},[]))}function dh(e,r){let n=ua(e);return r&&r.forEach((o,i)=>{n.has(i)||r.getAll(i).forEach(s=>{n.append(i,s)})}),n}const ch=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ph=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],uh="6";try{window.__reactRouterVersion=uh}catch{}const fh=g.createContext({isTransitioning:!1}),xh="startTransition",Ld=of[xh];function hh(e){let{basename:r,children:n,future:o,window:i}=e,s=g.useRef();s.current==null&&(s.current=mx({window:i,v5Compat:!0}));let a=s.current,[l,d]=g.useState({action:a.action,location:a.location}),{v7_startTransition:u}=o||{},x=g.useCallback(y=>{u&&Ld?Ld(()=>d(y)):d(y)},[d,u]);return g.useLayoutEffect(()=>a.listen(x),[a,x]),g.useEffect(()=>oh(o),[o]),g.createElement(ih,{basename:r,children:n,location:l.location,navigationType:l.action,navigator:a,future:o})}const gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T=g.forwardRef(function(r,n){let{onClick:o,relative:i,reloadDocument:s,replace:a,state:l,target:d,to:u,preventScrollReset:x,viewTransition:y}=r,v=fu(r,ch),{basename:m}=g.useContext(Wt),b,f=!1;if(typeof u=="string"&&mh.test(u)&&(b=u,gh))try{let h=new URL(window.location.href),k=u.startsWith("//")?new URL(h.protocol+u):new URL(u),C=Xr(k.pathname,m);k.origin===h.origin&&C!=null?u=C+k.search+k.hash:f=!0}catch{}let j=Ox(u,{relative:i}),c=bh(u,{replace:a,state:l,target:d,preventScrollReset:x,relative:i,viewTransition:y});function p(h){o&&o(h),h.defaultPrevented||c(h)}return g.createElement("a",si({},v,{href:b||j,onClick:f||s?o:p,ref:n,target:d}))}),bt=g.forwardRef(function(r,n){let{"aria-current":o="page",caseSensitive:i=!1,className:s="",end:a=!1,style:l,to:d,viewTransition:u,children:x}=r,y=fu(r,ph),v=Pi(d,{relative:y.relative}),m=kr(),b=g.useContext(au),{navigator:f,basename:j}=g.useContext(Wt),c=b!=null&&vh(v)&&u===!0,p=f.encodeLocation?f.encodeLocation(v).pathname:v.pathname,h=m.pathname,k=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(h=h.toLowerCase(),k=k?k.toLowerCase():null,p=p.toLowerCase()),k&&j&&(k=Xr(k,j)||k);const C=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let w=h===p||!a&&h.startsWith(p)&&h.charAt(C)==="/",z=k!=null&&(k===p||!a&&k.startsWith(p)&&k.charAt(p.length)==="/"),P={isActive:w,isPending:z,isTransitioning:c},_=w?o:void 0,N;typeof s=="function"?N=s(P):N=[s,w?"active":null,z?"pending":null,c?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(P):l;return g.createElement(T,si({},y,{"aria-current":_,className:N,ref:n,style:W,to:d,viewTransition:u}),typeof x=="function"?x(P):x)});var fa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(fa||(fa={}));var Bd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bd||(Bd={}));function yh(e){let r=g.useContext(zi);return r||le(!1),r}function bh(e,r){let{target:n,replace:o,state:i,preventScrollReset:s,relative:a,viewTransition:l}=r===void 0?{}:r,d=oe(),u=kr(),x=Pi(e,{relative:a});return g.useCallback(y=>{if(lh(y,n)){y.preventDefault();let v=o!==void 0?o:oi(u)===oi(x);d(e,{replace:v,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[u,d,x,o,i,n,e,s,a,l])}function Wi(e){let r=g.useRef(ua(e)),n=g.useRef(!1),o=kr(),i=g.useMemo(()=>dh(o.search,n.current?null:r.current),[o.search]),s=oe(),a=g.useCallback((l,d)=>{const u=ua(typeof l=="function"?l(i):l);n.current=!0,s("?"+u,d)},[s,i]);return[i,a]}function vh(e,r){r===void 0&&(r={});let n=g.useContext(fh);n==null&&le(!1);let{basename:o}=yh(fa.useViewTransitionState),i=Pi(e,{relative:r.relative});if(!n.isTransitioning)return!1;let s=Xr(n.currentLocation.pathname,o)||n.currentLocation.pathname,a=Xr(n.nextLocation.pathname,o)||n.nextLocation.pathname;return ca(i.pathname,a)!=null||ca(i.pathname,s)!=null}const jh="/api",xu=()=>localStorage.getItem("partfoliohub_token"),fs=e=>localStorage.setItem("partfoliohub_token",e),xs=()=>localStorage.removeItem("partfoliohub_token");async function q(e,r={}){const n=xu(),o={Accept:"application/json",...r.headers||{}};r.body instanceof FormData||(o["Content-Type"]="application/json"),n&&(o.Authorization=`Bearer ${n}`);const i={...r,headers:o},s=e.startsWith("http")?e:`${jh}${e}`;try{const a=await fetch(s,i),l=await a.json().catch(()=>({}));if(!a.ok){const d=l.message||`Request failed with status ${a.status}`,u=new Error(d);throw u.status=a.status,u.errors=l.errors||{},u}return l}catch(a){throw console.error(`API Error on ${e}:`,a),a}}const A={register:e=>q("/auth/register",{method:"POST",body:JSON.stringify(e)}),login:e=>q("/auth/login",{method:"POST",body:JSON.stringify(e)}),socialLogin:e=>q("/auth/social",{method:"POST",body:JSON.stringify(e)}),logout:()=>q("/auth/logout",{method:"POST"}),getMe:()=>q("/auth/me"),forgotPassword:e=>q("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:e})}),resetPassword:e=>q("/auth/reset-password",{method:"POST",body:JSON.stringify(e)}),getProfile:e=>{const r=typeof e=="number"?`id=${e}`:`username=${encodeURIComponent(e)}`;return q(`/users/profile?${r}`)},updateProfile:e=>q("/users/update-profile",{method:"POST",body:JSON.stringify(e)}),setupProfile:e=>q("/users/setup-profile",{method:"POST",body:JSON.stringify(e)}),getCreators:(e={})=>{const r=new URLSearchParams(e).toString();return q(`/users/creators?${r}`)},getSettings:()=>q("/users/settings"),updateSettings:e=>q("/users/settings",{method:"POST",body:JSON.stringify(e)}),getPosts:(e={})=>{const r=new URLSearchParams(e).toString();return q(`/posts/list?${r}`)},getPost:e=>q(`/posts/get?id=${e}`),createPost:e=>q("/posts/create",{method:"POST",body:JSON.stringify(e)}),updatePost:e=>q("/posts/update",{method:"POST",body:JSON.stringify(e)}),deletePost:e=>q("/posts/delete",{method:"POST",body:JSON.stringify({id:e})}),getMyPosts:(e={})=>{const r=new URLSearchParams(e).toString();return q(`/posts/my-posts?${r}`)},toggleLike:e=>q("/social/like",{method:"POST",body:JSON.stringify({post_id:e})}),addComment:(e,r)=>q("/social/comment",{method:"POST",body:JSON.stringify({post_id:e,content:r})}),editComment:(e,r)=>q("/social/comment",{method:"PUT",body:JSON.stringify({comment_id:e,content:r})}),deleteComment:e=>q(`/social/comment?comment_id=${e}`,{method:"DELETE"}),toggleSave:e=>q("/social/save",{method:"POST",body:JSON.stringify({post_id:e})}),toggleFollow:e=>q("/social/follow",{method:"POST",body:JSON.stringify({user_id:e})}),getConversations:()=>q("/messages/conversations"),getMessages:(e={})=>{const r=new URLSearchParams(e).toString();return q(`/messages/messages?${r}`)},sendMessage:(e,r)=>q("/messages/send",{method:"POST",body:JSON.stringify({receiver_id:e,message:r})}),getNotifications:(e="all")=>q(`/notifications/list?type=${e}`),markNotificationRead:(e,r=!1)=>q("/notifications/read",{method:"POST",body:JSON.stringify({id:e,all:r})}),deleteNotification:e=>q("/notifications/delete",{method:"POST",body:JSON.stringify({id:e})}),getAnalytics:(e=7)=>q(`/analytics/overview?days=${e}`),search:e=>q(`/posts/search?q=${encodeURIComponent(e)}`),getAdminStats:()=>q("/admin/stats"),getAdminUsers:(e={})=>{const r=new URLSearchParams(e).toString();return q(`/admin/users?${r}`)},adminUserAction:(e,r,n={})=>q("/admin/users",{method:"POST",body:JSON.stringify({user_id:e,action:r,...n})}),getAdminReports:(e="all")=>q(`/admin/reports?status=${e}`),adminReportAction:(e,r,n="")=>q("/admin/report-action",{method:"POST",body:JSON.stringify({report_id:e,action:r,notes:n})}),uploadFile:async(e,r="posts")=>{const n=new FormData;return n.append("file",e),n.append("category",r),q("/upload",{method:"POST",body:n})}},hu=g.createContext(null),wh=({children:e})=>{const[r,n]=g.useState(null),[o,i]=g.useState(!0),s=g.useCallback(async()=>{var m;if(!xu()){n(null),i(!1);return}try{const b=await A.getMe();b.success&&((m=b.data)!=null&&m.user)?n(b.data.user):(xs(),n(null))}catch{xs(),n(null)}finally{i(!1)}},[]);g.useEffect(()=>{s()},[s]);const a=async v=>{var b;const m=await A.login(v);return m.success&&((b=m.data)!=null&&b.token)&&(fs(m.data.token),n(m.data.user)),m},l=async v=>{var b;const m=await A.register(v);return m.success&&((b=m.data)!=null&&b.token)&&(fs(m.data.token),n(m.data.user)),m},d=async v=>{var b;const m=await A.socialLogin(v);return m.success&&((b=m.data)!=null&&b.token)&&(fs(m.data.token),n(m.data.user)),m},u=async()=>{try{await A.logout()}catch{}finally{xs(),n(null)}},x=v=>{n(m=>m?{...m,...v}:null)},y={user:r,loading:o,isAuthenticated:!!r,isAdmin:(r==null?void 0:r.role)==="admin",login:a,register:l,loginWithSocial:d,logout:u,updateUser:x,refreshUser:s};return t.jsx(hu.Provider,{value:y,children:e})},pe=()=>{const e=g.useContext(hu);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gu=(...e)=>e.filter((r,n,o)=>!!r&&o.indexOf(r)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=g.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:a,...l},d)=>g.createElement("svg",{ref:d,...Sh,width:r,height:r,stroke:e,strokeWidth:o?Number(n)*24/Number(r):n,className:gu("lucide",i),...l},[...a.map(([u,x])=>g.createElement(u,x)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,r)=>{const n=g.forwardRef(({className:o,...i},s)=>g.createElement(Ch,{ref:s,iconNode:r,className:gu(`lucide-${kh(e)}`,o),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=I("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=I("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=I("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=I("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=I("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=I("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=I("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=I("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=I("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=I("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=I("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=I("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=I("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=I("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=I("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=I("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=I("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=I("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=I("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=I("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=I("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=I("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=I("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=I("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=I("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=I("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=I("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=I("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=I("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=I("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=I("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=I("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=I("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=I("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=I("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=I("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=I("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=I("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=I("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=I("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=I("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=I("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=I("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=I("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=I("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=I("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=I("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=I("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=I("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=I("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=I("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=I("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=I("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=I("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=I("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=I("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=I("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=I("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=I("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=I("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=I("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=I("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=I("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=I("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=I("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=I("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=I("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=I("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=I("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=I("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=I("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=I("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=I("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=I("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=I("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=I("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=I("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=I("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=I("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=I("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=I("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=I("SquarePlus",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=I("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=I("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=I("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=I("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=I("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=I("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=I("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=I("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=I("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=I("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=I("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=I("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=I("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=I("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=I("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Tu=g.createContext(null),ng=({children:e})=>{const[r,n]=g.useState([]),o=g.useCallback(s=>{n(a=>a.filter(l=>l.id!==s))},[]),i=g.useCallback((s,a="success",l=4e3)=>{const d=Date.now()+Math.random().toString(36).substring(2,6);n(u=>[...u,{id:d,message:s,type:a}]),l>0&&setTimeout(()=>{o(d)},l)},[o]);return t.jsxs(Tu.Provider,{value:{showToast:i,removeToast:o},children:[e,t.jsx("div",{className:"toast-container",children:r.map(s=>t.jsxs("div",{className:`toast toast-${s.type}`,children:[s.type==="success"&&t.jsx(it,{size:20,color:"var(--success)"}),s.type==="error"&&t.jsx(Ph,{size:20,color:"var(--danger)"}),s.type==="info"&&t.jsx(Cu,{size:20,color:"var(--primary)"}),t.jsx("span",{style:{flex:1},children:s.message}),t.jsx("button",{onClick:()=>o(s.id),style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8"},children:t.jsx(Ae,{size:16})})]},s.id))})]})},ie=()=>{const e=g.useContext(Tu);if(!e)throw new Error("useToast must be used within a ToastProvider");return e},vr=({size:e="medium",light:r=!1,linkTo:n="/",showText:o=!0})=>{const i={small:{icon:34,text:"1.2rem",gap:"9px"},medium:{icon:42,text:"1.4rem",gap:"11px"},large:{icon:56,text:"1.9rem",gap:"14px"}},s=i[e]||i.medium,a=t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:s.gap,textDecoration:"none"},children:[t.jsxs("svg",{width:s.icon,height:s.icon,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{flexShrink:0,filter:"drop-shadow(0 4px 12px rgba(110, 37, 232, 0.35))"},children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"logoPurpleGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#8435f5"}),t.jsx("stop",{offset:"50%",stopColor:"#6e25e8"}),t.jsx("stop",{offset:"100%",stopColor:"#5414d4"})]}),t.jsxs("linearGradient",{id:"logoNavyGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#0c1538"}),t.jsx("stop",{offset:"100%",stopColor:"#14214f"})]}),t.jsxs("linearGradient",{id:"logoFacetGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#9a52f8"}),t.jsx("stop",{offset:"100%",stopColor:"#6e25e8"})]})]}),t.jsx("path",{d:"M36 24 L36 54 L18 72 L18 36 C18 28 25 24 36 24 Z",fill:"url(#logoNavyGradient)"}),t.jsx("path",{d:"M36 54 L50 72 L36 86 L18 72 Z",fill:"#070c22"}),t.jsx("path",{d:"M36 22 C36 22 52 18 68 24 C82 30 85 46 82 58 C78 72 66 76 50 76 L50 86 L36 86 Z",fill:"url(#logoPurpleGradient)"}),t.jsx("path",{d:"M36 24 L50 34 L36 54 Z",fill:"url(#logoFacetGradient)"}),t.jsx("circle",{cx:"55",cy:"37",r:"7.2",fill:r?"#ffffff":"#0c1538"}),t.jsx("path",{d:"M44 53 C44 46.5 48.5 44.5 55 44.5 C61.5 44.5 66 46.5 66 53 Z",fill:r?"#ffffff":"#0c1538"})]}),o&&t.jsxs("span",{style:{fontSize:s.text,fontWeight:"900",letterSpacing:"-0.035em",lineHeight:1,display:"inline-flex",alignItems:"baseline"},children:[t.jsx("span",{style:{color:r?"#ffffff":"#0c1538"},children:"Partfolio"}),t.jsx("span",{style:{color:"#6e25e8",marginLeft:"1px"},children:"Hub"})]})]});return n?t.jsx(T,{to:n,style:{textDecoration:"none"},children:a}):a},og=({onOpenSearch:e})=>{const{user:r,isAuthenticated:n,logout:o}=pe(),[i,s]=g.useState(!1),[a,l]=g.useState(!1),d=oe(),u=async()=>{await o(),d("/login")};return t.jsxs("header",{style:{background:"#ffffff",borderBottom:"1px solid #ede8f8",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 12px rgba(110, 37, 232, 0.05)"},children:[t.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"74px"},children:[t.jsx(vr,{size:"medium",light:!1,linkTo:"/"}),t.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"8px"},className:"desktop-nav",children:[{to:"/",label:"Home"},{to:"/explore",label:"Explore"},{to:"/categories",label:"Categories"},{to:"/about",label:"About"}].map(x=>t.jsxs(bt,{to:x.to,className:({isActive:y})=>`navbar-hover-link ${y?"active":""}`,children:[t.jsx("span",{children:x.label}),t.jsx("span",{className:"navbar-hover-bar"})]},x.to))}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsxs("div",{onClick:e,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",background:"#f8f5ff",border:"1px solid #e7dcfa",borderRadius:"var(--radius-full)",color:"#6e25e8",fontSize:"0.88rem",cursor:"pointer",width:"210px",transition:"all 0.2s ease"},onMouseEnter:x=>x.currentTarget.style.borderColor="#6e25e8",onMouseLeave:x=>x.currentTarget.style.borderColor="#e7dcfa",children:[t.jsx(Tt,{size:15,color:"#6e25e8"}),t.jsx("span",{style:{color:"#8b5cf6",fontWeight:"500"},children:"Search Creators..."})]}),n?t.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs(T,{to:"/create-post",className:"btn btn-primary btn-sm",style:{display:"flex",alignItems:"center",gap:"6px",borderRadius:"var(--radius-full)",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)"},children:[t.jsx(vu,{size:15}),t.jsx("span",{className:"desktop-only-text",children:"Create"})]}),t.jsxs(T,{to:"/notifications",style:{position:"relative",color:"#6e25e8",padding:"6px"},children:[t.jsx(gr,{size:20}),(r==null?void 0:r.unread_notifications_count)>0&&t.jsx("span",{style:{position:"absolute",top:"2px",right:"2px",width:"8px",height:"8px",borderRadius:"50%",background:"#ef4444"}})]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{onClick:()=>l(!a),style:{display:"flex",alignItems:"center",gap:"8px",background:"none",border:"none",cursor:"pointer",padding:0},children:t.jsx("img",{src:(r==null?void 0:r.profile_photo)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:(r==null?void 0:r.full_name)||"Profile",style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",border:"2px solid #6e25e8"}})}),a&&t.jsxs("div",{style:{position:"absolute",right:0,top:"48px",width:"220px",background:"#ffffff",borderRadius:"var(--radius-md)",border:"1px solid #ede8f8",boxShadow:"0 12px 30px rgba(110, 37, 232, 0.15)",padding:"8px 0",zIndex:110},children:[t.jsxs("div",{style:{padding:"8px 16px",borderBottom:"1px solid #ede8f8"},children:[t.jsx("p",{style:{fontWeight:"800",fontSize:"0.9rem",color:"#0c1538"},children:r==null?void 0:r.full_name}),t.jsxs("p",{style:{fontSize:"0.75rem",color:"#6e25e8"},children:["@",r==null?void 0:r.username]})]}),t.jsxs(T,{to:"/dashboard",onClick:()=>l(!1),style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 16px",color:"#0c1538",fontSize:"0.88rem",textDecoration:"none"},children:[t.jsx(Mi,{size:16,color:"#6e25e8"}),"Dashboard"]}),t.jsxs(T,{to:"/my-profile",onClick:()=>l(!1),style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 16px",color:"#0c1538",fontSize:"0.88rem",textDecoration:"none"},children:[t.jsx(br,{size:16,color:"#6e25e8"}),"My Portfolio"]}),(r==null?void 0:r.role)==="admin"&&t.jsxs(T,{to:"/admin",onClick:()=>l(!1),style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 16px",color:"#7c3aed",fontWeight:"700",fontSize:"0.88rem",textDecoration:"none",background:"rgba(124, 58, 237, 0.08)"},children:[t.jsx(yr,{size:16,color:"#7c3aed"}),"Admin Portal"]}),t.jsx("div",{style:{borderTop:"1px solid #ede8f8",margin:"4px 0"}}),t.jsxs("button",{onClick:u,style:{display:"flex",alignItems:"center",gap:"8px",width:"100%",padding:"10px 16px",color:"var(--danger)",background:"none",border:"none",fontSize:"0.88rem",cursor:"pointer",textAlign:"left"},children:[t.jsx(gl,{size:16}),"Logout"]})]})]})]}):t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsxs(T,{to:"/admin/login",title:"Admin Control Center",style:{display:"flex",alignItems:"center",gap:"6px",padding:"8px 14px",borderRadius:"var(--radius-full)",border:"1px solid #e2e8f0",color:"#475569",fontWeight:"700",fontSize:"0.82rem",textDecoration:"none",background:"#f8fafc",transition:"all 0.2s ease"},onMouseEnter:x=>{x.currentTarget.style.borderColor="#7c3aed",x.currentTarget.style.color="#7c3aed",x.currentTarget.style.background="#f5f3ff"},onMouseLeave:x=>{x.currentTarget.style.borderColor="#e2e8f0",x.currentTarget.style.color="#475569",x.currentTarget.style.background="#f8fafc"},children:[t.jsx(yr,{size:14,color:"#7c3aed"}),t.jsx("span",{children:"Admin"})]}),t.jsx(T,{to:"/login",style:{padding:"9px 22px",borderRadius:"var(--radius-full)",background:"#0c1538",color:"#ffffff",fontWeight:"700",fontSize:"0.88rem",textDecoration:"none",transition:"all 0.2s ease"},onMouseEnter:x=>x.currentTarget.style.background="#182455",onMouseLeave:x=>x.currentTarget.style.background="#0c1538",children:"Login"}),t.jsx(T,{to:"/register",style:{padding:"9px 24px",borderRadius:"var(--radius-full)",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",color:"#ffffff",fontWeight:"700",fontSize:"0.88rem",textDecoration:"none",boxShadow:"0 4px 14px rgba(110, 37, 232, 0.4)",transition:"all 0.2s ease"},onMouseEnter:x=>x.currentTarget.style.boxShadow="0 6px 20px rgba(110, 37, 232, 0.6)",onMouseLeave:x=>x.currentTarget.style.boxShadow="0 4px 14px rgba(110, 37, 232, 0.4)",children:"Sign Up"})]}),t.jsx("button",{onClick:()=>s(!i),style:{display:"none",background:"none",border:"none",color:"#6e25e8",cursor:"pointer"},className:"mobile-menu-toggle",children:i?t.jsx(Ae,{size:24}):t.jsx(ml,{size:24})})]})]}),t.jsx("style",{children:`
        .navbar-hover-link {
          position: relative;
          color: #6e25e8;
          font-size: 0.96rem;
          font-weight: 700;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 9999px;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .navbar-hover-link:hover {
          color: #5511cc;
          background: rgba(110, 37, 232, 0.08);
          transform: translateY(-1px);
        }
        .navbar-hover-link .navbar-hover-bar {
          position: absolute;
          bottom: 2px;
          left: 50%;
          width: 0;
          height: 2.5px;
          background: linear-gradient(90deg, #7c2ae8, #6e25e8);
          border-radius: 99px;
          transform: translateX(-50%);
          transition: width 0.25s ease-out;
        }
        .navbar-hover-link:hover .navbar-hover-bar,
        .navbar-hover-link.active .navbar-hover-bar {
          width: 60%;
        }
        .navbar-hover-link.active {
          background: rgba(110, 37, 232, 0.08);
          font-weight: 800;
        }
      `})]})},ig=()=>t.jsxs("footer",{className:"hub-footer-wrapper",children:[t.jsx("div",{className:"hub-footer-glow-top"}),t.jsx("div",{className:"hub-footer-glow-right"}),t.jsxs("div",{className:"hub-footer-container",children:[t.jsxs("div",{className:"hub-footer-grid",children:[t.jsxs("div",{className:"hub-footer-col hub-footer-brand-col",children:[t.jsxs(T,{to:"/",className:"hub-footer-logo-link",children:[t.jsxs("svg",{width:"42",height:"42",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hub-footer-logo-svg",children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"footerLogoPurpleGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#9333ea"}),t.jsx("stop",{offset:"50%",stopColor:"#7c3aed"}),t.jsx("stop",{offset:"100%",stopColor:"#4f46e5"})]}),t.jsxs("linearGradient",{id:"footerLogoNavyGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#0b132e"}),t.jsx("stop",{offset:"100%",stopColor:"#1e295d"})]}),t.jsxs("linearGradient",{id:"footerLogoFacetGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#c084fc"}),t.jsx("stop",{offset:"100%",stopColor:"#7c3aed"})]})]}),t.jsx("path",{d:"M36 24 L36 54 L18 72 L18 36 C18 28 25 24 36 24 Z",fill:"url(#footerLogoNavyGradient)"}),t.jsx("path",{d:"M36 54 L50 72 L36 86 L18 72 Z",fill:"#030718"}),t.jsx("path",{d:"M36 22 C36 22 52 18 68 24 C82 30 85 46 82 58 C78 72 66 76 50 76 L50 86 L36 86 Z",fill:"url(#footerLogoPurpleGradient)"}),t.jsx("path",{d:"M36 24 L50 34 L36 54 Z",fill:"url(#footerLogoFacetGradient)"}),t.jsx("circle",{cx:"55",cy:"37",r:"7.2",fill:"#030718"}),t.jsx("path",{d:"M44 53 C44 46.5 48.5 44.5 55 44.5 C61.5 44.5 66 46.5 66 53 Z",fill:"#030718"})]}),t.jsxs("span",{className:"hub-footer-logo-title",children:[t.jsx("span",{className:"hub-brand-white",children:"Partfolio"}),t.jsx("span",{className:"hub-brand-purple",children:"Hub"})]})]}),t.jsxs("div",{className:"hub-footer-tagline",children:[t.jsx("span",{children:"Share your creativity "}),t.jsx("span",{className:"hub-purple-text",children:"with the world."})]}),t.jsx("p",{className:"hub-footer-desc",children:"PartfolioHub is a modern platform empowering creators to build profiles, showcase their portfolios, and unlock career opportunities."}),t.jsxs("div",{className:"hub-feature-list",children:[t.jsxs("div",{className:"hub-feature-item",children:[t.jsx("div",{className:"hub-feature-iconbox hub-blue-box",children:t.jsx(dt,{size:20,strokeWidth:2.4,color:"#ffffff"})}),t.jsxs("div",{className:"hub-feature-meta",children:[t.jsx("span",{className:"hub-feature-title",children:"Join Now"}),t.jsx("span",{className:"hub-feature-sub",children:"Create a free account"})]})]}),t.jsxs("div",{className:"hub-feature-item",children:[t.jsx("div",{className:"hub-feature-iconbox hub-blue-box",children:t.jsx(Yn,{size:20,strokeWidth:2.4,color:"#ffffff"})}),t.jsxs("div",{className:"hub-feature-meta",children:[t.jsx("span",{className:"hub-feature-title",children:"Showcase"}),t.jsx("span",{className:"hub-feature-sub",children:"Upload your portfolio"})]})]}),t.jsxs("div",{className:"hub-feature-item",children:[t.jsx("div",{className:"hub-feature-iconbox hub-blue-box",children:t.jsx(Pu,{size:20,strokeWidth:2.4,color:"#ffffff"})}),t.jsxs("div",{className:"hub-feature-meta",children:[t.jsx("span",{className:"hub-feature-title",children:"Get Opportunities"}),t.jsx("span",{className:"hub-feature-sub",children:"Connect with clients & peers"})]})]})]}),t.jsxs(T,{to:"/register",className:"hub-cta-btn",children:[t.jsx(yn,{size:18,strokeWidth:2.3,color:"#ffffff"}),t.jsx("span",{children:"Get Started"}),t.jsx(ve,{size:17,strokeWidth:2.3,color:"#ffffff"})]})]}),t.jsxs("div",{className:"hub-footer-col",children:[t.jsxs("div",{className:"hub-col-header",children:[t.jsx("span",{className:"hub-header-icon-wrapper",children:t.jsx(Lh,{size:21,strokeWidth:2.6,className:"hub-nav-chain-icon"})}),t.jsx("h3",{children:"Navigation"})]}),t.jsxs("ul",{className:"hub-links-list",children:[t.jsx("li",{children:t.jsxs(T,{to:"/",className:"hub-nav-link",children:[t.jsx(Su,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Home"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/creators",className:"hub-nav-link",children:[t.jsx(br,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Profile"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/explore",className:"hub-nav-link",children:[t.jsx(Od,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Portfolios"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/creators",className:"hub-nav-link",children:[t.jsx(dt,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Creators"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/messages",className:"hub-nav-link",children:[t.jsx(Pe,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Messages"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/notifications",className:"hub-nav-link",children:[t.jsx(gr,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Notifications"})]})}),t.jsx("li",{children:t.jsxs("a",{href:"mailto:info@portfoliohub.com?subject=Support%20Request",className:"hub-nav-link",children:[t.jsx(Wh,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Help & Support"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/terms",className:"hub-nav-link",children:[t.jsx(Zt,{size:18,strokeWidth:2.1,className:"hub-nav-icon"}),t.jsx("span",{children:"Terms & Privacy"})]})})]})]}),t.jsxs("div",{className:"hub-footer-col",children:[t.jsxs("div",{className:"hub-col-header",children:[t.jsx("span",{className:"hub-header-icon-wrapper",children:t.jsx(Od,{size:21,strokeWidth:2.6,className:"hub-cat-grid-icon"})}),t.jsx("h3",{children:"Categories"})]}),t.jsxs("ul",{className:"hub-links-list hub-categories-list",children:[t.jsx("li",{children:t.jsxs(T,{to:"/explore?category=web-development",className:"hub-cat-link",children:[t.jsx("span",{className:"hub-cat-icon-badge",style:{color:"#00d2ff"},children:t.jsx(Ii,{size:19,strokeWidth:2.4})}),t.jsx("span",{children:"Website Development"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/explore?category=system-development",className:"hub-cat-link",children:[t.jsx("span",{className:"hub-cat-icon-badge",style:{color:"#b26bf8"},children:t.jsx(zu,{size:19,strokeWidth:2.4})}),t.jsx("span",{children:"System Development"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/explore?category=graphic-design",className:"hub-cat-link",children:[t.jsx("span",{className:"hub-cat-icon-badge",style:{color:"#f43f9a"},children:t.jsx(Bi,{size:19,strokeWidth:2.4})}),t.jsx("span",{children:"Graphic Design"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/explore?category=video-editing",className:"hub-cat-link",children:[t.jsx("span",{className:"hub-cat-icon-badge",style:{color:"#ff7a29"},children:t.jsx(_t,{size:17,strokeWidth:2.4,fill:"#ff7a29"})}),t.jsx("span",{children:"Video Editing"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/explore?category=motion-graphics",className:"hub-cat-link",children:[t.jsx("span",{className:"hub-cat-icon-badge",style:{color:"#00e5a3"},children:t.jsx(rg,{size:19,strokeWidth:2.4})}),t.jsx("span",{children:"Motion Graphics"})]})}),t.jsx("li",{children:t.jsxs(T,{to:"/explore?category=digital-marketing",className:"hub-cat-link",children:[t.jsx("span",{className:"hub-cat-icon-badge",style:{color:"#f5b014"},children:t.jsx(bu,{size:19,strokeWidth:2.4})}),t.jsx("span",{children:"Digital Marketing"})]})})]}),t.jsxs(T,{to:"/create-post",className:"hub-callout-card",children:[t.jsx("div",{className:"hub-callout-icon-circle",children:t.jsx(Mh,{size:22,strokeWidth:2.2,color:"#ffffff"})}),t.jsxs("div",{className:"hub-callout-text",children:[t.jsx("div",{children:"Showcase your creative skills"}),t.jsx("div",{children:"and become a global creator!"})]}),t.jsx(ai,{size:18,strokeWidth:2.4,className:"hub-callout-arrow"})]})]}),t.jsxs("div",{className:"hub-footer-col",children:[t.jsxs("div",{className:"hub-col-header",children:[t.jsx("span",{className:"hub-header-icon-wrapper",children:t.jsx(ha,{size:21,strokeWidth:2.4,className:"hub-contact-mail-icon"})}),t.jsx("h3",{children:"Contact Us"})]}),t.jsxs("div",{className:"hub-contact-list",children:[t.jsxs("div",{className:"hub-contact-item",children:[t.jsx(Li,{size:19,strokeWidth:2.2,className:"hub-contact-icon"}),t.jsx("span",{children:"Mogadishu, Somalia"})]}),t.jsxs("a",{href:"mailto:info@portfoliohub.com",className:"hub-contact-item hub-contact-interactive",children:[t.jsx(ha,{size:19,strokeWidth:2.2,className:"hub-contact-icon"}),t.jsx("span",{children:"info@portfoliohub.com"})]}),t.jsxs("a",{href:"tel:0610734604",className:"hub-contact-item hub-contact-interactive hub-contact-phone",children:[t.jsx($h,{size:19,strokeWidth:2.2,className:"hub-contact-icon"}),t.jsx("strong",{children:"0610734604"})]}),t.jsxs("a",{href:"https://www.portfoliohub.com",target:"_blank",rel:"noreferrer",className:"hub-contact-item hub-contact-interactive",children:[t.jsx(Ei,{size:19,strokeWidth:2.2,className:"hub-contact-icon"}),t.jsx("span",{children:"www.portfoliohub.com"})]})]}),t.jsx("div",{className:"hub-contact-divider"}),t.jsx("div",{className:"hub-follow-title",children:"Follow Us"}),t.jsxs("div",{className:"hub-social-icons",children:[t.jsx("a",{href:"https://www.facebook.com/share/19KxQX3pxa/",target:"_blank",rel:"noopener noreferrer",className:"hub-social-btn hub-social-fb",title:"Follow on Facebook","aria-label":"Facebook",children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),t.jsx("a",{href:"https://x.com",target:"_blank",rel:"noopener noreferrer",className:"hub-social-btn hub-social-x",title:"Follow on X","aria-label":"X",children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),t.jsx("a",{href:"https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi",target:"_blank",rel:"noopener noreferrer",className:"hub-social-btn hub-social-ig",title:"Follow on Instagram (@abdala14564)","aria-label":"Instagram",children:t.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),t.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),t.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),t.jsx("a",{href:"https://www.tiktok.com/@abdala.creator",target:"_blank",rel:"noopener noreferrer",className:"hub-social-btn hub-social-tt",title:"Follow on TikTok (@abdala.creator)","aria-label":"TikTok",children:t.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49c.14-.14.27-.29.39-.45V9.48a8.16 8.16 0 0 0 5.38 2.05v-3.53a4.83 4.83 0 0 1 0-1.31z"})})}),t.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",className:"hub-social-btn hub-social-yt",title:"Subscribe on YouTube","aria-label":"YouTube",children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})})]}),t.jsxs("div",{className:"hub-signature-slogan",children:[t.jsx("span",{className:"hub-script-text",children:"Build · Showcase · Grow"}),t.jsxs("svg",{className:"hub-script-swoosh",viewBox:"0 0 160 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M10 12 C 45 4, 105 5, 150 14",stroke:"url(#scriptSwooshGradient)",strokeWidth:"4",strokeLinecap:"round"}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:"scriptSwooshGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[t.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),t.jsx("stop",{offset:"50%",stopColor:"#a855f7"}),t.jsx("stop",{offset:"100%",stopColor:"#3b82f6"})]})})]})]})]})]}),t.jsxs("div",{className:"hub-footer-bottom",children:[t.jsxs("div",{className:"hub-bottom-left",children:[t.jsx("span",{children:"© 2026 PartfolioHub. All rights reserved."}),t.jsx("span",{className:"hub-bottom-divider",children:"|"}),t.jsx("span",{className:"hub-bottom-motto",children:"Your creativity is your future."})]}),t.jsxs("div",{className:"hub-bottom-right",children:[t.jsx(Zt,{size:17,strokeWidth:2.2,className:"hub-bottom-shield"}),t.jsx(T,{to:"/privacy",className:"hub-bottom-link",children:"Privacy Policy"}),t.jsx("span",{className:"hub-bottom-divider",children:"|"}),t.jsx(T,{to:"/terms",className:"hub-bottom-link",children:"Terms of Service"}),t.jsx("span",{className:"hub-bottom-divider",children:"|"}),t.jsx(T,{to:"/admin/login",className:"hub-bottom-link",style:{color:"#a78bfa",fontWeight:"600"},children:"Admin Portal"})]})]})]}),t.jsx("div",{className:"hub-bottom-waves","aria-hidden":"true",children:t.jsxs("svg",{viewBox:"0 0 1440 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",children:[t.jsx("path",{d:"M0 60 C 240 110, 480 30, 720 70 C 960 110, 1200 20, 1440 65 L 1440 120 L 0 120 Z",fill:"url(#bottomWaveGradient1)",opacity:"0.35"}),t.jsx("path",{d:"M0 80 C 300 20, 600 110, 900 40 C 1140 0, 1320 80, 1440 90 L 1440 120 L 0 120 Z",fill:"url(#bottomWaveGradient2)",opacity:"0.25"}),t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"bottomWaveGradient1",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[t.jsx("stop",{offset:"0%",stopColor:"#4f46e5"}),t.jsx("stop",{offset:"50%",stopColor:"#7c3aed"}),t.jsx("stop",{offset:"100%",stopColor:"#2563eb"})]}),t.jsxs("linearGradient",{id:"bottomWaveGradient2",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[t.jsx("stop",{offset:"0%",stopColor:"#7c3aed"}),t.jsx("stop",{offset:"60%",stopColor:"#3b82f6"}),t.jsx("stop",{offset:"100%",stopColor:"#6366f1"})]})]})]})}),t.jsx("style",{children:`
        /* Wrapper & Cosmic Theme */
        .hub-footer-wrapper {
          background-color: #030614;
          background-image: 
            radial-gradient(ellipse at 15% 0%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 20%, rgba(124, 58, 237, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 90%, rgba(79, 70, 229, 0.18) 0%, transparent 70%);
          color: #94a3b8;
          position: relative;
          overflow: hidden;
          padding-top: 60px;
          padding-bottom: 24px;
          border-top: 1px solid rgba(124, 58, 237, 0.22);
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
        }

        .hub-footer-glow-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.8) 50%, transparent 100%);
          pointer-events: none;
        }

        .hub-footer-glow-right {
          position: absolute;
          top: 10%;
          right: -5%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .hub-footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* 4 Column Layout */
        .hub-footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.9fr 1.15fr 1.1fr;
          gap: 38px;
          margin-bottom: 48px;
        }

        /* Brand Column (Col 1) */
        .hub-footer-logo-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          margin-bottom: 16px;
        }

        .hub-footer-logo-svg {
          flex-shrink: 0;
          filter: drop-shadow(0 0 16px rgba(124, 58, 237, 0.5));
          transition: transform 0.25s ease;
        }

        .hub-footer-logo-link:hover .hub-footer-logo-svg {
          transform: scale(1.06);
        }

        .hub-footer-logo-title {
          font-size: 1.75rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          display: flex;
          align-items: baseline;
        }

        .hub-brand-white {
          color: #ffffff;
        }

        .hub-brand-purple {
          color: #9333ea;
          margin-left: 1px;
          text-shadow: 0 0 14px rgba(147, 51, 234, 0.5);
        }

        .hub-footer-tagline {
          font-size: 1.05rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .hub-purple-text {
          color: #b26bf8;
          text-shadow: 0 0 12px rgba(178, 107, 248, 0.4);
        }

        .hub-footer-desc {
          font-size: 0.86rem;
          line-height: 1.65;
          color: #8fa0be;
          margin-bottom: 22px;
          max-width: 360px;
        }

        /* 3 Micro Features */
        .hub-feature-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 26px;
        }

        .hub-feature-item {
          display: flex;
          align-items: center;
          gap: 14px;
          transition: transform 0.2s ease;
        }

        .hub-feature-item:hover {
          transform: translateX(3px);
        }

        .hub-feature-iconbox {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hub-blue-box {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.45);
          border: 1px solid rgba(147, 197, 253, 0.2);
        }

        .hub-feature-item:hover .hub-feature-iconbox {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.7);
        }

        .hub-feature-meta {
          display: flex;
          flex-direction: column;
        }

        .hub-feature-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
        }

        .hub-feature-sub {
          font-size: 0.8rem;
          color: #8da1bf;
          line-height: 1.3;
          margin-top: 2px;
        }

        /* CTA Button */
        .hub-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 800;
          padding: 13px 26px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 6px 22px rgba(99, 102, 241, 0.55);
          border: 1px solid rgba(196, 181, 253, 0.35);
          transition: all 0.25s ease;
          width: fit-content;
        }

        .hub-cta-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 28px rgba(99, 102, 241, 0.75);
          filter: brightness(1.08);
        }

        /* Column Headers */
        .hub-col-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
        }

        .hub-col-header h3 {
          font-size: 1.2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.015em;
          margin: 0;
        }

        .hub-header-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .hub-nav-chain-icon {
          color: #8b5cf6;
          transform: rotate(-45deg);
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
        }

        .hub-cat-grid-icon {
          color: #8b5cf6;
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
        }

        .hub-contact-mail-icon {
          color: #8b5cf6;
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.6));
        }

        /* Navigation List */
        .hub-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .hub-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a4b3cd;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .hub-nav-icon {
          color: #8da1bf;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .hub-nav-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .hub-nav-link:hover .hub-nav-icon {
          color: #a855f7;
          filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.7));
        }

        /* Categories List */
        .hub-categories-list {
          gap: 13px;
          margin-bottom: 22px;
        }

        .hub-cat-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a4b3cd;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .hub-cat-icon-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .hub-cat-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .hub-cat-link:hover .hub-cat-icon-badge {
          transform: scale(1.15);
          filter: drop-shadow(0 0 8px currentColor);
        }

        /* Bottom Callout Banner Card */
        .hub-callout-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.5) 0%, rgba(19, 21, 56, 0.5) 100%);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 14px;
          padding: 12px 14px;
          text-decoration: none;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
          margin-top: 10px;
        }

        .hub-callout-card:hover {
          background: linear-gradient(135deg, rgba(46, 38, 115, 0.65) 0%, rgba(29, 31, 84, 0.65) 100%);
          border-color: rgba(147, 51, 234, 0.65);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.25);
          transform: translateY(-2px);
        }

        .hub-callout-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.25);
          border: 1px solid rgba(139, 92, 246, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #c084fc;
        }

        .hub-callout-text {
          font-size: 0.77rem;
          font-weight: 600;
          color: #e2e8f0;
          line-height: 1.35;
          flex: 1;
        }

        .hub-callout-arrow {
          color: #818cf8;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }

        .hub-callout-card:hover .hub-callout-arrow {
          transform: translateX(3px);
          color: #ffffff;
        }

        /* Contact Us Column */
        .hub-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 22px;
        }

        .hub-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #cbd5e1;
          font-size: 0.92rem;
          font-weight: 500;
          text-decoration: none;
        }

        .hub-contact-interactive {
          transition: all 0.2s ease;
          width: fit-content;
        }

        .hub-contact-interactive:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .hub-contact-phone strong {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        .hub-contact-icon {
          color: #818cf8;
          flex-shrink: 0;
        }

        .hub-contact-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin-bottom: 18px;
        }

        .hub-follow-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
        }

        /* Social Icons */
        .hub-social-icons {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
        }

        .hub-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(30, 58, 138, 0.28);
          border: 1px solid rgba(99, 102, 241, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .hub-social-btn:hover {
          background: #6366f1;
          border-color: #818cf8;
          box-shadow: 0 0 16px rgba(99, 102, 241, 0.7);
          transform: translateY(-3px);
        }

        .hub-social-fb:hover {
          background: #1877f2 !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 16px rgba(24, 119, 242, 0.7) !important;
        }

        .hub-social-x:hover {
          background: #000000 !important;
          border-color: #64748b !important;
          box-shadow: 0 0 16px rgba(255, 255, 255, 0.3) !important;
        }

        .hub-social-ig:hover {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%) !important;
          border-color: #ec4899 !important;
          box-shadow: 0 0 16px rgba(236, 72, 153, 0.7) !important;
        }

        .hub-social-tt:hover {
          background: #000000 !important;
          border-color: #00f2fe !important;
          box-shadow: -2px 0 12px rgba(254, 44, 85, 0.8), 2px 0 12px rgba(0, 242, 254, 0.8) !important;
        }

        .hub-social-yt:hover {
          background: #ff0000 !important;
          border-color: #ef4444 !important;
          box-shadow: 0 0 16px rgba(255, 0, 0, 0.7) !important;
        }

        /* Handwriting Signature Slogan */
        .hub-signature-slogan {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 4px;
        }

        .hub-script-text {
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 1.55rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          transform: rotate(-1.5deg);
        }

        .hub-script-swoosh {
          width: 140px;
          height: 18px;
          margin-top: -6px;
          margin-left: 28px;
          filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.6));
        }

        /* Bottom Bar */
        .hub-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          padding-top: 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.84rem;
          color: #7b8fa8;
          position: relative;
          z-index: 3;
        }

        .hub-bottom-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hub-bottom-divider {
          color: rgba(255, 255, 255, 0.15);
        }

        .hub-bottom-motto {
          color: #94a3b8;
        }

        .hub-bottom-right {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hub-bottom-shield {
          color: #818cf8;
          margin-right: -6px;
        }

        .hub-bottom-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .hub-bottom-link:hover {
          color: #ffffff;
        }

        /* Bottom Wave Curves */
        .hub-bottom-waves {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80px;
          pointer-events: none;
          z-index: 1;
        }

        .hub-bottom-waves svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1080px) {
          .hub-footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 680px) {
          .hub-footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .hub-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          .hub-bottom-left, .hub-bottom-right {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .hub-bottom-divider {
            display: none;
          }
        }
      `})]}),Iu=({isOpen:e,onClose:r})=>{var x,y,v,m,b,f,j;const[n,o]=g.useState(""),[i,s]=g.useState(null),[a,l]=g.useState(!1),d=oe();if(g.useEffect(()=>{if(!n.trim()){s(null);return}const c=setTimeout(async()=>{l(!0);try{const p=await A.search(n.trim());p.success&&s(p.data)}catch(p){console.error(p)}finally{l(!1)}},250);return()=>clearTimeout(c)},[n]),!e)return null;const u=c=>{d(c),r()};return t.jsxs("div",{className:"modal-overlay",onClick:r,style:{alignItems:"flex-start",paddingTop:"80px"},children:[t.jsxs("div",{className:"modal-box",onClick:c=>c.stopPropagation(),style:{maxWidth:"640px",borderRadius:"var(--radius-lg)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px 20px",borderBottom:"1px solid var(--border-color)"},children:[t.jsx(Tt,{size:20,color:"var(--primary)"}),t.jsx("input",{autoFocus:!0,type:"text",placeholder:"Search creators, posts, projects, skills...",value:n,onChange:c=>o(c.target.value),style:{flex:1,border:"none",outline:"none",fontSize:"1.05rem",color:"var(--text-main)",background:"transparent"}}),n&&t.jsx("button",{onClick:()=>o(""),style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8"},children:t.jsx(Ae,{size:18})})]}),t.jsxs("div",{style:{maxHeight:"450px",overflowY:"auto",padding:"16px"},children:[a&&t.jsx("p",{style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:"Searching platform..."}),!a&&i&&t.jsxs("div",{children:[((x=i.creators)==null?void 0:x.length)>0&&t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("p",{style:{fontSize:"0.78rem",fontWeight:"700",textTransform:"uppercase",color:"var(--text-light)",marginBottom:"8px"},children:"Creators"}),i.creators.map(c=>t.jsxs("div",{onClick:()=>u(`/profile/${c.username}`),style:{display:"flex",alignItems:"center",gap:"12px",padding:"8px 12px",borderRadius:"var(--radius-md)",cursor:"pointer",transition:"background 0.15s"},className:"search-item-hover",children:[t.jsx("img",{src:c.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:c.full_name,style:{width:"32px",height:"32px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1},children:[t.jsx("p",{style:{fontSize:"0.9rem",fontWeight:"600",color:"var(--text-main)"},children:c.full_name}),t.jsxs("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["@",c.username," • ",c.professional_title]})]})]},c.id))]}),(((y=i.projects)==null?void 0:y.length)>0||((v=i.posts)==null?void 0:v.length)>0)&&t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("p",{style:{fontSize:"0.78rem",fontWeight:"700",textTransform:"uppercase",color:"var(--text-light)",marginBottom:"8px"},children:"Posts & Projects"}),[...i.projects||[],...i.posts||[]].map(c=>t.jsxs("div",{onClick:()=>u(c.post_type==="project"?`/project/${c.id}`:c.post_type==="video"?`/post/${c.id}/video`:`/post/${c.id}`),style:{display:"flex",alignItems:"center",gap:"12px",padding:"8px 12px",borderRadius:"var(--radius-md)",cursor:"pointer"},className:"search-item-hover",children:[t.jsx("img",{src:c.cover_image,alt:c.title,style:{width:"42px",height:"42px",borderRadius:"8px",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1},children:[t.jsx("p",{style:{fontSize:"0.9rem",fontWeight:"600",color:"var(--text-main)"},children:c.title}),t.jsxs("p",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:["by ",c.full_name||c.username," • ",c.category_name]})]})]},c.id))]}),((m=i.categories)==null?void 0:m.length)>0&&t.jsxs("div",{children:[t.jsx("p",{style:{fontSize:"0.78rem",fontWeight:"700",textTransform:"uppercase",color:"var(--text-light)",marginBottom:"8px"},children:"Categories"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:i.categories.map(c=>t.jsx("span",{onClick:()=>u(`/explore?category=${c.slug}`),className:"badge badge-primary",style:{cursor:"pointer",padding:"6px 12px"},children:c.name},c.id))})]}),((b=i.creators)==null?void 0:b.length)===0&&((f=i.posts)==null?void 0:f.length)===0&&((j=i.projects)==null?void 0:j.length)===0&&t.jsxs("p",{style:{textAlign:"center",padding:"24px",color:"var(--text-muted)"},children:['No exact results found for "',n,'". Try a different keyword.']})]}),!n&&t.jsx("p",{style:{textAlign:"center",padding:"24px",color:"var(--text-muted)",fontSize:"0.9rem"},children:"Type to search creators, design portfolios, showreels, code repos and categories."})]})]}),t.jsx("style",{children:`
        .search-item-hover:hover {
          background: #f1f5f9;
        }
      `})]})},sg=()=>{const[e,r]=g.useState(!1),{isAuthenticated:n}=pe();return t.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[t.jsx(og,{onOpenSearch:()=>r(!0)}),t.jsx("main",{style:{flex:1},children:t.jsx(fl,{})}),t.jsx(ig,{}),t.jsxs("nav",{className:"mobile-bottom-nav",children:[t.jsxs(bt,{to:"/",className:({isActive:o})=>`mobile-nav-item ${o?"active":""}`,children:[t.jsx(Su,{size:19}),t.jsx("span",{children:"Home"})]}),t.jsxs(bt,{to:"/explore",className:({isActive:o})=>`mobile-nav-item ${o?"active":""}`,children:[t.jsx(li,{size:19}),t.jsx("span",{children:"Explore"})]}),t.jsxs(bt,{to:"/creators",className:({isActive:o})=>`mobile-nav-item ${o?"active":""}`,children:[t.jsx(dt,{size:19}),t.jsx("span",{children:"Creators"})]}),t.jsxs(bt,{to:n?"/dashboard":"/login",className:({isActive:o})=>`mobile-nav-item ${o?"active":""}`,children:[t.jsx(Mi,{size:19}),t.jsx("span",{children:"Dashboard"})]}),t.jsxs(bt,{to:n?"/my-profile":"/login",className:({isActive:o})=>`mobile-nav-item ${o?"active":""}`,children:[t.jsx(br,{size:19}),t.jsx("span",{children:n?"Profile":"Login"})]})]}),t.jsx(Iu,{isOpen:e,onClose:()=>r(!1)})]})},ag=({mobileOpen:e,onClose:r})=>{const{user:n,logout:o}=pe(),i=oe(),s=async()=>{await o(),i("/login")},a=[{name:"Dashboard",path:"/dashboard",icon:Mi},{name:"My Profile",path:"/my-profile",icon:br},{name:"Create Post",path:"/create-post",icon:Xh},{name:"My Posts",path:"/my-posts",icon:Jt},{name:"Explore",path:"/explore",icon:li},{name:"Messages",path:"/messages",icon:Pe,badge:n==null?void 0:n.unread_messages_count},{name:"Notifications",path:"/notifications",icon:gr,badge:n==null?void 0:n.unread_notifications_count},{name:"Analytics",path:"/analytics",icon:bu},{name:"Settings",path:"/settings",icon:Gh}];return t.jsxs(t.Fragment,{children:[e&&t.jsx("div",{onClick:r,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:105,backdropFilter:"blur(2px)"}}),t.jsxs("aside",{className:`dashboard-sidebar ${e?"mobile-open":""}`,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"24px 20px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[t.jsx(vr,{size:"small",light:!0,linkTo:"/"}),e&&t.jsx("button",{onClick:r,style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer"},children:t.jsx(Ae,{size:20})})]}),t.jsxs("nav",{style:{padding:"20px 12px",flex:1,display:"flex",flexDirection:"column",gap:"6px",overflowY:"auto"},children:[a.map(l=>{const d=l.icon;return t.jsxs(bt,{to:l.path,onClick:r,className:({isActive:u})=>`sidebar-link ${u?"active":""}`,children:[t.jsx(d,{size:19}),t.jsx("span",{style:{flex:1},children:l.name}),l.badge>0&&t.jsx("span",{style:{background:"#6366f1",color:"#ffffff",fontSize:"0.72rem",fontWeight:"700",padding:"2px 7px",borderRadius:"12px"},children:l.badge})]},l.path)}),(n==null?void 0:n.role)==="admin"&&t.jsxs(bt,{to:"/admin",onClick:r,className:({isActive:l})=>`sidebar-link ${l?"active":""}`,style:{color:"#a78bfa",marginTop:"10px"},children:[t.jsx(ga,{size:19}),t.jsx("span",{children:"Admin Portal"})]})]}),t.jsxs("div",{style:{padding:"16px",borderTop:"1px solid rgba(255,255,255,0.06)",background:"rgba(0,0,0,0.15)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"14px"},children:[t.jsx("img",{src:(n==null?void 0:n.profile_photo)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:n==null?void 0:n.full_name,style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[t.jsx("p",{style:{color:"#ffffff",fontSize:"0.88rem",fontWeight:"600",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:n==null?void 0:n.full_name}),t.jsxs("p",{style:{color:"#94a3b8",fontSize:"0.75rem",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:["@",n==null?void 0:n.username]})]})]}),t.jsxs("button",{onClick:s,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"9px",background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.25)",borderRadius:"var(--radius-sm)",color:"#f87171",fontSize:"0.85rem",fontWeight:"600",cursor:"pointer",transition:"all 0.2s"},children:[t.jsx(gl,{size:16})," Logout"]})]})]}),t.jsx("style",{children:`
        .dashboard-sidebar {
          width: 260px;
          background: #0f172a;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 100;
          transition: transform 0.3s ease;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 16px;
          border-radius: var(--radius-md);
          color: #94a3b8;
          font-size: 0.92rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .sidebar-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }
        .sidebar-link.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
          color: #818cf8;
          font-weight: 600;
          border-left: 3px solid #6366f1;
        }

        @media (max-width: 960px) {
          .dashboard-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            transform: translateX(-100%);
            z-index: 110;
          }
          .dashboard-sidebar.mobile-open {
            transform: translateX(0);
          }
        }
      `})]})},lg=({onToggleSidebar:e,onOpenSearch:r})=>{const{user:n}=pe();return t.jsxs("header",{style:{height:"70px",background:"#ffffff",borderBottom:"1px solid var(--border-color)",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:90},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[t.jsx("button",{onClick:e,style:{display:"none",background:"none",border:"none",color:"var(--text-main)",cursor:"pointer"},className:"header-menu-btn",children:t.jsx(ml,{size:22})}),t.jsxs("div",{onClick:r,style:{display:"flex",alignItems:"center",gap:"10px",background:"var(--bg-main)",border:"1px solid var(--border-color)",padding:"8px 16px",borderRadius:"var(--radius-full)",width:"320px",cursor:"pointer",color:"var(--text-muted)",fontSize:"0.88rem"},className:"header-search-bar",children:[t.jsx(Tt,{size:16}),t.jsx("span",{children:"Search posts, creators, skills..."})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[t.jsxs(T,{to:"/create-post",className:"btn btn-primary btn-sm",style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(yl,{size:16}),t.jsx("span",{className:"create-btn-text",children:"New Post"})]}),t.jsxs(T,{to:"/messages",style:{position:"relative",color:"var(--text-muted)",display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"50%",background:"var(--bg-main)",border:"1px solid var(--border-color)"},children:[t.jsx(Pe,{size:18}),(n==null?void 0:n.unread_messages_count)>0&&t.jsx("span",{style:{position:"absolute",top:"6px",right:"6px",width:"8px",height:"8px",borderRadius:"50%",background:"#ef4444"}})]}),t.jsxs(T,{to:"/notifications",style:{position:"relative",color:"var(--text-muted)",display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"50%",background:"var(--bg-main)",border:"1px solid var(--border-color)"},children:[t.jsx(gr,{size:18}),(n==null?void 0:n.unread_notifications_count)>0&&t.jsx("span",{style:{position:"absolute",top:"6px",right:"6px",width:"8px",height:"8px",borderRadius:"50%",background:"#ef4444"}})]}),t.jsxs(T,{to:"/my-profile",style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("img",{src:(n==null?void 0:n.profile_photo)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:n==null?void 0:n.full_name,style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",border:"1.5px solid var(--border-color)"}}),t.jsxs("div",{className:"header-user-info",style:{display:"flex",flexDirection:"column"},children:[t.jsx("span",{style:{fontSize:"0.88rem",fontWeight:"700",color:"var(--text-main)",lineHeight:"1.2"},children:n==null?void 0:n.full_name}),t.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["@",n==null?void 0:n.username]})]})]})]}),t.jsx("style",{children:`
        @media (max-width: 960px) {
          .header-menu-btn { display: block !important; }
        }
        @media (max-width: 640px) {
          .header-search-bar { display: none !important; }
          .create-btn-text { display: none; }
          .header-user-info { display: none !important; }
        }
      `})]})},dg=()=>{const{user:e,loading:r,isAuthenticated:n}=pe(),[o,i]=g.useState(!1),[s,a]=g.useState(!1);return r?t.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0b0f19",color:"#fff"},children:t.jsx("p",{children:"Loading PartfolioHub..."})}):n?t.jsxs("div",{style:{display:"flex",minHeight:"100vh",background:"var(--bg-main)"},children:[t.jsx(ag,{mobileOpen:o,onClose:()=>i(!1)}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[t.jsx(lg,{onToggleSidebar:()=>i(!o),onOpenSearch:()=>a(!0)}),t.jsx("main",{style:{flex:1,padding:"28px",maxWidth:"1440px",width:"100%",margin:"0 auto"},className:"dashboard-main-content",children:t.jsx(fl,{})})]}),t.jsx(Iu,{isOpen:s,onClose:()=>a(!1)}),t.jsx("style",{children:`
        @media (max-width: 640px) {
          .dashboard-main-content {
            padding: 16px !important;
          }
        }
      `})]}):t.jsx(ii,{to:"/login",replace:!0})},cg=()=>{const{user:e,loading:r,isAuthenticated:n,isAdmin:o,logout:i,refreshUser:s}=pe(),{showToast:a}=ie(),[l,d]=g.useState(!1),[u,x]=g.useState(!1),y=oe(),v=async f=>{var c,p;const j=(c=f.target.files)==null?void 0:c[0];if(j){x(!0);try{const h=await A.uploadFile(j,"avatars");h.success&&((p=h.data)!=null&&p.file_url)?(await A.updateProfile({profile_photo:h.data.file_url}),s&&await s(),a("Admin profile photo updated successfully!","success")):a(h.message||"Failed to upload photo","error")}catch(h){a(h.message||"Error uploading photo","error")}finally{x(!1)}}},m=async()=>{await i(),y("/admin/login")};if(r)return t.jsx("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0b0f19",color:"#fff"},children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("div",{className:"spinner",style:{margin:"0 auto 14px",borderTopColor:"#c084fc"}}),t.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.9rem"},children:"Verifying administrative credentials..."})]})});if(!n)return t.jsx(ii,{to:"/admin/login",replace:!0});if(!o)return t.jsx(ii,{to:"/dashboard",replace:!0});const b=[{to:"/admin",end:!0,label:"Overview",icon:Mi},{to:"/admin/users",end:!1,label:"User Directory",icon:dt},{to:"/admin/reports",end:!1,label:"Content & Reports",icon:wu}];return t.jsxs("div",{style:{display:"flex",minHeight:"100vh",background:"#f8fafc"},children:[t.jsxs("aside",{className:`admin-sidebar ${l?"open":""}`,children:[t.jsxs("div",{style:{padding:"24px 20px",borderBottom:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 4px 18px rgba(124, 58, 237, 0.45)"},children:t.jsx(yr,{size:22,strokeWidth:2.4})}),t.jsxs("div",{children:[t.jsxs("div",{style:{color:"#ffffff",fontSize:"1.05rem",fontWeight:"900",letterSpacing:"-0.02em",lineHeight:1.1},children:["Partfolio",t.jsx("span",{style:{color:"#c084fc"},children:"Hub"})]}),t.jsx("div",{style:{color:"#94a3b8",fontSize:"0.72rem",fontWeight:"700",letterSpacing:"0.04em",textTransform:"uppercase",marginTop:"2px"},children:"ADMIN CONTROL CENTER"})]})]}),l&&t.jsx("button",{onClick:()=>d(!1),style:{background:"none",border:"none",color:"#fff",cursor:"pointer",padding:"4px"},children:t.jsx(Ae,{size:20})})]}),t.jsxs("nav",{style:{padding:"20px 14px",display:"flex",flexDirection:"column",gap:"6px",flex:1},children:[t.jsx("div",{style:{fontSize:"0.72rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em",padding:"0 12px 6px"},children:"Main Governance"}),b.map(f=>{const j=f.icon;return t.jsxs(bt,{to:f.to,end:f.end,onClick:()=>d(!1),className:({isActive:c})=>`admin-nav-item ${c?"active":""}`,children:[t.jsx(j,{size:19,strokeWidth:2.2}),t.jsx("span",{children:f.label})]},f.to)}),t.jsx("div",{style:{margin:"16px 0",borderTop:"1px solid rgba(255,255,255,0.08)"}}),t.jsx("div",{style:{fontSize:"0.72rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em",padding:"0 12px 6px"},children:"External Views"}),t.jsxs(T,{to:"/dashboard",style:{display:"flex",alignItems:"center",gap:"10px",color:"#94a3b8",padding:"10px 14px",fontSize:"0.88rem",fontWeight:600,textDecoration:"none",borderRadius:"10px",transition:"all 0.2s ease"},onMouseEnter:f=>{f.currentTarget.style.color="#ffffff",f.currentTarget.style.background="rgba(255,255,255,0.05)"},onMouseLeave:f=>{f.currentTarget.style.color="#94a3b8",f.currentTarget.style.background="transparent"},children:[t.jsx(lt,{size:16}),t.jsx("span",{children:"Back to Creator App"})]}),t.jsxs(T,{to:"/",target:"_blank",style:{display:"flex",alignItems:"center",gap:"10px",color:"#94a3b8",padding:"10px 14px",fontSize:"0.88rem",fontWeight:600,textDecoration:"none",borderRadius:"10px",transition:"all 0.2s ease"},onMouseEnter:f=>{f.currentTarget.style.color="#ffffff",f.currentTarget.style.background="rgba(255,255,255,0.05)"},onMouseLeave:f=>{f.currentTarget.style.color="#94a3b8",f.currentTarget.style.background="transparent"},children:[t.jsx(Qt,{size:16}),t.jsx("span",{children:"Open Public Site"})]})]}),t.jsxs("div",{style:{padding:"16px",borderTop:"1px solid rgba(255,255,255,0.08)",background:"rgba(0,0,0,0.25)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[t.jsx("img",{src:(e==null?void 0:e.profile_photo)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",alt:e==null?void 0:e.full_name,style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",border:"2px solid #7c3aed"}}),t.jsxs("div",{style:{overflow:"hidden",flex:1},children:[t.jsx("div",{style:{color:"#ffffff",fontSize:"0.86rem",fontWeight:800,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:(e==null?void 0:e.full_name)||"System Administrator"}),t.jsx("div",{style:{color:"#c084fc",fontSize:"0.74rem",fontWeight:700},children:"Super Administrator"})]})]}),t.jsxs("button",{onClick:m,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"8px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.25)",color:"#f87171",fontSize:"0.82rem",fontWeight:700,cursor:"pointer",transition:"all 0.2s ease"},children:[t.jsx(gl,{size:14}),t.jsx("span",{children:"Logout Admin Session"})]})]})]}),t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[t.jsxs("header",{style:{height:"68px",background:"#ffffff",borderBottom:"1px solid #edf2f7",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:80,boxShadow:"0 2px 10px rgba(0,0,0,0.02)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsx("button",{onClick:()=>d(!0),className:"admin-menu-btn",style:{display:"none",background:"none",border:"none",color:"#0c1538",cursor:"pointer"},children:t.jsx(ml,{size:22})}),t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(124, 58, 237, 0.08)",padding:"5px 12px",borderRadius:"9999px",fontSize:"0.78rem",fontWeight:800,color:"#7c3aed"},children:[t.jsx(Zt,{size:14}),t.jsx("span",{children:"PLATFORM GOVERNANCE & MODERATION"})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"#ecfdf5",border:"1px solid #a7f3d0",padding:"5px 12px",borderRadius:"9999px",fontSize:"0.75rem",fontWeight:800,color:"#059669"},children:[t.jsx("span",{style:{width:"7px",height:"7px",borderRadius:"50%",background:"#10b981"}}),t.jsx("span",{children:"ADMIN SESSION ACTIVE"})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("img",{src:(e==null?void 0:e.profile_photo)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",alt:e==null?void 0:e.full_name,style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover",border:"2px solid #7c3aed",display:"block"}}),t.jsx("label",{htmlFor:"admin-header-avatar-upload",title:"Upload / Change Admin Photo",style:{position:"absolute",bottom:"-2px",right:"-2px",width:"18px",height:"18px",borderRadius:"50%",background:"#7c3aed",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:u?"wait":"pointer",boxShadow:"0 2px 4px rgba(0,0,0,0.3)",border:"1.5px solid #ffffff"},children:t.jsx(Nt,{size:10})}),t.jsx("input",{id:"admin-header-avatar-upload",type:"file",accept:"image/*",onChange:v,disabled:u,style:{display:"none"}})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.88rem",fontWeight:800,color:"#0c1538",lineHeight:1.1},children:(e==null?void 0:e.full_name)||"System Administrator"}),t.jsx(T,{to:"/settings",style:{fontSize:"0.72rem",color:"#7c3aed",fontWeight:700,textDecoration:"none"},children:"Edit Profile & Photo →"})]})]})]})]}),t.jsx("main",{style:{flex:1,padding:"32px",maxWidth:"1440px",width:"100%",margin:"0 auto"},children:t.jsx(fl,{})})]}),t.jsx("style",{children:`
        .admin-sidebar {
          width: 260px;
          background: linear-gradient(180deg, #0b132e 0%, #070918 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 100;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease;
        }

        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #94a3b8;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .admin-nav-item:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(2px);
        }

        .admin-nav-item.active {
          color: #ffffff;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.35) 0%, rgba(99, 102, 241, 0.25) 100%);
          border-left: 3.5px solid #a855f7;
          font-weight: 800;
        }

        @media (max-width: 960px) {
          .admin-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            transform: translateX(-100%);
            z-index: 110;
          }
          .admin-sidebar.open {
            transform: translateX(0);
          }
          .admin-menu-btn { display: block !important; }
        }
      `})]})},pg=()=>{const{isAuthenticated:e}=pe(),{showToast:r}=ie(),n=oe(),[o,i]=g.useState(0),[s,a]=g.useState(0),[l,d]=g.useState(null),[u,x]=g.useState(0);g.useEffect(()=>{const C=46.666666666666664;let w=0,z=!1;const P=setInterval(()=>{if(!z){w++;const _=w/30,N=1-Math.pow(1-_,3);i(Math.round(10*N)),a(Math.round(50*N)),x(Math.round(100*N)),w>=30&&(z=!0,setTimeout(()=>{w=0,z=!1},700))}},C);return()=>clearInterval(P)},[]);const y=[{id:1,title:"Graphic Design",slug:"graphic-design",icon:Bi},{id:2,title:"Web Development",slug:"web-development",icon:Ii},{id:3,title:"Video Editing",slug:"video-editing",icon:rn},{id:4,title:"Photography",slug:"photography",icon:Nt},{id:5,title:"UI/UX Design",slug:"ui-ux-design",icon:Nu},{id:6,title:"Digital Marketing",slug:"digital-marketing",icon:bl},{id:7,title:"Content Creation",slug:"content-creation",icon:Xe},{id:8,title:"Courses",slug:"courses",icon:di}],v=[{id:25,lessonNum:"Lesson 01",title:"Lesson 01: After Effects Interface",subtitle:"After Effects Interface",badge:"After Effects • Beginner to Pro",description:"Baro interface-ka barnaamijka Adobe After Effects, panels-ka shaqada, composition viewer, timeline-ka, iyo qalabka aasaasiga ah ee animation-ka.",cover:"/assets/lesson_01_cover.jpg",video:"/assets/vedio/lesson 1.mp4",duration:"18 mins",author:"Abdala Creator",authorAvatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",tag:"Interface Layout"},{id:26,lessonNum:"Lesson 02",title:"Lesson 02: Creating Workspace",subtitle:"Creating Workspace",badge:"After Effects • Practical Workflow",description:"Baro sida loo habeeyo loona kaydsado dynamic workspace kuu gaar ah oo kuu sahlaya inaad si degdeg ah oo hufan ugu samayso visual effects iyo motion graphics.",cover:"/assets/lesson_02_cover.jpg",video:"/assets/vedio/lesson 2.mp4",duration:"15 mins",author:"Abdala Creator",authorAvatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",tag:"Custom Panels"},{id:27,lessonNum:"Lesson 03",title:"Lesson 03: Professional Video Editing & Motion",subtitle:"Video Editing & Motion",badge:"Premiere & AE • Advanced Masterclass",description:"Baro farsamooyinka casriga ah ee video editing, motion design, cinematic cuts, transitions, iyo color grading xirfadeed.",cover:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80",video:"/assets/vedio/vedio editing.mp4",duration:"22 mins",author:"Abdala Creator",authorAvatar:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",tag:"Cinematic Motion"}],[m,b]=g.useState([]);g.useEffect(()=>{(async()=>{var c,p;try{const h=await A.getCreators({limit:8,sort:"latest"});if(h.success&&((p=(c=h.data)==null?void 0:c.creators)==null?void 0:p.length)>0){const k=h.data.creators.map(C=>({id:C.id,username:C.username,full_name:C.full_name||C.username,role:C.professional_title||"Creative Talent",location:C.location||"Somalia",avatar:C.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",following:C.is_following||!1}));b(k)}}catch(h){console.error(h)}})()},[]);const f=async(j,c)=>{if(!e){r("Please sign in to follow creators.","info"),n("/login");return}try{const p=await A.toggleFollow(j);p.success&&(b(h=>h.map((k,C)=>C===c?{...k,following:p.data.following}:k)),r(p.message,"success"))}catch{r("Follow action failed","error")}};return t.jsxs("div",{style:{background:"#f8fafc",color:"#0c1538",overflowX:"hidden"},children:[t.jsx("section",{style:{background:"radial-gradient(circle at 75% 35%, rgba(110, 37, 232, 0.45) 0%, rgba(12, 16, 43, 0.98) 65%), radial-gradient(circle at 20% 75%, rgba(99, 102, 241, 0.25) 0%, transparent 50%), #070918",color:"#ffffff",padding:"90px 0 110px",position:"relative",overflow:"hidden"},children:t.jsx("div",{className:"container",style:{position:"relative",zIndex:10},children:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(360px, 1fr))",gap:"50px",alignItems:"center"},children:[t.jsxs("div",{style:{maxWidth:"600px"},children:[t.jsx("h1",{style:{fontSize:"clamp(2.8rem, 5.2vw, 4.2rem)",fontWeight:"900",lineHeight:"1.12",letterSpacing:"-0.035em",color:"#ffffff",marginBottom:"4px"},children:"Showcase Your Skills"}),t.jsx("h2",{style:{fontSize:"clamp(2.8rem, 5.2vw, 4.2rem)",fontWeight:"900",lineHeight:"1.12",letterSpacing:"-0.035em",background:"linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #7c2ae8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:"22px"},children:"Build Your Future"}),t.jsx("p",{style:{color:"#cbd5e1",fontSize:"1.08rem",lineHeight:"1.7",marginBottom:"38px",maxWidth:"520px"},children:"PartfolioHub is a platform where creative people, developers, designers, and professionals share their work, skills and services. Create your portfolio, connect with others, and grow your career."}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[t.jsxs(T,{to:e?"/create-post":"/register",style:{display:"inline-flex",alignItems:"center",gap:"10px",padding:"15px 32px",borderRadius:"var(--radius-full)",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",color:"#ffffff",fontWeight:"800",fontSize:"0.98rem",textDecoration:"none",boxShadow:"0 8px 26px rgba(110, 37, 232, 0.45)",transition:"all 0.25s ease"},onMouseEnter:j=>j.currentTarget.style.transform="translateY(-2px)",onMouseLeave:j=>j.currentTarget.style.transform="translateY(0)",children:[t.jsx("span",{children:"Get Started"}),t.jsx(ve,{size:18})]}),t.jsx(T,{to:"/creators",style:{display:"inline-flex",alignItems:"center",padding:"15px 30px",borderRadius:"var(--radius-full)",background:"rgba(255, 255, 255, 0.08)",color:"#ffffff",fontWeight:"700",fontSize:"0.98rem",textDecoration:"none",border:"1px solid rgba(255, 255, 255, 0.25)",backdropFilter:"blur(8px)",transition:"all 0.2s ease"},onMouseEnter:j=>{j.currentTarget.style.background="rgba(255, 255, 255, 0.15)",j.currentTarget.style.borderColor="rgba(255, 255, 255, 0.5)"},onMouseLeave:j=>{j.currentTarget.style.background="rgba(255, 255, 255, 0.08)",j.currentTarget.style.borderColor="rgba(255, 255, 255, 0.25)"},children:"Explore Creators"})]})]}),t.jsxs("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"},children:[t.jsx("div",{style:{position:"absolute",width:"420px",height:"420px",borderRadius:"50%",background:"radial-gradient(circle, rgba(110, 37, 232, 0.45) 0%, transparent 70%)",filter:"blur(45px)",zIndex:1,pointerEvents:"none"}}),t.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"470px",zIndex:2},children:[t.jsxs("div",{style:{position:"relative",width:"92%",borderRadius:"22px",overflow:"hidden",background:"#0c1538",border:"1.5px solid rgba(167, 139, 250, 0.32)",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.65), 0 0 45px rgba(110, 37, 232, 0.3)",transition:"transform 0.4s ease"},children:[t.jsx("img",{src:"/assets/hero_designer.jpg",alt:"Creative Designer",style:{width:"100%",height:"340px",objectFit:"cover",display:"block"}}),t.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, transparent 65%, rgba(7, 9, 24, 0.75) 100%)"}})]}),t.jsx("div",{style:{position:"absolute",top:"-12px",right:"4%",width:"44px",height:"44px",borderRadius:"14px",background:"rgba(110, 37, 232, 0.45)",backdropFilter:"blur(12px)",border:"1px solid rgba(167, 139, 250, 0.6)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",boxShadow:"0 0 25px rgba(110, 37, 232, 0.85)",animation:"floatSlow1 3.5s ease-in-out infinite"},children:t.jsx(Xe,{size:20})}),t.jsxs("div",{style:{position:"absolute",right:"-16px",bottom:"18px",width:"215px",borderRadius:"18px",background:"#ffffff",boxShadow:"0 22px 48px rgba(0, 0, 0, 0.6), 0 0 35px rgba(110, 37, 232, 0.3)",border:"1px solid rgba(255, 255, 255, 0.25)",overflow:"hidden",zIndex:10,animation:"floatSlow2 4.8s ease-in-out infinite alternate"},children:[t.jsx("img",{src:"/assets/brand_identity_bis_market.png",alt:"Brand Identity Showcase",style:{width:"100%",height:"140px",objectFit:"cover",objectPosition:"center",display:"block",imageRendering:"-webkit-optimize-contrast"}}),t.jsxs("div",{style:{padding:"10px 14px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#ffffff"},children:[t.jsxs("div",{children:[t.jsx("h6",{style:{fontSize:"0.86rem",fontWeight:"800",color:"#0c1538",margin:0},children:"Brand Identity"}),t.jsx("span",{style:{fontSize:"0.72rem",color:"#64748b",fontWeight:"600"},children:"Graphic Design"})]}),t.jsx("div",{style:{width:"26px",height:"26px",borderRadius:"50%",background:"#0c1538",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(ve,{size:13,style:{transform:"rotate(-45deg)"}})})]})]}),t.jsxs("div",{style:{position:"absolute",left:"-20px",bottom:"75px",background:"#ffffff",color:"#0c1538",padding:"9px 15px",borderRadius:"16px",display:"flex",alignItems:"center",gap:"12px",boxShadow:"0 16px 36px rgba(0, 0, 0, 0.35)",border:"1px solid rgba(0, 0, 0, 0.05)",zIndex:9,animation:"floatSlow1 4s ease-in-out infinite"},children:[t.jsx("img",{src:"/assets/hero_designer.jpg",alt:"Creative Designer",style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{children:[t.jsx("h5",{style:{fontSize:"0.88rem",fontWeight:"800",margin:0,color:"#0c1538"},children:"Creative Designer"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",fontSize:"0.74rem",color:"#64748b",marginTop:"2px"},children:[t.jsxs("span",{children:[t.jsx(xe,{size:12,style:{verticalAlign:"middle",color:"#6e25e8"}})," 15k"]}),t.jsxs("span",{children:[t.jsx(He,{size:12,style:{verticalAlign:"middle",color:"#ef4444"}})," 3.1k"]})]})]})]})]})]})]})})}),t.jsx("section",{style:{padding:"75px 0",background:"#ffffff"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"36px",flexWrap:"wrap",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.85rem",fontWeight:"800",color:"#0c1538",letterSpacing:"-0.02em",marginBottom:"6px"},children:"Popular Categories"}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"Explore work from professional creatives: developers, designers, and professionals share their work."})]}),t.jsxs(T,{to:"/explore",style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"#6e25e8",fontWeight:"700",fontSize:"0.9rem",textDecoration:"none"},children:[t.jsx("span",{children:"View all"}),t.jsx(ve,{size:16})]})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",gap:"16px"},children:y.map(j=>{const c=j.icon;return t.jsxs(T,{to:`/explore?category=${j.slug}`,style:{background:"#ffffff",border:"1px solid #ede8f8",borderRadius:"18px",padding:"26px 16px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",textDecoration:"none",transition:"all 0.25s ease",boxShadow:"0 2px 8px rgba(110, 37, 232, 0.03)"},onMouseEnter:p=>{p.currentTarget.style.transform="translateY(-5px)",p.currentTarget.style.borderColor="#6e25e8",p.currentTarget.style.boxShadow="0 12px 28px rgba(110, 37, 232, 0.15)"},onMouseLeave:p=>{p.currentTarget.style.transform="translateY(0)",p.currentTarget.style.borderColor="#ede8f8",p.currentTarget.style.boxShadow="0 2px 8px rgba(110, 37, 232, 0.03)"},children:[t.jsx("div",{style:{width:"56px",height:"56px",borderRadius:"14px",background:"rgba(110, 37, 232, 0.08)",color:"#6e25e8",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"14px",transition:"all 0.2s ease"},children:t.jsx(c,{size:28,strokeWidth:2.2})}),t.jsx("span",{style:{fontSize:"0.88rem",fontWeight:"800",color:"#0c1538",lineHeight:"1.3"},children:j.title})]},j.id)})})]})}),t.jsxs("section",{id:"courses-section",style:{padding:"75px 0",background:"linear-gradient(180deg, #fbfaff 0%, #f4f0ff 100%)",borderTop:"1px solid #ede8f8",borderBottom:"1px solid #ede8f8",position:"relative",overflow:"hidden"},children:[t.jsx("div",{style:{position:"absolute",top:"-120px",right:"-100px",width:"380px",height:"380px",borderRadius:"50%",background:"radial-gradient(circle, rgba(110, 37, 232, 0.12) 0%, transparent 70%)",pointerEvents:"none"}}),t.jsx("div",{style:{position:"absolute",bottom:"-80px",left:"-100px",width:"320px",height:"320px",borderRadius:"50%",background:"radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",pointerEvents:"none"}}),t.jsxs("div",{className:"container",style:{position:"relative",zIndex:2},children:[t.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"36px",flexWrap:"wrap",gap:"16px"},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 14px",borderRadius:"999px",background:"rgba(110, 37, 232, 0.1)",border:"1px solid rgba(110, 37, 232, 0.25)",color:"#6e25e8",fontSize:"0.82rem",fontWeight:700,marginBottom:"10px"},children:[t.jsx(di,{size:16,strokeWidth:2.4}),t.jsx("span",{children:"Creative Masterclasses & Video Courses"})]}),t.jsx("h2",{style:{fontSize:"2rem",fontWeight:"800",color:"#0c1538",letterSpacing:"-0.02em",marginBottom:"6px"},children:"Featured Motion Design Courses"}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.98rem"},children:"Baro Adobe After Effects oo si toos ah u daawo casharrada interface-ka iyo dhisidda workspace xirfadeed."})]}),t.jsxs(T,{to:"/explore?category=courses",style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"#6e25e8",color:"#ffffff",fontWeight:"700",fontSize:"0.9rem",padding:"12px 22px",borderRadius:"12px",textDecoration:"none",boxShadow:"0 6px 20px rgba(110, 37, 232, 0.35)",transition:"all 0.25s ease"},onMouseEnter:j=>{j.currentTarget.style.transform="translateY(-2px)",j.currentTarget.style.boxShadow="0 10px 26px rgba(110, 37, 232, 0.5)"},onMouseLeave:j=>{j.currentTarget.style.transform="translateY(0)",j.currentTarget.style.boxShadow="0 6px 20px rgba(110, 37, 232, 0.35)"},children:[t.jsx("span",{children:"Daawo Dhammaan Courses"}),t.jsx(ve,{size:17})]})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"26px"},children:v.map(j=>t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",border:"1px solid #ede8f8",overflow:"hidden",display:"flex",flexDirection:"column",transition:"all 0.3s ease",boxShadow:"0 4px 18px rgba(110, 37, 232, 0.05)",position:"relative"},onMouseEnter:c=>{c.currentTarget.style.transform="translateY(-6px)",c.currentTarget.style.boxShadow="0 18px 40px rgba(110, 37, 232, 0.16)",c.currentTarget.style.borderColor="#c084fc"},onMouseLeave:c=>{c.currentTarget.style.transform="translateY(0)",c.currentTarget.style.boxShadow="0 4px 18px rgba(110, 37, 232, 0.05)",c.currentTarget.style.borderColor="#ede8f8"},children:[t.jsxs("div",{style:{position:"relative",height:"240px",background:"#0b0f19",overflow:"hidden",cursor:"pointer"},onClick:()=>d(j),children:[t.jsx("img",{src:j.cover,alt:j.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block",transition:"transform 0.5s ease"},onMouseEnter:c=>{c.currentTarget.style.transform="scale(1.05)"},onMouseLeave:c=>{c.currentTarget.style.transform="scale(1)"}}),t.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.1) 50%, transparent 100%)",pointerEvents:"none"}}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"54px",height:"54px",borderRadius:"50%",background:"linear-gradient(135deg, #6e25e8 0%, #9333ea 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",boxShadow:"0 0 25px rgba(110, 37, 232, 0.8), 0 4px 15px rgba(0,0,0,0.5)",border:"2.5px solid rgba(255, 255, 255, 0.9)",transition:"transform 0.25s ease"},children:t.jsx(_t,{size:22,style:{fill:"#ffffff",marginLeft:"3px"}})}),t.jsx("span",{style:{position:"absolute",top:"14px",left:"14px",background:"rgba(11, 15, 25, 0.85)",color:"#00d2ff",fontSize:"0.74rem",fontWeight:800,padding:"4px 10px",borderRadius:"6px",letterSpacing:"0.04em",border:"1px solid rgba(0, 210, 255, 0.35)",backdropFilter:"blur(6px)"},children:j.lessonNum}),t.jsxs("span",{style:{position:"absolute",bottom:"14px",right:"14px",background:"rgba(11, 15, 25, 0.85)",color:"#ffffff",fontSize:"0.72rem",fontWeight:700,padding:"3px 9px",borderRadius:"6px",display:"inline-flex",alignItems:"center",gap:"4px",backdropFilter:"blur(4px)"},children:[t.jsx(ju,{size:12})," ",j.duration]})]}),t.jsxs("div",{style:{padding:"22px",display:"flex",flexDirection:"column",flex:1},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[t.jsx("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"#6e25e8",textTransform:"uppercase",letterSpacing:"0.04em"},children:j.badge}),t.jsx("span",{style:{fontSize:"0.72rem",background:"#f1f5f9",color:"#475569",padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:j.tag})]}),t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"800",color:"#0c1538",marginBottom:"8px",lineHeight:"1.35"},children:j.title}),t.jsx("p",{style:{fontSize:"0.88rem",color:"#64748b",lineHeight:"1.55",marginBottom:"18px",flex:1},children:j.description}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"16px",borderTop:"1px solid #f1f5f9"},children:[t.jsxs(T,{to:"/profile/abdala",style:{display:"flex",alignItems:"center",gap:"9px",textDecoration:"none"},children:[t.jsx("img",{src:j.authorAvatar,alt:j.author,style:{width:"32px",height:"32px",borderRadius:"50%",objectFit:"cover",border:"2px solid #ede8f8"}}),t.jsx("span",{style:{fontSize:"0.85rem",fontWeight:700,color:"#0c1538"},children:j.author})]}),t.jsxs("button",{onClick:()=>d(j),style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(110, 37, 232, 0.08)",color:"#6e25e8",border:"1px solid rgba(110, 37, 232, 0.25)",padding:"8px 14px",borderRadius:"9px",fontSize:"0.82rem",fontWeight:700,cursor:"pointer",transition:"all 0.2s ease"},onMouseEnter:c=>{c.currentTarget.style.background="#6e25e8",c.currentTarget.style.color="#ffffff"},onMouseLeave:c=>{c.currentTarget.style.background="rgba(110, 37, 232, 0.08)",c.currentTarget.style.color="#6e25e8"},children:[t.jsx(_t,{size:13,fill:"currentColor"}),t.jsx("span",{children:"Watch Lesson"})]})]})]})]},j.id))})]})]}),l&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px"},children:t.jsxs("div",{style:{background:"#0b0f19",borderRadius:"22px",border:"1px solid rgba(255, 255, 255, 0.15)",width:"100%",maxWidth:"920px",overflow:"hidden",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.8)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",background:"#0f172a"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("span",{style:{background:"#6e25e8",color:"#ffffff",fontSize:"0.74rem",fontWeight:800,padding:"3px 8px",borderRadius:"5px"},children:l.lessonNum}),t.jsx("h4",{style:{margin:0,color:"#ffffff",fontSize:"1.05rem",fontWeight:800},children:l.title})]}),t.jsx("button",{onClick:()=>d(null),style:{background:"rgba(255, 255, 255, 0.1)",border:"none",color:"#ffffff",width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t.jsx(Ae,{size:18})})]}),t.jsx("div",{style:{width:"100%",maxHeight:"520px",background:"#000000",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx("video",{src:l.video,poster:l.cover,controls:!0,autoPlay:!0,playsInline:!0,style:{width:"100%",maxHeight:"520px",objectFit:"contain"}})}),t.jsxs("div",{style:{padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",background:"#0f172a"},children:[t.jsxs("div",{children:[t.jsx("span",{style:{color:"#94a3b8",fontSize:"0.85rem"},children:"Casharka waxaa diyaariyay: "}),t.jsx("strong",{style:{color:"#ffffff",fontSize:"0.9rem"},children:l.author})]}),t.jsxs("div",{style:{display:"flex",gap:"10px"},children:[t.jsx("button",{onClick:()=>{const c=(v.findIndex(p=>p.id===l.id)+1)%v.length;d(v[c])},className:"btn btn-secondary btn-sm",style:{color:"#ffffff",background:"rgba(255, 255, 255, 0.1)"},children:"Next Lesson →"}),t.jsx(T,{to:`/post/${l.id}/video`,className:"btn btn-primary btn-sm",style:{background:"#6e25e8",color:"#ffffff"},children:"Open Dedicated Player Page"})]})]})]})}),t.jsx("section",{style:{padding:"75px 0",background:"#f8f5ff"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"36px",flexWrap:"wrap",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.85rem",fontWeight:"800",color:"#0c1538",letterSpacing:"-0.02em",marginBottom:"6px"},children:"Featured Creators"}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem"},children:"Trend-setters & pioneers: Find and connect with top talent on our platform."})]}),t.jsxs(T,{to:"/creators",style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"#6e25e8",fontWeight:"700",fontSize:"0.9rem",textDecoration:"none"},children:[t.jsx("span",{children:"View all"}),t.jsx(ve,{size:16})]})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"24px"},children:m.map((j,c)=>t.jsxs("div",{style:{background:"#ffffff",border:"1px solid #ede8f8",borderRadius:"20px",padding:"28px 20px",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",boxShadow:"0 4px 14px rgba(110, 37, 232, 0.05)",transition:"all 0.25s ease"},onMouseEnter:p=>{p.currentTarget.style.transform="translateY(-4px)",p.currentTarget.style.boxShadow="0 16px 32px rgba(110, 37, 232, 0.12)"},onMouseLeave:p=>{p.currentTarget.style.transform="translateY(0)",p.currentTarget.style.boxShadow="0 4px 14px rgba(110, 37, 232, 0.05)"},children:[t.jsxs("div",{style:{position:"relative",marginBottom:"16px"},children:[t.jsx("img",{src:j.avatar,alt:j.full_name,style:{width:"86px",height:"86px",borderRadius:"50%",objectFit:"cover",border:"3px solid #ede8f8"}}),t.jsx("div",{style:{position:"absolute",bottom:"2px",right:"2px",background:"#6e25e8",color:"#ffffff",borderRadius:"50%",width:"22px",height:"22px",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid #ffffff"},children:t.jsx(it,{size:13,fill:"#6e25e8",color:"#ffffff"})})]}),t.jsx(T,{to:`/profile/${j.username}`,style:{fontSize:"1.05rem",fontWeight:"800",color:"#0c1538",textDecoration:"none",marginBottom:"4px"},children:j.full_name}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.85rem",fontWeight:"500",marginBottom:"6px"},children:j.role}),t.jsxs("p",{style:{display:"flex",alignItems:"center",gap:"4px",color:"#94a3b8",fontSize:"0.8rem",marginBottom:"18px"},children:[t.jsx(Li,{size:13}),j.location]}),t.jsx("button",{onClick:()=>f(j.id,c),style:{width:"100%",maxWidth:"140px",padding:"9px 20px",borderRadius:"var(--radius-full)",background:j.following?"#ede8f8":"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",color:j.following?"#6e25e8":"#ffffff",border:"none",fontWeight:"700",fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s ease",boxShadow:j.following?"none":"0 4px 14px rgba(110, 37, 232, 0.35)"},children:j.following?"Following":"Follow"})]},j.id))})]})}),t.jsxs("section",{style:{background:"#070918",padding:"75px 0 95px",position:"relative",overflow:"hidden"},children:[t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"750px",height:"280px",background:"radial-gradient(ellipse, rgba(110, 37, 232, 0.35) 0%, transparent 70%)",filter:"blur(55px)",pointerEvents:"none"}}),t.jsx("div",{className:"container",style:{position:"relative",zIndex:5},children:t.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(12, 16, 45, 0.96) 0%, rgba(20, 14, 52, 0.96) 50%, rgba(28, 14, 62, 0.96) 100%)",border:"1.5px solid rgba(167, 139, 250, 0.25)",borderRadius:"26px",padding:"42px 48px",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.55), 0 0 50px rgba(110, 37, 232, 0.22)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"36px"},children:[t.jsxs("div",{style:{flex:"1 1 300px",maxWidth:"380px"},children:[t.jsx("h2",{style:{fontSize:"clamp(1.9rem, 2.8vw, 2.5rem)",fontWeight:"900",color:"#ffffff",lineHeight:"1.15",letterSpacing:"-0.03em",margin:0},children:"Turn Your Passion"}),t.jsx("h2",{style:{fontSize:"clamp(1.9rem, 2.8vw, 2.5rem)",fontWeight:"900",color:"#c084fc",lineHeight:"1.15",letterSpacing:"-0.03em",margin:"2px 0 16px 0"},children:"Into Opportunity"}),t.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.92rem",lineHeight:"1.6",marginBottom:"26px"},children:"Join PartfolioHub and get discovered by clients, collaborators, and opportunities around the world."}),t.jsxs(T,{to:e?"/create-post":"/register",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"13px 28px",borderRadius:"var(--radius-full)",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",color:"#ffffff",fontWeight:"800",fontSize:"0.92rem",textDecoration:"none",boxShadow:"0 6px 22px rgba(110, 37, 232, 0.55)",transition:"all 0.2s ease"},onMouseEnter:j=>j.currentTarget.style.transform="translateY(-2px)",onMouseLeave:j=>j.currentTarget.style.transform="translateY(0)",children:[t.jsx("span",{children:"Create Your Portfolio"}),t.jsx(ve,{size:16})]})]}),t.jsxs("div",{style:{position:"relative",flex:"0 1 auto",display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsxs("div",{style:{position:"relative",borderRadius:"18px",overflow:"hidden",border:"1px solid rgba(255, 255, 255, 0.12)",boxShadow:"0 16px 36px rgba(0, 0, 0, 0.65)"},children:[t.jsx("img",{src:"/assets/banner_workspace.jpg",alt:"PartfolioHub Workspace",style:{width:"300px",height:"185px",objectFit:"cover",display:"block"}}),t.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle, rgba(110, 37, 232, 0.2) 0%, rgba(7, 9, 24, 0.4) 100%)"}})]}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",padding:"12px",borderRadius:"16px",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 35px rgba(110, 37, 232, 0.9), 0 8px 24px rgba(0, 0, 0, 0.5)",border:"1.5px solid rgba(255, 255, 255, 0.3)",animation:"floatSlow1 3s ease-in-out infinite"},children:t.jsx(vr,{size:"small",light:!0,linkTo:"",showText:!1})})]}),t.jsxs("div",{style:{flex:"1 1 auto",display:"flex",alignItems:"center",justifyContent:"center",gap:"24px"},children:[t.jsxs("div",{style:{textAlign:"center",minWidth:"95px"},children:[t.jsxs("div",{style:{fontSize:"clamp(2rem, 3vw, 2.45rem)",fontWeight:"900",color:"#ffffff",letterSpacing:"-0.025em",lineHeight:1},children:[t.jsxs("span",{children:[o,"K"]}),t.jsx("span",{style:{color:"#c084fc"},children:"+"})]}),t.jsx("div",{style:{color:"#94a3b8",fontSize:"0.84rem",fontWeight:"600",marginTop:"8px",whiteSpace:"nowrap"},children:"Active Creators"})]}),t.jsx("div",{style:{width:"1px",height:"48px",background:"rgba(255, 255, 255, 0.18)"}}),t.jsxs("div",{style:{textAlign:"center",minWidth:"95px"},children:[t.jsxs("div",{style:{fontSize:"clamp(2rem, 3vw, 2.45rem)",fontWeight:"900",color:"#ffffff",letterSpacing:"-0.025em",lineHeight:1},children:[t.jsxs("span",{children:[s,"K"]}),t.jsx("span",{style:{color:"#c084fc"},children:"+"})]}),t.jsx("div",{style:{color:"#94a3b8",fontSize:"0.84rem",fontWeight:"600",marginTop:"8px",whiteSpace:"nowrap"},children:"Projects Shared"})]}),t.jsx("div",{style:{width:"1px",height:"48px",background:"rgba(255, 255, 255, 0.18)"}}),t.jsxs("div",{style:{textAlign:"center",minWidth:"95px"},children:[t.jsxs("div",{style:{fontSize:"clamp(2rem, 3vw, 2.45rem)",fontWeight:"900",color:"#ffffff",letterSpacing:"-0.025em",lineHeight:1},children:[t.jsxs("span",{children:[u,"K"]}),t.jsx("span",{style:{color:"#c084fc"},children:"+"})]}),t.jsx("div",{style:{color:"#94a3b8",fontSize:"0.84rem",fontWeight:"600",marginTop:"8px",whiteSpace:"nowrap"},children:"Monthly Visitors"})]})]})]})})]}),t.jsx("style",{children:`
        @keyframes floatSlow1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatSlow2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0px); }
        }
      `})]})},Ru=({post:e,onPostUpdated:r})=>{const{isAuthenticated:n}=pe(),{showToast:o}=ie(),i=oe(),[s,a]=g.useState(e.is_liked||!1),[l,d]=g.useState(e.likes_count||0),[u,x]=g.useState(e.is_saved||!1),[y,v]=g.useState(!1),m=()=>e.post_type==="project"?`/project/${e.id}`:e.post_type==="video"?`/post/${e.id}/video`:`/post/${e.id}`,b=async j=>{if(j.preventDefault(),j.stopPropagation(),!n){o("Please log in to like posts.","info"),i("/login");return}if(!y){v(!0);try{const c=await A.toggleLike(e.id);c.success&&(a(c.data.liked),d(c.data.likes_count),r&&r())}catch{o("Could not update like status","error")}finally{v(!1)}}},f=async j=>{if(j.preventDefault(),j.stopPropagation(),!n){o("Please log in to save bookmarks.","info"),i("/login");return}try{const c=await A.toggleSave(e.id);c.success&&(x(c.data.saved),o(c.message,"success"))}catch{o("Could not save post","error")}};return t.jsxs("div",{className:"card card-hover post-card",style:{padding:0,overflow:"hidden",display:"flex",flexDirection:"column"},children:[t.jsxs(T,{to:m(),style:{position:"relative",height:"210px",background:"#0f172a",overflow:"hidden",display:"block"},children:[(()=>{var p,h;const j=e.post_type==="video"||e.cover_image&&e.cover_image.endsWith(".mp4");let c=e.cover_image;return e.id===25||(p=e.title)!=null&&p.includes("Lesson 01")?c="/assets/lesson_01_cover.jpg":e.id===26||(h=e.title)!=null&&h.includes("Lesson 02")?c="/assets/lesson_02_cover.jpg":(!c||c.endsWith(".mp4"))&&(c=e.thumbnail_url||"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80"),j?t.jsxs("div",{style:{width:"100%",height:"100%",position:"relative",background:"#0b0f19"},children:[t.jsx("img",{src:c,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",transition:"transform 0.4s ease",display:"block"},onError:k=>{e.id===25?k.currentTarget.src="/assets/lesson_01_cover.jpg":e.id===26&&(k.currentTarget.src="/assets/lesson_02_cover.jpg")},className:"post-thumbnail"}),t.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(11, 15, 25, 0.7) 0%, rgba(11, 15, 25, 0.15) 50%, transparent 100%)",pointerEvents:"none"}}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"46px",height:"46px",borderRadius:"50%",background:"linear-gradient(135deg, #6e25e8 0%, #9333ea 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",boxShadow:"0 4px 20px rgba(110, 37, 232, 0.65)",border:"2px solid rgba(255, 255, 255, 0.9)",pointerEvents:"none",backdropFilter:"blur(4px)"},children:t.jsx(_t,{size:20,style:{fill:"#ffffff",marginLeft:"3px"}})}),t.jsx("span",{style:{position:"absolute",bottom:"10px",right:"10px",background:"rgba(11, 15, 25, 0.85)",color:"#ffffff",fontSize:"0.68rem",fontWeight:800,padding:"2px 8px",borderRadius:"4px",letterSpacing:"0.04em",border:"1px solid rgba(255,255,255,0.18)",backdropFilter:"blur(4px)"},children:e.category_slug==="courses"||e.category_name==="Courses"?"AE COURSE":"VIDEO"})]}):t.jsx("img",{src:c,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",transition:"transform 0.4s ease",imageRendering:"-webkit-optimize-contrast"},className:"post-thumbnail"})})(),t.jsxs("span",{className:"badge",style:{position:"absolute",top:"12px",left:"12px",background:"rgba(15, 23, 42, 0.75)",backdropFilter:"blur(4px)",color:"#ffffff",border:"1px solid rgba(255, 255, 255, 0.15)",textTransform:"capitalize"},children:[e.post_type==="video"&&t.jsx(_t,{size:10,style:{fill:"#fff"}}),e.post_type]}),e.category_name&&t.jsx("span",{className:"badge badge-primary",style:{position:"absolute",top:"12px",right:"12px",boxShadow:"0 2px 6px rgba(0,0,0,0.15)"},children:e.category_name})]}),t.jsxs("div",{style:{padding:"18px 20px",flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[t.jsxs(T,{to:`/profile/${e.username}`,style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("img",{src:e.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:e.full_name,style:{width:"26px",height:"26px",borderRadius:"50%",objectFit:"cover"}}),t.jsx("span",{style:{fontSize:"0.82rem",fontWeight:"600",color:"var(--text-main)"},children:e.full_name||e.username})]}),t.jsx("button",{onClick:f,style:{background:"none",border:"none",cursor:"pointer",color:u?"#6366f1":"#94a3b8"},title:"Bookmark post",children:t.jsx(Ti,{size:16,style:{fill:u?"#6366f1":"none"}})})]}),t.jsx(T,{to:m(),children:t.jsx("h4",{style:{fontSize:"1rem",fontWeight:"700",color:"var(--text-main)",marginBottom:"6px",lineHeight:"1.35",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.title})}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginBottom:"12px",lineHeight:"1.45",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.description})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",borderTop:"1px solid var(--border-light)",fontSize:"0.8rem",color:"var(--text-muted)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsxs("button",{onClick:b,style:{display:"flex",alignItems:"center",gap:"5px",background:"none",border:"none",color:s?"#ef4444":"var(--text-muted)",fontWeight:s?"600":"400",cursor:"pointer"},children:[t.jsx(He,{size:15,style:{fill:s?"#ef4444":"none"}}),t.jsx("span",{children:l})]}),t.jsxs(T,{to:m(),style:{display:"flex",alignItems:"center",gap:"5px",color:"var(--text-muted)"},children:[t.jsx(Pe,{size:15}),t.jsx("span",{children:e.comments_count||0})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx(xe,{size:14}),t.jsx("span",{children:e.views_count||0})]})]})]}),t.jsx("style",{children:`
        .post-card:hover .post-thumbnail {
          transform: scale(1.04);
        }
      `})]})},Eu=({creator:e,onFollowToggled:r})=>{const{user:n,isAuthenticated:o}=pe(),{showToast:i}=ie(),s=oe(),[a,l]=g.useState(e.is_following||!1),[d,u]=g.useState(e.followers_count||0),[x,y]=g.useState(!1),v=(n==null?void 0:n.id)===e.id,m=async b=>{if(b.preventDefault(),b.stopPropagation(),!o){i("Please log in to follow creators.","info"),s("/login");return}if(!(v||x)){y(!0);try{const f=await A.toggleFollow(e.id);f.success&&(l(f.data.following),u(f.data.followers_count),i(f.message,"success"),r&&r())}catch(f){i(f.message||"Follow action failed","error")}finally{y(!1)}}};return t.jsxs("div",{className:"card card-hover",style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"24px 20px",position:"relative"},children:[t.jsx(T,{to:`/profile/${e.username}`,style:{position:"relative",marginBottom:"14px"},children:t.jsx("img",{src:e.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:e.full_name,style:{width:"80px",height:"80px",borderRadius:"50%",objectFit:"cover",border:"3px solid #ffffff",boxShadow:"0 4px 14px rgba(0,0,0,0.1)"}})}),t.jsx(T,{to:`/profile/${e.username}`,children:t.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:"700",color:"var(--text-main)",marginBottom:"3px"},children:e.full_name||e.username})}),t.jsxs("p",{style:{fontSize:"0.8rem",color:"#6366f1",fontWeight:"600",marginBottom:"6px"},children:["@",e.username]}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:"500",marginBottom:"10px"},children:e.professional_title||"Creative Specialist"}),e.location&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.78rem",color:"var(--text-light)",marginBottom:"14px"},children:[t.jsx(Li,{size:13}),t.jsx("span",{children:e.location})]}),e.skills&&e.skills.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",justifyContent:"center",marginBottom:"18px"},children:e.skills.slice(0,3).map(b=>t.jsx("span",{className:"badge badge-neutral",style:{fontSize:"0.72rem"},children:b.name},b.id))}),t.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginBottom:"16px",fontWeight:"500"},children:[t.jsx("strong",{style:{color:"var(--text-main)"},children:d})," Followers"]}),t.jsx("div",{style:{width:"100%",marginTop:"auto"},children:v?t.jsx(T,{to:"/my-profile",className:"btn btn-secondary btn-sm",style:{width:"100%"},children:"View My Profile"}):t.jsx("button",{onClick:m,disabled:x,className:`btn btn-sm ${a?"btn-secondary":"btn-primary"}`,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:a?t.jsxs(t.Fragment,{children:[t.jsx(mr,{size:14,color:"var(--success)"}),t.jsx("span",{children:"Following"})]}):t.jsxs(t.Fragment,{children:[t.jsx(eo,{size:14}),t.jsx("span",{children:"Follow"})]})})})]})},ug=()=>{const[e]=Wi(),r=e.get("category")||"all",[n,o]=g.useState([]),[i,s]=g.useState([]),[a,l]=g.useState([]),[d,u]=g.useState(!0),[x,y]=g.useState(r),[v,m]=g.useState("all"),[b,f]=g.useState("trending"),[j,c]=g.useState(""),[p,h]=g.useState(1),[k,C]=g.useState({total_pages:1});return g.useEffect(()=>{(async()=>{u(!0);try{const[z,P]=await Promise.all([A.getPosts({category:x!=="all"?x:"",type:v!=="all"?v:"",sort:b,search:j,page:p,limit:12}),A.getCreators({limit:4})]);z.success&&(o(z.data.posts||[]),s(z.data.categories||[]),C(z.data.pagination||{total_pages:1})),P.success&&l(P.data.creators||[])}catch(z){console.error(z)}finally{u(!1)}})()},[x,v,b,j,p]),t.jsx("div",{style:{background:"#f8fafc",padding:"40px 0 80px"},children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{style:{marginBottom:"32px",textAlign:"center",maxWidth:"680px",margin:"0 auto 36px"},children:[t.jsx("h1",{style:{fontSize:"2.4rem",fontWeight:"800",color:"var(--text-main)",marginBottom:"10px"},children:"Explore Creative Work"}),t.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.05rem"},children:"Discover exceptional designs, apps, and productions crafted by community creators."})]}),t.jsxs("div",{className:"card",style:{padding:"20px",marginBottom:"28px"},children:[t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[t.jsxs("div",{style:{flex:"1 1 300px",position:"relative"},children:[t.jsx(Tt,{size:18,style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),t.jsx("input",{type:"text",placeholder:"Search portfolios, keywords, tech stacks...",value:j,onChange:w=>{c(w.target.value),h(1)},className:"form-input",style:{paddingLeft:"40px"}})]}),t.jsx("div",{style:{display:"flex",gap:"8px"},children:["all","project","image","video"].map(w=>t.jsx("button",{onClick:()=>{m(w),h(1)},className:`btn btn-sm ${v===w?"btn-primary":"btn-secondary"}`,style:{textTransform:"capitalize"},children:w==="all"?"All Types":`${w}s`},w))}),t.jsxs("select",{value:b,onChange:w=>f(w.target.value),className:"form-select",style:{width:"auto",minWidth:"150px"},children:[t.jsx("option",{value:"trending",children:"🔥 Trending"}),t.jsx("option",{value:"most_liked",children:"❤️ Most Liked"}),t.jsx("option",{value:"most_viewed",children:"👁️ Most Viewed"}),t.jsx("option",{value:"latest",children:"✨ Latest"})]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"18px",paddingTop:"16px",borderTop:"1px solid var(--border-light)"},children:[t.jsx("button",{onClick:()=>{y("all"),h(1)},className:`badge ${x==="all"?"badge-primary":"badge-neutral"}`,style:{padding:"8px 16px",fontSize:"0.85rem",cursor:"pointer",border:"none"},children:"All Categories"}),i.map(w=>t.jsx("button",{onClick:()=>{y(w.slug),h(1)},className:`badge ${x===w.slug?"badge-primary":"badge-neutral"}`,style:{padding:"8px 16px",fontSize:"0.85rem",cursor:"pointer",border:"none"},children:w.name},w.id))]})]}),a.length>0&&x==="all"&&p===1&&!j&&t.jsxs("div",{style:{marginBottom:"40px"},children:[t.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"800",marginBottom:"18px"},children:"Trending Creators"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"20px"},children:a.map(w=>t.jsx(Eu,{creator:w},w.id))})]}),t.jsxs("h3",{style:{fontSize:"1.25rem",fontWeight:"800",marginBottom:"18px"},children:["Portfolio Showcase (",n.length," results)"]}),d?t.jsx("div",{style:{textAlign:"center",padding:"60px 0",color:"var(--text-muted)"},children:t.jsx("p",{children:"Loading curated showcase..."})}):n.length>0?t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px",marginBottom:"40px"},children:n.map(w=>t.jsx(Ru,{post:w},w.id))}):t.jsxs("div",{className:"card",style:{textAlign:"center",padding:"60px 20px",color:"var(--text-muted)"},children:[t.jsx("p",{style:{fontSize:"1.1rem",marginBottom:"10px"},children:"No posts found matching the selected filters."}),t.jsx("button",{onClick:()=>{y("all"),m("all"),c("")},className:"btn btn-secondary btn-sm",children:"Reset Filters"})]}),k.total_pages>1&&t.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginTop:"20px"},children:[t.jsx("button",{onClick:()=>h(w=>Math.max(1,w-1)),disabled:p<=1,className:"btn btn-secondary btn-sm",children:"Previous"}),t.jsxs("span",{style:{display:"flex",alignItems:"center",padding:"0 12px",fontSize:"0.88rem",fontWeight:"600"},children:["Page ",p," of ",k.total_pages]}),t.jsx("button",{onClick:()=>h(w=>Math.min(k.total_pages,w+1)),disabled:p>=k.total_pages,className:"btn btn-secondary btn-sm",children:"Next"})]})]})})},fg=()=>{const[e,r]=g.useState([]),[n,o]=g.useState(!0),[i,s]=g.useState(""),[a,l]=g.useState(""),[d,u]=g.useState(1),[x,y]=g.useState({total_pages:1,total_creators:0}),v=["React","Figma","UI/UX","Node.js","Python","Tailwind","Video Editing","3D Blender","Photography","Graphic Design"],m=async()=>{o(!0);try{const b=await A.getCreators({search:i,skill:a,page:d,limit:12});b.success&&b.data&&(r(b.data.creators||[]),y(b.data.pagination||{total_pages:1,total_creators:0}))}catch(b){console.error("Error loading creators:",b)}finally{o(!1)}};return g.useEffect(()=>{const b=setTimeout(()=>{m()},300);return()=>clearTimeout(b)},[i,a,d]),t.jsx("div",{style:{background:"#f8fafc",minHeight:"85vh",padding:"40px 0 80px"},children:t.jsxs("div",{className:"container",children:[t.jsx("div",{style:{background:"linear-gradient(135deg, #0b0f19 0%, #1e1b4b 60%, #31104b 100%)",color:"#ffffff",borderRadius:"var(--radius-xl)",padding:"44px 32px",marginBottom:"36px",boxShadow:"var(--shadow-lg)",position:"relative",overflow:"hidden"},children:t.jsxs("div",{style:{position:"relative",zIndex:2,maxWidth:"680px"},children:[t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(99, 102, 241, 0.25)",border:"1px solid rgba(129, 140, 248, 0.4)",padding:"6px 14px",borderRadius:"var(--radius-full)",marginBottom:"16px"},children:[t.jsx(Xe,{size:16,color:"#818cf8"}),t.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"#c7d2fe"},children:"Discover Elite Talent"})]}),t.jsxs("h1",{style:{fontSize:"2.5rem",fontWeight:"800",letterSpacing:"-0.02em",lineHeight:"1.2",marginBottom:"12px"},children:["Connect with Inspiring ",t.jsx("span",{style:{background:"linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Creators & Designers"})]}),t.jsx("p",{style:{color:"#cbd5e1",fontSize:"1.05rem",lineHeight:"1.6"},children:"Explore talented professionals, freelancers, software engineers, and digital artists showcase their works and portfolios across the globe."})]})}),t.jsx("div",{className:"card",style:{padding:"20px 24px",marginBottom:"32px"},children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{style:{flex:"1 1 300px",position:"relative"},children:[t.jsx(Tt,{size:18,style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"var(--text-light)"}}),t.jsx("input",{type:"text",placeholder:"Search by creator name, title, or location...",value:i,onChange:b=>{s(b.target.value),u(1)},className:"input-control",style:{paddingLeft:"42px",width:"100%"}})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",overflowX:"auto",maxWidth:"100%",paddingBottom:"4px"},children:[t.jsx("button",{onClick:()=>{l(""),u(1)},style:{padding:"6px 14px",borderRadius:"var(--radius-full)",border:a===""?"1px solid var(--primary)":"1px solid var(--border-color)",background:a===""?"var(--primary-light)":"#ffffff",color:a===""?"var(--primary)":"var(--text-muted)",fontSize:"0.82rem",fontWeight:"600",cursor:"pointer",whiteSpace:"nowrap"},children:"All Skills"}),v.map(b=>t.jsx("button",{onClick:()=>{l(b===a?"":b),u(1)},style:{padding:"6px 14px",borderRadius:"var(--radius-full)",border:a===b?"1px solid var(--primary)":"1px solid var(--border-color)",background:a===b?"var(--primary-light)":"#ffffff",color:a===b?"var(--primary)":"var(--text-muted)",fontSize:"0.82rem",fontWeight:"600",cursor:"pointer",whiteSpace:"nowrap"},children:b},b))]})]})}),n?t.jsxs("div",{style:{textAlign:"center",padding:"60px 0"},children:[t.jsx("div",{className:"spinner",style:{margin:"0 auto 16px"}}),t.jsx("p",{style:{color:"var(--text-muted)"},children:"Discovering creators..."})]}):e.length===0?t.jsxs("div",{className:"card",style:{textAlign:"center",padding:"60px 20px"},children:[t.jsx(dt,{size:48,color:"var(--text-light)",style:{margin:"0 auto 16px"}}),t.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"700",marginBottom:"8px"},children:"No creators found"}),t.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"400px",margin:"0 auto"},children:"Try adjusting your search query or skill filter to find other active community creators."})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"24px",marginBottom:"40px"},children:e.map(b=>t.jsx(Eu,{creator:b,onFollowToggled:m},b.id))}),x.total_pages>1&&t.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"8px"},children:[t.jsx("button",{disabled:d<=1,onClick:()=>u(d-1),className:"btn btn-secondary btn-sm",children:"Previous"}),t.jsxs("span",{style:{display:"flex",alignItems:"center",padding:"0 12px",fontSize:"0.9rem",color:"var(--text-muted)",fontWeight:"600"},children:["Page ",d," of ",x.total_pages]}),t.jsx("button",{disabled:d>=x.total_pages,onClick:()=>u(d+1),className:"btn btn-secondary btn-sm",children:"Next"})]})]})]})})},xg=[{id:"p1",category:"photography",categoryName:"Photography",title:"Urban Architectural Golden Hour",photographer:"Ayan Farah",url:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&auto=format&fit=crop&q=80"},{id:"p2",category:"photography",categoryName:"Photography",title:"Cinematic High Fashion Portrait",photographer:"Soren Astrup",url:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"},{id:"p3",category:"photography",categoryName:"Photography",title:"Dramatic Coastal Waves & Skyline",photographer:"Shifaaz shamheed",url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop&q=80"},{id:"p4",category:"photography",categoryName:"Photography",title:"Street Photography In Black & White",photographer:"Leroy Skalstad",url:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop&q=80"},{id:"p5",category:"photography",categoryName:"Photography",title:"Professional Mirrorless Camera Rig",photographer:"Alexander Andrews",url:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop&q=80"},{id:"g1",category:"graphic-design",categoryName:"Graphic Design",title:"Modern Brand Identity & Visual Guide",photographer:"Balázs Kétyi",url:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=400&auto=format&fit=crop&q=80"},{id:"g2",category:"graphic-design",categoryName:"Graphic Design",title:"Tactile Artisan Packaging & Mockup Kit",photographer:"Patrik Michalicka",url:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=80"},{id:"g3",category:"graphic-design",categoryName:"Graphic Design",title:"Abstract 3D Geometric Gradient Fluid",photographer:"Milad Fakurian",url:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80"},{id:"g4",category:"graphic-design",categoryName:"Graphic Design",title:"Editorial Magazine Typographic Layout",photographer:"Content Pixie",url:"https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80"},{id:"g5",category:"graphic-design",categoryName:"Graphic Design",title:"Creative Stationery & Business Card Deck",photographer:"Brandless",url:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&auto=format&fit=crop&q=80"},{id:"u1",category:"ui-ux-design",categoryName:"UI/UX Design",title:"Fintech Mobile Banking App UI Kit",photographer:"Taras Shypka",url:"https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&auto=format&fit=crop&q=80"},{id:"u2",category:"ui-ux-design",categoryName:"UI/UX Design",title:"Figma Design System & Component Library",photographer:"Theme Photos",url:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&auto=format&fit=crop&q=80"},{id:"u3",category:"ui-ux-design",categoryName:"UI/UX Design",title:"SaaS Analytics Dashboard Wireframe",photographer:"Luke Chesser",url:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80"},{id:"u4",category:"ui-ux-design",categoryName:"UI/UX Design",title:"E-Commerce Mobile UX Prototype Flow",photographer:"Daniel Korpai",url:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&auto=format&fit=crop&q=80"},{id:"w1",category:"web-development",categoryName:"Web Development",title:"Full-Stack Developer Dark Theme Workspace",photographer:"Fotis Fotopoulos",url:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=80"},{id:"w2",category:"web-development",categoryName:"Web Development",title:"Modern React & JavaScript Code Editor",photographer:"Lautaro Andreani",url:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80"},{id:"w3",category:"web-development",categoryName:"Web Development",title:"Multi-Monitor Engineering Setup",photographer:"Farzad Nazifi",url:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=80"},{id:"w4",category:"web-development",categoryName:"Web Development",title:"Cloud Database Architecture & DevOps",photographer:"Taylor Vick",url:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80"},{id:"c1",category:"content-creation",categoryName:"Content Creation",title:"Broadcast Studio Microphone & Acoustic Setup",photographer:"CoWomen",url:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=80"},{id:"c2",category:"content-creation",categoryName:"Content Creation",title:"Video Production Rig & Cinema Lights",photographer:"Sam McGhee",url:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=80"},{id:"c3",category:"content-creation",categoryName:"Content Creation",title:"Creative Podcasting & Interview Booth",photographer:"Austin Distel",url:"https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?w=400&auto=format&fit=crop&q=80"},{id:"c4",category:"content-creation",categoryName:"Content Creation",title:"Social Media Content Desk & Vlog Kit",photographer:"Kari Shea",url:"https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=1200&auto=format&fit=crop&q=80",thumb:"https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&auto=format&fit=crop&q=80"}],Mu=({isOpen:e,onClose:r,onSelectImage:n,defaultCategory:o="all",title:i="Select Photo from Unsplash"})=>{const[s,a]=g.useState(o),[l,d]=g.useState(""),[u,x]=g.useState(""),y=g.useMemo(()=>xg.filter(b=>{const f=s==="all"||b.category===s,j=!l.trim()||b.title.toLowerCase().includes(l.toLowerCase())||b.photographer.toLowerCase().includes(l.toLowerCase())||b.categoryName.toLowerCase().includes(l.toLowerCase());return f&&j}),[s,l]);if(!e)return null;const v=b=>{n(b),r()},m=b=>{b.preventDefault(),u.trim()&&v(u.trim())};return t.jsx("div",{className:"modal-overlay",onClick:r,style:{zIndex:1100},children:t.jsxs("div",{className:"modal-box",onClick:b=>b.stopPropagation(),style:{maxWidth:"860px",width:"92%",maxHeight:"88vh",display:"flex",flexDirection:"column",padding:"0",overflow:"hidden"},children:[t.jsxs("div",{style:{padding:"20px 24px",background:"linear-gradient(135deg, #1e143b 0%, #0d1330 100%)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("div",{style:{background:"#6e25e8",padding:"8px",borderRadius:"10px",display:"flex"},children:t.jsx(xl,{size:20,color:"#ffffff"})}),t.jsxs("div",{children:[t.jsx("h3",{style:{margin:0,fontSize:"1.2rem",fontWeight:800},children:i}),t.jsx("p",{style:{margin:"2px 0 0",fontSize:"0.8rem",color:"#cbd5e1"},children:"High-resolution, royalty-free photography curated for your projects"})]})]}),t.jsx("button",{onClick:r,style:{background:"rgba(255,255,255,0.1)",border:"none",color:"#ffffff",width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t.jsx(Ae,{size:18})})]}),t.jsxs("div",{style:{padding:"16px 24px",background:"#ffffff",borderBottom:"1px solid #f1f5f9"},children:[t.jsxs("div",{style:{position:"relative",marginBottom:"14px"},children:[t.jsx(Tt,{size:18,style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),t.jsx("input",{type:"text",placeholder:"Search by keywords, title, or photographer...",value:l,onChange:b=>d(b.target.value),className:"form-input",style:{paddingLeft:"42px",borderRadius:"10px"}})]}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[{id:"all",label:"🌟 All Creative"},{id:"photography",label:"📷 Photography"},{id:"graphic-design",label:"🎨 Graphic Design"},{id:"ui-ux-design",label:"📱 UI/UX Design"},{id:"web-development",label:"💻 Web Development"},{id:"content-creation",label:"✨ Content Creator"}].map(b=>t.jsx("button",{type:"button",onClick:()=>a(b.id),style:{padding:"6px 14px",borderRadius:"20px",border:"1.5px solid",borderColor:s===b.id?"#6e25e8":"#e2e8f0",background:s===b.id?"#f5f0ff":"#ffffff",color:s===b.id?"#6e25e8":"#64748b",fontSize:"0.82rem",fontWeight:"700",cursor:"pointer",transition:"all 0.15s ease"},children:b.label},b.id))})]}),t.jsx("div",{style:{flex:1,overflowY:"auto",padding:"24px",background:"#f8fafc",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"16px"},children:y.length>0?y.map(b=>t.jsxs("div",{onClick:()=>v(b.url),style:{background:"#ffffff",borderRadius:"12px",overflow:"hidden",border:"1.5px solid #e2e8f0",cursor:"pointer",transition:"all 0.2s ease",position:"relative",group:"card"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-3px)",f.currentTarget.style.boxShadow="0 10px 25px rgba(110, 37, 232, 0.15)",f.currentTarget.style.borderColor="#6e25e8"},onMouseLeave:f=>{f.currentTarget.style.transform="translateY(0)",f.currentTarget.style.boxShadow="none",f.currentTarget.style.borderColor="#e2e8f0"},children:[t.jsxs("div",{style:{height:"150px",position:"relative",overflow:"hidden"},children:[t.jsx("img",{src:b.thumb,alt:b.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),t.jsx("span",{style:{position:"absolute",top:"8px",left:"8px",background:"rgba(0,0,0,0.6)",color:"#ffffff",fontSize:"0.68rem",fontWeight:700,padding:"2px 8px",borderRadius:"4px"},children:b.categoryName})]}),t.jsxs("div",{style:{padding:"10px 12px"},children:[t.jsx("h4",{style:{margin:"0 0 2px",fontSize:"0.85rem",fontWeight:700,color:"#1e293b",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:b.title}),t.jsxs("p",{style:{margin:0,fontSize:"0.74rem",color:"#94a3b8"},children:["by ",b.photographer]})]})]},b.id)):t.jsx("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"40px 20px",color:"#64748b"},children:t.jsx("p",{children:"No photos matched your search."})})}),t.jsx("div",{style:{padding:"16px 24px",background:"#ffffff",borderTop:"1px solid #f1f5f9",display:"flex",alignItems:"center",gap:"12px"},children:t.jsxs("form",{onSubmit:m,style:{display:"flex",gap:"10px",width:"100%"},children:[t.jsx("input",{type:"url",placeholder:"Or paste any custom Unsplash photo URL...",value:u,onChange:b=>x(b.target.value),className:"form-input",style:{flex:1,height:"40px",fontSize:"0.86rem"}}),t.jsx("button",{type:"submit",disabled:!u.trim(),className:"btn btn-primary btn-sm",style:{padding:"0 18px",borderRadius:"8px"},children:"Use Custom URL"})]})})]})})},Ud=()=>{const{username:e}=_i(),{user:r,isAuthenticated:n,updateUser:o}=pe(),{showToast:i}=ie(),s=oe(),[a,l]=g.useState(null),[d,u]=g.useState([]),[x,y]=g.useState(!0),[v,m]=g.useState("all"),[b,f]=g.useState(!1),[j,c]=g.useState(0),[p,h]=g.useState(!1),[k,C]=g.useState(!1),[w,z]=g.useState(!1),[P,_]=g.useState(null),[N,W]=g.useState(!1),M=g.useRef(null),S=g.useRef(null),H=!e||r&&r.username===e,G=async()=>{y(!0);try{const L=e||(r?r.username:null);if(!L){s("/login");return}const B=await A.getProfile(L);if(B.success&&B.data){const $=B.data.user||B.data.profile;l($),f($.is_following||!1),c($.followers_count||0);const J=await A.getPosts({user_id:$.id,limit:30});J.success&&u(J.data.posts||[])}else i("Profile not found","error")}catch(L){console.error(L),i("Could not load profile information","error")}finally{y(!1)}},Ie=(L,B)=>{if(!B||B==="#"||B===""){if((a==null?void 0:a.username)==="abdala"||!(a!=null&&a.username)){if(L==="facebook")return"https://www.facebook.com/share/19KxQX3pxa/";if(L==="instagram")return"https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi";if(L==="tiktok")return"https://www.tiktok.com/@abdala.creator"}return"#"}const $=String(B).trim();return $.startsWith("http://")||$.startsWith("https://")?$:L==="facebook"?$==="abdaladesign"||(a==null?void 0:a.username)==="abdala"?"https://www.facebook.com/share/19KxQX3pxa/":`https://facebook.com/${$}`:L==="instagram"?$==="abdalacreator"||$==="abdala14564"||(a==null?void 0:a.username)==="abdala"?"https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi":`https://instagram.com/${$.replace(/^@/,"")}`:L==="tiktok"?$==="abdalacreative"||$==="abdala.creator"||(a==null?void 0:a.username)==="abdala"?"https://www.tiktok.com/@abdala.creator":`https://tiktok.com/@${$.replace(/^@/,"")}`:$};g.useEffect(()=>{G()},[e,r==null?void 0:r.username]);const qe=async()=>{if(!n){i("Please sign in to follow creators.","info"),s("/login");return}if(!(H||p)){h(!0);try{const L=await A.toggleFollow(a.id);L.success&&(f(L.data.following),c(L.data.followers_count),i(L.message,"success"))}catch{i("Action failed","error")}finally{h(!1)}}},F=()=>{navigator.clipboard&&(navigator.clipboard.writeText(window.location.href),i("Profile link copied to clipboard!","success"))},R=async L=>{var $,J;const B=($=L.target.files)==null?void 0:$[0];if(B){z(!0);try{const Z=await A.uploadFile(B,"avatars");if(Z.success&&((J=Z.data)!=null&&J.full_url)){const et=Z.data.full_url;await A.updateProfile({profile_photo:et}),l(nr=>({...nr,profile_photo:et})),o&&o({profile_photo:et}),i("Profile image updated successfully!","success")}}catch(Z){i(Z.message||"Failed to upload profile image","error")}finally{z(!1)}}},U=async L=>{var $,J;const B=($=L.target.files)==null?void 0:$[0];if(B){C(!0);try{const Z=await A.uploadFile(B,"covers");if(Z.success&&((J=Z.data)!=null&&J.full_url)){const et=Z.data.full_url;await A.updateProfile({cover_photo:et}),l(nr=>({...nr,cover_photo:et})),o&&o({cover_photo:et}),i("Cover image updated successfully!","success")}}catch(Z){i(Z.message||"Failed to upload cover image","error")}finally{C(!1)}}},V=async L=>{try{P==="avatar"?(await A.updateProfile({profile_photo:L}),l(B=>({...B,profile_photo:L})),o&&o({profile_photo:L}),i("Profile image updated from Unsplash!","success")):P==="cover"&&(await A.updateProfile({cover_photo:L}),l(B=>({...B,cover_photo:L})),o&&o({cover_photo:L}),i("Cover image updated from Unsplash!","success"))}catch(B){i(B.message||"Failed to update photo","error")}};if(x)return t.jsxs("div",{style:{textAlign:"center",padding:"100px 0",minHeight:"60vh"},children:[t.jsx("div",{className:"spinner",style:{margin:"0 auto 16px"}}),t.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading portfolio profile..."})]});if(!a)return t.jsxs("div",{className:"container",style:{padding:"80px 20px",textAlign:"center"},children:[t.jsx("h2",{children:"User profile not found"}),t.jsx(T,{to:"/explore",className:"btn btn-primary",style:{marginTop:"16px"},children:"Explore Creators"})]});const D=d.filter(L=>v==="all"?!0:v==="projects"?L.post_type==="project":v==="videos"?L.post_type==="video":!0);return t.jsxs("div",{style:{background:"#f8fafc",paddingBottom:"80px"},children:[t.jsx(Mu,{isOpen:N,onClose:()=>W(!1),onSelectImage:V,title:P==="cover"?"Select Cover Photo from Unsplash":"Select Profile Photo from Unsplash"}),t.jsxs("div",{style:{height:"300px",background:a.cover_photo?`url(${a.cover_photo}) center/cover no-repeat`:"linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 70%, #6366f1 100%)",position:"relative"},children:[t.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.25)"}}),H&&t.jsxs("div",{style:{position:"absolute",top:"20px",right:"24px",display:"flex",gap:"8px",zIndex:15},children:[t.jsxs("button",{type:"button",onClick:()=>{var L;return(L=S.current)==null?void 0:L.click()},disabled:k,className:"btn btn-sm",style:{background:"rgba(255, 255, 255, 0.95)",color:"#0f172a",border:"none",fontWeight:700,boxShadow:"0 4px 14px rgba(0,0,0,0.25)",display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(Nt,{size:15,color:"#6e25e8"}),t.jsx("span",{children:k?"Uploading...":"Upload Cover"})]}),t.jsxs("button",{type:"button",onClick:()=>{_("cover"),W(!0)},className:"btn btn-sm",style:{background:"rgba(15, 23, 42, 0.85)",color:"#ffffff",border:"1px solid rgba(255, 255, 255, 0.25)",fontWeight:700,boxShadow:"0 4px 14px rgba(0,0,0,0.25)",display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(Xe,{size:14,color:"#00d2ff"}),t.jsx("span",{children:"Unsplash Cover"})]}),t.jsx("input",{type:"file",ref:S,accept:"image/*",style:{display:"none"},onChange:U})]})]}),t.jsxs("div",{className:"container",style:{maxWidth:"1160px",marginTop:"-80px",position:"relative",zIndex:10},children:[t.jsxs("div",{className:"card",style:{padding:"32px",marginBottom:"32px",boxShadow:"var(--shadow-lg)"},children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"flex-start",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"flex-end"},children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("img",{src:a.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:a.full_name,style:{width:"135px",height:"135px",borderRadius:"50%",objectFit:"cover",border:"4px solid #ffffff",boxShadow:"0 8px 24px rgba(0,0,0,0.18)"}}),H&&t.jsxs("div",{style:{position:"absolute",bottom:"4px",right:"4px",display:"flex",gap:"4px"},children:[t.jsx("button",{type:"button",onClick:()=>{var L;return(L=M.current)==null?void 0:L.click()},disabled:w,title:"Upload photo from device",style:{background:"#6e25e8",color:"#ffffff",border:"2.5px solid #ffffff",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 4px 12px rgba(110, 37, 232, 0.4)"},children:t.jsx(Nt,{size:16})}),t.jsx("button",{type:"button",onClick:()=>{_("avatar"),W(!0)},title:"Pick avatar from Unsplash",style:{background:"#0f172a",color:"#ffffff",border:"2.5px solid #ffffff",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.3)"},children:t.jsx(Xe,{size:15,color:"#00d2ff"})}),t.jsx("input",{type:"file",ref:M,accept:"image/*",style:{display:"none"},onChange:R})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[t.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:"800",color:"var(--text-main)",letterSpacing:"-0.02em"},children:a.full_name||a.username}),a.role==="admin"&&t.jsx("span",{className:"badge badge-primary",children:"Admin Staff"})]}),t.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",fontWeight:"500",marginBottom:"6px"},children:["@",a.username]}),a.professional_title&&t.jsxs("p",{style:{color:"var(--primary)",fontWeight:"600",fontSize:"1.05rem",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Xe,{size:16}),a.professional_title]})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[H?t.jsxs(t.Fragment,{children:[t.jsxs(T,{to:"/create-post",className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(vu,{size:16}),t.jsx("span",{children:"Create Post"})]}),t.jsxs(T,{to:"/profile-setup",className:"btn btn-outline",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(Oh,{size:16}),t.jsx("span",{children:"Edit Profile"})]})]}):t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:qe,disabled:p,className:`btn ${b?"btn-secondary":"btn-primary"}`,style:{display:"flex",alignItems:"center",gap:"8px",minWidth:"120px",justifyContent:"center"},children:[b?t.jsx(mr,{size:16}):t.jsx(eo,{size:16}),t.jsx("span",{children:b?"Following":"Follow"})]}),t.jsxs("button",{onClick:()=>s(`/messages?user_id=${a.id}`),className:"btn btn-outline",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(Pe,{size:16}),t.jsx("span",{children:"Message"})]})]}),t.jsx("button",{onClick:F,className:"btn btn-secondary",style:{padding:"10px 14px"},title:"Share Profile",children:t.jsx(Zn,{size:16})})]})]}),a.bio&&t.jsx("p",{style:{color:"#334155",fontSize:"1rem",lineHeight:"1.6",marginTop:"20px",maxWidth:"850px"},children:a.bio}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",marginTop:"20px",paddingTop:"18px",borderTop:"1px solid var(--border-light)",color:"var(--text-muted)",fontSize:"0.9rem"},children:[a.location&&t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Li,{size:16,color:"var(--primary)"}),a.location]}),a.education&&t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(di,{size:16,color:"var(--primary)"}),a.education]}),a.experience&&t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(yu,{size:16,color:"var(--primary)"}),a.experience]}),a.website&&t.jsxs("a",{href:a.website.startsWith("http")?a.website:`https://${a.website}`,target:"_blank",rel:"noreferrer",style:{display:"flex",alignItems:"center",gap:"6px",color:"var(--primary)",fontWeight:"600"},children:[t.jsx(Ei,{size:16}),"Portfolio Link"]})]}),(a.whatsapp||a.facebook||a.instagram||a.tiktok||a.username==="abdala")&&t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"16px",alignItems:"center"},children:[a.whatsapp&&t.jsxs("a",{href:`https://wa.me/${a.whatsapp.replace(/[^0-9]/g,"")}`,target:"_blank",rel:"noopener noreferrer",className:"badge badge-success",style:{textDecoration:"none",padding:"8px 14px",fontSize:"0.85rem",display:"inline-flex",alignItems:"center",gap:"6px",borderRadius:"8px"},children:[t.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"})}),"WhatsApp: ",a.whatsapp]}),(a.facebook||a.username==="abdala")&&t.jsxs("a",{href:Ie("facebook",a.facebook),target:"_blank",rel:"noopener noreferrer",className:"badge",style:{textDecoration:"none",padding:"8px 14px",fontSize:"0.85rem",display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(24, 119, 242, 0.12)",color:"#1877f2",border:"1px solid rgba(24, 119, 242, 0.35)",borderRadius:"8px",fontWeight:600,transition:"all 0.2s ease"},onMouseEnter:L=>{L.currentTarget.style.background="#1877f2",L.currentTarget.style.color="#ffffff"},onMouseLeave:L=>{L.currentTarget.style.background="rgba(24, 119, 242, 0.12)",L.currentTarget.style.color="#1877f2"},title:"Follow on Facebook",children:[t.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),"Facebook"]}),(a.instagram||a.username==="abdala")&&t.jsxs("a",{href:Ie("instagram",a.instagram),target:"_blank",rel:"noopener noreferrer",className:"badge",style:{textDecoration:"none",padding:"8px 14px",fontSize:"0.85rem",display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(225, 48, 108, 0.12)",color:"#e1306c",border:"1px solid rgba(225, 48, 108, 0.35)",borderRadius:"8px",fontWeight:600,transition:"all 0.2s ease"},onMouseEnter:L=>{L.currentTarget.style.background="#e1306c",L.currentTarget.style.color="#ffffff"},onMouseLeave:L=>{L.currentTarget.style.background="rgba(225, 48, 108, 0.12)",L.currentTarget.style.color="#e1306c"},title:"Follow on Instagram",children:[t.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[t.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),t.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),t.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),"Instagram"]}),(a.tiktok||a.username==="abdala")&&t.jsxs("a",{href:Ie("tiktok",a.tiktok),target:"_blank",rel:"noopener noreferrer",className:"badge",style:{textDecoration:"none",padding:"8px 14px",fontSize:"0.85rem",display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(0, 0, 0, 0.35)",color:"#ffffff",border:"1px solid rgba(0, 242, 254, 0.45)",borderRadius:"8px",fontWeight:600,transition:"all 0.2s ease"},onMouseEnter:L=>{L.currentTarget.style.background="#000000",L.currentTarget.style.borderColor="#fe2c55"},onMouseLeave:L=>{L.currentTarget.style.background="rgba(0, 0, 0, 0.35)",L.currentTarget.style.borderColor="rgba(0, 242, 254, 0.45)"},title:"Follow on TikTok",children:[t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:t.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49c.14-.14.27-.29.39-.45V9.48a8.16 8.16 0 0 0 5.38 2.05v-3.53a4.83 4.83 0 0 1 0-1.31z"})}),"TikTok"]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"16px",marginTop:"28px",padding:"20px",background:"var(--bg-main)",borderRadius:"var(--radius-md)"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.4rem",fontWeight:"800",color:"var(--text-main)"},children:d.length}),t.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:"600",textTransform:"uppercase"},children:"Showcases"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.4rem",fontWeight:"800",color:"var(--text-main)"},children:j}),t.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:"600",textTransform:"uppercase"},children:"Followers"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.4rem",fontWeight:"800",color:"var(--text-main)"},children:a.following_count||0}),t.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:"600",textTransform:"uppercase"},children:"Following"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.4rem",fontWeight:"800",color:"var(--text-main)"},children:a.total_likes||0}),t.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:"600",textTransform:"uppercase"},children:"Applauds / Likes"})]})]})]}),t.jsxs("div",{style:{display:"flex",gap:"8px",borderBottom:"2px solid var(--border-color)",marginBottom:"28px",overflowX:"auto",paddingBottom:"2px"},children:[t.jsxs("button",{onClick:()=>m("all"),style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px 20px",border:"none",background:"none",cursor:"pointer",fontWeight:"700",fontSize:"0.95rem",color:v==="all"?"var(--primary)":"var(--text-muted)",borderBottom:v==="all"?"3px solid var(--primary)":"3px solid transparent",marginBottom:"-2px"},children:[t.jsx(Dd,{size:18}),t.jsxs("span",{children:["All Posts (",d.length,")"]})]}),t.jsxs("button",{onClick:()=>m("projects"),style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px 20px",border:"none",background:"none",cursor:"pointer",fontWeight:"700",fontSize:"0.95rem",color:v==="projects"?"var(--primary)":"var(--text-muted)",borderBottom:v==="projects"?"3px solid var(--primary)":"3px solid transparent",marginBottom:"-2px"},children:[t.jsx(ku,{size:18}),t.jsxs("span",{children:["Projects (",d.filter(L=>L.post_type==="project").length,")"]})]}),t.jsxs("button",{onClick:()=>m("videos"),style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px 20px",border:"none",background:"none",cursor:"pointer",fontWeight:"700",fontSize:"0.95rem",color:v==="videos"?"var(--primary)":"var(--text-muted)",borderBottom:v==="videos"?"3px solid var(--primary)":"3px solid transparent",marginBottom:"-2px"},children:[t.jsx(rn,{size:18}),t.jsxs("span",{children:["Videos (",d.filter(L=>L.post_type==="video").length,")"]})]}),t.jsxs("button",{onClick:()=>m("about"),style:{display:"flex",alignItems:"center",gap:"8px",padding:"12px 20px",border:"none",background:"none",cursor:"pointer",fontWeight:"700",fontSize:"0.95rem",color:v==="about"?"var(--primary)":"var(--text-muted)",borderBottom:v==="about"?"3px solid var(--primary)":"3px solid transparent",marginBottom:"-2px"},children:[t.jsx(Xe,{size:18}),t.jsx("span",{children:"About & Skills"})]})]}),v==="about"?t.jsxs("div",{className:"card",style:{padding:"32px"},children:[t.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"800",marginBottom:"16px"},children:"Detailed Portfolio Overview"}),t.jsx("p",{style:{color:"var(--text-main)",lineHeight:"1.7",marginBottom:"28px",whiteSpace:"pre-line"},children:a.portfolio_intro||a.bio||"No expanded bio provided yet."}),t.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:"700",marginBottom:"14px"},children:"Expertise & Skills"}),a.skills&&a.skills.length>0?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:a.skills.map((L,B)=>t.jsx("span",{className:"badge badge-primary",style:{padding:"8px 16px",fontSize:"0.88rem"},children:typeof L=="string"?L:L.name},B))}):t.jsx("p",{style:{color:"var(--text-muted)"},children:"No skills listed yet."})]}):D.length===0?t.jsxs("div",{className:"card",style:{textAlign:"center",padding:"60px 20px"},children:[t.jsx(Dd,{size:48,color:"var(--text-light)",style:{margin:"0 auto 16px"}}),t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"700",marginBottom:"8px"},children:"No items in this section"}),t.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"400px",margin:"0 auto 20px"},children:H?"You haven’t published any works here yet.":"This creator hasn’t uploaded any projects here yet."}),H&&t.jsx(T,{to:"/create-post",className:"btn btn-primary",children:"Create Your First Showcase"})]}):t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"24px"},children:D.map(L=>t.jsx(Ru,{post:L,onPostUpdated:G},L.id))})]})]})},hg=()=>{var F;const{id:e}=_i(),{user:r,isAuthenticated:n}=pe(),{showToast:o}=ie(),i=oe(),[s,a]=g.useState(null),[l,d]=g.useState(!0),[u,x]=g.useState(!1),[y,v]=g.useState(0),[m,b]=g.useState(!1),[f,j]=g.useState(!1),[c,p]=g.useState(""),[h,k]=g.useState([]),[C,w]=g.useState(!1),[z,P]=g.useState(null),[_,N]=g.useState("");g.useEffect(()=>{(async()=>{var U;try{const V=await A.getPost(e);if(V.success&&((U=V.data)!=null&&U.post)){const D=V.data.post;a(D),x(D.is_liked),v(D.likes_count),b(D.is_saved),j(D.is_following_creator),k(D.comments||[])}}catch{o("Failed to load post","error")}finally{d(!1)}})()},[e]);const W=async()=>{if(!n){o("Please sign in to like posts.","info"),i("/login");return}try{const R=await A.toggleLike(e);R.success&&(x(R.data.liked),v(R.data.likes_count))}catch{o("Error liking post","error")}},M=async()=>{if(!n){o("Please sign in to save bookmarks.","info"),i("/login");return}try{const R=await A.toggleSave(e);R.success&&(b(R.data.saved),o(R.message,"success"))}catch{o("Error saving post","error")}},S=async()=>{if(!n){o("Please sign in to follow creators.","info"),i("/login");return}try{const R=await A.toggleFollow(s.user_id);R.success&&(j(R.data.following),o(R.message,"success"))}catch{o("Follow error","error")}},H=()=>{navigator.clipboard.writeText(window.location.href),o("Link copied to clipboard!","success")},G=async R=>{var U;if(R.preventDefault(),!n){o("Please log in to post a comment.","info"),i("/login");return}if(c.trim()){w(!0);try{const V=await A.addComment(e,c.trim());V.success&&((U=V.data)!=null&&U.comment)&&(k(D=>[...D,V.data.comment]),p(""),o("Comment posted!","success"))}catch{o("Failed to submit comment","error")}finally{w(!1)}}},Ie=async R=>{if(_.trim())try{(await A.editComment(R,_.trim())).success&&(k(V=>V.map(D=>D.id===R?{...D,content:_.trim()}:D)),P(null),o("Comment updated","success"))}catch{o("Failed to update comment","error")}},qe=async R=>{try{(await A.deleteComment(R)).success&&(k(V=>V.filter(D=>D.id!==R)),o("Comment deleted","success"))}catch{o("Failed to delete comment","error")}};return l?t.jsx("div",{className:"container",style:{padding:"60px 20px",textAlign:"center"},children:t.jsx("p",{children:"Loading post details..."})}):s?t.jsx("div",{style:{background:"#f8fafc",padding:"40px 0 80px"},children:t.jsxs("div",{className:"container",style:{maxWidth:"980px"},children:[t.jsxs(T,{to:"/explore",style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"20px"},children:[t.jsx(lt,{size:16})," Back to Explore"]}),t.jsxs("div",{className:"card",style:{padding:"20px 28px",marginBottom:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsx(T,{to:`/profile/${s.username}`,children:t.jsx("img",{src:s.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:s.full_name,style:{width:"52px",height:"52px",borderRadius:"50%",objectFit:"cover"}})}),t.jsxs("div",{children:[t.jsx(T,{to:`/profile/${s.username}`,children:t.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"800",color:"var(--text-main)"},children:s.full_name||s.username})}),t.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:["@",s.username," • ",s.professional_title]})]})]}),(r==null?void 0:r.id)!==s.user_id&&t.jsx("button",{onClick:S,className:`btn btn-sm ${f?"btn-secondary":"btn-primary"}`,style:{display:"flex",alignItems:"center",gap:"6px"},children:f?t.jsxs(t.Fragment,{children:[t.jsx(mr,{size:14,color:"var(--success)"})," Following"]}):t.jsxs(t.Fragment,{children:[t.jsx(eo,{size:14})," Follow"]})})]}),t.jsxs("div",{className:"card",style:{padding:"0",overflow:"hidden",marginBottom:"32px"},children:[t.jsxs("div",{style:{padding:"28px 32px 18px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"},children:[t.jsx("span",{className:"badge badge-primary",children:s.category_name}),t.jsxs("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:["Published on ",new Date(s.created_at).toLocaleDateString()]})]}),t.jsx("h1",{style:{fontSize:"2rem",fontWeight:"800",color:"var(--text-main)",lineHeight:"1.3"},children:s.title})]}),t.jsx("div",{style:{background:"#0b0f19",textAlign:"center"},children:(F=s.media)==null?void 0:F.map((R,U)=>t.jsx("img",{src:R.media_url,alt:`${s.title} showcase ${U}`,style:{width:"100%",maxHeight:"680px",objectFit:"contain",margin:"0 auto"}},R.id||U))}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 32px",borderBottom:"1px solid var(--border-light)",background:"#ffffff"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[t.jsxs("button",{onClick:W,style:{display:"flex",alignItems:"center",gap:"6px",background:"none",border:"none",fontSize:"0.95rem",fontWeight:"600",color:u?"#ef4444":"var(--text-main)",cursor:"pointer"},children:[t.jsx(He,{size:20,style:{fill:u?"#ef4444":"none"}}),t.jsxs("span",{children:[y," Likes"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.95rem",color:"var(--text-muted)"},children:[t.jsx(Pe,{size:19}),t.jsxs("span",{children:[h.length," Comments"]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.95rem",color:"var(--text-muted)"},children:[t.jsx(xe,{size:19}),t.jsxs("span",{children:[s.views_count," Views"]})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("button",{onClick:M,style:{background:"none",border:"none",cursor:"pointer",color:m?"#6366f1":"var(--text-muted)"},title:"Bookmark",children:t.jsx(Ti,{size:20,style:{fill:m?"#6366f1":"none"}})}),t.jsx("button",{onClick:H,style:{background:"none",border:"none",cursor:"pointer",color:"var(--text-muted)"},title:"Share link",children:t.jsx(Zn,{size:20})})]})]}),t.jsxs("div",{style:{padding:"28px 32px"},children:[t.jsx("p",{style:{fontSize:"1.05rem",lineHeight:"1.75",color:"#334155",whiteSpace:"pre-line",marginBottom:"24px"},children:s.description}),s.tags&&s.tags.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:s.tags.map(R=>t.jsxs("span",{className:"badge badge-neutral",style:{padding:"6px 14px"},children:["#",R.name]},R.id||R.name))})]})]}),t.jsxs("div",{className:"card",style:{padding:"32px"},children:[t.jsxs("h3",{style:{fontSize:"1.3rem",fontWeight:"800",marginBottom:"24px"},children:["Discussion (",h.length,")"]}),t.jsx("form",{onSubmit:G,style:{marginBottom:"32px"},children:t.jsxs("div",{style:{display:"flex",gap:"12px"},children:[t.jsx("img",{src:(r==null?void 0:r.profile_photo)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:"My Avatar",style:{width:"40px",height:"40px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1},children:[t.jsx("textarea",{rows:2,placeholder:n?"Share feedback or start a discussion...":"Please log in to leave a comment...",value:c,onChange:R=>p(R.target.value),disabled:!n,className:"form-textarea",style:{marginBottom:"10px"}}),t.jsxs("button",{type:"submit",disabled:!n||C||!c.trim(),className:"btn btn-primary btn-sm",style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(Ai,{size:14})," Post Comment"]})]})]})}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[h.map(R=>t.jsxs("div",{style:{display:"flex",gap:"14px",paddingBottom:"20px",borderBottom:"1px solid var(--border-light)"},children:[t.jsx("img",{src:R.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:R.full_name,style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{style:{fontWeight:"700",fontSize:"0.92rem",color:"var(--text-main)"},children:R.full_name||R.username}),t.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:new Date(R.created_at).toLocaleDateString()})]}),R.is_own&&t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("button",{onClick:()=>{P(R.id),N(R.content)},style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer"},children:t.jsx(Uh,{size:14})}),t.jsx("button",{onClick:()=>qe(R.id),style:{background:"none",border:"none",color:"var(--danger)",cursor:"pointer"},children:t.jsx(nn,{size:14})})]})]}),z===R.id?t.jsxs("div",{children:[t.jsx("input",{type:"text",value:_,onChange:U=>N(U.target.value),className:"form-input",style:{marginBottom:"8px"}}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("button",{onClick:()=>Ie(R.id),className:"btn btn-primary btn-sm",children:"Save"}),t.jsx("button",{onClick:()=>P(null),className:"btn btn-secondary btn-sm",children:"Cancel"})]})]}):t.jsx("p",{style:{fontSize:"0.92rem",color:"#334155",lineHeight:"1.5"},children:R.content})]})]},R.id)),h.length===0&&t.jsx("p",{style:{textAlign:"center",color:"var(--text-muted)",padding:"20px 0"},children:"No comments yet. Be the first to share your thoughts!"})]})]})]})}):t.jsxs("div",{className:"container",style:{padding:"60px 20px",textAlign:"center"},children:[t.jsx("h2",{children:"Post not found"}),t.jsx(T,{to:"/explore",className:"btn btn-primary",style:{marginTop:"16px"},children:"Back to Explore"})]})},gg=()=>{var H,G,Ie,qe,F,R,U,V;const{id:e}=_i(),{user:r,isAuthenticated:n}=pe(),{showToast:o}=ie(),i=oe(),[s,a]=g.useState(null),[l,d]=g.useState(!0),[u,x]=g.useState(!1),[y,v]=g.useState(0),[m,b]=g.useState(!1),[f,j]=g.useState(!1),[c,p]=g.useState(""),[h,k]=g.useState([]),[C,w]=g.useState(!1);g.useEffect(()=>{(async()=>{var L;try{const B=await A.getPost(e);if(B.success&&((L=B.data)!=null&&L.post)){const $=B.data.post;a($),x($.is_liked),v($.likes_count),b($.is_saved),j($.is_following_creator),k($.comments||[])}}catch{o("Failed to load video post","error")}finally{d(!1)}})()},[e]);const z=async()=>{if(!n){o("Please sign in to like videos.","info"),i("/login");return}try{const D=await A.toggleLike(e);D.success&&(x(D.data.liked),v(D.data.likes_count))}catch{o("Error liking video","error")}},P=async()=>{if(!n){o("Please sign in to save bookmarks.","info"),i("/login");return}try{const D=await A.toggleSave(e);D.success&&(b(D.data.saved),o(D.message,"success"))}catch{o("Error saving video","error")}},_=()=>{navigator.clipboard.writeText(window.location.href),o("Video link copied!","success")},N=async D=>{var L;if(D.preventDefault(),!n){o("Please log in to comment.","info"),i("/login");return}if(c.trim()){w(!0);try{const B=await A.addComment(e,c.trim());B.success&&((L=B.data)!=null&&L.comment)&&(k($=>[...$,B.data.comment]),p(""),o("Comment posted!","success"))}catch{o("Failed to post comment","error")}finally{w(!1)}}};if(l)return t.jsx("div",{className:"container",style:{padding:"60px",textAlign:"center"},children:t.jsx("p",{children:"Loading video player..."})});if(!s)return t.jsx("div",{className:"container",style:{padding:"60px",textAlign:"center"},children:t.jsx("h2",{children:"Video not found"})});const W=(H=s.media)==null?void 0:H.find(D=>D.media_type==="video"||D.media_url&&D.media_url.endsWith(".mp4"));let M=W==null?void 0:W.media_url;M||(s.id===25||(G=s.title)!=null&&G.includes("Lesson 01")?M="/assets/vedio/lesson 1.mp4":s.id===26||(Ie=s.title)!=null&&Ie.includes("Lesson 02")?M="/assets/vedio/lesson 2.mp4":s.id===27||(qe=s.title)!=null&&qe.includes("Lesson 03")?M="/assets/vedio/vedio editing.mp4":(F=s.cover_image)!=null&&F.endsWith(".mp4")?M=s.cover_image:M="/assets/vedio/vedio editing.mp4");const S=s.id===25||(R=s.title)!=null&&R.includes("Lesson 01")?"/assets/lesson_01_cover.jpg":s.id===26||(U=s.title)!=null&&U.includes("Lesson 02")?"/assets/lesson_02_cover.jpg":(V=s.cover_image)!=null&&V.endsWith(".mp4")?"":s.cover_image;return t.jsx("div",{style:{background:"#f8fafc",padding:"40px 0 80px"},children:t.jsxs("div",{className:"container",style:{maxWidth:"1000px"},children:[t.jsxs(T,{to:"/explore",style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"20px"},children:[t.jsx(lt,{size:16})," Back to Explore"]}),t.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden",background:"#0b0f19",marginBottom:"24px",boxShadow:"var(--shadow-lg)"},children:[t.jsx("div",{style:{position:"relative",width:"100%",maxHeight:"560px",background:"#000000",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx("video",{src:M,poster:S,controls:!0,playsInline:!0,style:{width:"100%",maxHeight:"560px",objectFit:"contain"}})}),t.jsxs("div",{style:{padding:"24px 28px",background:"#ffffff"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",marginBottom:"14px"},children:[t.jsxs("div",{children:[t.jsx("span",{className:"badge badge-primary",style:{marginBottom:"8px"},children:s.category_name}),t.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:"800",color:"var(--text-main)",marginTop:"4px"},children:s.title})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsxs("button",{onClick:z,className:"btn btn-secondary",style:{color:u?"#ef4444":"inherit",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(He,{size:18,style:{fill:u?"#ef4444":"none"}}),t.jsx("span",{children:y})]}),t.jsx("button",{onClick:P,className:"btn btn-secondary",style:{color:m?"#6366f1":"inherit"},children:t.jsx(Ti,{size:18,style:{fill:m?"#6366f1":"none"}})}),t.jsx("button",{onClick:_,className:"btn btn-secondary",children:t.jsx(Zn,{size:18})})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",fontSize:"0.88rem",color:"var(--text-muted)",borderTop:"1px solid var(--border-light)",paddingTop:"14px"},children:[t.jsxs("span",{children:[s.views_count," views"]}),t.jsx("span",{children:"•"}),t.jsxs("span",{children:["Published on ",new Date(s.created_at).toLocaleDateString()]})]})]})]}),t.jsxs("div",{className:"card",style:{padding:"28px",marginBottom:"32px"},children:[t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:t.jsxs(T,{to:`/profile/${s.username}`,style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsx("img",{src:s.profile_photo||"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=80",alt:s.full_name,style:{width:"48px",height:"48px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{children:[t.jsx("h4",{style:{fontSize:"1.05rem",fontWeight:"800",color:"var(--text-main)"},children:s.full_name||s.username}),t.jsxs("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:["@",s.username," • ",s.professional_title]})]})]})}),t.jsx("p",{style:{fontSize:"1rem",lineHeight:"1.7",color:"#334155",whiteSpace:"pre-line",marginBottom:"20px"},children:s.description}),s.tags&&s.tags.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:s.tags.map(D=>t.jsxs("span",{className:"badge badge-neutral",children:["#",D.name]},D.id||D.name))})]}),t.jsxs("div",{className:"card",style:{padding:"32px"},children:[t.jsxs("h3",{style:{fontSize:"1.25rem",fontWeight:"800",marginBottom:"20px"},children:["Comments (",h.length,")"]}),t.jsxs("form",{onSubmit:N,style:{display:"flex",gap:"12px",marginBottom:"28px"},children:[t.jsx("input",{type:"text",placeholder:n?"Write a comment...":"Sign in to comment...",value:c,onChange:D=>p(D.target.value),disabled:!n,className:"form-input"}),t.jsx("button",{type:"submit",disabled:!n||C||!c.trim(),className:"btn btn-primary",children:t.jsx(Ai,{size:15})})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:h.map(D=>t.jsxs("div",{style:{display:"flex",gap:"12px"},children:[t.jsx("img",{src:D.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:D.full_name,style:{width:"36px",height:"36px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1,background:"var(--bg-main)",padding:"12px 16px",borderRadius:"var(--radius-md)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[t.jsx("span",{style:{fontWeight:"700",fontSize:"0.88rem"},children:D.full_name||D.username}),t.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:new Date(D.created_at).toLocaleDateString()})]}),t.jsx("p",{style:{fontSize:"0.9rem",color:"#334155"},children:D.content})]})]},D.id))})]})]})})},mg=()=>{var N,W;const{id:e}=_i(),{user:r,isAuthenticated:n}=pe(),{showToast:o}=ie(),i=oe(),[s,a]=g.useState(null),[l,d]=g.useState(!0),[u,x]=g.useState(!1),[y,v]=g.useState(0),[m,b]=g.useState(!1),[f,j]=g.useState(""),[c,p]=g.useState([]),[h,k]=g.useState(!1);g.useEffect(()=>{(async()=>{var S;try{const H=await A.getPost(e);if(H.success&&((S=H.data)!=null&&S.post)){const G=H.data.post;a(G),x(G.is_liked),v(G.likes_count),b(G.is_saved),p(G.comments||[])}}catch{o("Failed to load project details","error")}finally{d(!1)}})()},[e]);const C=async()=>{if(!n){o("Please sign in to like projects.","info"),i("/login");return}try{const M=await A.toggleLike(e);M.success&&(x(M.data.liked),v(M.data.likes_count))}catch{o("Error liking project","error")}},w=async()=>{if(!n){o("Please sign in to bookmark.","info"),i("/login");return}try{const M=await A.toggleSave(e);M.success&&(b(M.data.saved),o(M.message,"success"))}catch{o("Error saving project","error")}},z=()=>{navigator.clipboard.writeText(window.location.href),o("Project link copied!","success")},P=async M=>{var S;if(M.preventDefault(),!n){o("Please log in to leave feedback.","info"),i("/login");return}if(f.trim()){k(!0);try{const H=await A.addComment(e,f.trim());H.success&&((S=H.data)!=null&&S.comment)&&(p(G=>[...G,H.data.comment]),j(""),o("Comment posted!","success"))}catch{o("Error adding comment","error")}finally{k(!1)}}};if(l)return t.jsx("div",{className:"container",style:{padding:"60px",textAlign:"center"},children:t.jsx("p",{children:"Loading project presentation..."})});if(!s)return t.jsx("div",{className:"container",style:{padding:"60px",textAlign:"center"},children:t.jsx("h2",{children:"Project not found"})});const _=((W=(N=s.media)==null?void 0:N[0])==null?void 0:W.media_url)||"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80";return t.jsx("div",{style:{background:"#f8fafc",padding:"40px 0 80px"},children:t.jsxs("div",{className:"container",style:{maxWidth:"1040px"},children:[t.jsxs(T,{to:"/explore",style:{display:"inline-flex",alignItems:"center",gap:"6px",color:"var(--text-muted)",fontSize:"0.9rem",marginBottom:"20px"},children:[t.jsx(lt,{size:16})," Back to Explore"]}),t.jsxs("div",{className:"card",style:{padding:0,overflow:"hidden",marginBottom:"32px"},children:[t.jsxs("div",{style:{height:"380px",background:"#0f172a",position:"relative"},children:[t.jsx("img",{src:_,alt:s.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),t.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)"}}),t.jsxs("div",{style:{position:"absolute",bottom:"24px",left:"28px",right:"28px",color:"#ffffff"},children:[t.jsx("span",{className:"badge badge-primary",style:{marginBottom:"10px"},children:s.category_name}),t.jsx("h1",{style:{fontSize:"2.2rem",fontWeight:"800",color:"#ffffff",lineHeight:"1.2"},children:s.title})]})]}),t.jsxs("div",{style:{padding:"24px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"20px",borderBottom:"1px solid var(--border-light)"},children:[t.jsxs(T,{to:`/profile/${s.username}`,style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsx("img",{src:s.profile_photo||"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",alt:s.full_name,style:{width:"46px",height:"46px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{children:[t.jsx("h4",{style:{fontSize:"1rem",fontWeight:"700",color:"var(--text-main)"},children:s.full_name||s.username}),t.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["@",s.username," • ",s.professional_title]})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[s.project_url&&t.jsxs("a",{href:s.project_url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(Qt,{size:16})," Live Preview"]}),s.github_url&&t.jsxs("a",{href:s.github_url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[t.jsx(Rh,{size:16})," View Code"]}),t.jsxs("button",{onClick:C,className:"btn btn-secondary",style:{color:u?"#ef4444":"inherit"},children:[t.jsx(He,{size:16,style:{fill:u?"#ef4444":"none"}}),t.jsx("span",{children:y})]}),t.jsx("button",{onClick:w,className:"btn btn-secondary",style:{color:m?"#6366f1":"inherit"},children:t.jsx(Ti,{size:16,style:{fill:m?"#6366f1":"none"}})}),t.jsx("button",{onClick:z,className:"btn btn-secondary",children:t.jsx(Zn,{size:16})})]})]}),t.jsxs("div",{style:{padding:"32px"},children:[t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"800",marginBottom:"14px"},children:"Project Overview"}),t.jsx("p",{style:{fontSize:"1.05rem",lineHeight:"1.75",color:"#334155",whiteSpace:"pre-line",marginBottom:"28px"},children:s.description}),s.technologies&&t.jsxs("div",{style:{marginBottom:"28px",padding:"18px 24px",background:"var(--bg-main)",borderRadius:"var(--radius-md)"},children:[t.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"700",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"10px"},children:"Technologies & Frameworks"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:s.technologies.split(",").map((M,S)=>t.jsx("span",{className:"badge badge-primary",style:{padding:"6px 14px"},children:M.trim()},S))})]}),s.project_gallery&&s.project_gallery.length>0&&t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"800",marginBottom:"16px"},children:"Project Screenshots"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"16px"},children:s.project_gallery.map((M,S)=>t.jsx("img",{src:M.media_url,alt:`Screenshot ${S}`,style:{width:"100%",height:"220px",objectFit:"cover",borderRadius:"12px",border:"1px solid var(--border-color)"}},S))})]})]})]}),t.jsxs("div",{className:"card",style:{padding:"32px"},children:[t.jsxs("h3",{style:{fontSize:"1.25rem",fontWeight:"800",marginBottom:"20px"},children:["Feedback & Reviews (",c.length,")"]}),t.jsxs("form",{onSubmit:P,style:{display:"flex",gap:"12px",marginBottom:"28px"},children:[t.jsx("input",{type:"text",placeholder:n?"Leave feedback on this project...":"Sign in to leave feedback...",value:f,onChange:M=>j(M.target.value),disabled:!n,className:"form-input"}),t.jsx("button",{type:"submit",disabled:!n||h||!f.trim(),className:"btn btn-primary",children:t.jsx(Ai,{size:15})})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:c.map(M=>t.jsxs("div",{style:{display:"flex",gap:"12px"},children:[t.jsx("img",{src:M.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:M.full_name,style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1,background:"var(--bg-main)",padding:"14px 18px",borderRadius:"var(--radius-md)"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"4px"},children:[t.jsx("span",{style:{fontWeight:"700",fontSize:"0.9rem"},children:M.full_name||M.username}),t.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:new Date(M.created_at).toLocaleDateString()})]}),t.jsx("p",{style:{fontSize:"0.92rem",color:"#334155"},children:M.content})]})]},M.id))})]})]})})},yg=()=>{const[e,r]=g.useState(!1),[n,o]=g.useState(0),[i,s]=g.useState(0),[a,l]=g.useState(0),[d,u]=g.useState(0);g.useEffect(()=>{const Au=46.666666666666664;let to=0,Fi=!1;const Fu=setInterval(()=>{if(!Fi){to++;const Du=to/30,ro=1-Math.pow(1-Du,3);o(Math.round(1e3*ro)),s(Math.round(500*ro)),l(Math.round(200*ro)),u(Math.round(100*ro)),to>=30&&(Fi=!0,setTimeout(()=>{to=0,Fi=!1},700))}},Au);return()=>clearInterval(Fu)},[]);const x=g.useRef(null),[y,v]=g.useState(!0),[m,b]=g.useState(0),[f,j]=g.useState(75),[c,p]=g.useState(1),[h,k]=g.useState(!1),[C,w]=g.useState("system"),[z,P]=g.useState(""),[_,N]=g.useState(""),W=75,M=[{id:0,startTime:0,endTime:15,title:"1. Platform Overview (Landing & Hero)",badge:"Platform Overview",subtitle:"Welcome to PartfolioHub — The premier modern ecosystem where creators showcase their work to a global audience.",icon:li},{id:1,startTime:15,endTime:30,title:"2. Explore Portfolios (Discover Work)",badge:"Portfolio Showcase",subtitle:"Browse top featured projects across Graphic Design, Web Development, Video Editing, and System Engineering.",icon:Fd},{id:2,startTime:30,endTime:45,title:"3. Creator Profile (CV & Badges)",badge:"Creator CV & Badges",subtitle:"Every creator gets a dedicated professional profile showcasing verified badges, skills, projects, and direct contact avenues.",icon:br},{id:3,startTime:45,endTime:60,title:"4. Create & Upload (Publish Work)",badge:"Publish New Work",subtitle:"Publish new projects in seconds with high-res media, live links, video demonstrations, tags, and detailed narratives.",icon:Yn},{id:4,startTime:60,endTime:75,title:"5. Direct Messaging & Client Deals",badge:"Client Deals & Chat",subtitle:"Connect directly with clients and collaborators, negotiate contracts, and close opportunities seamlessly inside the platform.",icon:Pe}],S=M.findIndex(B=>m>=B.startTime&&m<B.endTime),H=M[S!==-1?S:0],G=()=>{x.current?x.current.paused?(x.current.play(),v(!0)):(x.current.pause(),v(!1)):v(!y)},Ie=()=>{x.current&&(x.current.currentTime=0,x.current.play()),b(0),v(!0)},qe=()=>{x.current?(x.current.muted=!x.current.muted,k(x.current.muted)):k(!h)},F=B=>{const $=B.currentTarget.getBoundingClientRect(),J=B.clientX-$.left,nr=Math.max(0,Math.min(1,J/$.width))*(f||W);x.current&&(x.current.currentTime=nr),b(nr)},R=B=>{p(B),x.current&&(x.current.playbackRate=B)},U=()=>{x.current&&(x.current.requestFullscreen?x.current.requestFullscreen():x.current.webkitRequestFullscreen&&x.current.webkitRequestFullscreen())},V=B=>{x.current&&(x.current.currentTime=B,x.current.play()),b(B),v(!0)};g.useEffect(()=>{!e&&x.current&&(x.current.pause(),v(!1))},[e]);const D=B=>{const $=Math.floor(B/60),J=Math.floor(B%60);return`${$.toString().padStart(2,"0")}:${J.toString().padStart(2,"0")}`},L=B=>{var $,J;if(B.preventDefault(),z.trim()){let Z=z.trim();Z.includes("youtube.com/watch?v=")?Z=`https://www.youtube.com/embed/${($=Z.split("v=")[1])==null?void 0:$.split("&")[0]}?autoplay=1`:Z.includes("youtu.be/")&&(Z=`https://www.youtube.com/embed/${(J=Z.split("youtu.be/")[1])==null?void 0:J.split("?")[0]}?autoplay=1`),N(Z)}};return t.jsxs("div",{className:"about-page-wrapper",children:[t.jsxs("section",{className:"about-hero-section",children:[t.jsx("div",{className:"about-hero-glow-left"}),t.jsx("div",{className:"about-hero-glow-right"}),t.jsxs("div",{className:"container about-hero-container",children:[t.jsxs("div",{className:"about-hero-content",children:[t.jsxs("div",{className:"about-hero-badge",children:[t.jsx(dt,{size:16,strokeWidth:2.4,className:"about-badge-icon"}),t.jsx("span",{children:"About PartfolioHub"})]}),t.jsxs("h1",{className:"about-hero-title",children:["The Hub for Creativity",t.jsx("span",{className:"about-title-highlight",children:" & Opportunities"})]}),t.jsx("p",{className:"about-hero-desc",children:"PartfolioHub is a cutting-edge platform empowering creative talents to showcase their skills, publish portfolios, and connect with career-defining jobs, projects, and client collaborations."}),t.jsxs("div",{className:"about-hero-actions",children:[t.jsxs(T,{to:"/register",className:"about-btn-primary",children:[t.jsx(yn,{size:18,strokeWidth:2.4}),t.jsx("span",{children:"Get Started"}),t.jsx(ve,{size:17,strokeWidth:2.4})]}),t.jsxs("button",{type:"button",onClick:()=>{r(!0),v(!0),b(0)},className:"about-btn-secondary",children:[t.jsx(Th,{size:20,strokeWidth:2.2}),t.jsx("span",{children:"Watch System Tour"})]})]})]}),t.jsx("div",{className:"about-hero-visual-wrap",children:t.jsxs("div",{className:"about-hero-workspace-card",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80",alt:"PartfolioHub Creator at Workstation",className:"about-hero-main-img"}),t.jsx("div",{className:"about-hero-img-overlay"}),t.jsxs("div",{className:"about-float-card about-float-profile",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",alt:"Abdala Creator",className:"about-profile-avatar"}),t.jsxs("div",{className:"about-profile-info",children:[t.jsx("h4",{children:"Abdala Creator"}),t.jsx("p",{children:"Web Developer"})]}),t.jsx("button",{className:"about-profile-follow-btn",children:"Follow"})]}),t.jsxs("div",{className:"about-float-card about-float-stats",children:[t.jsx("div",{className:"about-stats-iconbox",children:t.jsx(Ad,{size:18,strokeWidth:2.5,color:"#00d2ff"})}),t.jsxs("div",{children:[t.jsx("h4",{children:"Build Portfolio"}),t.jsx("p",{children:"Showcase your skills to the world"})]})]}),t.jsxs("div",{className:"about-float-dock",children:[t.jsxs("div",{className:"about-dock-item",title:"Website",children:[t.jsx(Ei,{size:16,strokeWidth:2.2,color:"#00d2ff"}),t.jsx("span",{children:"Website"})]}),t.jsxs("div",{className:"about-dock-item",title:"Image",children:[t.jsx(xl,{size:16,strokeWidth:2.2,color:"#ec4899"}),t.jsx("span",{children:"Image"})]}),t.jsxs("div",{className:"about-dock-item",title:"Video",children:[t.jsx(Zh,{size:16,strokeWidth:2.2,color:"#f97316"}),t.jsx("span",{children:"Video"})]}),t.jsxs("div",{className:"about-dock-item",title:"Skills",children:[t.jsx(Wu,{size:16,strokeWidth:2.2,color:"#a855f7"}),t.jsx("span",{children:"Skills"})]})]}),t.jsxs("div",{className:"about-float-card about-float-feedback",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",alt:"Ayuun Ali",className:"about-feedback-avatar"}),t.jsxs("div",{className:"about-feedback-text",children:[t.jsx("div",{className:"about-feedback-header",children:t.jsx("h4",{children:"Ayuun Ali"})}),t.jsxs("p",{children:["Absolutely stunning work! Thank you for sharing your creative talent.",t.jsx(He,{size:13,fill:"#a855f7",color:"#a855f7",style:{display:"inline",marginLeft:"5px"}})]})]})]})]})})]})]}),t.jsx("section",{className:"about-features-section",children:t.jsxs("div",{className:"container about-features-container",children:[t.jsxs("div",{className:"about-what-is-col",children:[t.jsxs("div",{className:"about-section-sub-badge",children:[t.jsx(Cu,{size:15,strokeWidth:2.4,color:"#6e25e8"}),t.jsx("span",{children:"Why PartfolioHub?"})]}),t.jsxs("h2",{className:"about-what-title",children:["What is ",t.jsx("span",{className:"about-brand-color",children:"PartfolioHub?"})]}),t.jsx("p",{className:"about-what-desc",children:"PartfolioHub is a next-generation digital ecosystem connecting talented creators, job seekers, clients, and forward-thinking enterprises. It enables you to:"}),t.jsxs("ul",{className:"about-checklist",children:[t.jsxs("li",{children:[t.jsx("div",{className:"about-check-icon",children:t.jsx(it,{size:20,strokeWidth:2.5,color:"#6e25e8"})}),t.jsx("span",{children:"Build and customize your verified professional profile"})]}),t.jsxs("li",{children:[t.jsx("div",{className:"about-check-icon",children:t.jsx(it,{size:20,strokeWidth:2.5,color:"#6e25e8"})}),t.jsx("span",{children:"Publish multimedia portfolios (images, videos, links, and skill tags)"})]}),t.jsxs("li",{children:[t.jsx("div",{className:"about-check-icon",children:t.jsx(it,{size:20,strokeWidth:2.5,color:"#6e25e8"})}),t.jsx("span",{children:"Share your creative mastery with an international audience"})]}),t.jsxs("li",{children:[t.jsx("div",{className:"about-check-icon",children:t.jsx(it,{size:20,strokeWidth:2.5,color:"#6e25e8"})}),t.jsx("span",{children:"Discover high-impact career opportunities, freelance gigs, and contracts"})]}),t.jsxs("li",{children:[t.jsx("div",{className:"about-check-icon",children:t.jsx(it,{size:20,strokeWidth:2.5,color:"#6e25e8"})}),t.jsx("span",{children:"Network directly with creators, clients, and creative directors"})]})]})]}),t.jsxs("div",{className:"about-capabilities-col",children:[t.jsxs("div",{className:"about-section-sub-badge",children:[t.jsx(Xe,{size:15,strokeWidth:2.4,color:"#6e25e8"}),t.jsx("span",{children:"System Capabilities"})]}),t.jsx("h2",{className:"about-capabilities-title",children:"What the Platform Offers"}),t.jsxs("div",{className:"about-cards-grid",children:[t.jsxs("div",{className:"about-feature-box",children:[t.jsx("div",{className:"about-feature-circle-icon",children:t.jsx(br,{size:22,strokeWidth:2.3,color:"#ffffff"})}),t.jsxs("div",{className:"about-feature-box-content",children:[t.jsx("h3",{children:"Profile Creation"}),t.jsx("p",{children:"Register effortlessly and build your standout creator portfolio CV."})]})]}),t.jsxs("div",{className:"about-feature-box",children:[t.jsx("div",{className:"about-feature-circle-icon",children:t.jsx(Yn,{size:22,strokeWidth:2.3,color:"#ffffff"})}),t.jsxs("div",{className:"about-feature-box-content",children:[t.jsx("h3",{children:"Upload Portfolio"}),t.jsx("p",{children:"Publish project images, video demos, links, and detailed skill tags."})]})]}),t.jsxs("div",{className:"about-feature-box",children:[t.jsx("div",{className:"about-feature-circle-icon",children:t.jsx(Pe,{size:22,strokeWidth:2.3,color:"#ffffff"})}),t.jsxs("div",{className:"about-feature-box-content",children:[t.jsx("h3",{children:"Views & Feedback"}),t.jsx("p",{children:"Attract client views, community likes, and constructive testimonials."})]})]}),t.jsxs("div",{className:"about-feature-box",children:[t.jsx("div",{className:"about-feature-circle-icon",children:t.jsx(dt,{size:22,strokeWidth:2.3,color:"#ffffff"})}),t.jsxs("div",{className:"about-feature-box-content",children:[t.jsx("h3",{children:"Collaboration & Deals"}),t.jsx("p",{children:"Communicate directly with hiring managers, agencies, and fellow talent."})]})]}),t.jsxs("div",{className:"about-feature-box",children:[t.jsx("div",{className:"about-feature-circle-icon",children:t.jsx(Zt,{size:22,strokeWidth:2.3,color:"#ffffff"})}),t.jsxs("div",{className:"about-feature-box-content",children:[t.jsx("h3",{children:"Trust & Verification"}),t.jsx("p",{children:"Earn verified badges that validate your authentic identity and talent."})]})]}),t.jsxs("div",{className:"about-feature-box",children:[t.jsx("div",{className:"about-feature-circle-icon",children:t.jsx(_u,{size:22,strokeWidth:2.3,color:"#ffffff"})}),t.jsxs("div",{className:"about-feature-box-content",children:[t.jsx("h3",{children:"Mobile & Desktop"}),t.jsx("p",{children:"Fully responsive architecture optimized across smartphones, tablets, and desktop."})]})]})]})]})]})}),t.jsx("section",{className:"about-stats-section",children:t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"about-stats-header",children:t.jsxs("div",{className:"about-section-sub-badge",children:[t.jsx(Ad,{size:15,strokeWidth:2.4,color:"#6e25e8"}),t.jsx("span",{children:"Platform Impact"})]})}),t.jsxs("div",{className:"about-metrics-row",children:[t.jsxs("div",{className:"about-metric-card",children:[t.jsx("div",{className:"about-metric-icon",children:t.jsx(dt,{size:24,strokeWidth:2.4,color:"#6e25e8"})}),t.jsxs("div",{className:"about-metric-meta",children:[t.jsxs("h3",{className:"about-metric-value",children:[n,"+"]}),t.jsx("p",{className:"about-metric-label",children:"Registered Creators"})]})]}),t.jsxs("div",{className:"about-metric-card",children:[t.jsx("div",{className:"about-metric-icon",children:t.jsx(Fd,{size:24,strokeWidth:2.4,color:"#6e25e8"})}),t.jsxs("div",{className:"about-metric-meta",children:[t.jsxs("h3",{className:"about-metric-value",children:[i,"+"]}),t.jsx("p",{className:"about-metric-label",children:"Portfolios Published"})]})]}),t.jsxs("div",{className:"about-metric-card",children:[t.jsx("div",{className:"about-metric-icon",children:t.jsx(yu,{size:24,strokeWidth:2.4,color:"#6e25e8"})}),t.jsxs("div",{className:"about-metric-meta",children:[t.jsxs("h3",{className:"about-metric-value",children:[a,"+"]}),t.jsx("p",{className:"about-metric-label",children:"Jobs & Projects"})]})]}),t.jsxs("div",{className:"about-metric-card",children:[t.jsx("div",{className:"about-metric-icon",children:t.jsx(Kh,{size:24,strokeWidth:2.4,fill:"#6e25e8",color:"#6e25e8"})}),t.jsxs("div",{className:"about-metric-meta",children:[t.jsxs("h3",{className:"about-metric-value",children:[d,"%"]}),t.jsx("p",{className:"about-metric-label",children:"Trust & Satisfaction"})]})]})]}),t.jsxs("div",{className:"about-mission-grid",children:[t.jsxs("div",{className:"about-mission-photo-card",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",alt:"Creator working on laptop",className:"about-mission-photo"}),t.jsx("div",{className:"about-mission-photo-gradient"}),t.jsxs("div",{className:"about-handwriting-overlay",children:[t.jsx("span",{className:"about-script-skills",children:"Your Skills"}),t.jsx("span",{className:"about-script-future",children:"Your Future"})]})]}),t.jsxs("div",{className:"about-mission-cards-col",children:[t.jsxs("div",{className:"about-pillar-box",children:[t.jsx("div",{className:"about-pillar-icon-box",children:t.jsx(Pu,{size:24,strokeWidth:2.4,color:"#6e25e8"})}),t.jsxs("div",{className:"about-pillar-body",children:[t.jsx("h4",{children:"Our Mission"}),t.jsx("p",{children:"To cultivate an empowered digital creator ecosystem where talent meets limitless opportunity, skill growth, and continuous advancement."})]})]}),t.jsxs("div",{className:"about-pillar-box",children:[t.jsx("div",{className:"about-pillar-icon-box",children:t.jsx(xe,{size:24,strokeWidth:2.4,color:"#6e25e8"})}),t.jsxs("div",{className:"about-pillar-body",children:[t.jsx("h4",{children:"Our Vision"}),t.jsx("p",{children:"To establish PartfolioHub as the leading global bridge uniting creativity, high-caliber craftsmanship, and career success."})]})]})]})]})]})}),t.jsx("section",{className:"about-cta-section",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"about-cta-banner",children:[t.jsxs("div",{className:"about-cta-left",children:[t.jsx("div",{className:"about-cta-rocket-badge",children:t.jsx(yn,{size:26,strokeWidth:2.3,color:"#ffffff"})}),t.jsxs("div",{className:"about-cta-texts",children:[t.jsx("h2",{children:"Join PartfolioHub Today"}),t.jsx("p",{children:"Build your profile, showcase your best work, and unlock high-impact opportunities."})]})]}),t.jsx("div",{className:"about-cta-right",children:t.jsxs(T,{to:"/register",className:"about-cta-white-btn",children:[t.jsx(yn,{size:18,strokeWidth:2.3,color:"#6e25e8"}),t.jsx("span",{children:"Get Started"}),t.jsx(ve,{size:17,strokeWidth:2.3,color:"#6e25e8"})]})})]})})}),e&&t.jsx("div",{className:"modal-overlay",onClick:()=>r(!1),children:t.jsxs("div",{className:"modal-box about-video-modal",onClick:B=>B.stopPropagation(),children:[t.jsxs("div",{className:"about-modal-header",children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs("div",{className:"about-live-pulse-badge",children:[t.jsx("span",{className:"about-live-dot"}),t.jsx("span",{children:"TOUR VIDEO"})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{margin:0,fontSize:"1.28rem",fontWeight:900,color:"#0c1538"},children:"PartfolioHub System Tour & Walkthrough (HD)"}),t.jsx("p",{style:{margin:"3px 0 0",fontSize:"0.8rem",color:"#64748b"},children:"Watch how the platform works step-by-step through our interactive virtual player"})]})]}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:t.jsx("button",{type:"button",onClick:()=>r(!1),className:"about-modal-close",title:"Close",children:t.jsx(Ae,{size:20})})})]}),t.jsxs("div",{className:"about-modal-video-body",children:[t.jsxs("div",{className:"about-video-mode-nav",children:[t.jsxs("button",{type:"button",onClick:()=>{w("system"),v(!0)},className:`about-mode-btn ${C==="system"?"active":""}`,children:[t.jsx(zu,{size:16}),t.jsx("span",{children:"🖥️ System Walkthrough (PartfolioHub Tour)"})]}),t.jsxs("button",{type:"button",onClick:()=>w("custom"),className:`about-mode-btn ${C==="custom"?"active":""}`,children:[t.jsx(Qt,{size:16}),t.jsx("span",{children:"🔗 Custom Video Player (YouTube / MP4)"})]})]}),C==="system"&&t.jsxs("div",{className:"about-system-cinema-frame",children:[t.jsxs("div",{className:"about-cinema-topbar",children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:"about-cinema-quality",children:"1080p FHD 60FPS"}),t.jsx("span",{className:"about-cinema-scene-tag",children:H.badge})]}),t.jsxs("div",{className:"about-cinema-timer",children:[D(m)," / ",D(W)]})]}),t.jsxs("div",{className:"about-real-video-screen",children:[t.jsx("video",{ref:x,src:"/assets/vedio/vedio%20about.mp4",className:"about-system-real-video",playsInline:!0,controls:!0,autoPlay:!0,onTimeUpdate:()=>{x.current&&b(x.current.currentTime)},onLoadedMetadata:()=>{x.current&&x.current.duration&&j(x.current.duration)},onPlay:()=>v(!0),onPause:()=>v(!1),onEnded:()=>v(!1)}),t.jsx("div",{className:"about-cinema-voiceover",children:t.jsx("p",{children:H.subtitle})})]}),t.jsxs("div",{className:"about-cinema-controls",children:[t.jsx("button",{type:"button",onClick:G,className:"about-control-btn",title:y?"Pause":"Play",children:y?t.jsx(Dh,{size:18}):t.jsx(_t,{size:18})}),t.jsx("button",{type:"button",onClick:Ie,className:"about-control-btn",title:"Replay from start",children:t.jsx(qh,{size:16})}),t.jsx("button",{type:"button",onClick:qe,className:"about-control-btn",title:h?"Unmute":"Mute",children:h?t.jsx(tg,{size:16}):t.jsx(eg,{size:16})}),t.jsx("div",{className:"about-scrubber-track",onClick:F,children:t.jsx("div",{className:"about-scrubber-fill",style:{width:`${(f||W)>0?m/(f||W)*100:0}%`}})}),t.jsxs("span",{className:"about-control-time",children:[D(m)," / ",D(f||W)]}),t.jsx("div",{className:"about-speed-selector",children:[1,1.25,1.5,2].map(B=>t.jsxs("button",{type:"button",onClick:()=>R(B),className:`about-speed-btn ${c===B?"active":""}`,children:[B,"x"]},B))}),t.jsx("button",{type:"button",onClick:U,className:"about-control-btn",title:"Fullscreen",children:t.jsx(Bh,{size:16})})]})]}),C==="custom"&&t.jsxs("div",{className:"about-custom-video-wrap",children:[t.jsxs("form",{onSubmit:L,className:"about-custom-video-form",children:[t.jsx("input",{type:"text",placeholder:"Enter YouTube URL (e.g., https://youtube.com/watch?v=...) or MP4 video link...",value:z,onChange:B=>P(B.target.value),className:"about-custom-input"}),t.jsxs("button",{type:"submit",className:"about-custom-play-btn",children:[t.jsx(_t,{size:16}),t.jsx("span",{children:"Play Video"})]})]}),_?t.jsx("div",{className:"about-custom-player-box",children:_.includes("youtube.com")?t.jsx("iframe",{src:_,title:"Custom Video Player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"about-custom-iframe"}):t.jsx("video",{src:_,controls:!0,autoPlay:!0,playsInline:!0,className:"about-custom-video-el"})}):t.jsxs("div",{className:"about-custom-empty-state",children:[t.jsx(rn,{size:40,color:"#8b5cf6"}),t.jsx("h4",{children:"Paste the video link you wish to watch"}),t.jsx("p",{children:"Paste any YouTube URL or direct MP4 video link to stream it smoothly inside the platform."})]})]}),t.jsxs("div",{className:"about-tour-chapters-wrap",children:[t.jsxs("div",{className:"about-tour-header-row",children:[t.jsx("h4",{style:{margin:0,fontSize:"0.98rem",fontWeight:800,color:"#0c1538"},children:"System Tour Chapters & Interactive Sections:"}),t.jsx("span",{style:{fontSize:"0.78rem",color:"#6e25e8",fontWeight:700},children:"Click any chapter to jump directly"})]}),t.jsx("div",{className:"about-chapter-buttons-grid",children:M.map(B=>{const $=B.icon,J=H.id===B.id&&C==="system";return t.jsxs("button",{type:"button",onClick:()=>{w("system"),V(B.startTime)},className:`about-chapter-tab-btn ${J?"active":""}`,children:[t.jsx("div",{className:"about-chapter-tab-icon",children:t.jsx($,{size:16,color:J?"#ffffff":"#6e25e8"})}),t.jsxs("div",{style:{textAlign:"left",flex:1,overflow:"hidden"},children:[t.jsx("div",{className:"about-chapter-tab-title",children:B.title}),t.jsx("div",{className:"about-chapter-tab-badge",children:B.badge})]})]},B.id)})}),t.jsxs("div",{className:"about-modal-actions-row",children:[t.jsxs(T,{to:"/register",onClick:()=>r(!1),className:"about-modal-btn-register",children:[t.jsx(yn,{size:16}),t.jsx("span",{children:"Create Your Profile (Sign Up)"}),t.jsx(ve,{size:15})]}),t.jsxs(T,{to:"/explore",onClick:()=>r(!1),className:"about-modal-btn-explore",children:[t.jsx(li,{size:16}),t.jsx("span",{children:"Explore Portfolios"})]})]})]})]})]})}),t.jsx("style",{children:`
        .about-page-wrapper {
          width: 100%;
          background: #ffffff;
          overflow-x: hidden;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
        }

        /* ---------------- HERO SECTION ---------------- */
        .about-hero-section {
          background-color: #030614;
          background-image: 
            radial-gradient(ellipse at 15% 10%, rgba(59, 130, 246, 0.16) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 25%, rgba(124, 58, 237, 0.22) 0%, transparent 60%),
            radial-gradient(circle at 50% 90%, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 85px 0 100px;
          border-bottom: 1px solid rgba(124, 58, 237, 0.2);
        }

        .about-hero-glow-left {
          position: absolute;
          top: 0;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-hero-glow-right {
          position: absolute;
          top: 20%;
          right: -10%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-hero-container {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 50px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          border-radius: 9999px;
          background: rgba(99, 102, 241, 0.18);
          border: 1px solid rgba(147, 197, 253, 0.3);
          color: #c084fc;
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .about-badge-icon {
          color: #a855f7;
        }

        .about-hero-title {
          font-size: 3.25rem;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.035em;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .about-title-highlight {
          display: block;
          color: #00d2ff;
          text-shadow: 0 0 24px rgba(0, 210, 255, 0.4);
        }

        .about-hero-desc {
          font-size: 1.02rem;
          line-height: 1.7;
          color: #94a3b8;
          max-width: 520px;
          margin-bottom: 34px;
        }

        .about-hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .about-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 800;
          padding: 14px 28px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(99, 102, 241, 0.55);
          border: 1px solid rgba(196, 181, 253, 0.35);
          transition: all 0.25s ease;
        }

        .about-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.75);
          filter: brightness(1.08);
        }

        .about-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 700;
          padding: 14px 26px;
          border-radius: 9999px;
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .about-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        /* Hero Right Visual Mockup */
        .about-hero-visual-wrap {
          position: relative;
        }

        .about-hero-workspace-card {
          position: relative;
          border-radius: 24px;
          overflow: visible;
          border: 1px solid rgba(124, 58, 237, 0.35);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 50px rgba(124, 58, 237, 0.25);
        }

        .about-hero-main-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }

        .about-hero-img-overlay {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(3, 6, 20, 0.2) 0%, rgba(3, 6, 20, 0.65) 100%);
          pointer-events: none;
        }

        /* Floating Overlays */
        .about-float-card {
          position: absolute;
          background: rgba(16, 22, 51, 0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(124, 58, 237, 0.35);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.55);
          border-radius: 16px;
          padding: 12px 16px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: floatSlow 5s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }

        .about-float-profile {
          top: -24px;
          left: 10%;
          background: #ffffff;
          border-color: #ffffff;
          color: #0c1538;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
        }

        .about-profile-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
        }

        .about-profile-info h4 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0;
        }

        .about-profile-info p {
          font-size: 0.78rem;
          color: #64748b;
          margin: 2px 0 0;
        }

        .about-profile-follow-btn {
          background: #6e25e8;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          border: none;
          padding: 6px 16px;
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .about-profile-follow-btn:hover {
          background: #5919c4;
        }

        .about-float-stats {
          top: -20px;
          right: -15px;
          color: #ffffff;
          animation-delay: -2s;
        }

        .about-stats-iconbox {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(0, 210, 255, 0.15);
          border: 1px solid rgba(0, 210, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-float-stats h4 {
          font-size: 0.88rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }

        .about-float-stats p {
          font-size: 0.74rem;
          color: #94a3b8;
          margin: 2px 0 0;
        }

        .about-float-dock {
          position: absolute;
          left: -20px;
          top: 32%;
          background: rgba(11, 16, 40, 0.88);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(124, 58, 237, 0.4);
          border-radius: 16px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          z-index: 4;
        }

        .about-dock-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .about-dock-item:hover {
          background: rgba(124, 58, 237, 0.25);
          color: #ffffff;
          transform: translateX(3px);
        }

        .about-float-feedback {
          bottom: -20px;
          right: 5%;
          background: #ffffff;
          border-color: #ffffff;
          color: #0c1538;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          max-width: 340px;
          animation-delay: -3.5s;
        }

        .about-feedback-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .about-feedback-text h4 {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0;
        }

        .about-feedback-text p {
          font-size: 0.79rem;
          color: #475569;
          margin: 3px 0 0;
          line-height: 1.4;
        }

        /* ---------------- SECTION 2 ---------------- */
        .about-features-section {
          padding: 95px 0 85px;
          background: #ffffff;
        }

        .about-features-container {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 65px;
          align-items: flex-start;
        }

        .about-section-sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: #f5f0ff;
          border: 1px solid #ebdcfc;
          color: #6e25e8;
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .about-what-title {
          font-size: 2.3rem;
          font-weight: 900;
          color: #0c1538;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          line-height: 1.25;
        }

        .about-brand-color {
          color: #6e25e8;
        }

        .about-what-desc {
          font-size: 0.96rem;
          line-height: 1.7;
          color: #64748b;
          margin-bottom: 26px;
        }

        .about-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-checklist li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.93rem;
          font-weight: 600;
          color: #1e293b;
        }

        .about-check-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .about-capabilities-title {
          font-size: 2.3rem;
          font-weight: 900;
          color: #0c1538;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .about-feature-box {
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 18px;
          padding: 22px 20px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }

        .about-feature-box:hover {
          border-color: #6e25e8;
          box-shadow: 0 10px 28px rgba(110, 37, 232, 0.1);
          transform: translateY(-3px);
        }

        .about-feature-circle-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
        }

        .about-feature-box-content h3 {
          font-size: 1.02rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0 0 6px;
          letter-spacing: -0.015em;
        }

        .about-feature-box-content p {
          font-size: 0.83rem;
          line-height: 1.55;
          color: #64748b;
          margin: 0;
        }

        /* ---------------- SECTION 3 ---------------- */
        .about-stats-section {
          padding: 70px 0 95px;
          background: #fbfbfe;
          border-top: 1px solid #ede8f8;
        }

        .about-stats-header {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .about-metrics-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }

        .about-metric-card {
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 18px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .about-metric-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(110, 37, 232, 0.08);
          border-color: #d8b4fe;
        }

        .about-metric-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #f5f0ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-metric-value {
          font-size: 1.7rem;
          font-weight: 900;
          color: #0c1538;
          line-height: 1.15;
          margin: 0 0 4px;
          letter-spacing: -0.02em;
        }

        .about-metric-label {
          font-size: 0.82rem;
          color: #64748b;
          margin: 0;
          font-weight: 600;
        }

        .about-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 28px;
          align-items: center;
        }

        .about-mission-photo-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          height: 250px;
        }

        .about-mission-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-mission-photo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(12, 21, 56, 0.3) 0%, rgba(110, 37, 232, 0.5) 100%);
        }

        .about-handwriting-overlay {
          position: absolute;
          top: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: rotate(-3deg);
          pointer-events: none;
        }

        .about-script-skills {
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 2.3rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .about-script-future {
          font-family: 'Caveat', cursive, sans-serif;
          font-size: 2.3rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-left: 20px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .about-mission-cards-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .about-pillar-box {
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 18px;
          padding: 24px 26px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.03);
          transition: all 0.25s ease;
        }

        .about-pillar-box:hover {
          border-color: #6e25e8;
          box-shadow: 0 10px 26px rgba(110, 37, 232, 0.08);
          transform: translateY(-2px);
        }

        .about-pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f5f0ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .about-pillar-body h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0 0 6px;
        }

        .about-pillar-body p {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }

        /* ---------------- SECTION 4 ---------------- */
        .about-cta-section {
          padding: 0 0 85px;
          background: #fbfbfe;
        }

        .about-cta-banner {
          background: linear-gradient(135deg, #090e29 0%, #151a4a 50%, #201956 100%);
          border-radius: 22px;
          padding: 38px 46px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
          box-shadow: 0 20px 50px rgba(12, 21, 56, 0.35), 0 0 35px rgba(110, 37, 232, 0.2);
          border: 1px solid rgba(147, 197, 253, 0.2);
          position: relative;
          overflow: hidden;
        }

        .about-cta-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(110, 37, 232, 0.4) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-cta-left {
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .about-cta-rocket-badge {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.5);
        }

        .about-cta-texts h2 {
          font-size: 1.65rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .about-cta-texts p {
          font-size: 0.95rem;
          color: #cbd5e1;
          margin: 0;
        }

        .about-cta-right {
          position: relative;
          z-index: 2;
        }

        .about-cta-white-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #6e25e8;
          font-size: 0.96rem;
          font-weight: 800;
          padding: 13px 28px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          transition: all 0.25s ease;
        }

        .about-cta-white-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 26px rgba(255, 255, 255, 0.3);
          background: #f8f6fd;
        }

        /* ---------------- VIDEO CINEMA MODAL ---------------- */
        .about-video-modal {
          max-width: 880px;
          width: 95%;
          max-height: 92vh;
          overflow-y: auto;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6), 0 0 60px rgba(110, 37, 232, 0.3);
          border: 1px solid rgba(110, 37, 232, 0.25);
        }

        .about-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 24px;
          border-bottom: 1px solid #ede8f8;
          background: #ffffff;
        }

        .about-live-pulse-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 9999px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #ef4444;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.03em;
        }

        .about-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ef4444;
          box-shadow: 0 0 8px #ef4444;
          animation: pulseDot 1.4s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .about-modal-close {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .about-modal-close:hover {
          background: #ef4444;
          color: #ffffff;
          border-color: #ef4444;
          transform: rotate(90deg);
        }

        .about-modal-video-body {
          padding: 20px 24px 26px;
          background: #ffffff;
        }

        /* Mode Selector */
        .about-video-mode-nav {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .about-mode-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .about-mode-btn:hover {
          border-color: #c084fc;
          color: #0c1538;
        }

        .about-mode-btn.active {
          background: #f5f0ff;
          border-color: #6e25e8;
          color: #6e25e8;
          box-shadow: 0 2px 10px rgba(110, 37, 232, 0.15);
        }

        /* Cinema Virtual System Player */
        .about-system-cinema-frame {
          background: #030614;
          border-radius: 18px;
          border: 1.5px solid rgba(124, 58, 237, 0.4);
          box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(110, 37, 232, 0.25);
          overflow: hidden;
          margin-bottom: 22px;
          position: relative;
        }

        .about-cinema-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: rgba(12, 21, 56, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-cinema-quality {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
          background: #10b981;
          color: #ffffff;
        }

        .about-cinema-scene-tag {
          font-size: 0.78rem;
          color: #c084fc;
          font-weight: 700;
        }

        .about-cinema-timer {
          font-family: monospace;
          font-size: 0.84rem;
          color: #ffffff;
          font-weight: 700;
        }

        .about-real-video-screen {
          position: relative;
          width: 100%;
          min-height: 400px;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .about-system-real-video {
          width: 100%;
          max-height: 520px;
          display: block;
          object-fit: contain;
          background: #000000;
        }

        .about-virtual-screen {
          min-height: 380px;
          background: linear-gradient(180deg, #070d24 0%, #030614 100%);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 18px 20px 65px;
        }

        .animate-fade-in {
          animation: fadeInScreen 0.4s ease-out;
        }

        @keyframes fadeInScreen {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Virtual UI Elements inside Screen */
        .about-virtual-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 8px 16px;
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }

        .about-virtual-logo-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6e25e8;
          box-shadow: 0 0 10px #6e25e8;
        }

        .about-virtual-nav-links {
          display: flex;
          gap: 14px;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        /* Scene 1: Hero */
        .about-virtual-hero-content {
          text-align: center;
          max-width: 500px;
          margin: 15px auto 0;
        }

        .about-virtual-pill {
          display: inline-block;
          font-size: 0.78rem;
          padding: 4px 14px;
          border-radius: 9999px;
          background: rgba(110, 37, 232, 0.25);
          color: #c084fc;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .about-virtual-hero-content h2 {
          font-size: 1.85rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .about-virtual-hero-content p {
          font-size: 0.88rem;
          color: #94a3b8;
          margin-bottom: 18px;
        }

        .about-virtual-hero-stats-row {
          display: flex;
          justify-content: center;
          gap: 24px;
        }

        .about-virtual-stat-mini {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .about-virtual-stat-mini strong {
          color: #ffffff;
          font-size: 1.1rem;
          display: block;
        }

        /* Scene 2: Explore */
        .about-explore-filter-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          overflow-x: auto;
        }

        .about-filter-chip {
          padding: 5px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 0.76rem;
          font-weight: 600;
        }

        .about-filter-chip.active {
          background: #6e25e8;
          color: #ffffff;
        }

        .about-virtual-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .about-vcard {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }

        .about-vcard-img {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-vcard-meta {
          padding: 10px 12px;
        }

        .about-vcard-meta h4 {
          font-size: 0.82rem;
          color: #ffffff;
          margin: 0 0 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .about-vcard-meta p {
          font-size: 0.72rem;
          color: #94a3b8;
          margin: 0 0 6px;
        }

        .about-vcard-likes {
          font-size: 0.7rem;
          color: #ec4899;
          font-weight: 700;
        }

        /* Scene 3: Profile */
        .about-vprofile-banner {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .about-vprofile-avatar-wrap {
          position: relative;
        }

        .about-vprofile-avatar-wrap img {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #6e25e8;
        }

        .about-vprofile-verified {
          position: absolute;
          bottom: 0;
          right: 0;
          background: #10b981;
          color: #ffffff;
          font-size: 0.65rem;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-vprofile-header-meta h3 {
          font-size: 1.05rem;
          color: #ffffff;
          margin: 0 0 4px;
        }

        .about-vprofile-header-meta p {
          font-size: 0.78rem;
          color: #94a3b8;
          margin: 0 0 8px;
        }

        .about-vprofile-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .about-vprofile-tags span {
          background: rgba(110, 37, 232, 0.2);
          color: #c084fc;
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 6px;
          font-weight: 600;
        }

        .about-vprofile-hire-btn {
          margin-left: auto;
          background: #6e25e8;
          color: #ffffff;
          border: none;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
        }

        .about-vprofile-stats-strip {
          display: flex;
          justify-content: space-around;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          padding: 12px;
          color: #94a3b8;
          font-size: 0.85rem;
        }

        .about-vprofile-stats-strip strong {
          color: #ffffff;
          font-size: 1.1rem;
        }

        /* Scene 4: Create Post */
        .about-vcreate-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 18px;
        }

        .about-vcreate-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .about-vcreate-header h4 {
          margin: 0;
          font-size: 0.95rem;
        }

        .about-vcreate-dropzone {
          border: 2px dashed rgba(110, 37, 232, 0.5);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          background: rgba(110, 37, 232, 0.06);
          margin-bottom: 14px;
        }

        .about-vcreate-dropzone p {
          color: #cbd5e1;
          font-size: 0.82rem;
          margin: 8px 0 6px;
        }

        .about-drop-badge {
          font-size: 0.72rem;
          color: #94a3b8;
        }

        .about-vcreate-fields {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .about-vfield {
          flex: 1;
          background: rgba(255, 255, 255, 0.06);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.78rem;
          color: #94a3b8;
        }

        .about-vfield strong {
          color: #ffffff;
          display: block;
        }

        .about-vcreate-success-toast {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid #10b981;
          color: #34d399;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
        }

        /* Scene 5: Messaging */
        .about-vchat-window {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 16px;
        }

        .about-vchat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 14px;
          color: #ffffff;
        }

        .about-vchat-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .about-contract-pill {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid #10b981;
          color: #34d399;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
        }

        .about-vchat-messages {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .about-msg-incoming {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 14px 14px 14px 2px;
          max-width: 80%;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .about-msg-outgoing {
          background: #6e25e8;
          color: #ffffff;
          padding: 10px 14px;
          border-radius: 14px 14px 2px 14px;
          max-width: 80%;
          margin-left: auto;
          font-size: 0.82rem;
          line-height: 1.45;
        }

        .about-msg-deal {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          padding: 8px 12px;
          border-radius: 8px;
          text-align: center;
          font-size: 0.8rem;
          margin-top: 6px;
        }

        /* Voiceover subtitle */
        .about-cinema-voiceover {
          position: absolute;
          bottom: 12px;
          left: 16px;
          right: 16px;
          background: rgba(12, 17, 43, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(124, 58, 237, 0.4);
          padding: 10px 16px;
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.84rem;
          font-weight: 600;
          line-height: 1.4;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .about-cinema-voiceover p {
          margin: 0;
        }

        /* Scrubber & Controls */
        .about-cinema-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(12, 21, 56, 0.95);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-control-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .about-control-btn:hover {
          background: #6e25e8;
          border-color: #6e25e8;
          transform: scale(1.08);
        }

        .about-scrubber-track {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          cursor: pointer;
          position: relative;
        }

        .about-scrubber-fill {
          height: 100%;
          background: linear-gradient(90deg, #6e25e8 0%, #00d2ff 100%);
          border-radius: 9999px;
          transition: width 0.1s linear;
        }

        .about-control-time {
          font-family: monospace;
          font-size: 0.78rem;
          color: #cbd5e1;
        }

        .about-speed-selector {
          display: flex;
          gap: 4px;
        }

        .about-speed-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #94a3b8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
          cursor: pointer;
        }

        .about-speed-btn.active {
          background: #6e25e8;
          color: #ffffff;
          border-color: #6e25e8;
        }

        /* Custom video input wrap */
        .about-custom-video-wrap {
          margin-bottom: 22px;
        }

        .about-custom-video-form {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
        }

        .about-custom-input {
          flex: 1;
          height: 44px;
          padding: 0 16px;
          border-radius: 10px;
          border: 1.5px solid #cbd5e1;
          font-size: 0.9rem;
          outline: none;
        }

        .about-custom-input:focus {
          border-color: #6e25e8;
        }

        .about-custom-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #6e25e8;
          color: #ffffff;
          border: none;
          padding: 0 20px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
        }

        .about-custom-player-box {
          width: 100%;
          height: 380px;
          background: #000000;
          border-radius: 14px;
          overflow: hidden;
        }

        .about-custom-iframe, .about-custom-video-el {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .about-custom-empty-state {
          background: #f8fafc;
          border: 2px dashed #cbd5e1;
          border-radius: 14px;
          padding: 40px 20px;
          text-align: center;
          color: #64748b;
        }

        .about-custom-empty-state h4 {
          color: #0c1538;
          margin: 12px 0 6px;
        }

        /* Chapters Layout */
        .about-tour-chapters-wrap {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about-tour-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .about-chapter-buttons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .about-chapter-tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.22s ease;
        }

        .about-chapter-tab-btn:hover {
          background: #f5f0ff;
          border-color: #c084fc;
          transform: translateY(-2px);
        }

        .about-chapter-tab-btn.active {
          background: #f5f0ff;
          border-color: #6e25e8;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.15);
        }

        .about-chapter-tab-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #ede8f8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .about-chapter-tab-btn.active .about-chapter-tab-icon {
          background: #6e25e8;
        }

        .about-chapter-tab-title {
          font-size: 0.86rem;
          font-weight: 700;
          color: #0c1538;
          line-height: 1.25;
        }

        .about-chapter-tab-badge {
          font-size: 0.72rem;
          font-weight: 600;
          color: #6e25e8;
          margin-top: 2px;
        }

        .about-modal-actions-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          padding-top: 10px;
          flex-wrap: wrap;
        }

        .about-modal-btn-register {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%);
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 800;
          padding: 10px 22px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.35);
          transition: all 0.2s ease;
        }

        .about-modal-btn-register:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(110, 37, 232, 0.55);
        }

        .about-modal-btn-explore {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #334155;
          font-size: 0.88rem;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .about-modal-btn-explore:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
          color: #0f172a;
        }

        /* ---------------- RESPONSIVE BREAKPOINTS ---------------- */
        @media (max-width: 1024px) {
          .about-hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-features-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .about-metrics-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-mission-grid {
            grid-template-columns: 1fr;
          }
          .about-virtual-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .about-hero-title {
            font-size: 2.4rem;
          }
          .about-cards-grid {
            grid-template-columns: 1fr;
          }
          .about-metrics-row {
            grid-template-columns: 1fr;
          }
          .about-chapter-buttons-grid {
            grid-template-columns: 1fr;
          }
          .about-float-dock {
            display: none;
          }
          .about-float-feedback {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 16px;
          }
          .about-float-profile {
            left: 2%;
          }
          .about-cta-banner {
            padding: 30px 22px;
            flex-direction: column;
            align-items: flex-start;
          }
          .about-cta-left {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})},jo=({size:e=32,style:r={},rotation:n=0,className:o=""})=>{const i=`cube-${e}-${n}-${Math.floor(Math.random()*1e4)}`;return t.jsx("div",{className:`cat-floating-cube ${o}`,style:{position:"absolute",width:e,height:e,filter:"drop-shadow(0 14px 24px rgba(110, 37, 232, 0.4))",transform:`rotate(${n}deg)`,pointerEvents:"none",zIndex:1,"--base-rot":`${n}deg`,...r},children:t.jsxs("svg",{viewBox:"0 0 100 100",width:"100%",height:"100%",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:`${i}-top`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#c084fc"}),t.jsx("stop",{offset:"100%",stopColor:"#9333ea"})]}),t.jsxs("linearGradient",{id:`${i}-left`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#7c3aed"}),t.jsx("stop",{offset:"100%",stopColor:"#6d28d9"})]}),t.jsxs("linearGradient",{id:`${i}-right`,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",stopColor:"#581c87"}),t.jsx("stop",{offset:"100%",stopColor:"#3b0764"})]})]}),t.jsx("polygon",{points:"50,15 86,35 50,55 14,35",fill:`url(#${i}-top)`}),t.jsx("polygon",{points:"14,35 50,55 50,88 14,68",fill:`url(#${i}-left)`}),t.jsx("polygon",{points:"50,55 86,35 86,68 50,88",fill:`url(#${i}-right)`})]})})},bg=[{id:1,slug:"graphic-design",title:"Graphic Design",creatorsCount:1200,creatorsFormatted:"1.2K Creators",projectsCount:3400,projectsFormatted:"3.4K Projects",description:"Logos, branding, illustrations, print design and more.",icon:Bi,image:"/assets/graphic_designer_showcase.jpg",popularRank:2},{id:2,slug:"web-development",title:"Web Development",creatorsCount:1800,creatorsFormatted:"1.8K Creators",projectsCount:5200,projectsFormatted:"5.2K Projects",description:"Web apps, websites, front-end, back-end and full stack.",icon:Ii,image:"/assets/web_developer_showcase.jpg",popularRank:1},{id:3,slug:"video-editing",title:"Video Editing",creatorsCount:980,creatorsFormatted:"980 Creators",projectsCount:2800,projectsFormatted:"2.8K Projects",description:"Video editing, motion graphics, trailer & cinematic videos.",icon:rn,image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=80",popularRank:3},{id:4,slug:"photography",title:"Photography",creatorsCount:760,creatorsFormatted:"760 Creators",projectsCount:2100,projectsFormatted:"2.1K Projects",description:"Portraits, nature, product, events and lifestyle.",icon:Nt,image:"/assets/photography_nikon_outdoor.jpg",popularRank:4},{id:5,slug:"ui-ux-design",title:"UI/UX Design",creatorsCount:640,creatorsFormatted:"640 Creators",projectsCount:1800,projectsFormatted:"1.8K Projects",description:"User research, wireframes, prototypes and interfaces.",icon:_u,image:"/assets/uiux_taskpal_productivity.jpg",popularRank:5},{id:6,slug:"digital-marketing",title:"Digital Marketing",creatorsCount:520,creatorsFormatted:"520 Creators",projectsCount:1500,projectsFormatted:"1.5K Projects",description:"SEO, social media, content marketing and ads.",icon:Ah,image:"/assets/digital_marketing_analytics_metrics.png",popularRank:6},{id:7,slug:"content-creation",title:"Content Creation",creatorsCount:480,creatorsFormatted:"480 Creators",projectsCount:1200,projectsFormatted:"1.2K Projects",description:"Blogging, copywriting, social media and storytelling.",icon:Jt,image:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=80",popularRank:7},{id:8,slug:"courses",title:"Courses",creatorsCount:320,creatorsFormatted:"320 Creators",projectsCount:980,projectsFormatted:"980 Projects",description:"Online courses, tutorials, workshops and training.",icon:di,image:"/assets/lesson_01_cover.jpg",popularRank:8}],vg=["React","Next.js","JavaScript","PHP","MySQL","UI/UX","Figma","Photoshop","Illustrator","Video Editing","SEO","Digital Marketing"],jg=()=>{const e=oe(),[r,n]=g.useState("Most Popular"),[o,i]=g.useState(!1),s=[...bg].sort((d,u)=>r==="Most Popular"?d.popularRank-u.popularRank:r==="Most Creators"?u.creatorsCount-d.creatorsCount:r==="Most Projects"?u.projectsCount-d.projectsCount:r==="Alphabetical (A - Z)"?d.title.localeCompare(u.title):0),a=d=>{e(`/explore?category=${d}`)},l=d=>{e(`/explore?search=${encodeURIComponent(d)}`)};return t.jsxs("div",{className:"cat-page-wrapper",children:[t.jsxs("div",{className:"cat-container",children:[t.jsxs("section",{className:"cat-hero-banner",children:[t.jsx("div",{className:"cat-hero-glow"}),t.jsx(jo,{size:54,rotation:-18,className:"cat-cube-anim-1",style:{top:"12%",left:"46%"}}),t.jsx(jo,{size:72,rotation:25,className:"cat-cube-anim-2",style:{top:"48%",left:"44%"}}),t.jsx(jo,{size:38,rotation:12,className:"cat-cube-anim-3",style:{top:"78%",right:"18%"}}),t.jsx(jo,{size:34,rotation:-35,className:"cat-cube-anim-4",style:{top:"20%",right:"4%"}}),t.jsxs("div",{className:"cat-hero-grid",children:[t.jsxs("div",{className:"cat-hero-content",children:[t.jsxs("div",{className:"cat-hero-badge",children:[t.jsx("span",{className:"cat-hero-badge-icon",children:t.jsx(Xe,{size:14,color:"#6e25e8"})}),t.jsx("span",{children:"Explore Categories"})]}),t.jsxs("h1",{className:"cat-hero-title",children:["Discover Talent in ",t.jsx("br",{}),"Every ",t.jsx("span",{className:"cat-hero-highlight",children:"Category"})]}),t.jsx("p",{className:"cat-hero-desc",children:"Browse through different categories and find amazing creators, projects and skills that match your interests."})]}),t.jsxs("div",{className:"cat-hero-showcase",children:[t.jsxs("div",{className:"cat-float-card cat-card-web",children:[t.jsx("div",{className:"cat-float-card-img-wrap",children:t.jsx("img",{src:"/assets/web_developer_showcase.jpg",alt:"Abdullaahi Maxamed - Web Developer Showcase",className:"cat-float-card-img"})}),t.jsxs("div",{className:"cat-float-badge",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",alt:"Developer Avatar",className:"cat-float-avatar"}),t.jsxs("div",{className:"cat-float-info",children:[t.jsx("span",{className:"cat-float-title",children:"Web Developer"}),t.jsxs("span",{className:"cat-float-stat",children:[t.jsx(xe,{size:12,style:{marginRight:"3px",opacity:.8}}),"15k+ Projects"]})]})]})]}),t.jsxs("div",{className:"cat-float-card cat-card-graphic",children:[t.jsx("div",{className:"cat-float-card-img-wrap",children:t.jsx("img",{src:"/assets/graphic_designer_showcase.jpg",alt:"Abdullaahi Maxamed - Graphic Designer Showcase",className:"cat-float-card-img"})}),t.jsxs("div",{className:"cat-float-badge",children:[t.jsx("img",{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",alt:"Designer Avatar",className:"cat-float-avatar"}),t.jsxs("div",{className:"cat-float-info",children:[t.jsx("span",{className:"cat-float-title",children:"Graphic Designer"}),t.jsxs("span",{className:"cat-float-stat",children:[t.jsx(xe,{size:12,style:{marginRight:"3px",opacity:.8}}),"12k+ Projects"]})]})]})]}),t.jsx("div",{className:"cat-float-card cat-card-brand",children:t.jsx("div",{className:"cat-brand-box",children:t.jsx("img",{src:"/assets/logo.png",alt:"PartfolioHub Official Logo",className:"cat-brand-logo-img"})})}),t.jsx("div",{className:"cat-float-card cat-card-photo",children:t.jsx("img",{src:"/assets/photography_sunset_horizon.jpg",alt:"Photography Camera Sunset",className:"cat-float-card-img"})})]})]})]}),t.jsxs("section",{className:"cat-section",children:[t.jsxs("div",{className:"cat-section-header",children:[t.jsxs("div",{className:"cat-header-text",children:[t.jsx("h2",{className:"cat-section-title",children:"All Categories"}),t.jsx("p",{className:"cat-section-subtitle",children:"Choose a category and explore talented creators, amazing projects and inspiring work."})]}),t.jsxs("div",{className:"cat-sort-container",children:[t.jsxs("button",{type:"button",className:"cat-sort-btn",onClick:()=>i(!o),"aria-expanded":o,children:[t.jsx(Qh,{size:17,className:"cat-sort-icon"}),t.jsx("span",{children:r}),t.jsx(_h,{size:16,className:`cat-chevron ${o?"rotate":""}`})]}),o&&t.jsx("div",{className:"cat-sort-dropdown",children:["Most Popular","Most Creators","Most Projects","Alphabetical (A - Z)"].map(d=>t.jsxs("button",{type:"button",className:`cat-sort-item ${r===d?"active":""}`,onClick:()=>{n(d),i(!1)},children:[t.jsx("span",{children:d}),r===d&&t.jsx(mr,{size:14,color:"#6e25e8"})]},d))})]})]}),t.jsx("div",{className:"cat-grid",children:s.map((d,u)=>{const x=d.icon;return t.jsxs("div",{className:"cat-card",style:{animationDelay:`${u*.06}s`},onClick:()=>a(d.slug),role:"button",tabIndex:0,onKeyDown:y=>{(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),a(d.slug))},children:[t.jsxs("div",{className:"cat-card-top",children:[t.jsx("div",{className:"cat-icon-box",children:t.jsx(x,{size:22,color:"#ffffff",strokeWidth:2.4})}),t.jsx("div",{className:"cat-card-thumb-wrap",children:t.jsx("img",{src:d.image,alt:d.title,className:"cat-card-thumb"})})]}),t.jsxs("div",{className:"cat-card-body",children:[t.jsx("h3",{className:"cat-card-title",children:d.title}),t.jsxs("div",{className:"cat-card-stats",children:[t.jsx("span",{children:d.creatorsFormatted}),t.jsx("span",{className:"cat-bullet",children:"•"}),t.jsx("span",{children:d.projectsFormatted})]}),t.jsx("p",{className:"cat-card-desc",children:d.description})]}),t.jsx("div",{className:"cat-card-footer",children:t.jsx("button",{type:"button",className:"cat-arrow-btn","aria-label":`Explore ${d.title}`,onClick:y=>{y.stopPropagation(),a(d.slug)},children:t.jsx(ve,{size:17,strokeWidth:2.5})})})]},d.id)})})]}),t.jsxs("section",{className:"cat-skills-card",children:[t.jsxs("div",{className:"cat-skills-header",children:[t.jsxs("div",{className:"cat-skills-left",children:[t.jsx("div",{className:"cat-skills-iconbox",children:t.jsx(Wu,{size:22,color:"#ffffff",strokeWidth:2.4})}),t.jsxs("div",{children:[t.jsx("h3",{className:"cat-skills-title",children:"Popular Skills"}),t.jsx("p",{className:"cat-skills-sub",children:"Discover the most in-demand skills in the community."})]})]}),t.jsxs("button",{type:"button",className:"cat-skills-viewall",onClick:()=>e("/explore"),children:[t.jsx("span",{children:"View All Skills"}),t.jsx(ve,{size:16,strokeWidth:2.5})]})]}),t.jsx("div",{className:"cat-skills-pills",children:vg.map(d=>t.jsx("button",{type:"button",className:"cat-skill-pill",onClick:()=>l(d),children:d},d))})]})]}),t.jsx("style",{children:`
        .cat-page-wrapper {
          background-color: #f8faff;
          min-height: 100vh;
          padding-bottom: 70px;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0c1538;
          animation: catPageEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes catPageEntrance {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cat-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ================= HERO BANNER ================= */
        .cat-hero-banner {
          position: relative;
          background: linear-gradient(135deg, #fbfaff 0%, #f4f6fe 50%, #eff2ff 100%);
          border-radius: 28px;
          padding: 56px 56px 48px;
          margin-top: 24px;
          margin-bottom: 48px;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px -10px rgba(110, 37, 232, 0.05);
        }

        .cat-hero-glow {
          position: absolute;
          top: -20%;
          right: 5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.16) 0%, rgba(99, 102, 241, 0.06) 50%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          animation: catGlowPulse 8s ease-in-out infinite alternate;
        }

        @keyframes catGlowPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.65;
          }
          100% {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        /* Floating 3D Cubes Bobbing Animations */
        .cat-cube-anim-1 {
          animation: floatCubeA 6s ease-in-out infinite;
        }
        .cat-cube-anim-2 {
          animation: floatCubeB 7.5s ease-in-out infinite 0.5s;
        }
        .cat-cube-anim-3 {
          animation: floatCubeA 6.8s ease-in-out infinite 1.2s;
        }
        .cat-cube-anim-4 {
          animation: floatCubeB 5.8s ease-in-out infinite 0.3s;
        }

        @keyframes floatCubeA {
          0%, 100% {
            transform: translateY(0px) rotate(var(--base-rot));
          }
          50% {
            transform: translateY(-16px) rotate(calc(var(--base-rot) + 5deg));
          }
        }

        @keyframes floatCubeB {
          0%, 100% {
            transform: translateY(0px) rotate(var(--base-rot));
          }
          50% {
            transform: translateY(-20px) rotate(calc(var(--base-rot) - 6deg));
          }
        }

        .cat-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1.15fr;
          align-items: center;
          gap: 36px;
          position: relative;
          z-index: 2;
        }

        /* Left Hero Content */
        .cat-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f3ebff;
          border: 1px solid rgba(110, 37, 232, 0.2);
          color: #6e25e8;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
          box-shadow: 0 2px 8px rgba(110, 37, 232, 0.08);
          transition: transform 0.2s ease;
        }

        .cat-hero-badge:hover {
          transform: translateY(-2px);
        }

        .cat-hero-badge-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: catSpinSparkle 4s linear infinite;
        }

        @keyframes catSpinSparkle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg); }
        }

        .cat-hero-title {
          font-size: clamp(2.3rem, 3.8vw, 3.3rem);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 1.18;
          color: #0c1538;
          margin-bottom: 18px;
        }

        .cat-hero-highlight {
          color: #6e25e8;
          background: linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cat-hero-desc {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #64748b;
          max-width: 470px;
        }

        /* Right Hero Showcase Cards Composition */
        .cat-hero-showcase {
          position: relative;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-float-card {
          position: absolute;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 20px 45px -8px rgba(15, 23, 42, 0.16);
          border: 3.5px solid #ffffff;
          transition: box-shadow 0.3s ease, filter 0.3s ease;
        }

        .cat-float-card:hover {
          box-shadow: 0 28px 56px -6px rgba(110, 37, 232, 0.3);
          filter: brightness(1.02);
          z-index: 10 !important;
        }

        /* Web Developer Card (Floating Motion) */
        .cat-card-web {
          top: 4px;
          left: 2%;
          width: 275px;
          height: 185px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: floatWebCard 6.2s ease-in-out infinite;
        }

        @keyframes floatWebCard {
          0%, 100% {
            transform: rotate(-5deg) translateY(0px);
          }
          50% {
            transform: rotate(-3.5deg) translateY(-12px);
          }
        }

        /* Graphic Designer Card (Center Foreground Floating Motion) */
        .cat-card-graphic {
          bottom: 6px;
          left: 28%;
          width: 290px;
          height: 195px;
          z-index: 5;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 24px 50px -6px rgba(110, 37, 232, 0.24);
          animation: floatGraphicCard 7s ease-in-out infinite 0.6s;
        }

        @keyframes floatGraphicCard {
          0%, 100% {
            transform: rotate(3deg) translateY(0px);
          }
          50% {
            transform: rotate(4.8deg) translateY(-14px);
          }
        }

        /* Branding card with Official Logo (Floating Motion) */
        .cat-card-brand {
          top: 0px;
          left: 50%;
          width: 175px;
          height: 130px;
          z-index: 2;
          background: #ffffff;
          border: 3.5px solid #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 40px -6px rgba(110, 37, 232, 0.22);
          animation: floatBrandCard 5.8s ease-in-out infinite 1.1s;
        }

        @keyframes floatBrandCard {
          0%, 100% {
            transform: rotate(10deg) translateY(0px) scale(1);
          }
          50% {
            transform: rotate(8deg) translateY(-10px) scale(1.03);
          }
        }

        .cat-brand-box {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 10px;
        }

        .cat-brand-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .cat-card-brand:hover .cat-brand-logo-img {
          transform: scale(1.08);
        }

        /* Photography Card (Floating Motion) */
        .cat-card-photo {
          top: 15px;
          right: 2%;
          width: 148px;
          height: 118px;
          z-index: 2;
          overflow: hidden;
          animation: floatPhotoCard 6.6s ease-in-out infinite 1.6s;
        }

        @keyframes floatPhotoCard {
          0%, 100% {
            transform: rotate(-4deg) translateY(0px);
          }
          50% {
            transform: rotate(-2deg) translateY(-11px);
          }
        }

        .cat-float-card-img-wrap {
          width: 100%;
          flex: 1;
          overflow: hidden;
          position: relative;
          background-color: #0c1538;
        }

        .cat-float-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .cat-float-card:hover .cat-float-card-img {
          transform: scale(1.06);
        }

        .cat-float-badge {
          background: #ffffff;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-top: 1px solid #f1f5f9;
        }

        .cat-float-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          border: 1.5px solid #6e25e8;
        }

        .cat-float-info {
          display: flex;
          flex-direction: column;
        }

        .cat-float-title {
          font-size: 0.78rem;
          font-weight: 750;
          color: #0c1538;
          line-height: 1.2;
        }

        .cat-float-stat {
          font-size: 0.68rem;
          color: #64748b;
          display: flex;
          align-items: center;
          margin-top: 1px;
        }

        /* ================= ALL CATEGORIES SECTION ================= */
        .cat-section {
          margin-bottom: 40px;
        }

        .cat-section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 26px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cat-section-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #0c1538;
          margin: 0 0 6px 0;
        }

        .cat-section-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
        }

        /* Sort Button & Dropdown */
        .cat-sort-container {
          position: relative;
        }

        .cat-sort-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 9px 16px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: all 0.2s ease;
        }

        .cat-sort-btn:hover {
          border-color: #cbd5e1;
          background: #fafafa;
          transform: translateY(-1px);
        }

        .cat-sort-icon {
          color: #64748b;
        }

        .cat-chevron {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }

        .cat-chevron.rotate {
          transform: rotate(180deg);
        }

        .cat-sort-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 8px);
          width: 190px;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
          padding: 6px;
          z-index: 50;
          animation: catFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes catFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cat-sort-item {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 12px;
          background: transparent;
          border: none;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #334155;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s ease;
        }

        .cat-sort-item:hover {
          background: #f8fafc;
          color: #0f172a;
        }

        .cat-sort-item.active {
          color: #6e25e8;
          font-weight: 700;
          background: #f5f0ff;
        }

        /* 8-Card Responsive Grid */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        /* Category Card */
        .cat-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #edf2f7;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          cursor: pointer;
          position: relative;
          animation: catCardEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes catCardEntrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cat-card:hover {
          transform: translateY(-8px) scale(1.01);
          border-color: #a855f7;
          box-shadow: 0 20px 42px -8px rgba(110, 37, 232, 0.16);
        }

        /* Top row inside card */
        .cat-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 14px;
        }

        .cat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: #6e25e8;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.28);
          flex-shrink: 0;
          transition: transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease;
        }

        .cat-card:hover .cat-icon-box {
          transform: scale(1.12) rotate(6deg);
          box-shadow: 0 8px 20px rgba(110, 37, 232, 0.45);
        }

        .cat-card-thumb-wrap {
          width: 104px;
          height: 72px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          background-color: #f1f5f9;
        }

        .cat-card-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .cat-card:hover .cat-card-thumb {
          transform: scale(1.12);
        }

        /* Middle Content */
        .cat-card-body {
          flex: 1;
        }

        .cat-card-title {
          font-size: 1.12rem;
          font-weight: 750;
          color: #0c1538;
          margin: 0 0 5px 0;
          letter-spacing: -0.015em;
          transition: color 0.2s ease;
        }

        .cat-card:hover .cat-card-title {
          color: #6e25e8;
        }

        .cat-card-stats {
          font-size: 0.8rem;
          font-weight: 600;
          color: #8da1bf;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 9px;
        }

        .cat-bullet {
          font-size: 0.75rem;
          color: #cbd5e1;
        }

        .cat-card-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0 0 16px 0;
          min-height: 40px;
        }

        /* Bottom Row & Arrow Button */
        .cat-card-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .cat-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #f5f0ff;
          color: #6e25e8;
          border: 1px solid rgba(110, 37, 232, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cat-card:hover .cat-arrow-btn,
        .cat-arrow-btn:hover {
          background: #6e25e8;
          color: #ffffff;
          transform: translateX(4px) scale(1.08);
          box-shadow: 0 6px 18px rgba(110, 37, 232, 0.45);
        }

        /* ================= POPULAR SKILLS ================= */
        .cat-skills-card {
          background: #ffffff;
          border-radius: 20px;
          border: 1.5px solid #edf2f7;
          padding: 26px 32px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          margin-bottom: 40px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cat-skills-card:hover {
          box-shadow: 0 8px 24px rgba(110, 37, 232, 0.06);
        }

        .cat-skills-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cat-skills-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cat-skills-iconbox {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: #6e25e8;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(110, 37, 232, 0.28);
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .cat-skills-card:hover .cat-skills-iconbox {
          transform: rotate(10deg);
        }

        .cat-skills-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0c1538;
          margin: 0 0 2px 0;
          letter-spacing: -0.015em;
        }

        .cat-skills-sub {
          font-size: 0.86rem;
          color: #64748b;
          margin: 0;
        }

        .cat-skills-viewall {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          color: #6e25e8;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: gap 0.2s ease, color 0.2s ease;
          padding: 6px 10px;
        }

        .cat-skills-viewall:hover {
          gap: 10px;
          color: #581c87;
        }

        .cat-skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cat-skill-pill {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 9999px;
          padding: 8px 20px;
          font-size: 0.86rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .cat-skill-pill:hover {
          background: #f5f0ff;
          border-color: #c4b5fd;
          color: #6e25e8;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 6px 16px rgba(110, 37, 232, 0.16);
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1100px) {
          .cat-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cat-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cat-hero-showcase {
            height: 300px;
          }
          .cat-card-graphic {
            left: 20%;
          }
        }

        @media (max-width: 680px) {
          .cat-grid {
            grid-template-columns: 1fr;
          }
          .cat-hero-banner {
            padding: 36px 24px;
          }
          .cat-hero-title {
            font-size: 2.1rem;
          }
          .cat-hero-showcase {
            display: none;
          }
          .cat-skills-card {
            padding: 20px;
          }
          .cat-skills-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})},Lu=({isOpen:e,onClose:r,provider:n="google"})=>{const{loginWithSocial:o}=pe(),{showToast:i}=ie(),s=oe(),[a,l]=g.useState("choose_account"),[d,u]=g.useState(null),[x,y]=g.useState(""),[v,m]=g.useState(!1),[b,f]=g.useState(""),[j,c]=g.useState(""),[p,h]=g.useState(!1),[k,C]=g.useState(""),w=[{name:"Farxiyo maxamed Axmed",email:"farxiyomaxamedaxmed92@gmail.com",letter:"F",color:"#3f51b5"},{name:"Abdala Caaqilka",email:"abdalacaaqilka34@gmail.com",letter:"A",color:"#1a73e8"},{name:"Abdala Caaqilka",email:"abdalacaaqilka@gmail.com",letter:"A",color:"#1a73e8"},{name:"Khaalidcabdi34",email:"khaalidcabdi478@gmail.com",letter:"K",color:"#00796b"},{name:"Abdala Creative",email:"abdalacreative6@gmail.com",letter:"A",color:"#5c6bc0"},{name:"Abdala designer",email:"abdaladesigner48@gmail.com",letter:"A",color:"#7b1fa2"},{name:"Xamiid yuusuf",email:"xamiidyuusuf217@gmail.com",letter:"X",color:"#00897b"},{name:"Cursur Ai",email:"cursurai33@gmail.com",letter:"C",color:"#8e24aa"},{name:"Ifraax Maxamed",email:"ifraaxmaxamedaxmedmuxumed12345@gmail.com",letter:"I",color:"#2e7d32"},{name:"Geedi Faarax",email:"gfaarax05@gmail.com",letter:"G",color:"#9c27b0"},{name:"Naaji Mk",email:"naajimk28@gmail.com",letter:"N",color:"#3949ab"},{name:"Kamaal Cade",email:"kcade8222@gmail.com",letter:"K",color:"#00838f"}],P=n==="google"?w:{facebook:[{name:"Abdala Caaqilka",email:"abdalacaaqilka@facebook.com",letter:"A",color:"#1877F2"}],apple:[{name:"Abdala Caaqilka",email:"abdalacaaqilka@icloud.com",letter:"A",color:"#000000"}]}[n]||w;if(g.useEffect(()=>{e&&(l("choose_account"),u(null),y(""),m(!1),f(""),c(""),C(""),h(!1))},[e,n]),!e)return null;const _=S=>{u(S),y(""),C(""),l("enter_password")},N=S=>{if(S.preventDefault(),!b||!b.includes("@")){C("Fadlan geli email sax ah.");return}const H=j.trim()||b.split("@")[0],G=H.charAt(0).toUpperCase();u({name:H,email:b.trim().toLowerCase(),letter:G,color:"#1a73e8"}),y(""),C(""),l("enter_password")},W=async S=>{if(S.preventDefault(),!x.trim()){C("Fadlan geli password-kaaga saxda ah.");return}h(!0),C("");try{const H=await o({provider:n,email:d.email,full_name:d.name});H.success?(i(`Guul! Waxaad si toos ah ugu gashay akoonkaaga ${d.email}.`,"success"),r(),s("/dashboard")):C(H.message||"Galitaanka akoonka waa lagu guuldareystay.")}catch(H){C(H.message||"Khalad ayaa dhacay. Fadlan hubi xiriirka server-ka.")}finally{h(!1)}},M={google:{name:"Google",brandColor:"#1a73e8",title:"Sign in with Google",subtitle:"to continue to PartfolioHub",logo:t.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]})},facebook:{name:"Facebook",brandColor:"#1877F2",title:"Log in with Facebook",subtitle:"to continue to PartfolioHub",logo:t.jsx("svg",{width:"22",height:"22",fill:"#1877F2",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})},apple:{name:"Apple",brandColor:"#000000",title:"Sign in with Apple ID",subtitle:"to continue to PartfolioHub",logo:t.jsx("svg",{width:"22",height:"22",fill:"#000000",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-1.01 2.76.99.08 2.02-.51 2.65-1.26z"})})}}[n]||{name:"Google",title:"Sign in with Google",subtitle:"to continue to PartfolioHub",logo:null};return t.jsx("div",{className:"modal-overlay",onClick:r,style:{zIndex:1200},children:t.jsxs("div",{className:"modal-box",onClick:S=>S.stopPropagation(),style:{width:"100%",maxWidth:"440px",borderRadius:"24px",overflow:"hidden",boxShadow:"0 25px 60px rgba(0,0,0,0.35)",border:"1px solid #e2e8f0",background:"#ffffff",fontFamily:"'Roboto', 'Plus Jakarta Sans', sans-serif"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid #f1f5f9",background:"#ffffff"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a!=="choose_account"?t.jsx("button",{type:"button",onClick:()=>{l("choose_account"),C("")},title:"Dib ugu noqo akoonnada",style:{background:"transparent",border:"none",padding:"6px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#5f6368"},children:t.jsx(lt,{size:18})}):t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:M.logo}),t.jsxs("div",{children:[t.jsx("h4",{style:{margin:0,fontSize:"0.98rem",fontWeight:700,color:"#202124"},children:M.title}),t.jsx("p",{style:{margin:0,fontSize:"0.75rem",color:"#5f6368"},children:M.subtitle})]})]}),t.jsx("button",{type:"button",onClick:r,title:"Xir",style:{background:"#f1f5f9",border:"none",borderRadius:"50%",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",color:"#5f6368",cursor:"pointer",transition:"all 0.2s ease"},children:t.jsx(Ae,{size:17})})]}),k&&t.jsx("div",{style:{margin:"16px 20px 0",padding:"10px 14px",borderRadius:"10px",background:"#fef2f2",border:"1px solid #fecaca",color:"#dc2626",fontSize:"0.84rem"},children:k}),a==="choose_account"&&t.jsxs("div",{style:{padding:"16px 20px 20px"},children:[t.jsxs("div",{style:{marginBottom:"14px"},children:[t.jsx("h3",{style:{margin:"0 0 4px",fontSize:"1.25rem",fontWeight:600,color:"#202124"},children:"Choose an account"}),t.jsx("p",{style:{margin:0,fontSize:"0.84rem",color:"#5f6368"},children:"to continue to PartfolioHub"})]}),t.jsx("div",{style:{maxHeight:"360px",overflowY:"auto",borderRadius:"14px",border:"1px solid #e8eaed",padding:"4px 0",background:"#ffffff"},children:P.map((S,H)=>t.jsxs("div",{onClick:()=>_(S),style:{display:"flex",alignItems:"center",gap:"14px",padding:"12px 16px",borderBottom:H!==P.length-1?"1px solid #f1f3f4":"none",cursor:"pointer",transition:"background 0.15s ease"},onMouseEnter:G=>G.currentTarget.style.background="#f8f9fa",onMouseLeave:G=>G.currentTarget.style.background="#ffffff",children:[t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"50%",background:S.color,color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.05rem",fontWeight:700,flexShrink:0,boxShadow:"0 1px 3px rgba(0,0,0,0.12)"},children:S.letter}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsx("div",{style:{fontSize:"0.9rem",fontWeight:600,color:"#202124",lineHeight:"1.3",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:S.name}),t.jsx("div",{style:{fontSize:"0.78rem",color:"#5f6368",lineHeight:"1.3",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:S.email})]})]},S.email+H))}),t.jsxs("button",{type:"button",onClick:()=>{C(""),l("enter_custom_email")},style:{width:"100%",marginTop:"14px",padding:"11px 16px",borderRadius:"12px",border:"1px solid #dadce0",background:"#ffffff",color:"#1a73e8",fontSize:"0.88rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",transition:"all 0.2s ease"},onMouseEnter:S=>S.currentTarget.style.background="#f8fafd",onMouseLeave:S=>S.currentTarget.style.background="#ffffff",children:[t.jsx(eo,{size:16}),t.jsx("span",{children:"Use another account"})]})]}),a==="enter_password"&&d&&t.jsxs("div",{style:{padding:"20px 24px 24px"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"22px"},children:[t.jsx("h3",{style:{margin:"0 0 6px",fontSize:"1.35rem",fontWeight:600,color:"#202124"},children:"Welcome"}),t.jsxs("div",{onClick:()=>l("choose_account"),style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"5px 12px 5px 6px",borderRadius:"9999px",border:"1px solid #dadce0",background:"#f8f9fa",cursor:"pointer",maxWidth:"100%",transition:"background 0.2s ease"},title:"Guji si aad akoon kale u doorato",onMouseEnter:S=>S.currentTarget.style.background="#f1f3f4",onMouseLeave:S=>S.currentTarget.style.background="#f8f9fa",children:[t.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",background:d.color,color:"#ffffff",fontSize:"0.75rem",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"},children:d.letter}),t.jsx("span",{style:{fontSize:"0.82rem",color:"#3c4043",fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:d.email}),t.jsx("span",{style:{fontSize:"0.7rem",color:"#1a73e8",fontWeight:600},children:"▼"})]})]}),t.jsxs("form",{onSubmit:W,children:[t.jsxs("div",{style:{marginBottom:"16px"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#202124",marginBottom:"6px"},children:"Enter your password"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("input",{type:v?"text":"password",value:x,onChange:S=>{y(S.target.value),C("")},autoFocus:!0,required:!0,placeholder:"Enter your password",style:{width:"100%",height:"46px",padding:"0 44px 0 14px",borderRadius:"8px",border:"1.5px solid #dadce0",fontSize:"0.95rem",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s ease"},onFocus:S=>S.target.style.borderColor="#1a73e8",onBlur:S=>S.target.style.borderColor="#dadce0"}),t.jsx("button",{type:"button",onClick:()=>m(!v),style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#5f6368",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:v?t.jsx(Ri,{size:18}):t.jsx(xe,{size:18})})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px"},children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.84rem",color:"#5f6368"},children:[t.jsx("input",{type:"checkbox",checked:v,onChange:S=>m(S.target.checked),style:{cursor:"pointer"}}),t.jsx("span",{children:"Show password"})]}),t.jsx("button",{type:"button",onClick:()=>i("Password reset link has been dispatched to your email.","info"),style:{background:"none",border:"none",color:"#1a73e8",fontSize:"0.84rem",fontWeight:600,cursor:"pointer",padding:0},children:"Forgot password?"})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"},children:[t.jsx("button",{type:"button",onClick:()=>l("choose_account"),style:{padding:"10px 18px",borderRadius:"8px",border:"1px solid #dadce0",background:"#ffffff",color:"#1a73e8",fontSize:"0.88rem",fontWeight:600,cursor:"pointer"},children:"Back"}),t.jsx("button",{type:"submit",disabled:p,style:{padding:"10px 28px",borderRadius:"8px",border:"none",background:"#1a73e8",color:"#ffffff",fontSize:"0.92rem",fontWeight:700,cursor:p?"not-allowed":"pointer",boxShadow:"0 2px 6px rgba(26,115,232,0.3)",display:"flex",alignItems:"center",gap:"8px"},children:p?t.jsx("span",{children:"Signing in..."}):t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Next"}),t.jsx(ve,{size:16})]})})]})]})]}),a==="enter_custom_email"&&t.jsxs("div",{style:{padding:"20px 24px 24px"},children:[t.jsxs("div",{style:{marginBottom:"18px"},children:[t.jsx("h3",{style:{margin:"0 0 4px",fontSize:"1.25rem",fontWeight:600,color:"#202124"},children:"Sign in"}),t.jsxs("p",{style:{margin:0,fontSize:"0.84rem",color:"#5f6368"},children:["Use your ",M.name," Account"]})]}),t.jsxs("form",{onSubmit:N,children:[t.jsxs("div",{style:{marginBottom:"14px"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#202124",marginBottom:"6px"},children:"Full Name (Optional):"}),t.jsx("input",{type:"text",value:j,onChange:S=>c(S.target.value),placeholder:"e.g. Abdala Caaqilka",style:{width:"100%",height:"44px",padding:"0 14px",borderRadius:"8px",border:"1.5px solid #dadce0",fontSize:"0.9rem",outline:"none",boxSizing:"border-box"}})]}),t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:600,color:"#202124",marginBottom:"6px"},children:"Email or phone"}),t.jsx("input",{type:"email",value:b,onChange:S=>{f(S.target.value),C("")},required:!0,autoFocus:!0,placeholder:"name@gmail.com",style:{width:"100%",height:"44px",padding:"0 14px",borderRadius:"8px",border:"1.5px solid #dadce0",fontSize:"0.9rem",outline:"none",boxSizing:"border-box"}})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"},children:[t.jsx("button",{type:"button",onClick:()=>l("choose_account"),style:{padding:"10px 18px",borderRadius:"8px",border:"1px solid #dadce0",background:"#ffffff",color:"#1a73e8",fontSize:"0.88rem",fontWeight:600,cursor:"pointer"},children:"Back"}),t.jsxs("button",{type:"submit",style:{padding:"10px 26px",borderRadius:"8px",border:"none",background:"#1a73e8",color:"#ffffff",fontSize:"0.9rem",fontWeight:700,cursor:"pointer",boxShadow:"0 2px 6px rgba(26,115,232,0.3)",display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{children:"Next"}),t.jsx(ve,{size:16})]})]})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"12px 20px",background:"#f8f9fa",borderTop:"1px solid #f1f3f4",color:"#5f6368",fontSize:"0.74rem"},children:[t.jsx(Zt,{size:14,color:"#10b981"}),t.jsx("span",{children:"Encrypted with Google OAuth & SSL 256-bit security standards."})]})]})})},wg=()=>{const{login:e}=pe(),{showToast:r}=ie(),n=oe(),[o,i]=g.useState({isOpen:!1,provider:"google"}),[s,a]=g.useState({login:"",password:"",remember:!0}),[l,d]=g.useState(!1),[u,x]=g.useState(!1),[y,v]=g.useState(""),m=f=>{const{name:j,value:c,type:p,checked:h}=f.target;a(k=>({...k,[j]:p==="checkbox"?h:c})),v("")},b=async f=>{var j,c;if(f.preventDefault(),!s.login.trim()||!s.password){v("Please provide your login and password.");return}x(!0);try{const p=await e(s);p.success?(r("Welcome back to PartfolioHub!","success"),((c=(j=p.data)==null?void 0:j.user)==null?void 0:c.role)==="admin"?n("/admin"):n("/dashboard")):v(p.message||"Invalid login credentials.")}catch(p){v(p.message||"Login credentials incorrect.")}finally{x(!1)}};return t.jsxs("div",{style:{minHeight:"100vh",width:"100vw",display:"flex",background:"#ffffff",overflowX:"hidden"},children:[t.jsx("div",{style:{flex:"1 1 50%",minWidth:"320px",padding:"50px 60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#ffffff"},children:t.jsxs("div",{style:{width:"100%",maxWidth:"430px"},children:[t.jsx("div",{style:{textAlign:"center",marginBottom:"26px"},children:t.jsx(vr,{size:"large"})}),t.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[t.jsx("h1",{style:{fontSize:"1.9rem",fontWeight:"900",color:"#0c1538",letterSpacing:"-0.03em",marginBottom:"6px"},children:"Welcome Back"}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.92rem"},children:"Login to your account and continue your journey."})]}),y&&t.jsx("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"#fef2f2",border:"1px solid #fecaca",color:"#ef4444",fontSize:"0.85rem",marginBottom:"18px",textAlign:"center"},children:y}),t.jsxs("form",{onSubmit:b,style:{display:"flex",flexDirection:"column",gap:"18px",width:"100%"},children:[t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"6px"},children:"Email or Username"}),t.jsx("input",{type:"text",name:"login",placeholder:"Enter your email or username",value:s.login,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 16px",fontSize:"0.92rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:"#0c1538",outline:"none",boxSizing:"border-box"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0"})]}),t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"6px"},children:"Password"}),t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsx("input",{type:l?"text":"password",name:"password",placeholder:"Enter your password",value:s.password,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 45px 0 16px",fontSize:"0.92rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:"#0c1538",outline:"none",boxSizing:"border-box"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0"}),t.jsx("button",{type:"button",onClick:()=>d(!l),style:{position:"absolute",right:"14px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#6e25e8",cursor:"pointer"},children:l?t.jsx(Ri,{size:18}):t.jsx(xe,{size:18})})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.85rem"},children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",color:"#0c1538",fontWeight:"700"},children:[t.jsx("input",{type:"checkbox",name:"remember",checked:s.remember,onChange:m,style:{accentColor:"#6e25e8",width:"16px",height:"16px",cursor:"pointer"}}),t.jsx("span",{children:"Remember me"})]}),t.jsx(T,{to:"/forgot-password",style:{color:"#6e25e8",fontWeight:"700",textDecoration:"none"},children:"Forgot password?"})]}),t.jsx("button",{type:"submit",disabled:u,style:{width:"100%",height:"48px",borderRadius:"9999px",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",color:"#ffffff",border:"none",fontWeight:"800",fontSize:"0.98rem",cursor:"pointer",boxShadow:"0 6px 20px rgba(110, 37, 232, 0.45)",transition:"all 0.2s ease",marginTop:"4px"},onMouseEnter:f=>f.currentTarget.style.boxShadow="0 8px 24px rgba(110, 37, 232, 0.6)",onMouseLeave:f=>f.currentTarget.style.boxShadow="0 6px 20px rgba(110, 37, 232, 0.45)",children:u?"Logging in...":"Login"})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",margin:"26px 0",color:"#94a3b8",fontSize:"0.82rem"},children:[t.jsx("div",{style:{flex:1,height:"1px",background:"#ede8f8"}}),t.jsx("span",{children:"or continue with"}),t.jsx("div",{style:{flex:1,height:"1px",background:"#ede8f8"}})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"16px"},children:[t.jsx("button",{type:"button",onClick:()=>i({isOpen:!0,provider:"google"}),style:{width:"46px",height:"46px",borderRadius:"50%",border:"1px solid #e2e8f0",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(110, 37, 232, 0.05)",transition:"all 0.2s ease"},title:"Continue with Google",children:t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]})}),t.jsx("button",{type:"button",onClick:()=>i({isOpen:!0,provider:"facebook"}),style:{width:"46px",height:"46px",borderRadius:"50%",border:"1px solid #e2e8f0",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(110, 37, 232, 0.05)"},title:"Continue with Facebook",children:t.jsx("svg",{width:"20",height:"20",fill:"#1877F2",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),t.jsx("button",{type:"button",onClick:()=>i({isOpen:!0,provider:"apple"}),style:{width:"46px",height:"46px",borderRadius:"50%",border:"1px solid #e2e8f0",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 2px 6px rgba(110, 37, 232, 0.05)"},title:"Continue with Apple",children:t.jsx("svg",{width:"20",height:"20",fill:"#0c1538",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-1.01 2.76.99.08 2.02-.51 2.65-1.26z"})})})]}),t.jsxs("p",{style:{textAlign:"center",marginTop:"26px",fontSize:"0.88rem",color:"#64748b"},children:["Don't have an account?"," ",t.jsx(T,{to:"/register",style:{color:"#6e25e8",fontWeight:"800",textDecoration:"none"},children:"Sign up"})]}),t.jsxs("div",{style:{marginTop:"28px",padding:"12px 16px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(124, 58, 237, 0.06) 0%, rgba(14, 165, 233, 0.06) 100%)",border:"1px solid rgba(124, 58, 237, 0.16)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"#0c1538",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",flexShrink:0},children:t.jsx(yr,{size:16})}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.82rem",fontWeight:"800",color:"#0c1538"},children:"Platform Administrator?"}),t.jsx("div",{style:{fontSize:"0.74rem",color:"#64748b"},children:"Galitaanka xarunta maamulka nidaamka"})]})]}),t.jsx(T,{to:"/admin/login",style:{fontSize:"0.8rem",fontWeight:"700",color:"#6e25e8",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px",padding:"6px 12px",borderRadius:"8px",background:"#ffffff",border:"1px solid #e2e8f0",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",whiteSpace:"nowrap"},children:"Admin Portal →"})]})]})}),t.jsx("div",{style:{flex:"1 1 50%",minWidth:"320px",background:"radial-gradient(circle at 60% 35%, rgba(110, 37, 232, 0.45) 0%, rgba(12, 16, 43, 0.98) 70%), #070918",color:"#ffffff",padding:"50px 60px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"},className:"auth-right-panel",children:t.jsxs("div",{style:{textAlign:"center",maxWidth:"440px",zIndex:5,width:"100%"},children:[t.jsx("div",{style:{marginBottom:"22px"},children:t.jsx(vr,{size:"large",light:!0,linkTo:""})}),t.jsxs("div",{style:{fontSize:"1.25rem",fontWeight:"900",lineHeight:"1.7",letterSpacing:"-0.02em",marginBottom:"36px"},children:[t.jsx("span",{style:{display:"block",color:"#a78bfa"},children:"Your Skills"}),t.jsx("span",{style:{display:"block",color:"#ffffff"},children:"Your Portfolio"}),t.jsx("span",{style:{display:"block",color:"#c084fc"},children:"Your Platform"})]}),t.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"460px",margin:"0 auto",borderRadius:"20px",overflow:"hidden",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.85), 0 0 50px rgba(110, 37, 232, 0.45)",border:"1.5px solid rgba(167, 139, 250, 0.35)"},children:[t.jsx("img",{src:"/assets/login_laptop.jpg",alt:"PartfolioHub Platform Laptop",style:{width:"100%",height:"270px",objectFit:"cover",display:"block"}}),t.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, transparent 55%, rgba(7, 9, 24, 0.75) 100%)"}})]})]})}),t.jsx("style",{children:`
        @media (max-width: 900px) {
          .auth-right-panel {
            display: none !important;
          }
        }
      `}),t.jsx(Lu,{isOpen:o.isOpen,provider:o.provider,onClose:()=>i(f=>({...f,isOpen:!1}))})]})},kg=()=>{const{register:e}=pe(),{showToast:r}=ie(),n=oe(),[o,i]=g.useState({isOpen:!1,provider:"google"}),[s,a]=g.useState({full_name:"",username:"",email:"",phone:"",birth_day:"",birth_month:"",birth_year:"",password:"",terms:!0}),[l,d]=g.useState(!1),[u,x]=g.useState(!1),[y,v]=g.useState(""),m=f=>{const{name:j,value:c,type:p,checked:h}=f.target;a(k=>({...k,[j]:p==="checkbox"?h:c})),v("")},b=async f=>{if(f.preventDefault(),v(""),!s.terms){v("You must agree to the Terms of Service and Privacy Policy.");return}x(!0);try{const j=await e(s);j.success?(r("Registration successful! Welcome to PartfolioHub.","success"),n("/dashboard")):v(j.message||"Registration failed")}catch(j){v(j.message||"Error occurred during registration")}finally{x(!1)}};return t.jsxs("div",{style:{minHeight:"100vh",width:"100vw",display:"flex",background:"#ffffff",overflowX:"hidden"},children:[t.jsx("div",{style:{flex:"1 1 50%",minWidth:"320px",maxHeight:"100vh",overflowY:"auto",padding:"36px 50px",display:"flex",flexDirection:"column",alignItems:"center",background:"#ffffff"},children:t.jsxs("div",{style:{width:"100%",maxWidth:"440px",margin:"auto 0"},children:[t.jsx("div",{style:{marginBottom:"22px"},children:t.jsx(vr,{size:"small"})}),t.jsxs("div",{style:{marginBottom:"20px"},children:[t.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:"900",color:"#0c1538",letterSpacing:"-0.03em",marginBottom:"6px"},children:"Create Your Account"}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.92rem"},children:"Join our community and start showcasing your talent."})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",marginBottom:"20px"},children:[t.jsxs("button",{type:"button",onClick:()=>i({isOpen:!0,provider:"google"}),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",height:"44px",borderRadius:"9999px",border:"1px solid #e2e8f0",background:"#ffffff",color:"#0c1538",fontSize:"0.9rem",fontWeight:"700",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 2px 6px rgba(0,0,0,0.02)"},onMouseEnter:f=>f.currentTarget.style.borderColor="#6e25e8",onMouseLeave:f=>f.currentTarget.style.borderColor="#e2e8f0",children:[t.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",children:[t.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),t.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),t.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),t.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),t.jsx("span",{children:"Continue with Google"})]}),t.jsxs("button",{type:"button",onClick:()=>i({isOpen:!0,provider:"facebook"}),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",height:"44px",borderRadius:"9999px",border:"1px solid #e2e8f0",background:"#ffffff",color:"#0c1538",fontSize:"0.9rem",fontWeight:"700",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 2px 6px rgba(0,0,0,0.02)"},onMouseEnter:f=>f.currentTarget.style.borderColor="#6e25e8",onMouseLeave:f=>f.currentTarget.style.borderColor="#e2e8f0",children:[t.jsx("svg",{width:"18",height:"18",fill:"#1877F2",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),t.jsx("span",{children:"Continue with Facebook"})]}),t.jsxs("button",{type:"button",onClick:()=>i({isOpen:!0,provider:"apple"}),style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",height:"44px",borderRadius:"9999px",border:"1px solid #e2e8f0",background:"#ffffff",color:"#0c1538",fontSize:"0.9rem",fontWeight:"700",cursor:"pointer",transition:"all 0.2s ease",boxShadow:"0 2px 6px rgba(0,0,0,0.02)"},onMouseEnter:f=>f.currentTarget.style.borderColor="#6e25e8",onMouseLeave:f=>f.currentTarget.style.borderColor="#e2e8f0",children:[t.jsx("svg",{width:"18",height:"18",fill:"#0c1538",viewBox:"0 0 24 24",children:t.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-1.01 2.76.99.08 2.02-.51 2.65-1.26z"})}),t.jsx("span",{children:"Continue with Apple"})]})]}),y&&t.jsx("div",{style:{padding:"10px 14px",borderRadius:"8px",background:"#fef2f2",border:"1px solid #fecaca",color:"#ef4444",fontSize:"0.85rem",marginBottom:"16px"},children:y}),t.jsxs("form",{onSubmit:b,style:{display:"flex",flexDirection:"column",gap:"14px",width:"100%"},children:[t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"5px"},children:"Full Name"}),t.jsx("input",{type:"text",name:"full_name",placeholder:"Your Name",value:s.full_name,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 16px",fontSize:"0.92rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:"#0c1538",outline:"none",boxSizing:"border-box"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0"})]}),t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"5px"},children:"Username"}),t.jsx("input",{type:"text",name:"username",placeholder:"Username",value:s.username,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 16px",fontSize:"0.92rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:"#0c1538",outline:"none",boxSizing:"border-box"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0"})]}),t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"5px"},children:"Email Address"}),t.jsx("input",{type:"email",name:"email",placeholder:"name@example.com",value:s.email,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 16px",fontSize:"0.92rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:"#0c1538",outline:"none",boxSizing:"border-box"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0"})]}),t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"5px"},children:"Phone Number"}),t.jsx("input",{type:"tel",name:"phone",placeholder:"+252 61 5000000",value:s.phone,onChange:m,style:{width:"100%",height:"46px",padding:"0 16px",fontSize:"0.92rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:"#0c1538",outline:"none",boxSizing:"border-box"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0"})]}),t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"6px"},children:"Date of Birth"}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",width:"100%"},children:[t.jsx("div",{children:t.jsxs("select",{name:"birth_day",value:s.birth_day,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 10px",fontSize:"0.88rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:s.birth_day?"#0c1538":"#94a3b8",outline:"none",boxSizing:"border-box",cursor:"pointer"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0",children:[t.jsx("option",{value:"",children:"Day"}),Array.from({length:31},(f,j)=>j+1).map(f=>t.jsx("option",{value:f,style:{color:"#0c1538"},children:f},f))]})}),t.jsx("div",{children:t.jsxs("select",{name:"birth_month",value:s.birth_month,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 10px",fontSize:"0.88rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:s.birth_month?"#0c1538":"#94a3b8",outline:"none",boxSizing:"border-box",cursor:"pointer"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0",children:[t.jsx("option",{value:"",children:"Month"}),[{val:1,label:"January"},{val:2,label:"February"},{val:3,label:"March"},{val:4,label:"April"},{val:5,label:"May"},{val:6,label:"June"},{val:7,label:"July"},{val:8,label:"August"},{val:9,label:"September"},{val:10,label:"October"},{val:11,label:"November"},{val:12,label:"December"}].map(f=>t.jsx("option",{value:f.val,style:{color:"#0c1538"},children:f.label},f.val))]})}),t.jsx("div",{children:t.jsxs("select",{name:"birth_year",value:s.birth_year,onChange:m,required:!0,style:{width:"100%",height:"46px",padding:"0 10px",fontSize:"0.88rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:s.birth_year?"#0c1538":"#94a3b8",outline:"none",boxSizing:"border-box",cursor:"pointer"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0",children:[t.jsx("option",{value:"",children:"Year"}),Array.from({length:70},(f,j)=>2015-j).map(f=>t.jsx("option",{value:f,style:{color:"#0c1538"},children:f},f))]})})]})]}),t.jsxs("div",{style:{width:"100%"},children:[t.jsx("label",{style:{display:"block",fontSize:"0.84rem",fontWeight:"800",color:"#0c1538",marginBottom:"5px"},children:"Password"}),t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsx("input",{type:l?"text":"password",name:"password",placeholder:"Create Password",value:s.password,onChange:m,required:!0,minLength:6,style:{width:"100%",height:"46px",padding:"0 45px 0 16px",fontSize:"0.92rem",borderRadius:"10px",border:"1.5px solid #e2e8f0",background:"#ffffff",color:"#0c1538",outline:"none",boxSizing:"border-box"},onFocus:f=>f.target.style.borderColor="#6e25e8",onBlur:f=>f.target.style.borderColor="#e2e8f0"}),t.jsx("button",{type:"button",onClick:()=>d(!l),style:{position:"absolute",right:"14px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#6e25e8",cursor:"pointer"},children:l?t.jsx(Ri,{size:18}):t.jsx(xe,{size:18})})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"2px"},children:[t.jsx("input",{type:"checkbox",id:"terms",name:"terms",checked:s.terms,onChange:m,style:{accentColor:"#6e25e8",width:"16px",height:"16px",cursor:"pointer"}}),t.jsxs("label",{htmlFor:"terms",style:{fontSize:"0.82rem",color:"#64748b",cursor:"pointer"},children:["I agree to the ",t.jsx("span",{style:{color:"#6e25e8",fontWeight:"700"},children:"Terms of Service"})," and ",t.jsx("span",{style:{color:"#6e25e8",fontWeight:"700"},children:"Privacy Policy"})]})]}),t.jsx("button",{type:"submit",disabled:u,style:{width:"100%",height:"48px",marginTop:"10px",borderRadius:"9999px",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",color:"#ffffff",border:"none",fontWeight:"800",fontSize:"0.98rem",cursor:"pointer",boxShadow:"0 6px 20px rgba(110, 37, 232, 0.45)",transition:"all 0.2s ease"},onMouseEnter:f=>f.currentTarget.style.boxShadow="0 8px 24px rgba(110, 37, 232, 0.6)",onMouseLeave:f=>f.currentTarget.style.boxShadow="0 6px 20px rgba(110, 37, 232, 0.45)",children:u?"Creating Account...":"Create Account"})]}),t.jsxs("p",{style:{textAlign:"center",marginTop:"22px",fontSize:"0.88rem",color:"#64748b"},children:["Already have an account?"," ",t.jsx(T,{to:"/login",style:{color:"#6e25e8",fontWeight:"800",textDecoration:"none"},children:"Login"})]})]})}),t.jsx("div",{style:{flex:"1 1 50%",minWidth:"320px",background:"radial-gradient(circle at 50% 25%, rgba(110, 37, 232, 0.45) 0%, rgba(12, 16, 43, 0.98) 70%), #070918",color:"#ffffff",padding:"50px 60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden"},className:"auth-right-panel",children:t.jsxs("div",{style:{width:"100%",maxWidth:"420px",position:"relative",zIndex:5},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[t.jsx("div",{style:{display:"inline-block",filter:"drop-shadow(0 10px 28px rgba(110, 37, 232, 0.6))"},children:t.jsx(vr,{size:"large",light:!0,linkTo:""})}),t.jsx("h2",{style:{fontSize:"2.1rem",fontWeight:"900",marginTop:"16px",letterSpacing:"-0.03em"},children:"Join PartfolioHub"}),t.jsx("p",{style:{color:"#c084fc",fontSize:"1rem",fontWeight:"700",marginTop:"4px"},children:"Showcase • Connect • Grow"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"50%",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",flexShrink:0,boxShadow:"0 4px 14px rgba(110, 37, 232, 0.5)"},children:t.jsx(it,{size:20})}),t.jsxs("div",{children:[t.jsx("h4",{style:{fontSize:"1rem",fontWeight:"800",margin:0,color:"#ffffff"},children:"Build your portfolio"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",margin:"3px 0 0"},children:"Showcase your best creative work"})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"50%",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",flexShrink:0,boxShadow:"0 4px 14px rgba(110, 37, 232, 0.5)"},children:t.jsx(Xe,{size:18})}),t.jsxs("div",{children:[t.jsx("h4",{style:{fontSize:"1rem",fontWeight:"800",margin:0,color:"#ffffff"},children:"Get discovered"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",margin:"3px 0 0"},children:"Get quick-start visibility to top clients"})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"50%",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",flexShrink:0,boxShadow:"0 4px 14px rgba(110, 37, 232, 0.5)"},children:t.jsx(it,{size:20})}),t.jsxs("div",{children:[t.jsx("h4",{style:{fontSize:"1rem",fontWeight:"800",margin:0,color:"#ffffff"},children:"Connect with clients"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",margin:"3px 0 0"},children:"Communicate with direct opportunities"})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"16px"},children:[t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"50%",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",flexShrink:0,boxShadow:"0 4px 14px rgba(110, 37, 232, 0.5)"},children:t.jsx(Zt,{size:20})}),t.jsxs("div",{children:[t.jsx("h4",{style:{fontSize:"1rem",fontWeight:"800",margin:0,color:"#ffffff"},children:"Grow your career"}),t.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8",margin:"3px 0 0"},children:"Elevate your creator earnings"})]})]})]})]})}),t.jsx("style",{children:`
        @media (max-width: 900px) {
          .auth-right-panel {
            display: none !important;
          }
        }
      `}),t.jsx(Lu,{isOpen:o.isOpen,provider:o.provider,onClose:()=>i(f=>({...f,isOpen:!1}))})]})},Sg=()=>{const[e,r]=g.useState(""),[n,o]=g.useState(!1),[i,s]=g.useState(null),{showToast:a}=ie(),l=oe(),d=async u=>{if(u.preventDefault(),!e.trim()){a("Please enter your email address.","error");return}o(!0);try{const x=await A.forgotPassword(e.trim());x.success&&(s(x.data.reset_token||"demo-token"),a("Password reset link and verification code prepared!","success"))}catch(x){a(x.message||"Request failed","error")}finally{o(!1)}};return t.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8fafc",padding:"24px"},children:t.jsxs("div",{className:"card",style:{maxWidth:"460px",width:"100%",padding:"36px"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"28px"},children:[t.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"14px",background:"var(--primary-light)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",margin:"0 auto 16px"},children:t.jsx(xa,{size:26})}),t.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:"800",marginBottom:"6px"},children:"Reset Your Password"}),t.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-muted)"},children:"Enter your email and we'll generate a secure token to reset your credentials."})]}),i?t.jsxs("div",{style:{textAlign:"center"},children:[t.jsxs("div",{style:{padding:"16px",background:"var(--success-bg)",borderRadius:"var(--radius-md)",marginBottom:"24px"},children:[t.jsx(it,{size:28,color:"var(--success)",style:{margin:"0 auto 8px"}}),t.jsx("p",{style:{fontSize:"0.9rem",color:"#065f46",fontWeight:"600"},children:"Reset authorization generated!"}),t.jsxs("p",{style:{fontSize:"0.8rem",color:"#047857",marginTop:"4px"},children:["Token: ",t.jsx("code",{style:{background:"#d1fae5",padding:"2px 6px",borderRadius:"4px"},children:i})]})]}),t.jsx("button",{onClick:()=>l(`/reset-password?token=${i}`),className:"btn btn-primary",style:{width:"100%",padding:"12px"},children:"Proceed to Reset Password"})]}):t.jsxs("form",{onSubmit:d,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Email Address"}),t.jsx("input",{type:"email",placeholder:"you@domain.com",value:e,onChange:u=>r(u.target.value),className:"form-input",autoFocus:!0,required:!0})]}),t.jsx("button",{type:"submit",disabled:n,className:"btn btn-primary",style:{width:"100%",padding:"12px",fontSize:"0.98rem"},children:n?"Verifying Account...":"Send Reset Link"})]}),t.jsx("div",{style:{marginTop:"28px",textAlign:"center"},children:t.jsxs(T,{to:"/login",style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.88rem",color:"var(--text-muted)",fontWeight:"600"},children:[t.jsx(lt,{size:16})," Back to Sign In"]})})]})})},Cg=()=>{const[e]=Wi(),r=e.get("token")||"",n=oe(),{showToast:o}=ie(),[i,s]=g.useState(r),[a,l]=g.useState(""),[d,u]=g.useState(""),[x,y]=g.useState(!1),v=async m=>{if(m.preventDefault(),!i.trim()){o("Reset token is required.","error");return}if(a.length<6){o("Password must be at least 6 characters.","error");return}if(a!==d){o("Passwords do not match.","error");return}y(!0);try{(await A.resetPassword({token:i.trim(),password:a,confirm_password:d})).success&&(o("Password updated! You can now log in.","success"),n("/login"))}catch(b){o(b.message||"Password reset failed","error")}finally{y(!1)}};return t.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8fafc",padding:"24px"},children:t.jsxs("div",{className:"card",style:{maxWidth:"460px",width:"100%",padding:"36px"},children:[t.jsx("h1",{style:{fontSize:"1.6rem",fontWeight:"800",marginBottom:"8px",textAlign:"center"},children:"Set New Password"}),t.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-muted)",marginBottom:"28px",textAlign:"center"},children:"Choose a strong password to secure your account."}),t.jsxs("form",{onSubmit:v,children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Reset Token"}),t.jsx("input",{type:"text",value:i,onChange:m=>s(m.target.value),placeholder:"Paste secure token",className:"form-input",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"New Password"}),t.jsx("input",{type:"password",value:a,onChange:m=>l(m.target.value),placeholder:"Min 6 characters",className:"form-input",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Confirm New Password"}),t.jsx("input",{type:"password",value:d,onChange:m=>u(m.target.value),placeholder:"Re-enter password",className:"form-input",required:!0})]}),t.jsx("button",{type:"submit",disabled:x,className:"btn btn-primary",style:{width:"100%",padding:"12px",fontSize:"0.98rem",marginTop:"10px"},children:x?"Updating Password...":"Save New Password"})]}),t.jsx("div",{style:{marginTop:"24px",textAlign:"center"},children:t.jsx(T,{to:"/login",style:{fontSize:"0.88rem",color:"var(--primary)",fontWeight:"600"},children:"Back to Sign In"})})]})})},zg=()=>{const{user:e}=pe(),[r,n]=g.useState(null),[o,i]=g.useState([]),[s,a]=g.useState([]),[l,d]=g.useState(!0);g.useEffect(()=>{(async()=>{var v,m,b,f,j;try{const[c,p,h]=await Promise.all([A.getAnalytics(7).catch(()=>({})),A.getMyPosts({limit:6}).catch(()=>({})),A.getPosts({limit:6}).catch(()=>({}))]);c!=null&&c.success&&c.data&&n(c.data);let k=p!=null&&p.success&&((m=(v=p.data)==null?void 0:v.posts)==null?void 0:m.length)>0?p.data.posts:[];k.length===0&&(h!=null&&h.success)&&((f=(b=h.data)==null?void 0:b.posts)==null?void 0:f.length)>0&&(k=h.data.posts.slice(0,3)),i(k.slice(0,3)),h!=null&&h.success&&((j=h.data)!=null&&j.categories)&&a(h.data.categories)}catch(c){console.error("Error fetching dashboard:",c)}finally{d(!1)}})()},[]);const u=(r==null?void 0:r.stats)||{total_posts:0,total_views:0,total_likes:0,followers_count:0},x=[{id:1,name:"Graphic Design",slug:"graphic-design",icon:Bi,color:"#ec4899",count:42},{id:2,name:"Web Development",slug:"web-development",icon:Ii,color:"#2563eb",count:38},{id:3,name:"Video Editing",slug:"video-editing",icon:rn,color:"#ef4444",count:29},{id:4,name:"Photography",slug:"photography",icon:Nt,color:"#0284c7",count:35},{id:5,name:"UI/UX Design",slug:"ui-ux-design",icon:Nu,color:"#8b5cf6",count:31},{id:6,name:"Digital Marketing",slug:"digital-marketing",icon:bl,color:"#10b981",count:18}];return t.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",paddingBottom:"40px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"24px",flexWrap:"wrap",gap:"14px"},children:[t.jsxs("div",{children:[t.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:"800",color:"#0c1538",margin:"0 0 4px",letterSpacing:"-0.02em"},children:"Dashboard"}),t.jsxs("p",{style:{margin:0,color:"#64748b",fontSize:"0.92rem"},children:["Welcome back, ",t.jsx("strong",{style:{color:"#0c1538"},children:(e==null?void 0:e.full_name)||"Abdala Creator"}),"! Here is your portfolio activity."]})]}),t.jsxs(T,{to:"/create-post",className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"8px",background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",borderRadius:"var(--radius-full)",padding:"10px 22px",boxShadow:"0 4px 14px rgba(110, 37, 232, 0.35)",fontSize:"0.9rem",fontWeight:700},children:[t.jsx(yl,{size:17}),t.jsx("span",{children:"New Post"})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px",marginBottom:"32px"},children:[t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"},children:[t.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"rgba(110, 37, 232, 0.08)",color:"#6e25e8",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(Jt,{size:20,strokeWidth:2.3})}),t.jsx("span",{style:{background:"#ecfdf5",color:"#10b981",fontWeight:800,fontSize:"0.74rem",padding:"3px 9px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"2px"},children:"▲ 12%"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:"900",color:"#0c1538",lineHeight:1.1,marginBottom:"4px"},children:u.total_posts??0}),t.jsx("span",{style:{fontSize:"0.85rem",color:"#64748b",fontWeight:"600"},children:"Total Posts"})]})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"},children:[t.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"rgba(2, 132, 199, 0.08)",color:"#0284c7",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(xe,{size:20,strokeWidth:2.3})}),t.jsx("span",{style:{background:"#ecfdf5",color:"#10b981",fontWeight:800,fontSize:"0.74rem",padding:"3px 9px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"2px"},children:"▲ 18%"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:"900",color:"#0c1538",lineHeight:1.1,marginBottom:"4px"},children:u.total_views>1e3?`${(u.total_views/1e3).toFixed(1)}K`:u.total_views??0}),t.jsx("span",{style:{fontSize:"0.85rem",color:"#64748b",fontWeight:"600"},children:"Total Views"})]})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"},children:[t.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"rgba(239, 68, 68, 0.08)",color:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(He,{size:20,strokeWidth:2.3})}),t.jsx("span",{style:{background:"#ecfdf5",color:"#10b981",fontWeight:800,fontSize:"0.74rem",padding:"3px 9px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"2px"},children:"▲ 24%"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:"900",color:"#0c1538",lineHeight:1.1,marginBottom:"4px"},children:u.total_likes??0}),t.jsx("span",{style:{fontSize:"0.85rem",color:"#64748b",fontWeight:"600"},children:"Total Likes"})]})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"},children:[t.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"rgba(139, 92, 246, 0.08)",color:"#8b5cf6",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(dt,{size:20,strokeWidth:2.3})}),t.jsx("span",{style:{background:"#ecfdf5",color:"#10b981",fontWeight:800,fontSize:"0.74rem",padding:"3px 9px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"2px"},children:"▲ 15%"})]}),t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:"900",color:"#0c1538",lineHeight:1.1,marginBottom:"4px"},children:u.followers_count??0}),t.jsx("span",{style:{fontSize:"0.85rem",color:"#64748b",fontWeight:"600"},children:"Followers"})]})]})]}),t.jsxs("div",{style:{marginBottom:"36px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"18px"},children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#0c1538",margin:0},children:"Recent Posts"}),t.jsxs(T,{to:"/my-posts",style:{fontSize:"0.88rem",color:"#6e25e8",fontWeight:"700",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx("span",{children:"View all"}),t.jsx(ai,{size:15})]})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(310px, 1fr))",gap:"24px"},children:o.map(y=>{const v=y.post_type==="video"||y.cover_image&&y.cover_image.endsWith(".mp4"),m=y.post_type==="project"?`/project/${y.id}`:y.post_type==="video"?`/post/${y.id}/video`:`/post/${y.id}`;return t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",overflow:"hidden",border:"1px solid #edf2f7",boxShadow:"0 4px 18px rgba(0,0,0,0.04)",transition:"all 0.25s ease",display:"flex",flexDirection:"column"},onMouseEnter:b=>{b.currentTarget.style.transform="translateY(-4px)",b.currentTarget.style.boxShadow="0 14px 30px rgba(110, 37, 232, 0.1)",b.currentTarget.style.borderColor="#c084fc"},onMouseLeave:b=>{b.currentTarget.style.transform="translateY(0)",b.currentTarget.style.boxShadow="0 4px 18px rgba(0,0,0,0.04)",b.currentTarget.style.borderColor="#edf2f7"},children:[t.jsxs(T,{to:m,style:{height:"190px",position:"relative",overflow:"hidden",display:"block",background:"#0b0f19"},children:[v?t.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[t.jsx("video",{src:y.cover_image||"/assets/vedio/vedio editing.mp4",muted:!0,loop:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover"}}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"42px",height:"42px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.9)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(239, 68, 68, 0.5)"},children:t.jsx(_t,{size:18,style:{fill:"#ffffff",marginLeft:"3px"}})})]}):t.jsx("img",{src:y.cover_image||"https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop&q=80",alt:y.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),y.category_name&&t.jsx("span",{style:{position:"absolute",top:"12px",left:"12px",background:"rgba(15, 23, 42, 0.8)",backdropFilter:"blur(6px)",color:"#ffffff",fontSize:"0.72rem",fontWeight:700,padding:"4px 10px",borderRadius:"6px"},children:y.category_name})]}),t.jsxs("div",{style:{padding:"18px 20px",flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t.jsx("div",{children:t.jsx(T,{to:m,style:{textDecoration:"none"},children:t.jsx("h3",{style:{fontSize:"1rem",fontWeight:"800",color:"#0c1538",margin:"0 0 12px",lineHeight:1.4,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:y.title})})}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",borderTop:"1px solid #f1f5f9",fontSize:"0.8rem",color:"#64748b"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(xe,{size:15,color:"#0284c7"}),t.jsx("span",{children:y.views_count||1240})]}),t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(He,{size:14,color:"#ef4444",style:{fill:"#ef4444"}}),t.jsx("span",{children:y.likes_count||142})]}),t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(Pe,{size:14,color:"#6e25e8"}),t.jsx("span",{children:y.comments_count||3})]})]}),t.jsx(T,{to:`/post/${y.id}`,style:{color:"#6e25e8",fontWeight:"700",textDecoration:"none"},children:t.jsx(zh,{size:16})})]})]})]},y.id)})})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",padding:"28px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#0c1538",margin:"0 0 4px"},children:"Categories"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.86rem"},children:"Explore disciplines and discover specialized portfolios across the platform."})]}),t.jsxs(T,{to:"/categories",style:{fontSize:"0.86rem",color:"#6e25e8",fontWeight:"700",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx("span",{children:"Explore all"}),t.jsx(ai,{size:15})]})]}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(170px, 1fr))",gap:"14px"},children:x.map(y=>{const v=y.icon;return t.jsxs(T,{to:`/explore?category=${y.slug}`,style:{background:"#f8fafc",border:"1px solid #eef2f6",borderRadius:"14px",padding:"16px",display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",transition:"all 0.2s ease"},onMouseEnter:m=>{m.currentTarget.style.background="#ffffff",m.currentTarget.style.borderColor=y.color,m.currentTarget.style.boxShadow="0 6px 18px rgba(0,0,0,0.06)",m.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:m=>{m.currentTarget.style.background="#f8fafc",m.currentTarget.style.borderColor="#eef2f6",m.currentTarget.style.boxShadow="none",m.currentTarget.style.transform="translateY(0)"},children:[t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:`${y.color}15`,color:y.color,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t.jsx(v,{size:20,strokeWidth:2.2})}),t.jsxs("div",{style:{overflow:"hidden"},children:[t.jsx("h4",{style:{margin:0,fontSize:"0.86rem",fontWeight:"800",color:"#0c1538",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:y.name}),t.jsxs("span",{style:{fontSize:"0.74rem",color:"#94a3b8"},children:[y.count," works"]})]})]},y.id)})})]})]})},Ng=()=>{const{showToast:e}=ie(),r=oe(),[n]=Wi(),[o,i]=g.useState("image"),[s,a]=g.useState([]),[l,d]=g.useState(!1),[u,x]=g.useState(!1),[y,v]=g.useState(!1),[m,b]=g.useState({title:"",description:"",category_id:"",visibility:"public",status:"published",media_urls:[],tags:["Branding","VisualIdentity"],project_url:"",github_url:"",technologies:""}),[f,j]=g.useState("");g.useEffect(()=>{(async()=>{var N;try{const W=await A.getPosts({limit:1});if(W.success&&((N=W.data)!=null&&N.categories)){const M=W.data.categories;a(M);const S=n.get("category");if(S){const H=M.find(G=>String(G.id)===String(S)||G.slug===S);if(H){b(G=>({...G,category_id:H.id}));return}}M.length>0&&!m.category_id&&b(H=>({...H,category_id:M[0].id}))}}catch(W){console.error(W)}})()},[n]);const c=_=>{const{name:N,value:W}=_.target;b(M=>({...M,[N]:W}))},p=async _=>{var W;const N=Array.from(_.target.files||[]);if(N.length!==0){x(!0);try{for(const M of N){const S=o==="video"?"videos":"posts",H=await A.uploadFile(M,S);H.success&&((W=H.data)!=null&&W.full_url)&&b(G=>({...G,media_urls:[...G.media_urls,H.data.full_url]}))}e("Media file(s) uploaded successfully!","success")}catch(M){e(M.message||"File upload failed","error")}finally{x(!1)}}},h=_=>{b(N=>({...N,media_urls:N.media_urls.filter((W,M)=>M!==_)}))},k=()=>{f.trim()&&!m.tags.includes(f.trim())&&(b(_=>({..._,tags:[..._.tags,f.trim()]})),j(""))},C=_=>{b(N=>({...N,tags:N.tags.filter(W=>W!==_)}))},w=async(_="published")=>{if(!m.title.trim()){e("Please enter a post title.","error");return}if(!m.category_id){e("Please select a category.","error");return}if(m.media_urls.length===0&&o!=="project"&&o!=="article"){e("Please upload media or select an image/video.","error");return}d(!0);try{const N={...m,post_type:o==="article"||o==="audio"?"image":o,status:_};(await A.createPost(N)).success&&(e(_==="draft"?"Draft saved successfully!":"Post published successfully!","success"),r("/my-posts"))}catch(N){e(N.message||"Failed to publish post","error")}finally{d(!1)}},z=_=>{b(N=>({...N,media_urls:[...N.media_urls,_]})),e("High-res Unsplash photo attached!","success")},P=[{id:"image",label:"Image",icon:xl},{id:"video",label:"Video",icon:rn},{id:"project",label:"Project",icon:ku},{id:"article",label:"Article",icon:Jt},{id:"audio",label:"Audio",icon:Fh}];return t.jsxs("div",{style:{maxWidth:"820px",margin:"0 auto",paddingBottom:"40px"},children:[t.jsx(Mu,{isOpen:y,onClose:()=>v(!1),onSelectImage:z,title:"Browse High-Quality Showcase Photos"}),t.jsxs("div",{style:{marginBottom:"24px"},children:[t.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:"800",color:"#0c1538",margin:"0 0 4px",letterSpacing:"-0.02em"},children:"Create New Post"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.9rem"},children:"Publish your creative portfolios, commercial showreels, code architectures, or case studies."})]}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px",background:"#ffffff",padding:"8px",borderRadius:"16px",border:"1px solid #edf2f7",boxShadow:"0 2px 10px rgba(0,0,0,0.02)",marginBottom:"24px",overflowX:"auto"},children:P.map(_=>{const N=_.icon,W=o===_.id;return t.jsxs("button",{type:"button",onClick:()=>i(_.id),style:{flex:"1 1 auto",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"10px 18px",borderRadius:"12px",border:"none",fontWeight:700,fontSize:"0.9rem",cursor:"pointer",transition:"all 0.2s ease",background:W?"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)":"transparent",color:W?"#ffffff":"#64748b",boxShadow:W?"0 4px 14px rgba(110, 37, 232, 0.35)":"none",whiteSpace:"nowrap"},children:[t.jsx(N,{size:17}),t.jsx("span",{children:_.label})]},_.id)})}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",padding:"32px",border:"1px solid #edf2f7",boxShadow:"0 4px 25px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"22px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.88rem",fontWeight:700,color:"#0c1538",marginBottom:"8px"},children:"Title"}),t.jsx("input",{type:"text",name:"title",placeholder:"e.g. Modern Brand Identity & Visual System for Nova Studio",value:m.title,onChange:c,style:{width:"100%",padding:"13px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",background:"#ffffff",color:"#0c1538",fontSize:"0.95rem",outline:"none",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.02)"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.88rem",fontWeight:700,color:"#0c1538",marginBottom:"8px"},children:"Description"}),t.jsx("textarea",{name:"description",rows:5,placeholder:"Write a clear overview of the project, goals, creative process, and results achieved...",value:m.description,onChange:c,style:{width:"100%",padding:"13px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",background:"#ffffff",color:"#0c1538",fontSize:"0.95rem",outline:"none",fontFamily:"inherit",lineHeight:1.6}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.88rem",fontWeight:700,color:"#0c1538",marginBottom:"8px"},children:"Category"}),t.jsx("select",{name:"category_id",value:m.category_id,onChange:c,style:{width:"100%",padding:"13px 16px",borderRadius:"12px",border:"1px solid #e2e8f0",background:"#ffffff",color:"#0c1538",fontSize:"0.95rem",outline:"none",cursor:"pointer"},children:s.map(_=>t.jsx("option",{value:_.id,children:_.name},_.id))})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.88rem",fontWeight:700,color:"#0c1538",marginBottom:"8px"},children:"Tags"}),t.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"10px"},children:[t.jsx("input",{type:"text",placeholder:"Add tag and press Enter (e.g., Branding, FullStack)...",value:f,onChange:_=>j(_.target.value),onKeyDown:_=>{_.key==="Enter"&&(_.preventDefault(),k())},style:{flex:1,padding:"11px 16px",borderRadius:"10px",border:"1px solid #e2e8f0",background:"#ffffff",fontSize:"0.9rem",outline:"none"}}),t.jsx("button",{type:"button",onClick:k,className:"btn btn-secondary btn-sm",style:{padding:"0 18px",fontWeight:700},children:"Add"})]}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:m.tags.map(_=>t.jsxs("span",{style:{background:"rgba(110, 37, 232, 0.08)",color:"#6e25e8",padding:"5px 12px",borderRadius:"8px",fontSize:"0.8rem",fontWeight:700,display:"inline-flex",alignItems:"center",gap:"6px"},children:["#",_,t.jsx("button",{type:"button",onClick:()=>C(_),style:{background:"none",border:"none",color:"#6e25e8",cursor:"pointer",padding:0},children:t.jsx(Ae,{size:13})})]},_))})]}),o==="project"&&t.jsxs("div",{style:{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"16px",padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsxs("h4",{style:{margin:0,fontSize:"0.95rem",fontWeight:800,color:"#0c1538",display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(Eh,{size:17,color:"#6e25e8"}),t.jsx("span",{children:"Project Deliverable Links & Stack"})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#475569",marginBottom:"6px"},children:"Live Website / Demo URL:"}),t.jsx("input",{type:"url",name:"project_url",placeholder:"https://myproject-demo.com",value:m.project_url,onChange:c,style:{width:"100%",padding:"11px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem",outline:"none"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#475569",marginBottom:"6px"},children:"GitHub Repository URL:"}),t.jsx("input",{type:"url",name:"github_url",placeholder:"https://github.com/username/project-repo",value:m.github_url,onChange:c,style:{width:"100%",padding:"11px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem",outline:"none"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#475569",marginBottom:"6px"},children:"Technologies Used:"}),t.jsx("input",{type:"text",name:"technologies",placeholder:"e.g., React.js, PHP, MySQL, Tailwind CSS",value:m.technologies,onChange:c,style:{width:"100%",padding:"11px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.9rem",outline:"none"}})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[t.jsx("label",{style:{fontSize:"0.88rem",fontWeight:700,color:"#0c1538"},children:"Media Upload"}),t.jsxs("button",{type:"button",onClick:()=>v(!0),style:{background:"none",border:"none",color:"#6e25e8",fontSize:"0.82rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx(Xe,{size:14}),t.jsx("span",{children:"Or Pick from Unsplash"})]})]}),t.jsxs("label",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"36px 20px",border:"2px dashed #cbd5e1",borderRadius:"16px",background:"#faf5ff",cursor:u?"wait":"pointer",textAlign:"center",transition:"all 0.2s ease"},children:[t.jsx("input",{type:"file",multiple:!0,accept:o==="video"?"video/mp4,video/webm":"image/*,video/mp4",onChange:p,disabled:u,style:{display:"none"}}),t.jsx("div",{style:{width:"52px",height:"52px",borderRadius:"50%",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",color:"#6e25e8",boxShadow:"0 4px 14px rgba(110, 37, 232, 0.15)",marginBottom:"12px"},children:t.jsx(Yn,{size:26})}),t.jsx("span",{style:{fontSize:"0.98rem",fontWeight:800,color:"#0c1538",marginBottom:"4px"},children:u?"Uploading media files...":"Drag and drop files here or click to browse"}),t.jsx("span",{style:{fontSize:"0.82rem",color:"#64748b"},children:"Supports JPG, PNG, MP4, WEBM up to 50MB"})]}),m.media_urls.length>0&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(130px, 1fr))",gap:"12px",marginTop:"16px"},children:m.media_urls.map((_,N)=>{const W=_.endsWith(".mp4")||_.endsWith(".webm");return t.jsxs("div",{style:{position:"relative",height:"100px",borderRadius:"12px",overflow:"hidden",border:"1px solid #e2e8f0"},children:[W?t.jsx("video",{src:_,style:{width:"100%",height:"100%",objectFit:"cover"}}):t.jsx("img",{src:_,alt:"Uploaded",style:{width:"100%",height:"100%",objectFit:"cover"}}),t.jsx("button",{type:"button",onClick:()=>h(N),style:{position:"absolute",top:"6px",right:"6px",width:"24px",height:"24px",borderRadius:"50%",background:"rgba(0,0,0,0.7)",color:"#fff",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t.jsx(Ae,{size:14})})]},N)})})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.88rem",fontWeight:700,color:"#0c1538",marginBottom:"8px"},children:"Visibility"}),t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",color:"#334155",fontWeight:600},children:[t.jsx("input",{type:"radio",name:"visibility",value:"public",checked:m.visibility==="public",onChange:c,style:{accentColor:"#6e25e8",width:"16px",height:"16px"}}),t.jsx(Ei,{size:15,color:"#10b981"}),t.jsx("span",{children:"Public"})]}),t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.9rem",color:"#334155",fontWeight:600},children:[t.jsx("input",{type:"radio",name:"visibility",value:"private",checked:m.visibility==="private",onChange:c,style:{accentColor:"#6e25e8",width:"16px",height:"16px"}}),t.jsx(hl,{size:15,color:"#64748b"}),t.jsx("span",{children:"Private"})]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"14px",paddingTop:"20px",borderTop:"1px solid #f1f5f9"},children:[t.jsx("button",{type:"button",onClick:()=>w("draft"),disabled:l,className:"btn btn-secondary",style:{padding:"12px 24px",fontWeight:700},children:"Save Draft"}),t.jsx("button",{type:"button",onClick:()=>w("published"),disabled:l,className:"btn btn-primary",style:{padding:"12px 30px",fontWeight:800,background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",boxShadow:"0 6px 20px rgba(110, 37, 232, 0.4)"},children:l?"Publishing...":"Publish Post"})]})]})]})},Bu=({isOpen:e,title:r,message:n,confirmText:o="Delete",confirmVariant:i="danger",onConfirm:s,onCancel:a,loading:l=!1})=>e?t.jsx("div",{className:"modal-overlay",onClick:a,children:t.jsxs("div",{className:"modal-box",onClick:d=>d.stopPropagation(),style:{padding:"24px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px"},children:[t.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:i==="danger"?"var(--danger-bg)":"var(--warning-bg)",display:"flex",alignItems:"center",justifyContent:"center",color:i==="danger"?"var(--danger)":"var(--warning)"},children:t.jsx(vl,{size:22})}),t.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer"},children:t.jsx(Ae,{size:20})})]}),t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"700",marginBottom:"8px",color:"var(--text-main)"},children:r}),t.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-muted)",marginBottom:"24px",lineHeight:"1.5"},children:n}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[t.jsx("button",{onClick:a,disabled:l,className:"btn btn-secondary",children:"Cancel"}),t.jsx("button",{onClick:s,disabled:l,className:`btn ${i==="danger"?"btn-danger":"btn-primary"}`,children:l?"Processing...":o})]})]})}):null,_g=()=>{const{showToast:e}=ie(),[r,n]=g.useState([]),[o,i]=g.useState(!0),[s,a]=g.useState("all"),[l,d]=g.useState("all"),[u,x]=g.useState(null),[y,v]=g.useState(!1),m=async()=>{i(!0);try{const p=await A.getMyPosts({status:s!=="all"?s:"",type:l!=="all"?l:"",limit:50});p.success&&p.data&&n(p.data.posts||[])}catch(p){console.error(p),e("Could not load your posts","error")}finally{i(!1)}};g.useEffect(()=>{m()},[s,l]);const b=async()=>{if(u){v(!0);try{const p=await A.deletePost(u.id);p.success?(e("Post removed successfully","success"),n(h=>h.filter(k=>k.id!==u.id))):e(p.message||"Failed to delete post","error")}catch{e("Error removing post","error")}finally{v(!1),x(null)}}},f=r.reduce((p,h)=>p+(parseInt(h.views_count)||0),0),j=r.reduce((p,h)=>p+(parseInt(h.likes_count)||0),0),c=r.reduce((p,h)=>p+(parseInt(h.comments_count)||0),0);return t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",marginBottom:"28px"},children:[t.jsxs("div",{children:[t.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:"800",color:"var(--text-main)",letterSpacing:"-0.02em"},children:"My Creative Works"}),t.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem"},children:"Manage, edit, monitor engagement, and publish new projects."})]}),t.jsxs(T,{to:"/create-post",className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(yl,{size:18}),t.jsx("span",{children:"Create New Post"})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px",marginBottom:"28px"},children:[t.jsxs("div",{className:"card",style:{padding:"20px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[t.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-muted)"},children:"Total Showcases"}),t.jsx("div",{style:{padding:"8px",borderRadius:"8px",background:"var(--primary-light)",color:"var(--primary)"},children:t.jsx(Jt,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.75rem",fontWeight:"800"},children:r.length})]}),t.jsxs("div",{className:"card",style:{padding:"20px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[t.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-muted)"},children:"Total Views"}),t.jsx("div",{style:{padding:"8px",borderRadius:"8px",background:"rgba(59, 130, 246, 0.1)",color:"#3b82f6"},children:t.jsx(xe,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.75rem",fontWeight:"800"},children:f})]}),t.jsxs("div",{className:"card",style:{padding:"20px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[t.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-muted)"},children:"Likes Received"}),t.jsx("div",{style:{padding:"8px",borderRadius:"8px",background:"rgba(239, 68, 68, 0.1)",color:"#ef4444"},children:t.jsx(He,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.75rem",fontWeight:"800"},children:j})]}),t.jsxs("div",{className:"card",style:{padding:"20px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[t.jsx("span",{style:{fontSize:"0.85rem",fontWeight:"600",color:"var(--text-muted)"},children:"Comments"}),t.jsx("div",{style:{padding:"8px",borderRadius:"8px",background:"rgba(16, 185, 129, 0.1)",color:"#10b981"},children:t.jsx(Pe,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.75rem",fontWeight:"800"},children:c})]})]}),t.jsxs("div",{className:"card",style:{padding:"16px 20px",marginBottom:"24px",display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[t.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["all","image","video","project"].map(p=>t.jsx("button",{onClick:()=>d(p),style:{padding:"6px 14px",borderRadius:"var(--radius-full)",border:"none",background:l===p?"var(--primary)":"var(--bg-main)",color:l===p?"#ffffff":"var(--text-muted)",fontWeight:"600",fontSize:"0.85rem",cursor:"pointer",textTransform:"capitalize"},children:p==="all"?"All Types":p+"s"},p))}),t.jsx("div",{style:{display:"flex",gap:"8px"},children:["all","published","draft"].map(p=>t.jsx("button",{onClick:()=>a(p),style:{padding:"6px 14px",borderRadius:"var(--radius-full)",border:s===p?"1px solid var(--primary)":"1px solid var(--border-color)",background:s===p?"var(--primary-light)":"#ffffff",color:s===p?"var(--primary)":"var(--text-muted)",fontWeight:"600",fontSize:"0.85rem",cursor:"pointer",textTransform:"capitalize"},children:p==="all"?"All Status":p},p))})]}),o?t.jsxs("div",{style:{textAlign:"center",padding:"60px 0"},children:[t.jsx("div",{className:"spinner",style:{margin:"0 auto 16px"}}),t.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading your showcases..."})]}):r.length===0?t.jsxs("div",{className:"card",style:{textAlign:"center",padding:"60px 20px"},children:[t.jsx(Jt,{size:48,color:"var(--text-light)",style:{margin:"0 auto 16px"}}),t.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"700",marginBottom:"8px"},children:"No posts found"}),t.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"400px",margin:"0 auto 20px"},children:"You haven't created any posts matching the selected filters yet."}),t.jsx(T,{to:"/create-post",className:"btn btn-primary",children:"Create Your First Showcase"})]}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.map(p=>{var C;const h=p.thumbnail||p.media&&((C=p.media[0])==null?void 0:C.file_url)||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80",k=p.post_type==="project"?`/project/${p.id}`:p.post_type==="video"?`/post/${p.id}/video`:`/post/${p.id}`;return t.jsxs("div",{className:"card card-hover",style:{display:"flex",flexWrap:"wrap",gap:"20px",alignItems:"center",padding:"16px 20px"},children:[t.jsxs(T,{to:k,style:{position:"relative",width:"110px",height:"80px",borderRadius:"var(--radius-sm)",overflow:"hidden",flexShrink:0,background:"#0f172a"},children:[t.jsx("img",{src:h,alt:p.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),p.post_type==="video"&&t.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)"},children:t.jsx(_t,{size:20,color:"#fff",fill:"#fff"})})]}),t.jsxs("div",{style:{flex:"1 1 240px",minWidth:0},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"},children:[t.jsx("span",{className:"badge badge-primary",style:{textTransform:"capitalize",fontSize:"0.75rem"},children:p.post_type}),t.jsx("span",{className:`badge ${p.status==="published"?"badge-success":"badge-warning"}`,style:{fontSize:"0.75rem"},children:p.status}),p.category_name&&t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-light)",fontWeight:"500"},children:p.category_name})]}),t.jsx(T,{to:k,style:{textDecoration:"none"},children:t.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"700",color:"var(--text-main)",marginBottom:"4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:p.title})}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"18px",color:"var(--text-muted)",fontSize:"0.82rem"},children:[t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(xe,{size:14})," ",p.views_count||0," views"]}),t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(He,{size:14})," ",p.likes_count||0," likes"]}),t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(Pe,{size:14})," ",p.comments_count||0," comments"]}),t.jsx("span",{children:new Date(p.created_at).toLocaleDateString()})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx(T,{to:k,className:"btn btn-secondary btn-sm",title:"View Showcase",style:{padding:"8px 12px"},children:t.jsx(Qt,{size:16})}),t.jsx("button",{onClick:()=>x(p),className:"btn btn-secondary btn-sm",title:"Delete Post",style:{padding:"8px 12px",color:"var(--danger)"},children:t.jsx(nn,{size:16})})]})]},p.id)})}),t.jsx(Bu,{isOpen:!!u,title:"Delete Showcase",message:`Are you sure you want to delete "${u==null?void 0:u.title}"? This action cannot be undone.`,confirmText:y?"Deleting...":"Delete Permanently",confirmVariant:"danger",onConfirm:b,onCancel:()=>x(null)})]})},Pg=()=>{const{user:e}=pe(),{showToast:r}=ie(),[n,o]=Wi(),i=n.get("user_id"),[s,a]=g.useState([]),[l,d]=g.useState(null),[u,x]=g.useState([]),[y,v]=g.useState(""),[m,b]=g.useState(!0),[f,j]=g.useState(!1),[c,p]=g.useState(!1),[h,k]=g.useState(""),C=g.useRef(null),w=()=>{var N;(N=C.current)==null||N.scrollIntoView({behavior:"smooth"})},z=async()=>{try{const N=await A.getConversations();if(N.success&&N.data){const W=N.data.conversations||[];if(a(W),i){const M=W.find(S=>String(S.partner_id)===String(i));if(M)d(M);else try{const S=await A.getProfile(i);if(S.success&&S.data){const H=S.data.user||S.data.profile;d({partner_id:H.id,partner_name:H.full_name||H.username,partner_username:H.username,partner_avatar:H.profile_photo,last_message:"Start a new conversation",unread_count:0})}}catch(S){console.error(S)}}else!l&&W.length>0&&d(W[0])}}catch(N){console.error(N)}finally{b(!1)}};g.useEffect(()=>{z()},[i]),g.useEffect(()=>{if(!l)return;const N=async()=>{j(!0);try{const M=await A.getMessages({user_id:l.partner_id});M.success&&M.data&&(x(M.data.messages||[]),setTimeout(w,100))}catch(M){console.error(M)}finally{j(!1)}};N();const W=setInterval(N,6e3);return()=>clearInterval(W)},[l==null?void 0:l.partner_id]);const P=async N=>{if(N.preventDefault(),!y.trim()||!l||c)return;const W=y.trim();v(""),p(!0);const M={id:Date.now(),sender_id:e==null?void 0:e.id,receiver_id:l.partner_id,message:W,created_at:new Date().toISOString(),is_read:0};x(S=>[...S,M]),setTimeout(w,50);try{const S=await A.sendMessage(l.partner_id,W);S.success?z():r(S.message||"Failed to send message","error")}catch{r("Error sending message","error")}finally{p(!1)}},_=s.filter(N=>(N.partner_name||N.partner_username||"").toLowerCase().includes(h.toLowerCase()));return t.jsxs("div",{style:{height:"calc(100vh - 130px)",minHeight:"550px",background:"#ffffff",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)",display:"flex",overflow:"hidden",boxShadow:"var(--shadow-sm)"},children:[t.jsxs("div",{style:{width:"320px",borderRight:"1px solid var(--border-color)",display:"flex",flexDirection:"column",background:"#ffffff"},className:`chat-list-panel ${l?"hide-on-mobile-if-active":""}`,children:[t.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid var(--border-color)"},children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"800",marginBottom:"12px",color:"var(--text-main)"},children:"Messages"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(Tt,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-light)"}}),t.jsx("input",{type:"text",placeholder:"Search conversations...",value:h,onChange:N=>k(N.target.value),className:"input-control",style:{paddingLeft:"36px",height:"38px",fontSize:"0.85rem"}})]})]}),t.jsx("div",{style:{flex:1,overflowY:"auto"},children:m?t.jsx("div",{style:{padding:"30px",textAlign:"center",color:"var(--text-muted)"},children:"Loading chats..."}):_.length===0?t.jsxs("div",{style:{padding:"40px 20px",textAlign:"center",color:"var(--text-muted)"},children:[t.jsx(Pe,{size:32,color:"var(--text-light)",style:{margin:"0 auto 10px"}}),t.jsx("p",{style:{fontSize:"0.9rem"},children:"No conversations yet."}),t.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-light)",marginTop:"4px"},children:`Visit a creator's profile and click "Message" to connect!`})]}):_.map(N=>{const W=(l==null?void 0:l.partner_id)===N.partner_id;return t.jsxs("div",{onClick:()=>{d(N),o({user_id:N.partner_id})},style:{display:"flex",alignItems:"center",gap:"12px",padding:"14px 16px",borderBottom:"1px solid var(--border-light)",cursor:"pointer",background:W?"var(--primary-light)":"transparent",transition:"var(--transition)"},children:[t.jsx("img",{src:N.partner_avatar||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:N.partner_name,style:{width:"44px",height:"44px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2px"},children:[t.jsx("h4",{style:{fontSize:"0.95rem",fontWeight:"700",color:"var(--text-main)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:N.partner_name||N.partner_username}),N.last_message_time&&t.jsx("span",{style:{fontSize:"0.72rem",color:"var(--text-light)"},children:new Date(N.last_message_time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),t.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:N.last_message})]}),N.unread_count>0&&t.jsx("span",{style:{minWidth:"18px",height:"18px",borderRadius:"50%",background:"var(--primary)",color:"#ffffff",fontSize:"0.7rem",fontWeight:"700",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 5px"},children:N.unread_count})]},N.partner_id)})})]}),t.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",background:"#f8fafc"},children:l?t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:"65px",padding:"0 20px",background:"#ffffff",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("button",{onClick:()=>d(null),className:"mobile-back-to-chats",style:{display:"none",background:"none",border:"none",color:"var(--text-main)",cursor:"pointer"},children:t.jsx(lt,{size:20})}),t.jsx("img",{src:l.partner_avatar||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:l.partner_name,style:{width:"40px",height:"40px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"1rem",fontWeight:"700",color:"var(--text-main)"},children:l.partner_name||l.partner_username}),t.jsx(T,{to:`/profile/${l.partner_username}`,style:{fontSize:"0.78rem",color:"var(--primary)",textDecoration:"none",fontWeight:"600"},children:"View Showcase Profile"})]})]})}),t.jsxs("div",{style:{flex:1,padding:"20px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"12px"},children:[f?t.jsx("div",{style:{textAlign:"center",padding:"40px 0",color:"var(--text-muted)"},children:"Loading chat history..."}):u.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"60px 20px",color:"var(--text-muted)"},children:[t.jsx(Xe,{size:36,color:"var(--primary)",style:{margin:"0 auto 12px"}}),t.jsxs("h4",{style:{fontSize:"1.1rem",fontWeight:"700",color:"var(--text-main)",marginBottom:"4px"},children:["Say hello to ",l.partner_name||l.partner_username,"!"]}),t.jsx("p",{style:{fontSize:"0.85rem"},children:"Send a direct message to collaborate on portfolios and creative projects."})]}):u.map(N=>{const W=String(N.sender_id)===String(e==null?void 0:e.id);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:W?"flex-end":"flex-start"},children:[t.jsx("div",{style:{maxWidth:"70%",padding:"12px 16px",borderRadius:W?"16px 16px 4px 16px":"16px 16px 16px 4px",background:W?"var(--primary-gradient)":"#ffffff",color:W?"#ffffff":"var(--text-main)",boxShadow:"var(--shadow-sm)",fontSize:"0.92rem",lineHeight:"1.5",wordBreak:"break-word",border:W?"none":"1px solid var(--border-color)"},children:N.message}),t.jsx("span",{style:{fontSize:"0.7rem",color:"var(--text-light)",marginTop:"4px",padding:"0 4px"},children:new Date(N.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]},N.id)}),t.jsx("div",{ref:C})]}),t.jsxs("form",{onSubmit:P,style:{padding:"14px 20px",background:"#ffffff",borderTop:"1px solid var(--border-color)",display:"flex",gap:"12px",alignItems:"center"},children:[t.jsx("input",{type:"text",placeholder:"Write your message...",value:y,onChange:N=>v(N.target.value),className:"input-control",style:{flex:1,borderRadius:"var(--radius-full)"}}),t.jsxs("button",{type:"submit",disabled:!y.trim()||c,className:"btn btn-primary",style:{borderRadius:"var(--radius-full)",padding:"10px 18px",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Ai,{size:16}),t.jsx("span",{children:"Send"})]})]})]}):t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"var(--text-muted)",padding:"40px"},children:[t.jsx(Pe,{size:54,color:"var(--text-light)",style:{marginBottom:"16px"}}),t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"700",color:"var(--text-main)",marginBottom:"8px"},children:"Your Inbox"}),t.jsx("p",{style:{maxWidth:"360px",textAlign:"center",fontSize:"0.9rem"},children:"Select a conversation from the left or visit any creator's portfolio to send them a direct message."})]})}),t.jsx("style",{children:`
        @media (max-width: 768px) {
          .chat-list-panel.hide-on-mobile-if-active {
            display: none !important;
          }
          .mobile-back-to-chats {
            display: block !important;
          }
        }
      `})]})},Wg=()=>{const{refreshUser:e}=pe(),{showToast:r}=ie();oe();const[n,o]=g.useState([]),[i,s]=g.useState("all"),[a,l]=g.useState(!0),d=async()=>{l(!0);try{const m=await A.getNotifications(i);m.success&&m.data&&o(m.data.notifications||[])}catch(m){console.error(m),r("Could not load notifications","error")}finally{l(!1)}};g.useEffect(()=>{d()},[i]);const u=async()=>{try{(await A.markNotificationRead(null,!0)).success&&(o(b=>b.map(f=>({...f,is_read:1}))),e(),r("All notifications marked as read","success"))}catch{r("Failed to update notifications","error")}},x=async m=>{try{await A.markNotificationRead(m,!1),o(b=>b.map(f=>f.id===m?{...f,is_read:1}:f)),e()}catch(b){console.error(b)}},y=async m=>{try{(await A.deleteNotification(m)).success&&(o(f=>f.filter(j=>j.id!==m)),e())}catch{r("Could not delete notification","error")}},v=m=>{switch(m){case"like":return t.jsx("div",{style:{padding:"8px",borderRadius:"50%",background:"rgba(239, 68, 68, 0.1)",color:"#ef4444"},children:t.jsx(He,{size:18})});case"comment":return t.jsx("div",{style:{padding:"8px",borderRadius:"50%",background:"rgba(99, 102, 241, 0.1)",color:"var(--primary)"},children:t.jsx(Pe,{size:18})});case"follow":return t.jsx("div",{style:{padding:"8px",borderRadius:"50%",background:"rgba(16, 185, 129, 0.1)",color:"#10b981"},children:t.jsx(eo,{size:18})});default:return t.jsx("div",{style:{padding:"8px",borderRadius:"50%",background:"rgba(245, 158, 11, 0.1)",color:"#f59e0b"},children:t.jsx(gr,{size:18})})}};return t.jsxs("div",{style:{maxWidth:"850px",margin:"0 auto"},children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",marginBottom:"24px"},children:[t.jsxs("div",{children:[t.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:"800",color:"var(--text-main)",letterSpacing:"-0.02em"},children:"Notifications"}),t.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem"},children:"Stay updated with applause, new followers, feedback, and messages."})]}),n.some(m=>!m.is_read)&&t.jsxs("button",{onClick:u,className:"btn btn-secondary btn-sm",style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Nh,{size:16}),t.jsx("span",{children:"Mark all as read"})]})]}),t.jsx("div",{className:"card",style:{padding:"12px 16px",marginBottom:"24px",display:"flex",gap:"8px",overflowX:"auto"},children:[{id:"all",label:"All"},{id:"likes",label:"Likes"},{id:"comments",label:"Comments"},{id:"follows",label:"Followers"},{id:"messages",label:"Messages"}].map(m=>t.jsx("button",{onClick:()=>s(m.id),style:{padding:"6px 14px",borderRadius:"var(--radius-full)",border:"none",background:i===m.id?"var(--primary)":"transparent",color:i===m.id?"#ffffff":"var(--text-muted)",fontWeight:"600",fontSize:"0.85rem",cursor:"pointer",whiteSpace:"nowrap"},children:m.label},m.id))}),a?t.jsxs("div",{style:{textAlign:"center",padding:"60px 0"},children:[t.jsx("div",{className:"spinner",style:{margin:"0 auto 16px"}}),t.jsx("p",{style:{color:"var(--text-muted)"},children:"Checking notifications..."})]}):n.length===0?t.jsxs("div",{className:"card",style:{textAlign:"center",padding:"60px 20px"},children:[t.jsx(gr,{size:48,color:"var(--text-light)",style:{margin:"0 auto 16px"}}),t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"700",marginBottom:"8px"},children:"No notifications found"}),t.jsx("p",{style:{color:"var(--text-muted)",maxWidth:"360px",margin:"0 auto"},children:"When creators like your posts, leave comments, or start following you, you'll see them here."})]}):t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:n.map(m=>{const b=!m.is_read,f=m.post_id?`/post/${m.post_id}`:m.sender_username?`/profile/${m.sender_username}`:null;return t.jsxs("div",{className:"card card-hover",style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px 20px",background:b?"#f5f7ff":"#ffffff",borderLeft:b?"4px solid var(--primary)":"1px solid var(--border-color)"},children:[v(m.type),m.sender_avatar&&t.jsx("img",{src:m.sender_avatar,alt:m.sender_name||"Creator",style:{width:"40px",height:"40px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{style:{flex:1,minWidth:0},children:[t.jsxs("p",{style:{fontSize:"0.92rem",color:"var(--text-main)",lineHeight:"1.5"},children:[t.jsx("strong",{style:{fontWeight:"700"},children:m.sender_name||m.title||"Someone"})," ",m.message||m.content]}),t.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-light)",marginTop:"4px",display:"inline-block"},children:new Date(m.created_at).toLocaleString()})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[f&&t.jsxs(T,{to:f,onClick:()=>x(m.id),className:"btn btn-secondary btn-sm",style:{padding:"6px 12px"},children:[t.jsx(Qt,{size:14}),t.jsx("span",{style:{fontSize:"0.8rem"},children:"View"})]}),b&&t.jsx("button",{onClick:()=>x(m.id),className:"btn btn-outline btn-sm",title:"Mark as read",style:{padding:"6px 10px"},children:t.jsx(mr,{size:14})}),t.jsx("button",{onClick:()=>y(m.id),className:"btn btn-secondary btn-sm",title:"Delete notification",style:{padding:"6px 10px",color:"var(--text-light)"},children:t.jsx(nn,{size:14})})]})]},m.id)})})]})},Tg=()=>{var b;const{showToast:e}=ie(),[r,n]=g.useState(7),[o,i]=g.useState(null),[s,a]=g.useState(!0),l=async()=>{a(!0);try{const f=await A.getAnalytics(r);f.success&&f.data&&i(f.data)}catch(f){console.error(f),e("Could not load analytics metrics","error")}finally{a(!1)}};g.useEffect(()=>{l()},[r]);const d=(o==null?void 0:o.stats)||{},u=1250,x=d.total_views||4850,y=d.total_likes||620,v=d.followers_count||340,m=((b=o==null?void 0:o.top_posts)==null?void 0:b.length)>0?o.top_posts:[{id:1,title:"Modern Brand Identity & Visual System for Nova Studio",category_name:"Graphic Design",views_count:1240,likes_count:142,cover_image:"/assets/brand_mockup.jpg"},{id:2,title:"Hospital Management SaaS System with Patient Portal",category_name:"Web Development",views_count:2150,likes_count:218,cover_image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80"},{id:3,title:"Video Editing Showreel 2026 - Commercial & VFX",category_name:"Video Editing",views_count:1890,likes_count:175,cover_image:"/assets/vedio/vedio editing.mp4"}];return t.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",paddingBottom:"40px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"16px",marginBottom:"26px"},children:[t.jsxs("div",{children:[t.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:"800",color:"#0c1538",margin:"0 0 4px",letterSpacing:"-0.02em"},children:"Analytics"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.9rem"},children:"Monitor your audience reach, engagement impressions, and top performing works."})]}),t.jsx("div",{style:{display:"flex",background:"#ffffff",padding:"4px",borderRadius:"12px",border:"1px solid #edf2f7",boxShadow:"0 2px 8px rgba(0,0,0,0.03)"},children:[{value:7,label:"7 Days"},{value:30,label:"30 Days"},{value:365,label:"1 Year"}].map(f=>t.jsx("button",{onClick:()=>n(f.value),style:{padding:"8px 18px",borderRadius:"8px",border:"none",background:r===f.value?"#6e25e8":"transparent",color:r===f.value?"#ffffff":"#64748b",fontWeight:700,fontSize:"0.85rem",cursor:"pointer",transition:"all 0.2s ease"},children:f.label},f.value))})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px",marginBottom:"28px"},children:[t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Profile Views"}),t.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(110, 37, 232, 0.08)",color:"#6e25e8",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(dt,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:u.toLocaleString()}),t.jsx("span",{style:{fontSize:"0.78rem",color:"#10b981",fontWeight:700},children:"▲ 14.8% vs last week"})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Post Views"}),t.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(2, 132, 199, 0.08)",color:"#0284c7",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(xe,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:x.toLocaleString()}),t.jsx("span",{style:{fontSize:"0.78rem",color:"#10b981",fontWeight:700},children:"▲ 22.4% vs last week"})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Total Likes"}),t.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(239, 68, 68, 0.08)",color:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(He,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:y.toLocaleString()}),t.jsx("span",{style:{fontSize:"0.78rem",color:"#10b981",fontWeight:700},children:"▲ 18.2% vs last week"})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Followers"}),t.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(139, 92, 246, 0.08)",color:"#8b5cf6",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(bl,{size:18})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:v.toLocaleString()}),t.jsx("span",{style:{fontSize:"0.78rem",color:"#10b981",fontWeight:700},children:"▲ 11.5% vs last week"})]})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",padding:"28px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)",marginBottom:"28px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,color:"#0c1538",margin:"0 0 4px"},children:"Views Over Time"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.85rem"},children:"Daily visitor views distribution for your portfolio showcases"})]}),t.jsx("span",{style:{background:"rgba(110, 37, 232, 0.08)",color:"#6e25e8",fontSize:"0.75rem",fontWeight:800,padding:"4px 12px",borderRadius:"9999px"},children:"Smooth Performance Trend"})]}),t.jsx("div",{style:{position:"relative",width:"100%",height:"240px",marginTop:"10px"},children:t.jsxs("svg",{viewBox:"0 0 700 200",style:{width:"100%",height:"100%",overflow:"visible"},children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"viewsChartGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:"#6e25e8",stopOpacity:"0.4"}),t.jsx("stop",{offset:"100%",stopColor:"#6e25e8",stopOpacity:"0.0"})]})}),t.jsx("line",{x1:"0",y1:"40",x2:"700",y2:"40",stroke:"#f1f5f9",strokeWidth:"1",strokeDasharray:"4 4"}),t.jsx("line",{x1:"0",y1:"90",x2:"700",y2:"90",stroke:"#f1f5f9",strokeWidth:"1",strokeDasharray:"4 4"}),t.jsx("line",{x1:"0",y1:"140",x2:"700",y2:"140",stroke:"#f1f5f9",strokeWidth:"1",strokeDasharray:"4 4"}),t.jsx("line",{x1:"0",y1:"180",x2:"700",y2:"180",stroke:"#e2e8f0",strokeWidth:"1"}),t.jsx("path",{d:"M 20 160 Q 120 120, 220 140 T 420 80 T 560 60 T 680 40 L 680 180 L 20 180 Z",fill:"url(#viewsChartGradient)"}),t.jsx("path",{d:"M 20 160 Q 120 120, 220 140 T 420 80 T 560 60 T 680 40",fill:"none",stroke:"#6e25e8",strokeWidth:"3.5",strokeLinecap:"round"}),[{x:20,y:160,label:"Mon"},{x:130,y:125,label:"Tue"},{x:240,y:140,label:"Wed"},{x:350,y:105,label:"Thu"},{x:460,y:75,label:"Fri"},{x:570,y:55,label:"Sat"},{x:680,y:40,label:"Sun"}].map((f,j)=>t.jsxs("g",{children:[t.jsx("circle",{cx:f.x,cy:f.y,r:"5",fill:"#ffffff",stroke:"#6e25e8",strokeWidth:"3"}),t.jsx("text",{x:f.x,y:"198",textAnchor:"middle",fill:"#94a3b8",fontSize:"11",fontWeight:"600",children:f.label})]},j))]})})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",padding:"28px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[t.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,color:"#0c1538",margin:0},children:"Top Posts"}),t.jsx(T,{to:"/my-posts",style:{fontSize:"0.85rem",color:"#6e25e8",fontWeight:700,textDecoration:"none"},children:"View all posts →"})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:m.map((f,j)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 18px",borderRadius:"14px",background:"#f8fafc",border:"1px solid #eef2f6",gap:"16px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",flex:1,minWidth:"240px"},children:[t.jsx("span",{style:{width:"26px",height:"26px",borderRadius:"50%",background:j===0?"#6e25e8":"#e2e8f0",color:j===0?"#ffffff":"#64748b",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"0.78rem"},children:j+1}),t.jsx("img",{src:f.cover_image||"/assets/brand_mockup.jpg",alt:f.title,style:{width:"48px",height:"48px",borderRadius:"10px",objectFit:"cover"}}),t.jsxs("div",{children:[t.jsx("h4",{style:{margin:"0 0 4px",fontSize:"0.92rem",fontWeight:800,color:"#0c1538"},children:f.title}),t.jsx("span",{style:{fontSize:"0.76rem",color:"#64748b",fontWeight:600},children:f.category_name})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[t.jsx("div",{style:{width:"120px"},children:t.jsx("div",{style:{height:"6px",background:"#e2e8f0",borderRadius:"3px",overflow:"hidden"},children:t.jsx("div",{style:{width:`${100-j*25}%`,height:"100%",background:"linear-gradient(90deg, #7c2ae8 0%, #6e25e8 100%)",borderRadius:"3px"}})})}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",fontSize:"0.84rem",color:"#475569",fontWeight:600},children:[t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(xe,{size:15,color:"#0284c7"}),t.jsx("span",{children:f.views_count})]}),t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[t.jsx(He,{size:14,color:"#ef4444",style:{fill:"#ef4444"}}),t.jsx("span",{children:f.likes_count})]})]})]})]},f.id))})]})]})},Ig=()=>{const{user:e,refreshUser:r}=pe(),{showToast:n}=ie(),[o,i]=g.useState("privacy"),[s,a]=g.useState(!0),[l,d]=g.useState(!1),[u,x]=g.useState({show_email:!0,show_phone:!1,show_whatsapp:!0,show_location:!0}),[y,v]=g.useState({full_name:"",username:"",email:"",phone:"",location:"",bio:"",professional_title:"",profile_photo:""}),[m,b]=g.useState(!1),[f,j]=g.useState({current_password:"",new_password:"",confirm_password:""}),c=async z=>{var _,N;const P=(_=z.target.files)==null?void 0:_[0];if(P){b(!0);try{const W=await A.uploadFile(P,"avatars");if(W.success&&((N=W.data)!=null&&N.file_url)){const M=W.data.file_url;v(S=>({...S,profile_photo:M})),await A.updateProfile({profile_photo:M}),await r(),n("Profile photo updated successfully!","success")}else n(W.message||"Failed to upload photo","error")}catch(W){n(W.message||"Error uploading photo","error")}finally{b(!1)}}};g.useEffect(()=>{(async()=>{try{const P=await A.getSettings();if(P.success&&P.data){const _=P.data.settings||P.data.user||{};v({full_name:_.full_name||(e==null?void 0:e.full_name)||"",username:_.username||(e==null?void 0:e.username)||"",email:_.email||(e==null?void 0:e.email)||"",phone:_.phone||(e==null?void 0:e.phone)||"",location:_.location||(e==null?void 0:e.location)||"",bio:_.bio||(e==null?void 0:e.bio)||"",professional_title:_.professional_title||(e==null?void 0:e.professional_title)||"",profile_photo:_.profile_photo||(e==null?void 0:e.profile_photo)||""}),_.privacy&&x({show_email:!!_.privacy.show_email,show_phone:!!_.privacy.show_phone,show_whatsapp:!!_.privacy.show_whatsapp,show_location:!!_.privacy.show_location})}}catch(P){console.error(P)}finally{a(!1)}})()},[e]);const p=z=>{x(P=>({...P,[z]:!P[z]}))},h=async()=>{d(!0);try{const z=await A.updateSettings({action:"privacy",...u});z.success?(n("Privacy settings saved successfully!","success"),r()):n(z.message||"Failed to save settings","error")}catch{n("Error saving settings","error")}finally{d(!1)}},k=async z=>{z.preventDefault(),d(!0);try{const P=await A.updateProfile(y);P.success?(n("Profile information updated successfully!","success"),r()):n(P.message||"Failed to update profile","error")}catch{n("Error updating profile info","error")}finally{d(!1)}},C=async z=>{if(z.preventDefault(),f.new_password!==f.confirm_password){n("Passwords do not match","error");return}d(!0);try{const P=await A.updateSettings({action:"password",...f});P.success?(n("Password changed successfully!","success"),j({current_password:"",new_password:"",confirm_password:""})):n(P.message||"Failed to change password","error")}catch{n("Error changing password","error")}finally{d(!1)}},w=[{id:"profile",label:"Profile",icon:br},{id:"account",label:"Account",icon:hl},{id:"security",label:"Security",icon:yr},{id:"privacy",label:"Privacy",icon:xe},{id:"notifications",label:"Notifications",icon:gr},{id:"social",label:"Social Links",icon:Zn},{id:"deactivate",label:"Deactivate Account",icon:nn,danger:!0}];return t.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",paddingBottom:"40px"},children:[t.jsxs("div",{style:{marginBottom:"24px"},children:[t.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:"800",color:"#0c1538",margin:"0 0 4px",letterSpacing:"-0.02em"},children:"Settings"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.9rem"},children:"Manage your account credentials, security preferences, and public visibility."})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"260px 1fr",gap:"24px",alignItems:"start"},children:[t.jsx("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"16px 12px",border:"1px solid #edf2f7",boxShadow:"0 4px 18px rgba(0,0,0,0.03)",display:"flex",flexDirection:"column",gap:"4px"},children:w.map(z=>{const P=z.icon,_=o===z.id;return t.jsxs("button",{onClick:()=>i(z.id),style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",borderRadius:"12px",border:"none",background:_?"rgba(110, 37, 232, 0.08)":"transparent",color:_?"#6e25e8":z.danger?"#ef4444":"#64748b",fontWeight:_?800:600,fontSize:"0.9rem",cursor:"pointer",textAlign:"left",transition:"all 0.2s ease",borderLeft:_?"3px solid #6e25e8":"3px solid transparent"},children:[t.jsx(P,{size:18,strokeWidth:_?2.4:2}),t.jsx("span",{children:z.label})]},z.id)})}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",padding:"32px",border:"1px solid #edf2f7",boxShadow:"0 4px 25px rgba(0,0,0,0.03)"},children:[o==="privacy"&&t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"28px",paddingBottom:"18px",borderBottom:"1px solid #f1f5f9"},children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:800,color:"#0c1538",margin:"0 0 6px"},children:"Privacy Settings"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.88rem"},children:"Control what contact information and details are visible to other users on your profile."})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"22px",marginBottom:"32px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",borderBottom:"1px solid #f8fafc"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{margin:"0 0 4px",fontSize:"0.95rem",fontWeight:700,color:"#0c1538"},children:"Show email address"}),t.jsx("p",{style:{margin:0,fontSize:"0.82rem",color:"#64748b"},children:"Allow verified visitors and potential clients to see your email address."})]}),t.jsx("div",{onClick:()=>p("show_email"),style:{width:"48px",height:"26px",borderRadius:"13px",background:u.show_email?"#6e25e8":"#e2e8f0",cursor:"pointer",position:"relative",transition:"background 0.25s ease"},children:t.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#ffffff",position:"absolute",top:"3px",left:u.show_email?"25px":"3px",transition:"left 0.25s ease",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",borderBottom:"1px solid #f8fafc"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{margin:"0 0 4px",fontSize:"0.95rem",fontWeight:700,color:"#0c1538"},children:"Show phone number"}),t.jsx("p",{style:{margin:0,fontSize:"0.82rem",color:"#64748b"},children:"Display your direct phone number for phone consultations."})]}),t.jsx("div",{onClick:()=>p("show_phone"),style:{width:"48px",height:"26px",borderRadius:"13px",background:u.show_phone?"#6e25e8":"#e2e8f0",cursor:"pointer",position:"relative",transition:"background 0.25s ease"},children:t.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#ffffff",position:"absolute",top:"3px",left:u.show_phone?"25px":"3px",transition:"left 0.25s ease",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",borderBottom:"1px solid #f8fafc"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{margin:"0 0 4px",fontSize:"0.95rem",fontWeight:700,color:"#0c1538"},children:"Show WhatsApp"}),t.jsx("p",{style:{margin:0,fontSize:"0.82rem",color:"#64748b"},children:"Add a direct WhatsApp message action button on your public portfolio page."})]}),t.jsx("div",{onClick:()=>p("show_whatsapp"),style:{width:"48px",height:"26px",borderRadius:"13px",background:u.show_whatsapp?"#6e25e8":"#e2e8f0",cursor:"pointer",position:"relative",transition:"background 0.25s ease"},children:t.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#ffffff",position:"absolute",top:"3px",left:u.show_whatsapp?"25px":"3px",transition:"left 0.25s ease",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{margin:"0 0 4px",fontSize:"0.95rem",fontWeight:700,color:"#0c1538"},children:"Show location"}),t.jsx("p",{style:{margin:0,fontSize:"0.82rem",color:"#64748b"},children:"Display your city and country (e.g., Mogadishu, Somalia) to prospective local clients."})]}),t.jsx("div",{onClick:()=>p("show_location"),style:{width:"48px",height:"26px",borderRadius:"13px",background:u.show_location?"#6e25e8":"#e2e8f0",cursor:"pointer",position:"relative",transition:"background 0.25s ease"},children:t.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"#ffffff",position:"absolute",top:"3px",left:u.show_location?"25px":"3px",transition:"left 0.25s ease",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}})})]})]}),t.jsx("button",{type:"button",onClick:h,disabled:l,className:"btn btn-primary",style:{padding:"12px 32px",fontWeight:800,background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)",boxShadow:"0 6px 18px rgba(110, 37, 232, 0.35)",borderRadius:"12px"},children:l?"Saving Changes...":"Save Changes"})]}),o==="profile"&&t.jsxs("form",{onSubmit:k,children:[t.jsxs("div",{style:{marginBottom:"24px",paddingBottom:"16px",borderBottom:"1px solid #f1f5f9"},children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:800,color:"#0c1538",margin:"0 0 6px"},children:"Public Profile"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.88rem"},children:"Update your display name, headline title, location, and professional biography."})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px",padding:"18px 20px",background:"#f8fafc",borderRadius:"16px",border:"1px solid #e2e8f0",marginBottom:"10px"},children:[t.jsxs("div",{style:{position:"relative",width:"80px",height:"80px",flexShrink:0},children:[t.jsx("img",{src:y.profile_photo||(e==null?void 0:e.profile_photo)||"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",alt:"Profile Avatar",style:{width:"80px",height:"80px",borderRadius:"50%",objectFit:"cover",border:"3px solid #7c3aed",boxShadow:"0 4px 14px rgba(124, 58, 237, 0.25)"}}),t.jsx("label",{htmlFor:"avatar-upload-input",title:"Change profile picture",style:{position:"absolute",bottom:"0",right:"0",width:"28px",height:"28px",borderRadius:"50%",background:"#7c3aed",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:m?"wait":"pointer",boxShadow:"0 2px 6px rgba(0,0,0,0.3)",transition:"transform 0.2s"},children:t.jsx(Nt,{size:15})}),t.jsx("input",{id:"avatar-upload-input",type:"file",accept:"image/*",onChange:c,disabled:m,style:{display:"none"}})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("h4",{style:{margin:"0 0 4px",fontSize:"0.96rem",fontWeight:800,color:"#0c1538"},children:"Profile Picture / Sawirka Profile-ka"}),t.jsx("p",{style:{margin:"0 0 10px",fontSize:"0.82rem",color:"#64748b"},children:"Upload a high resolution JPG, PNG, or WEBP portrait (max 5MB)."}),t.jsxs("label",{htmlFor:"avatar-upload-input",className:"btn btn-secondary btn-sm",style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"6px 14px",borderRadius:"8px",fontWeight:700,fontSize:"0.82rem",cursor:m?"wait":"pointer"},children:[t.jsx(Yn,{size:14}),t.jsx("span",{children:m?"Uploading Image...":"Choose New Photo"})]})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px",marginBottom:"26px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,color:"#0c1538",marginBottom:"6px"},children:"Full Name"}),t.jsx("input",{type:"text",value:y.full_name,onChange:z=>v({...y,full_name:z.target.value}),style:{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"1px solid #e2e8f0",outline:"none"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,color:"#0c1538",marginBottom:"6px"},children:"Professional Title / Headline"}),t.jsx("input",{type:"text",placeholder:"e.g. Senior Brand & Graphic Designer",value:y.professional_title,onChange:z=>v({...y,professional_title:z.target.value}),style:{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"1px solid #e2e8f0",outline:"none"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,color:"#0c1538",marginBottom:"6px"},children:"Location"}),t.jsx("input",{type:"text",placeholder:"e.g. Mogadishu, Somalia",value:y.location,onChange:z=>v({...y,location:z.target.value}),style:{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"1px solid #e2e8f0",outline:"none"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,color:"#0c1538",marginBottom:"6px"},children:"Bio"}),t.jsx("textarea",{rows:4,value:y.bio,onChange:z=>v({...y,bio:z.target.value}),style:{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"1px solid #e2e8f0",outline:"none",lineHeight:1.6}})]})]}),t.jsx("button",{type:"submit",disabled:l,className:"btn btn-primary",style:{padding:"12px 32px",fontWeight:800,background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)"},children:l?"Saving...":"Save Profile"})]}),o==="security"&&t.jsxs("form",{onSubmit:C,children:[t.jsxs("div",{style:{marginBottom:"24px",paddingBottom:"16px",borderBottom:"1px solid #f1f5f9"},children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:800,color:"#0c1538",margin:"0 0 6px"},children:"Security & Password"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.88rem"},children:"Update your secret password to keep your PartfolioHub account safe."})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px",marginBottom:"26px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,color:"#0c1538",marginBottom:"6px"},children:"Current Password"}),t.jsx("input",{type:"password",value:f.current_password,onChange:z=>j({...f,current_password:z.target.value}),required:!0,style:{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"1px solid #e2e8f0",outline:"none"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,color:"#0c1538",marginBottom:"6px"},children:"New Password"}),t.jsx("input",{type:"password",value:f.new_password,onChange:z=>j({...f,new_password:z.target.value}),required:!0,style:{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"1px solid #e2e8f0",outline:"none"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.85rem",fontWeight:700,color:"#0c1538",marginBottom:"6px"},children:"Confirm New Password"}),t.jsx("input",{type:"password",value:f.confirm_password,onChange:z=>j({...f,confirm_password:z.target.value}),required:!0,style:{width:"100%",padding:"12px 14px",borderRadius:"10px",border:"1px solid #e2e8f0",outline:"none"}})]})]}),t.jsx("button",{type:"submit",disabled:l,className:"btn btn-primary",style:{padding:"12px 32px",fontWeight:800,background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)"},children:l?"Updating...":"Update Password"})]}),o!=="privacy"&&o!=="profile"&&o!=="security"&&t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"24px",paddingBottom:"16px",borderBottom:"1px solid #f1f5f9"},children:[t.jsxs("h2",{style:{fontSize:"1.3rem",fontWeight:800,color:"#0c1538",margin:"0 0 6px",textTransform:"capitalize"},children:[o," Settings"]}),t.jsxs("p",{style:{margin:0,color:"#64748b",fontSize:"0.88rem"},children:["Manage your ",o," preferences and automated configurations."]})]}),t.jsxs("p",{style:{color:"#64748b",fontSize:"0.92rem"},children:["All changes to your ",o," settings are auto-saved securely."]})]})]})]})]})},Rg=()=>{const{user:e,refreshUser:r}=pe(),{showToast:n}=ie(),o=oe(),[i,s]=g.useState(1),[a,l]=g.useState(!1),[d,u]=g.useState(!1),[x,y]=g.useState({full_name:(e==null?void 0:e.full_name)||"",professional_title:(e==null?void 0:e.professional_title)||"Visual Designer & Creator",bio:(e==null?void 0:e.bio)||"Building modern digital products and creative brand systems.",location:(e==null?void 0:e.location)||"Mogadishu, Somalia",profile_photo:(e==null?void 0:e.profile_photo)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",cover_photo:(e==null?void 0:e.cover_photo)||"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",experience:"3+ Years",education:"Bachelor of Creative Media",skills:["Figma","React.js","UI/UX Design","Branding"],website:"https://partfoliohub.com",whatsapp:"+252615000000",facebook:(e==null?void 0:e.facebook)||"https://www.facebook.com/share/19KxQX3pxa/",instagram:(e==null?void 0:e.instagram)||"https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i6kdsyi",tiktok:(e==null?void 0:e.tiktok)||"https://www.tiktok.com/@abdala.creator",portfolio_intro:"Crafting thoughtful digital interfaces and impactful design solutions."}),[v,m]=g.useState(""),b=h=>{const{name:k,value:C}=h.target;y(w=>({...w,[k]:C}))},f=async(h,k,C)=>{var z,P;const w=(z=h.target.files)==null?void 0:z[0];if(w){u(!0);try{const _=await A.uploadFile(w,k);_.success&&((P=_.data)!=null&&P.url)&&(y(N=>({...N,[C]:_.data.full_url||_.data.url})),n("Image uploaded successfully!","success"))}catch(_){n(_.message||"Image upload failed","error")}finally{u(!1)}}},j=()=>{v.trim()&&!x.skills.includes(v.trim())&&(y(h=>({...h,skills:[...h.skills,v.trim()]})),m(""))},c=h=>{y(k=>({...k,skills:k.skills.filter(C=>C!==h)}))},p=async()=>{l(!0);try{(await A.setupProfile(x)).success&&(n("Profile setup complete! Welcome to your creator dashboard.","success"),await r(),o("/dashboard"))}catch(h){n(h.message||"Failed to save profile setup","error")}finally{l(!1)}};return t.jsx("div",{style:{minHeight:"100vh",background:"#f8fafc",padding:"40px 20px"},children:t.jsxs("div",{style:{maxWidth:"820px",margin:"0 auto"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[t.jsx("h1",{style:{fontSize:"2rem",fontWeight:"800",color:"var(--text-main)",marginBottom:"8px"},children:"Complete Your Profile"}),t.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem"},children:"Set up your professional credentials to stand out to clients and fellow creators."}),t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",marginTop:"24px"},children:[1,2,3,4].map(h=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"50%",background:i>=h?"var(--primary)":"#e2e8f0",color:i>=h?"#ffffff":"#64748b",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"700",fontSize:"0.85rem"},children:i>h?t.jsx(mr,{size:16}):h}),t.jsxs("span",{style:{fontSize:"0.82rem",fontWeight:"600",color:i===h?"var(--primary)":"#94a3b8"},children:[h===1&&"Basic",h===2&&"Professional",h===3&&"Portfolio",h===4&&"Preview"]})]},h))})]}),t.jsxs("div",{className:"card",style:{padding:"36px"},children:[i===1&&t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:"700",marginBottom:"20px"},children:"Step 1: Basic Information"}),t.jsxs("div",{style:{position:"relative",height:"180px",borderRadius:"14px",overflow:"hidden",background:"#0f172a",marginBottom:"45px"},children:[t.jsx("img",{src:x.cover_photo,alt:"Cover",style:{width:"100%",height:"100%",objectFit:"cover"}}),t.jsxs("label",{style:{position:"absolute",top:"12px",right:"12px",background:"rgba(0,0,0,0.6)",color:"#fff",padding:"6px 12px",borderRadius:"var(--radius-sm)",fontSize:"0.8rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Nt,{size:14})," Change Cover",t.jsx("input",{type:"file",accept:"image/*",onChange:h=>f(h,"covers","cover_photo"),style:{display:"none"}})]}),t.jsxs("div",{style:{position:"absolute",bottom:"-25px",left:"25px",width:"90px",height:"90px"},children:[t.jsx("img",{src:x.profile_photo,alt:"Avatar",style:{width:"90px",height:"90px",borderRadius:"50%",objectFit:"cover",border:"3px solid #fff",boxShadow:"var(--shadow-md)"}}),t.jsxs("label",{style:{position:"absolute",bottom:"0",right:"0",background:"var(--primary)",color:"#fff",padding:"6px",borderRadius:"50%",cursor:"pointer",boxShadow:"var(--shadow-sm)"},children:[t.jsx(Nt,{size:14}),t.jsx("input",{type:"file",accept:"image/*",onChange:h=>f(h,"avatars","profile_photo"),style:{display:"none"}})]})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Full Name"}),t.jsx("input",{type:"text",name:"full_name",value:x.full_name,onChange:b,className:"form-input",required:!0})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Professional Title"}),t.jsx("input",{type:"text",name:"professional_title",placeholder:"e.g. Senior Brand & Graphic Designer",value:x.professional_title,onChange:b,className:"form-input",required:!0})]})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Location"}),t.jsx("input",{type:"text",name:"location",placeholder:"e.g. Mogadishu, Somalia",value:x.location,onChange:b,className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Short Bio"}),t.jsx("textarea",{rows:3,name:"bio",placeholder:"Tell clients and collaborators about your passion...",value:x.bio,onChange:b,className:"form-textarea"})]}),t.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"24px"},children:t.jsxs("button",{onClick:()=>s(2),className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"6px"},children:["Next Step ",t.jsx(ve,{size:16})]})})]}),i===2&&t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:"700",marginBottom:"20px"},children:"Step 2: Professional Skills & Socials"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Skills & Technologies (Tag Chips)"}),t.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"10px"},children:[t.jsx("input",{type:"text",placeholder:"e.g. Figma, React, After Effects",value:v,onChange:h=>m(h.target.value),onKeyDown:h=>{h.key==="Enter"&&(h.preventDefault(),j())},className:"form-input"}),t.jsx("button",{type:"button",onClick:j,className:"btn btn-secondary",children:"Add"})]}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:x.skills.map(h=>t.jsxs("span",{className:"badge badge-primary",style:{padding:"6px 12px",fontSize:"0.82rem",gap:"8px"},children:[h,t.jsx("button",{onClick:()=>c(h),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",fontWeight:"bold"},children:"×"})]},h))})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Years of Experience"}),t.jsx("input",{type:"text",name:"experience",placeholder:"e.g. 5+ Years",value:x.experience,onChange:b,className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Education / Degree"}),t.jsx("input",{type:"text",name:"education",placeholder:"e.g. B.Sc. Computer Science",value:x.education,onChange:b,className:"form-input"})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Website URL"}),t.jsx("input",{type:"url",name:"website",placeholder:"https://...",value:x.website,onChange:b,className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"WhatsApp Contact"}),t.jsx("input",{type:"text",name:"whatsapp",placeholder:"+252...",value:x.whatsapp,onChange:b,className:"form-input"})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px",marginTop:"12px"},children:[t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Facebook Profile Link"}),t.jsx("input",{type:"text",name:"facebook",placeholder:"https://www.facebook.com/share/...",value:x.facebook,onChange:b,className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Instagram Profile Link"}),t.jsx("input",{type:"text",name:"instagram",placeholder:"https://www.instagram.com/...",value:x.instagram,onChange:b,className:"form-input"})]}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"TikTok Profile Link"}),t.jsx("input",{type:"text",name:"tiktok",placeholder:"https://www.tiktok.com/@...",value:x.tiktok,onChange:b,className:"form-input"})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"24px"},children:[t.jsxs("button",{onClick:()=>s(1),className:"btn btn-secondary",style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(lt,{size:16})," Back"]}),t.jsxs("button",{onClick:()=>s(3),className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"6px"},children:["Next Step ",t.jsx(ve,{size:16})]})]})]}),i===3&&t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:"700",marginBottom:"20px"},children:"Step 3: Portfolio Introduction"}),t.jsxs("div",{className:"form-group",children:[t.jsx("label",{className:"form-label",children:"Portfolio Introduction Statement"}),t.jsx("textarea",{rows:4,name:"portfolio_intro",placeholder:"Summarize your creative style and client offerings...",value:x.portfolio_intro,onChange:b,className:"form-textarea"})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"24px"},children:[t.jsxs("button",{onClick:()=>s(2),className:"btn btn-secondary",style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(lt,{size:16})," Back"]}),t.jsxs("button",{onClick:()=>s(4),className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"6px"},children:["Preview Profile ",t.jsx(xe,{size:16})]})]})]}),i===4&&t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.3rem",fontWeight:"700",marginBottom:"20px"},children:"Step 4: Live Profile Preview"}),t.jsxs("div",{style:{border:"1px solid var(--border-color)",borderRadius:"16px",overflow:"hidden",marginBottom:"28px",background:"#fff"},children:[t.jsx("div",{style:{height:"140px",background:"#0f172a"},children:t.jsx("img",{src:x.cover_photo,alt:"Cover",style:{width:"100%",height:"100%",objectFit:"cover"}})}),t.jsxs("div",{style:{padding:"20px",position:"relative"},children:[t.jsx("img",{src:x.profile_photo,alt:"Avatar",style:{width:"70px",height:"70px",borderRadius:"50%",objectFit:"cover",border:"3px solid #fff",marginTop:"-45px",marginBottom:"10px"}}),t.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"800"},children:x.full_name||"Your Name"}),t.jsx("p",{style:{color:"var(--primary)",fontWeight:"600",fontSize:"0.9rem"},children:x.professional_title}),t.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.85rem",margin:"8px 0"},children:x.bio}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"12px"},children:x.skills.map(h=>t.jsx("span",{className:"badge badge-neutral",children:h},h))})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsxs("button",{onClick:()=>s(3),className:"btn btn-secondary",style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(lt,{size:16})," Back"]}),t.jsxs("button",{onClick:p,disabled:a,className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"6px",padding:"12px 28px"},children:[t.jsx(mr,{size:18}),t.jsx("span",{children:a?"Publishing Profile...":"Complete & Launch Portfolio"})]})]})]})]})]})})},Eg=()=>{const{login:e,logout:r,isAuthenticated:n,isAdmin:o,user:i}=pe(),{showToast:s}=ie(),a=oe(),[l,d]=g.useState({login:"",password:"",remember:!0}),[u,x]=g.useState(!1),[y,v]=g.useState(!1),[m,b]=g.useState("");g.useEffect(()=>{n&&o&&a("/admin",{replace:!0})},[n,o,a]);const f=c=>{const{name:p,value:h,type:k,checked:C}=c.target;d(w=>({...w,[p]:k==="checkbox"?C:h})),b("")},j=async c=>{var p;if(c.preventDefault(),!l.login.trim()||!l.password){b("Fadlan geli email-ka/username-ka iyo password-ka maamulka.");return}v(!0),b("");try{const h=await e(l);if(h.success){const k=(p=h.data)==null?void 0:p.user;if((k==null?void 0:k.role)!=="admin"){await r(),b("Ogolaanshaha waa la diiday: Account-kani ma laha awoodda maamulaha (Admin Privileges). Fadlan ku gal account-ka saxda ah ee Admin-ka."),s("Access Denied: Admin privileges required.","error");return}s(`Ku soo dhawoow Admin Portal-ka, ${k.full_name||"Maamule"}!`,"success"),a("/admin",{replace:!0})}else b(h.message||"Xogta login-ka ma saxna. Fadlan hubi email-ka iyo password-ka.")}catch(h){b(h.message||"Khalad ayaa dhacay marka la galayay. Fadlan dib u tijaabi.")}finally{v(!1)}};return t.jsxs("div",{style:{minHeight:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center",background:"radial-gradient(circle at 50% 15%, rgba(124, 58, 237, 0.28) 0%, transparent 60%), radial-gradient(circle at 85% 85%, rgba(239, 68, 68, 0.18) 0%, transparent 55%), linear-gradient(135deg, #060914 0%, #0d122b 50%, #070a17 100%)",color:"#ffffff",padding:"30px 20px",position:"relative",overflow:"hidden"},children:[t.jsx("div",{style:{position:"absolute",top:"-120px",left:"50%",transform:"translateX(-50%)",width:"650px",height:"650px",background:"radial-gradient(circle, rgba(110, 37, 232, 0.22) 0%, transparent 70%)",borderRadius:"50%",filter:"blur(60px)",pointerEvents:"none"}}),t.jsxs("div",{style:{width:"100%",maxWidth:"460px",background:"rgba(15, 23, 42, 0.85)",backdropFilter:"blur(20px)",border:"1.5px solid rgba(167, 139, 250, 0.3)",borderRadius:"24px",padding:"42px 36px",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.65), 0 0 50px rgba(110, 37, 232, 0.2)",position:"relative",zIndex:10},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:"26px"},children:[t.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"18px",background:"linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #4f46e5 100%)",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"#ffffff",boxShadow:"0 8px 30px rgba(124, 58, 237, 0.55), 0 0 20px rgba(168, 85, 247, 0.35)",marginBottom:"16px",border:"2px solid rgba(255, 255, 255, 0.25)"},children:t.jsx(yr,{size:32,strokeWidth:2.4})}),t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(239, 68, 68, 0.15)",border:"1px solid rgba(239, 68, 68, 0.35)",padding:"4px 12px",borderRadius:"9999px",fontSize:"0.74rem",fontWeight:800,color:"#f87171",letterSpacing:"0.04em",marginBottom:"10px"},children:[t.jsx(hl,{size:12}),t.jsx("span",{children:"RESTRICTED ACCESS • ADMIN ONLY"})]}),t.jsxs("h1",{style:{fontSize:"1.75rem",fontWeight:900,color:"#ffffff",margin:"0 0 6px",letterSpacing:"-0.02em"},children:["PartfolioHub ",t.jsx("span",{style:{background:"linear-gradient(135deg, #c084fc 0%, #a855f7 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Admin Portal"})]}),t.jsx("p",{style:{color:"#94a3b8",fontSize:"0.88rem",margin:0,lineHeight:1.5},children:"Geli xogta maamulka si aad u maamusho users-ka, reports-ka iyo nidaamka guud ee goobta."})]}),m&&t.jsxs("div",{style:{background:"rgba(239, 68, 68, 0.12)",border:"1px solid rgba(239, 68, 68, 0.35)",color:"#fca5a5",padding:"12px 14px",borderRadius:"12px",fontSize:"0.84rem",marginBottom:"20px",display:"flex",alignItems:"flex-start",gap:"10px",lineHeight:1.45},children:[t.jsx(vl,{size:18,style:{flexShrink:0,color:"#ef4444",marginTop:"2px"}}),t.jsx("span",{children:m})]}),t.jsxs("form",{onSubmit:j,style:{display:"flex",flexDirection:"column",gap:"18px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#cbd5e1",marginBottom:"8px",letterSpacing:"0.02em"},children:"Email ama Username-ka Admin-ka:"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(ha,{size:18,style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),t.jsx("input",{type:"text",name:"login",placeholder:"admin ama admin@partfoliohub.com",value:l.login,onChange:f,autoFocus:!0,required:!0,style:{width:"100%",padding:"13px 16px 13px 44px",borderRadius:"12px",border:"1.5px solid rgba(255, 255, 255, 0.14)",background:"rgba(11, 15, 30, 0.8)",color:"#ffffff",fontSize:"0.94rem",outline:"none",transition:"all 0.2s ease",boxShadow:"inset 0 2px 4px rgba(0,0,0,0.3)"},onFocus:c=>{c.target.style.borderColor="#a855f7",c.target.style.boxShadow="0 0 15px rgba(168, 85, 247, 0.35)"},onBlur:c=>{c.target.style.borderColor="rgba(255, 255, 255, 0.14)",c.target.style.boxShadow="inset 0 2px 4px rgba(0,0,0,0.3)"}})]})]}),t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[t.jsx("label",{style:{fontSize:"0.82rem",fontWeight:700,color:"#cbd5e1",letterSpacing:"0.02em"},children:"Password-ka Admin-ka:"}),t.jsxs("span",{style:{fontSize:"0.74rem",color:"#94a3b8"},children:["Default: ",t.jsx("code",{style:{color:"#c084fc",background:"rgba(255,255,255,0.08)",padding:"2px 5px",borderRadius:"4px"},children:"Admin@123456"})]})]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(xa,{size:18,style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),t.jsx("input",{type:u?"text":"password",name:"password",placeholder:"Geli Password-kaaga...",value:l.password,onChange:f,required:!0,style:{width:"100%",padding:"13px 46px 13px 44px",borderRadius:"12px",border:"1.5px solid rgba(255, 255, 255, 0.14)",background:"rgba(11, 15, 30, 0.8)",color:"#ffffff",fontSize:"0.94rem",outline:"none",transition:"all 0.2s ease",boxShadow:"inset 0 2px 4px rgba(0,0,0,0.3)"},onFocus:c=>{c.target.style.borderColor="#a855f7",c.target.style.boxShadow="0 0 15px rgba(168, 85, 247, 0.35)"},onBlur:c=>{c.target.style.borderColor="rgba(255, 255, 255, 0.14)",c.target.style.boxShadow="inset 0 2px 4px rgba(0,0,0,0.3)"}}),t.jsx("button",{type:"button",onClick:()=>x(!u),style:{position:"absolute",right:"14px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"#94a3b8",cursor:"pointer",display:"flex",alignItems:"center",padding:0},title:u?"Hide password":"Show password",children:u?t.jsx(Ri,{size:18}):t.jsx(xe,{size:18})})]})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"0.84rem",color:"#94a3b8"},children:[t.jsx("input",{type:"checkbox",name:"remember",checked:l.remember,onChange:f,style:{accentColor:"#7c3aed",width:"16px",height:"16px",cursor:"pointer"}}),t.jsx("span",{children:"Ha iga saarin (Remember session)"})]}),t.jsxs("span",{style:{fontSize:"0.78rem",color:"#10b981",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx(Zt,{size:14})," 256-bit Encrypted"]})]}),t.jsxs("button",{type:"button",onClick:()=>{d({login:"admin@partfoliohub.com",password:"Admin@123456",remember:!0}),s("Xogta Admin-ka waa la buuxiyey!","info")},style:{padding:"9px 14px",borderRadius:"10px",border:"1px dashed rgba(167, 139, 250, 0.4)",background:"rgba(124, 58, 237, 0.12)",color:"#c084fc",fontSize:"0.82rem",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",transition:"all 0.2s",marginTop:"2px"},children:[t.jsx(xa,{size:15}),t.jsx("span",{children:"Ku buuxi Xogta Admin-ka (admin@partfoliohub.com)"})]}),t.jsx("button",{type:"submit",disabled:y,style:{width:"100%",padding:"14px",borderRadius:"12px",background:"linear-gradient(135deg, #7c3aed 0%, #6e25e8 50%, #4f46e5 100%)",color:"#ffffff",border:"none",fontWeight:800,fontSize:"0.98rem",cursor:y?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px",boxShadow:"0 8px 25px rgba(124, 58, 237, 0.45)",transition:"all 0.25s ease",marginTop:"6px",opacity:y?.75:1},onMouseEnter:c=>{y||(c.currentTarget.style.transform="translateY(-2px)",c.currentTarget.style.boxShadow="0 12px 30px rgba(124, 58, 237, 0.65)")},onMouseLeave:c=>{c.currentTarget.style.transform="translateY(0)",c.currentTarget.style.boxShadow="0 8px 25px rgba(124, 58, 237, 0.45)"},children:y?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"spinner",style:{width:"18px",height:"18px",borderTopColor:"#ffffff",borderColor:"rgba(255,255,255,0.3)"}}),t.jsx("span",{children:"Checking Credentials..."})]}):t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Gal Admin Portal-ka"}),t.jsx(ve,{size:18})]})})]}),t.jsxs("div",{style:{marginTop:"26px",paddingTop:"20px",borderTop:"1px solid rgba(255, 255, 255, 0.1)",display:"flex",flexDirection:"column",gap:"14px",textAlign:"center"},children:[t.jsxs(T,{to:"/",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"8px",color:"#94a3b8",fontSize:"0.86rem",textDecoration:"none",transition:"color 0.2s"},onMouseEnter:c=>c.currentTarget.style.color="#ffffff",onMouseLeave:c=>c.currentTarget.style.color="#94a3b8",children:[t.jsx(lt,{size:15}),t.jsx("span",{children:"Ku Noqo Bogga Weyn (Return to Home)"})]}),t.jsx("p",{style:{margin:0,fontSize:"0.74rem",color:"#64748b",lineHeight:1.45},children:"Xusuusin: Gelitaanka boggan waxaa toos u diiwaangelinaya nidaamka ammaanka ee PartfolioHub."})]})]})]})},Mg=()=>{const{showToast:e}=ie(),[r,n]=g.useState(null),[o,i]=g.useState(!0);g.useEffect(()=>{(async()=>{try{const d=await A.getAdminStats();d.success&&d.data&&n(d.data)}catch(d){console.error(d),e("Failed to load admin stats","error")}finally{i(!1)}})()},[]);const s=(r==null?void 0:r.stats)||{},a=(r==null?void 0:r.recent_users)||[];return r!=null&&r.recent_posts,t.jsxs("div",{style:{paddingBottom:"40px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"26px",flexWrap:"wrap",gap:"14px"},children:[t.jsxs("div",{children:[t.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:800,color:"#0c1538",margin:"0 0 4px",letterSpacing:"-0.02em"},children:"Admin Dashboard"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.9rem"},children:"Platform overview, creator statistics, user governance, and content moderation."})]}),t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:t.jsx("span",{style:{background:"rgba(16, 185, 129, 0.1)",color:"#10b981",fontWeight:800,fontSize:"0.78rem",padding:"5px 12px",borderRadius:"9999px",border:"1px solid rgba(16, 185, 129, 0.25)"},children:"● Live System Operational"})})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px",marginBottom:"32px"},children:[t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Total Users"}),t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(110, 37, 232, 0.08)",color:"#6e25e8",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(dt,{size:19})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:(s.total_users??0).toLocaleString()}),t.jsx("span",{style:{fontSize:"0.76rem",color:"#10b981",fontWeight:700},children:"Live platform users"})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Active Creators"}),t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(2, 132, 199, 0.08)",color:"#0284c7",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(Jh,{size:19})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:(s.active_users??0).toLocaleString()}),t.jsx("span",{style:{fontSize:"0.76rem",color:"#10b981",fontWeight:700},children:"Active creator accounts"})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Total Posts"}),t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(245, 158, 11, 0.08)",color:"#f59e0b",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(Jt,{size:19})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:(s.total_posts??0).toLocaleString()}),t.jsx("span",{style:{fontSize:"0.76rem",color:"#10b981",fontWeight:700},children:"Published showcases"})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",padding:"22px 24px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[t.jsx("span",{style:{fontSize:"0.86rem",color:"#64748b",fontWeight:600},children:"Total Views"}),t.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(16, 185, 129, 0.08)",color:"#10b981",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(xe,{size:19})})]}),t.jsx("div",{style:{fontSize:"1.95rem",fontWeight:900,color:"#0c1538",lineHeight:1.1,marginBottom:"6px"},children:s.total_views!=null?s.total_views>=1e3?`${(s.total_views/1e3).toFixed(1)}K`:s.total_views.toLocaleString():"0"}),t.jsx("span",{style:{fontSize:"0.76rem",color:"#10b981",fontWeight:700},children:"Live content views"})]})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",padding:"28px",border:"1px solid #edf2f7",boxShadow:"0 4px 20px rgba(0,0,0,0.03)"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px"},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:800,color:"#0c1538",margin:"0 0 4px"},children:"Recent Users"}),t.jsx("p",{style:{margin:0,color:"#64748b",fontSize:"0.86rem"},children:"Latest creators registered on PartfolioHub"})]}),t.jsxs(T,{to:"/admin/users",style:{fontSize:"0.86rem",color:"#6e25e8",fontWeight:700,textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsx("span",{children:"Manage All Users"}),t.jsx(ai,{size:15})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left",fontSize:"0.9rem"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{borderBottom:"1.5px solid #edf2f7",color:"#64748b",fontSize:"0.78rem",textTransform:"uppercase",letterSpacing:"0.04em"},children:[t.jsx("th",{style:{padding:"12px 16px"},children:"Creator"}),t.jsx("th",{style:{padding:"12px 16px"},children:"Specialization"}),t.jsx("th",{style:{padding:"12px 16px"},children:"Role"}),t.jsx("th",{style:{padding:"12px 16px"},children:"Status"}),t.jsx("th",{style:{padding:"12px 16px",textAlign:"right"},children:"Action"})]})}),t.jsx("tbody",{children:a.map(l=>t.jsxs("tr",{style:{borderBottom:"1px solid #f8fafc"},children:[t.jsx("td",{style:{padding:"14px 16px"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("img",{src:l.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:l.full_name,style:{width:"38px",height:"38px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:800,color:"#0c1538"},children:l.full_name||l.username}),t.jsxs("div",{style:{fontSize:"0.76rem",color:"#94a3b8"},children:["@",l.username]})]})]})}),t.jsx("td",{style:{padding:"14px 16px",color:"#475569",fontWeight:600},children:l.professional_title||"Visual Creator"}),t.jsx("td",{style:{padding:"14px 16px"},children:t.jsx("span",{style:{background:l.role==="admin"?"rgba(110, 37, 232, 0.1)":"rgba(2, 132, 199, 0.08)",color:l.role==="admin"?"#6e25e8":"#0284c7",fontSize:"0.74rem",fontWeight:800,padding:"3px 9px",borderRadius:"6px",textTransform:"capitalize"},children:l.role})}),t.jsx("td",{style:{padding:"14px 16px"},children:t.jsxs("span",{style:{background:l.status==="active"?"#ecfdf5":"#fef2f2",color:l.status==="active"?"#10b981":"#ef4444",fontSize:"0.74rem",fontWeight:800,padding:"3px 9px",borderRadius:"9999px"},children:["● ",l.status]})}),t.jsx("td",{style:{padding:"14px 16px",textAlign:"right"},children:t.jsx(T,{to:`/profile/${l.username}`,className:"btn btn-secondary btn-sm",style:{padding:"5px 12px",fontSize:"0.78rem"},children:"Profile"})})]},l.id))})]})})]})]})},Lg=()=>{const{showToast:e}=ie(),[r,n]=g.useState([]),[o,i]=g.useState(!0),[s,a]=g.useState(""),[l,d]=g.useState(""),[u,x]=g.useState(""),[y,v]=g.useState(1),[m,b]=g.useState({total_pages:1,total_users:0}),[f,j]=g.useState(null),[c,p]=g.useState(null),[h,k]=g.useState(null),[C,w]=g.useState({full_name:"",username:"",email:"",phone:"",professional_title:"",location:"",bio:"",role:"user",status:"active",password:""}),[z,P]=g.useState(!1),_=S=>{k(S),w({full_name:S.full_name||"",username:S.username||"",email:S.email||"",phone:S.phone||"",professional_title:S.professional_title||"",location:S.location||"",bio:S.bio||"",role:S.role||"user",status:S.status||"active",password:""})},N=async S=>{if(S.preventDefault(),!!h){P(!0);try{const H=await A.adminUserAction(h.id,"edit_user",C);H.success?(e("User profile updated successfully!","success"),k(null),W()):e(H.message||"Failed to update user","error")}catch(H){e(H.message||"Error updating user profile","error")}finally{P(!1)}}},W=async()=>{i(!0);try{const S=await A.getAdminUsers({search:s,role:l,status:u,page:y,limit:15});S.success&&S.data&&(n(S.data.users||[]),b(S.data.pagination||{total_pages:1,total_users:0}))}catch(S){console.error(S),e("Could not fetch user list","error")}finally{i(!1)}};g.useEffect(()=>{W()},[s,l,u,y]);const M=async()=>{if(!(!f||!c))try{c.type==="delete"?(await A.adminUserAction(f.id,"delete")).success&&(e(`User ${f.username} removed`,"success"),W()):c.type==="status"?(await A.adminUserAction(f.id,"status",{status:c.newStatus})).success&&(e(`User status set to ${c.newStatus}`,"success"),W()):c.type==="role"&&(await A.adminUserAction(f.id,"role",{role:c.newRole})).success&&(e(`User role updated to ${c.newRole}`,"success"),W())}catch{e("Failed to apply user management action","error")}finally{j(null),p(null)}};return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"28px"},children:[t.jsx("h1",{style:{fontSize:"1.85rem",fontWeight:"800",color:"#0f172a",letterSpacing:"-0.02em"},children:"User Directory & Moderation"}),t.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem"},children:"Manage member accounts, assign roles, enforce suspensions, and manage community access."})]}),t.jsx("div",{className:"card",style:{padding:"20px 24px",marginBottom:"24px"},children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{style:{flex:"1 1 300px",position:"relative"},children:[t.jsx(Tt,{size:18,style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",color:"var(--text-light)"}}),t.jsx("input",{type:"text",placeholder:"Search by username, full name, or email...",value:s,onChange:S=>{a(S.target.value),v(1)},className:"input-control",style:{paddingLeft:"42px",width:"100%"}})]}),t.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[t.jsxs("select",{value:l,onChange:S=>{d(S.target.value),v(1)},className:"input-control",style:{width:"150px"},children:[t.jsx("option",{value:"",children:"All Roles"}),t.jsx("option",{value:"user",children:"User"}),t.jsx("option",{value:"admin",children:"Admin"})]}),t.jsxs("select",{value:u,onChange:S=>{x(S.target.value),v(1)},className:"input-control",style:{width:"150px"},children:[t.jsx("option",{value:"",children:"All Statuses"}),t.jsx("option",{value:"active",children:"Active"}),t.jsx("option",{value:"suspended",children:"Suspended"})]})]})]})}),t.jsx("div",{className:"card",style:{padding:"0",overflow:"hidden"},children:o?t.jsxs("div",{style:{textAlign:"center",padding:"60px 0"},children:[t.jsx("div",{className:"spinner",style:{margin:"0 auto 16px"}}),t.jsx("p",{style:{color:"var(--text-muted)"},children:"Retrieving user list..."})]}):r.length===0?t.jsx("div",{style:{textAlign:"center",padding:"60px 20px",color:"var(--text-muted)"},children:"No accounts match the current query criteria."}):t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left",fontSize:"0.9rem"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{background:"#f8fafc",borderBottom:"1px solid var(--border-color)",color:"var(--text-muted)"},children:[t.jsx("th",{style:{padding:"16px 20px",fontWeight:"700"},children:"Member Profile"}),t.jsx("th",{style:{padding:"16px 20px",fontWeight:"700"},children:"Role"}),t.jsx("th",{style:{padding:"16px 20px",fontWeight:"700"},children:"Account Status"}),t.jsx("th",{style:{padding:"16px 20px",fontWeight:"700"},children:"Showcases"}),t.jsx("th",{style:{padding:"16px 20px",fontWeight:"700"},children:"Joined"}),t.jsx("th",{style:{padding:"16px 20px",fontWeight:"700",textAlign:"right"},children:"Actions"})]})}),t.jsx("tbody",{children:r.map(S=>t.jsxs("tr",{style:{borderBottom:"1px solid var(--border-light)"},children:[t.jsx("td",{style:{padding:"16px 20px"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("img",{src:S.profile_photo||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",alt:S.username,style:{width:"42px",height:"42px",borderRadius:"50%",objectFit:"cover"}}),t.jsxs("div",{children:[t.jsx(T,{to:`/profile/${S.username}`,style:{fontWeight:"700",color:"var(--text-main)",textDecoration:"none"},children:S.full_name||S.username}),t.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"0.8rem"},children:["@",S.username," • ",S.email]})]})]})}),t.jsx("td",{style:{padding:"16px 20px"},children:t.jsx("span",{className:`badge ${S.role==="admin"?"badge-primary":"badge-secondary"}`,style:{textTransform:"capitalize"},children:S.role})}),t.jsx("td",{style:{padding:"16px 20px"},children:t.jsx("span",{className:`badge ${S.status==="active"?"badge-success":"badge-danger"}`,style:{textTransform:"capitalize"},children:S.status})}),t.jsx("td",{style:{padding:"16px 20px",fontWeight:"700",color:"var(--text-main)"},children:S.posts_count||0}),t.jsx("td",{style:{padding:"16px 20px",color:"var(--text-muted)",fontSize:"0.85rem"},children:new Date(S.created_at).toLocaleDateString()}),t.jsx("td",{style:{padding:"16px 20px",textAlign:"right"},children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("button",{onClick:()=>_(S),className:"btn btn-secondary btn-sm",title:"Edit User Info",style:{padding:"6px 10px",color:"#6e25e8",background:"rgba(110, 37, 232, 0.08)",border:"1px solid rgba(110, 37, 232, 0.2)"},children:t.jsx(Hh,{size:15})}),S.status==="active"?t.jsx("button",{onClick:()=>{j(S),p({type:"status",newStatus:"suspended"})},className:"btn btn-secondary btn-sm",title:"Suspend Account",style:{padding:"6px 10px",color:"var(--warning)"},children:t.jsx(mu,{size:15})}):t.jsx("button",{onClick:()=>{j(S),p({type:"status",newStatus:"active"})},className:"btn btn-secondary btn-sm",title:"Restore Account",style:{padding:"6px 10px",color:"var(--success)"},children:t.jsx(mn,{size:15})}),t.jsx("button",{onClick:()=>{j(S),p({type:"role",newRole:S.role==="admin"?"user":"admin"})},className:"btn btn-secondary btn-sm",title:S.role==="admin"?"Revoke Admin":"Make Admin",style:{padding:"6px 10px"},children:t.jsx(yr,{size:15})}),t.jsx("button",{onClick:()=>{j(S),p({type:"delete"})},className:"btn btn-secondary btn-sm",title:"Delete Account",style:{padding:"6px 10px",color:"var(--danger)"},children:t.jsx(nn,{size:15})})]})})]},S.id))})]})})}),t.jsx(Bu,{isOpen:!!f&&!!c,title:(c==null?void 0:c.type)==="delete"?"Delete User Account":(c==null?void 0:c.type)==="status"?`${c.newStatus==="suspended"?"Suspend":"Activate"} User`:"Change User Role",message:(c==null?void 0:c.type)==="delete"?`Are you sure you want to permanently delete user @${f==null?void 0:f.username}? This will remove all their posts and profile data.`:(c==null?void 0:c.type)==="status"?`Are you sure you want to change @${f==null?void 0:f.username}'s status to ${c==null?void 0:c.newStatus}?`:`Are you sure you want to set @${f==null?void 0:f.username}'s role to ${c==null?void 0:c.newRole}?`,confirmText:"Confirm Action",confirmVariant:(c==null?void 0:c.type)==="delete"||(c==null?void 0:c.newStatus)==="suspended"?"danger":"primary",onConfirm:M,onCancel:()=>{j(null),p(null)}}),h&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(4px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:t.jsxs("div",{style:{background:"#ffffff",borderRadius:"20px",maxWidth:"620px",width:"100%",maxHeight:"90vh",display:"flex",flexDirection:"column",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.25)",border:"1px solid #e2e8f0",overflow:"hidden"},children:[t.jsxs("div",{style:{padding:"20px 24px",borderBottom:"1px solid #f1f5f9",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#f8fafc"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1.1rem"},children:(h.username||"U")[0].toUpperCase()}),t.jsxs("div",{children:[t.jsx("h3",{style:{margin:0,fontSize:"1.15rem",fontWeight:800,color:"#0f172a"},children:"Edit Member Profile"}),t.jsxs("p",{style:{margin:0,fontSize:"0.82rem",color:"#64748b"},children:["Updating credentials and public data for @",h.username]})]})]}),t.jsx("button",{type:"button",onClick:()=>k(null),style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",padding:"6px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:S=>{S.currentTarget.style.color="#0f172a",S.currentTarget.style.background="#e2e8f0"},onMouseLeave:S=>{S.currentTarget.style.color="#94a3b8",S.currentTarget.style.background="none"},children:t.jsx(Ae,{size:20})})]}),t.jsxs("form",{onSubmit:N,style:{overflowY:"auto",padding:"24px",display:"flex",flexDirection:"column",gap:"18px"},children:[t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Full Name"}),t.jsx("input",{type:"text",value:C.full_name,onChange:S=>w({...C,full_name:S.target.value}),required:!0,style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Username"}),t.jsx("input",{type:"text",value:C.username,onChange:S=>w({...C,username:S.target.value}),required:!0,style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff"}})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Email Address"}),t.jsx("input",{type:"email",value:C.email,onChange:S=>w({...C,email:S.target.value}),required:!0,style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Phone Number"}),t.jsx("input",{type:"text",value:C.phone,onChange:S=>w({...C,phone:S.target.value}),placeholder:"+25261...",style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff"}})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Professional Title / Headline"}),t.jsx("input",{type:"text",value:C.professional_title,onChange:S=>w({...C,professional_title:S.target.value}),placeholder:"e.g. Graphic Designer, Web Architect",style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Location / City"}),t.jsx("input",{type:"text",value:C.location,onChange:S=>w({...C,location:S.target.value}),placeholder:"e.g. Mogadishu, Somalia",style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff"}})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Account Role"}),t.jsxs("select",{value:C.role,onChange:S=>w({...C,role:S.target.value}),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff",cursor:"pointer"},children:[t.jsx("option",{value:"user",children:"Regular User / Creator"}),t.jsx("option",{value:"admin",children:"System Administrator"})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Account Status"}),t.jsxs("select",{value:C.status,onChange:S=>w({...C,status:S.target.value}),style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff",cursor:"pointer"},children:[t.jsx("option",{value:"active",children:"Active (Full Access)"}),t.jsx("option",{value:"suspended",children:"Suspended (Restricted)"}),t.jsx("option",{value:"deactivated",children:"Deactivated"})]})]})]}),t.jsxs("div",{children:[t.jsxs("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:["New Password ",t.jsx("span",{style:{color:"#94a3b8",fontWeight:400},children:"(leave empty to keep unchanged)"})]}),t.jsx("input",{type:"password",value:C.password,onChange:S=>w({...C,password:S.target.value}),placeholder:"Set a new password for this user",style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff"}})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#0f172a",marginBottom:"6px"},children:"Biography / Summary"}),t.jsx("textarea",{rows:3,value:C.bio,onChange:S=>w({...C,bio:S.target.value}),placeholder:"Short bio about the creator...",style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",background:"#ffffff",resize:"vertical"}})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"12px",paddingTop:"12px",borderTop:"1px solid #f1f5f9"},children:[t.jsx("button",{type:"button",onClick:()=>k(null),className:"btn btn-secondary",style:{padding:"10px 20px",borderRadius:"10px",fontWeight:700},children:"Cancel"}),t.jsxs("button",{type:"submit",disabled:z,className:"btn btn-primary",style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 24px",borderRadius:"10px",fontWeight:700,background:"linear-gradient(135deg, #7c2ae8 0%, #6e25e8 100%)"},children:[t.jsx(Yh,{size:16}),t.jsx("span",{children:z?"Saving Changes...":"Save Changes"})]})]})]})]})})]})},Bg=()=>{const{showToast:e}=ie(),[r,n]=g.useState([]),[o,i]=g.useState(!0),[s,a]=g.useState("pending"),[l,d]=g.useState("all"),[u,x]=g.useState(""),[y,v]=g.useState(!1),[m,b]=g.useState(null),[f,j]=g.useState(""),c=async()=>{i(!0);try{const w=await A.getAdminReports(s);w.success&&w.data&&n(w.data.reports||[])}catch(w){console.error(w),e("Could not load moderation reports","error")}finally{i(!1)}};g.useEffect(()=>{c()},[s]);const p=g.useMemo(()=>{const w=r.length,z=r.filter(N=>N.status==="pending").length,P=r.filter(N=>N.status==="resolved").length,_=r.filter(N=>N.status==="dismissed").length;return{total:w,pending:z,resolved:P,dismissed:_}},[r]),h=g.useMemo(()=>r.filter(w=>{if(l!=="all"&&w.report_type!==l)return!1;if(u.trim()){const z=u.toLowerCase(),P=(w.reporter_username||"").toLowerCase(),_=(w.target_username||"").toLowerCase(),N=(w.post_title||"").toLowerCase(),W=(w.reason||"").toLowerCase(),M=(w.details||"").toLowerCase(),S=`#rep-${w.id}`.toLowerCase();return P.includes(z)||_.includes(z)||N.includes(z)||W.includes(z)||M.includes(z)||S.includes(z)}return!0}),[r,l,u]),k=async(w,z,P="")=>{v(!0);try{const _=await A.adminReportAction(w,z,P||f);_.success?(e(_.message||"Moderation action executed successfully","success"),(m==null?void 0:m.id)===w&&(b(null),j("")),c()):e(_.message||"Action failed","error")}catch{e("Error executing report action","error")}finally{v(!1)}},C=(w="")=>{const z=w.toLowerCase();return z.includes("spam")?{bg:"#fffbeb",border:"#fde68a",color:"#b45309"}:z.includes("copyright")||z.includes("ip")?{bg:"#faf5ff",border:"#e9d5ff",color:"#7e22ce"}:z.includes("harass")||z.includes("hate")?{bg:"#fef2f2",border:"#fecaca",color:"#b91c1c"}:z.includes("inappropriate")||z.includes("nudity")?{bg:"#fff1f2",border:"#fecdd3",color:"#be123c"}:{bg:"#f1f5f9",border:"#cbd5e1",color:"#475569"}};return t.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",paddingBottom:"50px"},children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"20px",marginBottom:"28px"},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(124, 58, 237, 0.08)",border:"1px solid rgba(124, 58, 237, 0.2)",padding:"4px 12px",borderRadius:"9999px",fontSize:"0.75rem",fontWeight:"800",color:"#7c3aed",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"10px"},children:[t.jsx(ga,{size:13}),t.jsx("span",{children:"Platform Governance & Community Trust"})]}),t.jsx("h1",{style:{fontSize:"2rem",fontWeight:"900",color:"#0f172a",letterSpacing:"-0.025em",margin:"0 0 6px"},children:"Moderation & Incident Reports"}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.95rem",margin:0,maxWidth:"680px"},children:"Review flagged accounts, copyright notices, offensive content, and enforce PartfolioHub safety standards."})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",background:"#ffffff",border:"1px solid #e2e8f0",borderRadius:"12px",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",fontSize:"0.84rem",color:"#334155",fontWeight:"600"},children:[t.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 0 3px rgba(16, 185, 129, 0.2)",display:"inline-block"}}),t.jsx("span",{children:"Active Queue"})]}),t.jsxs("button",{onClick:c,disabled:o,title:"Refresh incident list",style:{display:"flex",alignItems:"center",gap:"6px",padding:"9px 16px",borderRadius:"12px",background:"#ffffff",border:"1px solid #cbd5e1",color:"#334155",fontWeight:"700",fontSize:"0.85rem",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",transition:"all 0.2s"},onMouseEnter:w=>w.currentTarget.style.borderColor="#7c3aed",onMouseLeave:w=>w.currentTarget.style.borderColor="#cbd5e1",children:[t.jsx(Vh,{size:15,className:o?"spin-animation":""}),t.jsx("span",{children:"Refresh"})]})]})]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(230px, 1fr))",gap:"18px",marginBottom:"28px"},children:[t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",border:"1px solid #e2e8f0",padding:"20px 22px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"700",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Total Incidents"}),t.jsx("div",{style:{fontSize:"1.9rem",fontWeight:"900",color:"#0f172a",margin:"4px 0 2px"},children:p.total}),t.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"All logged tickets"})]}),t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"14px",background:"linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",color:"#7c3aed",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(wu,{size:22})})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",border:p.pending>0?"1.5px solid #fecaca":"1px solid #e2e8f0",padding:"20px 22px",boxShadow:p.pending>0?"0 4px 14px rgba(239, 68, 68, 0.08)":"0 2px 8px rgba(0, 0, 0, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"700",color:p.pending>0?"#ef4444":"#64748b",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Pending Review"}),t.jsx("div",{style:{fontSize:"1.9rem",fontWeight:"900",color:p.pending>0?"#ef4444":"#0f172a",margin:"4px 0 2px"},children:p.pending}),t.jsx("div",{style:{fontSize:"0.78rem",color:p.pending>0?"#dc2626":"#94a3b8",fontWeight:p.pending>0?"600":"400"},children:p.pending>0?"● Immediate action required":"All clear"})]}),t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"14px",background:"linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)",color:"#ef4444",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(vl,{size:22})})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",border:"1px solid #e2e8f0",padding:"20px 22px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"700",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Resolved Cases"}),t.jsx("div",{style:{fontSize:"1.9rem",fontWeight:"900",color:"#10b981",margin:"4px 0 2px"},children:p.resolved}),t.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"Actioned & closed"})]}),t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"14px",background:"linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",color:"#10b981",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(mn,{size:22})})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",border:"1px solid #e2e8f0",padding:"20px 22px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.03)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"700",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Dismissed / Safe"}),t.jsx("div",{style:{fontSize:"1.9rem",fontWeight:"900",color:"#64748b",margin:"4px 0 2px"},children:p.dismissed}),t.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"Valid content confirmed"})]}),t.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"14px",background:"linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",color:"#64748b",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(Zt,{size:22})})]})]}),t.jsxs("div",{style:{background:"#ffffff",borderRadius:"16px",border:"1px solid #e2e8f0",padding:"16px 20px",marginBottom:"22px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"16px",boxShadow:"0 1px 4px rgba(0,0,0,0.03)"},children:[t.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",overflowX:"auto"},children:[{id:"pending",label:"Pending Review",count:p.pending,alert:p.pending>0},{id:"all",label:"All Incidents",count:p.total},{id:"resolved",label:"Resolved",count:p.resolved},{id:"dismissed",label:"Dismissed",count:p.dismissed}].map(w=>t.jsxs("button",{onClick:()=>a(w.id),style:{display:"flex",alignItems:"center",gap:"8px",padding:"9px 18px",borderRadius:"9999px",border:"none",background:s===w.id?"#0f172a":"#f8fafc",color:s===w.id?"#ffffff":"#64748b",fontWeight:"700",fontSize:"0.86rem",cursor:"pointer",transition:"all 0.2s",whiteSpace:"nowrap"},children:[t.jsx("span",{children:w.label}),t.jsx("span",{style:{background:s===w.id?w.alert?"#ef4444":"rgba(255, 255, 255, 0.2)":w.alert?"#fee2e2":"#e2e8f0",color:s===w.id?"#ffffff":w.alert?"#ef4444":"#475569",padding:"2px 8px",borderRadius:"9999px",fontSize:"0.74rem",fontWeight:"800"},children:w.count})]},w.id))}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flex:"1 1 320px",justifyContent:"flex-end"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Ih,{size:15,color:"#94a3b8"}),t.jsxs("select",{value:l,onChange:w=>d(w.target.value),style:{padding:"8px 12px",borderRadius:"10px",border:"1px solid #cbd5e1",background:"#ffffff",fontSize:"0.84rem",color:"#334155",fontWeight:"600",outline:"none",cursor:"pointer"},children:[t.jsx("option",{value:"all",children:"All Content Types"}),t.jsx("option",{value:"user",children:"User Accounts"}),t.jsx("option",{value:"post",children:"Posts & Media"}),t.jsx("option",{value:"comment",children:"Comments"})]})]}),t.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"280px"},children:[t.jsx(Tt,{size:15,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8"}}),t.jsx("input",{type:"text",placeholder:"Search reports or users...",value:u,onChange:w=>x(w.target.value),style:{width:"100%",padding:"8px 14px 8px 36px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.86rem",outline:"none",background:"#ffffff",color:"#0f172a",transition:"all 0.2s"},onFocus:w=>w.target.style.borderColor="#7c3aed",onBlur:w=>w.target.style.borderColor="#cbd5e1"})]})]})]}),t.jsx("div",{style:{background:"#ffffff",borderRadius:"16px",border:"1px solid #e2e8f0",overflow:"hidden",boxShadow:"0 2px 10px rgba(0, 0, 0, 0.04)"},children:o?t.jsxs("div",{style:{textAlign:"center",padding:"80px 20px"},children:[t.jsx("div",{className:"spinner",style:{margin:"0 auto 16px",borderColor:"#e2e8f0",borderTopColor:"#7c3aed"}}),t.jsx("div",{style:{fontWeight:"700",color:"#0f172a",fontSize:"1rem",marginBottom:"4px"},children:"Loading Incident Queue"}),t.jsx("p",{style:{color:"#64748b",fontSize:"0.88rem",margin:0},children:"Retrieving flagged items and moderation tickets from secure storage..."})]}):h.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"80px 20px"},children:[t.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"20px",background:"#f0fdf4",color:"#16a34a",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:t.jsx(it,{size:32})}),t.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#0f172a",margin:"0 0 6px"},children:"Zero Incidents in this Queue"}),t.jsxs("p",{style:{color:"#64748b",fontSize:"0.92rem",maxWidth:"420px",margin:"0 auto"},children:["No reports match your selected criteria (",t.jsx("strong",{style:{textTransform:"capitalize"},children:s})," status, ",l," type). PartfolioHub community guidelines are currently in good standing."]})]}):t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left",minWidth:"950px"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{background:"#f8fafc",borderBottom:"1.5px solid #e2e8f0"},children:[t.jsx("th",{style:{padding:"16px 20px",fontSize:"0.76rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Incident & Date"}),t.jsx("th",{style:{padding:"16px 20px",fontSize:"0.76rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Target Item"}),t.jsx("th",{style:{padding:"16px 20px",fontSize:"0.76rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Reporter"}),t.jsx("th",{style:{padding:"16px 20px",fontSize:"0.76rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Reason & Notes"}),t.jsx("th",{style:{padding:"16px 20px",fontSize:"0.76rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Status"}),t.jsx("th",{style:{padding:"16px 20px",fontSize:"0.76rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em",textAlign:"right"},children:"Moderation Actions"})]})}),t.jsx("tbody",{children:h.map((w,z)=>{const P=C(w.reason),_=w.status==="pending",N=w.status==="resolved";return t.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9",background:_?"rgba(254, 242, 242, 0.25)":"#ffffff",transition:"background 0.15s ease"},onMouseEnter:W=>W.currentTarget.style.background="#f8fafc",onMouseLeave:W=>W.currentTarget.style.background=_?"rgba(254, 242, 242, 0.25)":"#ffffff",children:[t.jsxs("td",{style:{padding:"18px 20px",verticalAlign:"middle"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[t.jsxs("span",{style:{fontWeight:"900",fontSize:"0.88rem",color:"#0f172a",fontFamily:"monospace"},children:["#REP-",String(w.id).padStart(3,"0")]}),t.jsx("span",{style:{padding:"2px 8px",borderRadius:"6px",fontSize:"0.7rem",fontWeight:"800",textTransform:"uppercase",background:"#f1f5f9",color:"#475569"},children:w.report_type})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",fontSize:"0.76rem",color:"#94a3b8"},children:[t.jsx(ju,{size:12}),t.jsxs("span",{children:[new Date(w.created_at).toLocaleDateString()," • ",new Date(w.created_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})]}),t.jsxs("td",{style:{padding:"18px 20px",verticalAlign:"middle"},children:[w.report_type==="user"&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg, #7c3aed, #4f46e5)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"800",fontSize:"0.88rem"},children:(w.target_username||"U")[0].toUpperCase()}),t.jsxs("div",{children:[t.jsxs(T,{to:`/profile/${w.target_username}`,target:"_blank",rel:"noreferrer",style:{fontWeight:"800",fontSize:"0.9rem",color:"#0f172a",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px"},children:[t.jsxs("span",{children:["@",w.target_username]}),t.jsx(Qt,{size:12,color:"#94a3b8"})]}),t.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Creator Account"})]})]}),w.report_type==="post"&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"8px",background:"#eff6ff",color:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t.jsx(Jt,{size:18})}),t.jsxs("div",{style:{maxWidth:"240px"},children:[t.jsx(T,{to:`/post/${w.post_id}`,target:"_blank",rel:"noreferrer",style:{fontWeight:"800",fontSize:"0.88rem",color:"#0f172a",textDecoration:"none",display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:w.post_title,children:w.post_title||`Post #${w.post_id}`}),t.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"Media Publication"})]})]}),w.report_type==="comment"&&t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"8px",background:"#fdf2f8",color:"#ec4899",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t.jsx(Pe,{size:18})}),t.jsxs("div",{style:{maxWidth:"240px"},children:[t.jsxs("div",{style:{fontWeight:"700",fontSize:"0.84rem",color:"#0f172a",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:['"',w.comment_content||"Comment discussion",'"']}),t.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:"User Comment"})]})]})]}),t.jsxs("td",{style:{padding:"18px 20px",verticalAlign:"middle"},children:[t.jsx("div",{style:{fontWeight:"700",fontSize:"0.88rem",color:"#0f172a"},children:w.reporter_name||`@${w.reporter_username}`}),t.jsxs("div",{style:{fontSize:"0.76rem",color:"#64748b"},children:["@",w.reporter_username]})]}),t.jsxs("td",{style:{padding:"18px 20px",verticalAlign:"middle"},children:[t.jsx("div",{style:{marginBottom:"4px"},children:t.jsx("span",{style:{padding:"3px 10px",borderRadius:"9999px",fontSize:"0.74rem",fontWeight:"800",background:P.bg,border:`1px solid ${P.border}`,color:P.color,display:"inline-block"},children:w.reason})}),w.details&&t.jsxs("div",{style:{fontSize:"0.8rem",color:"#475569",maxWidth:"280px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},title:w.details,children:['"',w.details,'"']})]}),t.jsxs("td",{style:{padding:"18px 20px",verticalAlign:"middle"},children:[_&&t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 12px",borderRadius:"9999px",background:"#fee2e2",color:"#ef4444",fontSize:"0.78rem",fontWeight:"800"},children:[t.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#ef4444"}}),t.jsx("span",{children:"Pending"})]}),N&&t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 12px",borderRadius:"9999px",background:"#d1fae5",color:"#059669",fontSize:"0.78rem",fontWeight:"800"},children:[t.jsx(mn,{size:12}),t.jsx("span",{children:"Resolved"})]}),w.status==="dismissed"&&t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"4px 12px",borderRadius:"9999px",background:"#f1f5f9",color:"#64748b",fontSize:"0.78rem",fontWeight:"800"},children:[t.jsx(hs,{size:12}),t.jsx("span",{children:"Dismissed"})]})]}),t.jsx("td",{style:{padding:"18px 20px",verticalAlign:"middle",textAlign:"right"},children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsxs("button",{onClick:()=>{b(w),j("")},style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",background:"#ffffff",color:"#0f172a",fontWeight:"700",fontSize:"0.82rem",cursor:"pointer",boxShadow:"0 1px 2px rgba(0,0,0,0.05)",transition:"all 0.15s"},onMouseEnter:W=>{W.currentTarget.style.borderColor="#7c3aed",W.currentTarget.style.color="#7c3aed"},onMouseLeave:W=>{W.currentTarget.style.borderColor="#cbd5e1",W.currentTarget.style.color="#0f172a"},children:[t.jsx(xe,{size:14}),t.jsx("span",{children:"Review Case"})]}),_&&t.jsxs(t.Fragment,{children:[t.jsx("button",{disabled:y,onClick:()=>k(w.id,"resolve"),title:"Resolve Report",style:{width:"32px",height:"32px",borderRadius:"8px",border:"1px solid #a7f3d0",background:"#ecfdf5",color:"#059669",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.15s"},onMouseEnter:W=>W.currentTarget.style.background="#d1fae5",onMouseLeave:W=>W.currentTarget.style.background="#ecfdf5",children:t.jsx(mn,{size:15})}),t.jsx("button",{disabled:y,onClick:()=>k(w.id,"dismiss"),title:"Dismiss Report",style:{width:"32px",height:"32px",borderRadius:"8px",border:"1px solid #e2e8f0",background:"#f8fafc",color:"#64748b",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.15s"},onMouseEnter:W=>W.currentTarget.style.background="#e2e8f0",onMouseLeave:W=>W.currentTarget.style.background="#f8fafc",children:t.jsx(hs,{size:15})})]})]})})]},w.id)})})]})})}),m&&t.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(15, 23, 42, 0.65)",backdropFilter:"blur(6px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:t.jsxs("div",{style:{background:"#ffffff",borderRadius:"24px",maxWidth:"680px",width:"100%",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 25px 60px rgba(0,0,0,0.25)",border:"1px solid #e2e8f0",position:"relative",animation:"modalSlideUp 0.25s ease-out"},children:[t.jsxs("div",{style:{padding:"24px 28px",borderBottom:"1px solid #e2e8f0",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#f8fafc"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(ga,{size:22})}),t.jsxs("div",{children:[t.jsxs("div",{style:{fontSize:"1.15rem",fontWeight:"900",color:"#0f172a"},children:["Incident Audit • #REP-",String(m.id).padStart(3,"0")]}),t.jsxs("div",{style:{fontSize:"0.8rem",color:"#64748b"},children:["Type: ",t.jsx("strong",{style:{textTransform:"capitalize"},children:m.report_type})," • Reported on ",new Date(m.created_at).toLocaleString()]})]})]}),t.jsx("button",{onClick:()=>b(null),style:{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid #e2e8f0",background:"#ffffff",color:"#64748b",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t.jsx(Ae,{size:18})})]}),t.jsxs("div",{style:{padding:"26px 28px",display:"flex",flexDirection:"column",gap:"22px"},children:[t.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:"14px",padding:"16px 18px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[t.jsxs("div",{style:{fontSize:"0.84rem",fontWeight:"800",color:"#92400e",textTransform:"uppercase"},children:["Reported Violation: ",m.reason]}),t.jsxs("div",{style:{fontSize:"0.78rem",color:"#b45309"},children:["By: ",t.jsxs("strong",{children:["@",m.reporter_username]})," (",m.reporter_name||"Member",")"]})]}),t.jsxs("div",{style:{fontSize:"0.92rem",color:"#78350f",lineHeight:1.5,background:"#ffffff",padding:"12px 14px",borderRadius:"10px",border:"1px solid #fef3c7"},children:['"',m.details||"No additional comment provided by reporter.",'"']})]}),t.jsxs("div",{style:{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:"14px",padding:"16px 18px"},children:[t.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"800",color:"#64748b",textTransform:"uppercase",marginBottom:"10px"},children:"Target Content Subject"}),m.report_type==="user"&&t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"linear-gradient(135deg, #7c3aed, #4f46e5)",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"800"},children:(m.target_username||"U")[0].toUpperCase()}),t.jsxs("div",{children:[t.jsxs("div",{style:{fontWeight:"800",fontSize:"0.98rem",color:"#0f172a"},children:["@",m.target_username]}),t.jsx("div",{style:{fontSize:"0.78rem",color:"#64748b"},children:"Platform Creator Profile"})]})]}),t.jsxs(T,{to:`/profile/${m.target_username}`,target:"_blank",className:"btn btn-sm btn-secondary",style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem"},children:[t.jsx(Qt,{size:13}),t.jsx("span",{children:"Inspect Profile"})]})]}),m.report_type==="post"&&t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontWeight:"800",fontSize:"0.98rem",color:"#0f172a"},children:m.post_title||`Post #${m.post_id}`}),t.jsxs("div",{style:{fontSize:"0.78rem",color:"#64748b"},children:["Publication ID: #",m.post_id]})]}),t.jsxs(T,{to:`/post/${m.post_id}`,target:"_blank",className:"btn btn-sm btn-secondary",style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.8rem"},children:[t.jsx(Qt,{size:13}),t.jsx("span",{children:"View Post"})]})]}),m.report_type==="comment"&&t.jsxs("div",{children:[t.jsxs("div",{style:{fontSize:"0.9rem",color:"#0f172a",fontWeight:"700",marginBottom:"4px"},children:['"',m.comment_content,'"']}),t.jsxs("div",{style:{fontSize:"0.78rem",color:"#64748b"},children:["Comment ID: #",m.comment_id]})]})]}),t.jsxs("div",{children:[t.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:"800",color:"#334155",marginBottom:"8px"},children:"Resolution Notes & Audit Log (Optional):"}),t.jsx("textarea",{rows:2,value:f,onChange:w=>j(w.target.value),placeholder:"Record why this action was taken (e.g. 'False alarm, verified original creator' or 'Violation confirmed and deleted')...",style:{width:"100%",padding:"10px 14px",borderRadius:"10px",border:"1px solid #cbd5e1",fontSize:"0.88rem",outline:"none",color:"#0f172a",fontFamily:"inherit"}})]}),t.jsxs("div",{style:{paddingTop:"16px",borderTop:"1px solid #e2e8f0",display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"center",justifyContent:"flex-end"},children:[t.jsx("button",{type:"button",onClick:()=>b(null),style:{padding:"9px 18px",borderRadius:"10px",border:"1px solid #cbd5e1",background:"#ffffff",color:"#64748b",fontWeight:"700",fontSize:"0.86rem",cursor:"pointer"},children:"Close"}),m.status==="pending"&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{disabled:y,onClick:()=>k(m.id,"dismiss"),style:{padding:"9px 18px",borderRadius:"10px",border:"1px solid #cbd5e1",background:"#f8fafc",color:"#475569",fontWeight:"700",fontSize:"0.86rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(hs,{size:15}),t.jsx("span",{children:"Dismiss Report"})]}),m.report_type==="user"?t.jsxs("button",{disabled:y,onClick:()=>k(m.id,"suspend_user"),style:{padding:"9px 18px",borderRadius:"10px",border:"none",background:"#dc2626",color:"#ffffff",fontWeight:"800",fontSize:"0.86rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 12px rgba(220, 38, 38, 0.3)"},children:[t.jsx(mu,{size:15}),t.jsx("span",{children:"Suspend User & Resolve"})]}):t.jsxs("button",{disabled:y,onClick:()=>k(m.id,"remove_content"),style:{padding:"9px 18px",borderRadius:"10px",border:"none",background:"#dc2626",color:"#ffffff",fontWeight:"800",fontSize:"0.86rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 12px rgba(220, 38, 38, 0.3)"},children:[t.jsx(nn,{size:15}),t.jsx("span",{children:"Delete Content & Resolve"})]}),t.jsxs("button",{disabled:y,onClick:()=>k(m.id,"resolve"),style:{padding:"9px 20px",borderRadius:"10px",border:"none",background:"linear-gradient(135deg, #10b981 0%, #059669 100%)",color:"#ffffff",fontWeight:"800",fontSize:"0.86rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 14px rgba(16, 185, 129, 0.35)"},children:[t.jsx(mn,{size:15}),t.jsx("span",{children:"Mark Resolved"})]})]})]})]})]})}),t.jsx("style",{children:`
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .spin-animation {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})};function Ag(){return t.jsxs(sh,{children:[t.jsxs(X,{element:t.jsx(sg,{}),children:[t.jsx(X,{path:"/",element:t.jsx(pg,{})}),t.jsx(X,{path:"/explore",element:t.jsx(ug,{})}),t.jsx(X,{path:"/categories",element:t.jsx(jg,{})}),t.jsx(X,{path:"/creators",element:t.jsx(fg,{})}),t.jsx(X,{path:"/profile/:username",element:t.jsx(Ud,{})}),t.jsx(X,{path:"/post/:id",element:t.jsx(hg,{})}),t.jsx(X,{path:"/post/:id/video",element:t.jsx(gg,{})}),t.jsx(X,{path:"/project/:id",element:t.jsx(mg,{})}),t.jsx(X,{path:"/about",element:t.jsx(yg,{})})]}),t.jsx(X,{path:"/login",element:t.jsx(wg,{})}),t.jsx(X,{path:"/register",element:t.jsx(kg,{})}),t.jsx(X,{path:"/forgot-password",element:t.jsx(Sg,{})}),t.jsx(X,{path:"/reset-password",element:t.jsx(Cg,{})}),t.jsxs(X,{element:t.jsx(dg,{}),children:[t.jsx(X,{path:"/dashboard",element:t.jsx(zg,{})}),t.jsx(X,{path:"/my-profile",element:t.jsx(Ud,{})}),t.jsx(X,{path:"/profile-setup",element:t.jsx(Rg,{})}),t.jsx(X,{path:"/create-post",element:t.jsx(Ng,{})}),t.jsx(X,{path:"/my-posts",element:t.jsx(_g,{})}),t.jsx(X,{path:"/messages",element:t.jsx(Pg,{})}),t.jsx(X,{path:"/notifications",element:t.jsx(Wg,{})}),t.jsx(X,{path:"/analytics",element:t.jsx(Tg,{})}),t.jsx(X,{path:"/settings",element:t.jsx(Ig,{})})]}),t.jsx(X,{path:"/admin/login",element:t.jsx(Eg,{})}),t.jsx(X,{path:"/admin-login",element:t.jsx(ii,{to:"/admin/login",replace:!0})}),t.jsxs(X,{path:"/admin",element:t.jsx(cg,{}),children:[t.jsx(X,{index:!0,element:t.jsx(Mg,{})}),t.jsx(X,{path:"users",element:t.jsx(Lg,{})}),t.jsx(X,{path:"reports",element:t.jsx(Bg,{})})]}),t.jsx(X,{path:"*",element:t.jsxs("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"20px"},children:[t.jsx("h1",{style:{fontSize:"4rem",fontWeight:"800",color:"var(--primary)",marginBottom:"8px"},children:"404"}),t.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:"700",marginBottom:"12px"},children:"Page Not Found"}),t.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"24px"},children:"The showcase or destination you are looking for does not exist."}),t.jsx("a",{href:"/",className:"btn btn-primary",children:"Return Home"})]})})]})}gs.createRoot(document.getElementById("root")).render(t.jsx(Zd.StrictMode,{children:t.jsx(hh,{children:t.jsx(wh,{children:t.jsx(ng,{children:t.jsx(Ag,{})})})})}));
