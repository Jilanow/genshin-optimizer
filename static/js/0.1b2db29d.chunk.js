(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"m",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"k",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return f})),n.d(t,"l",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"o",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"j",(function(){return m})),n.d(t,"n",(function(){return v})),n.d(t,"h",(function(){return h})),n.d(t,"g",(function(){return b}));var r="top",o="bottom",i="right",a="left",c="auto",f=[r,o,i,a],s="start",u="end",p="clippingParents",l="viewport",d="popper",m="reference",v=f.reduce((function(e,t){return e.concat([t+"-"+s,t+"-"+u])}),[]),h=[].concat(f,[c]).reduce((function(e,t){return e.concat([t,t+"-"+s,t+"-"+u])}),[]),b=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(24),o=n.n(r);function i(e){return e&&"setState"in e?o.a.findDOMNode(e):null!=e?e:null}},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,i){var a=r||"<<anonymous>>",c=i||n;if(null==t[n])return new Error("The "+o+" `"+c+"` is required to make `"+a+"` accessible for users of assistive technologies such as screen readers.");for(var f=arguments.length,s=Array(f>5?f-5:0),u=5;u<f;u++)s[u-5]=arguments[u];return e.apply(void 0,[t,n,r,o,i].concat(s))}},e.exports=t.default},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n(169),i=n(7);function a(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}function c(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(i.a)(void 0,"popover"),c=Object(i.a)(void 0,"dropdown-menu");return[Object(r.useCallback)((function(r){r&&(Object(o.a)(r,n)||Object(o.a)(r,c))&&(t.current=a(r),r.style.margin="0",e.current=r)}),[n,c]),[Object(r.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,o=r.top,i=r.left,a=r.bottom,c=r.right;switch(n.split("-")[0]){case"top":return[0,a];case"left":return[0,c];case"bottom":return[0,o];case"right":return[0,i];default:return[0,0]}}}}}),[t]),Object(r.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(t){var r=t.state;if(e.current&&r.elements.arrow&&Object(o.a)(e.current,n)&&r.modifiersData["arrow#persistent"]){var i=a(r.elements.arrow),c=i.top,f=i.right,s=c||f;return r.modifiersData["arrow#persistent"].padding={top:s,left:s,right:s,bottom:s},r.elements.arrow.style.margin="0",function(){r.elements.arrow&&(r.elements.arrow.style.margin="")}}}}}),[n])]]}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(8);function o(e){var t,n,o,i,a,c=e.enabled,f=e.enableEvents,s=e.placement,u=e.flip,p=e.offset,l=e.fixed,d=e.containerPadding,m=e.arrowElement,v=e.popperConfig,h=void 0===v?{}:v,b=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(h.modifiers);return Object(r.a)({},h,{placement:s,enabled:c,strategy:l?"fixed":h.strategy,modifiers:(a=Object(r.a)({},b,{eventListeners:{enabled:f},preventOverflow:Object(r.a)({},b.preventOverflow,{options:d?Object(r.a)({padding:d},null==(t=b.preventOverflow)?void 0:t.options):null==(n=b.preventOverflow)?void 0:n.options}),offset:{options:Object(r.a)({offset:p},null==(o=b.offset)?void 0:o.options)},arrow:Object(r.a)({},b.arrow,{enabled:!!m,options:Object(r.a)({},null==(i=b.arrow)?void 0:i.options,{element:m})}),flip:Object(r.a)({enabled:!!u},b.flip)}),void 0===a&&(a={}),Array.isArray(a)?a:Object.keys(a).map((function(e){return a[e].name=e,a[e]})))})}},166:function(e,t,n){"use strict";function r(e){return e.split("-")[0]}function o(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function i(e){var t=o(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function a(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function c(e){return e instanceof a(e).Element||e instanceof Element}function f(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!==typeof ShadowRoot&&(e instanceof a(e).ShadowRoot||e instanceof ShadowRoot)}function u(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function p(e){return e?(e.nodeName||"").toLowerCase():null}function l(e){return a(e).getComputedStyle(e)}function d(e){return["table","td","th"].indexOf(p(e))>=0}function m(e){return((c(e)?e.ownerDocument:e.document)||window.document).documentElement}function v(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||m(e)}function h(e){return f(e)&&"fixed"!==l(e).position?e.offsetParent:null}function b(e){for(var t=a(e),n=h(e);n&&d(n)&&"static"===l(n).position;)n=h(n);return n&&("html"===p(n)||"body"===p(n)&&"static"===l(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&f(e)&&"fixed"===l(e).position)return null;for(var n=v(e);f(n)&&["html","body"].indexOf(p(n))<0;){var r=l(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function g(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}n.d(t,"a",(function(){return ae}));var y=Math.max,O=Math.min,w=Math.round;function x(e,t,n){return y(e,O(t,n))}function j(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function k(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var E=n(125);var D={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,a=e.options,c=n.elements.arrow,f=n.modifiersData.popperOffsets,s=r(n.placement),u=g(s),p=[E.f,E.k].indexOf(s)>=0?"height":"width";if(c&&f){var l=function(e,t){return j("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:k(e,E.b))}(a.padding,n),d=i(c),m="y"===u?E.m:E.f,v="y"===u?E.c:E.k,h=n.rects.reference[p]+n.rects.reference[u]-f[u]-n.rects.popper[p],y=f[u]-n.rects.reference[u],O=b(c),w=O?"y"===u?O.clientHeight||0:O.clientWidth||0:0,D=h/2-y/2,A=l[m],M=w-d[p]-l[v],L=w/2-d[p]/2+D,C=x(A,L,M),R=u;n.modifiersData[o]=((t={})[R]=C,t.centerOffset=C-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&u(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},A={top:"auto",right:"auto",bottom:"auto",left:"auto"};function M(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.offsets,c=e.position,f=e.gpuAcceleration,s=e.adaptive,u=e.roundOffsets,p=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:w(w(t*r)/r)||0,y:w(w(n*r)/r)||0}}(i):"function"===typeof u?u(i):i,d=p.x,v=void 0===d?0:d,h=p.y,g=void 0===h?0:h,y=i.hasOwnProperty("x"),O=i.hasOwnProperty("y"),x=E.f,j=E.m,k=window;if(s){var D=b(n),M="clientHeight",L="clientWidth";D===a(n)&&"static"!==l(D=m(n)).position&&(M="scrollHeight",L="scrollWidth"),D=D,o===E.m&&(j=E.c,g-=D[M]-r.height,g*=f?1:-1),o===E.f&&(x=E.k,v-=D[L]-r.width,v*=f?1:-1)}var C,R=Object.assign({position:c},s&&A);return f?Object.assign({},R,((C={})[j]=O?"0":"",C[x]=y?"0":"",C.transform=(k.devicePixelRatio||1)<2?"translate("+v+"px, "+g+"px)":"translate3d("+v+"px, "+g+"px, 0)",C)):Object.assign({},R,((t={})[j]=O?g+"px":"",t[x]=y?v+"px":"",t.transform="",t))}var L={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,i=void 0===o||o,a=n.adaptive,c=void 0===a||a,f=n.roundOffsets,s=void 0===f||f,u={placement:r(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,M(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,M(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},C={passive:!0};var R={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,c=r.resize,f=void 0===c||c,s=a(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,C)})),f&&s.addEventListener("resize",n.update,C),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,C)})),f&&s.removeEventListener("resize",n.update,C)}},data:{}},P={left:"right",right:"left",bottom:"top",top:"bottom"};function B(e){return e.replace(/left|right|bottom|top/g,(function(e){return P[e]}))}var W={start:"end",end:"start"};function T(e){return e.replace(/start|end/g,(function(e){return W[e]}))}function S(e){var t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function H(e){return o(m(e)).left+S(e).scrollLeft}function q(e){var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function N(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:f(e)&&q(e)?e:N(v(e))}function U(e,t){var n;void 0===t&&(t=[]);var r=N(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=a(r),c=o?[i].concat(i.visualViewport||[],q(r)?r:[]):r,f=t.concat(c);return o?f:f.concat(U(v(c)))}function F(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function I(e,t){return t===E.o?F(function(e){var t=a(e),n=m(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,c=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:c+H(e),y:f}}(e)):f(t)?function(e){var t=o(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):F(function(e){var t,n=m(e),r=S(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=y(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=y(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+H(e),f=-r.scrollTop;return"rtl"===l(o||n).direction&&(c+=y(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:c,y:f}}(m(e)))}function V(e,t,n){var r="clippingParents"===t?function(e){var t=U(v(e)),n=["absolute","fixed"].indexOf(l(e).position)>=0&&f(e)?b(e):e;return c(n)?t.filter((function(e){return c(e)&&u(e,n)&&"body"!==p(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=I(e,n);return t.top=y(r.top,t.top),t.right=O(r.right,t.right),t.bottom=O(r.bottom,t.bottom),t.left=y(r.left,t.left),t}),I(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function z(e){return e.split("-")[1]}function _(e){var t,n=e.reference,o=e.element,i=e.placement,a=i?r(i):null,c=i?z(i):null,f=n.x+n.width/2-o.width/2,s=n.y+n.height/2-o.height/2;switch(a){case E.m:t={x:f,y:n.y-o.height};break;case E.c:t={x:f,y:n.y+n.height};break;case E.k:t={x:n.x+n.width,y:s};break;case E.f:t={x:n.x-o.width,y:s};break;default:t={x:n.x,y:n.y}}var u=a?g(a):null;if(null!=u){var p="y"===u?"height":"width";switch(c){case E.l:t[u]=t[u]-(n[p]/2-o[p]/2);break;case E.e:t[u]=t[u]+(n[p]/2-o[p]/2)}}return t}function K(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,a=n.boundary,f=void 0===a?E.d:a,s=n.rootBoundary,u=void 0===s?E.o:s,p=n.elementContext,l=void 0===p?E.i:p,d=n.altBoundary,v=void 0!==d&&d,h=n.padding,b=void 0===h?0:h,g=j("number"!==typeof b?b:k(b,E.b)),y=l===E.i?E.j:E.i,O=e.elements.reference,w=e.rects.popper,x=e.elements[v?y:l],D=V(c(x)?x:x.contextElement||m(e.elements.popper),f,u),A=o(O),M=_({reference:A,element:w,strategy:"absolute",placement:i}),L=F(Object.assign({},w,M)),C=l===E.i?L:A,R={top:D.top-C.top+g.top,bottom:C.bottom-D.bottom+g.bottom,left:D.left-C.left+g.left,right:C.right-D.right+g.right},P=e.modifiersData.offset;if(l===E.i&&P){var B=P[i];Object.keys(R).forEach((function(e){var t=[E.k,E.c].indexOf(e)>=0?1:-1,n=[E.m,E.c].indexOf(e)>=0?"y":"x";R[e]+=B[n]*t}))}return R}var J={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var i=n.mainAxis,a=void 0===i||i,c=n.altAxis,f=void 0===c||c,s=n.fallbackPlacements,u=n.padding,p=n.boundary,l=n.rootBoundary,d=n.altBoundary,m=n.flipVariations,v=void 0===m||m,h=n.allowedAutoPlacements,b=t.options.placement,g=r(b),y=s||(g===b||!v?[B(b)]:function(e){if(r(e)===E.a)return[];var t=B(e);return[T(e),t,T(t)]}(b)),O=[b].concat(y).reduce((function(e,n){return e.concat(r(n)===E.a?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=n.boundary,a=n.rootBoundary,c=n.padding,f=n.flipVariations,s=n.allowedAutoPlacements,u=void 0===s?E.h:s,p=z(o),l=p?f?E.n:E.n.filter((function(e){return z(e)===p})):E.b,d=l.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=l);var m=d.reduce((function(t,n){return t[n]=K(e,{placement:n,boundary:i,rootBoundary:a,padding:c})[r(n)],t}),{});return Object.keys(m).sort((function(e,t){return m[e]-m[t]}))}(t,{placement:n,boundary:p,rootBoundary:l,padding:u,flipVariations:v,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,j=new Map,k=!0,D=O[0],A=0;A<O.length;A++){var M=O[A],L=r(M),C=z(M)===E.l,R=[E.m,E.c].indexOf(L)>=0,P=R?"width":"height",W=K(t,{placement:M,boundary:p,rootBoundary:l,altBoundary:d,padding:u}),S=R?C?E.k:E.f:C?E.c:E.m;w[P]>x[P]&&(S=B(S));var H=B(S),q=[];if(a&&q.push(W[L]<=0),f&&q.push(W[S]<=0,W[H]<=0),q.every((function(e){return e}))){D=M,k=!1;break}j.set(M,q)}if(k)for(var N=function(e){var t=O.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return D=t,"break"},U=v?3:1;U>0;U--){if("break"===N(U))break}t.placement!==D&&(t.modifiersData[o]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function X(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Y(e){return[E.m,E.k,E.c,E.f].some((function(t){return e[t]>=0}))}var G={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=K(t,{elementContext:"reference"}),c=K(t,{altBoundary:!0}),f=X(a,r),s=X(c,o,i),u=Y(f),p=Y(s);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:s,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}};var Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,i=n.offset,a=void 0===i?[0,0]:i,c=E.h.reduce((function(e,n){return e[n]=function(e,t,n){var o=r(e),i=[E.f,E.m].indexOf(o)>=0?-1:1,a="function"===typeof n?n(Object.assign({},t,{placement:e})):n,c=a[0],f=a[1];return c=c||0,f=(f||0)*i,[E.f,E.k].indexOf(o)>=0?{x:f,y:c}:{x:c,y:f}}(n,t.rects,a),e}),{}),f=c[t.placement],s=f.x,u=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=c}};var Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=_({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var $={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,a=n.mainAxis,c=void 0===a||a,f=n.altAxis,s=void 0!==f&&f,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.padding,m=n.tether,v=void 0===m||m,h=n.tetherOffset,w=void 0===h?0:h,j=K(t,{boundary:u,rootBoundary:p,padding:d,altBoundary:l}),k=r(t.placement),D=z(t.placement),A=!D,M=g(k),L="x"===M?"y":"x",C=t.modifiersData.popperOffsets,R=t.rects.reference,P=t.rects.popper,B="function"===typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,W={x:0,y:0};if(C){if(c||s){var T="y"===M?E.m:E.f,S="y"===M?E.c:E.k,H="y"===M?"height":"width",q=C[M],N=C[M]+j[T],U=C[M]-j[S],F=v?-P[H]/2:0,I=D===E.l?R[H]:P[H],V=D===E.l?-P[H]:-R[H],_=t.elements.arrow,J=v&&_?i(_):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=X[T],G=X[S],Q=x(0,R[H],J[H]),Z=A?R[H]/2-F-Q-Y-B:I-Q-Y-B,$=A?-R[H]/2+F+Q+G+B:V+Q+G+B,ee=t.elements.arrow&&b(t.elements.arrow),te=ee?"y"===M?ee.clientTop||0:ee.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][M]:0,re=C[M]+Z-ne-te,oe=C[M]+$-ne;if(c){var ie=x(v?O(N,re):N,q,v?y(U,oe):U);C[M]=ie,W[M]=ie-q}if(s){var ae="x"===M?E.m:E.f,ce="x"===M?E.c:E.k,fe=C[L],se=fe+j[ae],ue=fe-j[ce],pe=x(v?O(se,re):se,fe,v?y(ue,oe):ue);C[L]=pe,W[L]=pe-fe}}t.modifiersData[o]=W}},requiresIfExists:["offset"]};function ee(e,t,n){void 0===n&&(n=!1);var r=m(t),i=o(e),c=f(t),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(c||!c&&!n)&&(("body"!==p(t)||q(r))&&(s=function(e){return e!==a(e)&&f(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:S(e);var t}(t)),f(t)?((u=o(t)).x+=t.clientLeft,u.y+=t.clientTop):r&&(u.x=H(r))),{x:i.left+s.scrollLeft-u.x,y:i.top+s.scrollTop-u.y,width:i.width,height:i.height}}function te(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function ne(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var re={placement:"bottom",modifiers:[],strategy:"absolute"};function oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ie(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?re:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},re,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],s=!1,u={state:o,setOptions:function(n){p(),o.options=Object.assign({},a,o.options,n),o.scrollParents={reference:c(e)?U(e):e.contextElement?U(e.contextElement):[],popper:U(t)};var i=function(e){var t=te(e);return E.g.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=i.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),c=function(){};f.push(a||c)}})),u.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(oe(t,n)){o.rects={reference:ee(t,b(n),"fixed"===o.options.strategy),popper:i(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var a=o.orderedModifiers[r],c=a.fn,f=a.options,p=void 0===f?{}:f,l=a.name;"function"===typeof c&&(o=c({state:o,options:p,name:l,instance:u})||o)}else o.reset=!1,r=-1}}},update:ne((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){p(),s=!0}};if(!oe(e,t))return u;function p(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var ae=ie({defaultModifiers:[G,Z,L,R,Q,J,$,D]})},167:function(e,t,n){"use strict";var r=n(8),o=n(11),i=n(0),a=n(134);var c=function(e){var t=Object(a.a)();return[e[0],Object(i.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]},f=n(166),s=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},u={name:"applyStyles",enabled:!1},p={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?a+","+r.id:r.id)}}},l=[];t.a=function(e,t,n){var a=void 0===n?{}:n,d=a.enabled,m=void 0===d||d,v=a.placement,h=void 0===v?"bottom":v,b=a.strategy,g=void 0===b?"absolute":b,y=a.modifiers,O=void 0===y?l:y,w=Object(o.a)(a,["enabled","placement","strategy","modifiers"]),x=Object(i.useRef)(),j=Object(i.useCallback)((function(){var e;null==(e=x.current)||e.update()}),[]),k=Object(i.useCallback)((function(){var e;null==(e=x.current)||e.forceUpdate()}),[]),E=c(Object(i.useState)({placement:h,update:j,forceUpdate:k,attributes:{},styles:{popper:s(g),arrow:{}}})),D=E[0],A=E[1],M=Object(i.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),A({state:t,styles:n,attributes:r,update:j,forceUpdate:k,placement:t.placement})}}}),[j,k,A]);return Object(i.useEffect)((function(){x.current&&m&&x.current.setOptions({placement:h,strategy:g,modifiers:[].concat(O,[M,u])})}),[g,h,M,m]),Object(i.useEffect)((function(){if(m&&null!=e&&null!=t)return x.current=Object(f.a)(e,t,Object(r.a)({},w,{placement:h,strategy:g,modifiers:[].concat(O,[p,M])})),function(){null!=x.current&&(x.current.destroy(),x.current=void 0,A((function(e){return Object(r.a)({},e,{attributes:{},styles:{popper:s(g)}})})))}}),[m,e,t]),D}},168:function(e,t,n){"use strict";var r=n(132),o=n(47),i=n(0),a=n(34),c=n(77),f=n.n(c),s=n(53),u=n(130),p=function(){};var l=function(e){return e&&("current"in e?e.current:e)};t.a=function(e,t,n){var c=void 0===n?{}:n,d=c.disabled,m=c.clickTrigger,v=void 0===m?"click":m,h=Object(i.useRef)(!1),b=t||p,g=Object(i.useCallback)((function(t){var n,o=l(e);f()(!!o,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),h.current=!o||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||!!Object(r.a)(o,t.target)}),[e]),y=Object(a.a)((function(e){h.current||b(e)})),O=Object(a.a)((function(e){27===e.keyCode&&b(e)}));Object(i.useEffect)((function(){if(!d&&null!=e){var t,n=window.event,r=(t=l(e),Object(s.a)(Object(u.a)(t))),i=Object(o.a)(r,v,g,!0),a=Object(o.a)(r,v,(function(e){e!==n?y(e):n=void 0})),c=Object(o.a)(r,"keyup",(function(e){e!==n?O(e):n=void 0})),f=[];return"ontouchstart"in r.documentElement&&(f=[].slice.call(r.body.children).map((function(e){return Object(o.a)(e,"mousemove",p)}))),function(){i(),a(),c(),f.forEach((function(e){return e()}))}}}),[e,d,v,g,y,O])}}}]);
//# sourceMappingURL=0.1b2db29d.chunk.js.map