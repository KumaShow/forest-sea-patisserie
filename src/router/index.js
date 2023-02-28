import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/frontend/FrontViewLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/frontend/HomeView.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () => import("@/views/frontend/ProductsView.vue"),
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
      },
      {
        path: "news",
        name: "news",
        component: () => import("@/views/frontend/NewsView.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/frontend/AboutView.vue"),
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/views/frontend/QuestionView.vue"),
      },
      {
        path: "favorite",
        name: "favorite",
        component: () => import("@/views/frontend/FavoriteView.vue"),
      },
    ],
  },
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
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/frontend/LoginView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/frontend/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

// 跳頁回頂端
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
