<template>
  <q-page padding class="text-center" v-if="music">
    <section id="section-music">
      <section id="section-music-image">
        <h1>{{ music.name }}</h1>
        <div id="music-image-and-audio">
          <q-img :src="music.image_url" class="music-image" fit="cover" />
          <audio class="audiofile" controls>
            <source :src="music.music_url" />
          </audio>
        </div>
      </section>

      <section id="music-more-info">
        <p>Prix d'achat : {{ music.price }} clochettes</p>
        <p>Prix de vente : {{ music.sell_price }} clochettes</p>
      </section>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

import { useQuasar } from "quasar";
import { useMusicsStore, type Music } from "@/stores/musics";

const route = useRoute();

const $q = useQuasar();
const musicsStore = useMusicsStore();

const music = ref<Music>({});

onBeforeMount(async () => {
  try {
    const id = parseInt(route.params.id as string);
    music.value = await musicsStore.getMusic(id);
  } catch (error) {
    $q.notify({
      message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
      type: "negative",
    });
  }
});
</script>

<style scoped>
@import "@/assets/css/wiki/music.css";
</style>

<style lang="scss" scoped>
@import "@/assets/scss/wiki/music.scss";
</style>
