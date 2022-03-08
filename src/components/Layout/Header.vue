<template>
  <q-header class="bg-primary" elevated reveal>
    <q-toolbar class="row full-height">
      <div class="col-3 text-left">
        <q-btn :to="{ name: 'blog' }" color="primary" unelevated>Blog</q-btn>
      </div>

      <div class="col-6 text-center">
        <RouterLink to="/" custom v-slot="{ navigate }">
          <div @click="navigate" class="cursor-pointer">
            <q-avatar>
              <img
                src="https://cdn.pixabay.com/photo/2020/07/27/10/33/animal-crossing-leaf-5442035_1280.png"
              />
            </q-avatar>
            <span class="text-h5 q-mx-lg">Island Crossing</span>
            <q-avatar>
              <img
                src="https://cdn.pixabay.com/photo/2020/07/27/10/33/animal-crossing-leaf-5442035_1280.png"
              />
            </q-avatar>
          </div>
        </RouterLink>
      </div>

      <div class="col-3 text-right">
        <template v-if="userStore.user.id">
          <q-btn-dropdown
            :label="userStore.user.username"
            color="primary"
            unelevated
          >
            <q-list>
              <q-item :to="{ name: 'profile' }" clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Mon profil</q-item-label>
                </q-item-section>
              </q-item>
              <q-item @click="logout" clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Déconnexion</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </template>
        <template v-else>
          <q-btn :to="{ name: 'login' }" color="primary" unelevated
            >Connexion</q-btn
          >
          <q-btn :to="{ name: 'register' }" color="primary" unelevated
            >Inscription</q-btn
          >
        </template>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import router from "@/router";

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

async function logout() {
  await userStore.logout();
  router.push({ name: "login" });
}
</script>

<style scoped lang="scss">
.q-header {
  height: 80px;
}
</style>
