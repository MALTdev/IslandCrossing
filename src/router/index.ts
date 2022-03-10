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
      path: "/characters/:id",
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
      path: "/insects",
      name: "insects",
      component: Insects,
    },
    {
      path: "/insects/:id",
      name: "insect",
      component: Insect,
    },
    {
      path: "/fishes",
      name: "fishes",
      component: Fishes,
    },
    {
      path: "/fishes/:id",
      name: "fish",
      component: Fish,
    },
    {
      path: "/sea-creatures",
      name: "sea-creatures",
      component: SeaCreatures,
    },
    {
      path: "/sea-creatures/:id",
      name: "sea-creature",
      component: SeaCreature,
    },
    {
      path: "/fossils",
      name: "fossils",
      component: Fossils,
    },
    {
      path: "/fossils/:id",
      name: "fossil",
      component: Fossil,
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;
