import{u as r}from"./ToastMessageStore-265c6617.js";import{m as i,i as d,_,o as e,c as t,F as u,j as m,n as c,a,t as l,d as p}from"./index-4827bd10.js";const h={computed:{...i(r,["messages"])},methods:{...d(r,["clearToast"])}},v={class:"toast-container p-3",style:{"z-index":"1500"}},b={class:"toast-header"},T={class:"me-auto"},g=["onClick"],y={key:0,class:"toast-body"};function $(n,f,k,C,x,B){return e(),t("div",v,[(e(!0),t(u,null,m(n.messages,(s,o)=>(e(),t("div",{class:c(["toast show",`toast${o}`]),role:"alert","aria-live":"assertive","aria-atomic":"true",key:o},[a("div",b,[a("span",{class:c([`bg-${s.style}`,"rounded p-2 me-2 d-inline-block"])},null,2),a("strong",T,l(s.title),1),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:M=>n.clearToast(o)},null,8,g)]),s.content?(e(),t("div",y,l(s.content),1)):p("",!0)],2))),128))])}const F=_(h,[["render",$]]);export{F as T};
