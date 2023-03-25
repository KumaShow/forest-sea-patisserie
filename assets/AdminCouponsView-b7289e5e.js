import{M as k}from"./modal-9cb29e92.js";import{S as x}from"./sweetalert2.all-55ad4b37.js";import{_ as v,r as m,o as d,c,a as e,b as p,h as T,n as M,e as y,v as P,P as V,g as h,t as f,i as $,F as w,j as A,L as S,d as D}from"./index-4827bd10.js";import{T as N}from"./ThePagination-4bea5187.js";import{a as U,u as E}from"./ToastMessageStore-265c6617.js";import"./base-component-1450a5e0.js";const I={props:{coupon:{type:Object,default(){return{}}},createDate:{type:Function},isNew:{type:Boolean,default:!0}},emits:["update-coupon"],data(){return{modal:{},tempCoupon:{},due_date:"",todayUnix:"",checkDate:!0}},watch:{coupon(){this.tempCoupon=this.coupon,this.isNew&&(this.tempCoupon.is_enabled=1);const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3),this.isNew&&(this.tempCoupon.due_date<this.todayUnix?(x.fire({position:"center",icon:"error",title:"到期日必需大於今天",showConfirmButton:!0}),this.checkDate=!1):this.checkDate=!0)}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},getTodayUnixTime(){const[s]=new Date(Date.now()).toISOString().split("T");this.todayUnix=Math.floor(new Date(s)/1e3)},checkPercent(){(this.tempCoupon.percent>100||this.tempCoupon.percent<0)&&(this.tempCoupon.percent>100?this.tempCoupon.percent=100:this.tempCoupon.percent<0&&(this.tempCoupon.percent=0))}},mounted(){this.modal=new k(this.$refs.modal),this.getTodayUnixTime()}},B={class:"modal fade",ref:"modal",tabindex:"-1"},F={class:"modal-dialog"},O={class:"modal-content"},L={class:"modal-header bg-dark text-light"},j={key:0},q={key:1},G=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),H={class:"modal-body"},R={class:"container"},Y={class:"mb-3"},z=e("label",{for:"couponTitle",class:"form-label"},[h(" 標題 "),e("span",{class:"text-danger"},"*")],-1),J={class:"mb-3"},K=e("label",{for:"couponCode",class:"form-label"},[h(" 優惠碼 "),e("span",{class:"text-danger"},"*")],-1),Q={class:"mb-3"},W=e("label",{for:"couponDueDate",class:"form-label"},[h("到期日 "),e("span",{class:"text-danger"},"*")],-1),X={class:"mb-3"},Z=e("label",{for:"couponPercent",class:"form-label"},[h(" 折扣百分比 "),e("span",{class:"text-danger"},"*")],-1),ee={class:"mb-3 form-check"},te=e("label",{class:"form-check-label",for:"couponActive"},"是否啟用",-1),oe={class:"modal-footer"},se=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),ne=["disabled"],ae={key:0},le={key:1};function ie(s,t,n,u,o,l){const r=m("Field"),_=m("ErrorMessage"),C=m("Form");return d(),c("div",B,[e("div",F,[e("div",O,[e("div",L,[n.isNew?(d(),c("span",j,"新增優惠券")):(d(),c("span",q,"修改優惠券")),G]),p(C,{ref:"form",class:"",onSubmit:t[5]||(t[5]=a=>s.$emit("update-coupon",o.tempCoupon))},{default:T(({errors:a})=>[e("div",H,[e("div",R,[e("div",Y,[z,p(r,{class:M([{"is-invalid":a.couponTitle},"form-control"]),id:"couponTitle",name:"couponTitle",placeholder:"請輸入標題",type:"text",rules:"required",modelValue:o.tempCoupon.title,"onUpdate:modelValue":t[0]||(t[0]=i=>o.tempCoupon.title=i)},null,8,["class","modelValue"]),p(_,{name:"couponTitle",class:"invalid-feedback"})]),e("div",J,[K,p(r,{class:M([{"is-invalid":a.couponCode},"form-control"]),id:"couponCode",name:"couponCode",placeholder:"請輸入優惠碼",type:"text",rules:"required",modelValue:o.tempCoupon.code,"onUpdate:modelValue":t[1]||(t[1]=i=>o.tempCoupon.code=i)},null,8,["class","modelValue"]),p(_,{name:"couponCode",class:"invalid-feedback"})]),e("div",Q,[W,y(e("input",{type:"date",class:"form-control",id:"couponDueDate","onUpdate:modelValue":t[2]||(t[2]=i=>o.due_date=i)},null,512),[[P,o.due_date]])]),e("div",X,[Z,p(r,{class:M([{"is-invalid":a.couponPercent},"form-control"]),id:"couponPercent",name:"couponPercent",placeholder:"請輸入折扣百分比",type:"number",min:"0",max:"100",rules:"min_value:0|max_value:100|required",modelValue:o.tempCoupon.percent,"onUpdate:modelValue":t[3]||(t[3]=i=>o.tempCoupon.percent=i),modelModifiers:{number:!0},onBlur:l.checkPercent},null,8,["class","modelValue","onBlur"]),p(_,{name:"couponPercent",class:"invalid-feedback"})]),e("div",ee,[y(e("input",{"false-value":0,"true-value":1,type:"checkbox",class:"form-check-input",id:"couponActive","onUpdate:modelValue":t[4]||(t[4]=i=>o.tempCoupon.is_enabled=i)},null,512),[[V,o.tempCoupon.is_enabled,void 0,{number:!0}]]),te])])]),e("div",oe,[se,e("button",{type:"submit",class:"btn btn-danger",disabled:!o.checkDate},[n.isNew?(d(),c("span",ae,"新增優惠券")):(d(),c("span",le,"修改優惠券"))],8,ne)])]),_:1},512)])])],512)}const de=v(I,[["render",ie]]),ce={props:{coupon:{type:Object,default(){return{}}}},emits:["deleteCoupon"],data(){return{modal:{},tempCoupon:{}}},watch:{coupon(){this.tempCoupon=this.coupon}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},createDate(s){const t=new Date(s*1e3),n=t.getFullYear(),u=t.getMonth()+1>=10?t.getMonth()+1:`0${t.getMonth()+1}`,o=t.getDate()>=10?t.getDate():`0${t.getDate()}`;return`${n}/${u}/${o}`}},mounted(){this.modal=new k(this.$refs.modal)}},ue={class:"modal",ref:"modal",tabindex:"-1"},pe={class:"modal-dialog"},re={class:"modal-content"},me=e("div",{class:"modal-header bg-danger text-white"},[e("h2",null,"刪除優惠券"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),he={class:"modal-body"},_e={class:"text-danger"},be={class:"modal-footer"},ge=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function fe(s,t,n,u,o,l){return d(),c("div",ue,[e("div",pe,[e("div",re,[me,e("div",he,[h(" 是否刪除 "),e("strong",_e,f(o.tempCoupon.title),1),h(" 優惠券(刪除後將無法恢復)。 ")]),e("div",be,[ge,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=r=>s.$emit("deleteCoupon",o.tempCoupon.id))}," 確認刪除 ")])])])],512)}const Ce=v(ce,[["render",fe]]),{VITE_API:b,VITE_API_PATH:g}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"benson-vue3",BASE_URL:"/forest-sea-patisserie/",MODE:"production",DEV:!1,PROD:!0},Me={components:{AdminCouponModal:de,AdminCouponDeleteModal:Ce,ThePagination:N},data(){return{coupons:[],tempCoupon:{},pagination:{},currentPage:1,messages:[],isNew:!1}},methods:{...$(U,["loadingState"]),...$(E,["pushMessage"]),getCoupons(s=1){this.currentPage=s;const t=`${b}/api/${g}/admin/coupons?page=${s}`;this.loadingState(!0),this.$http.get(t).then(n=>{this.coupons=n.data.coupons,this.messages=n.data.messages,this.pagination=n.data.pagination,this.loadingState(!1)}).catch(n=>{this.pushMessage({style:"danger",title:"取得優惠券資料失敗",content:`${n.response.data.message}`}),this.loadingState(!1)})},updateCoupon(s){let t=`${b}/api/${g}/admin/coupon/${s.id}`,n="put",u=this.tempCoupon;this.isNew&&(t=`${b}/api/${g}/admin/coupon`,n="post",u=s),this.$http[n](t,{data:u}).then(()=>{this.getCoupons(this.currentPage),this.$refs.couponModal.closeModal(),this.pushMessage({title:`${n==="put"?"更新":"新增"}成功`})}).catch(o=>{this.pushMessage({style:"danger",title:`${n==="put"?"更新":"新增"}失敗`,content:`${o.response.data.message}`})})},deleteCoupon(s){const t=`${b}/api/${g}/admin/coupon/${s}`;this.$http.delete(t).then(()=>{this.getCoupons(this.currentPage),this.$refs.deleteCouponModal.closeModal(),this.pushMessage({title:"已刪除優惠券"})}).catch(n=>{this.pushMessage({style:"danger",title:"刪除失敗",content:`${n.response.data.message}`})})},openModal(s,t){s==="new"?(this.isNew=!0,this.tempCoupon={due_date:new Date().getTime()/1e3},this.$refs.couponModal.openModal()):s==="edit"?(this.isNew=!1,this.tempCoupon={...t},this.$refs.couponModal.openModal()):(this.tempCoupon={...t},this.$refs.deleteCouponModal.openModal())},createDate(s){const t=new Date(s*1e3),n=t.getFullYear(),u=t.getMonth()+1>=10?t.getMonth()+1:`0${t.getMonth()+1}`,o=t.getDate()>=10?t.getDate():`0${t.getDate()}`;return`${n}/${u}/${o}`}},mounted(){this.getCoupons()}},ve={class:"container"},ye=e("h2",{class:"text-center my-3"},"優惠券管理",-1),$e={class:"text-end"},we={class:"table mt-4"},De=e("thead",null,[e("tr",null,[e("th",{width:"30%"},"名稱"),e("th",{width:"20%"},"折扣百分比"),e("th",{width:"20%"},"到期日"),e("th",{width:"20%"},"是否啟用"),e("th",{width:"20%"},"操作")])],-1),ke={scope:"row"},xe={key:0,class:"material-symbols-outlined text-success"},Te={class:"btn-group"},Pe=["onClick"],Ve=["onClick"];function Ae(s,t,n,u,o,l){const r=m("ThePagination"),_=m("AdminCouponModal"),C=m("AdminCouponDeleteModal");return d(),c(w,null,[e("div",ve,[ye,e("div",$e,[e("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=a=>l.openModal("new"))}," 新增優惠券 ")]),e("table",we,[De,e("tbody",null,[(d(!0),c(w,null,A(o.coupons,a=>(d(),c("tr",{key:a.id},[e("th",ke,f(a.title),1),e("td",null,f(a.percent)+"%",1),e("td",null,f(l.createDate(a.due_date)),1),e("td",null,[a.is_enabled===1?(d(),c("span",xe," check_circle ")):D("",!0)]),e("td",null,[e("div",Te,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:i=>l.openModal("edit",a)}," 編輯 ",8,Pe),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:i=>l.openModal("delete",a)}," 刪除 ",8,Ve)])])]))),128))])])]),o.pagination.total_pages>1?(d(),S(r,{key:0,pages:o.pagination,onGetData:l.getCoupons},null,8,["pages","onGetData"])):D("",!0),p(_,{ref:"couponModal",coupon:o.tempCoupon,"is-new":o.isNew,onUpdateCoupon:l.updateCoupon,"create-date":l.createDate},null,8,["coupon","is-new","onUpdateCoupon","create-date"]),p(C,{ref:"deleteCouponModal",coupon:o.tempCoupon,onDeleteCoupon:l.deleteCoupon},null,8,["coupon","onDeleteCoupon"])],64)}const Fe=v(Me,[["render",Ae]]);export{Fe as default};
