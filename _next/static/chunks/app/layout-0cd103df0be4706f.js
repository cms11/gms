(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2624:function(e,t,r){Promise.resolve().then(r.bind(r,9512)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,5225,23)),Promise.resolve().then(r.t.bind(r,3054,23)),Promise.resolve().then(r.bind(r,3355)),Promise.resolve().then(r.bind(r,4433))},3355:function(e,t,r){"use strict";r.d(t,{default:function(){return ea}});var n=r(7437),o=r(9354),a=r(2265),i=r(8149),l=r(1584),s=r(8324),c=r(5171),u=r(6402),d=r(3201),m=r(5137),f=r(1715),h=r(7513),p="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[b,w,y]=(0,u.B)(g),[x,k]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>a.createContext(e));return function(r){let n=r?.[e]||t;return a.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return o.scopeName=e,[function(t,o){let i=a.createContext(o),l=r.length;function s(t){let{scope:r,children:o,...s}=t,c=r?.[e][l]||i,u=a.useMemo(()=>s,Object.values(s));return(0,n.jsx)(c.Provider,{value:u,children:o})}return r=[...r,o],s.displayName=t+"Provider",[s,function(r,n){let s=n?.[e][l]||i,c=a.useContext(s);if(c)return c;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(o,...t)]}(g,[y]),[E,j]=x(g),S=a.forwardRef((e,t)=>(0,n.jsx)(b.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(b.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,n.jsx)(N,{...e,ref:t})})}));S.displayName=g;var N=a.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:o,loop:s=!1,dir:u,currentTabStopId:d,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:b,onEntryFocus:y,preventScrollOnEntryFocus:x=!1,...k}=e,j=a.useRef(null),S=(0,l.e)(t,j),N=(0,h.gm)(u),[C=null,R]=(0,f.T)({prop:d,defaultProp:g,onChange:b}),[_,M]=a.useState(!1),I=(0,m.W)(y),L=w(r),A=a.useRef(!1),[F,P]=a.useState(0);return a.useEffect(()=>{let e=j.current;if(e)return e.addEventListener(p,I),()=>e.removeEventListener(p,I)},[I]),(0,n.jsx)(E,{scope:r,orientation:o,dir:N,loop:s,currentTabStopId:C,onItemFocus:a.useCallback(e=>R(e),[R]),onItemShiftTab:a.useCallback(()=>M(!0),[]),onFocusableItemAdd:a.useCallback(()=>P(e=>e+1),[]),onFocusableItemRemove:a.useCallback(()=>P(e=>e-1),[]),children:(0,n.jsx)(c.WV.div,{tabIndex:_||0===F?-1:0,"data-orientation":o,...k,ref:S,style:{outline:"none",...e.style},onMouseDown:(0,i.M)(e.onMouseDown,()=>{A.current=!0}),onFocus:(0,i.M)(e.onFocus,e=>{let t=!A.current;if(e.target===e.currentTarget&&t&&!_){let t=new CustomEvent(p,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=L().filter(e=>e.focusable);T([e.find(e=>e.active),e.find(e=>e.id===C),...e].filter(Boolean).map(e=>e.ref.current),x)}}A.current=!1}),onBlur:(0,i.M)(e.onBlur,()=>M(!1))})})}),C="RovingFocusGroupItem",R=a.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:o=!0,active:l=!1,tabStopId:s,...u}=e,m=(0,d.M)(),f=s||m,h=j(C,r),p=h.currentTabStopId===f,v=w(r),{onFocusableItemAdd:g,onFocusableItemRemove:y}=h;return a.useEffect(()=>{if(o)return g(),()=>y()},[o,g,y]),(0,n.jsx)(b.ItemSlot,{scope:r,id:f,focusable:o,active:l,children:(0,n.jsx)(c.WV.span,{tabIndex:p?0:-1,"data-orientation":h.orientation,...u,ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{o?h.onItemFocus(f):e.preventDefault()}),onFocus:(0,i.M)(e.onFocus,()=>h.onItemFocus(f)),onKeyDown:(0,i.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){h.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return _[o]}(e,h.orientation,h.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var r,n;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=h.loop?(r=o,n=a+1,r.map((e,t)=>r[(n+t)%r.length])):o.slice(a+1)}setTimeout(()=>T(o))}})})})});R.displayName=C;var _={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function T(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var M=r(5238),I=r(7250),L=r(1383),A="Radio",[F,P]=(0,s.b)(A),[D,G]=F(A),K=a.forwardRef((e,t)=>{let{__scopeRadio:r,name:o,checked:s=!1,required:u,disabled:d,value:m="on",onCheck:f,form:h,...p}=e,[v,g]=a.useState(null),b=(0,l.e)(t,e=>g(e)),w=a.useRef(!1),y=!v||h||!!v.closest("form");return(0,n.jsxs)(D,{scope:r,checked:s,disabled:d,children:[(0,n.jsx)(c.WV.button,{type:"button",role:"radio","aria-checked":s,"data-state":W(s),"data-disabled":d?"":void 0,disabled:d,value:m,...p,ref:b,onClick:(0,i.M)(e.onClick,e=>{s||null==f||f(),y&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())})}),y&&(0,n.jsx)(z,{control:v,bubbles:!w.current,name:o,value:m,checked:s,required:u,disabled:d,form:h,style:{transform:"translateX(-100%)"}})]})});K.displayName=A;var O="RadioIndicator",V=a.forwardRef((e,t)=>{let{__scopeRadio:r,forceMount:o,...a}=e,i=G(O,r);return(0,n.jsx)(L.z,{present:o||i.checked,children:(0,n.jsx)(c.WV.span,{"data-state":W(i.checked),"data-disabled":i.disabled?"":void 0,...a,ref:t})})});V.displayName=O;var z=e=>{let{control:t,checked:r,bubbles:o=!0,...i}=e,l=a.useRef(null),s=(0,I.D)(r),c=(0,M.t)(t);return a.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(s!==r&&t){let n=new Event("click",{bubbles:o});t.call(e,r),e.dispatchEvent(n)}},[s,r,o]),(0,n.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:r,...i,tabIndex:-1,ref:l,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function W(e){return e?"checked":"unchecked"}var U=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],$="RadioGroup",[q,B]=(0,s.b)($,[k,P]),H=k(),Y=P(),[J,Q]=q($),X=a.forwardRef((e,t)=>{let{__scopeRadioGroup:r,name:o,defaultValue:a,value:i,required:l=!1,disabled:s=!1,orientation:u,dir:d,loop:m=!0,onValueChange:p,...v}=e,g=H(r),b=(0,h.gm)(d),[w,y]=(0,f.T)({prop:i,defaultProp:a,onChange:p});return(0,n.jsx)(J,{scope:r,name:o,required:l,disabled:s,value:w,onValueChange:y,children:(0,n.jsx)(S,{asChild:!0,...g,orientation:u,dir:b,loop:m,children:(0,n.jsx)(c.WV.div,{role:"radiogroup","aria-required":l,"aria-orientation":u,"data-disabled":s?"":void 0,dir:b,...v,ref:t})})})});X.displayName=$;var Z="RadioGroupItem",ee=a.forwardRef((e,t)=>{let{__scopeRadioGroup:r,disabled:o,...s}=e,c=Q(Z,r),u=c.disabled||o,d=H(r),m=Y(r),f=a.useRef(null),h=(0,l.e)(t,f),p=c.value===s.value,v=a.useRef(!1);return a.useEffect(()=>{let e=e=>{U.includes(e.key)&&(v.current=!0)},t=()=>v.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}},[]),(0,n.jsx)(R,{asChild:!0,...d,focusable:!u,active:p,children:(0,n.jsx)(K,{disabled:u,required:c.required,checked:p,...m,...s,name:c.name,ref:h,onCheck:()=>c.onValueChange(s.value),onKeyDown:(0,i.M)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,i.M)(s.onFocus,()=>{var e;v.current&&(null===(e=f.current)||void 0===e||e.click())})})})});ee.displayName=Z,a.forwardRef((e,t)=>{let{__scopeRadioGroup:r,...o}=e,a=Y(r);return(0,n.jsx)(V,{...a,...o,ref:t})}).displayName="RadioGroupIndicator";var et=r(3152),er=r(9512);let en=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(X,{ref:t,className:(0,o.cx)("grid gap-2",r),...a})});en.displayName="RadioGroup";let eo=a.forwardRef((e,t)=>{let{className:r,icon:a,...i}=e;return(0,n.jsx)(ee,{ref:t,className:(0,o.cx)("group relative flex size-8 appearance-none items-center justify-center outline-none",r),...i,children:(0,n.jsx)("div",{className:(0,o.cx)("flex size-full shrink-0 items-center justify-center rounded-lg text-gray-700 dark:text-gray-400","bg-transparent","group-data-[state=checked]:bg-blue-50 group-data-[state=checked]:text-blue-600 dark:group-data-[state=checked]:bg-blue-500/20 dark:group-data-[state=checked]:text-blue-300",o.kN),children:(0,n.jsx)(a,{className:"size-4 text-inherit"})})})});eo.displayName="RadioGroupItem";var ea=()=>{let[e,t]=(0,a.useState)(!1),{theme:r,setTheme:o}=(0,er.F)();return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsxs)(en,{value:r,onValueChange:e=>{o(e)},className:"flex gap-1",children:[(0,n.jsx)(eo,{"aria-label":"Switch to System Mode",icon:et.QeY,value:"system",id:"system"}),(0,n.jsx)(eo,{"aria-label":"Switch to Light Mode",icon:et.sEY,value:"light",id:"light"}),(0,n.jsx)(eo,{"aria-label":"Switch to Dark Mode",icon:et.S6R,value:"dark",id:"dark"})]}):null}},4433:function(e,t,r){"use strict";r.d(t,{Navigation:function(){return s}});var n=r(7437),o=r(2265),a=r(9354),i=r(7138),l=r(6648);function s(){let e=function(e){let[t,r]=(0,o.useState)(!1),n=(0,o.useCallback)(()=>{r(window.scrollY>15)},[15]);return(0,o.useEffect)(()=>(window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)),[n]),t}(0),[t,r]=o.useState(!1);return o.useEffect(()=>{let e=window.matchMedia("(min-width: 768px)"),t=()=>{r(!1)};return e.addEventListener("change",t),t(),()=>{e.removeEventListener("change",t)}},[]),(0,n.jsx)("header",{className:(0,a.cx)("fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",!0===t?"h-52":"h-16",e||!0===t?"backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70":"bg-white/0 dark:bg-gray-950/0"),children:(0,n.jsxs)("div",{className:"w-full md:my-auto",children:[(0,n.jsxs)("div",{className:"relative flex items-center justify-between",children:[(0,n.jsxs)(i.default,{href:"/","aria-label":"Home",children:[(0,n.jsx)("span",{className:"sr-only",children:"Global Mining Suppliers"}),(0,n.jsx)(l.default,{className:"w-40 md:w-48 h-auto",src:"/images/gmslogo.png",alt:"Global Mining Suppliers Logo",width:160,height:80})]}),(0,n.jsx)("a",{className:"font-medium text-blue-700 dark:text-blue-500 hover:underline",href:"mailto:info@globalminingsuppliers.com",children:"Send Us an Email"})]}),(0,n.jsx)("nav",{className:(0,a.cx)("my-6 flex text-lg ease-in-out will-change-transform md:hidden",t?"":"hidden")})]})})}},9354:function(e,t,r){"use strict";r.d(t,{Du:function(){return i},cx:function(){return a},kN:function(){return l},qo:function(){return s}});var n=r(4839),o=r(6164);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.Z)(...t))}let i=["focus:ring-2","focus:ring-indigo-200 focus:dark:ring-indigo-700/30","focus:border-indigo-500 focus:dark:border-indigo-700"],l=["outline outline-offset-2 outline-0 focus-visible:outline-2","outline-indigo-500 dark:outline-indigo-500"],s=["ring-2","border-red-500 dark:border-red-700","ring-red-200 dark:ring-red-700/30"]},3054:function(){},5225:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},9512:function(e,t,r){"use strict";r.d(t,{F:function(){return c},ThemeProvider:function(){return u}});var n=r(2265),o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=n.createContext(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(l))?e:s},u=e=>n.useContext(l)?e.children:n.createElement(m,{...e}),d=["light","dark"],m=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:i=!0,enableColorScheme:s=!0,storageKey:c="theme",themes:u=d,defaultTheme:m=i?"system":"light",attribute:g="data-theme",value:b,children:w,nonce:y}=e,[x,k]=n.useState(()=>h(c,m)),[E,j]=n.useState(()=>h(c)),S=b?Object.values(b):u,N=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=v());let n=b?b[t]:t,a=r?p():null,l=document.documentElement;if("class"===g?(l.classList.remove(...S),n&&l.classList.add(n)):n?l.setAttribute(g,n):l.removeAttribute(g),s){let e=o.includes(m)?m:null,r=o.includes(t)?t:e;l.style.colorScheme=r}null==a||a()},[]),C=n.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),R=n.useCallback(e=>{j(v(e)),"system"===x&&i&&!t&&N("system")},[x,t]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(R),R(e),()=>e.removeListener(R)},[R]),n.useEffect(()=>{let e=e=>{e.key===c&&C(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),n.useEffect(()=>{N(null!=t?t:x)},[t,x]);let _=n.useMemo(()=>({theme:x,setTheme:C,forcedTheme:t,resolvedTheme:"system"===x?E:x,themes:i?[...u,"system"]:u,systemTheme:i?E:void 0}),[x,C,t,E,i,u]);return n.createElement(l.Provider,{value:_},n.createElement(f,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:i,enableColorScheme:s,storageKey:c,themes:u,defaultTheme:m,attribute:g,value:b,children:w,attrs:S,nonce:y}),w)},f=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:i,enableSystem:l,enableColorScheme:s,defaultTheme:c,value:u,attrs:d,nonce:m}=e,f="system"===c,h="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),p=s?(o.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=u?u[e]:e,a=t?e+"|| ''":"'".concat(n,"'"),l="";return s&&r&&!t&&o.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||n?l+="c.add(".concat(a,")"):l+="null":n&&(l+="d[s](n,".concat(a,")")),l},g=t?"!function(){".concat(h).concat(v(t),"}()"):l?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(r,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}").concat(f?"":"else{"+v(c,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(r,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(v(u?"x[e]":"e",!0),"}else{").concat(v(c,!1,!1),";}").concat(p,"}catch(t){}}();");return n.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})}),h=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}},function(e){e.O(0,[126,665,173,231,678,514,971,23,744],function(){return e(e.s=2624)}),_N_E=e.O()}]);