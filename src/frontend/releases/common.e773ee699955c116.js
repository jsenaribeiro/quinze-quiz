"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7693:(C,m,d)=>{d.d(m,{c:()=>r});var v=d(4083),e=d(7864),l=d(1898);const r=(c,o)=>{let n,t;const i=(g,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(g,p);E&&o(E)?E!==n&&(u(),a(E,w)):u()},a=(g,p)=>{n=g,t||(t=n);const w=n;(0,v.w)(()=>w.classList.add("ion-activated")),p()},u=(g=!1)=>{if(!n)return;const p=n;(0,v.w)(()=>p.classList.remove("ion-activated")),g&&t!==n&&n.click(),n=void 0};return(0,l.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>i(g.currentX,g.currentY,e.a),onMove:g=>i(g.currentX,g.currentY,e.b),onEnd:()=>{u(!0),(0,e.h)(),t=void 0}})}},2225:(C,m,d)=>{d.d(m,{g:()=>v});const v=(o,n,t,i,a)=>l(o[1],n[1],t[1],i[1],a).map(u=>e(o[0],n[0],t[0],i[0],u)),e=(o,n,t,i,a)=>a*(3*n*Math.pow(a-1,2)+a*(-3*t*a+3*t+i*a))-o*Math.pow(a-1,3),l=(o,n,t,i,a)=>c((i-=a)-3*(t-=a)+3*(n-=a)-(o-=a),3*t-6*n+3*o,3*n-3*o,o).filter(g=>g>=0&&g<=1),c=(o,n,t,i)=>{if(0===o)return((o,n,t)=>{const i=n*n-4*o*t;return i<0?[]:[(-n+Math.sqrt(i))/(2*o),(-n-Math.sqrt(i))/(2*o)]})(n,t,i);const a=(3*(t/=o)-(n/=o)*n)/3,u=(2*n*n*n-9*n*t+27*(i/=o))/27;if(0===a)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-a),-Math.sqrt(-a)];const g=Math.pow(u/2,2)+Math.pow(a/3,3);if(0===g)return[Math.pow(u/2,.5)-n/3];if(g>0)return[Math.pow(-u/2+Math.sqrt(g),1/3)-Math.pow(u/2+Math.sqrt(g),1/3)-n/3];const p=Math.sqrt(Math.pow(-a/3,3)),w=Math.acos(-u/(2*Math.sqrt(Math.pow(-a/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-n/3,E*Math.cos((w+2*Math.PI)/3)-n/3,E*Math.cos((w+4*Math.PI)/3)-n/3]}},5062:(C,m,d)=>{d.d(m,{i:()=>v});const v=e=>e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5321:(C,m,d)=>{d.r(m),d.d(m,{startFocusVisible:()=>r});const v="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=c=>{let o=[],n=!0;const t=c?c.shadowRoot:document,i=c||document.body,a=M=>{o.forEach(h=>h.classList.remove(v)),M.forEach(h=>h.classList.add(v)),o=M},u=()=>{n=!1,a([])},g=M=>{n=l.includes(M.key),n||a([])},p=M=>{if(n&&void 0!==M.composedPath){const h=M.composedPath().filter(f=>!!f.classList&&f.classList.contains("ion-focusable"));a(h)}},w=()=>{t.activeElement===i&&a([])};return t.addEventListener("keydown",g),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",u,{passive:!0}),t.addEventListener("mousedown",u),{destroy:()=>{t.removeEventListener("keydown",g),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",u),t.removeEventListener("mousedown",u)},setFocus:a}}},6555:(C,m,d)=>{d.d(m,{c:()=>e});var v=d(6655);const e=o=>{const n=o;let t;return{hasLegacyControl:()=>{if(void 0===t){const a=void 0!==n.label||l(n),u=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,g=(0,v.h)(n);t=!0===n.legacy||!a&&!u&&null!==g}return t}}},l=o=>null!==o.shadowRoot&&!!(r.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||c.includes(o.tagName)&&""!==o.textContent),r=["ION-RANGE"],c=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(C,m,d)=>{d.d(m,{a:()=>r,b:()=>c,c:()=>l,d:()=>n,h:()=>o});const v={getEngine(){var t;const i=window;return i.TapticEngine||(null===(t=i.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var t;const i=window;return!!this.getEngine()&&("web"!==(null===(t=i.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const i=this.getEngine();if(!i)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:a})},notification(t){const i=this.getEngine();if(!i)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},e=()=>v.available(),l=()=>{e()&&v.selection()},r=()=>{e()&&v.selectionStart()},c=()=>{e()&&v.selectionChanged()},o=()=>{e()&&v.selectionEnd()},n=t=>{e()&&v.impact(t)}},7366:(C,m,d)=>{d.d(m,{a:()=>v,b:()=>p,c:()=>n,d:()=>w,e:()=>b,f:()=>o,g:()=>E,h:()=>l,i:()=>e,j:()=>_,k:()=>y,l:()=>t,m:()=>u,n:()=>M,o:()=>a,p:()=>c,q:()=>r,r:()=>s,s:()=>O,t:()=>g,u:()=>h,v:()=>f,w:()=>i});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4862:(C,m,d)=>{d.d(m,{I:()=>o,a:()=>a,b:()=>c,c:()=>p,d:()=>E,f:()=>u,g:()=>i,i:()=>t,p:()=>w,r:()=>M,s:()=>g});var v=d(5861),e=d(6655),l=d(1178);const c="ion-content",o=".ion-content-scroll-host",n=`${c}, ${o}`,t=h=>"ION-CONTENT"===h.tagName,i=function(){var h=(0,v.Z)(function*(f){return t(f)?(yield new Promise(s=>(0,e.c)(f,s)),f.getScrollElement()):f});return function(s){return h.apply(this,arguments)}}(),a=h=>h.querySelector(o)||h.querySelector(n),u=h=>h.closest(n),g=(h,f)=>t(h)?h.scrollToTop(f):Promise.resolve(h.scrollTo({top:0,left:0,behavior:f>0?"smooth":"auto"})),p=(h,f,s,_)=>t(h)?h.scrollByPoint(f,s,_):Promise.resolve(h.scrollBy({top:s,left:f,behavior:_>0?"smooth":"auto"})),w=h=>(0,l.b)(h,c),E=h=>{if(t(h)){const s=h.scrollY;return h.scrollY=!1,s}return h.style.setProperty("overflow","hidden"),!0},M=(h,f)=>{t(h)?h.scrollY=f:h.style.removeProperty("overflow")}},9240:(C,m,d)=>{d.d(m,{g:()=>e});var v=d(1178);const e=(r,c,o)=>{const n=null==r?0:r.toString().length,t=l(n,c);if(void 0===o)return t;try{return o(n,c)}catch(i){return(0,v.a)("Exception in provided `counterFormatter`.",i),t}},l=(r,c)=>`${r} / ${c}`},5234:(C,m,d)=>{d.r(m),d.d(m,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>f,keyboardDidClose:()=>w,keyboardDidOpen:()=>g,keyboardDidResize:()=>p,resetKeyboardAssist:()=>n,setKeyboardClose:()=>u,setKeyboardOpen:()=>a,startKeyboardAssist:()=>t,trackViewportChanges:()=>h});const v="ionKeyboardDidShow",e="ionKeyboardDidHide";let r={},c={},o=!1;const n=()=>{r={},c={},o=!1},t=s=>{i(s),s.visualViewport&&(c=f(s.visualViewport),s.visualViewport.onresize=()=>{h(s),g()||p(s)?a(s):w(s)&&u(s)})},i=s=>{s.addEventListener("keyboardDidShow",_=>a(s,_)),s.addEventListener("keyboardDidHide",()=>u(s))},a=(s,_)=>{E(s,_),o=!0},u=s=>{M(s),o=!1},g=()=>!o&&r.width===c.width&&(r.height-c.height)*c.scale>150,p=s=>o&&!w(s),w=s=>o&&c.height===s.innerHeight,E=(s,_)=>{const O=new CustomEvent(v,{detail:{keyboardHeight:_?_.keyboardHeight:s.innerHeight-c.height}});s.dispatchEvent(O)},M=s=>{const _=new CustomEvent(e);s.dispatchEvent(_)},h=s=>{r=Object.assign({},c),c=f(s.visualViewport)},f=s=>({width:Math.round(s.width),height:Math.round(s.height),offsetTop:s.offsetTop,offsetLeft:s.offsetLeft,pageTop:s.pageTop,pageLeft:s.pageLeft,scale:s.scale})},8034:(C,m,d)=>{d.d(m,{K:()=>l,a:()=>r,c:()=>n});var v=d(5861),e=d(4110),l=(()=>((l=l||{}).Body="body",l.Ionic="ionic",l.Native="native",l.None="none",l))();const r={getEngine(){var t;return(null===(t=null==e.w?void 0:e.w.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Keyboard"))&&(null==e.w?void 0:e.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const t=this.getEngine();return null!=t&&t.getResizeMode?t.getResizeMode().catch(i=>{if("UNIMPLEMENTED"!==i.code)throw i}):Promise.resolve(void 0)}},c=t=>{if(void 0===e.d||t===l.None||void 0===t)return null;const i=e.d.querySelector("ion-app");return null!=i?i:e.d.body},o=t=>{const i=c(t);return null===i?0:i.clientHeight},n=function(){var t=(0,v.Z)(function*(i){let a,u,g,p;const w=function(){var s=(0,v.Z)(function*(){const _=yield r.getResizeMode(),y=void 0===_?void 0:_.mode;a=()=>{void 0===p&&(p=o(y)),g=!0,E(g,y)},u=()=>{g=!1,E(g,y)},null==e.w||e.w.addEventListener("keyboardWillShow",a),null==e.w||e.w.addEventListener("keyboardWillHide",u)});return function(){return s.apply(this,arguments)}}(),E=(s,_)=>{i&&i(s,M(_))},M=s=>{if(0===p||p===o(s))return;const _=c(s);return null!==_?new Promise(y=>{const b=new ResizeObserver(()=>{_.clientHeight===p&&(b.disconnect(),y())});b.observe(_)}):void 0};return yield w(),{init:w,destroy:()=>{null==e.w||e.w.removeEventListener("keyboardWillShow",a),null==e.w||e.w.removeEventListener("keyboardWillHide",u),a=u=void 0},isKeyboardVisible:()=>g}});return function(a){return t.apply(this,arguments)}}()},6690:(C,m,d)=>{d.d(m,{S:()=>e});const e={bubbles:{dur:1e3,circles:9,fn:(l,r,c)=>{const o=l*r/c-l+"ms",n=2*Math.PI*r/c;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(l,r,c)=>{const o=r/c,n=l*o-l+"ms",t=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*r+(r<c/2?180:-180)}deg)`,"animation-delay":l*r/c-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*r+(r<c/2?180:-180)}deg)`,"animation-delay":l*r/c-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/c-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/c-l+"ms"}})}}},4805:(C,m,d)=>{d.r(m),d.d(m,{createSwipeBackGesture:()=>c});var v=d(6655),e=d(5062),l=d(1898);d(4349);const c=(o,n,t,i,a)=>{const u=o.ownerDocument.defaultView;let g=(0,e.i)(o);const w=s=>g?-s.deltaX:s.deltaX;return(0,l.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:s=>(g=(0,e.i)(o),(s=>{const{startX:y}=s;return g?y>=u.innerWidth-50:y<=50})(s)&&n()),onStart:t,onMove:s=>{const y=w(s)/u.innerWidth;i(y)},onEnd:s=>{const _=w(s),y=u.innerWidth,O=_/y,b=(s=>g?-s.velocityX:s.velocityX)(s),D=b>=0&&(b>.2||_>y/2),L=(D?1-O:O)*y;let x=0;if(L>5){const A=L/Math.abs(b);x=Math.min(A,540)}a(D,O<=0?.01:(0,v.l)(0,O,.9999),x)}})}},4627:(C,m,d)=>{d.d(m,{c:()=>o});var v=d(4755),e=d(3020),l=d(5030),r=d(650);function c(n,t){if(1&n){const i=e.EpF();e.TgZ(0,"ion-button",3),e.NdJ("click",function(){e.CHM(i);const u=e.oxw();return e.KtG(u.latest.emit())}),e._uU(1,"Iniciar"),e.qZA()}}let o=(()=>{class n{constructor(){this.begin=!0,this.final=!1,this.index=0,this.total=0,this.latest=new e.vpe,this.change=new e.vpe}onStep(i){const a=this.total-1,u=this.index+(i?-1:1),g=u<0?0:u>a?a:u;this.begin=0==this.index,this.final=u==a,this.change.emit(g)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["quiz-footer"]],inputs:{index:"index",total:"total"},outputs:{latest:"latest",change:"change"},standalone:!0,features:[e.jDz],decls:12,vars:5,consts:[[1,"ion-text-center"],[3,"disabled","click"],[3,"click",4,"ngIf"],[3,"click"]],template:function(i,a){1&i&&(e.TgZ(0,"ion-footer",0)(1,"ion-button",1),e.NdJ("click",function(){return a.onStep(!0)}),e._uU(2,"<"),e.qZA(),e.TgZ(3,"section")(4,"label"),e._uU(5),e.qZA(),e._uU(6," / "),e.TgZ(7,"label"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-button",1),e.NdJ("click",function(){return a.onStep(!1)}),e._uU(10,">"),e.qZA(),e.YNc(11,c,2,0,"ion-button",2),e.qZA()),2&i&&(e.xp6(1),e.Q6J("disabled",a.begin),e.xp6(4),e.Oqu(a.index+1),e.xp6(3),e.Oqu(a.total),e.xp6(1),e.Q6J("disabled",a.final),e.xp6(2),e.Q6J("ngIf",a.final))},dependencies:[r.Pc,r.YG,r.fr,v.ez,v.O5,l.u5],styles:["ion-footer[_ngcontent-%COMP%]{margin-bottom:1rem;text-align:center}ion-footer[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]{height:2rem;line-height:2rem;display:inline-block;vertical-align:middle;margin:9px 20px 0;color:var(--ion-text-color);font-size:1.3rem;font-weight:700}"]}),n})()},5740:(C,m,d)=>{d.d(m,{G:()=>c});var v=d(4755),e=d(5030),l=d(650),r=d(3020);let c=(()=>{class o{constructor(){this.ranking=1,this.scoring=0,this.username=""}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Xpm({type:o,selectors:[["quiz-header"]],inputs:{ranking:"ranking",scoring:"scoring",username:"username"},standalone:!0,features:[r.jDz],decls:4,vars:4,consts:[[3,"translucent"],[1,"ion-text-center"]],template:function(t,i){1&t&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),r._uU(3),r.qZA()()()),2&t&&(r.Q6J("translucent",!0),r.xp6(3),r.lnq(" ",i.username,"\xa0\xa0|\xa0\xa0",i.scoring,"\xa0\xa0pontos\xa0\xa0|\xa0\xa0",i.ranking,"\xba Ranking "))},dependencies:[l.Pc,l.Gu,l.wd,l.sr,v.ez,e.u5],styles:["ion-title[_ngcontent-%COMP%]{font-size:1.1rem}"]}),o})()}}]);