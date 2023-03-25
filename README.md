# 森海手作甜點
![](https://i.imgur.com/UctDcM2.png)
![](https://i.imgur.com/bcBAdG0.png)
## 專案說明
以親戚開的甜點店為發想所製作的 SPA 網站，僅供練習使用無實際商業用途。

Demo : [https://kumashow.github.io/forest-sea-patisserie](https://kumashow.github.io/forest-sea-patisserie)

其他連結：[Wireframe](https://whimsical.com/vue-3-AzcKcb1DdLpVkKxDQTt6vg)、[UI 設計稿](https://www.figma.com/file/C6Oq3oQk6VvkhKxGdnLaXl/%E6%A3%AE%E6%B5%B7%E6%89%8B%E4%BD%9C%E7%94%9C%E9%BB%9E?node-id=0-1&t=IcSGzn4E2DshpOpK-0)

## 使用技術

* Vite 環境建置
* Vue 3 Options API
* Vue Router 建構路由
* Vue Axios 串接 RESTful API 資料
* 元件拆分與使用
* 使用 Pinia 全局狀態管理
* 使用 ESLint + Prettier 統一程式碼結構
* 使用 Bootstrap 5 規劃響應式版型
* Vee-Validate 表單驗證
* V-Calendar 日期套件
* V-Lazyload 圖片懶加載
* C3.js 圖表
* 詳細套件請看 package.json

## 網站功能

### 前台:

產品頁
  * 電商商品展示
  * 商品加入購物車
  * 加入最愛收藏
  * 顧客可以搜尋商品

購物車
  * 購物車無商品時，顯示按鈕引導顧客前往購買
  * 刪除商品時，跳出提示 Modal 避免誤刪，並有設置簡單自定義提示動畫效果
  * 點擊前往結帳會跳轉到確認訂單內容頁面

最新消息
  * 顧客可以瀏覽最新消息文章

登入、登出
  * 管理者可以登入後台管理
  
### 後台

管理網站
  * 後台首頁可以觀看訂單營收狀況
  * 新增、修改、刪除商品
  * 新增、修改、刪除優惠卷
  * 修改、刪除訂單
  * 新增、修改、刪除消息文章

## 遇到的難題與解決方法
  
首頁的本月公休: 
  * 由於後台 API 並未提供相關的資源可以儲存公休資訊，所以使用文章 API + v-calendar 來製作此功能。
  * 實現的方式為，管理員可以從後台新增一篇公休文章，且可以勾選公休日期，並使用 Pinia 來跨元件使用日期資訊。
  
  ![](https://i.imgur.com/fQKWvM2.png)
  ![](https://i.imgur.com/dmqR5LI.png)

後台圖表:
  * 當圖表元件初始掛載後，可以生成初始 C3 圖表，並以 watch 監聽圖表資料來渲染圖表內容，
  但在切換畫面後因為 watch 對象並未改動，所以圖表重新 mounted 僅顯示初始資料。
  * 目前的解決方法是使用 setTimeout 將圖表更新移到佇列，等待後才執行 C3.load 更新圖表內容，
  以此來解決重新整理或跳轉畫面造成的圖表顯示問題。
