<template>
  <q-page padding class="text-center">
    <q-card>
      <q-card-section>
        <h2>Les créatures marines des Jeux Animal Crossing</h2>
      </q-card-section>
      <q-card-section>
        <p>
          Avec la mise à jour 1.3.0 d’Animal Crossing New Horizons, Nintendo a
          ajouté la nage et la plongée. Mais on y retrouve également de
          nouvelles prises à réaliser avec les créatures marines qui s’ajoutent
          donc au bébêtopédie. Voici tout ce qu’il faut savoir sur leur capture
          et la liste complète des 40 créatures marines.
        </p>
      </q-card-section>
    </q-card>

    <section id="section-list">
      <SeaCreatureCard
        v-for="seaCreature in seaCreatures"
        :key="seaCreature.id"
        :id="seaCreature.id"
        :name="seaCreature.name"
        :image="seaCreature.image_url"
      />
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

import SeaCreatureCard from "@/components/Cards/SeaCreature.vue";

import { useQuasar } from "quasar";
import { useSeaCreaturesStore, type SeaCreature } from "@/stores/seaCreatures";

const $q = useQuasar();
const seaCreaturesStore = useSeaCreaturesStore();

const seaCreatures = ref<SeaCreature[]>([]);

onBeforeMount(async () => {
  try {
    seaCreatures.value = await seaCreaturesStore.getSeaCreatures();
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
