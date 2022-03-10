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

// Insects
import Insects from "@/views/Insects/Insects.vue";
import Insect from "@/views/Insects/Insect.vue";

// Fishes
import Fishes from "@/views/Fishes/Fishes.vue";
import Fish from "@/views/Fishes/Fish.vue";

// Creatures
import SeaCreatures from "@/views/SeaCreatures/SeaCreatures.vue";
import SeaCreature from "@/views/SeaCreatures/SeaCreature.vue";

// Fossils
import Fossils from "@/views/Fossils/Fossils.vue";
import Fossil from "@/views/Fossils/Fossil.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/villagers/:id",
      name: "villager",
      component: Villager,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/characters",
      name: "characters",
      component: Characters,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/characters/:id",
      name: "character",
      component: Character,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/musics",
      name: "musics",
      component: Musics,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/musics/:id",
      name: "music",
      component: Music,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/insects",
      name: "insects",
      component: Insects,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/insects/:id",
      name: "insect",
      component: Insect,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/fishes",
      name: "fishes",
      component: Fishes,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/fishes/:id",
      name: "fish",
      component: Fish,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/sea-creatures",
      name: "sea-creatures",
      component: SeaCreatures,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/sea-creatures/:id",
      name: "sea-creature",
      component: SeaCreature,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/fossils",
      name: "fossils",
      component: Fossils,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/fossils/:id",
      name: "fossil",
      component: Fossil,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile/update",
      name: "profile-update",
      component: ProfileUpdate,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost,
      meta: {
        requiresAuth: true,
      },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;
