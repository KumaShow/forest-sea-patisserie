import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 前台路由
  {
    path: "/",
    component: () => import("@/views/frontend/FrontViewLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/frontend/HomeView.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () => import("@/views/frontend/ProductsView.vue"),
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              link: "home",
            },
            {
              name: "產品一覽",
            },
          ],
        },
      },
      {
        path: "product/:id",
        name: "product",
        component: () => import("@/views/frontend/ProductView.vue"),
        // 動態傳遞產品 id
        props: (route) => {
          return {
            id: route.params.id,
          };
        },
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              link: "home",
            },
            {
              name: "產品一覽",
              link: "products",
            },
            // {
            //   name: "單一產品",
            // },
          ],
        },
      },
      {
        path: "news",
        name: "news",
        component: () => import("@/views/frontend/NewsView.vue"),
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              link: "home",
            },
            {
              name: "最新消息",
            },
          ],
        },
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/frontend/AboutView.vue"),
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              link: "home",
            },
            {
              name: "關於我們",
            },
          ],
        },
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/views/frontend/QuestionView.vue"),
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              link: "home",
            },
            {
              name: "常見問題",
            },
          ],
        },
      },
      {
        path: "search",
        name: "search",
        component: () => import("@/views/frontend/SearchProductsView.vue"),
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              link: "home",
            },
            {
              name: "搜尋產品",
            },
          ],
        },
      },
      {
        path: "favorite",
        name: "favorite",
        component: () => import("@/views/frontend/FavoriteView.vue"),
        meta: {
          breadcrumb: [
            {
              name: "首頁",
              link: "home",
            },
            {
              name: "我的最愛",
            },
          ],
        },
      },
      {
        path: "checkOrder",
        name: "checkOrder",
        component: () => import("@/views/frontend/CheckOrderView.vue"),
      },
      {
        path: "checkPayment/:id",
        name: "checkPayment",
        component: () => import("@/views/frontend/CheckPaymentView.vue"),
        props: (route) => {
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: "checkOrderCompleted",
        name: "checkOrderCompleted",
        component: () => import("@/views/frontend/CheckOrderCompletedView.vue"),
      },
    ],
  },
  // 後台路由
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/admin/DashboardView.vue"),
    children: [
      {
        path: "products",
        name: "adminProducts",
        component: () => import("@/views/admin/AdminProductsView.vue"),
      },
      {
        path: "orders",
        name: "adminOrders",
        component: () => import("@/views/admin/AdminOrdersView.vue"),
      },
      {
        path: "news",
        name: "adminNews",
        component: () => import("@/views/admin/AdminArticlesView.vue"),
      },
      {
        path: "coupon",
        name: "adminCoupon",
        component: () => import("@/views/admin/AdminCouponsView.vue"),
      },
    ],
  },
  // 登入
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/frontend/LoginView.vue"),
  },
  // 404
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/frontend/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // linkActiveClass: "active",
});

// 跳頁回頂端
router.afterEach(() => {
  window.scrollTo(0, 0);
});

// router.beforeEach((to, from) => {
// const isInternalNavigation =
//   fromPath.startsWith(toPath) || toPath.startsWith(fromPath);
// if (!isInternalNavigation) {
//   // 如果不是页面内部路由切换，则取消导航
//   console.log("不允許");
//   console.log("from:", fromPath);
//   console.log("to:", toPath);
//   next({ name: "home" });
// } else {
//   // 如果是页面内部路由切换，则允许导航
//   console.log("允許");
//   next();
// }
// });

export default router;
