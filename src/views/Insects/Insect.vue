<template>
  <q-page padding class="text-center" v-if="insect">
    <h1>Insecte : {{ insect.name }}</h1>

    <section id="section-insect-detail">
      <q-img class="insect-image" :src="insect.image_url" fit="scale-down" />
    </section>
    <p>
      <span class="test-bold">Phrase lors de la capture :</span>
      {{ insect.catchphrase }}
    </p>
    <p>
      <span class="test-bold">Lieu(x) pour l'attraper :</span>
      {{ insect.location }}
    </p>
    <p>
      <span class="test-bold">Prix de vente :</span>
      {{ insect.sell_nook }} clochettes
    </p>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

import { useQuasar } from "quasar";
import { useInsectsStore, type Insect } from "@/stores/insects";

const route = useRoute();

const $q = useQuasar();
const insectsStore = useInsectsStore();

const insect = ref<Insect>({});

onBeforeMount(async () => {
  try {
    const id = parseInt(route.params.id as string);
    insect.value = await insectsStore.getInsect(id);
  } catch (error) {
    $q.notify({
      message: "Une erreur est survenu. Veuillez conctacter un administrateur.",
      type: "negative",
    });
  }
});
</script>

<style scoped>
@import "@/assets/css/wiki/insect.css";
</style>

<style lang="scss" scoped>
@import "@/assets/scss/wiki/insect.scss";
</style>
