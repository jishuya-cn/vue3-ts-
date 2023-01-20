import { createRouter, createWebHashHistory } from "vue-router"; // createWebHistory
// import HomeView from "../views/HomeView.vue";
export const constantRoutes = [
  {
    path: "/",
    name: "home", // 路由名称
    itemName: "首页",
    redirect: "/home",
    component: () => import("@/layout/index.vue"),
    meta: {
      locale: "menu.dashboard",
      requiresAuth: true,
      icon: "icon-shouye",
    },
    children: [
      {
        path: "/home",
        name: "homePage",
        itemName: "首页",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          locale: "menu.dashboard.workplace",
          requiresAuth: true,
          roles: ["admin"],
          hideInMenu: false,
        },
      },
    ],
  },
  {
    path: "/user",
    name: "user", // 路由名称
    itemName: "用户管理",
    component: () => import("@/layout/index.vue"),
    meta: {
      locale: "menu.dashboard",
      requiresAuth: true,
      icon: "icon-home",
    },
    children: [
      {
        path: "/user/userControl",
        name: "userControl",
        itemName: "用户管理",
        component: () => import("@/views/user/index.vue"),
        meta: {
          locale: "menu.dashboard.workplace",
          requiresAuth: true,
          roles: ["admin"],
          hideInMenu: false,
        },
      },
      {
        path: "/role/roleManagement",
        name: "roleManagement",
        itemName: "角色管理",
        component: () => import("@/views/user/role.vue"),
        meta: {
          locale: "menu.dashboard.workplace",
          requiresAuth: true,
          roles: ["admin"],
          hideInMenu: false,
        },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});
export default router;
