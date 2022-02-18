import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

// Auth
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // {
    //   path: "/{url}",
    //   name: "{name}",
    //   component: () => import("@/views/{View}.vue"),
    // },
  ],
});

export default router;
