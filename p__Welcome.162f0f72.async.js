(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+KLJ":function(B,P,e){"use strict";var i=e("wx14"),p=e("rePB"),a=e("ODXe"),y=e("q1tI"),I=e("4i/N"),K=e("Ue1A"),x=e("RCxd"),v=e("+YFz"),G=e("2BaD"),Q=e("jO45"),ae=e("IMoZ"),Z=e("zueq"),D=e("jN4g"),$=e("8XRh"),q=e("TSYQ"),T=e.n(q),ge=e("H84U");function Je(R){return Object.keys(R).reduce(function(g,E){return(E.substr(0,5)==="data-"||E.substr(0,5)==="aria-"||E==="role")&&E.substr(0,7)!=="data-__"&&(g[E]=R[E]),g},{})}var Qe=e("1OyB"),Ie=e("vuIU"),Te=e("Ji7U"),C=e("LK+K"),d=function(R){Object(Te.a)(E,R);var g=Object(C.a)(E);function E(){var M;return Object(Qe.a)(this,E),M=g.apply(this,arguments),M.state={error:void 0,info:{componentStack:""}},M}return Object(Ie.a)(E,[{key:"componentDidCatch",value:function(U,V){this.setState({error:U,info:V})}},{key:"render",value:function(){var U=this.props,V=U.message,ne=U.description,de=U.children,ye=this.state,ue=ye.error,Ee=ye.info,Me=Ee&&Ee.componentStack?Ee.componentStack:null,Le=typeof V=="undefined"?(ue||"").toString():V,Re=typeof ne=="undefined"?Me:ne;return ue?y.createElement(me,{type:"error",message:Le,description:y.createElement("pre",null,Re)}):de}}]),E}(y.Component),S=e("0n0R"),c=function(R,g){var E={};for(var M in R)Object.prototype.hasOwnProperty.call(R,M)&&g.indexOf(M)<0&&(E[M]=R[M]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,M=Object.getOwnPropertySymbols(R);U<M.length;U++)g.indexOf(M[U])<0&&Object.prototype.propertyIsEnumerable.call(R,M[U])&&(E[M[U]]=R[M[U]]);return E},b={success:Q.a,info:Z.a,error:D.a,warning:ae.a},Oe={success:K.a,info:v.a,error:G.a,warning:x.a},ce=function(g){var E,M=g.description,U=g.prefixCls,V=g.message,ne=g.banner,de=g.className,ye=de===void 0?"":de,ue=g.style,Ee=g.onMouseEnter,Me=g.onMouseLeave,Le=g.onClick,Re=g.afterClose,Ce=g.showIcon,Ue=g.closable,be=g.closeText,he=g.action,O=c(g,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),De=y.useState(!1),Se=Object(a.a)(De,2),We=Se[0],Ve=Se[1],ze=y.useRef(),we=y.useContext(ge.b),ke=we.getPrefixCls,A=we.direction,z=ke("alert",U),k=function(H){var ve;Ve(!0),(ve=O.onClose)===null||ve===void 0||ve.call(O,H)},Ae=function(){var H=O.type;return H!==void 0?H:ne?"warning":"info"},xe=be?!0:Ue,He=Ae(),$e=function(){var H=O.icon,ve=(M?Oe:b)[He]||null;return H?Object(S.c)(H,y.createElement("span",{className:"".concat(z,"-icon")},H),function(){return{className:T()("".concat(z,"-icon"),Object(p.a)({},H.props.className,H.props.className))}}):y.createElement(ve,{className:"".concat(z,"-icon")})},Fe=function(){return xe?y.createElement("button",{type:"button",onClick:k,className:"".concat(z,"-close-icon"),tabIndex:0},be?y.createElement("span",{className:"".concat(z,"-close-text")},be):y.createElement(I.a,null)):null},_e=ne&&Ce===void 0?!0:Ce,Ye=T()(z,"".concat(z,"-").concat(He),(E={},Object(p.a)(E,"".concat(z,"-with-description"),!!M),Object(p.a)(E,"".concat(z,"-no-icon"),!_e),Object(p.a)(E,"".concat(z,"-banner"),!!ne),Object(p.a)(E,"".concat(z,"-rtl"),A==="rtl"),E),ye),Xe=Je(O);return y.createElement($.b,{visible:!We,motionName:"".concat(z,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(H){return{maxHeight:H.offsetHeight}},onLeaveEnd:Re},function(fe){var H=fe.className,ve=fe.style;return y.createElement("div",Object(i.a)({ref:ze,"data-show":!We,className:T()(Ye,H),style:Object(i.a)(Object(i.a)({},ue),ve),onMouseEnter:Ee,onMouseLeave:Me,onClick:Le,role:"alert"},Xe),_e?$e():null,y.createElement("div",{className:"".concat(z,"-content")},y.createElement("div",{className:"".concat(z,"-message")},V),y.createElement("div",{className:"".concat(z,"-description")},M)),he?y.createElement("div",{className:"".concat(z,"-action")},he):null,Fe())})};ce.ErrorBoundary=d;var me=P.a=ce},"+QRC":function(B,P,e){"use strict";var i=e("E9nw"),p={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function y(K){var x=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return K.replace(/#{\s*key\s*}/g,x)}function I(K,x){var v,G,Q,ae,Z,D,$=!1;x||(x={}),v=x.debug||!1;try{Q=i(),ae=document.createRange(),Z=document.getSelection(),D=document.createElement("span"),D.textContent=K,D.style.all="unset",D.style.position="fixed",D.style.top=0,D.style.clip="rect(0, 0, 0, 0)",D.style.whiteSpace="pre",D.style.webkitUserSelect="text",D.style.MozUserSelect="text",D.style.msUserSelect="text",D.style.userSelect="text",D.addEventListener("copy",function(T){if(T.stopPropagation(),x.format)if(T.preventDefault(),typeof T.clipboardData=="undefined"){v&&console.warn("unable to use e.clipboardData"),v&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ge=p[x.format]||p.default;window.clipboardData.setData(ge,K)}else T.clipboardData.clearData(),T.clipboardData.setData(x.format,K);x.onCopy&&(T.preventDefault(),x.onCopy(T.clipboardData))}),document.body.appendChild(D),ae.selectNodeContents(D),Z.addRange(ae);var q=document.execCommand("copy");if(!q)throw new Error("copy command was unsuccessful");$=!0}catch(T){v&&console.error("unable to copy using execCommand: ",T),v&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(x.format||"text",K),x.onCopy&&x.onCopy(window.clipboardData),$=!0}catch(ge){v&&console.error("unable to copy using clipboardData: ",ge),v&&console.error("falling back to prompt"),G=y("message"in x?x.message:a),window.prompt(G,K)}}finally{Z&&(typeof Z.removeRange=="function"?Z.removeRange(ae):Z.removeAllRanges()),D&&document.body.removeChild(D),Q()}return $}B.exports=I},"/qDX":function(B,P,e){},"14J3":function(B,P,e){"use strict";var i=e("cIOH"),p=e.n(i),a=e("1GLa")},BMrR:function(B,P,e){"use strict";var i=e("qrJ5");P.a=i.a},E9nw:function(B,P){B.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var i=document.activeElement,p=[],a=0;a<e.rangeCount;a++)p.push(e.getRangeAt(a));switch(i.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":i.blur();break;default:i=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||p.forEach(function(y){e.addRange(y)}),i&&i.focus()}}},G3dp:function(B,P,e){"use strict";var i=e("q1tI"),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},a=p,y=e("6VBw"),I=function(v,G){return i.createElement(y.a,Object.assign({},v,{ref:G,icon:a}))};I.displayName="EditOutlined";var K=P.a=i.forwardRef(I)},IzEo:function(B,P,e){"use strict";var i=e("cIOH"),p=e.n(i),a=e("lnY3"),y=e.n(a),I=e("Znn+"),K=e("14J3"),x=e("jCWc")},RyC9:function(B,P,e){"use strict";e.r(P);var i=e("IzEo"),p=e("bx4M"),a=e("fOrg"),y=e("+KLJ"),I=e("tU7J"),K=e("wFql"),x=e("q1tI"),v=e.n(x),G=e("tMyG"),Q=e("9kvl"),ae=e("Ur6u"),Z=e.n(ae),D=function(q){var T=q.children;return v.a.createElement("pre",{className:Z.a.pre},v.a.createElement("code",null,v.a.createElement(K.a.Text,{copyable:!0},T)))};P.default=function(){var $=Object(Q.f)();return v.a.createElement(G.a,null,v.a.createElement(p.a,null,v.a.createElement(y.a,{message:$.formatMessage({id:"pages.welcome.alertMessage",defaultMessage:"\u66F4\u5FEB\u66F4\u5F3A\u7684\u91CD\u578B\u7EC4\u4EF6\uFF0C\u5DF2\u7ECF\u53D1\u5E03\u3002"}),type:"success",showIcon:!0,banner:!0,style:{margin:-12,marginBottom:24}}),v.a.createElement(K.a.Text,{strong:!0},v.a.createElement(Q.a,{id:"pages.welcome.advancedComponent",defaultMessage:"\u9AD8\u7EA7\u8868\u683C"})," ",v.a.createElement("a",{href:"https://procomponents.ant.design/components/table",rel:"noopener noreferrer",target:"__blank"},v.a.createElement(Q.a,{id:"pages.welcome.link",defaultMessage:"\u6B22\u8FCE\u4F7F\u7528"}))),v.a.createElement(D,null,"yarn add @ant-design/pro-table"),v.a.createElement(K.a.Text,{strong:!0,style:{marginBottom:12}},v.a.createElement(Q.a,{id:"pages.welcome.advancedLayout",defaultMessage:"\u9AD8\u7EA7\u5E03\u5C40"})," ",v.a.createElement("a",{href:"https://procomponents.ant.design/components/layout",rel:"noopener noreferrer",target:"__blank"},v.a.createElement(Q.a,{id:"pages.welcome.link",defaultMessage:"\u6B22\u8FCE\u4F7F\u7528"}))),v.a.createElement(D,null,"yarn add @ant-design/pro-layout")))}},Ur6u:function(B,P,e){B.exports={pre:"pre___3fTUI"}},YkAm:function(B,P,e){},bRQS:function(B,P,e){"use strict";var i=e("q1tI"),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},a=p,y=e("6VBw"),I=function(v,G){return i.createElement(y.a,Object.assign({},v,{ref:G,icon:a}))};I.displayName="CheckOutlined";var K=P.a=i.forwardRef(I)},bx4M:function(B,P,e){"use strict";var i=e("rePB"),p=e("wx14"),a=e("q1tI"),y=e("TSYQ"),I=e.n(y),K=e("bT9E"),x=e("H84U"),v=function(C,d){var S={};for(var c in C)Object.prototype.hasOwnProperty.call(C,c)&&d.indexOf(c)<0&&(S[c]=C[c]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,c=Object.getOwnPropertySymbols(C);b<c.length;b++)d.indexOf(c[b])<0&&Object.prototype.propertyIsEnumerable.call(C,c[b])&&(S[c[b]]=C[c[b]]);return S},G=function(d){var S=d.prefixCls,c=d.className,b=d.hoverable,Oe=b===void 0?!0:b,ce=v(d,["prefixCls","className","hoverable"]);return a.createElement(x.a,null,function(me){var R=me.getPrefixCls,g=R("card",S),E=I()("".concat(g,"-grid"),c,Object(i.a)({},"".concat(g,"-grid-hoverable"),Oe));return a.createElement("div",Object(p.a)({},ce,{className:E}))})},Q=G,ae=function(C,d){var S={};for(var c in C)Object.prototype.hasOwnProperty.call(C,c)&&d.indexOf(c)<0&&(S[c]=C[c]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,c=Object.getOwnPropertySymbols(C);b<c.length;b++)d.indexOf(c[b])<0&&Object.prototype.propertyIsEnumerable.call(C,c[b])&&(S[c[b]]=C[c[b]]);return S},Z=function(d){return a.createElement(x.a,null,function(S){var c=S.getPrefixCls,b=d.prefixCls,Oe=d.className,ce=d.avatar,me=d.title,R=d.description,g=ae(d,["prefixCls","className","avatar","title","description"]),E=c("card",b),M=I()("".concat(E,"-meta"),Oe),U=ce?a.createElement("div",{className:"".concat(E,"-meta-avatar")},ce):null,V=me?a.createElement("div",{className:"".concat(E,"-meta-title")},me):null,ne=R?a.createElement("div",{className:"".concat(E,"-meta-description")},R):null,de=V||ne?a.createElement("div",{className:"".concat(E,"-meta-detail")},V,ne):null;return a.createElement("div",Object(p.a)({},g,{className:M}),U,de)})},D=Z,$=e("ZTPi"),q=e("BMrR"),T=e("kPKH"),ge=e("3Nzz"),Je=function(C,d){var S={};for(var c in C)Object.prototype.hasOwnProperty.call(C,c)&&d.indexOf(c)<0&&(S[c]=C[c]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,c=Object.getOwnPropertySymbols(C);b<c.length;b++)d.indexOf(c[b])<0&&Object.prototype.propertyIsEnumerable.call(C,c[b])&&(S[c[b]]=C[c[b]]);return S};function Qe(C){var d=C.map(function(S,c){return a.createElement("li",{style:{width:"".concat(100/C.length,"%")},key:"action-".concat(c)},a.createElement("span",null,S))});return d}var Ie=function(d){var S,c,b=a.useContext(x.b),Oe=b.getPrefixCls,ce=b.direction,me=a.useContext(ge.b),R=function(Ge){d.onTabChange&&d.onTabChange(Ge)},g=function(){var Ge;return a.Children.forEach(d.children,function(Ze){Ze&&Ze.type&&Ze.type===Q&&(Ge=!0)}),Ge},E=d.prefixCls,M=d.className,U=d.extra,V=d.headStyle,ne=V===void 0?{}:V,de=d.bodyStyle,ye=de===void 0?{}:de,ue=d.title,Ee=d.loading,Me=d.bordered,Le=Me===void 0?!0:Me,Re=d.size,Ce=d.type,Ue=d.cover,be=d.actions,he=d.tabList,O=d.children,De=d.activeTabKey,Se=d.defaultActiveTabKey,We=d.tabBarExtraContent,Ve=d.hoverable,ze=d.tabProps,we=ze===void 0?{}:ze,ke=Je(d,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),A=Oe("card",E),z=ye.padding===0||ye.padding==="0px"?{padding:24}:void 0,k=a.createElement("div",{className:"".concat(A,"-loading-block")}),Ae=a.createElement("div",{className:"".concat(A,"-loading-content"),style:z},a.createElement(q.a,{gutter:8},a.createElement(T.a,{span:22},k)),a.createElement(q.a,{gutter:8},a.createElement(T.a,{span:8},k),a.createElement(T.a,{span:15},k)),a.createElement(q.a,{gutter:8},a.createElement(T.a,{span:6},k),a.createElement(T.a,{span:18},k)),a.createElement(q.a,{gutter:8},a.createElement(T.a,{span:13},k),a.createElement(T.a,{span:9},k)),a.createElement(q.a,{gutter:8},a.createElement(T.a,{span:4},k),a.createElement(T.a,{span:3},k),a.createElement(T.a,{span:16},k))),xe=De!==void 0,He=Object(p.a)(Object(p.a)({},we),(S={},Object(i.a)(S,xe?"activeKey":"defaultActiveKey",xe?De:Se),Object(i.a)(S,"tabBarExtraContent",We),S)),$e,Fe=he&&he.length?a.createElement($.a,Object(p.a)({size:"large"},He,{className:"".concat(A,"-head-tabs"),onChange:R}),he.map(function(Be){return a.createElement($.a.TabPane,{tab:Be.tab,disabled:Be.disabled,key:Be.key})})):null;(ue||U||Fe)&&($e=a.createElement("div",{className:"".concat(A,"-head"),style:ne},a.createElement("div",{className:"".concat(A,"-head-wrapper")},ue&&a.createElement("div",{className:"".concat(A,"-head-title")},ue),U&&a.createElement("div",{className:"".concat(A,"-extra")},U)),Fe));var _e=Ue?a.createElement("div",{className:"".concat(A,"-cover")},Ue):null,Ye=a.createElement("div",{className:"".concat(A,"-body"),style:ye},Ee?Ae:O),Xe=be&&be.length?a.createElement("ul",{className:"".concat(A,"-actions")},Qe(be)):null,fe=Object(K.a)(ke,["onTabChange"]),H=Re||me,ve=I()(A,(c={},Object(i.a)(c,"".concat(A,"-loading"),Ee),Object(i.a)(c,"".concat(A,"-bordered"),Le),Object(i.a)(c,"".concat(A,"-hoverable"),Ve),Object(i.a)(c,"".concat(A,"-contain-grid"),g()),Object(i.a)(c,"".concat(A,"-contain-tabs"),he&&he.length),Object(i.a)(c,"".concat(A,"-").concat(H),H),Object(i.a)(c,"".concat(A,"-type-").concat(Ce),!!Ce),Object(i.a)(c,"".concat(A,"-rtl"),ce==="rtl"),c),M);return a.createElement("div",Object(p.a)({},fe,{className:ve}),$e,_e,Ye,Xe)};Ie.Grid=Q,Ie.Meta=D;var Te=P.a=Ie},fOrg:function(B,P,e){"use strict";var i=e("cIOH"),p=e.n(i),a=e("YkAm"),y=e.n(a)},jCWc:function(B,P,e){"use strict";var i=e("cIOH"),p=e.n(i),a=e("1GLa")},kPKH:function(B,P,e){"use strict";var i=e("/kpp");P.a=i.a},lfch:function(B,P,e){"use strict";var i=e("q1tI"),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},a=p,y=e("6VBw"),I=function(v,G){return i.createElement(y.a,Object.assign({},v,{ref:G,icon:a}))};I.displayName="CopyOutlined";var K=P.a=i.forwardRef(I)},lnY3:function(B,P,e){},tU7J:function(B,P,e){"use strict";var i=e("cIOH"),p=e.n(i),a=e("/qDX"),y=e.n(a),I=e("5Dmo"),K=e("5NDa")},wFql:function(B,P,e){"use strict";var i=e("wx14"),p=e("rePB"),a=e("q1tI"),y=e("TSYQ"),I=e.n(y),K=e("c+Xe"),x=e("H84U"),v=e("uaoM"),G=function(l,r){var o={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(o[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(o[t[n]]=l[t[n]]);return o},Q=function(r,o){var t=r.prefixCls,n=r.component,s=n===void 0?"article":n,u=r.className,m=r["aria-label"],f=r.setContentRef,h=r.children,W=G(r,["prefixCls","component","className","aria-label","setContentRef","children"]),j=o;return f&&(Object(v.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),j=Object(K.a)(o,f)),a.createElement(x.a,null,function(ee){var w=ee.getPrefixCls,ie=ee.direction,pe=s,Y=w("typography",t),re=I()(Y,Object(p.a)({},"".concat(Y,"-rtl"),ie==="rtl"),u);return a.createElement(pe,Object(i.a)({className:re,"aria-label":m,ref:j},W),h)})},ae=a.forwardRef(Q);ae.displayName="Typography";var Z=ae,D=Z,$=e("U8pU"),q=e("bT9E"),T=e("KQm4"),ge=e("1OyB"),Je=e("vuIU"),Qe=e("Ji7U"),Ie=e("LK+K"),Te=e("Zm9Q"),C=e("+QRC"),d=e.n(C),S=e("G3dp"),c=e("bRQS"),b=e("lfch"),Oe=e("6ner"),ce=e("wEI+"),me=e("YMnH"),R=e("gDlH"),g=e("oHiP"),E=e("R3zJ"),M=e("3S7+"),U=e("ODXe"),V=e("4IlW"),ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},de=ne,ye=e("6VBw"),ue=function(r,o){return a.createElement(ye.a,Object.assign({},r,{ref:o,icon:de}))};ue.displayName="EnterOutlined";var Ee=a.forwardRef(ue),Me=e("whJP"),Le=function(r){var o=r.prefixCls,t=r["aria-label"],n=r.className,s=r.style,u=r.direction,m=r.maxLength,f=r.autoSize,h=f===void 0?!0:f,W=r.value,j=r.onSave,ee=r.onCancel,w=a.useRef(),ie=a.useRef(!1),pe=a.useRef(),Y=a.useState(W),re=Object(U.a)(Y,2),Pe=re[0],le=re[1];a.useEffect(function(){le(W)},[W]),a.useEffect(function(){if(w.current&&w.current.resizableTextArea){var X=w.current.resizableTextArea.textArea;X.focus();var L=X.value.length;X.setSelectionRange(L,L)}},[]);var Ne=function(L){var J=L.target;le(J.value.replace(/[\n\r]/g,""))},Ke=function(){ie.current=!0},N=function(){ie.current=!1},F=function(L){var J=L.keyCode;ie.current||(pe.current=J)},_=function(){j(Pe.trim())},oe=function(L){var J=L.keyCode,je=L.ctrlKey,et=L.altKey,tt=L.metaKey,at=L.shiftKey;pe.current===J&&!ie.current&&!je&&!et&&!tt&&!at&&(J===V.a.ENTER?_():J===V.a.ESC&&ee())},se=function(){_()},te=I()(o,"".concat(o,"-edit-content"),Object(p.a)({},"".concat(o,"-rtl"),u==="rtl"),n);return a.createElement("div",{className:te,style:s},a.createElement(Me.a,{ref:w,maxLength:m,value:Pe,onChange:Ne,onKeyDown:F,onKeyUp:oe,onCompositionStart:Ke,onCompositionEnd:N,onBlur:se,"aria-label":t,autoSize:h}),a.createElement(Ee,{className:"".concat(o,"-edit-content-confirm")}))},Re=Le,Ce=e("i8i4"),Ue=1,be=3,he=8,O,De={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Se(l){if(!l)return 0;var r=l.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function We(l){var r=Array.prototype.slice.apply(l);return r.map(function(o){return"".concat(o,": ").concat(l.getPropertyValue(o),";")}).join("")}function Ve(l){var r=[];return l.forEach(function(o){var t=r[r.length-1];typeof o=="string"&&typeof t=="string"?r[r.length-1]+=o:r.push(o)}),r}var ze=function(l,r,o,t,n){O||(O=document.createElement("div"),O.setAttribute("aria-hidden","true"),document.body.appendChild(O));var s=r.rows,u=r.suffix,m=u===void 0?"":u,f=window.getComputedStyle(l),h=We(f),W=Se(f.lineHeight),j=Math.round(W*(s+1)+Se(f.paddingTop)+Se(f.paddingBottom));O.setAttribute("style",h),O.style.position="fixed",O.style.left="0",O.style.height="auto",O.style.minHeight="auto",O.style.maxHeight="auto",O.style.top="-999999px",O.style.zIndex="-1000",O.style.textOverflow="clip",O.style.whiteSpace="normal",O.style.webkitLineClamp="none";var ee=Ve(Object(Te.a)(o));Object(Ce.render)(a.createElement("div",{style:De},a.createElement("span",{style:De},ee,m),a.createElement("span",{style:De},t)),O);function w(){return O.offsetHeight<j}if(w())return Object(Ce.unmountComponentAtNode)(O),{content:o,text:O.innerHTML,ellipsis:!1};var ie=Array.prototype.slice.apply(O.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(N){var F=N.nodeType;return F!==he}),pe=Array.prototype.slice.apply(O.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(Ce.unmountComponentAtNode)(O);var Y=[];O.innerHTML="";var re=document.createElement("span");O.appendChild(re);var Pe=document.createTextNode(n+m);re.appendChild(Pe),pe.forEach(function(N){O.appendChild(N)});function le(N){re.insertBefore(N,Pe)}function Ne(N,F){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,oe=arguments.length>3&&arguments[3]!==void 0?arguments[3]:F.length,se=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,te=Math.floor((_+oe)/2),X=F.slice(0,te);if(N.textContent=X,_>=oe-1)for(var L=oe;L>=_;L-=1){var J=F.slice(0,L);if(N.textContent=J,w()||!J)return L===F.length?{finished:!1,reactNode:F}:{finished:!0,reactNode:J}}return w()?Ne(N,F,te,oe,te):Ne(N,F,_,te,se)}function Ke(N,F){var _=N.nodeType;if(_===Ue)return le(N),w()?{finished:!1,reactNode:ee[F]}:(re.removeChild(N),{finished:!0,reactNode:null});if(_===be){var oe=N.textContent||"",se=document.createTextNode(oe);return le(se),Ne(se,oe)}return{finished:!1,reactNode:null}}return ie.some(function(N,F){var _=Ke(N,F),oe=_.finished,se=_.reactNode;return se&&Y.push(se),oe}),{content:Y,text:O.innerHTML,ellipsis:!0}},we=function(l,r){var o={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(o[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(o[t[n]]=l[t[n]]);return o},ke=Object(E.c)("webkitLineClamp"),A=Object(E.c)("textOverflow");function z(l,r){var o=l.mark,t=l.code,n=l.underline,s=l.delete,u=l.strong,m=l.keyboard,f=r;function h(W,j){!W||(f=a.createElement(j,{},f))}return h(u,"strong"),h(n,"u"),h(s,"del"),h(t,"code"),h(o,"mark"),h(m,"kbd"),f}var k="...",Ae=function(l){Object(Qe.a)(o,l);var r=Object(Ie.a)(o);function o(){var t;return Object(ge.a)(this,o),t=r.apply(this,arguments),t.contentRef=a.createRef(),t.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},t.getPrefixCls=function(){var n=t.props.prefixCls,s=t.context.getPrefixCls;return s("typography",n)},t.onExpandClick=function(n){var s=t.getEllipsis(),u=s.onExpand;t.setState({expanded:!0}),u&&u(n)},t.onEditClick=function(){t.triggerEdit(!0)},t.onEditChange=function(n){var s=t.getEditable(),u=s.onChange;u&&u(n),t.triggerEdit(!1)},t.onEditCancel=function(){t.triggerEdit(!1)},t.onCopyClick=function(n){n.preventDefault();var s=t.props,u=s.children,m=s.copyable,f=Object(i.a)({},Object($.a)(m)==="object"?m:null);f.text===void 0&&(f.text=String(u)),d()(f.text||""),t.setState({copied:!0},function(){f.onCopy&&f.onCopy(),t.copyId=window.setTimeout(function(){t.setState({copied:!1})},3e3)})},t.setEditRef=function(n){t.editIcon=n},t.triggerEdit=function(n){var s=t.getEditable(),u=s.onStart;n&&u&&u(),t.setState({edit:n},function(){!n&&t.editIcon&&t.editIcon.focus()})},t.resizeOnNextFrame=function(){g.a.cancel(t.rafId),t.rafId=Object(g.a)(function(){t.syncEllipsis()})},t}return Object(Je.a)(o,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(n){var s=this.props.children,u=this.getEllipsis(),m=this.getEllipsis(n);(s!==n.children||u.rows!==m.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),g.a.cancel(this.rafId)}},{key:"getEditable",value:function(n){var s=this.state.edit,u=n||this.props,m=u.editable;return m?Object(i.a)({editing:s},Object($.a)(m)==="object"?m:null):{editing:s}}},{key:"getEllipsis",value:function(n){var s=n||this.props,u=s.ellipsis;return u?Object(i.a)({rows:1,expandable:!1},Object($.a)(u)==="object"?u:null):{}}},{key:"canUseCSSEllipsis",value:function(){var n=this.state.clientRendered,s=this.props,u=s.editable,m=s.copyable,f=this.getEllipsis(),h=f.rows,W=f.expandable,j=f.suffix,ee=f.onEllipsis,w=f.tooltip;return j||w||u||m||W||!n||ee?!1:h===1?A:ke}},{key:"syncEllipsis",value:function(){var n=this.state,s=n.ellipsisText,u=n.isEllipsis,m=n.expanded,f=this.getEllipsis(),h=f.rows,W=f.suffix,j=f.onEllipsis,ee=this.props.children;if(!(!h||h<0||!this.contentRef.current||m)&&!this.canUseCSSEllipsis()){Object(v.a)(Object(Te.a)(ee).every(function(re){return typeof re=="string"}),"Typography","`ellipsis` should use string as children only.");var w=ze(this.contentRef.current,{rows:h,suffix:W},ee,this.renderOperations(!0),k),ie=w.content,pe=w.text,Y=w.ellipsis;(s!==pe||u!==Y)&&(this.setState({ellipsisText:pe,ellipsisContent:ie,isEllipsis:Y}),u!==Y&&j&&j(Y))}}},{key:"renderExpand",value:function(n){var s=this.getEllipsis(),u=s.expandable,m=s.symbol,f=this.state,h=f.expanded,W=f.isEllipsis;if(!u||!n&&(h||!W))return null;var j;return m?j=m:j=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},j)}},{key:"renderEdit",value:function(){var n=this.props.editable;if(!!n){var s=n.icon,u=n.tooltip,m=Object(Te.a)(u)[0]||this.editStr,f=typeof m=="string"?m:"";return a.createElement(M.a,{key:"edit",title:u===!1?"":m},a.createElement(R.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":f},s||a.createElement(S.a,{role:"button"})))}}},{key:"renderCopy",value:function(){var n=this.state.copied,s=this.props.copyable;if(!!s){var u=this.getPrefixCls(),m=s.tooltips,f=Object(Te.a)(m);f.length===0&&(f=[this.copyStr,this.copiedStr]);var h=n?f[1]:f[0],W=typeof h=="string"?h:"",j=Object(Te.a)(s.icon);return a.createElement(M.a,{key:"copy",title:m===!1?"":h},a.createElement(R.a,{className:I()("".concat(u,"-copy"),n&&"".concat(u,"-copy-success")),onClick:this.onCopyClick,"aria-label":W},n?j[1]||a.createElement(c.a,null):j[0]||a.createElement(b.a,null)))}}},{key:"renderEditInput",value:function(){var n=this.props,s=n.children,u=n.className,m=n.style,f=this.context.direction,h=this.getEditable(),W=h.maxLength,j=h.autoSize;return a.createElement(Re,{value:typeof s=="string"?s:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:u,style:m,direction:f,maxLength:W,autoSize:j})}},{key:"renderOperations",value:function(n){return[this.renderExpand(n),this.renderEdit(),this.renderCopy()].filter(function(s){return s})}},{key:"renderContent",value:function(){var n=this,s=this.state,u=s.ellipsisContent,m=s.isEllipsis,f=s.expanded,h=this.props,W=h.component,j=h.children,ee=h.className,w=h.type,ie=h.disabled,pe=h.style,Y=we(h,["component","children","className","type","disabled","style"]),re=this.context.direction,Pe=this.getEllipsis(),le=Pe.rows,Ne=Pe.suffix,Ke=Pe.tooltip,N=this.getPrefixCls(),F=Object(q.a)(Y,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Object(T.a)(ce.a))),_=this.canUseCSSEllipsis(),oe=le===1&&_,se=le&&le>1&&_,te=j;if(le&&m&&!f&&!_){var X=Y.title,L=X||"";!X&&(typeof j=="string"||typeof j=="number")&&(L=String(j)),L=L==null?void 0:L.slice(String(u||"").length),te=a.createElement(a.Fragment,null,u,a.createElement("span",{title:L,"aria-hidden":"true"},k),Ne),Ke&&(te=a.createElement(M.a,{title:Ke===!0?j:Ke},a.createElement("span",null,te)))}else te=a.createElement(a.Fragment,null,j,Ne);return te=z(this.props,te),a.createElement(me.a,{componentName:"Text"},function(J){var je,et=J.edit,tt=J.copy,at=J.copied,rt=J.expand;return n.editStr=et,n.copyStr=tt,n.copiedStr=at,n.expandStr=rt,a.createElement(Oe.a,{onResize:n.resizeOnNextFrame,disabled:!le},a.createElement(D,Object(i.a)({className:I()((je={},Object(p.a)(je,"".concat(N,"-").concat(w),w),Object(p.a)(je,"".concat(N,"-disabled"),ie),Object(p.a)(je,"".concat(N,"-ellipsis"),le),Object(p.a)(je,"".concat(N,"-ellipsis-single-line"),oe),Object(p.a)(je,"".concat(N,"-ellipsis-multiple-line"),se),je),ee),style:Object(i.a)(Object(i.a)({},pe),{WebkitLineClamp:se?le:void 0}),component:W,ref:n.contentRef,direction:re},F),te,n.renderOperations()))})}},{key:"render",value:function(){var n=this.getEditable(),s=n.editing;return s?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(n){var s=n.children,u=n.editable;return Object(v.a)(!u||typeof s=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),o}(a.Component);Ae.contextType=x.b,Ae.defaultProps={children:""};var xe=Ae,He=function(l,r){var o={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(o[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(o[t[n]]=l[t[n]]);return o},$e=function(r){var o=r.ellipsis,t=He(r,["ellipsis"]),n=a.useMemo(function(){return o&&Object($.a)(o)==="object"?Object(q.a)(o,["expandable","rows"]):o},[o]);return Object(v.a)(Object($.a)(o)!=="object"||!o||!("expandable"in o)&&!("rows"in o),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(xe,Object(i.a)({},t,{ellipsis:n,component:"span"}))},Fe=$e,_e=function(l,r){var o={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(o[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(o[t[n]]=l[t[n]]);return o},Ye=function(r,o){var t=r.ellipsis,n=r.rel,s=_e(r,["ellipsis","rel"]);Object(v.a)(Object($.a)(t)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var u=a.useRef(null);a.useImperativeHandle(o,function(){var f;return(f=u.current)===null||f===void 0?void 0:f.contentRef.current});var m=Object(i.a)(Object(i.a)({},s),{rel:n===void 0&&s.target==="_blank"?"noopener noreferrer":n});return delete m.navigate,a.createElement(xe,Object(i.a)({},m,{ref:u,ellipsis:!!t,component:"a"}))},Xe=a.forwardRef(Ye),fe=e("CWQg"),H=function(l,r){var o={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(o[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(o[t[n]]=l[t[n]]);return o},ve=Object(fe.b)(1,2,3,4,5),Be=function(r){var o=r.level,t=o===void 0?1:o,n=H(r,["level"]),s;return ve.indexOf(t)!==-1?s="h".concat(t):(Object(v.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),s="h1"),a.createElement(xe,Object(i.a)({},n,{component:s}))},Ge=Be,Ze=function(r){return a.createElement(xe,Object(i.a)({},r,{component:"div"}))},nt=Ze,qe=D;qe.Text=Fe,qe.Link=Xe,qe.Title=Ge,qe.Paragraph=nt;var lt=P.a=qe}}]);
