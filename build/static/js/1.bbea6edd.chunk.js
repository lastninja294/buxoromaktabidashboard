(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[1],{743:function(e,t,a){"use strict";var n=a(5),r=a(3),c=a(107),o=a(213),i=a(4),l=a(1),u=a.n(l),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},b=a(20),f=function(e,t){return l.createElement(b.a,Object(i.a)(Object(i.a)({},e),{},{ref:t,icon:s}))};f.displayName="PlusOutlined";var d=l.forwardRef(f),v=a(7),m=a.n(v),p=a(6),O=a(12),j=a(10),h=a(208),y=a(57),g=a(63),E=Object(l.createContext)(null);var k=l.forwardRef((function(e,t){var a=e.prefixCls,n=e.className,r=e.style,c=e.id,o=e.active,i=e.tabKey,u=e.children;return l.createElement("div",{id:c&&"".concat(c,"-panel-").concat(i),role:"tabpanel",tabIndex:o?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(i),"aria-hidden":!o,style:r,className:m()(a,o&&"".concat(a,"-active"),n),ref:t},u)})),w=["key","forceRender","style","className"];function x(e){var t=e.id,a=e.activeKey,c=e.animated,o=e.tabPosition,u=e.destroyInactiveTabPane,s=l.useContext(E),b=s.prefixCls,f=s.tabs,d=c.tabPane,v="".concat(b,"-tabpane");return l.createElement("div",{className:m()("".concat(b,"-content-holder"))},l.createElement("div",{className:m()("".concat(b,"-content"),"".concat(b,"-content-").concat(o),Object(n.a)({},"".concat(b,"-content-animated"),d))},f.map((function(e){var n=e.key,o=e.forceRender,s=e.style,b=e.className,f=Object(j.a)(e,w),p=n===a;return l.createElement(g.b,Object(r.a)({key:n,visible:p,forceRender:o,removeOnLeave:!!u,leavedClassName:"".concat(v,"-hidden")},c.tabPaneMotion),(function(e,a){var c=e.style,o=e.className;return l.createElement(k,Object(r.a)({},f,{prefixCls:v,id:t,tabKey:n,animated:d,active:p,style:Object(i.a)(Object(i.a)({},s),c),className:m()(b,o),ref:a}))}))}))))}var C=a(9),P=a(19),N=a(44),R=a(101);function T(e){var t=Object(l.useRef)(),a=Object(l.useRef)(!1);return Object(l.useEffect)((function(){return a.current=!1,function(){a.current=!0,P.a.cancel(t.current)}}),[]),function(){for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a.current||(P.a.cancel(t.current),t.current=Object(P.a)((function(){e.apply(void 0,r)})))}}var I=a(14);function S(e,t){var a,r=e.prefixCls,c=e.id,o=e.active,i=e.tab,u=i.key,s=i.label,b=i.disabled,f=i.closeIcon,d=e.closable,v=e.renderWrapper,p=e.removeAriaLabel,O=e.editable,j=e.onClick,h=e.onRemove,y=e.onFocus,g=e.style,E="".concat(r,"-tab");l.useEffect((function(){return h}),[]);var k=O&&!1!==d&&!b;function w(e){b||j(e)}var x=l.createElement("div",{key:u,ref:t,className:m()(E,(a={},Object(n.a)(a,"".concat(E,"-with-remove"),k),Object(n.a)(a,"".concat(E,"-active"),o),Object(n.a)(a,"".concat(E,"-disabled"),b),a)),style:g,onClick:w},l.createElement("div",{role:"tab","aria-selected":o,id:c&&"".concat(c,"-tab-").concat(u),className:"".concat(E,"-btn"),"aria-controls":c&&"".concat(c,"-panel-").concat(u),"aria-disabled":b,tabIndex:b?null:0,onClick:function(e){e.stopPropagation(),w(e)},onKeyDown:function(e){[I.a.SPACE,I.a.ENTER].includes(e.which)&&(e.preventDefault(),w(e))},onFocus:y},s),k&&l.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(E,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),O.onEdit("remove",{key:u,event:t})}},f||O.removeIcon||"\xd7"));return v?v(x):x}var M=l.forwardRef(S),B={width:0,height:0,left:0,top:0};var L={width:0,height:0,left:0,top:0,right:0};var A=a(78),D=a(392);function K(e,t){var a=e.prefixCls,n=e.editable,r=e.locale,c=e.style;return n&&!1!==n.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:c,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){n.onEdit("add",{event:e})}},n.addIcon||"+"):null}var q=l.forwardRef(K);function W(e,t){var a=e.prefixCls,r=e.id,c=e.tabs,o=e.locale,i=e.mobile,u=e.moreIcon,s=void 0===u?"More":u,b=e.moreTransitionName,f=e.style,d=e.className,v=e.editable,O=e.tabBarGutter,j=e.rtl,h=e.removeAriaLabel,y=e.onTabClick,g=e.getPopupContainer,E=e.popupClassName,k=Object(l.useState)(!1),w=Object(p.a)(k,2),x=w[0],C=w[1],P=Object(l.useState)(null),N=Object(p.a)(P,2),R=N[0],T=N[1],S="".concat(r,"-more-popup"),M="".concat(a,"-dropdown"),B=null!==R?"".concat(S,"-").concat(R):null,L=null===o||void 0===o?void 0:o.dropdownAriaLabel;var K=l.createElement(A.g,{onClick:function(e){var t=e.key,a=e.domEvent;y(t,a),C(!1)},prefixCls:"".concat(M,"-menu"),id:S,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[R],"aria-label":void 0!==L?L:"expanded dropdown"},c.map((function(e){var t=v&&!1!==e.closable&&!e.disabled;return l.createElement(A.d,{key:e.key,id:"".concat(S,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":h||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(t){var a,n;t.stopPropagation(),a=t,n=e.key,a.preventDefault(),a.stopPropagation(),v.onEdit("remove",{key:n,event:a})}},e.closeIcon||v.removeIcon||"\xd7"))})));function W(e){for(var t=c.filter((function(e){return!e.disabled})),a=t.findIndex((function(e){return e.key===R}))||0,n=t.length,r=0;r<n;r+=1){var o=t[a=(a+e+n)%n];if(!o.disabled)return void T(o.key)}}Object(l.useEffect)((function(){var e=document.getElementById(B);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[R]),Object(l.useEffect)((function(){x||T(null)}),[x]);var V=Object(n.a)({},j?"marginRight":"marginLeft",O);c.length||(V.visibility="hidden",V.order=1);var z=m()(Object(n.a)({},"".concat(M,"-rtl"),j)),G=i?null:l.createElement(D.a,{prefixCls:M,overlay:K,trigger:["hover"],visible:!!c.length&&x,transitionName:b,onVisibleChange:C,overlayClassName:m()(z,E),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:g},l.createElement("button",{type:"button",className:"".concat(a,"-nav-more"),style:V,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":S,id:"".concat(r,"-more"),"aria-expanded":x,onKeyDown:function(e){var t=e.which;if(x)switch(t){case I.a.UP:W(-1),e.preventDefault();break;case I.a.DOWN:W(1),e.preventDefault();break;case I.a.ESC:C(!1);break;case I.a.SPACE:case I.a.ENTER:null!==R&&y(R,e)}else[I.a.DOWN,I.a.SPACE,I.a.ENTER].includes(t)&&(C(!0),e.preventDefault())}},s));return l.createElement("div",{className:m()("".concat(a,"-nav-operations"),d),style:f,ref:t},G,l.createElement(q,{prefixCls:a,locale:o,editable:v}))}var V=l.memo(l.forwardRef(W),(function(e,t){return t.tabMoving})),z=Math.pow(.995,20);function G(e,t){var a=l.useRef(e),n=l.useState({}),r=Object(p.a)(n,2)[1];return[a.current,function(e){var n="function"===typeof e?e(a.current):e;n!==a.current&&t(n,a.current),a.current=n,r({})}]}function F(e){var t;return e instanceof Map?(t={},e.forEach((function(e,a){t[a]=e}))):t=e,JSON.stringify(t)}var H=l.forwardRef((function(e,t){var a,n=e.position,r=e.prefixCls,c=e.extra;if(!c)return null;var o={};return"object"!==Object(O.a)(c)||l.isValidElement(c)?o.right=c:o=c,"right"===n&&(a=o.right),"left"===n&&(a=o.left),a?l.createElement("div",{className:"".concat(r,"-extra-content"),ref:t},a):null})),J=function(e){var t=e.current||{},a=t.offsetWidth,n=void 0===a?0:a,r=t.offsetHeight;return[n,void 0===r?0:r]},X=function(e,t){return e[t?0:1]};function Y(e,t){var a,c=l.useContext(E),o=c.prefixCls,u=c.tabs,s=e.className,b=e.style,f=e.id,d=e.animated,v=e.activeKey,O=e.rtl,j=e.extra,h=e.editable,y=e.locale,g=e.tabPosition,k=e.tabBarGutter,w=e.children,x=e.onTabClick,I=e.onTabScroll,S=Object(l.useRef)(),A=Object(l.useRef)(),D=Object(l.useRef)(),K=Object(l.useRef)(),W=Object(l.useRef)(),Y=Object(l.useRef)(),_=Object(l.useRef)(),U=function(){var e=Object(l.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,l.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),Q=Object(p.a)(U,2),Z=Q[0],$=Q[1],ee="top"===g||"bottom"===g,te=G(0,(function(e,t){ee&&I&&I({direction:e>t?"left":"right"})})),ae=Object(p.a)(te,2),ne=ae[0],re=ae[1],ce=G(0,(function(e,t){!ee&&I&&I({direction:e>t?"top":"bottom"})})),oe=Object(p.a)(ce,2),ie=oe[0],le=oe[1],ue=Object(l.useState)([0,0]),se=Object(p.a)(ue,2),be=se[0],fe=se[1],de=Object(l.useState)([0,0]),ve=Object(p.a)(de,2),me=ve[0],pe=ve[1],Oe=Object(l.useState)([0,0]),je=Object(p.a)(Oe,2),he=je[0],ye=je[1],ge=Object(l.useState)([0,0]),Ee=Object(p.a)(ge,2),ke=Ee[0],we=Ee[1],xe=function(e){var t=Object(l.useRef)([]),a=Object(l.useState)({}),n=Object(p.a)(a,2)[1],r=Object(l.useRef)("function"===typeof e?e():e),c=T((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,n({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Ce=Object(p.a)(xe,2),Pe=Ce[0],Ne=Ce[1],Re=function(e,t,a){return Object(l.useMemo)((function(){for(var a,n=new Map,r=t.get(null===(a=e[0])||void 0===a?void 0:a.key)||B,c=r.left+r.width,o=0;o<e.length;o+=1){var l,u=e[o].key,s=t.get(u);s||(s=t.get(null===(l=e[o-1])||void 0===l?void 0:l.key)||B);var b=n.get(u)||Object(i.a)({},s);b.right=c-b.left-b.width,n.set(u,b)}return n}),[e.map((function(e){return e.key})).join("_"),t,a])}(u,Pe,me[0]),Te=X(be,ee),Ie=X(me,ee),Se=X(he,ee),Me=X(ke,ee),Be=Te<Ie+Se?Te-Me:Te-Se,Le="".concat(o,"-nav-operations-hidden"),Ae=0,De=0;function Ke(e){return e<Ae?Ae:e>De?De:e}ee&&O?(Ae=0,De=Math.max(0,Ie-Be)):(Ae=Math.min(0,Be-Ie),De=0);var qe=Object(l.useRef)(),We=Object(l.useState)(),Ve=Object(p.a)(We,2),ze=Ve[0],Ge=Ve[1];function Fe(){Ge(Date.now())}function He(){window.clearTimeout(qe.current)}!function(e,t){var a=Object(l.useState)(),n=Object(p.a)(a,2),r=n[0],c=n[1],o=Object(l.useState)(0),i=Object(p.a)(o,2),u=i[0],s=i[1],b=Object(l.useState)(0),f=Object(p.a)(b,2),d=f[0],v=f[1],m=Object(l.useState)(),O=Object(p.a)(m,2),j=O[0],h=O[1],y=Object(l.useRef)(),g=Object(l.useRef)(),E=Object(l.useRef)(null);E.current={onTouchStart:function(e){var t=e.touches[0],a=t.screenX,n=t.screenY;c({x:a,y:n}),window.clearInterval(y.current)},onTouchMove:function(e){if(r){e.preventDefault();var a=e.touches[0],n=a.screenX,o=a.screenY;c({x:n,y:o});var i=n-r.x,l=o-r.y;t(i,l);var b=Date.now();s(b),v(b-u),h({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),h(null),j)){var e=j.x/d,a=j.y/d,n=Math.abs(e),o=Math.abs(a);if(Math.max(n,o)<.1)return;var i=e,l=a;y.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(y.current):t(20*(i*=z),20*(l*=z))}),20)}},onWheel:function(e){var a=e.deltaX,n=e.deltaY,r=0,c=Math.abs(a),o=Math.abs(n);c===o?r="x"===g.current?a:n:c>o?(r=a,g.current="x"):(r=n,g.current="y"),t(-r,-r)&&e.preventDefault()}},l.useEffect((function(){function t(e){E.current.onTouchMove(e)}function a(e){E.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",a,{passive:!1}),e.current.addEventListener("touchstart",(function(e){E.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){E.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",a)}}),[])}(K,(function(e,t){function a(e,t){e((function(e){return Ke(e+t)}))}return!(Te>=Ie)&&(ee?a(re,e):a(le,t),He(),Fe(),!0)})),Object(l.useEffect)((function(){return He(),ze&&(qe.current=window.setTimeout((function(){Ge(0)}),100)),He}),[ze]);var Je=function(e,t,a,n,r,c,o){var i,u,s,b=o.tabs,f=o.tabPosition,d=o.rtl;return["top","bottom"].includes(f)?(i="width",u=d?"right":"left",s=Math.abs(a)):(i="height",u="top",s=-a),Object(l.useMemo)((function(){if(!b.length)return[0,0];for(var a=b.length,n=a,r=0;r<a;r+=1){var c=e.get(b[r].key)||L;if(c[u]+c[i]>s+t){n=r-1;break}}for(var o=0,l=a-1;l>=0;l-=1)if((e.get(b[l].key)||L)[u]<s){o=l+1;break}return[o,n]}),[e,t,n,r,c,s,f,b.map((function(e){return e.key})).join("_"),d])}(Re,Be,ee?ne:ie,Ie,Se,Me,Object(i.a)(Object(i.a)({},e),{},{tabs:u})),Xe=Object(p.a)(Je,2),Ye=Xe[0],_e=Xe[1],Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=Re.get(e)||{width:0,height:0,left:0,right:0,top:0};if(ee){var a=ne;O?t.right<ne?a=t.right:t.right+t.width>ne+Be&&(a=t.right+t.width-Be):t.left<-ne?a=-t.left:t.left+t.width>-ne+Be&&(a=-(t.left+t.width-Be)),le(0),re(Ke(a))}else{var n=ie;t.top<-ie?n=-t.top:t.top+t.height>-ie+Be&&(n=-(t.top+t.height-Be)),re(0),le(Ke(n))}},Qe={};"top"===g||"bottom"===g?Qe[O?"marginRight":"marginLeft"]=k:Qe.marginTop=k;var Ze=u.map((function(e,t){var a=e.key;return l.createElement(M,{id:f,prefixCls:o,key:a,tab:e,style:0===t?void 0:Qe,closable:e.closable,editable:h,active:a===v,renderWrapper:w,removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,ref:Z(a),onClick:function(e){x(a,e)},onRemove:function(){$(a)},onFocus:function(){Ue(a),Fe(),K.current&&(O||(K.current.scrollLeft=0),K.current.scrollTop=0)}})})),$e=T((function(){var e=J(S),t=J(A),a=J(D);fe([e[0]-t[0]-a[0],e[1]-t[1]-a[1]]);var n=J(_);ye(n);var r=J(Y);we(r);var c=J(W);pe([c[0]-n[0],c[1]-n[1]]),Ne((function(){var e=new Map;return u.forEach((function(t){var a=t.key,n=Z(a).current;n&&e.set(a,{width:n.offsetWidth,height:n.offsetHeight,left:n.offsetLeft,top:n.offsetTop})})),e}))})),et=u.slice(0,Ye),tt=u.slice(_e+1),at=[].concat(Object(C.a)(et),Object(C.a)(tt)),nt=Object(l.useState)(),rt=Object(p.a)(nt,2),ct=rt[0],ot=rt[1],it=Re.get(v),lt=Object(l.useRef)();function ut(){P.a.cancel(lt.current)}Object(l.useEffect)((function(){var e={};return it&&(ee?(O?e.right=it.right:e.left=it.left,e.width=it.width):(e.top=it.top,e.height=it.height)),ut(),lt.current=Object(P.a)((function(){ot(e)})),ut}),[it,ee,O]),Object(l.useEffect)((function(){Ue()}),[v,F(it),F(Re),ee]),Object(l.useEffect)((function(){$e()}),[O]);var st,bt,ft,dt,vt=!!at.length,mt="".concat(o,"-nav-wrap");return ee?O?(bt=ne>0,st=ne+Te<Ie):(st=ne<0,bt=-ne+Te<Ie):(ft=ie<0,dt=-ie+Te<Ie),l.createElement(R.a,{onResize:$e},l.createElement("div",{ref:Object(N.d)(t,S),role:"tablist",className:m()("".concat(o,"-nav"),s),style:b,onKeyDown:function(){Fe()}},l.createElement(H,{ref:A,position:"left",extra:j,prefixCls:o}),l.createElement("div",{className:m()(mt,(a={},Object(n.a)(a,"".concat(mt,"-ping-left"),st),Object(n.a)(a,"".concat(mt,"-ping-right"),bt),Object(n.a)(a,"".concat(mt,"-ping-top"),ft),Object(n.a)(a,"".concat(mt,"-ping-bottom"),dt),a)),ref:K},l.createElement(R.a,{onResize:$e},l.createElement("div",{ref:W,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(ne,"px, ").concat(ie,"px)"),transition:ze?"none":void 0}},Ze,l.createElement(q,{ref:_,prefixCls:o,locale:y,editable:h,style:Object(i.a)(Object(i.a)({},0===Ze.length?void 0:Qe),{},{visibility:vt?"hidden":null})}),l.createElement("div",{className:m()("".concat(o,"-ink-bar"),Object(n.a)({},"".concat(o,"-ink-bar-animated"),d.inkBar)),style:ct})))),l.createElement(V,Object(r.a)({},e,{removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,ref:Y,prefixCls:o,tabs:at,className:!vt&&Le,tabMoving:!!ze})),l.createElement(H,{ref:D,position:"right",extra:j,prefixCls:o})))}var _=l.forwardRef(Y),U=["renderTabBar"],Q=["label","key"];function Z(e){var t=e.renderTabBar,a=Object(j.a)(e,U),n=Object(l.useContext)(E).tabs;return t?t(Object(i.a)(Object(i.a)({},a),{},{panes:n.map((function(e){var t=e.label,a=e.key,n=Object(j.a)(e,Q);return u.a.createElement(k,Object(r.a)({tab:t,key:a,tabKey:a},n))}))}),_):u.a.createElement(_,a)}a(15);var $=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],ee=0;function te(e,t){var a,c=e.id,o=e.prefixCls,u=void 0===o?"rc-tabs":o,s=e.className,b=e.items,f=e.direction,d=e.activeKey,v=e.defaultActiveKey,g=e.editable,k=e.animated,w=e.tabPosition,C=void 0===w?"top":w,P=e.tabBarGutter,N=e.tabBarStyle,R=e.tabBarExtraContent,T=e.locale,I=e.moreIcon,S=e.moreTransitionName,M=e.destroyInactiveTabPane,B=e.renderTabBar,L=e.onChange,A=e.onTabClick,D=e.onTabScroll,K=e.getPopupContainer,q=e.popupClassName,W=Object(j.a)(e,$),V=l.useMemo((function(){return(b||[]).filter((function(e){return e&&"object"===Object(O.a)(e)&&"key"in e}))}),[b]),z="rtl"===f,G=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:Object(i.a)({inkBar:!0},"object"===Object(O.a)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(k),F=Object(l.useState)(!1),H=Object(p.a)(F,2),J=H[0],X=H[1];Object(l.useEffect)((function(){X(Object(h.a)())}),[]);var Y=Object(y.a)((function(){var e;return null===(e=V[0])||void 0===e?void 0:e.key}),{value:d,defaultValue:v}),_=Object(p.a)(Y,2),U=_[0],Q=_[1],te=Object(l.useState)((function(){return V.findIndex((function(e){return e.key===U}))})),ae=Object(p.a)(te,2),ne=ae[0],re=ae[1];Object(l.useEffect)((function(){var e,t=V.findIndex((function(e){return e.key===U}));-1===t&&(t=Math.max(0,Math.min(ne,V.length-1)),Q(null===(e=V[t])||void 0===e?void 0:e.key));re(t)}),[V.map((function(e){return e.key})).join("_"),U,ne]);var ce=Object(y.a)(null,{value:c}),oe=Object(p.a)(ce,2),ie=oe[0],le=oe[1];Object(l.useEffect)((function(){c||(le("rc-tabs-".concat(ee)),ee+=1)}),[]);var ue={id:ie,activeKey:U,animated:G,tabPosition:C,rtl:z,mobile:J},se=Object(i.a)(Object(i.a)({},ue),{},{editable:g,locale:T,moreIcon:I,moreTransitionName:S,tabBarGutter:P,onTabClick:function(e,t){null===A||void 0===A||A(e,t);var a=e!==U;Q(e),a&&(null===L||void 0===L||L(e))},onTabScroll:D,extra:R,style:N,panes:null,getPopupContainer:K,popupClassName:q});return l.createElement(E.Provider,{value:{tabs:V,prefixCls:u}},l.createElement("div",Object(r.a)({ref:t,id:c,className:m()(u,"".concat(u,"-").concat(C),(a={},Object(n.a)(a,"".concat(u,"-mobile"),J),Object(n.a)(a,"".concat(u,"-editable"),g),Object(n.a)(a,"".concat(u,"-rtl"),z),a),s)},W),undefined,l.createElement(Z,Object(r.a)({},se,{renderTabBar:B})),l.createElement(x,Object(r.a)({destroyInactiveTabPane:M},ue,{animated:G}))))}var ae=l.forwardRef(te),ne=a(64),re=a(93),ce=a(74),oe={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ie=a(53),le=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var ue=function(){return null},se=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function be(e){var t,a=e.type,i=e.className,u=e.size,s=e.onEdit,b=e.hideAdd,f=e.centered,v=e.addIcon,p=e.children,j=e.items,h=e.animated,y=se(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),g=y.prefixCls,E=y.moreIcon,k=void 0===E?l.createElement(o.a,null):E,w=l.useContext(ne.b),x=w.getPrefixCls,C=w.direction,P=w.getPopupContainer,N=x("tabs",g);"editable-card"===a&&(t={onEdit:function(e,t){var a=t.key,n=t.event;null===s||void 0===s||s("add"===e?n:a,e)},removeIcon:l.createElement(c.a,null),addIcon:v||l.createElement(d,null),showAdd:!0!==b});var R=x(),T=function(e,t){return e||function(e){return e.filter((function(e){return e}))}(Object(ie.a)(t).map((function(e){if(l.isValidElement(e)){var t=e.key,a=e.props||{},n=a.tab,c=le(a,["tab"]);return Object(r.a)(Object(r.a)({key:String(t)},c),{label:n})}return null})))}(j,p),I=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===a?{inkBar:!1,tabPane:!1}:!0===a?{inkBar:!0,tabPane:!0}:Object(r.a)({inkBar:!0},"object"===Object(O.a)(a)?a:{})).tabPane&&(t.tabPaneMotion=Object(r.a)(Object(r.a)({},oe),{motionName:Object(ce.c)(e,"switch")})),t}(N,h);return l.createElement(re.b.Consumer,null,(function(e){var c,o=void 0!==u?u:e;return l.createElement(ae,Object(r.a)({direction:C,getPopupContainer:P,moreTransitionName:"".concat(R,"-slide-up")},y,{items:T,className:m()((c={},Object(n.a)(c,"".concat(N,"-").concat(o),o),Object(n.a)(c,"".concat(N,"-card"),["card","editable-card"].includes(a)),Object(n.a)(c,"".concat(N,"-editable-card"),"editable-card"===a),Object(n.a)(c,"".concat(N,"-centered"),f),c),i),editable:t,moreIcon:k,prefixCls:N,animated:I}))}))}be.TabPane=ue;t.a=be}}]);
//# sourceMappingURL=1.bbea6edd.chunk.js.map