# 森海手作甜點
![](https://imgur.com/CHDbh18.png)

## 專案說明
以親戚開的甜點店為發想所製作的 SPA 網站，僅供練習使用無實際商業用途。

Demo : [https://kumashow.github.io/forest-sea-patisserie](https://kumashow.github.io/forest-sea-patisserie)

其他連結：[Wireframe](https://whimsical.com/vue-3-AzcKcb1DdLpVkKxDQTt6vg)、[UI 設計稿](https://www.figma.com/file/C6Oq3oQk6VvkhKxGdnLaXl/%E6%A3%AE%E6%B5%B7%E6%89%8B%E4%BD%9C%E7%94%9C%E9%BB%9E?node-id=0-1&t=IcSGzn4E2DshpOpK-0)

## 使用技術

* Vite 環境建置
* Vue 3 Options API
* Vue Router 建構路由
* Vue axios 串接 RESTful API 資料
* 元件拆分與使用
* 使用 Pinia 全局狀態管理
* 使用 ESLint + Prettier 統一程式碼結構
* 使用 Bootstrap 5 規劃響應式版型
* Vee-Validate 表單驗證
* V-Lazyload 圖片懶加載
* 詳細套件請看 package.json

## 網站功能

### 前台:

產品頁
  * 電商商品展示
  * 商品加入購物車
  * 加入最愛收藏

購物車
  * 購物車無商品時，顯示按鈕引導顧客前往購買
  * 刪除商品時，跳出提示 Modal 避免誤刪，並有設置簡單自定義提示動畫效果
  * 點擊前往結帳會跳轉到確認訂單內容頁面

登入、登出
  * 管理者可以登入後台管理
  
### 後台

管理網站
  * 新增、修改、刪除商品
  * 新增、修改、刪除優惠卷
  * 修改、刪除訂單
  * 新增、修改、刪除消息文章
