import{k as dt,i as L,_ as V,o as u,c as m,a as t,g as p,t as _,m as $,r as O,e as k,f as P,F as R,j as ht,b as g,p as K,l as U,h as C,n as A,w as B,v as j,d as ut}from"./index-4827bd10.js";import{r as mt,a as pt,b as ft,c as _t}from"./base-component-1450a5e0.js";import{u as x}from"./CartStore-c5ee67d9.js";import{u as q}from"./ProductStore-22e21e3a.js";import{u as G}from"./ScrollStore-4ba258a1.js";var F={},gt={get exports(){return F},set exports(e){F=e}};/*!
  * Bootstrap collapse.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(e,s){(function(h,y){e.exports=y(mt(),pt(),ft(),_t())})(dt,function(h,y,r,l){const d=f=>f&&typeof f=="object"&&"default"in f?f:{default:f},i=d(y),o=d(r),Y=d(l),Q="collapse",I=".bs.collapse",W=".data-api",J=`show${I}`,Z=`shown${I}`,X=`hide${I}`,tt=`hidden${I}`,et=`click${I}${W}`,N="show",S="collapse",T="collapsing",st="collapsed",ot=`:scope .${S} .${S}`,at="collapse-horizontal",lt="width",nt="height",it=".collapse.show, .collapse.collapsing",M='[data-bs-toggle="collapse"]',rt={parent:null,toggle:!0},ct={parent:"(null|element)",toggle:"boolean"};class w extends Y.default{constructor(a,c){super(a,c),this._isTransitioning=!1,this._triggerArray=[];const n=o.default.find(M);for(const b of n){const E=h.getSelectorFromElement(b),H=o.default.find(E).filter(v=>v===this._element);E!==null&&H.length&&this._triggerArray.push(b)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return rt}static get DefaultType(){return ct}static get NAME(){return Q}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(it).filter(v=>v!==this._element).map(v=>w.getOrCreateInstance(v,{toggle:!1}))),a.length&&a[0]._isTransitioning||i.default.trigger(this._element,J).defaultPrevented)return;for(const v of a)v.hide();const n=this._getDimension();this._element.classList.remove(S),this._element.classList.add(T),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const b=()=>{this._isTransitioning=!1,this._element.classList.remove(T),this._element.classList.add(S,N),this._element.style[n]="",i.default.trigger(this._element,Z)},H=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(b,this._element,!0),this._element.style[n]=`${this._element[H]}px`}hide(){if(this._isTransitioning||!this._isShown()||i.default.trigger(this._element,X).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,h.reflow(this._element),this._element.classList.add(T),this._element.classList.remove(S,N);for(const b of this._triggerArray){const E=h.getElementFromSelector(b);E&&!this._isShown(E)&&this._addAriaAndCollapsedClass([b],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(T),this._element.classList.add(S),i.default.trigger(this._element,tt)};this._element.style[c]="",this._queueCallback(n,this._element,!0)}_isShown(a=this._element){return a.classList.contains(N)}_configAfterMerge(a){return a.toggle=Boolean(a.toggle),a.parent=h.getElement(a.parent),a}_getDimension(){return this._element.classList.contains(at)?lt:nt}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(M);for(const c of a){const n=h.getElementFromSelector(c);n&&this._addAriaAndCollapsedClass([c],this._isShown(n))}}_getFirstLevelChildren(a){const c=o.default.find(ot,this._config.parent);return o.default.find(a,this._config.parent).filter(n=>!c.includes(n))}_addAriaAndCollapsedClass(a,c){if(a.length)for(const n of a)n.classList.toggle(st,!c),n.setAttribute("aria-expanded",c)}static jQueryInterface(a){const c={};return typeof a=="string"&&/show|hide/.test(a)&&(c.toggle=!1),this.each(function(){const n=w.getOrCreateInstance(this,c);if(typeof a=="string"){if(typeof n[a]>"u")throw new TypeError(`No method named "${a}"`);n[a]()}})}}return i.default.on(document,et,M,function(f){(f.target.tagName==="A"||f.delegateTarget&&f.delegateTarget.tagName==="A")&&f.preventDefault();const a=h.getSelectorFromElement(this),c=o.default.find(a);for(const n of c)w.getOrCreateInstance(n,{toggle:!1}).toggle()}),h.defineJQueryPlugin(w),w})})(gt);const bt=F;const vt={props:["deleteState","cartItem"],data(){return{modal:{},tempCartItem:{product:{}}}},methods:{...L(x,["getCarts","clearAllCarts","deleteCartItem"]),openModal(){this.modal.classList.add("d-block"),this.$refs.modalContent.classList.add("animation-from-top")},closeModal(){this.modal.classList.remove("d-block")},deleteItems(){this.deleteState==="all"?(this.clearAllCarts(),this.closeModal()):this.deleteState==="item"&&(this.deleteCartItem(this.cartItem.id),this.closeModal())},clickMaskAlert(){const e=this.$refs.modalContent;e.classList.contains("animation-from-top")&&e.classList.remove("animation-from-top"),e.classList.add("animation-zoom"),setTimeout(()=>{e.classList.remove("animation-zoom")},500)}},mounted(){this.modal=this.$refs.modal,this.tempCartItem={...this.cartItem}}},Ct={class:"modal",ref:"modal","data-focus":"false"},yt={class:"modal-dialog modal-dialog-centered"},St={class:"modal-content rounded-1",ref:"modalContent"},wt={class:"modal-header"},Et={key:0,class:"modal-title"},At={key:1,class:"modal-title"},kt={class:"modal-body"},It={key:0},Lt={key:1},xt={class:"text-secondary"},Tt={class:"modal-footer"};function $t(e,s,h,y,r,l){var d,i;return u(),m("div",Ct,[t("div",yt,[t("div",St,[t("div",wt,[h.deleteState==="all"?(u(),m("h5",Et,"清空購物車")):(u(),m("h5",At,"移除商品")),t("button",{type:"button",class:"btn-close",onClick:s[0]||(s[0]=(...o)=>l.closeModal&&l.closeModal(...o))})]),t("div",kt,[h.deleteState==="all"?(u(),m("p",It,"請確認是否清空購物車商品？")):(u(),m("p",Lt,[p(" 請確認是否移除 "),t("span",xt,_((i=(d=h.cartItem)==null?void 0:d.product)==null?void 0:i.title),1),p(" ？ ")]))]),t("div",Tt,[t("button",{type:"button",class:"btn btn-primary rounded-1",onClick:s[1]||(s[1]=(...o)=>l.closeModal&&l.closeModal(...o))}," 取消 "),t("button",{type:"button",class:"btn btn-outline-secondary rounded-1",onClick:s[2]||(s[2]=(...o)=>l.deleteItems&&l.deleteItems(...o))}," 確認刪除 ")])],512)]),t("div",{class:"modal-mask",onClick:s[3]||(s[3]=(...o)=>l.clickMaskAlert&&l.clickMaskAlert(...o))})],512)}const Pt=V(vt,[["render",$t],["__scopeId","data-v-bc833be1"]]);const Dt={components:{AlertDeleteCart:Pt},data(){return{offcanvas:{},deleteState:"",cartItem:""}},computed:{...$(x,["cart"])},methods:{...L(x,["getCarts","clearAllCarts","deleteCartItem"]),openDeleteModal(e,s){this.deleteState=e,this.cartItem=s,this.$refs.alertDeleteCart.openModal()}},mounted(){this.getCarts()}},z=e=>(K("data-v-6bf48667"),e=e(),U(),e),Nt={ref:"cartOffcanvas",class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},Mt=z(()=>t("div",{class:"offcanvas-header bg-primary"},[t("h5",{class:"offcanvas-title text-white",id:"offcanvasRightLabel"}," 購物車 "),t("button",{type:"button",class:"btn p-0 text-white d-flex","data-bs-dismiss":"offcanvas","aria-label":"Close"},[t("span",{class:"material-symbols-outlined"},"close")])],-1)),Ht={class:"offcanvas-body bg-mask-texture"},Ot={class:"text-end mb-6"},Rt={class:"position-relative h-75"},Ft={key:0,class:"text-center position-absolute top-50 start-50 translate-middle"},Vt=z(()=>t("p",{class:"fs-3 my-10"},"目前無商品",-1)),zt={key:1},Bt={class:"w-auto me-4"},jt=["src","alt"],qt={class:"d-flex justify-content-between align-items-center w-100"},Gt=["onClick"],Kt=z(()=>t("span",{class:"material-symbols-outlined"}," delete ",-1)),Ut=[Kt],Yt={class:"mt-4"},Qt={class:"text-end fs-3 mb-5"},Wt=["disabled"];function Jt(e,s,h,y,r,l){const d=O("AlertDeleteCart");return u(),m(R,null,[t("div",Nt,[Mt,t("div",Ht,[t("div",Ot,[k(t("button",{type:"button",class:"btn btn-outline-secondary",onClick:s[0]||(s[0]=i=>l.openDeleteModal("all"))}," 清空購物車 ",512),[[P,e.cart.carts.length]])]),t("div",Rt,[e.cart.carts.length?(u(),m("div",zt,[t("ul",null,[(u(!0),m(R,null,ht(e.cart.carts,i=>(u(),m("li",{class:"d-flex align-items-center mb-2 pb-2 border-bottom",key:i.id},[t("div",Bt,[t("img",{src:i.product.imageUrl,alt:i.product.title,class:"object-cover",style:{width:"80px",height:"80px"}},null,8,jt)]),t("div",qt,[t("div",null,[t("p",null,_(i.product.title),1),t("span",null,_(i.qty)+" x ",1),t("span",null,"NT$ "+_(i.product.price),1)]),t("button",{type:"button",class:"btn",onClick:o=>l.openDeleteModal("item",i)},Ut,8,Gt)])]))),128))]),t("div",Yt,[t("p",Qt,"總計: $"+_(e.cart.final_total),1),t("button",{type:"button",class:"btn btn-primary w-100 rounded-1 py-2",onClick:s[2]||(s[2]=i=>this.$router.push("/checkOrder")),disabled:!e.cart.carts.length,"data-bs-dismiss":"offcanvas"}," 前往結帳 ",8,Wt)])])):(u(),m("div",Ft,[Vt,t("button",{type:"button",class:"btn btn-outline-secondary rounded-1","data-bs-dismiss":"offcanvas",onClick:s[1]||(s[1]=i=>e.$router.push("/products"))}," 找甜點去 ")]))])])],512),g(d,{ref:"alertDeleteCart","delete-state":r.deleteState,"cart-item":r.cartItem},null,8,["delete-state","cart-item"])],64)}const Zt=V(Dt,[["render",Jt],["__scopeId","data-v-6bf48667"]]);const Xt={components:{CartListOffcanvas:Zt},props:["isMobile"],data(){return{isHomeRoute:!0,isInputSearchShow:!1,isInputSearchPhoneShow:!1,isCartEmpty:!0,isCollapseOpen:!1,collapse:null,searchTerm:"",headerClass:"",lastScrollTime:0}},computed:{...$(x,["cart"]),...$(q,["productsAll","favorites"]),...$(G,["scrollPosition","isNewsPosition"])},watch:{cart(){var e,s;(s=(e=this.cart)==null?void 0:e.carts)!=null&&s.length?this.isCartEmpty=!1:this.isCartEmpty=!0},$route(){this.closeCollapse(),this.isInputSearchShow=!1,this.isInputSearchPhoneShow=!1,this.searchTerm=""},"$route.name"(e){this.isHomeRoute=e==="home",this.updateHeaderClass()},isNewsPosition(){this.updateHeaderClass()},isInputSearchPhoneShow(){this.updateHeaderClass()},isInputSearchShow(){setTimeout(()=>{this.$refs.btnSearch.focus()},0)}},methods:{...L(x,["getCarts"]),...L(q,["getProductsAll","setQuery"]),...L(G,["setScrollPosition"]),searchProduct(){this.$router.push({path:"/search"}),this.setQuery(this.searchTerm)},handleScroll(){this.setScrollPosition(window.scrollY)},updateHeaderClass(){this.isHomeRoute?this.isCollapseOpen||this.isInputSearchPhoneShow?this.headerClass="bg-primary bg-opacity-100":this.headerClass=this.isNewsPosition?"bg-primary":"bg-white":this.headerClass="bg-primary",this.headerClass+=" "+(this.isHomeRoute?"fixed-top":"sticky-top"),this.isHomeRoute&&!this.isNewsPosition&&(this.headerClass+=" bg-opacity-10")},toggleCollapse(){this.isCollapseOpen?(this.isCollapseOpen=!1,this.updateHeaderClass()):(this.isCollapseOpen=!0,this.updateHeaderClass()),this.collapse.toggle()},closeCollapse(){this.collapse.hide()}},mounted(){this.isHomeRoute=this.$route.name==="home",this.updateHeaderClass(),this.getProductsAll(),this.collapse=new bt(this.$refs.collapse,{toggle:!1}),window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)}},D=e=>(K("data-v-22fccd82"),e=e(),U(),e),te={class:"navbar navbar-expand-lg py-4 navbar-light bg-inherit"},ee={class:"container d-flex justify-content-between"},se={class:"me-3"},oe={class:"d-flex ms-auto d-lg-none"},ae=D(()=>t("span",{class:"material-symbols-outlined hover-text-secondary-200"}," search ",-1)),le=[ae],ne={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"},ie=D(()=>t("span",{class:"visually-hidden"},"unread messages",-1)),re=D(()=>t("span",{class:"material-symbols-outlined text-white hover-text-secondary-200"}," menu ",-1)),ce=[re],de={class:"collapse navbar-collapse justify-content-center",id:"navbarLinkContent",ref:"collapse"},he={class:"navbar-nav mb-2 mb-lg-0"},ue={class:"nav-item me-8 d-none d-lg-block"},me={class:"nav-item me-8 border-bottom border-bottom-lg-0"},pe={class:"nav-item me-8 border-bottom border-bottom-lg-0"},fe={class:"nav-item me-8 border-bottom border-bottom-lg-0"},_e={class:"nav-item me-8"},ge={class:"d-none d-lg-flex align-items-center ms-auto"},be=D(()=>t("span",{class:"material-symbols-outlined hover-text-secondary-200"}," search ",-1)),ve=[be],Ce={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"},ye={class:"visually-hidden"},Se={class:"d-none d-md-block"},we={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"},Ee={class:"visually-hidden"};function Ae(e,s,h,y,r,l){const d=O("RouterLink"),i=O("CartListOffcanvas");return u(),m(R,null,[t("header",{class:A(["header",r.headerClass]),ref:"header"},[t("nav",te,[t("div",ee,[t("h1",se,[g(d,{to:"/",class:"logo"},{default:C(()=>[p(" 森海 Forest Sea Patisserie ")]),_:1})]),t("div",oe,[t("button",{class:"bg-transparent border-0 me-6 text-white d-flex",type:"button",onClick:s[0]||(s[0]=o=>r.isInputSearchPhoneShow=!r.isInputSearchPhoneShow)},le),t("button",{class:"bg-transparent border-0 me-6 text-white d-flex position-relative",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight",onClick:s[1]||(s[1]=(...o)=>e.getCarts&&e.getCarts(...o))},[t("span",{class:A(["material-symbols-outlined hover-text-secondary-200",{"material-fill":e.cart.carts.length}])}," shopping_cart ",2),k(t("span",ne,[p(_(e.cart.carts.length)+" ",1),ie],512),[[P,!r.isCartEmpty]])])]),t("button",{class:"navbar-toggler border-0 rounded-0",type:"button",onClick:s[2]||(s[2]=(...o)=>l.toggleCollapse&&l.toggleCollapse(...o))},ce),t("div",de,[t("ul",he,[t("li",ue,[g(d,{to:"/",class:"p-2","exact-active-class":"link-active"},{default:C(()=>[p("首頁")]),_:1})]),t("li",me,[g(d,{to:"/products",class:"py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7","exact-active-class":"link-active"},{default:C(()=>[p("商品一覽")]),_:1})]),t("li",pe,[g(d,{to:"/news",class:"py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7","exact-active-class":"link-active"},{default:C(()=>[p("最新消息")]),_:1})]),t("li",fe,[g(d,{to:"/faq",class:"py-6 p-lg-2 d-block d-lg-inline fs-5 fs-lg-7","exact-active-class":"link-active"},{default:C(()=>[p("常見問題")]),_:1})]),t("li",_e,[g(d,{to:"/favorite",class:"py-6 p-lg-2 d-block d-lg-none fs-5 fs-lg-7","exact-active-class":"link-active"},{default:C(()=>[p("我的最愛")]),_:1})])])],512),t("ul",ge,[t("li",null,[t("form",{class:"d-flex align-items-center position-relative",onSubmit:s[5]||(s[5]=B((...o)=>l.searchProduct&&l.searchProduct(...o),["prevent"]))},[h.isMobile?ut("",!0):k((u(),m("input",{key:0,class:A([{"d-none":!r.isInputSearchShow},"form-control me-2 py-2 px-4 rounded-1 search-input-pc"]),type:"text",ref:"btnSearch",placeholder:"找甜點","aria-label":"Search","onUpdate:modelValue":s[3]||(s[3]=o=>r.searchTerm=o)},null,2)),[[j,r.searchTerm,void 0,{lazy:!0}]]),t("button",{class:"bg-transparent border-0 me-6 text-white d-flex",type:"button",onClick:s[4]||(s[4]=o=>r.isInputSearchShow=!r.isInputSearchShow)},ve)],32)]),t("li",null,[t("button",{class:"bg-transparent border-0 me-6 text-white d-flex position-relative",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight",onClick:s[6]||(s[6]=(...o)=>e.getCarts&&e.getCarts(...o))},[t("span",{class:A(["material-symbols-outlined hover-text-secondary-200",{"material-fill":e.cart.carts.length}])}," shopping_cart ",2),k(t("span",Ce,[p(_(e.cart.carts.length)+" ",1),t("span",ye," 購物車產品數:"+_(e.cart.carts.length),1)],512),[[P,!r.isCartEmpty]])])]),t("li",Se,[g(d,{to:"/favorite",class:"bg-transparent text-white d-flex position-relative"},{default:C(()=>[t("span",{class:A(["material-symbols-outlined hover-text-secondary-200",{"material-fill":e.favorites.length}])}," favorite ",2),k(t("span",we,[p(_(e.favorites.length)+" ",1),t("span",Ee," 我的最愛數量:"+_(e.favorites.length),1)],512),[[P,e.favorites.length]])]),_:1})])]),t("div",{class:A(["search-input-phone",{"d-none":!r.isInputSearchPhoneShow}])},[t("form",{class:"container position-relative",onSubmit:s[9]||(s[9]=B((...o)=>l.searchProduct&&l.searchProduct(...o),["prevent"]))},[k(t("input",{id:"searchInputPhone",type:"text",class:"container bg-transparent py-2 px-4 rounded-1 border-white border-opacity-50 text-white text-opacity-80",placeholder:"找甜點","onUpdate:modelValue":s[7]||(s[7]=o=>r.searchTerm=o)},null,512),[[j,r.searchTerm,void 0,{lazy:!0}]]),t("label",{for:"searchInputPhone",class:"text-white fw-bold",onClick:s[8]||(s[8]=(...o)=>l.searchProduct&&l.searchProduct(...o))}," 搜尋 ")],32)],2)])])],2),g(i)],64)}const Pe=V(Xt,[["render",Ae],["__scopeId","data-v-22fccd82"]]);export{Pe as F};
