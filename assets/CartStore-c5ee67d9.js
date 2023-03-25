import{u as d,x as o}from"./index-4827bd10.js";import{S as n}from"./sweetalert2.all-55ad4b37.js";import{a as u,u as p}from"./ToastMessageStore-265c6617.js";const{VITE_API:r,VITE_API_PATH:i}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"benson-vue3",BASE_URL:"/forest-sea-patisserie/",MODE:"production",DEV:!1,PROD:!0},{loadingState:c}=u(),{pushMessage:s}=p(),m=d("cartStore",{state:()=>({cart:{carts:[]}}),actions:{getCarts(){const t=`${r}/api/${i}/cart`;o.get(t).then(e=>{this.cart=e.data.data,c(!1)}).catch(e=>{c(!1),s({style:"danger",title:"取得購物車資料失敗",content:`${e.response.data.message}`})})},clearAllCarts(){const t=`${r}/api/${i}/carts`;o.delete(t).then(()=>{n.fire({position:"center",icon:"success",title:"購物車已清空",showConfirmButton:!1,timer:1500}),this.getCarts()}).catch(e=>{s({style:"danger",title:"刪除產品失敗，請稍後再試",content:`${e.response.data.message}`})})},deleteCartItem(t){const e=`${r}/api/${i}/cart/${t}`;o.delete(e).then(()=>{this.getCarts(),n.fire({position:"center",icon:"success",title:"已刪除",showConfirmButton:!1,allowOutsideClick:!1,timer:1500})}).catch(a=>{s({style:"danger",title:"刪除產品失敗，請稍後再試",content:`${a.response.data.message}`})})},updateCartItem(t){const e=`${r}/api/${i}/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty};t.qty===0?this.deleteCartItem(t.id):t.qty>=100?(a.qty=100,n.fire({position:"center",icon:"warning",title:"商品數量不得大於 100 個",showConfirmButton:!0,timer:2e3})):(this.loadingItem=t.id,o.put(e,{data:a}).then(()=>{this.getCarts(),s({style:"success",title:"產品數量更新成功"}),this.loadingItem=""}).catch(l=>{s({style:"danger",title:"產品數量更新失敗",content:`${l.response.data.message}`})}))}}});export{m as u};
