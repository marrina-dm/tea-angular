import"./chunk-JNGAKWPD.js";import{$ as c,A as u,B as M,Ba as Me,C as E,Ca as Ee,F as J,H as W,I as Q,K as N,L as Y,La as Ae,M as K,Na as A,O as k,P as q,Q as ye,S as x,V as Z,W as ve,X as F,Y as X,Z as P,_ as l,a as V,aa as ee,b as ue,ba as te,c as R,ca as ie,d as f,da as ne,e as he,ea as De,fa as Te,g as j,h as U,ha as we,ia as Se,j as b,ja as Oe,k as pe,ka as d,l as S,m as _e,n as I,o as O,oa as se,p as fe,q as ge,r as h,s as me,t as z,ua as Ce,w as D,x as C,xa as B,y as be,za as G}from"./chunk-BCLHCJ64.js";var Be=["*"];var Ge=["dialog"];var Re={animation:!0,transitionTimerDelayMs:5},Le=(()=>{let e=class e{constructor(){this.animation=Re.animation}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();function He(s){let{transitionDelay:e,transitionDuration:a}=window.getComputedStyle(s),t=parseFloat(e),i=parseFloat(a);return(t+i)*1e3}function Ie(s){return typeof s=="string"}function oe(s){return s!=null}function Ve(s){return s&&s.then}function Ne(s){return(s||document.body).getBoundingClientRect()}function $e(s){return e=>new R(a=>{let t=o=>s.run(()=>a.next(o)),i=o=>s.run(()=>a.error(o)),n=()=>s.run(()=>a.complete());return e.subscribe({next:t,error:i,complete:n})})}var je=()=>{},{transitionTimerDelayMs:Ue}=Re,L=new Map,v=(s,e,a,t)=>{let i=t.context||{},n=L.get(e);if(n)switch(t.runningTransition){case"continue":return he;case"stop":s.run(()=>n.transition$.complete()),i=Object.assign(n.context,i),L.delete(e)}let o=a(e,t.animation,i)||je;if(!t.animation||window.getComputedStyle(e).transitionProperty==="none")return s.run(()=>o()),j(void 0).pipe($e(s));let r=new f,p=new f,_=r.pipe(fe(!0));L.set(e,{transition$:r,complete:()=>{p.next(),p.complete()},context:i});let g=He(e);return s.runOutsideAngular(()=>{let w=b(e,"transitionend").pipe(h(_),S(({target:y})=>y===e)),m=pe(g+Ue).pipe(h(_));_e(m,w,p).pipe(h(_)).subscribe(()=>{L.delete(e),s.run(()=>{o(),r.next(),r.complete()})})}),r.asObservable()};var mi=(()=>{let s=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(s()||e()):!1})();var ze=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function ke(s){let e=Array.from(s.querySelectorAll(ze)).filter(a=>a.tabIndex!==-1);return[e[0],e[e.length-1]]}var Je=(s,e,a,t=!1)=>{s.runOutsideAngular(()=>{let i=b(e,"focusin").pipe(h(a),U(n=>n.target));b(e,"keydown").pipe(h(a),S(n=>n.key==="Tab"),z(i)).subscribe(([n,o])=>{let[r,p]=ke(e);(o===r||o===e)&&n.shiftKey&&(p.focus(),n.preventDefault()),o===p&&!n.shiftKey&&(r.focus(),n.preventDefault())}),t&&b(e,"click").pipe(h(a),z(i),U(n=>n[1])).subscribe(n=>n.focus())})};var bi=new Date(1882,10,12),yi=new Date(2174,10,25);var vi=1e3*60*60*24;var ce=1080,We=24*ce,Qe=12*ce+793,Di=29*We+Qe,Ti=11*ce+204;var Ye=(()=>{let e=class e{constructor(){this._ngbConfig=u(Le),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(t){this._animation=t}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),T=class{constructor(e,a,t){this.nodes=e,this.viewRef=a,this.componentRef=t}};var Ke=(()=>{let e=class e{constructor(){this._document=u(G)}hide(){let t=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),i=this._document.body,n=i.style,{overflow:o,paddingRight:r}=n;if(t>0){let p=parseFloat(window.getComputedStyle(i).paddingRight);n.paddingRight=`${p+t}px`}return n.overflow="hidden",()=>{t>0&&(n.paddingRight=r),n.overflow=o}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),qe=(()=>{let e=class e{constructor(){this._nativeElement=u(Y).nativeElement,this._zone=u(x)}ngOnInit(){this._zone.onStable.asObservable().pipe(O(1)).subscribe(()=>{v(this._zone,this._nativeElement,(t,i)=>{i&&Ne(t),t.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return v(this._zone,this._nativeElement,({classList:t})=>t.remove("show"),{animation:this.animation,runningTransition:"stop"})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=M({type:e,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(i,n){i&2&&(P("modal-backdrop"+(n.backdropClass?" "+n.backdropClass:"")),X("show",!n.animation)("fade",n.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[se],decls:0,vars:0,template:function(i,n){},encapsulation:2});let s=e;return s})(),H=class{update(e){}close(e){}dismiss(e){}},Ze=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],Xe=["animation","backdropClass"],ae=class{_applyWindowOptions(e,a){Ze.forEach(t=>{oe(a[t])&&(e[t]=a[t])})}_applyBackdropOptions(e,a){Xe.forEach(t=>{oe(a[t])&&(e[t]=a[t])})}update(e){this._applyWindowOptions(this._windowCmptRef.instance,e),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,e)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(h(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(h(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(e,a,t,i){this._windowCmptRef=e,this._contentRef=a,this._backdropCmptRef=t,this._beforeDismiss=i,this._closed=new f,this._dismissed=new f,this._hidden=new f,e.instance.dismissEvent.subscribe(n=>{this.dismiss(n)}),this.result=new Promise((n,o)=>{this._resolve=n,this._reject=o}),this.result.then(null,()=>{})}close(e){this._windowCmptRef&&(this._closed.next(e),this._resolve(e),this._removeModalElements())}_dismiss(e){this._dismissed.next(e),this._reject(e),this._removeModalElements()}dismiss(e){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(e);else{let a=this._beforeDismiss();Ve(a)?a.then(t=>{t!==!1&&this._dismiss(e)},()=>{}):a!==!1&&this._dismiss(e)}}_removeModalElements(){let e=this._windowCmptRef.instance.hide(),a=this._backdropCmptRef?this._backdropCmptRef.instance.hide():j(void 0);e.subscribe(()=>{let{nativeElement:t}=this._windowCmptRef.location;t.parentNode.removeChild(t),this._windowCmptRef.destroy(),this._contentRef?.viewRef?.destroy(),this._windowCmptRef=null,this._contentRef=null}),a.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:t}=this._backdropCmptRef.location;t.parentNode.removeChild(t),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),I(e,a).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},re=function(s){return s[s.BACKDROP_CLICK=0]="BACKDROP_CLICK",s[s.ESC=1]="ESC",s}(re||{}),et=(()=>{let e=class e{constructor(){this._document=u(G),this._elRef=u(Y),this._zone=u(x),this._closed$=new f,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new K,this.shown=new f,this.hidden=new f}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":Ie(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(t){this.dismissEvent.emit(t)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(O(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:t}=this._elRef,i={animation:this.animation,runningTransition:"stop"},n=v(this._zone,t,()=>t.classList.remove("show"),i),o=v(this._zone,this._dialogEl.nativeElement,()=>{},i),r=I(n,o);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let t={animation:this.animation,runningTransition:"continue"},i=v(this._zone,this._elRef.nativeElement,(o,r)=>{r&&Ne(o),o.classList.add("show")},t),n=v(this._zone,this._dialogEl.nativeElement,()=>{},t);I(i,n).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:t}=this._elRef;this._zone.runOutsideAngular(()=>{b(t,"keydown").pipe(h(this._closed$),S(n=>n.key==="Escape")).subscribe(n=>{this.keyboard?requestAnimationFrame(()=>{n.defaultPrevented||this._zone.run(()=>this.dismiss(re.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let i=!1;b(this._dialogEl.nativeElement,"mousedown").pipe(h(this._closed$),me(()=>i=!1),ge(()=>b(t,"mouseup").pipe(h(this._closed$),O(1))),S(({target:n})=>t===n)).subscribe(()=>{i=!0}),b(t,"click").pipe(h(this._closed$)).subscribe(({target:n})=>{t===n&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!i&&this._zone.run(()=>this.dismiss(re.BACKDROP_CLICK))),i=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:t}=this._elRef;if(!t.contains(document.activeElement)){let i=t.querySelector("[ngbAutofocus]"),n=ke(t)[0];(i||n||t).focus()}}_restoreFocus(){let t=this._document.body,i=this._elWithFocus,n;i&&i.focus&&t.contains(i)?n=i:n=t,this._zone.runOutsideAngular(()=>{setTimeout(()=>n.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&v(this._zone,this._elRef.nativeElement,({classList:t})=>(t.add("modal-static"),()=>t.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=M({type:e,selectors:[["ngb-modal-window"]],viewQuery:function(i,n){if(i&1&&we(Ge,7),i&2){let o;Se(o=Oe())&&(n._dialogEl=o.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(i,n){i&2&&(ve("aria-modal",!0)("aria-labelledby",n.ariaLabelledBy)("aria-describedby",n.ariaDescribedBy),P("modal d-block"+(n.windowClass?" "+n.windowClass:"")),X("fade",n.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[se],ngContentSelectors:Be,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(i,n){i&1&&(De(),l(0,"div",1,0)(2,"div",2),Te(3),c()()),i&2&&P("modal-dialog"+(n.size?" modal-"+n.size:"")+(n.centered?" modal-dialog-centered":"")+n.fullscreenClass+(n.scrollable?" modal-dialog-scrollable":"")+(n.modalDialogClass?" "+n.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let s=e;return s})(),tt=(()=>{let e=class e{constructor(){this._applicationRef=u(Ce),this._injector=u(N),this._environmentInjector=u(J),this._document=u(G),this._scrollBar=u(Ke),this._activeWindowCmptHasChanged=new f,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new K;let t=u(x);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let i=this._windowCmpts[this._windowCmpts.length-1];Je(t,i.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(i.location.nativeElement)}})}_restoreScrollBar(){let t=this._scrollBarRestoreFn;t&&(this._scrollBarRestoreFn=null,t())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(t,i,n){let o=n.container instanceof HTMLElement?n.container:oe(n.container)?this._document.querySelector(n.container):this._document.body;if(!o)throw new Error(`The specified modal container "${n.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new H;t=n.injector||t;let p=t.get(J,null)||this._environmentInjector,_=this._getContentRef(t,p,i,r,n),g=n.backdrop!==!1?this._attachBackdrop(o):void 0,w=this._attachWindowComponent(o,_.nodes),m=new ae(w,_,g,n.beforeDismiss);return this._registerModalRef(m),this._registerWindowCmpt(w),m.hidden.pipe(O(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=y=>{m.close(y)},r.dismiss=y=>{m.dismiss(y)},r.update=y=>{m.update(y)},m.update(n),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),g&&g.instance&&g.changeDetectorRef.detectChanges(),w.changeDetectorRef.detectChanges(),m}get activeInstances(){return this._activeInstances}dismissAll(t){this._modalRefs.forEach(i=>i.dismiss(t))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(t){let i=B(qe,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(i.hostView),t.appendChild(i.location.nativeElement),i}_attachWindowComponent(t,i){let n=B(et,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:i});return this._applicationRef.attachView(n.hostView),t.appendChild(n.location.nativeElement),n}_getContentRef(t,i,n,o,r){return n?n instanceof ye?this._createFromTemplateRef(n,o):Ie(n)?this._createFromString(n):this._createFromComponent(t,i,n,o,r):new T([])}_createFromTemplateRef(t,i){let n={$implicit:i,close(r){i.close(r)},dismiss(r){i.dismiss(r)}},o=t.createEmbeddedView(n);return this._applicationRef.attachView(o),new T([o.rootNodes],o)}_createFromString(t){let i=this._document.createTextNode(`${t}`);return new T([[i]])}_createFromComponent(t,i,n,o,r){let p=N.create({providers:[{provide:H,useValue:o}],parent:t}),_=B(n,{environmentInjector:i,elementInjector:p}),g=_.location.nativeElement;return r.scrollable&&g.classList.add("component-host-scrollable"),this._applicationRef.attachView(_.hostView),new T([[g]],_.hostView,_)}_setAriaHidden(t){let i=t.parentElement;i&&t!==this._document.body&&(Array.from(i.children).forEach(n=>{n!==t&&n.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}),this._setAriaHidden(i))}_revertAriaHidden(){this._ariaHiddenValues.forEach((t,i)=>{t?i.setAttribute("aria-hidden",t):i.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(t){let i=()=>{let n=this._modalRefs.indexOf(t);n>-1&&(this._modalRefs.splice(n,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(t),this._activeInstances.emit(this._modalRefs),t.result.then(i,i)}_registerWindowCmpt(t){this._windowCmpts.push(t),this._activeWindowCmptHasChanged.next(),t.onDestroy(()=>{let i=this._windowCmpts.indexOf(t);i>-1&&(this._windowCmpts.splice(i,1),this._activeWindowCmptHasChanged.next())})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),xe=(()=>{let e=class e{constructor(){this._injector=u(N),this._modalStack=u(tt),this._config=u(Ye)}open(t,i={}){let n=V(ue(V({},this._config),{animation:this._config.animation}),i);return this._modalStack.open(this._injector,t,n)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(t){this._modalStack.dismissAll(t)}hasOpenModals(){return this._modalStack.hasOpenModals()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var wi=new be("live announcer delay",{providedIn:"root",factory:()=>100});function nt(s,e){if(s&1){let a=te();l(0,"section",18)(1,"div",19)(2,"div",20)(3,"div",21)(4,"div",22)(5,"button",23),ie("click",function(){W(a);let i=ne();return Q(i.closePopup())}),c()(),l(6,"div",24),d(7," \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430\u0448\u0438 \u0447\u0430\u0439\u043D\u044B\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 "),c(),l(8,"div",25)(9,"button",26),d(10,"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C"),c()()()()()()}s&2&&(k(9),F("routerLink","/products"))}var Fe=(()=>{let e=class e{constructor(t){this.modalService=t,this.subscription=null,this.isOpen=!1,this.observable=new R(i=>{let n=setTimeout(()=>{i.next(!0)},1e4);return{unsubscribe(){clearTimeout(n)}}})}ngOnInit(){this.accordionInit(),this.subscription=this.observable.subscribe(t=>this.isOpen=t)}ngOnDestroy(){this.subscription?.unsubscribe()}accordionInit(){$("#accordion").accordion({heightStyle:"content",collapsible:!0})}closePopup(){this.isOpen=!1}};e.\u0275fac=function(i){return new(i||e)(q(xe))},e.\u0275cmp=M({type:e,selectors:[["app-main"]],decls:45,vars:1,consts:[[1,"main","py-5"],[1,"container-lg","px-0"],[1,"single-item"],[1,"card","border-0"],["src","images/promo1.png","alt","\u0422\u0440\u0430\u0432\u044F\u043D\u044B\u0435 \u0447\u0430\u0438",1,"card-img"],[1,"card-img-overlay","d-flex","flex-column","justify-content-center","gap-sm-5","ms-sm-5","ps-sm-5"],[1,"card-title","fw-bold","m-0","ms-3","ms-sm-4"],[1,"card-text","m-0","ms-3","ms-sm-4"],["type","button",1,"btn","btn-primary","px-2","py-1","px-sm-5","ms-3","ms-sm-4","me-auto"],[1,"faq","py-5"],[1,"container"],[1,"fw-bold","text-center","mb-5"],[1,"row","justify-content-center"],[1,"col-lg-8"],["id","accordion",1,"ui-accordion"],[1,"ui-accordion-header","border-0","rounded","p-4","fw-bold","bg-primary","bg-gradient","text-white","mb-3"],[1,"ui-accordion-content","border-0","text-black","pt-0"],["class","popup position-fixed top-0 start-0 z-2 w-100 h-100 bg-black bg-opacity-25",4,"ngIf"],[1,"popup","position-fixed","top-0","start-0","z-2","w-100","h-100","bg-black","bg-opacity-25"],[1,"d-flex","align-items-center","justify-content-center","h-100"],[1,"bg-white","p-1","rounded-3"],[1,""],[1,"d-flex","justify-content-end"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"text-center","fs-4","p-4"],[1,"d-flex","justify-content-center","p-3"],["type","button",1,"btn","btn-primary",3,"routerLink"]],template:function(i,n){i&1&&(l(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),ee(4,"img",4),l(5,"div",5)(6,"h2",6),d(7,"\u0421\u043A\u0438\u0434\u043A\u0438 \u043D\u0430 \u0442\u0440\u0430\u0432\u044F\u043D\u044B\u0435 \u0447\u0430\u0438"),c(),l(8,"p",7),d(9,"\u0423\u0437\u043D\u0430\u0439 \u0432\u0441\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0432 \u0437\u0430\u044F\u0432\u043A\u0443"),c(),l(10,"button",8),d(11,"\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C"),c()()()()()(),l(12,"section",9)(13,"div",10)(14,"h2",11),d(15,"\u041E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0447\u0430\u0441\u0442\u043E \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"),c(),l(16,"div",12)(17,"div",13)(18,"div",14)(19,"h3",15),d(20," \u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u043B\u0438 \u0432\u044B \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0435 \u0431\u043E\u043A\u0441\u044B? "),c(),l(21,"div",16)(22,"p"),d(23," \u0414\u0430, \u0443 \u043D\u0430\u0441 \u0435\u0441\u0442\u044C \u0442\u0430\u043A\u0430\u044F \u0443\u0441\u043B\u0443\u0433\u0430. \u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u0439 \u0431\u043E\u043A\u0441 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441, \u043E\u0431\u044A\u0435\u043C \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C! "),c()(),l(24,"h3",15),d(25," \u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0443 \u0432\u0430\u0441 \u0440\u0430\u0437\u043D\u043E\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u0435\u0439 \u0447\u0430\u044F? "),c(),l(26,"div",16)(27,"p"),d(28," \u041D\u0430\u0448\u0430 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0438 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F. \u0423 \u043D\u0430\u0441 \u0412\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u0447\u0430\u0439 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0432\u043A\u0443\u0441 "),c()(),l(29,"h3",15),d(30," \u0412 \u043A\u0430\u043A\u043E\u0439 \u0441\u0440\u043E\u043A \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430? "),c(),l(31,"div",16)(32,"p"),d(33," \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043B\u0438\u0442\u0441\u044F \u043E\u0442 2-\u0445 \u0434\u043E 7-\u043C\u0438 \u0434\u043D\u0435\u0439 "),c()(),l(34,"h3",15),d(35," \u0423 \u0432\u0430\u0441 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442? "),c(),l(36,"div",16)(37,"p"),d(38," \u041A\u043E\u043D\u0435\u0447\u043D\u043E, \u043A\u0430\u0436\u0434\u044B\u0439 \u043C\u0435\u0441\u044F\u0446 \u043C\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E \u0447\u0430\u044F "),c()(),l(39,"h3",15),d(40," \u041A\u0430\u043A\u043E\u0433\u043E \u043E\u0431\u044A\u0435\u043C\u0430 \u0443 \u0432\u0430\u0441 \u043F\u0430\u0447\u043A\u0438 \u0447\u0430\u044F? "),c(),l(41,"div",16)(42,"p"),d(43," \u0423 \u043D\u0430\u0441 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0447\u0430\u0439 \u043E\u0431\u044A\u0435\u043C\u0430 200\u0433 - 1000\u0433 "),c()()()()()()(),Z(44,nt,11,1,"section",17)),i&2&&(k(44),F("ngIf",n.isOpen))},dependencies:[Me,Ae]});let s=e;return s})();var st=[{path:"",component:Fe}],de=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=E({type:e}),e.\u0275inj=C({imports:[A.forChild(st),A]});let s=e;return s})();var Bi=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=E({type:e}),e.\u0275inj=C({imports:[Ee,A,de,de]});let s=e;return s})();export{Bi as MainModule};
