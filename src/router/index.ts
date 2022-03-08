import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

// Auth
import Login from "@/views/Auth/Login.vue";
import Register from "@/views/Auth/Register.vue";
import Profile from "@/views/Auth/Profile.vue";
import ProfileUpdate from "@/views/Auth/ProfileUpdate.vue";

// Blog
import Blog from "@/views/Blog/Blog.vue";
import BlogPost from "@/views/Blog/BlogPost.vue";

// Villagers
import Villagers from "@/views/Villagers/Villagers.vue";
import Villager from "@/views/Villagers/Villager.vue";

// Characters
import Characters from "@/views/Characters/Characters.vue";
import Character from "@/views/Characters/Character.vue";

// Musics
import Musics from "@/views/Musics/Musics.vue";
import Music from "@/views/Musics/Music.vue";

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
      component: Characters,
    },
    {
      path: "/character/:id",
      name: "character",
      component: Character,
    },
    {
      path: "/musics",
      name: "musics",
      component: Musics,
    },
    {
      path: "/musics/:id",
      name: "music",
      component: Music,
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
      path: "/profile/update",
      name: "profile-update",
      component: ProfileUpdate,
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
