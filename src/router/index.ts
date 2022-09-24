import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/main",
      name: "main",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MainView.vue"),
      children: [
        {
          path: "session",
          name: "session",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/SessionListView.vue"),
        },
        {
          path: "friends",
          name: "friends",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/FriendListView.vue"),
        },
        {
          path: "search",
          name: "search",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/SearchListView.vue"),
        },
        {
          path: "setting",
          name: "setting",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/SettingView.vue"),
        },
      ],
    },
    {
      path: "/singleChat",
      name: "singleChat",
      component: () => import("../views/chat/SingleChatView.vue"),
    },
  ],
});

export default router;
