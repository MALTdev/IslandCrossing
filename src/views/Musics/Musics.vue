<template>
  <q-page padding class="text-center">
    <q-card>
      <q-card-section>
        <h2>Les musiques des Jeux Animal Crossing</h2>
      </q-card-section>
      <q-card-section>
        <p>
          Cette catégorie regroupe tous les musiques présentes dans les
          différents jeux animal crossing.
        </p>
      </q-card-section>
    </q-card>

    <section id="section-list" class="section-list-villagers">
      <MusicCard
        v-for="music in musics"
        :key="music.id"
        :id="music.id"
        :name="music.name"
        :image="music.image_url"
      />
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

import MusicCard from "@/components/Cards/Music.vue";

import { useQuasar } from "quasar";
import { useMusicsStore, type Music } from "@/stores/musics";

const $q = useQuasar();
const musicsStore = useMusicsStore();

const musics = ref<Music[]>([]);

onBeforeMount(async () => {
  try {
    musics.value = await musicsStore.getMusics();
  } catch (error) {
    $q.notify({
      message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
      type: "negative",
    });
  }
});
</script>

<style scoped>
@import "@/assets/css/wiki/listing.css";
</style>
