<template>
  <q-header class="bg-secondary" elevated reveal>
    <q-toolbar class="row full-height">
      <div class="col-3 text-left">
        <q-btn :to="{ name: 'blog' }" color="secondary" unelevated>Blog</q-btn>
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
        <audio src="../src/assets/audios/theme.mp3" loop></audio>
        <q-btn
            @click="toggleAudio()"
            icon="fab fa-soundcloud"
            :class="audio_playing ? 'icon-sound' : 'icon-sound icon-sound-mute'"
            round
            flat
        />
        <template v-if="userStore.user.id">
          <q-btn-dropdown
            :label="userStore.user.username"
            color="secondary"
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
          <q-btn :to="{ name: 'login' }" color="secondary" unelevated
            >Connexion</q-btn
          >
          <q-btn :to="{ name: 'register' }" color="secondary" unelevated
            >Inscription</q-btn
          >
        </template>
      </div>
    </q-toolbar>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/svg-with-js.min.css" integrity="sha512-T22AGZA32A7BJVwM85+3QTgGxP7lSHb88UwE3b19YtWs0mw6x27Pw5ea/60BQkcKO4vzzsXW230pxPdw6TthGQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </q-header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import router from "@/router";
import { ref } from "vue";

import { useQuasar } from "quasar";
import { useUserStore } from "@/stores/user";

const $q = useQuasar();
const userStore = useUserStore();

const audio_playing = ref<Boolean>(false);

async function logout() {
  try {
    $q.notify({
      message: `À très bientôt ${userStore.user.username} !`,
      type: "positive",
    });

    await userStore.logout();
    router.push({ name: "login" });
  } catch (error: any) {
    $q.notify({
      message: error || "Une erreur est survenu lors de la déconnexion.",
      type: "negative",
    });
  }
}

function toggleAudio() {
  const audio = document.getElementsByTagName("audio")[0];
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  this.audio_playing = !audio.paused;
}

</script>

<style scoped lang="scss">
.q-header {
  height: 80px;
}
</style>
