"use strict";(self.webpackChunkui_react=self.webpackChunkui_react||[]).push([[359],{54565:(t,n,e)=>{e.d(n,{I:()=>r});var r=function(t){return(null==t?void 0:t.split(".").pop())||""}},66915:(t,n,e)=>{e.d(n,{f:()=>r});var r=function(t){return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d").replace(/([^\\*])/g,"$1\\s*")}},32761:(t,n,e)=>{function r(){var t=new Map;return{subscribe:function(n,e){var r;t.has(n)?null===(r=t.get(n))||void 0===r||r.add(e):t.set(n,new Set([e]));return this},once:function(t,n){var e=this;return this.subscribe(t,(function r(o){e.unsubscribe(t,r),n(o)})),this},unsubscribe:function(n,e){return t.has(n)&&t.get(n).delete(e),this},emit:function(n,e){var r;t.has(n)&&(null===(r=t.get(n))||void 0===r||r.forEach((function(t){return t(e)})));return this}}}e.d(n,{$:()=>o,u:()=>r});var o=r()},92490:(t,n,e)=>{e.d(n,{V:()=>p});var r=e(75611),o=e(69337),i=e(15135);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t,n,e){return(n=function(t){var n=function(t,n){if("object"!=u(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==u(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return s(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var f={type:"",key:"",id:"",isMainGrid:!1,size:r.lx.FULL_VIEW,content:[]},y={id:"",key:"",label:"",isActive:!1,isCloseable:!1,isMainGridTab:!1},d=function(t){return Object.hasOwn(t,"ColsCount")},p=function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(Array.isArray(n)){var u=structuredClone(f);return n.forEach((function(n){var r=t(n,e);!Array.isArray(r)&&r&&u.content.push(r)})),u.type=function(t){return 1===t.length&&1===t[0].Content.length?r.Nr.STACK:1===t.length&&t[0].Content.length>1?r.Nr.ROW:t.length>1?r.Nr.COLUMN:""}(n),u.id="".concat(u.type,"-").concat(u.content[0].id.replace(/\s/g,"")),u.key=u.id,1===u.content.length?u.content[0]:u}if(d(n)){var s=structuredClone(f);return s.type=function(t){return 1===t.ColsCount&&1===t.Content.length?r.Nr.STACK:1===t.ColsCount&&t.Content.length>1?r.Nr.COLUMN:t.ColsCount>1&&t.Content.length<=t.ColsCount?r.Nr.ROW:""}(n),n.Content.forEach((function(n){var r,i=t(n,e);i&&(0,o.g)(i)&&i.type===s.type?(s.isMainGrid=i.isMainGrid,(r=s.content).push.apply(r,l(i.content))):i&&s.content.push(i)})),s.content.length&&(s.id="".concat(s.type,"-").concat(s.content[0].id.replace(/\s/g,"")),s.key=s.id),s}if(!d(n)){var p,m=structuredClone(f);return m.type=r.Nr.STACK,null===(p=n.Stack)||void 0===p||p.forEach((function(t){t.Key!==r.qT.MAIN&&e.push(t.Key);var o=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},y);t.Key===n.Key&&(o.isActive=!0),o.id=t.Key,o.key=o.id,t.Key===i.o.EDITOR?o.label=i.V[i.o.EDITOR].label:t.Key===r.qT.MAIN?(o.isMainGridTab=!0,o.label=r.nx[r.qT.MAIN].label,m.isMainGrid=!0):o.label=o.id,m.content.push(o)})),m.content.length&&(m.id="".concat(m.type,"-").concat(m.content[0].id.replace(/\s/g,"")),m.key=m.id),m}}},26867:(t,n,e)=>{e.d(n,{q:()=>a});var r=e(75611),o=e(69337),i=e(15135),u=function(t){var n,e={ColsCount:1,Content:[],_t:r.fT.LAYOUT_ELEMENT},o={Key:"",Stack:[],_t:r.fT.LAYOUT_STACK_ELEMENT};return t.content.forEach((function(t){var n;(t.isActive&&(o.Key=t.id),t.id!==i.o.EDITOR_TRANSITION)&&(null===(n=o.Stack)||void 0===n||n.push({Key:t.id,_t:r.fT.LAYOUT_STACK_ELEMENT}))})),o.Key===i.o.EDITOR_TRANSITION&&null!==(n=o.Stack)&&void 0!==n&&n.length&&(o.Key=o.Stack[0].Key),e.Content.push(o),e},a=function t(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n.type===r.Nr.COLUMN){var i=[];return n.content.forEach((function(n){if((0,o.g)(n)&&n.type===r.Nr.STACK){var e=u(n);i.push(e)}if((0,o.g)(n)&&n.type===r.Nr.ROW){var a={ColsCount:n.content.length,Content:[],_t:r.fT.LAYOUT_ELEMENT};n.content.forEach((function(n){var e=t(n);if(e&&!Array.isArray(e)&&a.Content.push(e),e&&Array.isArray(e)){var o={ColsCount:1,Content:e,_t:r.fT.LAYOUT_ELEMENT};a.Content.push(o)}})),i.push(a)}})),i}if(n.type===r.Nr.ROW){var a=[],c={ColsCount:n.content.length,Content:[],_t:r.fT.LAYOUT_ELEMENT};return n.content.forEach((function(n){if((0,o.g)(n)&&n.type===r.Nr.STACK&&c.Content.push(u(n)),(0,o.g)(n)&&n.type===r.Nr.COLUMN){var e={ColsCount:1,Content:[],_t:r.fT.LAYOUT_ELEMENT};n.content.forEach((function(n){var o=t(n);if(o&&!Array.isArray(o)&&e.Content.push(o),o&&Array.isArray(o)){var i={ColsCount:n.content.length,Content:o,_t:r.fT.LAYOUT_ELEMENT};e.Content.push(i)}})),c.Content.push(e)}})),a.push(c),a}if(n.type===r.Nr.STACK){var l=u(n);return e?[l]:l}}},71063:(t,n,e)=>{e.d(n,{BB:()=>c,HJ:()=>a,He:()=>l,po:()=>u});var r=e(70794),o=e(41272);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var u=function(t){switch(t){case"Long":case"Bool":return"basic";case"Int":case"Double":return function(t,n,e){var r=t.values[e],i=n.values[e];return(0,o.i2)(r)&&(0,o.i2)(i)?0:(0,o.i2)(r)?1:(0,o.i2)(i)||r<i?-1:r>i?1:0};case"Time":return function(t,n,e){var r=t.values[e],i=n.values[e];if(!(0,o.HD)(r)&&!(0,o.HD)(i))return 0;if(!(0,o.HD)(r))return 1;if(!(0,o.HD)(i))return-1;var u=o.as.create(r,o.$P.TIME_MS),a=o.as.create(i,o.$P.TIME_MS);return u.sort(a)};default:return"alphanumeric"}},a=function(t){return t.map((function(t){var n=t.Name;return{id:n,key:n,label:n,isCloseable:!1}}))},c=function(t){if((0,o.Yd)(t))return"";if(r.Z.isBigNumber(t))return t.toString();if((0,o.Kn)(t))return JSON.stringify(t);switch(i(t)){case"bigint":case"number":case"boolean":case"symbol":return t.toString();case"string":return t;default:return""}},l=function(t){if(r.Z.isBigNumber(t))return t;switch(i(t)){case"number":return t;case"boolean":return Number(t);case"string":return(0,o.T8)(t);default:return 0}}},83096:(t,n,e)=>{e.d(n,{o:()=>u});var r=e(46477),o=e(73285),i=e(41272),u=function(t,n){if(o.O.isLogsPanel)return null;if(t===r.P.ERROR&&(0,i.HD)(n)){var e={response:{data:{UserMessage:n}}};return i.Am[t](e)}return i.Am[t](n)}},97815:(t,n,e)=>{e.d(n,{J:()=>o});var r=function(t){return t[t.FIVE_HUNDRED_MILLISECONDS=500]="FIVE_HUNDRED_MILLISECONDS",t[t.ONE_SECOND=1e3]="ONE_SECOND",t[t.TWO_SECONDS=2e3]="TWO_SECONDS",t[t.FIVE_SECONDS=5e3]="FIVE_SECONDS",t}(r||{}),o=function(t){var n=Date.now();return n-t<r.TWO_SECONDS?r.FIVE_HUNDRED_MILLISECONDS:n-t<r.FIVE_SECONDS?r.ONE_SECOND:r.FIVE_SECONDS}},51452:(t,n,e)=>{e.d(n,{k:()=>a,l:()=>c.l});var r=e(67294),o=e(78560);function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(t,n){if(t){if("string"==typeof t)return u(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function a(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=i((0,o.Z)(Boolean(t)),2),e=n[0],u=n[1],a=u.toggle,c=u.set;return[e,(0,r.useMemo)((function(){return{toggle:a,set:function(t){return c(Boolean(t))},setTrue:function(){return c(!0)},setFalse:function(){return c(!1)}}}),[])]}var c=e(68885)},68885:(t,n,e)=>{e.d(n,{C:()=>s,l:()=>f});var r=e(67294),o=e(74043),i=e(86388);function u(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||c(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){if(t){if("string"==typeof t)return l(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,n):void 0}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var s=function(t){return t[t.TABS=202]="TABS",t[t.HANDLERS=200]="HANDLERS",t}({}),f=function(t){var n=t.elements,e=void 0===n?[]:n,u=t.elementWidth,c=void 0===u?s.TABS:u,l=t.reorderOptions,f=(0,r.useRef)(null),p=(0,r.useRef)(null),m=a((0,r.useState)(-1),2),b=m[0],v=m[1],h=a((0,r.useState)({necessaryWidths:[],dropdownWidth:0}),2),g=h[0],S=h[1];(0,r.useLayoutEffect)((function(){if(f.current&&p.current){var t=y(f.current,p.current,e.length,c),n=t.dropdownWidth,r=t.necessaryWidths,o=t.containerWidth,i=d({containerWidth:o,necessaryWidths:r,dropdownWidth:n});if(l){var u=l.activeElementIndex,a=l.isCurrentlyDragging,s=l.onReorderElements;i<e.length-1&&u>i&&!a&&o&&s(e,u,b<u?u-1:b)}S({dropdownWidth:n,necessaryWidths:r}),v(i)}}),[e.length,e,b,null==l?void 0:l.activeElementIndex]);var Z=b<e.length-1,E=-1===b?e:e.slice(0,b+1),A=e.slice(b+1),O=(0,i.Z)({onResize:function(){if(f.current){var t=d({containerWidth:f.current.getBoundingClientRect().width,necessaryWidths:g.necessaryWidths,dropdownWidth:g.dropdownWidth});t!==b&&v(t)}}}).ref;return{elementsRef:(0,o.qq)([O,f]),dropdownRef:p,visibleElements:E,hiddenElements:A,isDropdownButtonVisible:Z}},y=function(t,n,e,r){var o=t.getBoundingClientRect().width;return{dropdownWidth:n.getBoundingClientRect().width||0,necessaryWidths:Array(e).fill(0).reduce((function(t,n,e){var o=r*e+r;return[].concat(u(t),[o])}),[]),containerWidth:o}},d=function(t){var n=t.necessaryWidths,e=t.containerWidth,r=t.dropdownWidth;if(n[n.length-1]<e)return n.length-1;var o=n.filter((function(t){return t+r<e}));return o.length?o.length-1:0}},78560:(t,n,e)=>{e.d(n,{Z:()=>u});var r=e(67294);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(t,n){if(t){if("string"==typeof t)return i(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}const u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0,e=o((0,r.useState)(t),2),i=e[0],u=e[1];return[i,(0,r.useMemo)((function(){var e=void 0===n?!t:n;return{toggle:function(){return u((function(n){return n===t?e:t}))},set:function(t){return u(t)},setLeft:function(){return u(t)},setRight:function(){return u(e)}}}),[])]}},51879:(t,n,e)=>{e.d(n,{C:()=>An});var r=e(84624),o=e(57594),i=e(23632),u=e(95268),a=e(85525),c=e(27759),l=e(9254),s=e(70528),f=e(85266),y=e(27155),d=e(5961),p=e(71653),m=e(50546),b=e(60926),v=e(58276),h=e(46238),g=e(77446),S=e(95566),Z=e(57426),E=e(99320),A=e(39485),O=e(72310),N=e(6237),T=e(62372),w=e(23721),C=e(50890),I=e(70114),M=e(64561),D=e(88596),R=e(70602),j=e(26404),_=e(94808),L=e(4043),P=e(1177),U=e(60063),B=e(29770),k=e(26418),x=e(34158),W=e(13114),H=e(70449),K=e(74006),Y=e(82408),F=e(42605),q=e(84140),V=e(38826),$=e(13333),G=e(67630),z=e(81599),J=e(95569),Q=e(53833),X=e(82695),tt=e(81234),nt=e(17397),et=e(76374),rt=e(90696),ot=e(35736),it=e(65763),ut=e(5638),at=e(35169),ct=e(66054),lt=e(12536),st=e(24463),ft=e(28484),yt=e(23526),dt=e(18048),pt=e(90440),mt=e(28646),bt=e(70177),vt=e(49867),ht=e(80900),gt=e(45768),St=e(4322),Zt=e(40898),Et=e(72828),At=e(58069),Ot=e(90421),Nt=e(20954),Tt=e(376),wt=e(34546),Ct=e(37310),It=e(32535),Mt=e(66758),Dt=e(13205),Rt=e(68940),jt=e(21313),_t=e(31354),Lt=e(20586),Pt=e(49673),Ut=e(3374),Bt=e(61794),kt=e(23347),xt=e(49103),Wt=e(52512),Ht=e(73517),Kt=e(13271),Yt=e(31137),Ft=e(5058),qt=e(9080),Vt=e(26612),$t=e(79397),Gt=e(15110),zt=e(16027),Jt=e(56153),Qt=e(6646),Xt=e(76168),tn=e(56930),nn=e(96781),en=e(92891),rn=e(69686),on=e(20458),un=e(94494),an=e(23009),cn=e(76014),ln=e(6906),sn=e(84219),fn=e(49168),yn=e(54274),dn=e(62890),pn=e(52486),mn=e(22485),bn=e(20322),vn=e(392),hn=e(53793),gn=e(54391),Sn=e(28414),Zn=e(37100),En=e(21490),An={add:r.Z,alightCenter:o.Z,alignLeft:i.Z,alignRight:u.Z,applyLarge:a.Z,arrowDown:c.Z,arrowUp:l.Z,arrowRight:s.Z,attach:f.Z,bell:y.Z,bigClose:d.Z,bold:p.Z,build:St.Z,burger:b.Z,burgerLarge:m.Z,calendar:v.Z,chatAbout:h.Z,cancelInCirlce:g.Z,cancelRed:jt.Z,clear:S.Z,clearText:Z.Z,clock:E.Z,close:A.Z,connectToDatabase:O.Z,copy:T.Z,copyRecord:N.Z,cross:C.Z,crossSmall:w.Z,dataset:I.Z,download:R.Z,doubleArrowDown:j.Z,excel:_.Z,delete:M.Z,deleteForever:D.Z,fillArrowDown:L.Z,filter:P.Z,goToArray:U.Z,goToType:B.Z,goToObject:k.Z,handler:x.Z,history:W.Z,italic:H.Z,justif:K.Z,key:Y.Z,keyMedium:F.Z,language:gt.Z,maximize:q.Z,minimize:V.Z,newRecord:$.Z,noSort:G.Z,numberingList:z.Z,openExcelAddin:J.Z,openJson:Q.Z,pin:X.Z,refresh:tt.Z,run:nt.Z,savePermanently:et.Z,scrollAutomatically:rt.Z,search:ot.Z,send:Ct.Z,sendLogs:it.Z,sendLetter:ln.Z,sortAZ:ut.Z,sortZA:at.Z,system:ct.Z,underline:lt.Z,warning:ft.Z,warningSmall:st.Z,successsMedium:yt.Z,serverErrorMedium:dt.Z,speechBubble:En.Z,warningMedium:pt.Z,theme:vt.Z,user:mt.Z,signOut:bt.Z,more:Zt.Z,info:Ot.Z,info2:Nt.Z,info3:Tt.Z,infoMedium:wt.Z,lock:It.Z,startNewChat:Mt.Z,chat:Dt.Z,mask:Rt.Z,file:_t.Z,query:Lt.Z,refreshArrows:Pt.Z,nextArrow:Ut.Z,prevArrow:Bt.Z,prevDoubleArrow:ht.Z,contains:kt.Z,endsWith:xt.Z,startsWith:Wt.Z,equals:Ht.Z,notEqual:Kt.Z,lessThan:Yt.Z,lessThanOrEquals:Ft.Z,greaterThanOrEquals:qt.Z,greaterThan:Vt.Z,resize:$t.Z,play:Gt.Z,goBack:zt.Z,visibilityOn:Jt.Z,visibilityOff:Qt.Z,developLogo:Xt.Z,oktaLogo:tn.Z,windowsLogo:nn.Z,cancelHandlers:en.Z,multiLineEdit:rn.Z,doubleTriangle:on.Z,multipleCheckbox:un.Z,undo:an.Z,saveAs:cn.Z,chatUserIcon:sn.Z,whiteThemeUserIcon:fn.Z,clearFilter:yn.Z,biggerClose:dn.Z,paperClip:pn.Z,insertRow:mn.Z,moveUp:bn.Z,moveDown:vn.Z,deleteCrossed:hn.Z,toBeginIcon2:gn.Z,disquete:Sn.Z,cancelBtn:Zn.Z,addCopyRecord:Et.Z,addNewRecord:At.Z}},41272:(t,n,e)=>{e.d(n,{hv:()=>$.h,$P:()=>Ct,as:()=>It,ni:()=>ct,xN:()=>p.xN,g4:()=>V.g4,Ps:()=>ot.P,rU:()=>p.rU,Iy:()=>it,EG:()=>lt,K9:()=>ht,vB:()=>X,fA:()=>z.f,$0:()=>G.$,sT:()=>vt,y4:()=>ut,jM:()=>Y,aW:()=>gt,I6:()=>a,HJ:()=>u.HJ,HY:()=>r,sx:()=>Mt,kJ:()=>g,cy:()=>I,Pj:()=>L,gG:()=>_,Bj:()=>w,zB:()=>D,Bl:()=>N,Lt:()=>wt,$K:()=>b,xb:()=>Z,ke:()=>E,VZ:()=>s,Sw:()=>W,hW:()=>C,GN:()=>R,hg:()=>l,i2:()=>h,Tk:()=>q,Yd:()=>v,hj:()=>A,l7:()=>F,Kn:()=>S,kx:()=>M,l1:()=>T,HD:()=>O,rK:()=>j,T8:()=>Q,t7:()=>i,Oe:()=>rt,ld:()=>o,qC:()=>nt,He:()=>u.He,BB:()=>u.BB,Am:()=>bt});var r=function(t,n){t.stopPropagation();var e=new CustomEvent("closesearchmenu");document.dispatchEvent(e);var r=n[t.button];return r&&r()},o=function(t,n){return-1!==t.toLowerCase().search(n.trimStart().toLowerCase())},i=function(){window.Plotly&&Array.from(document.querySelectorAll(".plotly-graph-div")).map((function(t){return t.getAttribute("id")})).filter((function(t){return Boolean(t)})).forEach((function(t){return window.Plotly.Plots.resize(t)}))},u=e(71063),a=function(t){var n;if(!v(t)&&(n=t.ViewOf,S(n)&&"_t"in n))return t.ViewOf._t},c=e(74823),l=function(t){return t.some((function(t){return t===c.gN.INITIAL||t===c.gN.LOADING}))},s=function(t){return t.some((function(t){return t===c.gN.ERROR}))},f=e(49370),y=e(70794),d=e(66752),p=e(45890);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}var b=function(t){return null!=t},v=function(t){return null==t},h=function(t){return v(t)||Number.isNaN(t)},g=function(t){return Array.isArray(t)},S=function(t){return"object"===m(t)&&!g(t)&&null!==t},Z=function(t){return S(t)&&0===Object.keys(t).length},E=function(t){return"string"==typeof t&&0===t.length},A=function(t){return b(t)&&"number"==typeof t},O=function(t){return b(t)&&"string"==typeof t},N=function(t){return"boolean"==typeof t},T=function(t){return!g(t)&&("object"!==m(t)||y.Z.isBigNumber(t)||v(t))},w=function(t){return g(t)&&t.length>0&&t.every(T)},C=function(t){return S(t)},I=function(t){return g(t)&&t.length>0&&t.every(C)},M=function(t){return!!b(t)&&p.Ik.some((function(n){return n===t}))},D=function(t){return"object"===m(t)&&g(t)&&t.length>0},R=function(t){return A(t)&&Number.isInteger(t)},j=function(t){return"true"===String(t)||"false"===String(t)},_=function(t){return g(t)&&t.length>0&&t.every(O)},L=function(t){return g(t)&&t.length>0&&t.every(S)};function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function U(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(r=i.call(e)).done)&&(a.push(r.value),a.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(u=e.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(t,n){if(t){if("string"==typeof t)return B(t,n);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?B(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var k=["Int","Double","Long"],x=function(t,n){return y.Z.isBigNumber(t)?t.abs().isLessThan(n):Math.abs(t)<n},W=function(t){var n=t.toPrecision();return/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)/g.test(n)},H=function(t,n,e,r){if(e.toString().includes("e"))return".".concat(t);if(r===p.xN.NUMBER_PERCENT||r===p.xN.NUMBER_BASIS_POINT)return".00";var o=null==r?void 0:r.match(/:(,?)(\.\d+)?f/);if(o){var i=U(o,3)[2],u=i?parseInt(i.slice(1),10):0;return u>0?".".concat("0".repeat(u)):""}return".".concat(n)},K=function(t,n,e,r){var o=!function(t){return x(t,1e-10)}(t)&&W(t)?"e+0":"",i=function(t){return x(t,1)}(t)?"####":"##",u="00";r&&r>100?u="00":r&&r>1&&r<=100?u="0000":r&&r>0&&r<=1&&(u="000000");var a="0,0".concat("Double"===e?H(i,u,t,n):".".concat(i)).concat(o),c="0".concat("Double"===e?H(i,u,t,n):".".concat(i)).concat(o);if(e===d.p1.INT&&n!==d.p1.NUMBER)return c;switch(n){case p.xN.NUMBER_AMOUNT:return"$".concat(a);case p.xN.NUMBER_BASIS_POINT:return"".concat(a,"bp");case p.xN.NUMBER_PERCENT:return"".concat(a,"%");default:return a}},Y=function(t,n,e,r){if(!b(t)||E(t))return"";var o=y.Z.isBigNumber(t)?t:+t;return n===p.xN.NUMBER_BASIS_POINT&&"number"==typeof o&&(o*=1e4),"boolean"==typeof t?(0,f.Z)(t.toString(),K(o,n,e,r)):(0,f.Z)(o.toString(),K(o,n,e,r))},F=function(t){return t&&k.includes(t)},q=function(t){if(y.Z.isBigNumber(t))return new y.Z(t).isNegative();if(!b(t)||N(t)||"object"===P(t))return!1;var n=O(t)?t.replaceAll(",",""):t;return A(Number(n))&&Number(n)<0},V=e(21285),$=e(11548),G=e(32761),z=e(66915),J=e(4163);y.Z.config({EXPONENTIAL_AT:1e9});var Q=function(t){return(0,J.RH)(t)?parseFloat(t):(0,y.Z)(t)},X=function(t){return(0,J.Qc)(t,void 0,Q)},tt={test:function(t){return y.Z.isBigNumber(t)},stringify:function(t){return t.valueOf()}},nt=function(t,n,e){return(0,J.Pz)(t,n,e,[tt])},et=e(75611),rt=function(t){var n,e;return{type:et.Nr.COLUMN,key:"column-stack-main",id:"column-stack-main",isMainGrid:!1,size:et.lx.FULL_VIEW,content:[{type:et.Nr.STACK,key:"stack-".concat(et.qT.MAIN),id:"stack-".concat(et.qT.MAIN),isMainGrid:!0,size:et.lx.DEFAULT,content:[et.nx[et.qT.MAIN]]},{type:et.Nr.STACK,key:"stack-".concat((null===(n=t[0])||void 0===n?void 0:n.id)||1),id:"stack-".concat((null===(e=t[0])||void 0===e?void 0:e.id)||1),isMainGrid:!1,size:et.lx.DEFAULT,content:t}]}},ot=e(46477),it=function(t){if(navigator.clipboard)return navigator.clipboard.writeText(t);var n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),Promise.resolve()}catch(t){return Promise.reject(t)}finally{document.body.removeChild(n)}},ut=function(t){return b(t)?t.split("filename=")[1]:""},at=e(93674),ct="errorNotification",lt=function(){at.A.setIsErrorNotification(!0),window.dispatchEvent(new Event(ct))},st=e(28721);function ft(t){return ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(t)}function yt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function dt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?yt(Object(e),!0).forEach((function(n){pt(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):yt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function pt(t,n,e){return(n=function(t){var n=function(t,n){if("object"!=ft(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=ft(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==ft(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var mt=function(t){var n=t.type,e=t.content;at.A.addToast(dt(dt({},t),{},{id:(0,st.Z)(),content:n===ot.P.ERROR&&e?(0,c.e$)(e):e})),window.dispatchEvent(new Event("storage"))},bt={success:function(t,n){return mt({type:ot.P.SUCCESS,content:t,options:n})},error:function(t,n){var e,r;if(null==t||null===(e=t.response)||void 0===e||!e.data)return mt({type:ot.P.ERROR,content:"Functionality not supported in this release. Please contact your support team for further assistance.",options:n});if(lt(),"string"==typeof t.response.data){var o=JSON.parse(t.response.data);mt({type:ot.P.ERROR,content:null==o?void 0:o.UserMessage,options:n})}null!=t&&null!==(r=t.response)&&void 0!==r&&null!==(r=r.data)&&void 0!==r&&r.UserMessage&&mt({type:ot.P.ERROR,content:t,options:n})},warning:function(t,n){return mt({type:ot.P.WARNING,content:t,options:n})},info:function(t,n){return mt({type:ot.P.INFO,content:t,options:n})}},vt=(e(85891),function(t){return new Promise((function(n,e){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return n(r.result.split(",")[1])},r.onerror=e}))}),ht=function(t){for(var n=window.atob(t),e=n.length,r=new Uint8Array(e),o=0;o<e;o++)r[o]=n.charCodeAt(o);return r},gt=function(t){if(new Uint8Array(t).length>=4){for(var n=new Array(4),e=0;e<4;e++)n[e]=new Uint8Array(t)[e].toString(16);switch(n.join("").toUpperCase()){case"89504E47":return"image/png";case"47494638":return"image/gif";case"25504446":return"application/pdf";case"FFD8FFDB":case"FFD8FFE0":return"image/jpeg";case"504B0304":return"application/zip";case"504B34":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";default:return null}}return null},St=e(27484),Zt=e.n(St),Et=e(84110),At=e.n(Et),Ot=e(70178),Nt=e.n(Ot);Zt().extend(At()),Zt().extend(Nt());var Tt=["Date","Time","DateTime"],wt=function(t){return!!t&&Tt.includes(t)},Ct=function(t){return t.DATE="YYYY-MM-DD",t.DATE_TIME="YYYY-MM-DD HH:mm:ss",t.TIME="HH:mm:ss",t.TIME_MS="HH:mm:ss.SSS",t.DATE_TIME_MS="YYYY-MM-DDTHH-mm-ss-SSS",t.TIME_DATE="HH:mm:ss YYYY-MM-DD",t}({});var It={create:function t(n,e){var r=Zt()(n,e);return{format:function(t){return r.format(t)},subtract:function(t,n){return o(r.clone().subtract(t,n))},fromNow:function(t){return r.fromNow(t)},add:function(t,n){return o(r.clone().add(t,n))},diff:function(t,n,e){return r.diff(t,n,e)},unix:function(){return r.unix()},sort:function(t){return r.isBefore(t.toInstance())?-1:r.isAfter(t.toInstance())?1:0},toDate:function(){return r.toDate()},toInstance:function(){return r},isValid:function(){return r.isValid()},utcString:r.utc().format()};function o(n){return t(n)}}},Mt=function(t,n,e,r){return!(!e||!r)&&(t.length===n.length&&t.every((function(t){return n.find((function(n){return n===t.id}))})))}}}]);