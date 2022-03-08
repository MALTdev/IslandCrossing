import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

// Auth
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Profile from "@/views/Auth/Profile.vue";

// Blog
import Blog from "@/views/Blog/Blog.vue";
import BlogPost from "@/views/Blog/BlogPost.vue";

// Villagers
import Villagers from "@/views/Villagers/Villagers.vue";
import Villager from "@/views/Villagers/Villager.vue";

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
    {
      path: "/villagers",
      name: "villagers",
      component: Villagers,
    },
    {
      path: "/villagers/:id",
      name: "villager",
      component: Villager,
    },
    {
      path: "/characters",
      name: "characters",
      component: Home,
    },
    {
      path: "/locations",
      name: "locations",
      component: Home,
    },
    {
      path: "/musics",
      name: "musics",
      component: Home,
    },
    {
      path: "/bugs",
      name: "bugs",
      component: Home,
    },
    {
      path: "/fishes",
      name: "fishes",
      component: Home,
    },
    {
      path: "/creatures",
      name: "creatures",
      component: Home,
    },
    {
      path: "/fossils",
      name: "fossils",
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost,
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
